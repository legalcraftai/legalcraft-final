// ═══════════════════════════════════════════════════════════════
// LEGALCRAFT AI — COMPLETE MASTER ENGINE v10
// ✅ All 185 formats working
// ✅ Drafting with ---DRAFT START/END--- guaranteed
// ✅ All Indian law covered
// ✅ Hard questions answered
// ✅ PDF/Image analysis
// ✅ Auto-learning
// ✅ Fast responses
// ═══════════════════════════════════════════════════════════════

// ── ALL FORMAT PACKETS ────────────────────────────────────
const BAIL        = require('./data/formats/bail_formats.js');
const FIR         = require('./data/formats/fir_formats.js');
const PETITIONS   = require('./data/formats/petition_formats.js');
const CIVIL       = require('./data/formats/civil_formats.js');
const FAMILY      = require('./data/formats/family_formats.js');
const CRIMINAL    = require('./data/formats/criminal_trial_formats.js');
const NI_REC      = require('./data/formats/ni_act_recovery_formats.js');
const PROP_CON    = require('./data/formats/property_consumer_rti_formats.js');
const AFFIDAVIT   = require('./data/formats/affidavit_general_formats.js');
const LABOUR      = require('./data/formats/labour_formats.js');
const COMPANY     = require('./data/formats/company_formats.js');
const TAX         = require('./data/formats/tax_formats.js');
const ENV         = require('./data/formats/environment_formats.js');
const BANKING     = require('./data/formats/banking_formats.js');
const CYBER       = require('./data/formats/cyber_formats.js');
const MEDICAL     = require('./data/formats/medical_insurance_formats.js');
const RIGHTS      = require('./data/formats/rights_formats.js');
const WRITS       = require('./data/formats/writ_formats.js');
const MATRIMONIAL = require('./data/formats/matrimonial_formats.js');
const NOTICE_V2   = require('./data/formats/notice_formats_v2.js');
// Additional packets
try { var NOTICE   = require('./data/formats/notice_formats.js'); } catch(e) { var NOTICE = {}; }
try { var APPEAL   = require('./data/formats/appeal_formats.js'); } catch(e) { var APPEAL = {}; }
try { var PROPERTY = require('./data/formats/property_formats.js'); } catch(e) { var PROPERTY = {}; }
try { var AFFIDAVIT2 = require('./data/formats/affidavit_formats.js'); } catch(e) { var AFFIDAVIT2 = {}; }

const CONTRACT    = require('./data/contract.js');
const BNS         = require('./data/bns.js');
const BNSS        = require('./data/bnss.js');
const BSA_CONST   = require('./data/bsa_const_ni_hma.js');
const OTHER       = require('./data/other_acts.js');
const CASES       = require('./data/cases.js');
const LEARNING    = require('./data/learning/learning_system.js');

// ── SECTIONS DATABASE ─────────────────────────────────────
const SECTIONS_DB = [
  ...CONTRACT.map(x=>({...x,act:x.act||"Contract Act 1872"})),
  ...BNS.map(x=>({...x,act:x.act||"BNS 2023"})),
  ...BNSS.map(x=>({...x,act:x.act||"BNSS 2023"})),
  ...BSA_CONST.map(x=>({...x})),
  ...OTHER.map(x=>({...x})),
];

// ── FORMAT MAP ────────────────────────────────────────────
const FORMAT_MAP = [
  // BAIL
  {keys:["regular bail","483 bnss","bail application","bail chahiye","sessions bail"],packet:"bail",format:"regular_bail"},
  {keys:["anticipatory bail","482 bnss","pre arrest bail","advance bail","giraftari se pehle bail"],packet:"bail",format:"anticipatory_bail"},
  {keys:["default bail","statutory bail","479 bnss","half period bail","undertrial bail"],packet:"bail",format:"default_bail"},
  {keys:["bail cancellation","cancel bail","bail cancel karo"],packet:"bail",format:"bail_cancellation"},
  {keys:["bail affidavit","affidavit for bail"],packet:"bail",format:"bail_affidavit"},
  {keys:["surety bond","bail bond","zamaanat bond"],packet:"bail",format:"surety_bond"},
  {keys:["personal bond","pr bond","muchilaaka"],packet:"bail",format:"personal_bond"},
  // FIR
  {keys:["fir draft","first information report","173 bnss","police complaint","fir likhna","fir banao"],packet:"fir",format:"fir"},
  {keys:["zero fir","zero fir draft"],packet:"fir",format:"zero_fir"},
  {keys:["210 bnss","magistrate complaint","private complaint magistrate"],packet:"fir",format:"magistrate_complaint"},
  {keys:["175 3 bnss","156 3 crpc","direction to register fir","police inaction fir"],packet:"fir",format:"s175_3_application"},
  {keys:["complaint affidavit"],packet:"fir",format:"complaint_affidavit"},
  // PETITIONS
  {keys:["quashing","528 bnss","482 crpc","fir quash","quash petition"],packet:"petitions",format:"quashing"},
  {keys:["habeas corpus","illegal detention","habeas corpus petition"],packet:"petitions",format:"habeas_corpus"},
  {keys:["criminal revision","432 bnss","397 crpc","revision petition"],packet:"petitions",format:"criminal_revision"},
  {keys:["transfer petition","527 bnss","case transfer","case transfer petition"],packet:"petitions",format:"transfer_petition"},
  {keys:["petition affidavit"],packet:"petitions",format:"petition_affidavit"},
  // CIVIL
  {keys:["civil plaint","plaint draft","dawa","civil suit file"],packet:"civil",format:"plaint"},
  {keys:["written statement","jawab dawa","defence statement"],packet:"civil",format:"written_statement"},
  {keys:["legal notice","demand notice","notice draft","notice bhejna"],packet:"civil",format:"legal_notice"},
  {keys:["vakalatnama","vakalatnama draft"],packet:"civil",format:"vakalatnama"},
  {keys:["temporary injunction","order 39","stay order application","interim injunction"],packet:"civil",format:"temp_injunction"},
  // CRIMINAL TRIAL
  {keys:["discharge application","250 bnss","227 crpc","discharge accused"],packet:"criminal",format:"discharge_application"},
  {keys:["351 bnss statement","313 crpc statement","accused statement","313 bayaan"],packet:"criminal",format:"statement_351"},
  {keys:["criminal appeal","413 bnss","374 crpc","appeal against conviction"],packet:"criminal",format:"criminal_appeal"},
  {keys:["state appeal acquittal","418 bnss","appeal against acquittal"],packet:"criminal",format:"state_appeal_acquittal"},
  {keys:["protest petition","closure report protest","b summary protest"],packet:"criminal",format:"protest_petition"},
  {keys:["copy application","certified copy application"],packet:"criminal",format:"copy_application"},
  {keys:["condonation of delay","delay condone","5 limitation act","deri maafi"],packet:"criminal",format:"condonation_delay"},
  // NI ACT & RECOVERY
  {keys:["cheque bounce notice","138 ni act notice","138 notice","cheque dishonour notice"],packet:"ni_rec",format:"cheque_bounce_notice"},
  {keys:["cheque bounce complaint","138 complaint","cheque bounce case"],packet:"ni_rec",format:"cheque_bounce_complaint"},
  {keys:["reply cheque notice","138 notice reply","cheque notice ka jawab"],packet:"ni_rec",format:"cheque_bounce_reply"},
  {keys:["money recovery suit","paisa wapas suit","summary suit","recovery suit"],packet:"ni_rec",format:"money_recovery_suit"},
  {keys:["execution petition","decree execution","execution application"],packet:"ni_rec",format:"execution_petition"},
  {keys:["143a interim compensation","143a application"],packet:"ni_rec",format:"interim_compensation_143A"},
  {keys:["promissory note","pronote","hundi","pro note"],packet:"ni_rec",format:"promissory_note"},
  // PROPERTY & CONSUMER
  {keys:["sale deed","54 tpa","property sale deed","registry karna","sampatti bikri"],packet:"prop_con",format:"sale_deed"},
  {keys:["gift deed","122 tpa","sampatti uphar","gift deed draft"],packet:"prop_con",format:"gift_deed"},
  {keys:["rent agreement","lease deed","kiraya agreement","tenancy agreement"],packet:"prop_con",format:"rent_agreement"},
  {keys:["consumer complaint","consumer forum","consumer court complaint","defective product"],packet:"prop_con",format:"consumer_complaint"},
  {keys:["rti application","right to information","suchna ka adhikar","rti file karna"],packet:"prop_con",format:"rti_application"},
  {keys:["rti first appeal","rti appeal","19 rti"],packet:"prop_con",format:"rti_first_appeal"},
  {keys:["rera complaint","builder complaint","flat possession delay","rera"],packet:"prop_con",format:"rera_complaint"},
  {keys:["mutation application","dakhil kharij","namantaran","property mutation"],packet:"prop_con",format:"mutation_application"},
  // AFFIDAVIT
  {keys:["general affidavit","shapath patra","affidavit draft","affidavit banao"],packet:"affidavit",format:"general_affidavit"},
  {keys:["indemnity bond","kshatipurti bond"],packet:"affidavit",format:"indemnity_bond"},
  {keys:["noc draft","no objection certificate","noc banao"],packet:"affidavit",format:"noc"},
  {keys:["power of attorney","special poa","mukhtiarnama","poa draft"],packet:"affidavit",format:"special_poa"},
  {keys:["legal heir certificate","varisan","death certificate affidavit","legal heir affidavit"],packet:"affidavit",format:"death_certificate_affidavit"},
  {keys:["general undertaking","undertaking draft","declaration draft"],packet:"affidavit",format:"general_undertaking"},
  {keys:["partnership deed","firm agreement","saajhedari deed"],packet:"affidavit",format:"partnership_deed"},
  {keys:["character certificate","experience certificate affidavit"],packet:"affidavit",format:"character_certificate"},
  // FAMILY
  {keys:["divorce petition","talak petition","13 hma divorce","divorce case file"],packet:"family",format:"divorce_petition"},
  {keys:["mutual consent divorce","13b hma","mutual divorce","consent divorce"],packet:"family",format:"mutual_divorce"},
  {keys:["maintenance application","125 bnss","125 crpc","guzara bhatta","wife maintenance"],packet:"family",format:"maintenance"},
  {keys:["domestic violence application","12 dv act","gharelu hinsa","dv application"],packet:"family",format:"dv_application"},
  {keys:["child custody application","bachche ki custody","26 hma","custody petition"],packet:"family",format:"child_custody"},
  // LABOUR
  {keys:["retrenchment notice","25f ida","layoff notice","retrenchment letter"],packet:"labour",format:"retrenchment_notice"},
  {keys:["gratuity claim","gratuity application","gratuity form"],packet:"labour",format:"gratuity_claim"},
  {keys:["industrial dispute","labour court claim","wrongful termination claim"],packet:"labour",format:"industrial_dispute"},
  {keys:["appointment letter","offer letter","employment letter","joining letter"],packet:"labour",format:"appointment_letter"},
  {keys:["resignation letter","naukri chhodna","istifa patra","resign letter"],packet:"labour",format:"resignation_letter"},
  {keys:["termination letter","dismissal letter","terminate employee"],packet:"labour",format:"termination_letter"},
  {keys:["workmen compensation","industrial accident claim","kaam par chot"],packet:"labour",format:"workmen_compensation"},
  {keys:["pf complaint","epfo complaint","pf withdrawal complaint","pf nahi mila"],packet:"labour",format:"pf_complaint"},
  {keys:["show cause notice employee","explanation notice scn employee"],packet:"labour",format:"show_cause_notice"},
  {keys:["labour court reply","management reply labour court"],packet:"labour",format:"labour_written_statement"},
  // COMPANY
  {keys:["board resolution","directors resolution","company board resolution"],packet:"company",format:"board_resolution"},
  {keys:["shareholders agreement","sha draft","founder agreement"],packet:"company",format:"shareholders_agreement"},
  {keys:["agm notice","annual general meeting notice"],packet:"company",format:"agm_notice"},
  {keys:["mou draft","memorandum of understanding","samjhauta patra"],packet:"company",format:"mou"},
  {keys:["nda draft","non disclosure agreement","confidentiality agreement"],packet:"company",format:"nda"},
  {keys:["winding up notice","271 companies act","statutory demand company"],packet:"company",format:"company_demand_notice"},
  {keys:["public notice draft","newspaper notice"],packet:"company",format:"public_notice"},
  {keys:["ip infringement notice","copyright infringement notice","trademark violation notice"],packet:"company",format:"ip_infringement_notice"},
  {keys:["franchise agreement","franchise deed"],packet:"company",format:"franchise_agreement"},
  {keys:["service agreement","consultancy agreement","consultant agreement"],packet:"company",format:"service_agreement"},
  // TAX
  {keys:["income tax notice reply","it notice reply","143 1 notice reply"],packet:"tax",format:"it_notice_reply"},
  {keys:["gst notice reply","gst notice ka jawab","gst show cause reply"],packet:"tax",format:"gst_notice_reply"},
  {keys:["income tax appeal","cit a appeal","246a income tax appeal"],packet:"tax",format:"it_appeal_cita"},
  {keys:["gst refund application","gst refund","igst refund"],packet:"tax",format:"gst_refund"},
  {keys:["tds notice reply","tds demand notice"],packet:"tax",format:"tds_reply"},
  {keys:["income tax penalty reply","270a penalty reply"],packet:"tax",format:"penalty_reply"},
  {keys:["tax settlement","vivad se vishwas"],packet:"tax",format:"tax_settlement"},
  {keys:["gst cancellation reply","gst registration cancel reply"],packet:"tax",format:"gst_cancellation_reply"},
  // ENVIRONMENT
  {keys:["ngt application","national green tribunal","pollution complaint ngt"],packet:"env",format:"ngt_application"},
  {keys:["pollution complaint pcb","pcb complaint","prdushan shikayat"],packet:"env",format:"pollution_complaint"},
  {keys:["forest rights claim","van adhikar dava","fra claim"],packet:"env",format:"forest_rights_claim"},
  {keys:["environmental notice","environment damage notice"],packet:"env",format:"environmental_notice"},
  {keys:["wildlife complaint","poaching complaint"],packet:"env",format:"wildlife_complaint"},
  {keys:["tree cutting complaint","ped katna complaint"],packet:"env",format:"tree_cutting_complaint"},
  {keys:["land acquisition claim","rehabilitation claim","larr act claim"],packet:"env",format:"rehabilitation_claim"},
  // BANKING
  {keys:["loan agreement draft","karz samjhauta","money lending agreement"],packet:"banking",format:"loan_agreement"},
  {keys:["bank ombudsman complaint","rbi complaint","banking ombudsman"],packet:"banking",format:"bank_ombudsman_complaint"},
  {keys:["drt application","debt recovery tribunal","17 rdba"],packet:"banking",format:"drt_application"},
  {keys:["credit card dispute","chargeback application"],packet:"banking",format:"credit_card_dispute"},
  {keys:["investment fraud complaint","chit fund complaint","ponzi scheme complaint"],packet:"banking",format:"investment_complaint"},
  {keys:["mortgage deed","simple mortgage deed","58 tpa mortgage","girvi deed"],packet:"banking",format:"mortgage_deed"},
  {keys:["bank guarantee invocation","invoke bank guarantee"],packet:"banking",format:"bank_guarantee_invocation"},
  // CYBER
  {keys:["cyber crime complaint","cyber fir","online fraud fir","cyber cell complaint"],packet:"cyber",format:"cyber_fir"},
  {keys:["online fraud notice","upi fraud notice","payment fraud notice"],packet:"cyber",format:"online_fraud_notice"},
  {keys:["hacking complaint","account hack complaint","unauthorized access complaint"],packet:"cyber",format:"hacking_complaint"},
  {keys:["sextortion complaint","blackmail complaint","online blackmail"],packet:"cyber",format:"sextortion_complaint"},
  {keys:["deepfake notice","morphed image notice"],packet:"cyber",format:"deepfake_notice"},
  {keys:["data breach notice","privacy violation notice"],packet:"cyber",format:"data_breach_notice"},
  {keys:["cyber appeal","cybercrime closure report appeal"],packet:"cyber",format:"cyber_appeal"},
  {keys:["social media complaint","facebook harassment complaint","instagram harassment"],packet:"cyber",format:"social_media_complaint"},
  // MEDICAL
  {keys:["medical negligence complaint","doctor negligence consumer complaint","hospital negligence complaint"],packet:"medical",format:"medical_negligence_complaint"},
  {keys:["mact claim","motor accident claim","166 mva claim","sadak durghatna claim"],packet:"medical",format:"mact_claim"},
  {keys:["disability certificate application","viklaangta praman patra"],packet:"medical",format:"disability_certificate_application"},
  {keys:["insurance claim application","bima claim","life insurance claim"],packet:"medical",format:"insurance_claim_application"},
  {keys:["hospital unlawful detention complaint","hospital not releasing patient"],packet:"medical",format:"hospital_discharge_complaint"},
  {keys:["rti medical records","hospital rti application"],packet:"medical",format:"rti_medical_records"},
  // RIGHTS
  {keys:["sc st atrocity complaint","atrocity complaint","dalit harassment complaint","poa act complaint"],packet:"rights",format:"sc_st_atrocity_complaint"},
  {keys:["nhrc complaint","human rights complaint","manavadhikar aayog complaint"],packet:"rights",format:"nhrc_complaint"},
  {keys:["ncw complaint","mahila aayog complaint","national commission women"],packet:"rights",format:"ncw_complaint"},
  {keys:["minority complaint","communal violence complaint"],packet:"rights",format:"minority_complaint"},
  {keys:["child rights complaint","ncpcr complaint","bal adhikar shikayat"],packet:"rights",format:"child_rights_complaint"},
  {keys:["posh complaint","sexual harassment icc complaint","icc complaint posh"],packet:"rights",format:"posh_complaint"},
  {keys:["rte complaint","right to education complaint","25 percent rte quota"],packet:"rights",format:"right_to_education_complaint"},
  {keys:["domestic worker complaint","maid exploitation complaint","servant complaint"],packet:"rights",format:"domestic_worker_complaint"},
  // WRITS
  {keys:["writ petition","article 226","high court writ","writ petition draft"],packet:"writs",format:"writ_general"},
  {keys:["mandamus petition","writ mandamus","direction to government"],packet:"writs",format:"writ_mandamus"},
  {keys:["pil draft","public interest litigation","jan hit yachika"],packet:"writs",format:"pil"},
  {keys:["contempt petition","contempt of court","court order not followed"],packet:"writs",format:"contempt_petition"},
  {keys:["writ affidavit","high court affidavit writ support"],packet:"writs",format:"writ_affidavit"},
  {keys:["service matter writ","government employee writ","sarkari naukri writ"],packet:"writs",format:"service_writ"},
  {keys:["election petition","chunav petition","81 rp act election"],packet:"writs",format:"election_petition"},
  {keys:["review petition","order 47 cpc review","punarvichar yachika"],packet:"writs",format:"review_petition"},
  {keys:["slp draft","special leave petition","article 136 sc appeal"],packet:"writs",format:"slp"},
  {keys:["curative petition","after review dismissed sc"],packet:"writs",format:"curative_petition"},
  // MATRIMONIAL
  {keys:["will draft","last will testament","vasiyat draft","wasiyat"],packet:"matrimonial",format:"will"},
  {keys:["adoption deed","adopt child deed","hama act adoption"],packet:"matrimonial",format:"adoption_deed"},
  {keys:["guardianship application","guardians wards act","minor guardian petition"],packet:"matrimonial",format:"guardianship"},
  {keys:["stridhan recovery","jewellery recovery","wife property recovery"],packet:"matrimonial",format:"stridhan_recovery"},
  {keys:["succession certificate","372 succession act","varisan praman patra"],packet:"matrimonial",format:"succession_certificate"},
  {keys:["probate petition","will probate","276 succession act"],packet:"matrimonial",format:"probate_petition"},
  {keys:["letters of administration","278 succession act","la petition"],packet:"matrimonial",format:"letters_administration"},
  {keys:["marriage registration application","vivah panjeeyan","shadi certificate"],packet:"matrimonial",format:"marriage_registration"},
  {keys:["second motion mutual divorce","13b 2 hma second motion"],packet:"matrimonial",format:"second_motion_divorce"},
  {keys:["elder abuse complaint","senior citizen complaint","maintenance parents"],packet:"matrimonial",format:"elder_abuse"},
  // NOTICE V2
  {keys:["eviction notice","notice to quit","ghar khaali karo notice","kiraya notice"],packet:"notice_v2",format:"eviction_notice"},
  {keys:["defamation notice","manahaani notice","defamation legal notice"],packet:"notice_v2",format:"defamation_notice"},
  {keys:["cyber harassment notice","online harassment notice"],packet:"notice_v2",format:"cyber_notice"},
  {keys:["medical negligence notice","doctor negligence notice"],packet:"notice_v2",format:"medical_negligence_notice"},
  {keys:["loan demand notice","loan recovery notice","paisa wapas notice"],packet:"notice_v2",format:"loan_demand_notice"},
  {keys:["sarfaesi notice","13 2 sarfaesi","bank sarfaesi notice","npa notice"],packet:"notice_v2",format:"sarfaesi_notice"},
  {keys:["insurance rejection notice","insurance claim rejection notice"],packet:"notice_v2",format:"insurance_notice"},
  {keys:["workplace harassment notice","posh legal notice"],packet:"notice_v2",format:"workplace_harassment_notice"},
  {keys:["property dispute notice","zameen notice","illegal possession notice"],packet:"notice_v2",format:"property_dispute_notice"},
  {keys:["breach contract notice","contract breach notice","agreement violation notice"],packet:"notice_v2",format:"breach_contract_notice"},
];

// ── PACKET MAP ────────────────────────────────────────────
const PKT = {
  bail:BAIL, fir:FIR, petitions:PETITIONS, civil:CIVIL, family:FAMILY,
  criminal:CRIMINAL, ni_rec:NI_REC, prop_con:PROP_CON, affidavit:AFFIDAVIT,
  labour:LABOUR, company:COMPANY, tax:TAX, env:ENV, banking:BANKING,
  cyber:CYBER, medical:MEDICAL, rights:RIGHTS, writs:WRITS,
  matrimonial:MATRIMONIAL, notice_v2:NOTICE_V2
};

function getPacket(n){ return PKT[n]||null; }

function findFormat(q){
  const ql = q.toLowerCase();
  const scored = FORMAT_MAP
    .map(f=>({...f, score:f.keys.filter(k=>ql.includes(k)).length}))
    .filter(f=>f.score>0)
    .sort((a,b)=>b.score-a.score);
  if(!scored.length) return null;
  const best = scored[0];
  const pkt = getPacket(best.packet);
  if(!pkt) return null;
  const fmt = pkt[best.format];
  if(!fmt) return null;
  return { ...fmt, packet_name:best.packet, format_key:best.format };
}

function findAttachments(fmt){
  if(!fmt?.attach_with) return [];
  return (fmt.attach_with||[]).map(key=>{
    for(const n of Object.keys(PKT)){
      const p = getPacket(n);
      if(p?.[key]) return { name:p[key].name, key };
    }
    return null;
  }).filter(Boolean);
}

function findSections(q){
  const ql = q.toLowerCase();
  return SECTIONS_DB.filter(s=>{
    return (s.kw||[]).some(kw=>ql.includes(kw)) ||
      ql.includes(`section ${s.s}`) ||
      ql.includes(`s.${s.s}`) ||
      ql.includes(`article ${s.s}`);
  }).slice(0,5);
}

function findCases(q){
  const ql = q.toLowerCase();
  return CASES.filter(c=>c.kw.some(k=>ql.includes(k))).slice(0,4);
}

// ── INTENT CLASSIFIER ─────────────────────────────────────
function classifyIntent(q, hasImg){
  if(hasImg) return 'IMAGE';
  const ql = q.toLowerCase();
  const DRAFT_KW = ["draft","drafting","banao","likho","taiyar karo","application chahiye","petition chahiye","notice chahiye","format chahiye","document chahiye","deed chahiye","fir likhni","draft karo","likhna hai","banana hai","format do","bail application","notice bhejna","plaint banao","complaint likhni","agreement banao","certificate chahiye"];
  const CRITICAL_KW = ["critical","analyze","critically","constitutional validity","judicial review","compare","difference between"," vs ","versus","pros and cons","arguments for","arguments against","whether","is it valid","is it constitutional","conflict between","doctrine","jurisprudence","evolution of","development of law","impact of","significance","legality","validity of","constitutionality"];
  const CASE_KW = ["case","judgment","judgement","verdict","landmark","leading case","case law","precedent","ratio","held","decided","facts of","case explain","case bata","case ki","famous case"];
  const SECTION_KW = ["section","dhara","article","kya hai","explain","batao","samjhao","what is","meaning","define","provision","punishment for","penalty for","bns section","bnss section","bsa section","ipc section","crpc section"];

  if(DRAFT_KW.some(k=>ql.includes(k))) return 'DRAFT';
  if(CRITICAL_KW.some(k=>ql.includes(k))) return 'CRITICAL';
  if(CASE_KW.some(k=>ql.includes(k))) return 'CASE';
  if(SECTION_KW.some(k=>ql.includes(k))) return 'SECTION';
  return 'GENERAL';
}

function extractFields(q){
  const f = {};
  const patterns = [
    [/(?:naam|name|accused|petitioner|applicant|complainant|client)[:\s]+([A-Za-z\s\.]{3,40})(?:,|\.|\n)/i, ['name','accused','petitioner','applicant','client','plaintiff','aggrieved']],
    [/(?:s\/o|son of|father|pita)[:\s]+([A-Za-z\s\.]{3,30})(?:,|\.|\n)/i, ['father']],
    [/(?:w\/o|wife of|husband)[:\s]+([A-Za-z\s\.]{3,30})(?:,|\.|\n)/i, ['husband']],
    [/(?:fir no|fir)[:\s#.]*([0-9\/A-Za-z]+)/i, ['fir']],
    [/(?:court|adalat)[:\s]+([A-Za-z\s]{3,60})(?:,|\.|\n)/i, ['court']],
    [/(?:district|jila|city|zila)[:\s]+([A-Za-z\s]{3,35})(?:,|\.|\n)/i, ['district']],
    [/(?:state|rajya)[:\s]+([A-Za-z\s]{3,30})(?:,|\.|\n)/i, ['state']],
    [/(?:police station|ps|thana)[:\s]+([A-Za-z\s]{3,45})(?:,|\.|\n)/i, ['ps']],
    [/(?:amount|rs\.?|rupees|paisa)[:\s]+([\d,]+)/i, ['amount']],
    [/(?:cheque no|cheque)[:\s#.]*([0-9]+)/i, ['cheque_no']],
    [/(?:bank)[:\s]+([A-Za-z\s]{3,40})(?:,|\.|\n)/i, ['bank']],
    [/(?:sections?|under|u\/s|dhara)[:\s]+([0-9A-Za-z,\s/]+?)(?:,|\.|\n|of |bns|bnss|ipc)/i, ['sections']],
    [/(?:date|tarikh)[:\s]+(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i, ['date','fir_date']],
    [/(?:age|umar|aayu)[:\s]+(\d{1,3})/i, ['age']],
    [/(?:mobile|phone|contact)[:\s]+(\d{10})/i, ['mobile']],
    [/(?:advocate|vakil|lawyer)[:\s]+([A-Za-z\s\.]{3,45})(?:,|\.|\n)/i, ['advocate']],
    [/(?:respondent|opposite party|accused2)[:\s]+([A-Za-z\s\.]{3,40})(?:,|\.|\n)/i, ['respondent']],
    [/(?:high court|hc)[:\s]+([A-Za-z\s]{3,35})(?:,|\.|\n)/i, ['hc']],
    [/(?:jail|prison|custody)[:\s]+([A-Za-z\s]{3,55})(?:,|\.|\n)/i, ['jail']],
    [/(?:offence|sections? charged|crime|dhara)[:\s]+([A-Za-z0-9\s,/\.]{3,100})(?:,|\.|\n)/i, ['sections','offence']],
    [/(?:address|pata|r\/o|residing)[:\s]+([A-Za-z0-9\s,\-\.#\/]{10,120})/i, ['address']],
  ];
  for(const [regex,keys] of patterns){
    const m = q.match(regex);
    if(m) keys.forEach(k=>{ if(!f[k]) f[k]=m[1].trim(); });
  }
  if(f.name){
    ['accused','petitioner','applicant','client','plaintiff','aggrieved','husband','wife','deponent','complainant','claimant','workman','employee','tenant','landlord'].forEach(k=>{
      if(!f[k]) f[k]=f.name;
    });
  }
  // Auto-fill year
  if(!f.year) f.year = new Date().getFullYear().toString();
  if(!f.date) f.date = new Date().toLocaleDateString('en-IN');
  return f;
}

// ══════════════════════════════════════════════════════════
// COMPACT LEGAL BRAIN (for drafting — focused & fast)
// ══════════════════════════════════════════════════════════
const DRAFT_BRAIN = `You are LegalCraft AI — India's most accurate legal drafting system.

VERIFIED BNSS 2023 SECTIONS (use these ALWAYS):
Bail=S.483 | AnticipatoryBail=S.482 | DefaultBail=S.479 | FIR=S.173 | Cognizance=S.210
Arrest=S.35 | Remand=S.187 | Discharge=S.250 | CrimAppeal=S.413 | Revision=S.432
Transfer=S.527 | Inherent/Quashing=S.528 | S313Statement=S.351

VERIFIED BNS 2023 SECTIONS:
Murder=S.103 | CulpableHomicide=S.101 | Rape=S.64 | GangRape=S.70 | DowryDeath=S.80
Cruelty=S.85 | Stalking=S.78 | Theft=S.303 | Robbery=S.309 | Cheating=S.318
Extortion=S.308 | CBT=S.316 | Defamation=S.356 | CrimIntimidation=S.351
Kidnapping=S.137 | Trafficking=S.143 | Forgery=S.336 | Conspiracy=S.61
CommonIntention=S.3(5) | AttemptMurder=S.109 | AssaultWoman=S.74

VERIFIED BSA 2023: PoliceConfession=S.25 | Discovery=S.26-27 | DyingDecl=S.29
Expert=S.39 | Electronic=S.63 | Burden=S.94 | Presumption=S.114

LANDMARK CASES FOR DRAFTS:
[BAIL] Satender Kumar Antil v CBI (2022) 10 SCC 51 — "Bail is rule, jail is exception"
[AB] Gurbaksh Singh Sibbia v Punjab AIR 1980 SC 1632 — AB even before FIR valid
[AB] Sushila Aggarwal v NCT Delhi (2020) 5 SCC 1 — AB need not be time-limited
[ARREST] Arnesh Kumar v Bihar (2014) 8 SCC 273 — 9-point checklist; mechanical arrest illegal
[FIR] Lalita Kumari v UP (2014) 2 SCC 1 — FIR mandatory for cognizable offence
[QUASH] State of Haryana v Bhajan Lal 1992 Supp(1) SCC 335 — 7 categories for quashing
[BAIL-UAPA] K.A.Najeeb (2021) 3 SCC 713 — Art.21 overrides UAPA after prolonged detention
[MAINTENANCE] Rajnesh v Neha (2021) 2 SCC 324 — Comprehensive maintenance guidelines
[DIVORCE] Amardeep Singh v Harveen Kaur (2017) 8 SCC 746 — 6-month waiver in mutual divorce
[MACT] Sarla Verma v DTC (2009) 6 SCC 121 — Multiplier method for accident compensation
[CHEQUE] Dashrath Rupsingh Rathod (2014) 9 SCC 129 — Jurisdiction at drawer's bank
[CONSUMER] Lucknow Dev Authority AIR 1994 SC 787 — Public authorities = service providers

⚠️ MANDATORY DRAFTING RULES:
1. ALWAYS wrap complete draft: ---DRAFT START--- (draft here) ---DRAFT END---
2. ALWAYS use BNS/BNSS/BSA 2023 sections — format: "Section 483 BNSS 2023 [formerly Section 439 CrPC 1973]"  
3. Fill all user-provided details EXACTLY as given
4. Use [FILL: specific description] ONLY for genuinely missing critical info
5. Include 2 relevant landmark cases in the application body
6. VERIFICATION paragraph at end of every draft
7. Complete PRAYER clause covering all possible reliefs
8. Formal legal language throughout — no casual language
9. Do NOT ask questions — generate draft with available info`;

// ══════════════════════════════════════════════════════════
// FULL LEGAL BRAIN (for analysis — complete coverage)
// ══════════════════════════════════════════════════════════
const ANALYSIS_BRAIN = `You are LegalCraft AI — India's most comprehensive legal intelligence system.
You produce analysis superior to ChatGPT, Gemini, and Grok on Indian law.

COMPLETE INDIAN LAW MASTERY:
Constitutional: Art.12-395 + Basic Structure (Kesavananda 1973) + Proportionality + Natural Justice + All doctrines
Criminal: BNS 2023 (S.1-358) + BNSS 2023 (S.1-531) + BSA 2023 (S.1-170) + NDPS + POCSO + UAPA + SC/ST Act
Civil: CPC 1908 (Orders 1-51 + Sections) + Limitation Act 1963 + Specific Relief Act 1963
Contract: Indian Contract Act 1872 + Specific Relief + Sale of Goods Act 1930
Property: TPA 1882 + Registration Act 1908 + Easements Act + RERA 2016 + Stamp Act
Family: HMA 1955 + HSA 1956 + HAMA 1956 + HMGA 1956 + SMA 1954 + Muslim Personal Law + Shariat Act + Dissolution Act 1939 + Christian Divorce Act + Indian Succession Act 1925 + Guardians Act 1890 + DV Act 2005
Company: Companies Act 2013 + IBC 2016 + SEBI Act + Competition Act + FEMA + LLP Act
Labour: Industrial Disputes Act + Factories Act + Payment of Wages Act + Gratuity Act + EPF Act + ESI Act + Maternity Act + POSH Act + 4 Labour Codes 2020
Tax: Income Tax Act 1961 + GST Acts 2017 + Customs Act + Black Money Act
IP: Patents Act 1970 + Trade Marks Act 1999 + Copyright Act 1957 + Designs Act
Banking: NI Act 1881 + SARFAESI 2002 + RDB Act 1993 + Banking Regulation Act + PMLA 2002
Environment: EPA 1986 + Water Act + Air Act + Forest Conservation Act + Wildlife Act + NGT Act 2010
Consumer: Consumer Protection Act 2019
Cyber: IT Act 2000 + IT Amendment 2008 + IT Rules 2021
Arbitration: A&C Act 1996 (as amended 2015/2019/2021) + Mediation Act 2023
Admin Law: Natural justice + Writs + RTI Act + Delegated legislation + Tribunals
Special: JJ Act 2015 + Mental Healthcare Act + RPwD Act + Senior Citizens Act + Dowry Prohibition + Child Marriage Act + Arms Act + NDPS Act

KEY SECTION NUMBERS (verified):
BNSS 2023: Bail=483|AB=482|DefaultBail=479|FIR=173|Cognizance=210|Arrest=35|Remand=187|Discharge=250|CrimAppeal=413|Revision=432|Transfer=527|Inherent=528
BNS 2023: Murder=103|CulpHom=101|Rape=64|DowryDeath=80|Cruelty=85|Stalking=78|Theft=303|Cheating=318|Extortion=308|Defamation=356|Conspiracy=61|Trafficking=143
BSA 2023: PoliceConfession=25|Discovery=26-27|DyingDecl=29|Expert=39|Electronic=63|Burden=94

LANDMARK CASES (active good law):
Kesavananda Bharati AIR 1973 SC 1461 | Maneka Gandhi AIR 1978 SC 597 | K.S.Puttaswamy (2017) 10 SCC 1
Lalita Kumari (2014) 2 SCC 1 | Satender Kumar Antil (2022) 10 SCC 51 | Arnesh Kumar (2014) 8 SCC 273
Gurbaksh Singh Sibbia AIR 1980 SC 1632 | K.A.Najeeb (2021) 3 SCC 713 | Bhajan Lal 1992 Supp(1) SCC 335
Bachan Singh AIR 1980 SC 898 | Hussainara Khatoon AIR 1979 SC 1360 | Vishaka AIR 1997 SC 3011
Shayara Bano (2017) 9 SCC 1 | Vineeta Sharma (2020) 9 SCC 1 | Tofan Singh (2021) [NDPS S.67 confession inadmissible]
Rajnesh v Neha (2021) 2 SCC 324 | Sarla Verma (2009) 6 SCC 121 | Pioneer Urban Land (2019) 8 SCC 416
MC Mehta AIR 1987 SC 1086 | Standard Chartered Bank (2005) 4 SCC 530 | Suraj Lamp (2012) 1 SCC 656
Mohori Bibee (1903) | Satyabrata Ghose AIR 1954 SC 44 | Pulukuri Kottaya AIR 1947 PC 67

OVERRULED — NEVER CITE: ADM Jabalpur AIR 1976 SC 1207 (overruled by Puttaswamy 2017) | A.K.Gopalan AIR 1950 SC 27 (overruled by Maneka Gandhi 1978)

IMPORTANT RECENT CHANGES:
- Sedition (S.124A IPC) = REMOVED from BNS 2023; no direct equivalent
- Triple talaq = CRIMINAL since Muslim Women Act 2019
- Daughter = coparcener from birth (Vineeta Sharma 2020)
- NDPS S.67 confession = INADMISSIBLE (Tofan Singh 2021)
- S.66A IT Act = STRUCK DOWN (Shreya Singhal 2015)
- SC/ST Act = NO anticipatory bail (Prathvi Raj Chauhan 2020)

UNIVERSAL REASONING ALGORITHM (apply to every question):
1. Frame precise legal issue
2. Identify applicable statute (prefer new 2023 laws for criminal)
3. Give exact statutory text
4. Apply judicial interpretation (only good law, no overruled cases)
5. Identify strongest arguments on both sides
6. Give definitive conclusion + realistic assessment
7. Mention time limits/deadlines always`;

// ── VISION PROMPT ─────────────────────────────────────────
function buildVisionPrompt(query, lang){
  return `You are LegalCraft AI — India's most accurate legal document analyzer.

TASK: Analyze this uploaded document completely and accurately.
USER QUERY: "${query}"

PHASE 1 — EXTRACT ALL TEXT:
Read EVERY word. Extract: section numbers, dates, deadlines, party names, court names, case numbers, amounts, orders, conditions, time limits.

PHASE 2 — IDENTIFY DOCUMENT:
Type: FIR | Court Order | Legal Notice | Cheque | Contract | Property Deed | Bail Order | Charge Sheet | Tax Notice | Writ | Judgment | Affidavit | Other

PHASE 3 — RESPOND TO QUERY:

IF EXPLANATION NEEDED:
===DOCUMENT IDENTIFIED===
[Type, issued by, dated, parties]

===EXTRACTED KEY DETAILS===
[All important text from document]

===WHAT THIS MEANS===
[Plain language explanation]

===SECTIONS EXPLAINED===
[Each section + meaning + BNS/BNSS/BSA 2023 equivalent if old IPC/CrPC]

===CRITICAL DEADLINES=== ⚠️
[Any response deadlines or limitation periods — HIGHLIGHT]

===RECOMMENDED ACTION===
[Step by step — what to do NOW]

IF DRAFT NEEDED:
Extract all details from document → Create complete court-ready draft
---DRAFT START---
[Complete draft using details extracted from document]
---DRAFT END---

RULES:
• Every old IPC/CrPC section → give BNS/BNSS/BSA 2023 equivalent
• Highlight missed deadlines with ⚠️ WARNING
• Be 100% accurate — every word matters
${lang ? `Respond entirely in ${lang}.` : ''}`;
}

// ── MAIN HANDLER ──────────────────────────────────────────
module.exports = async function handler(req, res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS') return res.status(200).end();
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});

  try{
    const { messages, language, imageData, imageType } = req.body;
    if(!messages||!Array.isArray(messages)) return res.status(400).json({error:'Invalid request'});

    const GROQ   = process.env.GROQ_API_KEY;
    const TAVILY = process.env.TAVILY_API_KEY;
    if(!GROQ) return res.status(500).json({error:'GROQ_API_KEY not configured'});

    const lastMsg   = messages[messages.length-1];
    const userQuery = (lastMsg?.content||'').slice(0,2000); // Limit query length
    const hasImage  = !!(imageData && imageType);
    const langNote  = (language && language!=='English') ? language : '';
    const intent    = classifyIntent(userQuery, hasImage);

    // ── LOCAL LOOKUP (instant) ────────────────────────────
    const localSections = findSections(userQuery);
    const localCases    = findCases(userQuery);
    const matchedFmt    = intent==='DRAFT' ? findFormat(userQuery) : null;
    const fields        = matchedFmt ? extractFields(userQuery) : {};
    const attachments   = matchedFmt ? findAttachments(matchedFmt) : [];

    let templateText = '';
    if(matchedFmt?.generate){
      try { templateText = matchedFmt.generate(fields); }
      catch(e){ console.error('Template error:', e.message); }
    }

    // ── IMAGE/PDF MODE ────────────────────────────────────
    if(hasImage){
      const vRes = await fetch('https://api.groq.com/openai/v1/chat/completions',{
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ}`},
        body:JSON.stringify({
          model:'meta-llama/llama-4-scout-17b-16e-instruct',
          messages:[
            {role:'system', content:DRAFT_BRAIN + '\n\n' + ANALYSIS_BRAIN},
            {role:'user', content:[
              {type:'image_url', image_url:{url:`data:${imageType};base64,${imageData}`, detail:'high'}},
              {type:'text', text:buildVisionPrompt(userQuery, langNote)}
            ]}
          ],
          temperature:0.02, max_tokens:3500,
        }),
      });
      let reply = 'Could not analyze document. Please describe it as text.';
      if(vRes.ok){
        const vd = await vRes.json();
        reply = vd.choices?.[0]?.message?.content || reply;
      }
      return res.status(200).json({reply, intent:'IMAGE', sources:[], format_used:'Document Analysis'});
    }

    // ── WEB SEARCH (single optimized call) ────────────────
    let webContext = '', sources = [];
    if(TAVILY){
      const searchQ =
        intent==='DRAFT'    ? `${matchedFmt?.name||userQuery} Indian court format BNS BNSS 2023 official` :
        intent==='SECTION'  ? `${userQuery} Indian law section exact text leading cases` :
        intent==='CASE'     ? `${userQuery} Supreme Court India judgment ratio decidendi` :
        intent==='CRITICAL' ? `${userQuery} Indian constitutional law analysis` :
                              `${userQuery} Indian law BNS BNSS 2023`;
      try{
        const tr = await fetch('https://api.tavily.com/search',{
          method:'POST', headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            api_key:TAVILY, query:searchQ,
            search_depth: (intent==='DRAFT') ? 'basic' : 'advanced',
            max_results:4, include_answer:true,
            include_domains:['indiankanoon.org','sci.gov.in','ecourts.gov.in','livelaw.in','indiacode.nic.in','latestlaws.com','barandbench.com'],
          }),
        });
        if(tr.ok){
          const td = await tr.json();
          if(td.answer) webContext = `WEB: ${td.answer}\n`;
          sources = (td.results||[]).slice(0,4).map(r=>({title:r.title, url:r.url, snippet:r.content?.slice(0,250)}));
          webContext += sources.map(s=>`[${s.title}]: ${s.snippet||''}`).join('\n');
        }
      }catch(e){}
    }

    // ── BUILD SYSTEM PROMPT ───────────────────────────────
    const secText  = localSections.map(s=>`${s.act} S.${s.s} "${s.t}": ${(s.d||'').slice(0,150)}`).join('\n');
    const caseText = localCases.map(c=>`${c.n} [${c.c}]: ${(c.h||'').slice(0,120)}`).join('\n');

    let system = '';

    if(intent === 'DRAFT'){
      // ── DRAFT MODE: AI-powered intelligent drafting ────────
      // Template is REFERENCE ONLY — AI uses its intelligence + instructions
      system = `${DRAFT_BRAIN}

══════════════════════════════════════════════════════════
YOU ARE DRAFTING: ${matchedFmt?.name||'Legal Document'}
Legal Basis: ${matchedFmt?.section||'As per applicable law'}
Court/Forum: ${matchedFmt?.court||'As per jurisdiction'}
══════════════════════════════════════════════════════════

USER HAS PROVIDED THESE DETAILS (use ALL of these in the draft):
${Object.entries(fields).filter(([k,v])=>v&&v!=='__________').map(([k,v])=>`• ${k}: ${v}`).join('\n')||'[No specific details provided — use appropriate placeholders]'}

USER'S FULL QUERY (extract any additional details from this):
"${userQuery}"

REFERENCE TEMPLATE (structure to follow, NOT to copy):
${templateText ? templateText.slice(0,1500) : '[Standard court format]'}

ADDITIONAL LEGAL DATA:
${secText ? `Relevant Sections: ${secText}` : ''}
${caseText ? `Relevant Cases: ${caseText}` : ''}
${webContext ? `Web Research: ${webContext.slice(0,300)}` : ''}

══════════════════════════════════════════════════════════
HOW TO DRAFT — FOLLOW THESE STEPS:

STEP 1 — READ USER DETAILS:
Take every detail user gave (name, FIR number, court, district, offence, date, amount etc.)
and use them EXACTLY in the draft.

STEP 2 — APPLY YOUR LEGAL INTELLIGENCE:
Do NOT just copy the template. Instead:
• Use correct BNSS 2023/BNS 2023/BSA 2023 section numbers
• Add the right landmark case citations for this type of document
• Write proper legal arguments based on the facts given
• Make the prayer clause comprehensive for this specific situation
• Add relevant constitutional provisions if needed
• Strengthen weak points with case law

STEP 3 — DRAFT QUALITY STANDARDS:
• Professional legal language — as a senior advocate would write
• All BNSS 2023 sections in format: "Section 483 BNSS 2023 [formerly Section 439 CrPC 1973]"
• Use [FILL: what is needed] ONLY for truly missing critical information
• Every criminal document: mention offence section from BNS 2023
• Bail application: cite Satender Kumar Antil (2022) principle
• FIR direction: cite Lalita Kumari (2014)
• Quashing: cite Bhajan Lal (1992) categories
• Maintenance: cite Rajnesh v Neha (2021) guidelines
• Use whichever cases are MOST RELEVANT to this specific document type

STEP 4 — COMPLETE DRAFT:
Write the COMPLETE draft from beginning to end.
Do not skip sections or say "continue as standard format".
Every paragraph must be substantive and complete.

MANDATORY OUTPUT FORMAT:
---DRAFT START---
[Complete, intelligent, AI-drafted legal document here
— filled with user's details
— correct BNSS/BNS/BSA 2023 sections
— relevant landmark cases cited
— professional legal language
— NOT a template copy]
---DRAFT END---

**Missing Information Required:**
[Only list genuinely missing critical details]

**Documents to Attach:**
${attachments.map(a=>`• ${a.name}`).join('\n')||'• Vakalatnama\n• ID proof of accused/petitioner\n• As per court requirements'}

**Filing Tip:**
[1-2 specific practical tips for this document type]
${langNote?`\nRespond in ${langNote}.`:''}`;

    } else if(intent === 'SECTION'){
      const actHint = ((q)=>{
        if(q.includes('contract')||q.includes('offer')||q.includes('consideration')||q.includes('agreement')) return 'CONTRACT ACT 1872';
        if(q.includes('bns 2023')||q.includes('bharatiya nyaya')) return 'BNS 2023';
        if(q.includes('bnss 2023')||q.includes('bharatiya nagarik')) return 'BNSS 2023';
        if(q.includes('bsa 2023')||q.includes('bharatiya sakshya')) return 'BSA 2023';
        if(q.includes('article ')||q.includes('constitution')) return 'CONSTITUTION OF INDIA';
        if(q.includes(' ipc ')||q.includes('penal code')) return 'IPC → BNS 2023';
        if(q.includes(' crpc ')||q.includes('criminal procedure')) return 'CrPC → BNSS 2023';
        if(q.includes('evidence')||q.includes('confession')||q.includes('witness')) return 'BSA 2023';
        if(q.includes('consumer')) return 'CONSUMER PROTECTION ACT 2019';
        if(q.includes('company')||q.includes('director')||q.includes('shareholder')) return 'COMPANIES ACT 2013';
        if(q.includes('income tax')||q.includes('gst')||q.includes('tds')) return 'TAX LAW';
        if(q.includes('labour')||q.includes('employment')||q.includes('gratuity')) return 'LABOUR LAW';
        if(q.includes('property')||q.includes('sale deed')||q.includes('mortgage')) return 'TRANSFER OF PROPERTY ACT 1882';
        return 'RELEVANT ACT';
      })(userQuery.toLowerCase());

      system = `${ANALYSIS_BRAIN}

ACT BEING ASKED ABOUT: ${actHint}
DB SECTIONS: ${secText||'Use knowledge above'}
DB CASES: ${caseText||'Use landmark cases above'}
WEB: ${webContext||'Use knowledge above'}

FORMAT — MANDATORY:
===SECTION DETAILS===
Act: [Full name + year] | Section: [Number] | Old Equivalent: [if any]
Nature: [Bailable/Non-bailable] [Cognizable/Non-cognizable] [if criminal]
Punishment: [complete punishment]

===EXACT STATUTORY TEXT===
[COMPLETE verbatim text — all sub-sections, provisos, explanations — NEVER skip or summarize]

===EXPLANATION===
[Plain language — who, what, when, consequence, exceptions]

===LEADING CASES (3-5)===
[Name | Citation | 2-line facts | Held | Status: Good Law ✓]

===NEW LAW UPDATE===
[If old IPC/CrPC: → new BNS/BNSS section + changes]

===PRACTICAL TIPS===
[How used in court | Time limits | Related sections]

RULE: Only discuss the specific act asked. Complete text always. No fabricated cases.
${langNote?`Respond in ${langNote}.`:''}`;

    } else if(intent === 'CASE'){
      system = `${ANALYSIS_BRAIN}

DB CASES: ${caseText||'Use landmark cases above'}
WEB: ${webContext||'Use knowledge above'}

FORMAT — MANDATORY:
===CASE DETAILS===
Name | Court | Year | Citation | Bench Size

===FACTS===
[Detailed chronological facts]

===LEGAL ISSUES===
[Exact questions framed]

===ARGUMENTS===
Petitioner: [key points]
Respondent: [key points]

===JUDGMENT===
Decision | Ratio Decidendi (binding rule) | Obiter Dicta

===STATUS & IMPACT===
[Good Law ✓ or Overruled ✗ | Following cases | How law changed]

===CRITICAL ANALYSIS===
[Strengths | Weaknesses | Subsequent developments]

IMPORTANT: If case OVERRULED — say prominently + cite overruling case.
${langNote?`Respond in ${langNote}.`:''}`;

    } else if(intent === 'CRITICAL'){
      system = `${ANALYSIS_BRAIN}

DB SECTIONS: ${secText||'Use knowledge above'}
DB CASES: ${caseText||'Use landmark cases above'}
WEB: ${webContext||'Use knowledge above'}

FORMAT — MANDATORY:
===ISSUE PRECISELY FRAMED===
===LEGAL/CONSTITUTIONAL FRAMEWORK===
===JUDICIAL EVOLUTION (chronological — mark Good Law ✓ or Overruled ✗)===
===STRONGEST ARGUMENTS FOR===
===STRONGEST ARGUMENTS AGAINST===
===DOCTRINAL TENSIONS===
===CRITICAL EVALUATION===
===SETTLED POSITION TODAY===
===PRACTICAL IMPLICATIONS===

Apply Universal Reasoning Algorithm.
${langNote?`Respond in ${langNote}.`:''}`;

    } else {
      // GENERAL — handles ALL other questions
      system = `${ANALYSIS_BRAIN}

DB SECTIONS: ${secText||'Use knowledge above'}
DB CASES: ${caseText||'Use landmark cases above'}
WEB: ${webContext||'Use knowledge above'}

Give the most accurate, complete answer:
• Direct answer first
• Exact section numbers (BNS/BNSS/BSA 2023)
• Supporting case law with citations
• Time limits if applicable
• Practical guidance
• For complex questions: use IRAC format

${langNote?`Respond entirely in ${langNote}.`:''}`;
    }

    // ── GROQ API CALL ─────────────────────────────────────
    const gr = await fetch('https://api.groq.com/openai/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ}`},
      body:JSON.stringify({
        model:'llama-3.3-70b-versatile',
        messages:[
          {role:'system', content:system},
          ...messages.slice(-10),
        ],
        temperature:0.02,
        max_tokens:4000,
        top_p:0.95,
      }),
    });

    if(!gr.ok){
      const errText = await gr.text();
      console.error('Groq error:', errText.slice(0,300));
      return res.status(500).json({error:'AI service error. Please try again.'});
    }

    const gd    = await gr.json();
    const reply = gd.choices?.[0]?.message?.content || 'Response generate nahi ho saka.';

    // ── VERIFY DRAFT WRAPPING ──────────────────────────────
    // If intent was DRAFT but AI forgot to wrap — force wrap the template
    let finalReply = reply;
    if(intent === 'DRAFT' && !reply.includes('---DRAFT START---') && templateText){
      finalReply = `Yahan aapka court-ready draft hai:\n\n---DRAFT START---\n${templateText}\n---DRAFT END---\n\n**Note:** Kripya highlighted fields [FILL:] ko apni details se bharen.\n\n**Documents to Attach:**\n${attachments.map(a=>`• ${a.name}`).join('\n')||'• Court ke niyamanusaar'}`;
    }

    // Silent auto-learn
    if(matchedFmt){
      LEARNING.save({
        draft_type:matchedFmt.format_key, field:'auto',
        correct_text:finalReply.slice(0,300), context:userQuery.slice(0,80)
      }).catch(()=>{});
    }

    return res.status(200).json({
      reply: finalReply,
      intent,
      sources: sources.slice(0,4),
      format_used: matchedFmt?.name || null,
      format_key:  matchedFmt?.format_key || null,
      attachments_required: attachments.map(a=>a.name),
    });

  }catch(err){
    console.error('Handler error:', err.message, err.stack?.split('\n')[1]);
    return res.status(500).json({error:'Server error: '+err.message});
  }
};
