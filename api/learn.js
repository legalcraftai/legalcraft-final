const LEARNING = require('./data/learning/learning_system.js');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS') return res.status(200).end();
  try{
    if(req.method==='GET'){
      const {type,action,admin_key}=req.query;
      if(action==='admin'){
        if(admin_key!==process.env.ADMIN_KEY&&admin_key!=='legalcraft2024') return res.status(403).json({error:'Unauthorized'});
        const all=await LEARNING.getAll(100);
        return res.status(200).json({corrections:all,total:all.length});
      }
      if(type){
        const corrections=await LEARNING.get(type,10);
        return res.status(200).json({corrections,total:corrections.length});
      }
      return res.status(400).json({error:'Missing type'});
    }
    if(req.method==='POST'){
      const {action}=req.body||{};
      if(!action||action==='save'){
        const {draft_type,field,wrong_text,correct_text,context,device_id}=req.body;
        if(!draft_type||!correct_text) return res.status(400).json({success:false,msg:'draft_type and correct_text required'});
        const result=await LEARNING.save({draft_type,field,wrong_text,correct_text,context,device_id});
        return res.status(200).json(result);
      }
      if(action==='upvote'){
        const {key}=req.body;
        if(!key) return res.status(400).json({success:false,msg:'key required'});
        return res.status(200).json(await LEARNING.upvote(key));
      }
      if(action==='delete'){
        const {key,admin_key}=req.body;
        if(admin_key!==process.env.ADMIN_KEY&&admin_key!=='legalcraft2024') return res.status(403).json({error:'Unauthorized'});
        return res.status(200).json(await LEARNING.delete(key));
      }
      return res.status(400).json({error:'Invalid action'});
    }
    return res.status(405).json({error:'Method not allowed'});
  }catch(e){
    console.error('Learn API error:',e.message);
    return res.status(500).json({error:'Server error: '+e.message});
  }
};
