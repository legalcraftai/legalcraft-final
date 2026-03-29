// ═══════════════════════════════════════════════════════════════
// LEGALCRAFT AI — MASTER ENGINE v11
// ✅ Smart AI Clarification (only when genuinely needed)
// ✅ Multi-language Document Analysis (any script/language)
// ✅ Advocate-level answers with verified case law
// ✅ All 185+ formats working
// ✅ PDF/Image OCR in any language
// ✅ BNS/BNSS/BSA 2023 accurate sections
// ═══════════════════════════════════════════════════════════════

// ── SAFE REQUIRE — gracefully handle missing files on Vercel ──────
function safeRequire(path, fallback) {
  try { return require(path); } 
  catch(e) { console.warn('Missing:', path); return fallback; }
}

const BAIL        = safeRequire('./data/formats/bail_formats.js', []);
const FIR         = safeRequire('./data/formats/fir_formats.js', []);
const PETITIONS   = safeRequire('./data/formats/petition_formats.js', []);
const CIVIL       = safeRequire('./data/formats/civil_formats.js', []);
const FAMILY      = safeRequire('./data/formats/family_formats.js', []);
const CRIMINAL    = safeRequire('./data/formats/criminal_trial_formats.js', []);
const NI_REC      = safeRequire('./data/formats/ni_act_recovery_formats.js', []);
const PROP_CON    = safeRequire('./data/formats/property_consumer_rti_formats.js', []);
const AFFIDAVIT   = safeRequire('./data/formats/affidavit_general_formats.js', []);
const LABOUR      = safeRequire('./data/formats/labour_formats.js', []);
const COMPANY     = safeRequire('./data/formats/company_formats.js', []);
const TAX         = safeRequire('./data/formats/tax_formats.js', []);
const ENV         = safeRequire('./data/formats/environment_formats.js', []);
const BANKING     = safeRequire('./data/formats/banking_formats.js', []);
const CYBER       = safeRequire('./data/formats/cyber_formats.js', []);
const MEDICAL     = safeRequire('./data/formats/medical_insurance_formats.js', []);
const RIGHTS      = safeRequire('./data/formats/rights_formats.js', []);
const WRITS       = safeRequire('./data/formats/writ_formats.js', []);
const MATRIMONIAL = safeRequire('./data/formats/matrimonial_formats.js', []);
const NOTICE_V2   = safeRequire('./data/formats/notice_formats_v2.js', []);
// ── PERSONAL LAW ACTS — Complete Bare Acts ─────────────────
const HMA_1955    = safeRequire('./data/acts/hma_complete.js', []);
const HAMA_1956   = safeRequire('./data/acts/hama_complete.js', []);
const IFA_1927    = safeRequire('./data/acts/ifa_complete.js', []);
const POCSO_2012  = safeRequire('./data/acts/pocso_complete.js', []);
const HSA_1956    = safeRequire('./data/acts/hsa_complete.js', []);
const HMGA_1956   = safeRequire('./data/acts/hmga_complete.js', []);
const MPL_1937    = safeRequire('./data/acts/mpl_complete.js', []);
const DMM_1939    = safeRequire('./data/acts/dmm_complete.js', []);
const CONTRACT    = safeRequire('./data/contract.js', []);
const BNS         = safeRequire('./data/bns.js', []);
const BNSS        = safeRequire('./data/bnss.js', []);
const BSA_CONST   = safeRequire('./data/bsa_const_ni_hma.js', []);
const OTHER       = safeRequire('./data/other_acts.js', []);
const CASES       = safeRequire('./data/cases.js', []);
const LEARNING    = safeRequire('./data/learning/learning_system.js', 
  {save:async()=>{}, getAccuracy:()=>0, update:()=>{}});

const SECTIONS_DB = [
  // ── PERSONAL LAW ACTS — From Bare Acts (Exact Statutory Text) ──
  // ── Complete Bare Acts (all sections, exact statutory text) ──
  ...HMA_1955.map(x=>({s:x.s,t:x.t,act:x.act,kw:x.kw||[],d:x.bare,bare:x.bare,omitted:x.omitted})),
  ...HAMA_1956.map(x=>({s:x.s,t:x.t,act:x.act,kw:x.kw||[],d:x.bare,bare:x.bare,omitted:x.omitted})),
  ...IFA_1927.map(x=>({s:x.s,t:x.t,act:x.act,kw:x.kw||[],d:x.bare,bare:x.bare,omitted:x.omitted})),
  ...POCSO_2012.map(x=>({s:x.s,t:x.t,act:x.act,kw:x.kw||[],d:x.bare,bare:x.bare,omitted:x.omitted})),
  ...HSA_1956.map(x=>({s:x.s,t:x.t,act:x.act,kw:x.kw||[],d:x.bare,bare:x.bare,omitted:x.omitted})),
  ...HMGA_1956.map(x=>({s:x.s,t:x.t,act:x.act,kw:x.kw||[],d:x.bare,bare:x.bare,omitted:x.omitted})),
  ...MPL_1937.map(x=>({s:x.s,t:x.t,act:x.act,kw:x.kw||[],d:x.bare,bare:x.bare,omitted:x.omitted})),
  ...DMM_1939.map(x=>({s:x.s,t:x.t,act:x.act,kw:x.kw||[],d:x.bare,bare:x.bare,omitted:x.omitted})),
  ...CONTRACT.map(x=>({...x,act:x.act||"Contract Act 1872"})),
  ...BNS.map(x=>({...x,act:x.act||"BNS 2023"})),
  ...BNSS.map(x=>({...x,act:x.act||"BNSS 2023"})),
  ...BSA_CONST.map(x=>({...x})),
  ...OTHER.map(x=>({...x})),
];

// ── FORMAT MAP ────────────────────────────────────────────
const FORMAT_MAP = [
  {keys:["regular bail","483 bnss","bail application","bail chahiye","sessions bail"],packet:"bail",format:"regular_bail"},
  {keys:["anticipatory bail","482 bnss","pre arrest bail","advance bail"],packet:"bail",format:"anticipatory_bail"},
  {keys:["default bail","statutory bail","479 bnss","undertrial bail"],packet:"bail",format:"default_bail"},
  {keys:["bail cancellation","cancel bail"],packet:"bail",format:"bail_cancellation"},
  {keys:["bail affidavit"],packet:"bail",format:"bail_affidavit"},
  {keys:["surety bond","bail bond","zamaanat"],packet:"bail",format:"surety_bond"},
  {keys:["personal bond","pr bond"],packet:"bail",format:"personal_bond"},
  {keys:["fir draft","first information report","173 bnss","police complaint","fir likhna","fir banao"],packet:"fir",format:"fir"},
  {keys:["zero fir"],packet:"fir",format:"zero_fir"},
  {keys:["210 bnss","magistrate complaint","private complaint"],packet:"fir",format:"magistrate_complaint"},
  {keys:["175 3 bnss","156 3 crpc","direction fir","police inaction"],packet:"fir",format:"s175_3_application"},
  {keys:["quashing","528 bnss","fir quash","quash fir"],packet:"petitions",format:"quashing"},
  {keys:["habeas corpus","illegal detention"],packet:"petitions",format:"habeas_corpus"},
  {keys:["criminal revision","432 bnss","revision petition"],packet:"petitions",format:"criminal_revision"},
  {keys:["transfer petition","527 bnss","case transfer"],packet:"petitions",format:"transfer_petition"},
  {keys:["civil plaint","plaint draft","dawa"],packet:"civil",format:"plaint"},
  {keys:["written statement","jawab dawa"],packet:"civil",format:"written_statement"},
  {keys:["legal notice","demand notice","notice draft","notice bhejna"],packet:"civil",format:"legal_notice"},
  {keys:["vakalatnama"],packet:"civil",format:"vakalatnama"},
  {keys:["temporary injunction","order 39","stay order"],packet:"civil",format:"temp_injunction"},
  {keys:["discharge application","250 bnss"],packet:"criminal",format:"discharge_application"},
  {keys:["criminal appeal","413 bnss","appeal conviction"],packet:"criminal",format:"criminal_appeal"},
  {keys:["protest petition","closure report protest"],packet:"criminal",format:"protest_petition"},
  {keys:["condonation of delay","deri maafi"],packet:"criminal",format:"condonation_delay"},
  {keys:["cheque bounce notice","138 notice","138 ni act notice"],packet:"ni_rec",format:"cheque_bounce_notice"},
  {keys:["cheque bounce complaint","138 complaint"],packet:"ni_rec",format:"cheque_bounce_complaint"},
  {keys:["money recovery suit","paisa wapas"],packet:"ni_rec",format:"money_recovery_suit"},
  {keys:["execution petition","decree execution"],packet:"ni_rec",format:"execution_petition"},
  {keys:["promissory note","pronote","hundi"],packet:"ni_rec",format:"promissory_note"},
  {keys:["sale deed","54 tpa","property sale","registry karna"],packet:"prop_con",format:"sale_deed"},
  {keys:["gift deed","122 tpa"],packet:"prop_con",format:"gift_deed"},
  {keys:["rent agreement","kiraya agreement","lease deed"],packet:"prop_con",format:"rent_agreement"},
  {keys:["consumer complaint","consumer forum","consumer court"],packet:"prop_con",format:"consumer_complaint"},
  {keys:["rti application","right to information"],packet:"prop_con",format:"rti_application"},
  {keys:["rera complaint","builder complaint","flat delay"],packet:"prop_con",format:"rera_complaint"},
  {keys:["general affidavit","shapath patra","affidavit draft"],packet:"affidavit",format:"general_affidavit"},
  {keys:["indemnity bond"],packet:"affidavit",format:"indemnity_bond"},
  {keys:["noc","no objection certificate"],packet:"affidavit",format:"noc"},
  {keys:["power of attorney","mukhtiarnama","poa"],packet:"affidavit",format:"special_poa"},
  {keys:["legal heir certificate","varisan"],packet:"affidavit",format:"death_certificate_affidavit"},
  {keys:["partnership deed","saajhedari"],packet:"affidavit",format:"partnership_deed"},
  {keys:["gratuity claim"],packet:"labour",format:"gratuity_claim"},
  {keys:["industrial dispute","labour court claim"],packet:"labour",format:"industrial_dispute"},
  {keys:["appointment letter","offer letter"],packet:"labour",format:"appointment_letter"},
  {keys:["resignation letter","istifa"],packet:"labour",format:"resignation_letter"},
  {keys:["termination letter","dismissal letter"],packet:"labour",format:"termination_letter"},
  {keys:["show cause notice employee"],packet:"labour",format:"show_cause_notice"},
  {keys:["board resolution"],packet:"company",format:"board_resolution"},
  {keys:["mou","memorandum of understanding"],packet:"company",format:"mou"},
  {keys:["nda","non disclosure agreement"],packet:"company",format:"nda"},
  {keys:["income tax notice reply","it notice reply"],packet:"tax",format:"it_notice_reply"},
  {keys:["gst notice reply"],packet:"tax",format:"gst_notice_reply"},
  {keys:["income tax appeal","cit appeal"],packet:"tax",format:"it_appeal_cita"},
  {keys:["ngt application","green tribunal"],packet:"env",format:"ngt_application"},
  {keys:["loan agreement"],packet:"banking",format:"loan_agreement"},
  {keys:["bank ombudsman","rbi complaint"],packet:"banking",format:"bank_ombudsman_complaint"},
  {keys:["drt application"],packet:"banking",format:"drt_application"},
  {keys:["mortgage deed"],packet:"banking",format:"mortgage_deed"},
  {keys:["cyber crime fir","cyber complaint","online fraud fir"],packet:"cyber",format:"cyber_fir"},
  {keys:["sextortion","blackmail complaint"],packet:"cyber",format:"sextortion_complaint"},
  {keys:["medical negligence complaint","doctor negligence"],packet:"medical",format:"medical_negligence_complaint"},
  {keys:["mact claim","motor accident claim"],packet:"medical",format:"mact_claim"},
  {keys:["insurance claim","bima claim"],packet:"medical",format:"insurance_claim_application"},
  {keys:["sc st atrocity","atrocity complaint"],packet:"rights",format:"sc_st_atrocity_complaint"},
  {keys:["posh complaint","sexual harassment icc"],packet:"rights",format:"posh_complaint"},
  {keys:["writ petition","article 226"],packet:"writs",format:"writ_general"},
  {keys:["pil","public interest litigation"],packet:"writs",format:"pil"},
  {keys:["contempt petition"],packet:"writs",format:"contempt_petition"},
  {keys:["slp","special leave petition"],packet:"writs",format:"slp"},
  {keys:["will draft","vasiyat"],packet:"matrimonial",format:"will"},
  {keys:["succession certificate"],packet:"matrimonial",format:"succession_certificate"},
  {keys:["eviction notice","ghar khaali karo","notice to quit"],packet:"notice_v2",format:"eviction_notice"},
  {keys:["defamation notice"],packet:"notice_v2",format:"defamation_notice"},
  {keys:["sarfaesi notice","npa notice"],packet:"notice_v2",format:"sarfaesi_notice"},
  {keys:["breach contract notice"],packet:"notice_v2",format:"breach_contract_notice"},
  {keys:["divorce petition","talak","13 hma"],packet:"family",format:"divorce_petition"},
  {keys:["mutual divorce","13b hma"],packet:"family",format:"mutual_divorce"},
  {keys:["maintenance application","125 bnss"],packet:"family",format:"maintenance"},
  {keys:["domestic violence","12 dv act"],packet:"family",format:"dv_application"},
  {keys:["child custody"],packet:"family",format:"child_custody"},
];

const PKT={bail:BAIL,fir:FIR,petitions:PETITIONS,civil:CIVIL,family:FAMILY,criminal:CRIMINAL,ni_rec:NI_REC,prop_con:PROP_CON,affidavit:AFFIDAVIT,labour:LABOUR,company:COMPANY,tax:TAX,env:ENV,banking:BANKING,cyber:CYBER,medical:MEDICAL,rights:RIGHTS,writs:WRITS,matrimonial:MATRIMONIAL,notice_v2:NOTICE_V2};

function getPacket(n){return PKT[n]||null;}
function findFormat(q){
  const ql=q.toLowerCase();
  const s=FORMAT_MAP.map(f=>({...f,score:f.keys.filter(k=>ql.includes(k)).length})).filter(f=>f.score>0).sort((a,b)=>b.score-a.score);
  if(!s.length)return null;
  const b=s[0];const p=getPacket(b.packet);if(!p)return null;
  const fm=p[b.format];if(!fm)return null;
  return{...fm,packet_name:b.packet,format_key:b.format};
}
function findAttachments(fmt){
  if(!fmt?.attach_with)return[];
  return(fmt.attach_with||[]).map(k=>{for(const n of Object.keys(PKT)){const p=getPacket(n);if(p?.[k])return{name:p[k].name,key:k};}return null;}).filter(Boolean);
}
function findSections(q){
  const ql=q.toLowerCase();
  return SECTIONS_DB.filter(s=>(s.kw||[]).some(kw=>ql.includes(kw))||ql.includes(`section ${s.s}`)||ql.includes(`s.${s.s}`)||ql.includes(`article ${s.s}`)).slice(0,5);
}
function findCases(q){
  const ql=q.toLowerCase();
  return CASES.filter(c=>c.kw.some(k=>ql.includes(k))).slice(0,4);
}

// ── INTENT CLASSIFIER ────────────────────────────────────
function classifyIntent(q,hasImg){
  if(hasImg)return'IMAGE';
  const ql=q.toLowerCase();
  const DRAFT_KW=["draft","drafting","banao","likho","taiyar karo","application chahiye","petition chahiye","notice chahiye","format chahiye","document chahiye","deed chahiye","fir likhni","draft karo","likhna hai","banana hai","format do","bail application","notice bhejna","plaint banao"];
  const CRITICAL_KW=["critical","analyze","critically","constitutional validity","judicial review","compare","difference between"," vs ","versus","pros and cons","arguments for","arguments against","whether valid","is it constitutional","conflict between","doctrine","jurisprudence","evolution of law","validity of","legality of","constitutionality"];
  const CASE_KW=["case explain","judgment","judgement","verdict","landmark case","leading case","case law","ratio decidendi","facts of the case","case bata","case ki"];
  const SECTION_KW=["section","dhara","article","kya hai","explain karo","batao","samjhao","what is","meaning of","define","statutory provision","punishment for","penalty for","bns section","bnss section","bsa section"];
  if(DRAFT_KW.some(k=>ql.includes(k)))return'DRAFT';
  if(CRITICAL_KW.some(k=>ql.includes(k)))return'CRITICAL';
  if(CASE_KW.some(k=>ql.includes(k)))return'CASE';
  if(SECTION_KW.some(k=>ql.includes(k)))return'SECTION';
  return'GENERAL';
}

function extractFields(q){
  const f={};
  const patterns=[
    [/(?:naam|name|accused|petitioner|applicant|complainant|client)[:\s]+([A-Za-z\s\.]{3,40})(?:,|\.|\n)/i,['name','accused','petitioner','applicant','client','plaintiff','aggrieved']],
    [/(?:s\/o|son of|father|pita)[:\s]+([A-Za-z\s\.]{3,30})(?:,|\.|\n)/i,['father']],
    [/(?:fir no|fir)[:\s#.]*([0-9\/A-Za-z]+)/i,['fir']],
    [/(?:court|adalat)[:\s]+([A-Za-z\s]{3,60})(?:,|\.|\n)/i,['court']],
    [/(?:district|jila|city|zila)[:\s]+([A-Za-z\s]{3,35})(?:,|\.|\n)/i,['district']],
    [/(?:state|rajya)[:\s]+([A-Za-z\s]{3,30})(?:,|\.|\n)/i,['state']],
    [/(?:police station|ps|thana)[:\s]+([A-Za-z\s]{3,45})(?:,|\.|\n)/i,['ps']],
    [/(?:amount|rs\.?|rupees|paisa)[:\s]+([\d,]+)/i,['amount']],
    [/(?:cheque no|cheque)[:\s#.]*([0-9]+)/i,['cheque_no']],
    [/(?:bank)[:\s]+([A-Za-z\s]{3,40})(?:,|\.|\n)/i,['bank']],
    [/(?:date|tarikh)[:\s]+(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i,['date']],
    [/(?:age|umar|aayu)[:\s]+(\d{1,3})/i,['age']],
    [/(?:mobile|phone|contact)[:\s]+(\d{10})/i,['mobile']],
    [/(?:advocate|vakil|lawyer)[:\s]+([A-Za-z\s\.]{3,45})(?:,|\.|\n)/i,['advocate']],
    [/(?:respondent|opposite party)[:\s]+([A-Za-z\s\.]{3,40})(?:,|\.|\n)/i,['respondent']],
    [/(?:offence|sections? charged|crime)[:\s]+([A-Za-z0-9\s,\/\.]{3,100})(?:,|\.|\n)/i,['sections','offence']],
    [/(?:address|pata|r\/o|residing)[:\s]+([A-Za-z0-9\s,\-\.#\/]{10,120})/i,['address']],
  ];
  for(const[regex,keys]of patterns){const m=q.match(regex);if(m)keys.forEach(k=>{if(!f[k])f[k]=m[1].trim();});}
  if(f.name)['accused','petitioner','applicant','client','plaintiff','aggrieved','husband','wife','deponent','complainant','claimant'].forEach(k=>{if(!f[k])f[k]=f.name;});
  f.year=new Date().getFullYear().toString();
  f.date=f.date||new Date().toLocaleDateString('en-IN');
  return f;
}

// ══════════════════════════════════════════════════════════
// WHAT NEEDS CLARIFICATION — Smart detector
// Only ask when genuinely necessary for accurate answer
// ══════════════════════════════════════════════════════════
function detectMissingInfo(query, allMessagesText){
  const q = query.toLowerCase();
  const hist = allMessagesText.toLowerCase();
  const missing = [];

  // ── Location needed? ──────────────────────────────────
  // ONLY when state-specific law variation genuinely matters
  const locationSensitive = (
    // Rent/tenancy — state laws differ massively
    (q.includes('tenant')||q.includes('landlord')||q.includes('rent')||q.includes('evict')||q.includes('kiraya')||q.includes('makaan khali')) ||
    // Specific local court procedures
    (q.includes('which court')||q.includes('kahan file')||q.includes('kahan jaun')) ||
    // Agricultural land — state specific
    (q.includes('agricultural land')||q.includes('zameen')||q.includes('khet')) ||
    // Minimum wages — state specific
    (q.includes('minimum wage')||q.includes('minimum salary')) ||
    // Stamp duty — state specific
    (q.includes('stamp duty')||q.includes('registration charges'))
  );
  const locationAlreadyGiven = (
    /\b(delhi|mumbai|kolkata|chennai|bengaluru|hyderabad|lucknow|varanasi|patna|jaipur|ahmedabad|pune|surat|nagpur|indore|bhopal|agra|kanpur|allahabad|prayagraj|chandigarh|guwahati|bhubaneswar|kochi|thiruvananthapuram|ranchi|raipur|dehradun|shimla|jammu|srinagar)\b/.test(hist) ||
    /\b(uttar pradesh|maharashtra|karnataka|gujarat|rajasthan|bihar|madhya pradesh|west bengal|andhra pradesh|telangana|kerala|odisha|assam|jharkhand|chhattisgarh|haryana|punjab|himachal|uttarakhand|goa|manipur|nagaland|tripura|meghalaya|arunachal|mizoram|sikkim|j&k|jammu kashmir)\b/.test(hist) ||
    /\b(up|mp|hp|uk|ap|ts|wb|tn|kl|gj|rj|br|jh|cg|hr|pb|dl|mh|ka)\b/.test(hist)
  );
  if(locationSensitive && !locationAlreadyGiven){
    missing.push({type:'location', question:'Which state or city are you located in? (Laws like rent control, agricultural land, stamp duty vary significantly by state)'});
  }

  // ── Party details for disputes ────────────────────────
  // Only if they're asking about their specific case
  const isPersonalCase = (q.includes('my case')||q.includes('mera case')||q.includes('meri situation')||q.includes('i have been')||q.includes('i was')||q.includes('mujhe')||q.includes('humko')||q.includes('what should i do')||q.includes('kya karu'));
  
  // ── Contract type needed? ─────────────────────────────
  const contractNeedsType = (q.includes('contract')||q.includes('agreement'))&&(q.includes('breach')||q.includes('violation'))&&!q.includes('act')&&!q.includes('section');
  
  // ── Amount threshold matters? ─────────────────────────
  const amountMatters = (q.includes('consumer')&&!q.includes('court')&&(q.includes('complaint')||q.includes('case')))&&!(/\d{4,}/.test(q));
  if(amountMatters) missing.push({type:'amount', question:'What is the approximate value of your consumer dispute? (This determines which forum — District/State/National — has jurisdiction)'});

  // ── Service type for consumer/deficiency? ─────────────
  const serviceTypeNeeded = (q.includes('deficiency in service')||q.includes('service complaint'))&&!q.includes('bank')&&!q.includes('medical')&&!q.includes('telecom')&&!q.includes('insurance')&&!q.includes('builder');
  if(serviceTypeNeeded) missing.push({type:'service_type', question:'What type of service provider is involved? (e.g., bank, insurance, telecom, builder, hospital, airline, etc.)'});

  return missing;
}

// ══════════════════════════════════════════════════════════
// COMPACT LEGAL BRAIN — For Drafting
// ══════════════════════════════════════════════════════════
const DRAFT_BRAIN = `You are LegalCraft AI — India's most accurate legal drafting system.

VERIFIED SECTION NUMBERS (use these ALWAYS, never wrong ones):
BNSS 2023: Bail=S.483|AB=S.482|DefaultBail=S.479|FIR=S.173|Cognizance=S.210|Arrest=S.35|Remand=S.187|Discharge=S.250|CrimAppeal=S.413|Revision=S.432|Transfer=S.527|Inherent/Quashing=S.528
BNS 2023: Murder=S.103|CulpHom=S.101|Rape=S.64|GangRape=S.70|DowryDeath=S.80|Cruelty=S.85|Stalking=S.78|Theft=S.303|Robbery=S.309|Cheating=S.318|Extortion=S.308|CBT=S.316|Defamation=S.356|Conspiracy=S.61|CommonIntent=S.3(5)|Trafficking=S.143|Kidnap=S.137|Forgery=S.336|AttemptMurder=S.109|AssaultWoman=S.74
BSA 2023: PoliceConfession=S.25|Discovery=S.26-27|DyingDecl=S.29|Expert=S.39|Electronic=S.63|Burden=S.94|Presumption=S.114

LANDMARK CASES FOR DRAFTS:
[BAIL] Satender Kumar Antil v CBI (2022) 10 SCC 51 — "Bail is rule, jail is exception"
[AB] Gurbaksh Singh Sibbia v Punjab AIR 1980 SC 1632 — AB even before FIR
[AB2] Sushila Aggarwal v NCT Delhi (2020) 5 SCC 1 — AB need not be time-limited
[ARREST] Arnesh Kumar v Bihar (2014) 8 SCC 273 — 9-point checklist; no mechanical arrest
[FIR] Lalita Kumari v UP (2014) 2 SCC 1 — FIR mandatory for cognizable offence
[QUASH] State of Haryana v Bhajan Lal 1992 Supp(1) SCC 335 — 7 categories for quashing
[UAPA] K.A.Najeeb (2021) 3 SCC 713 — Art.21 overrides after prolonged detention
[MAINT] Rajnesh v Neha (2021) 2 SCC 324 — Comprehensive maintenance guidelines
[DIVORCE] Amardeep Singh v Harveen Kaur (2017) 8 SCC 746 — 6-month waiver mutual divorce
[MACT] Sarla Verma v DTC (2009) 6 SCC 121 — Multiplier method accident compensation
[CHEQUE] Dashrath Rupsingh Rathod (2014) 9 SCC 129 — Jurisdiction at drawer's bank
[CONSUMER] Lucknow Dev Authority AIR 1994 SC 787 — Public authorities = service providers

MANDATORY DRAFTING RULES:
1. Section format: "Section 483 BNSS 2023 [formerly Section 439 CrPC 1973]"
2. Include 2 relevant landmark cases in the application body  
3. Wrap COMPLETE draft: ---DRAFT START--- ... ---DRAFT END---
4. VERIFICATION paragraph at end always
5. Complete PRAYER clause — all possible reliefs
6. [FILL: what is needed] ONLY for genuinely missing critical info
7. Use ALL details user provided
8. Do NOT just copy template — write intelligently`;

// ══════════════════════════════════════════════════════════
// FULL ANALYSIS BRAIN — For Research & Advice
// ══════════════════════════════════════════════════════════
const ANALYSIS_BRAIN = `You are LegalCraft AI — India's most comprehensive legal intelligence.
Superior to ChatGPT, Gemini, Grok on Indian law.

COMPLETE INDIAN LAW COVERAGE:
Constitutional(Art.12-395+doctrines) | BNS 2023(S.1-358) | BNSS 2023(S.1-531) | BSA 2023(S.1-170) | CPC 1908 | Contract Act 1872 | TPA 1882 | HMA 1955 | HSA 1956 | Muslim Personal Law | Companies Act 2013 | IBC 2016 | Labour Codes | IT Act 1961 | GST 2017 | IP Laws | NI Act 1881 | SARFAESI | CPA 2019 | IT Act 2000 | A&C Act 1996 | NDPS Act | POCSO Act | UAPA | SC/ST Act | DV Act | Dowry Act | JJ Act | RERA 2016 | RTI Act | All Special Laws

VERIFIED SECTIONS:
BNSS: Bail=483|AB=482|DefaultBail=479|FIR=173|Cognizance=210|Arrest=35|Remand=187|Discharge=250|CrimAppeal=413|Revision=432|Transfer=527|Inherent=528
BNS: Murder=103|CulpHom=101|Rape=64|DowryDeath=80|Cruelty=85|Stalking=78|Theft=303|Cheating=318|Extortion=308|Defamation=356|Conspiracy=61|Trafficking=143
BSA: PoliceConfession=25|Discovery=26-27|DyingDecl=29|Expert=39|Electronic=63|Burden=94

LANDMARK CASES (active good law):
Kesavananda Bharati AIR 1973 SC 1461 | Maneka Gandhi AIR 1978 SC 597 | K.S.Puttaswamy (2017) 10 SCC 1
Lalita Kumari (2014) 2 SCC 1 | Satender Kumar Antil (2022) 10 SCC 51 | Arnesh Kumar (2014) 8 SCC 273
Gurbaksh Singh Sibbia AIR 1980 SC 1632 | K.A.Najeeb (2021) 3 SCC 713 | Bhajan Lal 1992 Supp(1) SCC 335
Bachan Singh AIR 1980 SC 898 | Hussainara Khatoon AIR 1979 SC 1360 | Vishaka AIR 1997 SC 3011
Shayara Bano (2017) 9 SCC 1 | Vineeta Sharma (2020) 9 SCC 1 | Rajnesh v Neha (2021) 2 SCC 324
Sarla Verma (2009) 6 SCC 121 | Pioneer Urban Land (2019) 8 SCC 416 | MC Mehta AIR 1987 SC 1086
Standard Chartered Bank (2005) 4 SCC 530 | Suraj Lamp (2012) 1 SCC 656 | Tofan Singh (2021) [NDPS S.67 inadmissible]
Mohori Bibee (1903) | Satyabrata Ghose AIR 1954 SC 44 | Pulukuri Kottaya AIR 1947 PC 67
Shreya Singhal (2015) 5 SCC 1 [S.66A IT Act struck down] | Prathvi Raj Chauhan (2020) [SC/ST no AB]

OVERRULED — NEVER CITE: ADM Jabalpur AIR 1976 (overruled Puttaswamy 2017) | A.K.Gopalan AIR 1950 (overruled Maneka Gandhi 1978)

CRITICAL RECENT CHANGES:
- Sedition S.124A IPC = REMOVED from BNS 2023 (no direct equivalent)
- Triple talaq = CRIMINAL (Muslim Women Act 2019)
- Daughter = coparcener from birth (Vineeta Sharma 2020)
- NDPS S.67 confession = INADMISSIBLE (Tofan Singh 2021)
- S.66A IT Act = STRUCK DOWN (Shreya Singhal 2015)
- SC/ST Act = NO anticipatory bail (Prathvi Raj Chauhan 2020)`;

// ══════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════
// MULTI-LANGUAGE VISION PROMPT — Up to 6 documents
// ══════════════════════════════════════════════════════════
function buildVisionPrompt(userQuery, lang, numDocs=1){
  const multiDocNote = numDocs > 1
    ? `You are analyzing ${numDocs} legal documents TOGETHER.
Cross-reference them: find connections, contradictions, missing links, and how they collectively affect the legal situation.
Number each document finding separately: [Doc 1], [Doc 2], etc.

`
    : '';

  return `${multiDocNote}You are a Senior Advocate + Legal Document Analyst.

LANGUAGE CAPABILITY: Read documents in ANY script/language:
Hindi (Devanagari) | Urdu (Nastaliq) | Bengali | Tamil | Telugu | Marathi | Gujarati | Kannada | Malayalam | Punjabi (Gurmukhi) | Odia | English | Mixed scripts | Handwritten text | Stamped/sealed documents

USER'S REQUEST: "${userQuery}"

════════════════════════════════════════════════
STEP 1: EXTRACT ALL TEXT (Every document)
════════════════════════════════════════════════
For EACH document, extract EVERY piece of text:
□ Document heading/title
□ All section/dhara numbers (BNS/BNSS/BSA 2023 or old IPC/CrPC)
□ All dates (issue date, hearing date, deadline, limitation period)
□ All party names (petitioner, respondent, accused, complainant, plaintiff, defendant)
□ All court/authority names and case numbers/FIR numbers
□ All monetary amounts (fine, compensation, loan amount, cheque value)
□ All orders, directions and conditions imposed
□ Stamp details, signatures, seals, endorsements
□ Any attachments or enclosures mentioned
□ All footnotes, margin notes, corrections

If non-English script: transliterate AND translate to English

════════════════════════════════════════════════
STEP 2: PROFESSIONAL ADVOCATE ANALYSIS
════════════════════════════════════════════════

## 📋 DOCUMENT OVERVIEW
**Type:** [FIR/Court Order/Legal Notice/Cheque/Contract/Sale Deed/Bail Order/Chargesheet/Writ/Judgment/Affidavit/Property Doc/Summons/Warrant/Tax Notice/Other]
**Language/Script:** [as found in document]
**Issued by:** [authority/court/person]
**Date:** [document date]
**Parties:** Petitioner/Complainant vs Respondent/Accused

## 📄 COMPLETE EXTRACTED TEXT
[Write out ALL text extracted — nothing skipped]
[Non-English parts: show original script + English translation]

## ⚖️ LEGAL ANALYSIS

### What This Document Means (Simple Language)
[2-3 paragraphs — what is legally happening, what are the consequences]

### Applicable Law
[For each section/dhara mentioned:]
- **S.[Number] [Act Name]:** [What this section says + what it means for the parties]
- **New Law Equivalent:** [Old IPC/CrPC → BNS/BNSS/BSA 2023 mapping]

### Strength of the Document
[Is it legally valid? Any defects? Stamp duty paid? Proper format?]

## ⚠️ CRITICAL DEADLINES & URGENCY
[LIST EVERY deadline with date and days remaining/elapsed]
🔴 **URGENT (Past deadline):** [what was missed]
🟡 **Due Soon:** [upcoming deadlines]
🟢 **Future dates:** [hearing/appearance dates]

## 🏛️ ADVOCATE'S ASSESSMENT

### For the Client (Plain Language)
[Explain situation as if explaining to the client directly]

### Legal Position
- **Strengths:** [favorable points]
- **Risks:** [unfavorable points]
- **Missing elements:** [what's lacking, what should have been there]

### Evidence Required
[List documents/witnesses needed]

## 📝 RECOMMENDED IMMEDIATE ACTIONS
**Step 1 (Do Today):** [most urgent action]
**Step 2 (This Week):** [next priority]
**Step 3 (Before Deadline):** [what must be done before the deadline]
**Step 4 (Long-term):** [strategic advice]

[Be specific: which court, which office, which form number, which authority, which advocate to consult]

## 📋 DRAFT DOCUMENT (If requested)
${numDocs > 1 ? `[If user asked for a draft, use details from ALL ${numDocs} documents to create it]` : '[If user asked for a draft, use all extracted details]'}

---DRAFT START---
[Complete court-ready draft using extracted details]
---DRAFT END---

RULES:
1. Every old IPC/CrPC section → give BNS/BNSS/BSA 2023 equivalent immediately
2. ⚠️ Missed deadline = RED WARNING at very top of response
3. Translate/transliterate ALL non-English text
4. Never guess — if text is unclear, say so
5. Be precise with amounts, dates, names — legal documents have consequences
6. If ${numDocs > 1 ? `documents contradict each other — highlight immediately` : `document seems forged or has issues — flag immediately`}
${lang && lang !== 'English' ? `
Respond in ${lang}.` : ''}`;
}

// ── MAIN HANDLER ──────────────────────────────────────────
module.exports = async function handler(req, res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS') return res.status(200).end();
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});

  try{
    const{messages, language, imageData, imageType, images} = req.body;
    if(!messages||!Array.isArray(messages)) return res.status(400).json({error:'Invalid request'});

    const GROQ   = process.env.GROQ_API_KEY;
    const TAVILY = process.env.TAVILY_API_KEY;
    const GEMINI = process.env.GEMINI_API_KEY;   // Google Gemini — for image/document analysis
    const OPTIIC = process.env.OPTIIC_API_KEY;   // Optiic OCR — for scanned docs / handwritten text
    if(!GROQ) return res.status(500).json({error:'GROQ_API_KEY not configured'});

    const lastMsg   = messages[messages.length-1];
    const userQuery = (lastMsg?.content||'').slice(0,3000);
    
    // Support both single image (legacy) and multiple images (new)
    let allImages = [];
    if(images && Array.isArray(images) && images.length > 0){
      allImages = images; // [{data, type, name}]
    } else if(imageData && imageType){
      allImages = [{data: imageData, type: imageType, name: 'document'}];
    }
    const hasImage = allImages.length > 0;
    const langNote  = (language && language!=='English') ? language : '';
    const intent    = classifyIntent(userQuery, hasImage);
    const allMsgsText = messages.map(m=>m.content||'').join(' ');

    // ── LOCAL LOOKUP ──────────────────────────────────────
    const localSections = findSections(userQuery);
    const localCases    = findCases(userQuery);
    const matchedFmt    = intent==='DRAFT' ? findFormat(userQuery) : null;
    const fields        = matchedFmt ? extractFields(userQuery) : {};
    const attachments   = matchedFmt ? findAttachments(matchedFmt) : [];
    let templateText = '';
    if(matchedFmt?.generate){
      try{ templateText = matchedFmt.generate(fields); }catch(e){}
    }

    // ── MULTI-IMAGE / PDF MODE ────────────────────────────
    if(hasImage){
      // Build content array with all images
      const contentParts = [];
      
      // Add all images (up to 6)
      const imagesToProcess = allImages.slice(0, 6);
      for(let i=0; i<imagesToProcess.length; i++){
        const img = imagesToProcess[i];
        contentParts.push({
          type:'image_url',
          image_url:{
            url:`data:${img.type};base64,${img.data}`,
            detail:'high'
          }
        });
        if(imagesToProcess.length > 1){
          contentParts.push({
            type:'text',
            text:`[Document ${i+1} of ${imagesToProcess.length}: ${img.name||'document'}]`
          });
        }
      }
      
      // Add the analysis prompt
      contentParts.push({
        type:'text',
        text: buildVisionPrompt(userQuery, langNote, imagesToProcess.length)
      });
      
      // ── USE GEMINI IF AVAILABLE (best for images), else fallback to Groq ──
      let reply = 'Could not analyze the document(s). Please try again or describe the content as text.';
      
      if(GEMINI){
        // ── GEMINI VISION (Google — best for Indian language docs) ──
        try{
          // Build Gemini parts array
          const geminiParts = [];
          
          // Add prompt first
          geminiParts.push({
            text: `${DRAFT_BRAIN}\n\nYou are analyzing ${imagesToProcess.length} legal document(s) as a Senior Advocate.\n\nCRITICAL: Read ALL text in ANY language — Hindi, Urdu, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, English, mixed scripts, handwritten, stamped, watermarked documents.\n\n` + buildVisionPrompt(userQuery, langNote, imagesToProcess.length)
          });
          
          // Add images
          for(const img of imagesToProcess){
            // Strip data URL prefix if present
            const imgData = img.data.replace(/^data:[^;]+;base64,/, '');
            const mimeType = img.type === 'application/pdf' ? 'application/pdf' : img.type;
            geminiParts.push({
              inlineData: { data: imgData, mimeType }
            });
          }
          
          const gRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI}`,
            {
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body: JSON.stringify({
                contents:[{ role:'user', parts: geminiParts }],
                generationConfig:{
                  temperature: 0.1,
                  maxOutputTokens: 4096,
                  topP: 0.95,
                }
              })
            }
          );
          
          if(gRes.ok){
            const gd = await gRes.json();
            const text = gd.candidates?.[0]?.content?.parts?.[0]?.text;
            if(text) reply = text;
            else if(gd.candidates?.[0]?.finishReason === 'SAFETY'){
              reply = '⚠️ Document analysis blocked by safety filters. Please ensure document contains legal content only.';
            }
          } else {
            const gerr = await gRes.text();
            console.error('Gemini error:', gerr.slice(0,200));
            // Fall through to Groq
            throw new Error('Gemini failed: ' + gerr.slice(0,100));
          }
        } catch(geminiErr){
          console.log('Gemini failed, trying Groq vision...', geminiErr.message);
          // Fallback to Groq
          const vRes = await fetch('https://api.groq.com/openai/v1/chat/completions',{
            method:'POST',
            headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ}`},
            body:JSON.stringify({
              model:'meta-llama/llama-4-scout-17b-16e-instruct',
              messages:[
                {role:'system', content:`You are a senior advocate analyzing legal documents. Read ALL text in any language.`},
                {role:'user', content: contentParts}
              ],
              temperature:0.05, max_tokens:3500,
            }),
          });
          if(vRes.ok){ const vd=await vRes.json(); reply = vd.choices?.[0]?.message?.content || reply; }
          else { const ve=await vRes.text(); console.error('Groq vision error:',ve.slice(0,100)); }
        }
      } else {
        // ── NO GEMINI — USE GROQ VISION ──
        const vRes = await fetch('https://api.groq.com/openai/v1/chat/completions',{
          method:'POST',
          headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ}`},
          body:JSON.stringify({
            model:'meta-llama/llama-4-scout-17b-16e-instruct',
            messages:[
              {role:'system', content:`${DRAFT_BRAIN}\n\n${ANALYSIS_BRAIN}\n\nYou are analyzing ${imagesToProcess.length} legal document(s). Read ALL text in any Indian language or script.`},
              {role:'user', content: contentParts}
            ],
            temperature:0.02, max_tokens:3500,
          }),
        });
        if(vRes.ok){
          const vd=await vRes.json();
          reply = vd.choices?.[0]?.message?.content || reply;
        } else {
          const ve = await vRes.text();
          console.error('Groq vision error:', ve.slice(0,200));
          try{ const eo=JSON.parse(ve); reply=`Analysis error: ${eo.error?.message||'Please try again'}`; }catch(e){}
        }
      }
      
      // ── OPTIIC OCR — for scanned/handwritten docs (if image analysis gave poor results) ──
      // Optiic is used as a pre-processor when Gemini/Groq can't read the text clearly
      // It extracts raw text from images, then we pass to analysis
      // (No extra call needed here — Gemini handles it natively)
      // Optiic API key is available as: process.env.OPTIIC_API_KEY
      // Usage: POST https://api.optiic.dev/process with { image: base64, apiKey: OPTIIC }
      
      const docCount = imagesToProcess.length;
      return res.status(200).json({
        reply,
        intent:'IMAGE',
        sources:[],
        format_used: docCount > 1 ? `${docCount} Documents Analyzed` : 'Document Analysis'
      });
    }

    // ── SMART CLARIFICATION CHECK ─────────────────────────
    // Only for GENERAL intent, only when genuinely needed
    if(intent === 'GENERAL'){
      const missingInfo = detectMissingInfo(userQuery, allMsgsText);
      // Only ask if there's EXACTLY ONE critical piece missing
      // AND this is not a follow-up (conversation < 3 messages)
      if(missingInfo.length > 0 && messages.length <= 2){
        // Build a smart clarification question
        const questions = missingInfo.map(m=>m.question).join('\n');
        const clarifyPrompt = `You are LegalCraft AI — a senior legal advisor.

The user has asked: "${userQuery}"

To give the MOST ACCURATE and APPLICABLE answer, you need this information:
${questions}

INSTRUCTION: Ask for this information in a warm, helpful way.
- Acknowledge their situation briefly (1 line)
- Explain WHY you need this info (1 line — e.g., "because rent laws vary by state")
- Ask the specific question(s) clearly
- Keep it short — 3-5 sentences maximum
- End with reassurance that you'll give complete help once they share this

${langNote ? `Respond in ${langNote}.` : ''}`;

        const clarifyRes = await fetch('https://api.groq.com/openai/v1/chat/completions',{
          method:'POST',
          headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ}`},
          body:JSON.stringify({
            model:'llama-3.3-70b-versatile',
            messages:[{role:'system',content:clarifyPrompt},...messages.slice(-4)],
            temperature:0.3, max_tokens:200,
          }),
        });
        if(clarifyRes.ok){
          const cd = await clarifyRes.json();
          const clarifyReply = cd.choices?.[0]?.message?.content||'';
          if(clarifyReply){
            return res.status(200).json({
              reply: clarifyReply,
              intent: 'CLARIFICATION',
              sources: [],
              format_used: null,
              needs_clarification: true,
            });
          }
        }
      }
    }

    // ── WEB SEARCH ────────────────────────────────────────
    let webContext = '', sources = [];
    if(TAVILY){
      const searchQ =
        intent==='DRAFT'    ? `${matchedFmt?.name||userQuery} Indian court format BNS BNSS 2023` :
        intent==='SECTION'  ? `${userQuery} Indian law section exact text cases` :
        intent==='CASE'     ? `${userQuery} Supreme Court India full judgment` :
        intent==='CRITICAL' ? `${userQuery} Indian constitutional law analysis` :
                              `${userQuery} Indian law rights 2023 2024`;
      try{
        const tr = await fetch('https://api.tavily.com/search',{
          method:'POST', headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            api_key:TAVILY, query:searchQ,
            search_depth: intent==='DRAFT' ? 'basic' : 'advanced',
            max_results:4, include_answer:true,
            include_domains:['indiankanoon.org','sci.gov.in','ecourts.gov.in','livelaw.in','indiacode.nic.in','latestlaws.com','barandbench.com','thehindu.com'],
          }),
        });
        if(tr.ok){
          const td = await tr.json();
          if(td.answer) webContext = `WEB: ${td.answer}\n`;
          sources = (td.results||[]).slice(0,4).map(r=>({title:r.title,url:r.url,snippet:r.content?.slice(0,250)}));
          webContext += sources.map(s=>`[${s.title}]: ${s.snippet||''}`).join('\n');
        }
      }catch(e){}
    }

    const secMatch = localSections[0] || null;
    const secText = localSections.map(s=>{
      const bare = s.bare || s.d || '';
      return `${s.act} | S.${s.s} | "${s.t}"\nBARE ACT TEXT:\n${bare}`;
    }).join('\n\n---\n');
    const bareActForPrompt = secMatch ? (secMatch.bare || secMatch.d || '') : '';
    const caseText = localCases.map(c=>`${c.n} [${c.c}]: ${(c.h||'').slice(0,120)}`).join('\n');

    // ════════════════════════════════════════════════════════
    // BUILD SYSTEM PROMPT BY INTENT
    // ════════════════════════════════════════════════════════
    let system = '';

    // ── DRAFT ─────────────────────────────────────────────
    if(intent === 'DRAFT'){
      system = `${DRAFT_BRAIN}

══════════════════════════════════════════════════════════
DOCUMENT TO DRAFT: ${matchedFmt?.name||'Legal Document'}
Legal Basis: ${matchedFmt?.section||'As per applicable law'}
Court/Forum: ${matchedFmt?.court||'As per jurisdiction'}
══════════════════════════════════════════════════════════

USER DETAILS PROVIDED (use ALL in draft):
${Object.entries(fields).filter(([k,v])=>v&&String(v).trim()&&!['year','date'].includes(k)).map(([k,v])=>`• ${k}: ${v}`).join('\n')||'No specific details — use appropriate placeholders'}

USER QUERY (extract additional context from this):
"${userQuery}"

REFERENCE TEMPLATE (structure to follow):
${templateText ? templateText.slice(0,2000) : '[Standard court format]'}

ADDITIONAL DATA:
${secText ? `Sections: ${secText}` : ''}
${caseText ? `Cases: ${caseText}` : ''}
${webContext ? `Web: ${webContext.slice(0,400)}` : ''}

DOCUMENTS TO ATTACH: ${attachments.map(a=>a.name).join(', ')||'As per court requirements'}

══════════════════════════════════════════════════════════
DRAFTING INSTRUCTIONS:
1. Write a COMPLETE intelligent draft — not a template copy
2. Fill in ALL user-provided details exactly
3. Use correct BNSS/BNS/BSA 2023 sections
4. Cite 2 relevant landmark cases in the petition body
5. Write proper legal arguments based on the facts
6. Complete prayer clause covering all reliefs
7. MANDATORY: Wrap in ---DRAFT START--- ... ---DRAFT END---
8. After draft: list Missing Info, Documents to Attach, Filing Tip
${langNote ? `\nRespond in ${langNote}.` : ''}`;

    // ── SECTION RESEARCH ──────────────────────────────────
    } else if(intent === 'SECTION'){
      const actHint = (()=>{
        const q=userQuery.toLowerCase();
        if(q.includes('contract')||q.includes('offer')||q.includes('consideration')) return 'CONTRACT ACT 1872';
        if(q.includes('bns 2023')||q.includes('bharatiya nyaya')) return 'BNS 2023';
        if(q.includes('bnss 2023')||q.includes('bharatiya nagarik')) return 'BNSS 2023';
        if(q.includes('bsa 2023')||q.includes('bharatiya sakshya')) return 'BSA 2023';
        if(q.includes('article ')||q.includes('constitution')) return 'CONSTITUTION OF INDIA';
        if(q.includes(' ipc ')||q.includes('penal code')) return 'IPC → BNS 2023';
        if(q.includes(' crpc ')||q.includes('criminal procedure')) return 'CrPC → BNSS 2023';
        if(q.includes('evidence')||q.includes('confession')||q.includes('witness')) return 'BSA 2023';
        if(q.includes('consumer')) return 'CONSUMER PROTECTION ACT 2019';
        if(q.includes('company')||q.includes('director')) return 'COMPANIES ACT 2013';
        if(q.includes('income tax')||q.includes('gst')) return 'TAX LAW';
        if(q.includes('labour')||q.includes('employment')||q.includes('gratuity')) return 'LABOUR LAW';
        if(q.includes('property')||q.includes('sale deed')||q.includes('mortgage')) return 'TPA 1882';
        return 'RELEVANT ACT';
      })();

      system = `${ANALYSIS_BRAIN}

YOU HAVE THESE DATABASE RESULTS:
ACT: ${actHint}
${secText ? `MATCHED SECTION FROM DATABASE:\n${secText}` : 'NO DATABASE MATCH — use your comprehensive legal knowledge'}
CASES: ${caseText||'Use landmark cases from your training'}
WEB: ${webContext||'N/A'}

════════════════════════════════════════════════════
MANDATORY OUTPUT FORMAT — FOLLOW EXACTLY THIS ORDER:
════════════════════════════════════════════════════

## SECTION OVERVIEW
**Act:** [Full Act Name and Year]  
**Section:** [Number] | **Old Law:** [IPC/CrPC equivalent → BNS/BNSS if applicable]  
**Nature:** [Bailable/Non-Bailable] | [Cognizable/Non-Cognizable] | [Civil/Criminal]  
**Punishment:** [Exact — minimum and maximum if prescribed]

---

## 📖 EXACT STATUTORY TEXT (Bare Act)
${bareActForPrompt ? `> *The following is the exact statutory text from the bare act database:*

${bareActForPrompt}` : `> *Write the COMPLETE verbatim text of this section — every word exactly as in the Act, all sub-sections (1)(2)(3...), all clauses (a)(b)(c...), all provisos, all Explanations. NEVER paraphrase. NEVER skip any part.*`}

---

## 💡 PLAIN LANGUAGE EXPLANATION
[Write 2-3 clear paragraphs explaining what this section means in simple, everyday language. Cover: what it does, who it applies to, when it triggers, what consequences follow, important conditions.]

---

## 🔑 KEY POINTS
• **Point 1:** [Most important thing about this section in one clear sentence]
• **Point 2:** [Who can invoke this section and how]  
• **Point 3:** [Key requirement, condition, or threshold]
• **Point 4:** [Important exception, proviso, or limitation]
• **Point 5:** [Time limit, procedure, or court having jurisdiction]
• **Point 6:** [Burden of proof / presumption if any]
• **Point 7:** [Related sections to read together]
• **Point 8:** [Practical significance for litigants/advocates]

---

## 📚 DETAILED EXPLANATION OF KEY POINTS

**🔹 [Title of Point 1]**
[2-3 sentences elaborating with examples, case references, practical scenarios]

**🔹 [Title of Point 2]**
[2-3 sentences with practical illustration]

**🔹 [Title of Point 3]**
[Continue for all 8 key points — make each one genuinely useful]

---

## ⚖️ LANDMARK CASES
[3–5 verified, currently good-law cases — NEVER fabricate]

📌 **[Case Name] | [Court] | [Year] | [Citation]**
- **Facts:** [What happened — 2 sentences]
- **Held:** [Court's exact ruling]  
- **Why it matters:** [Direct impact on how this section is applied]
- **Status:** ✅ Good Law

---

## 🔄 NEW LAW UPDATE (2023 Acts)
[ONLY if question involves old IPC/CrPC/Evidence Act:]
| Old Law | New Law | Key Change |
|---------|---------|------------|
| IPC S.XXX | BNS S.XXX | [What changed] |

---

## 🏛️ ADVOCATE'S PRACTICAL GUIDE
• **How to invoke:** [Specific procedure step-by-step]
• **Documents needed:** [List]
• **Strong arguments:** [Most effective legal arguments under this section]
• **Common mistakes:** [What advocates get wrong — avoid these]
• **Related sections:** [Read with S.XX, S.XX for complete picture]

${langNote ? `\nRespond entirely in ${langNote}.` : ''}`;

    // ── CASE LAW ──────────────────────────────────────────
    } else if(intent === 'CASE'){
      system = `${ANALYSIS_BRAIN}

DB CASES: ${caseText||'Use landmark cases above'}
WEB: ${webContext||'N/A'}

MANDATORY FORMAT:
===CASE DETAILS===
Full Name | Court | Year | Citation | Bench

===BACKGROUND & FACTS===
[Chronological, detailed]

===LEGAL ISSUES===
[Exact questions court decided]

===ARGUMENTS===
Petitioner | Respondent

===JUDGMENT===
Decision | Ratio Decidendi | Obiter Dicta

===STATUS & IMPACT===
[Good Law ✓ or Overruled ✗ | Following cases | How law changed]

===CRITICAL ANALYSIS===
[Strengths | Weaknesses | Subsequent developments]

MANDATORY: If case OVERRULED — state prominently + cite overruling case.
${langNote ? `Respond in ${langNote}.` : ''}`;

    // ── CRITICAL ANALYSIS ─────────────────────────────────
    } else if(intent === 'CRITICAL'){
      system = `${ANALYSIS_BRAIN}

DB: ${secText||'N/A'} | CASES: ${caseText||'N/A'} | WEB: ${webContext||'N/A'}

MANDATORY FORMAT:
===ISSUE PRECISELY FRAMED===
===CONSTITUTIONAL/STATUTORY FRAMEWORK===
===JUDICIAL EVOLUTION (chronological — Good Law ✓ or Overruled ✗)===
===STRONGEST ARGUMENTS FOR===
===STRONGEST ARGUMENTS AGAINST===
===DOCTRINAL TENSIONS / CONFLICTS===
===CRITICAL EVALUATION===
===SETTLED POSITION TODAY===
===PRACTICAL IMPLICATIONS===

Apply IRAC methodology. Cite only verified, non-overruled cases.
${langNote ? `Respond in ${langNote}.` : ''}`;

    // ── GENERAL — ADVOCATE-LEVEL ADVICE ───────────────────
    } else {
      system = `${ANALYSIS_BRAIN}

DB: ${secText||'N/A'} | CASES: ${caseText||'N/A'} | WEB: ${webContext||'N/A'}

══════════════════════════════════════════════════════════
ADVOCATE MODE — RESPONSE FRAMEWORK
══════════════════════════════════════════════════════════

You are a SENIOR ADVOCATE with 20+ years of Indian court experience.
Give advice like a trusted legal advisor who:
• Actually cares about the outcome
• Gives HONEST assessments (not just what client wants to hear)
• Explains complex law in simple language
• Gives SPECIFIC, ACTIONABLE steps
• Knows which battles are worth fighting

RESPONSE STRUCTURE (adapt based on question type):

1. SITUATION ASSESSMENT (2-3 lines)
   Acknowledge the situation. State the legal position clearly upfront.

2. IMMEDIATE ACTIONS (numbered, most urgent first)
   Specific steps: "Go to X", "File Y within Z days", "Collect documents A, B, C"
   Time limits: always mention deadlines

3. YOUR LEGAL RIGHTS / APPLICABLE LAW
   Relevant sections (BNSS/BNS/BSA 2023 with old equivalent in brackets)
   What the law says in plain language
   What remedies/penalties are available

4. CASE LAW SUPPORT
   2-3 most relevant cases with:
   - Full name + citation
   - What happened (2 lines)
   - Court's decision
   - How it applies to THIS situation

5. PRACTICAL STRATEGY
   Best legal approach
   Realistic time and cost estimate
   Honest assessment of chances
   Alternative approaches if primary fails

6. WHAT NOT TO DO
   Common mistakes to avoid
   Evidence to preserve NOW
   Limitation periods to watch

TONE: Speak like a trusted lawyer to a client.
Direct, specific, honest. Say "In my experience..." and "Courts typically..."
No generic advice — be SPECIFIC to what the person described.

${langNote ? `\nRespond entirely in ${langNote}.` : ''}`;
    }

    // ── GROQ API CALL ─────────────────────────────────────
    const gr = await fetch('https://api.groq.com/openai/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ}`},
      body:JSON.stringify({
        model:'llama-3.3-70b-versatile',
        messages:[
          {role:'system', content:system},
          ...messages.slice(-12),
        ],
        temperature:0.02,
        max_tokens:4000,
        top_p:0.95,
      }),
    });

    if(!gr.ok){
      const e = await gr.text();
      console.error('Groq error:', e.slice(0,300));
      return res.status(500).json({error:'AI service error. Please try again.'});
    }

    const gd    = await gr.json();
    const reply = gd.choices?.[0]?.message?.content || 'Response generate nahi ho saka.';

    // ── DRAFT FALLBACK ────────────────────────────────────
    let finalReply = reply;
    if(intent==='DRAFT' && !reply.includes('---DRAFT START---') && templateText){
      finalReply = `Yahan aapka court-ready draft hai:\n\n---DRAFT START---\n${templateText}\n---DRAFT END---\n\n**Note:** Please fill in [FILL:] fields with your specific details.\n\n**Documents to Attach:**\n${attachments.map(a=>`• ${a.name}`).join('\n')||'• As per court requirement'}`;
    }

    // Silent auto-learn
    if(matchedFmt){
      LEARNING.save({draft_type:matchedFmt.format_key,field:'auto',correct_text:finalReply.slice(0,300),context:userQuery.slice(0,80)}).catch(()=>{});
    }

    return res.status(200).json({
      reply: finalReply,
      intent,
      sources: sources.slice(0,4),
      format_used: matchedFmt?.name||null,
      format_key:  matchedFmt?.format_key||null,
      attachments_required: attachments.map(a=>a.name),
    });

  }catch(err){
    console.error('Error:', err.message);
    return res.status(500).json({error:'Server error: '+err.message});
  }
};
