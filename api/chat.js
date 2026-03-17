// LEGAL CRAFT AI — COMPLETE BACKEND V6
// + Image/PDF Vision + Camera Support
// + 99% Accurate System Prompts + Auto-Learning

const BAIL=require('./data/formats/bail_formats.js');
const FIR=require('./data/formats/fir_formats.js');
const PETITIONS=require('./data/formats/petition_formats.js');
const CIVIL=require('./data/formats/civil_formats.js');
const FAMILY=require('./data/formats/family_formats.js');
const CRIMINAL=require('./data/formats/criminal_trial_formats.js');
const NI_REC=require('./data/formats/ni_act_recovery_formats.js');
const PROP_CON=require('./data/formats/property_consumer_rti_formats.js');
const AFFIDAVIT=require('./data/formats/affidavit_general_formats.js');
const LABOUR=require('./data/formats/labour_formats.js');
const COMPANY=require('./data/formats/company_formats.js');
const TAX=require('./data/formats/tax_formats.js');
const ENV=require('./data/formats/environment_formats.js');
const BANKING=require('./data/formats/banking_formats.js');
const CYBER=require('./data/formats/cyber_formats.js');
const MEDICAL_INS=require('./data/formats/medical_insurance_formats.js');
const RIGHTS=require('./data/formats/rights_formats.js');
const WRITS=require('./data/formats/writ_formats.js');
const MATRIMONIAL=require('./data/formats/matrimonial_formats.js');
const NOTICE_V2=require('./data/formats/notice_formats_v2.js');
const CONTRACT=require('./data/contract.js');
const BNS=require('./data/bns.js');
const BNSS=require('./data/bnss.js');
const BSA_CONST=require('./data/bsa_const_ni_hma.js');
const OTHER=require('./data/other_acts.js');
const CASES=require('./data/cases.js');
const LEARNING=require('./data/learning/learning_system.js');

const SECTIONS_DB=[
  ...CONTRACT.map(x=>({...x,act:x.act||"Contract Act 1872"})),
  ...BNS.map(x=>({...x,act:x.act||"BNS 2023"})),
  ...BNSS.map(x=>({...x,act:x.act||"BNSS 2023"})),
  ...BSA_CONST.map(x=>({...x})),
  ...OTHER.map(x=>({...x})),
];

const FORMAT_MAP=[
  {keys:["regular bail","483 bnss","bail application","bail chahiye","sessions bail"],packet:"bail",format:"regular_bail"},
  {keys:["anticipatory bail","482 bnss","pre arrest bail","advance bail","giraftari se pehle bail"],packet:"bail",format:"anticipatory_bail"},
  {keys:["default bail","statutory bail","479 bnss","half period bail","undertrial bail"],packet:"bail",format:"default_bail"},
  {keys:["bail cancellation","cancel bail","bail cancel"],packet:"bail",format:"bail_cancellation"},
  {keys:["bail affidavit","affidavit bail"],packet:"bail",format:"bail_affidavit"},
  {keys:["surety bond","bail bond","zamaanat"],packet:"bail",format:"surety_bond"},
  {keys:["personal bond","muchilaaka","pr bond"],packet:"bail",format:"personal_bond"},
  {keys:["undertaking bail","bail undertaking"],packet:"bail",format:"undertaking"},
  {keys:["fir","first information report","173 bnss","police complaint","fir draft","fir likhna"],packet:"fir",format:"fir"},
  {keys:["zero fir","zero fir draft"],packet:"fir",format:"zero_fir"},
  {keys:["private complaint magistrate","210 bnss","magistrate complaint"],packet:"fir",format:"magistrate_complaint"},
  {keys:["156 3 crpc","175 3 bnss","direction to register fir","police inaction"],packet:"fir",format:"s175_3_application"},
  {keys:["complaint affidavit"],packet:"fir",format:"complaint_affidavit"},
  {keys:["quashing","528 bnss","482 crpc","fir quash","quash fir"],packet:"petitions",format:"quashing"},
  {keys:["habeas corpus","illegal detention"],packet:"petitions",format:"habeas_corpus"},
  {keys:["criminal revision","432 bnss","397 crpc","revision petition"],packet:"petitions",format:"criminal_revision"},
  {keys:["transfer petition","527 bnss","407 crpc","case transfer"],packet:"petitions",format:"transfer_petition"},
  {keys:["petition affidavit","high court affidavit"],packet:"petitions",format:"petition_affidavit"},
  {keys:["plaint","civil suit","dawa","civil case file karna"],packet:"civil",format:"plaint"},
  {keys:["written statement","defence jawab","jawab dawa"],packet:"civil",format:"written_statement"},
  {keys:["legal notice","demand notice","notice bhejna","notice draft"],packet:"civil",format:"legal_notice"},
  {keys:["vakalatnama","power of attorney advocate"],packet:"civil",format:"vakalatnama"},
  {keys:["temporary injunction","order 39","stay order","interim injunction"],packet:"civil",format:"temp_injunction"},
  {keys:["discharge application","250 bnss","227 crpc","discharge accused"],packet:"criminal",format:"discharge_application"},
  {keys:["statement 351 bnss","313 crpc statement","accused statement"],packet:"criminal",format:"statement_351"},
  {keys:["criminal appeal","413 bnss","374 crpc","appeal against conviction"],packet:"criminal",format:"criminal_appeal"},
  {keys:["appeal against acquittal","418 bnss","state appeal acquittal"],packet:"criminal",format:"state_appeal_acquittal"},
  {keys:["protest petition","closure report protest","b summary protest"],packet:"criminal",format:"protest_petition"},
  {keys:["condonation of delay","delay condone","5 limitation act","deri maafi"],packet:"criminal",format:"condonation_delay"},
  {keys:["cheque bounce notice","138 ni act notice","legal notice 138"],packet:"ni_rec",format:"cheque_bounce_notice"},
  {keys:["cheque bounce complaint","138 case","cheque complaint"],packet:"ni_rec",format:"cheque_bounce_complaint"},
  {keys:["reply cheque notice","138 notice reply"],packet:"ni_rec",format:"cheque_bounce_reply"},
  {keys:["money recovery suit","paisa wapas","summary suit","debt recovery"],packet:"ni_rec",format:"money_recovery_suit"},
  {keys:["execution petition","decree execution"],packet:"ni_rec",format:"execution_petition"},
  {keys:["143a ni act","interim compensation cheque"],packet:"ni_rec",format:"interim_compensation_143A"},
  {keys:["promissory note","pro note","pronote","hundi","loan receipt"],packet:"ni_rec",format:"promissory_note"},
  {keys:["sale deed","property sale","54 tpa","registry karna","sampatti bikri"],packet:"prop_con",format:"sale_deed"},
  {keys:["gift deed","sampatti uphar","122 tpa"],packet:"prop_con",format:"gift_deed"},
  {keys:["rent agreement","lease deed","kiraya agreement"],packet:"prop_con",format:"rent_agreement"},
  {keys:["consumer complaint","consumer forum","defective product","consumer court"],packet:"prop_con",format:"consumer_complaint"},
  {keys:["rti application","rti file karna","right to information","suchna ka adhikar"],packet:"prop_con",format:"rti_application"},
  {keys:["rti first appeal","rti appeal"],packet:"prop_con",format:"rti_first_appeal"},
  {keys:["rera complaint","rera builder complaint","flat possession delay"],packet:"prop_con",format:"rera_complaint"},
  {keys:["mutation application","dakhil kharij","namantaran"],packet:"prop_con",format:"mutation_application"},
  {keys:["general affidavit","affidavit banao","shapath patra","affidavit draft"],packet:"affidavit",format:"general_affidavit"},
  {keys:["indemnity bond","kshatipurti bond"],packet:"affidavit",format:"indemnity_bond"},
  {keys:["noc","no objection certificate","noc draft"],packet:"affidavit",format:"noc"},
  {keys:["power of attorney","special poa","mukhtiarnama"],packet:"affidavit",format:"special_poa"},
  {keys:["death certificate affidavit","legal heir certificate","varisan"],packet:"affidavit",format:"death_certificate_affidavit"},
  {keys:["general undertaking","declaration","pratigya patra"],packet:"affidavit",format:"general_undertaking"},
  {keys:["partnership deed","firm agreement","saajhedari"],packet:"affidavit",format:"partnership_deed"},
  {keys:["character certificate","experience certificate"],packet:"affidavit",format:"character_certificate"},
  {keys:["retrenchment notice","25f ida","layoff notice"],packet:"labour",format:"retrenchment_notice"},
  {keys:["gratuity claim","gratuity application","4 gratuity act"],packet:"labour",format:"gratuity_claim"},
  {keys:["industrial dispute","labour court claim","unfair dismissal"],packet:"labour",format:"industrial_dispute"},
  {keys:["appointment letter","offer letter","employment letter"],packet:"labour",format:"appointment_letter"},
  {keys:["resignation letter","naukri chhodna","istifa patra"],packet:"labour",format:"resignation_letter"},
  {keys:["termination letter","dismissal letter","terminate employee"],packet:"labour",format:"termination_letter"},
  {keys:["workmen compensation","industrial accident","kaam par chot"],packet:"labour",format:"workmen_compensation"},
  {keys:["pf complaint","epfo complaint","pf withdrawal"],packet:"labour",format:"pf_complaint"},
  {keys:["show cause notice employee","explanation notice scn"],packet:"labour",format:"show_cause_notice"},
  {keys:["labour court reply","employer written statement"],packet:"labour",format:"labour_written_statement"},
  {keys:["board resolution","directors resolution","company resolution"],packet:"company",format:"board_resolution"},
  {keys:["shareholders agreement","sha draft","founder agreement"],packet:"company",format:"shareholders_agreement"},
  {keys:["agm notice","annual general meeting notice"],packet:"company",format:"agm_notice"},
  {keys:["mou","memorandum of understanding","samjhauta patra"],packet:"company",format:"mou"},
  {keys:["nda","non disclosure agreement","confidentiality agreement"],packet:"company",format:"nda"},
  {keys:["winding up notice","271 companies act","statutory demand company"],packet:"company",format:"company_demand_notice"},
  {keys:["public notice","newspaper notice"],packet:"company",format:"public_notice"},
  {keys:["ip infringement notice","copyright infringement","trademark violation"],packet:"company",format:"ip_infringement_notice"},
  {keys:["franchise agreement","franchise deed"],packet:"company",format:"franchise_agreement"},
  {keys:["service agreement","consultancy agreement"],packet:"company",format:"service_agreement"},
  {keys:["income tax notice reply","it notice reply","143 1 notice reply"],packet:"tax",format:"it_notice_reply"},
  {keys:["gst notice reply","gst notice ka jawab","gst show cause reply"],packet:"tax",format:"gst_notice_reply"},
  {keys:["income tax appeal","cit a appeal","246a income tax"],packet:"tax",format:"it_appeal_cita"},
  {keys:["gst refund","gst refund application"],packet:"tax",format:"gst_refund"},
  {keys:["tds notice reply","tds demand notice"],packet:"tax",format:"tds_reply"},
  {keys:["penalty notice reply income tax","270a penalty reply"],packet:"tax",format:"penalty_reply"},
  {keys:["tax settlement","vivad se vishwas"],packet:"tax",format:"tax_settlement"},
  {keys:["gst cancellation reply","suo motu cancellation reply"],packet:"tax",format:"gst_cancellation_reply"},
  {keys:["ngt application","national green tribunal","pollution complaint ngt"],packet:"env",format:"ngt_application"},
  {keys:["pollution complaint","pcb complaint","prdushan shikayat"],packet:"env",format:"pollution_complaint"},
  {keys:["forest rights claim","van adhikar dava","fra claim"],packet:"env",format:"forest_rights_claim"},
  {keys:["environmental notice","environment damage notice"],packet:"env",format:"environmental_notice"},
  {keys:["wildlife complaint","poaching complaint"],packet:"env",format:"wildlife_complaint"},
  {keys:["tree cutting complaint","ped katna complaint"],packet:"env",format:"tree_cutting_complaint"},
  {keys:["land acquisition claim","rehabilitation claim","larr act claim"],packet:"env",format:"rehabilitation_claim"},
  {keys:["loan agreement","karz samjhauta","money lending agreement"],packet:"banking",format:"loan_agreement"},
  {keys:["bank ombudsman complaint","rbi complaint","bank service complaint"],packet:"banking",format:"bank_ombudsman_complaint"},
  {keys:["drt application","debt recovery tribunal","17 rdba"],packet:"banking",format:"drt_application"},
  {keys:["credit card dispute","chargeback","unauthorized transaction credit card"],packet:"banking",format:"credit_card_dispute"},
  {keys:["investment fraud complaint","chit fund complaint","ponzi scheme"],packet:"banking",format:"investment_complaint"},
  {keys:["mortgage deed","simple mortgage","58 tpa mortgage deed"],packet:"banking",format:"mortgage_deed"},
  {keys:["bank guarantee invocation","invoke bank guarantee"],packet:"banking",format:"bank_guarantee_invocation"},
  {keys:["cyber crime fir","cyber complaint","online fraud fir","cyber cell complaint"],packet:"cyber",format:"cyber_fir"},
  {keys:["online fraud notice","upi fraud notice","payment fraud notice"],packet:"cyber",format:"online_fraud_notice"},
  {keys:["hacking complaint","account hack complaint","unauthorized access complaint"],packet:"cyber",format:"hacking_complaint"},
  {keys:["sextortion complaint","blackmail complaint","online blackmail"],packet:"cyber",format:"sextortion_complaint"},
  {keys:["deepfake notice","morphed image notice"],packet:"cyber",format:"deepfake_notice"},
  {keys:["data breach notice","privacy violation notice","personal data breach"],packet:"cyber",format:"data_breach_notice"},
  {keys:["social media complaint","facebook harassment","instagram complaint"],packet:"cyber",format:"social_media_complaint"},
  {keys:["medical negligence complaint","doctor negligence consumer","hospital complaint consumer"],packet:"medical",format:"medical_negligence_complaint"},
  {keys:["mact claim","motor accident claim","166 mva","sadak durghatna claim"],packet:"medical",format:"mact_claim"},
  {keys:["disability certificate","viklaangta praman patra","rpwd act"],packet:"medical",format:"disability_certificate_application"},
  {keys:["insurance claim application","bima claim","life insurance claim"],packet:"medical",format:"insurance_claim_application"},
  {keys:["hospital unlawful detention","hospital not releasing patient"],packet:"medical",format:"hospital_discharge_complaint"},
  {keys:["rti medical records","hospital rti"],packet:"medical",format:"rti_medical_records"},
  {keys:["sc st atrocity complaint","atrocity complaint","dalit harassment","poa act"],packet:"rights",format:"sc_st_atrocity_complaint"},
  {keys:["nhrc complaint","human rights complaint","manavadhikar aayog"],packet:"rights",format:"nhrc_complaint"},
  {keys:["ncw complaint","mahila aayog complaint"],packet:"rights",format:"ncw_complaint"},
  {keys:["minority complaint","communal violence complaint"],packet:"rights",format:"minority_complaint"},
  {keys:["child rights complaint","ncpcr complaint","bal adhikar"],packet:"rights",format:"child_rights_complaint"},
  {keys:["posh complaint","sexual harassment complaint icc","icc complaint"],packet:"rights",format:"posh_complaint"},
  {keys:["rte complaint","right to education complaint","25 percent rte"],packet:"rights",format:"right_to_education_complaint"},
  {keys:["domestic worker complaint","maid complaint","ghar ka kaam complaint"],packet:"rights",format:"domestic_worker_complaint"},
  {keys:["writ petition","article 226","high court writ petition"],packet:"writs",format:"writ_general"},
  {keys:["writ mandamus","mandamus petition","direct government action"],packet:"writs",format:"writ_mandamus"},
  {keys:["pil","public interest litigation","jan hit yachika"],packet:"writs",format:"pil"},
  {keys:["contempt petition","contempt of court","court order not followed"],packet:"writs",format:"contempt_petition"},
  {keys:["writ affidavit","high court affidavit writ"],packet:"writs",format:"writ_affidavit"},
  {keys:["service writ","government employee writ","sarkari naukri writ"],packet:"writs",format:"service_writ"},
  {keys:["election petition","chunav petition","81 rp act"],packet:"writs",format:"election_petition"},
  {keys:["review petition","order 47 cpc","punarvichar"],packet:"writs",format:"review_petition"},
  {keys:["slp","special leave petition","article 136","sc appeal"],packet:"writs",format:"slp"},
  {keys:["curative petition","after review dismissed sc"],packet:"writs",format:"curative_petition"},
  {keys:["will draft","last will testament","vasiyat","wasiyat"],packet:"matrimonial",format:"will"},
  {keys:["adoption deed","adopt child","hama act adoption"],packet:"matrimonial",format:"adoption_deed"},
  {keys:["guardianship application","guardians wards act","minor guardian"],packet:"matrimonial",format:"guardianship"},
  {keys:["stridhan recovery","jewellery recovery","wife property recovery"],packet:"matrimonial",format:"stridhan_recovery"},
  {keys:["succession certificate","372 succession act","varisan praman patra"],packet:"matrimonial",format:"succession_certificate"},
  {keys:["probate petition","276 succession act","will probate"],packet:"matrimonial",format:"probate_petition"},
  {keys:["letters of administration","278 succession act"],packet:"matrimonial",format:"letters_administration"},
  {keys:["marriage registration","vivah panjeeyan","shadi certificate"],packet:"matrimonial",format:"marriage_registration"},
  {keys:["second motion divorce","13b 2 hma"],packet:"matrimonial",format:"second_motion_divorce"},
  {keys:["elder abuse complaint","maintenance parents","senior citizen complaint"],packet:"matrimonial",format:"elder_abuse"},
  {keys:["eviction notice","notice to quit","ghar khaali karo","kiraya notice"],packet:"notice_v2",format:"eviction_notice"},
  {keys:["defamation notice","manahaani notice"],packet:"notice_v2",format:"defamation_notice"},
  {keys:["cyber notice","online harassment notice"],packet:"notice_v2",format:"cyber_notice"},
  {keys:["medical negligence notice","doctor negligence notice"],packet:"notice_v2",format:"medical_negligence_notice"},
  {keys:["loan demand notice","loan recovery notice","paisa wapas notice"],packet:"notice_v2",format:"loan_demand_notice"},
  {keys:["sarfaesi notice","13 2 sarfaesi","bank sarfaesi notice"],packet:"notice_v2",format:"sarfaesi_notice"},
  {keys:["insurance claim rejection notice","bima claim reject notice"],packet:"notice_v2",format:"insurance_notice"},
  {keys:["workplace harassment notice","posh notice"],packet:"notice_v2",format:"workplace_harassment_notice"},
  {keys:["property dispute notice","zameen notice","illegal possession notice"],packet:"notice_v2",format:"property_dispute_notice"},
  {keys:["breach contract notice","contract breach notice"],packet:"notice_v2",format:"breach_contract_notice"},
  {keys:["divorce petition","talak","13 hma","divorce draft"],packet:"family",format:"divorce_petition"},
  {keys:["mutual consent divorce","13b hma","aapsi sahmat talak"],packet:"family",format:"mutual_divorce"},
  {keys:["maintenance application","125 bnss","guzara bhatta","wife maintenance"],packet:"family",format:"maintenance"},
  {keys:["domestic violence","12 dv act","gharelu hinsa","dv application"],packet:"family",format:"dv_application"},
  {keys:["child custody","bachche ki custody","26 hma","custody draft"],packet:"family",format:"child_custody"},
];

const PKT_MAP={bail:BAIL,fir:FIR,petitions:PETITIONS,civil:CIVIL,family:FAMILY,criminal:CRIMINAL,ni_rec:NI_REC,prop_con:PROP_CON,affidavit:AFFIDAVIT,labour:LABOUR,company:COMPANY,tax:TAX,env:ENV,banking:BANKING,cyber:CYBER,medical:MEDICAL_INS,rights:RIGHTS,writs:WRITS,matrimonial:MATRIMONIAL,notice_v2:NOTICE_V2};
function getPacket(n){return PKT_MAP[n]||null;}

function findFormat(q){
  const ql=q.toLowerCase();
  const scored=FORMAT_MAP.map(f=>({...f,score:f.keys.filter(k=>ql.includes(k)).length})).filter(f=>f.score>0).sort((a,b)=>b.score-a.score);
  if(!scored.length)return null;
  const best=scored[0];
  const pkt=getPacket(best.packet);if(!pkt)return null;
  const fmt=pkt[best.format];if(!fmt)return null;
  return{...fmt,packet_name:best.packet,format_key:best.format};
}

function findAttachments(fmt){
  if(!fmt?.attach_with)return[];
  return(fmt.attach_with||[]).map(key=>{
    for(const pn of Object.keys(PKT_MAP)){const p=getPacket(pn);if(p?.[key])return{name:p[key].name,key};}
    return null;
  }).filter(Boolean);
}

function findSections(q){
  const ql=q.toLowerCase();
  return SECTIONS_DB.filter(s=>{
    const kws=s.kw||[];
    return kws.some(kw=>ql.includes(kw))||ql.includes(`section ${s.s}`)||ql.includes(`sec ${s.s}`)||ql.includes(`s.${s.s}`)||ql.includes(`article ${s.s}`);
  }).slice(0,6);
}

function findCases(q){
  const ql=q.toLowerCase();
  return CASES.filter(c=>c.kw.some(k=>ql.includes(k))).slice(0,4);
}

function detectIntent(q,hasImg){
  const ql=q.toLowerCase();
  if(hasImg)return'IMAGE';
  const imgKw=["photo mein","image mein","document mein","pdf mein","in this","isme","is document","yeh document","yeh photo","scan kiya","uploaded","attached","see this","dekho yeh","read karo"];
  if(imgKw.some(k=>ql.includes(k)))return'IMAGE';
  const draftKw=["draft","drafting","banao","likho","taiyar karo","application chahiye","petition chahiye","notice chahiye","format chahiye","document chahiye","bail application","notice bhejna","plaint","vakalatnama","deed chahiye","fir likhni","draft karo","likhna hai","banana hai","format do","document do"];
  if(draftKw.some(k=>ql.includes(k)))return'DRAFT';
  const secKw=["section","dhara","article","bns","bnss","bsa","ipc","crpc","kya hai","explain","batao","samjhao","what is","meaning","define","provision","law kya"];
  if(secKw.some(k=>ql.includes(k)))return'SECTION';
  const caseKw=["case","judgment","judgement","verdict","landmark","leading case","supreme court case","case law","precedent"];
  if(caseKw.some(k=>ql.includes(k)))return'CASE';
  return'GENERAL';
}

function extractFields(q){
  const f={};
  const p=[
    [/(?:naam|name|accused|petitioner|applicant|complainant|client)[:\s]+([A-Za-z\s\.]{3,40})(?:,|\.|\n)/i,['name','accused','petitioner','applicant','client','plaintiff','aggrieved']],
    [/(?:s\/o|son of|father)[:\s]+([A-Za-z\s\.]{3,30})(?:,|\.|\n)/i,['father']],
    [/(?:fir|fir no)[:\s#.]*([0-9\/]+)/i,['fir']],
    [/(?:court|adalat)[:\s]+([A-Za-z\s]{3,50})(?:,|\.|\n)/i,['court']],
    [/(?:district|jila|city|zila)[:\s]+([A-Za-z\s]{3,30})(?:,|\.|\n)/i,['district']],
    [/(?:state|rajya)[:\s]+([A-Za-z\s]{3,25})(?:,|\.|\n)/i,['state']],
    [/(?:police station|ps|thana)[:\s]+([A-Za-z\s]{3,40})(?:,|\.|\n)/i,['ps']],
    [/(?:amount|rs\.?|rupees)[:\s]+([\d,]+)/i,['amount']],
    [/(?:cheque|cheque no)[:\s#.]*([0-9]+)/i,['cheque_no']],
    [/(?:bank)[:\s]+([A-Za-z\s]{3,40})(?:,|\.|\n)/i,['bank']],
    [/(?:sections?|under|u\/s|dhara)[:\s]+([0-9A-Za-z,\s/]+?)(?:,|\.|\n|of |bns|bnss)/i,['sections']],
    [/(?:arrest date|arrested on)[:\s]+(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i,['arrest_date']],
    [/(?:marriage date|shadi|vivah)[:\s]+(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i,['marriage_date']],
    [/(?:date|tarikh)[:\s]+(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i,['date','fir_date']],
    [/(?:age|umar)[:\s]+(\d{1,3})/i,['age']],
    [/(?:mobile|phone|contact)[:\s]+(\d{10})/i,['mobile']],
    [/(?:advocate|vakil)[:\s]+([A-Za-z\s\.]{3,40})(?:,|\.|\n)/i,['advocate']],
    [/(?:respondent|opposite party)[:\s]+([A-Za-z\s\.]{3,40})(?:,|\.|\n)/i,['respondent']],
    [/(?:high court|hc)[:\s]+([A-Za-z\s]{3,30})(?:,|\.|\n)/i,['hc']],
    [/(?:jail|prison)[:\s]+([A-Za-z\s]{3,50})(?:,|\.|\n)/i,['jail']],
  ];
  for(const[regex,keys]of p){const m=q.match(regex);if(m)keys.forEach(k=>{if(!f[k])f[k]=m[1].trim();});}
  if(f.name)['accused','petitioner','applicant','client','plaintiff','aggrieved','husband','wife','deponent','complainant'].forEach(k=>{if(!f[k])f[k]=f.name;});
  return f;
}

// ── MAIN HANDLER ──────────────────────────────────────────
module.exports=async function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS')return res.status(200).end();
  if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});

  try{
    const{messages,language,imageData,imageType}=req.body;
    if(!messages||!Array.isArray(messages))return res.status(400).json({error:'Invalid request'});

    const GROQ=process.env.GROQ_API_KEY;
    const TAVILY=process.env.TAVILY_API_KEY;
    const COHERE=process.env.COHERE_API_KEY;
    if(!GROQ)return res.status(500).json({error:'GROQ_API_KEY not configured.'});

    const lastMsg=messages[messages.length-1];
    const userQuery=lastMsg?.content||'';
    const hasImage=!!(imageData&&imageType);
    const langNote=language&&language!=='English'?`CRITICAL: Respond ENTIRELY in ${language}. All legal terms in ${language} wherever possible.`:'';
    const intent=detectIntent(userQuery,hasImage);

    // ── IMAGE / PDF / CAMERA MODE ─────────────────────────
    if(hasImage){
      const visionPrompt=`You are Legal Craft AI — India's most accurate legal assistant.

TASK: Analyze this uploaded ${imageType.includes('pdf')?'PDF document':'image/photo'} carefully.

USER QUERY: "${userQuery}"

STEP 1 — READ DOCUMENT:
Carefully read and extract ALL text visible in the image/document.
Extract: all section numbers, dates, names, case numbers, amounts, legal provisions.

STEP 2 — IDENTIFY DOCUMENT TYPE:
Is it a: FIR / Court Order / Legal Notice / Judgment / Contract / Property Document / 
         Cheque / Bank Statement / Identity Document / Other legal document?

STEP 3 — ANSWER USER QUERY:
Based on extracted text and user query:

If user wants EXPLANATION:
===DOCUMENT IDENTIFIED===
[Type, parties, date, issuing authority]

===EXTRACTED TEXT/DETAILS===
[All important text extracted from image]

===WHAT THIS MEANS LEGALLY===
[Plain language explanation]

===IMPORTANT SECTIONS/PROVISIONS===
[List sections mentioned, their meaning in BNS/BNSS 2023 if old IPC/CrPC]

===WHAT SHOULD YOU DO===
[Practical advice — next steps, deadlines, who to contact]

If user wants DRAFT (based on image):
Extract all details from image and create the requested document.
Wrap draft in ---DRAFT START--- and ---DRAFT END---

IMPORTANT:
- Be 99% accurate — use exact text from image
- If old IPC/CrPC sections appear → mention equivalent BNS/BNSS 2023 section
- Mention any DEADLINES visible in document
- Warn about any URGENT action required
- Suggest free resources: indiankanoon.org, ecourts.gov.in, sci.gov.in

${langNote}`;

      // Use Groq vision model
      const visionMessages=[{
        role:"user",
        content:[
          {type:"image_url",image_url:{url:`data:${imageType};base64,${imageData}`}},
          {type:"text",text:visionPrompt}
        ]
      }];

      let visionReply='';
      let sources=[];

      try{
        const vr=await fetch('https://api.groq.com/openai/v1/chat/completions',{
          method:'POST',
          headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ}`},
          body:JSON.stringify({
            model:'meta-llama/llama-4-scout-17b-16e-instruct',
            messages:visionMessages,
            temperature:0.05,
            max_tokens:4000,
          }),
        });
        if(vr.ok){
          const vd=await vr.json();
          visionReply=vd.choices?.[0]?.message?.content||'';
        }
      }catch(vErr){
        console.error('Groq vision error:',vErr.message);
      }

      // Fallback: if vision fails, use text description
      if(!visionReply){
        visionReply=`I received your image but could not process it with vision. Please describe what's in the image as text and I'll help you.`;
      }

      // Web search for sections found in image
      if(TAVILY&&visionReply){
        try{
          const secMatch=visionReply.match(/Section\s+\d+[A-Za-z]*/gi);
          if(secMatch&&secMatch.length>0){
            const sq=`${secMatch.slice(0,2).join(' ')} Indian law BNS BNSS 2023 explanation indiankanoon`;
            const tr=await fetch('https://api.tavily.com/search',{
              method:'POST',headers:{'Content-Type':'application/json'},
              body:JSON.stringify({api_key:TAVILY,query:sq,search_depth:'basic',max_results:3,include_domains:['indiankanoon.org','sci.gov.in','indiacode.nic.in','livelaw.in']}),
            });
            if(tr.ok){const td=await tr.json();sources=(td.results||[]).slice(0,3).map(r=>({title:r.title,url:r.url,snippet:r.content?.slice(0,200)}));}
          }
        }catch(e){}
      }

      return res.status(200).json({reply:visionReply,intent:'IMAGE',sources,format_used:'Image/Document Analysis',learned_applied:null});
    }

    // ── TEXT MODE ─────────────────────────────────────────
    const sections=findSections(userQuery);
    const cases=findCases(userQuery);
    const matchedFmt=intent==='DRAFT'?findFormat(userQuery):null;
    const fields=matchedFmt?extractFields(userQuery):{};
    const attachments=matchedFmt?findAttachments(matchedFmt):[];

    let templateText='';
    if(matchedFmt?.generate){try{templateText=matchedFmt.generate(fields);}catch(e){}}

    let learnedContext='',learnedCount=0;
    if(matchedFmt){
      try{
        const corrections=await LEARNING.get(matchedFmt.format_key,10);
        learnedContext=LEARNING.toContext(corrections,matchedFmt.format_key);
        learnedCount=corrections.length;
      }catch(e){}
    }

    // Multi-source web search
    let webData='',sources=[];
    if(TAVILY){
      try{
        const queries=intent==='DRAFT'
          ?[`${matchedFmt?.name||userQuery} Indian court format BNS BNSS 2023 official`,`${userQuery} legal document India format`]
          :intent==='SECTION'
          ?[`${userQuery} Indian law section explanation indiankanoon leading cases`,`${userQuery} supreme court high court judgment India`]
          :intent==='CASE'
          ?[`${userQuery} Supreme Court India judgment ratio decidendi`,`${userQuery} case law India full judgment`]
          :[`${userQuery} Indian law BNS BNSS 2023`,`${userQuery} India legal advice`];

        const allRes=[];
        for(const q of queries.slice(0,2)){
          const tr=await fetch('https://api.tavily.com/search',{
            method:'POST',headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              api_key:TAVILY,query:q,search_depth:'advanced',max_results:5,include_answer:true,
              include_domains:['indiankanoon.org','sci.gov.in','ecourts.gov.in','livelaw.in','barandbench.com','indiacode.nic.in','judgments.ecourts.gov.in','advocatekhoj.com','latestlaws.com','casemine.com','manupatra.com'],
            }),
          });
          if(tr.ok){
            const td=await tr.json();
            if(td.answer)webData+=`WEB ANSWER: ${td.answer}\n\n`;
            allRes.push(...(td.results||[]).map(r=>({title:r.title,url:r.url,snippet:r.content?.slice(0,400)})));
          }
        }
        const seen=new Set();
        sources=allRes.filter(r=>{if(seen.has(r.url))return false;seen.add(r.url);return true;}).slice(0,6);
        webData+=sources.map(s=>`SOURCE: ${s.title}\nURL: ${s.url}\n${s.snippet||''}`).join('\n\n');
      }catch(e){console.error('Tavily:',e.message);}
    }

    if(COHERE&&sources.length>3){
      try{
        const cr=await fetch('https://api.cohere.com/v1/rerank',{
          method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${COHERE}`},
          body:JSON.stringify({model:'rerank-english-v3.0',query:userQuery,documents:sources.map(s=>`${s.title}: ${s.snippet||''}`),top_n:4}),
        });
        if(cr.ok){const cd=await cr.json();const rr=(cd.results||[]).sort((a,b)=>b.relevance_score-a.relevance_score).map(r=>sources[r.index]).filter(Boolean);if(rr.length)sources=rr;}
      }catch(e){}
    }

    const secText=sections.map(s=>`**${s.act} — S.${s.s}: ${s.t}**\n${s.d}\nCases: ${s.cl||'—'}`).join('\n\n---\n\n');
    const caseText=cases.map(c=>`**${c.n}** [${c.c}]\nFacts: ${c.f}\nHeld: ${c.h}\nImportance: ${c.i}`).join('\n\n---\n\n');
    const attachNote=attachments.length>0?`\nREQUIRED ATTACHMENTS:\n${attachments.map((a,i)=>`${i+1}. ${a.name}`).join('\n')}`:'';

    let system='';

    if(intent==='DRAFT'){
      system=`You are Legal Craft AI — India's most accurate legal drafting system.
Every draft you produce will be used in REAL Indian courts. 99% accuracy is mandatory.

DOCUMENT: ${matchedFmt?.name||'Legal Document'}
SECTION: ${matchedFmt?.section||''}
COURT: ${matchedFmt?.court||''}

VERIFIED TEMPLATE (USE EXACT STRUCTURE):
${templateText?`---\n${templateText}\n---`:'No template — use proper Indian court format per jurisdiction'}

${learnedContext}

DATABASE SECTIONS:
${secText||'Use web data'}

CASE LAWS:
${caseText||'Use web data'}

WEB RESEARCH:
${webData||'Use template and database'}

MANDATORY DRAFTING RULES:
1. Follow template EXACTLY — every heading, every paragraph structure
2. ALWAYS use BNS 2023 / BNSS 2023 / BSA 2023 — NEVER old IPC/CrPC numbers alone
3. Fill user details accurately — [FILL: description] for missing info
4. Formal legal language — no casual language
5. Correct section numbers from database always
6. Add 2-3 relevant case citations minimum
7. VERIFICATION paragraph always at end
8. Wrap complete draft: ---DRAFT START--- and ---DRAFT END---
9. After draft:
   MISSING INFO: list all [FILL:] blanks
   DOCUMENTS TO ATTACH: ${attachments.map(a=>a.name).join(', ')||'As applicable'}
   FILING FEE: mention applicable fee
   IMPORTANT DATES: any deadlines
${attachNote}
${langNote}`;

    }else if(intent==='SECTION'){
      // Detect which specific act user is asking about
      const ql2=userQuery.toLowerCase();
      const isContractAct=ql2.includes('contract')||ql2.includes('agreement')||ql2.includes('consideration')||ql2.includes('offer')||ql2.includes('acceptance');
      const isBNS=ql2.includes('bns')||ql2.includes('bharatiya nyaya')||ql2.includes('murder')||ql2.includes('theft')||ql2.includes('cheating')||ql2.includes('rape')||ql2.includes('assault');
      const isBNSS=ql2.includes('bnss')||ql2.includes('bail')||ql2.includes('fir')||ql2.includes('arrest')||ql2.includes('chargesheet')||ql2.includes('investigation');
      const isBSA=ql2.includes('bsa')||ql2.includes('evidence')||ql2.includes('confession')||ql2.includes('witness')||ql2.includes('burden of proof')||ql2.includes('dying declaration');
      const isConstitution=ql2.includes('article')||ql2.includes('constitution')||ql2.includes('fundamental right')||ql2.includes('directive')||ql2.includes('amendment');
      
      // Only show relevant sections — not mixed
      const actHint = isContractAct ? 'CONTRACT ACT 1872' : isBNS ? 'BNS 2023' : isBNSS ? 'BNSS 2023' : isBSA ? 'BSA 2023' : isConstitution ? 'CONSTITUTION OF INDIA' : 'RELEVANT ACT';
      
      system=`You are LegalCraft AI — India's most accurate legal section research system.

USER IS ASKING ABOUT: ${actHint}

VERIFIED DATABASE DATA (FROM THIS SPECIFIC ACT ONLY):
\${secText||'Not in database — use web research below'}

VERIFIED CASE LAWS:
\${caseText||'Not found — use web research'}

WEB RESEARCH:
\${webData||'Use knowledge base'}

MANDATORY RESPONSE FORMAT — FOLLOW EXACTLY:

===SECTION DETAILS===
Act: [Full Act Name] | Section: [Number] | Chapter: [if applicable]
[If old IPC/CrPC/Evidence Act]: Now corresponds to [BNS/BNSS/BSA Section Number] [New Act Name]
Nature: [Bailable/Non-bailable] | [Cognizable/Non-cognizable] | Punishment: [if criminal]

===EXACT STATUTORY TEXT===
[Write the COMPLETE word-for-word text of the section exactly as in the Act]
[Sub-sections, provisos, explanations — ALL included]
[DO NOT summarize — give complete text]

===PLAIN LANGUAGE EXPLANATION===
[Explain in simple Hindi/English what this section means]
[Who it applies to, what trigger, what consequence]
[Important exceptions and defences]

===LEADING CASES (minimum 3)===
1. [Full case name] [Year] [Court] [Citation AIR/SCC]
   Facts: [2-3 lines]
   Held: [What court decided]
   Importance: [Why this case matters]

2. [Next case...]

===PRACTICAL TIPS===
[How this section is used in practice]
[Common mistakes lawyers make]
[Related sections to read together]

STRICT RULES:
1. ONLY discuss the section asked — do NOT bring in BNS/BNSS/BSA if user asked about Contract Act
2. ONLY bring BNS/BNSS/BSA update if user specifically asked about old IPC/CrPC section
3. Give COMPLETE statutory text — never summarize or abbreviate the section text
4. All case citations must be real — never fabricate
5. If user asks Contract Act section — talk ONLY Contract Act, not criminal law
${langNote}`;

    }else if(intent==='CASE'){
      system=`You are Legal Craft AI — India's most accurate case law research system.

DATABASE: ${caseText||'Not found'}
WEB DATA: ${webData||'Use knowledge'}

MANDATORY FORMAT:
===CASE DETAILS===
Full name | Court | Year | Citation | Bench (Judges)

===BACKGROUND===
Parties | Dispute | Why went to court

===FACTS===
Chronological step-by-step with dates

===LEGAL ISSUES FRAMED===
Exact questions decided

===ARGUMENTS===
Petitioner's side vs Respondent's side

===JUDGMENT===
Decision (simple words) | Ratio decidendi | Obiter dicta

===IMPACT===
How law changed | Still good law? | Followed by which cases | Practical importance

RULES: Exact citations. No fabrication. Simple clear language.
${langNote}`;

    }else{
      system=`You are Legal Craft AI — India's most accurate and comprehensive legal assistant.

CAPABILITIES:
- Upload photo/PDF → I can read and analyze any legal document
- Ask any section → I give complete explanation with cases
- Ask for draft → I give court-ready format
- Ask any legal question → 99% accurate answer

DATABASE SECTIONS: ${secText||'Not found'}
CASE LAWS: ${caseText||'Not found'}
WEB DATA: ${webData||'Using knowledge base'}

ACCURACY RULES:
1. Always prefer BNS/BNSS/BSA 2023 over old IPC/CrPC
2. Give old → new equivalents always
3. Never fabricate sections or cases
4. Step-by-step practical guidance always
5. Mention free resources: indiankanoon.org, sci.gov.in, ecourts.gov.in
6. For complex matters: recommend consulting advocate
7. Mention ALL relevant time limits/deadlines
${langNote}`;
    }

    const gr=await fetch('https://api.groq.com/openai/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ}`},
      body:JSON.stringify({
        model:'llama-3.3-70b-versatile',
        messages:[{role:'system',content:system},...messages.slice(-14)],
        temperature:0.05,
        max_tokens:4096,
        top_p:0.9,
      }),
    });

    if(!gr.ok){const e=await gr.text();console.error('Groq:',e);return res.status(500).json({error:'AI service error. Try again.'});}
    const gd=await gr.json();
    const reply=gd.choices?.[0]?.message?.content||'Response generate nahi ho saka.';

    return res.status(200).json({
      reply,intent,
      sources:sources.slice(0,5),
      format_used:matchedFmt?.name||null,
      format_key:matchedFmt?.format_key||null,
      attachments_required:attachments.map(a=>a.name),
      learned_applied:learnedCount>0?learnedCount:null,
    });

  }catch(error){
    console.error('Server error:',error.message);
    return res.status(500).json({error:'Server error: '+error.message});
  }
};
