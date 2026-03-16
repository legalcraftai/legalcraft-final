// AUTO-LEARNING SYSTEM V3 — GLOBAL LEARNING
// Saves corrections to Vercel KV → improves ALL users globally
// 3+ votes = auto-verified → highest priority in AI prompt
const LEARNING = {
  save: async (data) => {
    const { draft_type, field, wrong_text, correct_text, context, device_id } = data;
    if (!draft_type || !correct_text) return { success:false, msg:"Missing required fields" };
    const key = `learn:${draft_type}:${Date.now()}`;
    const value = JSON.stringify({
      draft_type, field:field||"general",
      wrong_text:(wrong_text||"").slice(0,300),
      correct_text:(correct_text||"").slice(0,500),
      context:(context||"").slice(0,200),
      device_id:device_id||"anon",
      timestamp:new Date().toISOString(), votes:1, verified:false
    });
    try {
      if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        const r = await fetch(`${process.env.KV_REST_API_URL}/set/${encodeURIComponent(key)}`,{
          method:"POST",
          headers:{Authorization:`Bearer ${process.env.KV_REST_API_TOKEN}`,"Content-Type":"application/json"},
          body:JSON.stringify({value,ex:60*60*24*365*2})
        });
        if(!r.ok) throw new Error("KV write failed: "+r.status);
      }
      return { success:true, key, msg:"Correction saved! This will help improve results for all users." };
    } catch(e) {
      console.error("LEARNING.save error:",e.message);
      return { success:false, msg:"Could not save: "+e.message };
    }
  },

  upvote: async (key) => {
    try {
      if(!process.env.KV_REST_API_URL) return {success:false};
      const r = await fetch(`${process.env.KV_REST_API_URL}/get/${encodeURIComponent(key)}`,{
        headers:{Authorization:`Bearer ${process.env.KV_REST_API_TOKEN}`}
      });
      if(!r.ok) return {success:false};
      const {result} = await r.json();
      const d = JSON.parse(result);
      d.votes = (d.votes||1)+1;
      if(d.votes>=3) d.verified = true;
      await fetch(`${process.env.KV_REST_API_URL}/set/${encodeURIComponent(key)}`,{
        method:"POST",
        headers:{Authorization:`Bearer ${process.env.KV_REST_API_TOKEN}`,"Content-Type":"application/json"},
        body:JSON.stringify({value:JSON.stringify(d),ex:60*60*24*365*2})
      });
      return {success:true,votes:d.votes,verified:d.verified};
    } catch(e){return {success:false};}
  },

  get: async (draft_type, limit=10) => {
    try {
      if(!process.env.KV_REST_API_URL) return [];
      const scanR = await fetch(
        `${process.env.KV_REST_API_URL}/scan/0?match=${encodeURIComponent(`learn:${draft_type}:*`)}&count=50`,
        {headers:{Authorization:`Bearer ${process.env.KV_REST_API_TOKEN}`}}
      );
      if(!scanR.ok) return [];
      const {result} = await scanR.json();
      const keys = (result?.[1]||[]).slice(0,limit);
      if(!keys.length) return [];
      const items = await Promise.all(keys.map(async k=>{
        try {
          const r = await fetch(`${process.env.KV_REST_API_URL}/get/${encodeURIComponent(k)}`,{
            headers:{Authorization:`Bearer ${process.env.KV_REST_API_TOKEN}`}
          });
          if(!r.ok) return null;
          const {result:val} = await r.json();
          return JSON.parse(val);
        } catch{return null;}
      }));
      return items.filter(Boolean).sort((a,b)=>(b.votes||1)-(a.votes||1));
    } catch(e){console.error("LEARNING.get error:",e.message);return [];}
  },

  toContext: (corrections, draft_type) => {
    if(!corrections||!corrections.length) return "";
    const best = corrections.filter(c=>c.verified).length>0
      ? corrections.filter(c=>c.verified)
      : corrections;
    const lines = best.filter(c=>c.correct_text).slice(0,5).map(c=>{
      const field = c.field&&c.field!=="general" ? `[${c.field}] ` : "";
      const wrong = c.wrong_text ? ` (NOT: "${c.wrong_text.slice(0,60)}")` : "";
      return `• ${field}"${c.correct_text.slice(0,250)}"${wrong} [${c.votes||1} vote${(c.votes||1)>1?'s':''}${c.verified?' ✓':''}]`;
    });
    if(!lines.length) return "";
    return `\n\n📚 USER-VERIFIED IMPROVEMENTS FOR ${(draft_type||"").toUpperCase()} (MUST apply these corrections):\n${lines.join("\n")}\n`;
  },

  getAll: async (limit=100) => {
    try {
      if(!process.env.KV_REST_API_URL) return [];
      const scanR = await fetch(
        `${process.env.KV_REST_API_URL}/scan/0?match=${encodeURIComponent("learn:*")}&count=200`,
        {headers:{Authorization:`Bearer ${process.env.KV_REST_API_TOKEN}`}}
      );
      if(!scanR.ok) return [];
      const {result} = await scanR.json();
      const keys = (result?.[1]||[]).slice(0,limit);
      const items = await Promise.all(keys.map(async key=>{
        try {
          const r = await fetch(`${process.env.KV_REST_API_URL}/get/${encodeURIComponent(key)}`,{
            headers:{Authorization:`Bearer ${process.env.KV_REST_API_TOKEN}`}
          });
          if(!r.ok) return null;
          const {result:val} = await r.json();
          return {...JSON.parse(val), key};
        } catch{return null;}
      }));
      return items.filter(Boolean).sort((a,b)=>(b.votes||1)-(a.votes||1));
    } catch(e){return [];}
  },

  delete: async (key) => {
    try {
      if(!process.env.KV_REST_API_URL) return {success:false};
      await fetch(`${process.env.KV_REST_API_URL}/del/${encodeURIComponent(key)}`,{
        method:"POST",
        headers:{Authorization:`Bearer ${process.env.KV_REST_API_TOKEN}`}
      });
      return {success:true};
    } catch(e){return {success:false};}
  }
};
module.exports = LEARNING;
