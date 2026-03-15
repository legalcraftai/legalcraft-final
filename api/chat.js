// Legal Craft AI — Complete Backend
// All data inline — no imports needed

const DRAFT_KEYWORDS = ["draft","drafting","banao","likho","taiyar karo","application chahiye","petition chahiye","notice chahiye","format chahiye","document chahiye","bail application","notice bhejna","plaint","vakalatnama","deed chahiye","complaint likhni","fir likhni"];

const SECTION_KEYWORDS = ["section","dhara","article","bns","bnss","bsa","ipc","crpc","cpc","kya hai","explain","batao","samjhao","what is","meaning","matlab"];

const CASE_KEYWORDS = ["case","judgment","judgement","verdict","landmark","leading case","supreme court case","high court case","case law","precedent","famous case"];

// ── SECTIONS DATABASE ──────────────────────────────────────
const SECTIONS_DB = [
  // BNS 2023
  { act:"BNS 2023", num:"63",  old:"IPC 375", title:"Rape", text:"Sexual intercourse with woman against her will/without consent.", keywords:["rape","balatkar","63 bns","375 ipc"] },
  { act:"BNS 2023", num:"64",  old:"IPC 376", title:"Punishment for rape", text:"Rigorous imprisonment minimum 10 years to life, and fine.", keywords:["rape punishment","64 bns","376 ipc"] },
  { act:"BNS 2023", num:"70",  old:"IPC 376D", title:"Gang rape", text:"Minimum 20 years to life (natural life) imprisonment and fine.", keywords:["gang rape","70 bns","376d ipc"] },
  { act:"BNS 2023", num:"74",  old:"IPC 354", title:"Molestation/Assault on woman", text:"Assault to outrage modesty — up to 2 years or fine or both.", keywords:["molestation","outrage modesty","74 bns","354 ipc","eve teasing"] },
  { act:"BNS 2023", num:"78",  old:"IPC 354D", title:"Stalking", text:"Following woman repeatedly despite disinterest or monitoring internet use.", keywords:["stalking","peecha karna","78 bns","354d ipc"] },
  { act:"BNS 2023", num:"80",  old:"IPC 304B", title:"Dowry death", text:"Death within 7 years of marriage after dowry harassment — 7 years to life.", keywords:["dowry death","dahej mrityu","80 bns","304b ipc"] },
  { act:"BNS 2023", num:"85",  old:"IPC 498A", title:"Cruelty by husband/relatives", text:"Cruelty by husband or relatives — imprisonment up to 3 years and fine.", keywords:["cruelty","498a","husband cruelty","85 bns","498a ipc","domestic cruelty"] },
  { act:"BNS 2023", num:"101", old:"IPC 299/304", title:"Culpable homicide", text:"Causing death with intention or knowledge it is likely to cause death.", keywords:["culpable homicide","101 bns","299 ipc","304 ipc"] },
  { act:"BNS 2023", num:"103", old:"IPC 302", title:"Murder", text:"Death or life imprisonment and fine.", keywords:["murder","hatya","103 bns","302 ipc","death penalty"] },
  { act:"BNS 2023", num:"109", old:"IPC 307", title:"Attempt to murder", text:"Imprisonment up to 10 years and fine.", keywords:["attempt to murder","109 bns","307 ipc"] },
  { act:"BNS 2023", num:"111", old:"New", title:"Organised crime", text:"Death or life imprisonment if organised crime results in death.", keywords:["organised crime","111 bns"] },
  { act:"BNS 2023", num:"113", old:"New", title:"Terrorist act", text:"Death or life imprisonment and fine.", keywords:["terrorism","terrorist","113 bns"] },
  { act:"BNS 2023", num:"115", old:"IPC 325", title:"Grievous hurt", text:"Imprisonment up to 7 years and fine.", keywords:["grievous hurt","115 bns","325 ipc"] },
  { act:"BNS 2023", num:"137", old:"IPC 361", title:"Kidnapping", text:"Taking person under 16 (male)/18 (female) from guardian without consent.", keywords:["kidnapping","apaharan","137 bns","361 ipc"] },
  { act:"BNS 2023", num:"303", old:"IPC 379", title:"Theft", text:"Dishonestly taking moveable property — up to 3 years or fine or both.", keywords:["theft","chori","303 bns","379 ipc"] },
  { act:"BNS 2023", num:"308", old:"IPC 384", title:"Extortion", text:"Threatening to induce delivery of property — up to 3 years.", keywords:["extortion","blackmail","308 bns","384 ipc"] },
  { act:"BNS 2023", num:"318", old:"IPC 420", title:"Cheating/Fraud", text:"Deceiving person to deliver property — up to 7 years (serious) or 3 years.", keywords:["cheating","fraud","dhokha","318 bns","420 ipc","420"] },
  { act:"BNS 2023", num:"351", old:"IPC 506", title:"Criminal intimidation/Threat", text:"Threatening injury with intent to cause alarm — up to 2 years or fine.", keywords:["threat","dhamki","351 bns","506 ipc"] },
  { act:"BNS 2023", num:"356", old:"IPC 499", title:"Defamation", text:"Making imputation to harm reputation — up to 2 years or fine.", keywords:["defamation","manahaani","libel","356 bns","499 ipc"] },
  // BNSS 2023
  { act:"BNSS 2023", num:"35",  old:"CrPC 41",  title:"Arrest without warrant", text:"Police may arrest without warrant for cognizable offence.", keywords:["arrest without warrant","35 bnss","41 crpc"] },
  { act:"BNSS 2023", num:"47",  old:"CrPC 50",  title:"Rights of arrested person", text:"Right to know grounds of arrest, consult lawyer, know right to bail.", keywords:["rights on arrest","arrest rights","47 bnss","50 crpc"] },
  { act:"BNSS 2023", num:"173", old:"CrPC 154", title:"FIR — First Information Report", text:"Information of cognizable offence to police reduced to writing and signed.", keywords:["fir","first information report","173 bnss","154 crpc"] },
  { act:"BNSS 2023", num:"478", old:"CrPC 436", title:"Bail in bailable offences", text:"Person accused of bailable offence shall be released on bail.", keywords:["bail bailable","478 bnss","436 crpc"] },
  { act:"BNSS 2023", num:"479", old:"CrPC 436A",title:"Undertrial bail — half period", text:"Person detained for half of maximum period shall be released on bail.", keywords:["undertrial bail","479 bnss","436a crpc"] },
  { act:"BNSS 2023", num:"480", old:"CrPC 437", title:"Bail in non-bailable offences", text:"Magistrate may release on bail unless reasonable grounds of guilt for death/life imprisonment offence.", keywords:["bail non bailable","480 bnss","437 crpc","non bailable bail"] },
  { act:"BNSS 2023", num:"482", old:"CrPC 438", title:"Anticipatory Bail", text:"When person believes he may be arrested for non-bailable offence, may apply to HC or Sessions Court for bail direction in event of arrest.", keywords:["anticipatory bail","advance bail","pre-arrest bail","482 bnss","438 crpc","giraftari se pehle bail"] },
  { act:"BNSS 2023", num:"483", old:"CrPC 439", title:"Bail by Sessions Court / High Court", text:"HC or Sessions Court may direct any accused in custody to be released on bail with conditions.", keywords:["regular bail","sessions bail","hc bail","483 bnss","439 crpc","bail sessions"] },
  { act:"BNSS 2023", num:"528", old:"CrPC 482", title:"Inherent powers of High Court / Quashing", text:"HC inherent powers to prevent abuse of process or secure ends of justice — includes quashing FIR.", keywords:["quashing","inherent powers","528 bnss","482 crpc","fir quash"] },
  // BSA 2023
  { act:"BSA 2023", num:"2",  old:"EA 3",   title:"Evidence — Definition", text:"Evidence means statements by witnesses before court and all documents including electronic records.", keywords:["evidence definition","2 bsa","3 evidence act"] },
  { act:"BSA 2023", num:"23", old:"EA 17",  title:"Admission", text:"Statement suggesting inference as to fact in issue made by party.", keywords:["admission","23 bsa","17 evidence act"] },
  { act:"BSA 2023", num:"25", old:"EA 25",  title:"Confession to police — not provable", text:"No confession to police officer shall be proved against accused.", keywords:["confession to police","25 bsa","25 evidence act"] },
  { act:"BSA 2023", num:"57", old:"EA 101", title:"Burden of proof", text:"Whoever desires court judgment must prove the facts.", keywords:["burden of proof","57 bsa","101 evidence act"] },
  { act:"BSA 2023", num:"63", old:"EA 65B", title:"Electronic records admissibility", text:"Electronic records admissible with certificate from responsible person.", keywords:["electronic evidence","digital evidence","63 bsa","65b evidence act"] },
  // CONSTITUTION
  { act:"Constitution", num:"14",   old:"—", title:"Right to Equality", text:"State shall not deny equality before law or equal protection of laws.", keywords:["equality","article 14","samanta"] },
  { act:"Constitution", num:"15",   old:"—", title:"No discrimination", text:"No discrimination on grounds of religion, race, caste, sex, place of birth.", keywords:["discrimination","article 15"] },
  { act:"Constitution", num:"19",   old:"—", title:"Freedom of Speech and Expression", text:"Freedom of speech; assembly; association; movement; residence; profession.", keywords:["freedom of speech","article 19","expression","press freedom","bhashan azaadi"] },
  { act:"Constitution", num:"20",   old:"—", title:"Protection against conviction", text:"No ex post facto law; no double jeopardy; no self-incrimination.", keywords:["article 20","double jeopardy","self incrimination"] },
  { act:"Constitution", num:"21",   old:"—", title:"Right to Life and Personal Liberty", text:"No deprivation of life or liberty except by procedure established by law.", keywords:["right to life","article 21","personal liberty","jeevan adhikar"] },
  { act:"Constitution", num:"21A",  old:"—", title:"Right to Education", text:"Free and compulsory education to children of 6 to 14 years.", keywords:["right to education","article 21a","RTE","shiksha adhikar"] },
  { act:"Constitution", num:"22",   old:"—", title:"Protection against arrest", text:"Informed of grounds of arrest; right to lawyer; produced before Magistrate within 24 hours.", keywords:["article 22","arrest rights","24 hours magistrate"] },
  { act:"Constitution", num:"25",   old:"—", title:"Freedom of religion", text:"Freedom of conscience and right to profess, practise, propagate religion.", keywords:["article 25","freedom of religion","dharma azaadi"] },
  { act:"Constitution", num:"32",   old:"—", title:"Right to Constitutional Remedies — Supreme Court", text:"Right to move SC for enforcement of Fundamental Rights. SC may issue writs: habeas corpus, mandamus, prohibition, quo warranto, certiorari.", keywords:["article 32","supreme court writ","habeas corpus sc","constitutional remedy"] },
  { act:"Constitution", num:"39A",  old:"—", title:"Free legal aid", text:"State shall provide free legal aid to ensure justice not denied by economic disabilities.", keywords:["article 39a","free legal aid","muft kanoni madad"] },
  { act:"Constitution", num:"141",  old:"—", title:"SC law binding on all courts", text:"Law declared by SC shall be binding on all courts within India.", keywords:["article 141","precedent","stare decisis","sc binding"] },
  { act:"Constitution", num:"226",  old:"—", title:"High Court writs", text:"HC may issue habeas corpus, mandamus, prohibition, quo warranto, certiorari to any person or authority.", keywords:["article 226","high court writ","writ petition hc","hc writ"] },
  { act:"Constitution", num:"300A", old:"—", title:"Right to property", text:"No person deprived of property except by authority of law.", keywords:["article 300a","right to property","sampatti adhikar"] },
  { act:"Constitution", num:"368",  old:"—", title:"Power to amend Constitution", text:"Parliament may amend Constitution but cannot alter basic structure.", keywords:["article 368","amendment","basic structure"] },
  // NI ACT
  { act:"NI Act 1881", num:"138", old:"—", title:"Cheque dishonour — offence", text:"Cheque returned unpaid due to insufficient funds — imprisonment up to 2 years or fine up to twice cheque amount or both.", keywords:["cheque bounce","section 138","dishonour cheque","138 ni act","cheque wapas"] },
  { act:"NI Act 1881", num:"139", old:"—", title:"Presumption in favour of holder", text:"Presumed holder received cheque for discharge of debt unless contrary proved.", keywords:["139 ni act","cheque presumption"] },
  { act:"NI Act 1881", num:"142", old:"—", title:"Complaint required for cognizance", text:"Court cannot take cognizance except on written complaint by payee within 30 days.", keywords:["142 ni act","cheque complaint"] },
  // HMA
  { act:"HMA 1955", num:"13",  old:"—", title:"Divorce grounds", text:"Adultery; cruelty; desertion 2 years; conversion; mental disorder; venereal disease; renunciation; not heard 7 years.", keywords:["divorce grounds","section 13 hma","cruelty divorce","talak grounds"] },
  { act:"HMA 1955", num:"13B", old:"—", title:"Mutual consent divorce", text:"Both parties petition together after 1 year separation. Second motion after 6 months.", keywords:["mutual consent divorce","13b hma","aapsi sahmat talak"] },
  { act:"HMA 1955", num:"24",  old:"—", title:"Interim maintenance", text:"Court may order maintenance during proceedings if petitioner has no independent income.", keywords:["interim maintenance","24 hma"] },
  { act:"HMA 1955", num:"25",  old:"—", title:"Permanent alimony", text:"Court may order permanent maintenance after decree.", keywords:["alimony","25 hma","guzara bhatta"] },
  // Consumer
  { act:"Consumer Protection Act 2019", num:"35", old:"—", title:"District Commission — under Rs.1 crore", text:"Complaint where value does not exceed Rs 1 crore.", keywords:["consumer complaint district","35 consumer act","under 1 crore"] },
  { act:"Consumer Protection Act 2019", num:"47", old:"—", title:"State Commission — Rs.1-10 crore", text:"Value exceeds Rs 1 crore but not Rs 10 crore.", keywords:["state consumer commission","47 consumer act"] },
  { act:"Consumer Protection Act 2019", num:"58", old:"—", title:"National Commission — above Rs.10 crore", text:"Value exceeds Rs 10 crore.", keywords:["ncdrc","58 consumer act","above 10 crore"] },
  // RTI
  { act:"RTI Act 2005", num:"6",  old:"—", title:"RTI Application", text:"Request in writing in English/Hindi/official language with fee of Rs.10.", keywords:["rti application","6 rti","how to file rti"] },
  { act:"RTI Act 2005", num:"7",  old:"—", title:"30 days time limit", text:"Information within 30 days. Life/liberty — 48 hours.", keywords:["rti 30 days","7 rti","rti time limit"] },
  { act:"RTI Act 2005", num:"19", old:"—", title:"RTI Appeal", text:"First appeal within 30 days. Second appeal to Information Commission within 90 days.", keywords:["rti appeal","19 rti","information commission"] },
  // CPC
  { act:"CPC 1908", num:"11",     old:"—", title:"Res Judicata", text:"No court shall try matter already decided between same parties in competent court.", keywords:["res judicata","11 cpc","pehle faisala"] },
  { act:"CPC 1908", num:"O39R1",  old:"—", title:"Temporary injunction", text:"Court may grant temporary injunction to restrain acts causing injury.", keywords:["temporary injunction","order 39","stay order","injunction"] },
  // TPA
  { act:"TPA 1882", num:"54",  old:"—", title:"Sale of property", text:"Transfer of ownership for price. Immoveable property must be by registered instrument.", keywords:["sale of property","54 tpa","registered sale deed","property bikri"] },
  { act:"TPA 1882", num:"105", old:"—", title:"Lease", text:"Transfer of right to enjoy property for certain time for consideration.", keywords:["lease","105 tpa","kiraya agreement"] },
  { act:"TPA 1882", num:"122", old:"—", title:"Gift deed", text:"Voluntary transfer without consideration, accepted by donee.", keywords:["gift deed","122 tpa","uphar"] },
];

// ── LEADING CASES ──────────────────────────────────────────
const CASES_DB = [
  { name:"Kesavananda Bharati v State of Kerala (1973)", citation:"AIR 1973 SC 1461", keywords:["kesavananda","basic structure","article 368"], facts:"Challenge to Kerala land reform act — Parliament's power to amend Constitution came up before 13-judge bench.", held:"Parliament cannot amend the basic structure of the Constitution. 7:6 majority established basic structure doctrine.", importance:"Most important constitutional case in Indian history." },
  { name:"Maneka Gandhi v Union of India (1978)", citation:"AIR 1978 SC 597", keywords:["maneka gandhi","article 21","passport","procedure established by law"], facts:"Government impounded Maneka Gandhi's passport without giving reasons or hearing.", held:"Procedure established by law must be just, fair and reasonable. Articles 14, 19 and 21 are interconnected.", importance:"Revolutionized interpretation of fundamental rights." },
  { name:"Satender Kumar Antil v CBI (2022)", citation:"(2022) 10 SCC 51", keywords:["bail rule","bail exception","satender antil","483 bnss","439 crpc"], facts:"Accused remained in custody for long time without bail being decided.", held:"Bail is rule, jail is exception. Courts must decide bail applications promptly.", importance:"Most recent landmark judgment on bail." },
  { name:"Arnesh Kumar v State of Bihar (2014)", citation:"AIR 2014 SC 2756", keywords:["arnesh kumar","498a arrest","mechanical arrest","85 bns"], facts:"Mechanical arrests in matrimonial cases without investigation.", held:"Police cannot arrest mechanically. Must satisfy 9-point checklist before arrest. Magistrate must apply mind before remand.", importance:"Protected against misuse of 498A/S.85 BNS." },
  { name:"Gurbaksh Singh Sibbia v State of Punjab (1980)", citation:"AIR 1980 SC 1632", keywords:["anticipatory bail","482 bnss","438 crpc","sibbia"], facts:"Challenge to conditions imposed in anticipatory bail order.", held:"Court has wide discretion in anticipatory bail. Cannot refuse merely because offence is serious.", importance:"Fundamental case on anticipatory bail." },
  { name:"Sushila Aggarwal v State NCT Delhi (2020)", citation:"(2020) 5 SCC 1", keywords:["anticipatory bail time","482 bnss","sushila aggarwal"], facts:"Whether anticipatory bail can be for limited period only.", held:"Anticipatory bail need not be time-limited. Can continue till end of trial. No need to surrender.", importance:"Settled controversy — anticipatory bail not time-limited." },
  { name:"Bachan Singh v State of Punjab (1980)", citation:"AIR 1980 SC 898", keywords:["death penalty","rarest of rare","103 bns","302 ipc","murder"], facts:"Bachan Singh convicted for murder of 3 persons — death penalty challenged.", held:"Death penalty constitutional. But only in rarest of rare cases of extreme culpability.", importance:"Established rarest of rare doctrine for death penalty." },
  { name:"Dashrath Rupsingh Rathod v State of Maharashtra (2014)", citation:"AIR 2014 SC 3519", keywords:["cheque bounce jurisdiction","138 ni act","cheque case where file"], facts:"Question of which court has jurisdiction in cheque bounce case.", held:"Case to be filed only at place where drawer's bank is situated — where cheque was dishonoured.", importance:"Fixed jurisdiction for cheque bounce cases." },
  { name:"Shreya Singhal v Union of India (2015)", citation:"AIR 2015 SC 1523", keywords:["section 66a","internet freedom","article 19","speech online"], facts:"Section 66A IT Act allowed arrest for online speech causing annoyance/inconvenience.", held:"SC struck down Section 66A as unconstitutional — vague and chilling free speech.", importance:"Landmark internet freedom judgment." },
  { name:"Vishaka v State of Rajasthan (1997)", citation:"AIR 1997 SC 3011", keywords:["vishaka","sexual harassment workplace","workplace","article 19","women rights"], facts:"Bhanwari Devi gang-raped for preventing child marriage. No law against workplace sexual harassment.", held:"SC issued Vishaka Guidelines for prevention of sexual harassment at workplace. POSH Act later enacted.", importance:"Led to POSH Act 2013 — protection against workplace sexual harassment." },
  { name:"Navtej Singh Johar v Union of India (2018)", citation:"(2018) 10 SCC 1", keywords:["section 377","lgbtq","homosexuality","article 21","article 14"], facts:"Constitutional validity of Section 377 IPC criminalizing consensual same-sex relations challenged.", held:"Section 377 IPC unconstitutional to extent it criminalizes consensual same-sex relations between adults.", importance:"Decriminalized homosexuality in India." },
  { name:"State of Haryana v Bhajan Lal (1992)", citation:"1992 Supp (1) SCC 335", keywords:["quashing fir","528 bnss","482 crpc","bhajan lal","fir quash categories"], facts:"Question of when FIR can be quashed by High Court.", held:"Laid down 7 categories where HC can quash FIR: no offence disclosed; absurd allegations; malafide; civil dispute in criminal form etc.", importance:"Go-to case for quashing FIR under S.528 BNSS." },
  { name:"Olga Tellis v Bombay Municipal Corporation (1985)", citation:"AIR 1986 SC 180", keywords:["article 21","right to livelihood","pavement dwellers","right to life"], facts:"Pavement and slum dwellers challenged eviction without notice or alternative shelter.", held:"Right to livelihood is part of right to life under Article 21.", importance:"Right to livelihood = Right to life." },
];

// ── TEMPLATES ──────────────────────────────────────────────
const TEMPLATES_DB = {
  bail: {
    keywords:["bail application","regular bail","bail chahiye","483 bnss","439 crpc","bail ke liye"],
    name:"Bail Application — Section 483 BNSS 2023",
    generate:(f)=>`IN THE COURT OF ${f.court||"THE SESSIONS JUDGE"}
${f.district||"[DISTRICT]"}, ${f.state||"[STATE]"}

CRIMINAL MISC. APPLICATION NO. _____ OF ${new Date().getFullYear()}

${f.name||"[ACCUSED NAME]"}, Age: ${f.age||"[AGE]"} yrs, R/o: ${f.address||"[ADDRESS]"}
                                          ...APPLICANT/ACCUSED
VERSUS
STATE OF ${(f.state||"[STATE]").toUpperCase()}
Through: ${f.ps||"[POLICE STATION]"} Police Station
                                          ...RESPONDENT

APPLICATION FOR BAIL UNDER SECTION 483 BNSS 2023
(Formerly Section 439 CrPC 1973)

MOST RESPECTFULLY SHOWETH:

1. That the applicant ${f.name||"[NAME]"} was arrested on ${f.arrest_date||"[DATE OF ARREST]"} in FIR No. ${f.fir||"[FIR NO]"} dated ${f.fir_date||"[FIR DATE]"} at PS ${f.ps||"[PS]"}, District ${f.district||"[DISTRICT]"} for alleged offences under ${f.sections||"[SECTIONS]"}.

2. FACTS OF THE CASE:
${f.facts||"   [BRIEF FACTS — What happened, nature of allegations]"}

3. GROUNDS FOR BAIL:
   (a) Applicant is innocent and falsely implicated in this case.
   (b) There is no direct evidence against the applicant.
   (c) Applicant is a permanent resident at the above address and is not likely to flee from justice.
   (d) Applicant shall not tamper with evidence or influence any witness.
   (e) Applicant has no previous criminal antecedents.
   (f) Investigation is complete / nearing completion.
   (g) As held by Hon'ble Supreme Court in Satender Kumar Antil v CBI (2022) 10 SCC 51 — "Bail is rule, jail is exception."

4. Applicant is ready to abide by all conditions imposed by this Hon'ble Court.

5. No previous bail application has been filed / Previous application rejected on [DATE] on grounds of [REASON]. Present application based on fresh grounds.

PRAYER:
It is prayed that this Hon'ble Court may be pleased to:
(a) Release applicant on bail in FIR No. ${f.fir||"[FIR NO]"};
(b) Pass any other order as deemed fit and proper.

Place: ${f.district||"[PLACE]"}          (${f.advocate||"[ADVOCATE NAME]"})
Date: ${new Date().toLocaleDateString('en-IN')}   Counsel for Applicant
                                          Enrol. No.: ${f.enrol||"[ENROLMENT NO]"}

VERIFICATION: I, ${f.name||"[NAME]"}, verify contents are true and correct to the best of my knowledge.
Verified at ${f.district||"[PLACE]"} on ${new Date().toLocaleDateString('en-IN')}.
                                          (${f.name||"[NAME]"}) — Applicant`
  },

  anticipatory_bail: {
    keywords:["anticipatory bail","advance bail","pre-arrest bail","482 bnss","438 crpc","giraftari se pehle bail","anticipatory"],
    name:"Anticipatory Bail — Section 482 BNSS 2023",
    generate:(f)=>`IN THE COURT OF ${f.court||"THE SESSIONS JUDGE / HIGH COURT"}
${f.district||"[DISTRICT]"}, ${f.state||"[STATE]"}

CRIMINAL MISC. APPLICATION NO. _____ OF ${new Date().getFullYear()}

${f.name||"[APPLICANT NAME]"}, Age: ${f.age||"[AGE]"} yrs, R/o: ${f.address||"[ADDRESS]"}
                                          ...APPLICANT
VERSUS
STATE OF ${(f.state||"[STATE]").toUpperCase()}
                                          ...RESPONDENT

APPLICATION FOR ANTICIPATORY BAIL UNDER SECTION 482 BNSS 2023
(Formerly Section 438 CrPC 1973)

MOST RESPECTFULLY SHOWETH:

1. Applicant has reasonable apprehension of being arrested for ${f.complaint||"[COMPLAINT/OFFENCE DETAILS]"} under ${f.sections||"[SECTIONS]"}.

2. BACKGROUND:
${f.background||"   [WHY ARREST IS APPREHENDED — DETAILS OF DISPUTE/COMPLAINT]"}

3. GROUNDS:
   (a) Apprehension based on false and malicious complaint.
   (b) Applicant is innocent and has not committed any offence.
   (c) Permanent resident — not likely to flee from justice.
   (d) Will cooperate fully with investigation.
   (e) Will not tamper with evidence or influence witnesses.
   (f) As held in Gurbaksh Singh Sibbia v State of Punjab AIR 1980 SC 1632 — anticipatory bail cannot be refused merely because offence is serious.
   (g) As held in Sushila Aggarwal v State (2020) 5 SCC 1 — anticipatory bail need not be time-limited.

4. Applicant undertakes to surrender passport and report to IO as directed.

PRAYER:
(a) Direct that applicant be released on bail in event of arrest;
(b) Impose such conditions as deemed fit;
(c) Any other order as deemed fit.

Place: ${f.district||"[PLACE]"}          (${f.advocate||"[ADVOCATE NAME]"})
Date: ${new Date().toLocaleDateString('en-IN')}   Counsel for Applicant`
  },

  fir: {
    keywords:["fir","fir likhwana","fir complaint","police complaint","section 173","154 crpc","complaint draft"],
    name:"FIR / Police Complaint — Section 173 BNSS 2023",
    generate:(f)=>`TO,
THE OFFICER-IN-CHARGE
${f.ps||"[POLICE STATION]"} Police Station
District: ${f.district||"[DISTRICT]"}, ${f.state||"[STATE]"}

SUBJECT: COMPLAINT/FIR UNDER SECTION 173 BNSS 2023

Respected Sir/Madam,

I, ${f.name||"[COMPLAINANT NAME]"}, Age: ${f.age||"[AGE]"} years,
R/o: ${f.address||"[COMPLETE ADDRESS]"},
Mobile: ${f.mobile||"[MOBILE NUMBER]"},
hereby submit this complaint:

ACCUSED DETAILS:
Name: ${f.accused||"[ACCUSED NAME / UNKNOWN]"}
Address: ${f.accused_address||"[ADDRESS IF KNOWN]"}

INCIDENT DETAILS:
Date:  ${f.date||"[DATE OF INCIDENT]"}
Time:  ${f.time||"[TIME]"}
Place: ${f.place||"[PLACE OF INCIDENT]"}

FACTS (Chronological Order):
${f.facts||"[DESCRIBE WHAT HAPPENED STEP BY STEP — DATE, TIME, PLACE, WHO DID WHAT, WHAT WAS SAID, WITNESSES]"}

WITNESSES (if any):
${f.witnesses||"1. [NAME AND ADDRESS]\n2. [NAME AND ADDRESS]"}

OFFENCES COMMITTED:
The above acts are offences under ${f.sections||"[BNS SECTIONS / OTHER ACTS]"}.

PRAYER:
(a) Register FIR against the accused;
(b) Arrest and prosecute accused;
(c) Recover property if stolen/damaged.

I declare contents are true and correct.

Place: ${f.district||"[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}
Time: ${new Date().toLocaleTimeString('en-IN')}
                                          (${f.name||"[NAME]"})
                                          Complainant — Signature`
  },

  notice_138: {
    keywords:["legal notice 138","cheque bounce notice","section 138 notice","138 ni act notice","cheque dishonour notice"],
    name:"Legal Notice — Section 138 NI Act (Cheque Bounce)",
    generate:(f)=>`LEGAL NOTICE UNDER SECTION 138 READ WITH SECTION 142
NEGOTIABLE INSTRUMENTS ACT, 1881

BY SPEED POST / REGISTERED A.D.

Date: ${new Date().toLocaleDateString('en-IN')}

TO,
${f.accused||"[DRAWER/ACCUSED NAME]"}
${f.accused_address||"[COMPLETE ADDRESS OF ACCUSED]"}

Under instructions from my client ${f.name||"[CLIENT NAME]"} R/o ${f.address||"[ADDRESS]"}:

1. My client and you had a transaction/agreement dated ${f.transaction_date||"[DATE]"} whereby you owed Rs. ${f.amount||"[AMOUNT]"}/- to my client on account of ${f.reason||"[REASON FOR DEBT/LIABILITY]"}.

2. In discharge of your liability, you issued the following cheque:
   Cheque No.:  ${f.cheque_no||"[CHEQUE NUMBER]"}
   Date:        ${f.cheque_date||"[DATE ON CHEQUE]"}
   Amount:      Rs. ${f.amount||"[AMOUNT]"}/-
   Bank:        ${f.bank||"[BANK NAME]"}
   Branch:      ${f.branch||"[BRANCH]"}
   Account No.: ${f.account||"[ACCOUNT NUMBER]"}

3. The cheque was presented on ${f.present_date||"[DATE OF PRESENTATION]"} and returned dishonoured on ${f.dishonour_date||"[DATE OF DISHONOUR]"} with remark: "${f.reason_return||"Insufficient Funds/Payment Stopped"}".

4. This constitutes an offence under Section 138, Negotiable Instruments Act, 1881.

5. YOU ARE HEREBY CALLED UPON to pay Rs. ${f.amount||"[AMOUNT]"}/- with interest @ 18% per annum from date of dishonour, within FIFTEEN (15) DAYS of receipt of this notice.

6. Failure to pay will result in criminal complaint under Section 138/142 NI Act before competent court, entirely at your risk, cost and consequence.

${f.advocate||"[ADVOCATE NAME]"}
Advocate — Enrol. No.: ${f.enrol||"[ENROLMENT NO]"}
${f.advocate_address||"[ADVOCATE ADDRESS]"}
Mobile: ${f.advocate_mobile||"[MOBILE]"}`
  },

  quashing: {
    keywords:["quashing","fir quash","section 528","482 crpc","quashing petition","fir cancel karna"],
    name:"Quashing Petition — Section 528 BNSS 2023",
    generate:(f)=>`IN THE HIGH COURT OF ${(f.state||"[STATE]").toUpperCase()}
AT ${f.hc||f.district||"[LOCATION]"}

CRIMINAL MISC. PETITION NO. _____ OF ${new Date().getFullYear()}

${f.name||"[PETITIONER NAME]"}, R/o: ${f.address||"[ADDRESS]"}
                                          ...PETITIONER
VERSUS
1. STATE OF ${(f.state||"[STATE]").toUpperCase()}
2. ${f.complainant||"[COMPLAINANT NAME]"}, R/o: ${f.complainant_address||"[ADDRESS]"}
                                          ...RESPONDENTS

PETITION UNDER SECTION 528 BNSS 2023
(Formerly Section 482 CrPC)
FOR QUASHING OF FIR NO. ${f.fir||"[FIR NO]"} DATED ${f.fir_date||"[DATE]"}
PS: ${f.ps||"[POLICE STATION]"}, DIST. ${f.district||"[DISTRICT]"}

MOST RESPECTFULLY SHOWETH:

1. Petitioner files this petition for quashing of FIR No. ${f.fir||"[FIR NO]"} dated ${f.fir_date||"[DATE]"} for offences under ${f.sections||"[SECTIONS]"}.

2. FACTS: ${f.facts||"[FACTS CHRONOLOGICALLY — WHAT HAPPENED, WHY FIR IS ILLEGAL]"}

3. GROUNDS FOR QUASHING:
   (a) FIR does not disclose any cognizable offence against petitioner.
   (b) Allegations are vague, general and inherently improbable.
   (c) FIR filed with malafide intention — ${f.grounds||"[SPECIFIC GROUNDS]"}
   (d) This is essentially a civil dispute dressed in criminal form.
   (e) As held in State of Haryana v Bhajan Lal (1992) Supp (1) SCC 335 — present FIR falls within quashable categories.

PRAYER:
(a) Quash FIR No. ${f.fir||"[FIR NO]"} and all proceedings;
(b) Stay proceedings during pendency;
(c) Any other order as deemed fit.

Place: ${f.hc||f.district||"[PLACE]"}
Date: ${new Date().toLocaleDateString('en-IN')}
                                          (${f.advocate||"[ADVOCATE NAME]"})
                                          Counsel for Petitioner`
  },

  divorce: {
    keywords:["divorce petition","talak","section 13 hma","divorce karna","vivah viched","divorce draft"],
    name:"Divorce Petition — Section 13 HMA 1955",
    generate:(f)=>`IN THE FAMILY COURT / COURT OF DISTRICT JUDGE
${f.district||"[DISTRICT]"}, ${f.state||"[STATE]"}

MATRIMONIAL CASE NO. _____ OF ${new Date().getFullYear()}

${f.name||"[PETITIONER NAME]"}, Age: ${f.age||"[AGE]"} yrs, R/o: ${f.address||"[ADDRESS]"}
                                          ...PETITIONER
VERSUS
${f.respondent||"[RESPONDENT NAME]"}, Age: ${f.r_age||"[AGE]"} yrs, R/o: ${f.r_address||"[ADDRESS]"}
                                          ...RESPONDENT

PETITION FOR DIVORCE UNDER SECTION 13
HINDU MARRIAGE ACT, 1955

MOST RESPECTFULLY SHOWETH:

1. MARRIAGE: The petitioner and respondent were married on ${f.marriage_date||"[DATE]"} at ${f.marriage_place||"[PLACE]"} as per Hindu rites and customs. Children from marriage: ${f.children||"Nil"}.

2. FACTS (Chronological):
${f.facts||"   [DATE] — [FIRST EVENT]\n   [DATE] — [SUBSEQUENT EVENTS]\n   [DATE] — [SPECIFIC ACTS OF CRUELTY]\n   [DATE] — [SEPARATION]"}

3. GROUNDS: The respondent has treated the petitioner with cruelty under Section 13(1)(ia) HMA 1955:
${f.grounds||"   [SPECIFIC ACTS OF CRUELTY — PHYSICAL/MENTAL]"}

4. Parties have been living separately since ${f.separation||"[DATE]"}.

5. Marriage has broken down irretrievably and reconciliation is not possible.

PRAYER:
(a) Decree of divorce dissolving marriage dated ${f.marriage_date||"[DATE]"};
(b) Permanent alimony/maintenance of Rs. ${f.alimony||"[AMOUNT]"}/- per month;
(c) Custody of minor child/children to petitioner;
(d) Costs of proceedings;
(e) Any other order as deemed fit.

Place: ${f.district||"[PLACE]"}          (${f.advocate||"[ADVOCATE NAME]"})
Date: ${new Date().toLocaleDateString('en-IN')}   Counsel for Petitioner

VERIFICATION: I, ${f.name||"[NAME]"}, verify contents are true.
Verified at ${f.district||"[PLACE]"} on ${new Date().toLocaleDateString('en-IN')}.`
  },

  consumer: {
    keywords:["consumer complaint","consumer forum","defective product","deficiency service","consumer court","consumer case"],
    name:"Consumer Complaint — Consumer Protection Act 2019",
    generate:(f)=>`IN THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION
${(f.district||"[DISTRICT]").toUpperCase()}, ${f.state||"[STATE]"}

CONSUMER COMPLAINT NO. _____ OF ${new Date().getFullYear()}

${f.name||"[COMPLAINANT NAME]"}, R/o: ${f.address||"[ADDRESS]"}
                                          ...COMPLAINANT
VERSUS
${f.company||"[COMPANY/SELLER NAME]"}, ${f.company_address||"[COMPANY ADDRESS]"}
                                          ...OPPOSITE PARTY

CONSUMER COMPLAINT UNDER SECTION 35
CONSUMER PROTECTION ACT, 2019

1. Complainant is a consumer under Section 2(7) Consumer Protection Act 2019.

2. PURCHASE DETAILS:
   Product/Service: ${f.product||"[PRODUCT/SERVICE]"}
   Date: ${f.date||"[DATE]"}, Amount: Rs. ${f.amount||"[AMOUNT]"}/-, Bill No.: ${f.bill||"[BILL NO]"}

3. FACTS: ${f.facts||"[WHEN PURCHASED, WHAT DEFECT, WHEN COMPLAINED, OP RESPONSE]"}

4. DEFICIENCY: ${f.deficiency||"[SPECIFIC DEFECT/DEFICIENCY IN SERVICE]"}

5. RELIEF CLAIMED:
   Refund/Replacement: Rs. ${f.refund||"[AMOUNT]"}/-
   Compensation:       Rs. ${f.compensation||"[AMOUNT]"}/-
   Litigation cost:    Rs. ${f.cost||"[AMOUNT]"}/-

PRAYER:
(a) Direct OP to replace/refund Rs. ${f.refund||"[AMOUNT]"}/-;
(b) Pay compensation Rs. ${f.compensation||"[AMOUNT]"}/- for mental agony;
(c) Pay litigation costs Rs. ${f.cost||"[AMOUNT]"}/-;
(d) Any other order as deemed fit.

Date: ${new Date().toLocaleDateString('en-IN')}
                                          (${f.name||"[NAME]"})
                                          Complainant`
  },

  rti: {
    keywords:["rti application","rti file karna","right to information","suchna ka adhikar","rti draft"],
    name:"RTI Application — Section 6 RTI Act 2005",
    generate:(f)=>`APPLICATION UNDER SECTION 6(1)
RIGHT TO INFORMATION ACT, 2005

Date: ${new Date().toLocaleDateString('en-IN')}

TO,
THE PUBLIC INFORMATION OFFICER (CPIO/SPIO)
${f.department||"[DEPARTMENT/MINISTRY NAME]"}
${f.dept_address||"[DEPARTMENT ADDRESS]"}

I, ${f.name||"[APPLICANT NAME]"}, R/o ${f.address||"[ADDRESS]"}, Mobile: ${f.mobile||"[MOBILE]"},
request the following information:

INFORMATION REQUIRED:
1. ${f.q1||"[FIRST QUERY — Be specific and clear]"}
2. ${f.q2||"[SECOND QUERY]"}
3. ${f.q3||"[THIRD QUERY IF ANY]"}

TIME PERIOD REQUIRED: ${f.period||"[e.g., Last 3 years / 2020-2024]"}

I enclose prescribed fee of Rs. 10/- by ${f.payment||"IPO/Cash/Challan"}.

Please provide information within 30 days as per Section 7(1) RTI Act.
If information held by another authority, please transfer as per Section 6(3).

                                          (${f.name||"[NAME]"})
                                          ${f.address||"[ADDRESS]"}
                                          Mobile: ${f.mobile||"[MOBILE]"}`
  },

  vakalatnama: {
    keywords:["vakalatnama","vakalatnama banao","power of attorney advocate"],
    name:"Vakalatnama",
    generate:(f)=>`VAKALATNAMA

IN THE COURT OF ${f.court||"[COURT NAME]"}
CASE: ${f.case||"[CASE TITLE]"} — NO. ${f.case_no||"[CASE NO]"}

I/We ${f.client||"[CLIENT NAME]"}, R/o ${f.address||"[ADDRESS]"}, hereby appoint:

${f.advocate||"[ADVOCATE NAME]"}
Advocate — Enrolment No.: ${f.enrol||"[ENROLMENT NO]"}
${f.advocate_address||"[ADVOCATE ADDRESS]"}

to appear and act on my/our behalf with authority to:
(a) Appear in this case and all connected proceedings
(b) Sign and file documents, applications and appeals
(c) Receive notices, summons and orders
(d) Compromise with consent of client
(e) Engage other advocates if required

I agree to ratify all acts done by the said Advocate.

Date: ${new Date().toLocaleDateString('en-IN')}

                    (${f.client||"[CLIENT NAME]"})
                    Signature/Thumb Impression

ACCEPTED:
                    (${f.advocate||"[ADVOCATE NAME]"})
                    Advocate — Signature`
  },

  sale_deed: {
    keywords:["sale deed","property sale","registry karna","54 tpa","sampatti bikri","sale deed draft"],
    name:"Sale Deed — Section 54 TPA 1882",
    generate:(f)=>`SALE DEED

Executed on: ${new Date().toLocaleDateString('en-IN')}

VENDOR (SELLER):
${f.vendor||"[SELLER FULL NAME]"}, Age: ${f.vendor_age||"[AGE]"} yrs
S/o: ${f.vendor_father||"[FATHER NAME]"}, R/o: ${f.vendor_address||"[ADDRESS]"}
Aadhaar: ${f.vendor_aadhaar||"[AADHAAR NO]"}
(Hereinafter "VENDOR" including heirs, legal representatives)

PURCHASER (BUYER):
${f.purchaser||"[BUYER FULL NAME]"}, Age: ${f.purchaser_age||"[AGE]"} yrs
S/o: ${f.purchaser_father||"[FATHER NAME]"}, R/o: ${f.purchaser_address||"[ADDRESS]"}
Aadhaar: ${f.purchaser_aadhaar||"[AADHAAR NO]"}
(Hereinafter "PURCHASER" including heirs, legal representatives)

SCHEDULE OF PROPERTY:
${f.property||"Plot/House No.: [NUMBER]\nArea: [SQ.FT/ACRES]\nLocation: [COMPLETE ADDRESS]\nNorth: [BOUNDARY] South: [BOUNDARY]\nEast: [BOUNDARY]  West: [BOUNDARY]\nKhasra/Survey No.: [NUMBER]"}

SALE CONSIDERATION: Rs. ${f.amount||"[AMOUNT]"}/- (Rupees ${f.amount_words||"[AMOUNT IN WORDS]"} Only)

NOW THIS DEED WITNESSETH:

1. PAYMENT: Purchaser has paid Rs. ${f.amount||"[AMOUNT]"}/- in full. Vendor acknowledges receipt.

2. TRANSFER: Vendor sells, conveys and transfers all rights, title and interest in the Schedule Property to Purchaser.

3. POSSESSION: Vendor has handed over peaceful vacant possession to Purchaser today.

4. TITLE: Property is free from all encumbrances, mortgages, disputes and litigation.

5. INDEMNITY: Vendor shall indemnify Purchaser against all third-party claims.

IN WITNESS WHEREOF parties sign on ${new Date().toLocaleDateString('en-IN')}.

VENDOR: (${f.vendor||"[SELLER]"})          PURCHASER: (${f.purchaser||"[BUYER]"})

WITNESSES:
1. _________________ Signature: _________________
2. _________________ Signature: _________________`
  },

  legal_notice_general: {
    keywords:["legal notice","demand notice","general notice","notice bhejna","notice draft"],
    name:"General Legal Notice / Demand Notice",
    generate:(f)=>`LEGAL NOTICE
BY SPEED POST / REGISTERED A.D.
Date: ${new Date().toLocaleDateString('en-IN')}

TO,
${f.accused||"[RECEIVER NAME]"}
${f.accused_address||"[RECEIVER ADDRESS]"}

Under instructions from my client ${f.name||"[CLIENT NAME]"} R/o ${f.address||"[ADDRESS]"}:

1. ${f.facts||"[FACTS OF THE MATTER — WHAT HAPPENED, WHAT IS OWED]"}

2. Due to your ${f.default||"act/omission/breach"}, my client has suffered losses of Rs. ${f.amount||"[AMOUNT]"}/-.

3. You are called upon to ${f.demand||"[SPECIFIC DEMAND — PAY/STOP/DO]"} within ${f.days||"15 (Fifteen)"} days of receipt of this notice.

4. Failing which my client shall initiate appropriate legal proceedings — civil and/or criminal — at your risk and cost.

${f.advocate||"[ADVOCATE NAME]"}
Advocate — Enrol. No.: ${f.enrol||"[ENROLMENT NO]"}
${f.advocate_address||"[ADDRESS]"}
Mobile: ${f.advocate_mobile||"[MOBILE]"}`
  },
};

// ── HELPER FUNCTIONS ────────────────────────────────────────
function findSections(query) {
  const q = query.toLowerCase();
  return SECTIONS_DB.filter(s =>
    s.keywords.some(kw => q.includes(kw)) ||
    q.includes(`section ${s.num}`) ||
    q.includes(`sec ${s.num}`) ||
    q.includes(`s.${s.num}`) ||
    q.includes(`article ${s.num}`) ||
    q.includes(`art ${s.num}`) ||
    q.includes(`art. ${s.num}`)
  ).slice(0, 4);
}

function findCases(query) {
  const q = query.toLowerCase();
  return CASES_DB.filter(c =>
    c.keywords.some(kw => q.includes(kw))
  ).slice(0, 3);
}

function findTemplate(query) {
  const q = query.toLowerCase();
  for (const [key, tmpl] of Object.entries(TEMPLATES_DB)) {
    if (tmpl.keywords.some(kw => q.includes(kw))) return tmpl;
  }
  return null;
}

function extractFields(query) {
  const f = {};
  const patterns = [
    [/(?:naam|name|accused|petitioner|applicant|complainant)[:\s]+([A-Za-z\s]{3,30})(?:,|\.|\n|ke liye|ki umar)/i, ['name','accused','client','vendor','purchaser']],
    [/(?:fir|fir no|fir number)[:\s#.]*([0-9\/]+)/i, ['fir']],
    [/(?:court|adalat)[:\s]+([A-Za-z\s]{3,40})(?:,|\.|\n)/i, ['court']],
    [/(?:district|jila|city)[:\s]+([A-Za-z\s]{3,30})(?:,|\.|\n)/i, ['district']],
    [/(?:state|rajya)[:\s]+([A-Za-z\s]{3,20})(?:,|\.|\n)/i, ['state']],
    [/(?:police station|ps|thana)[:\s]+([A-Za-z\s]{3,30})(?:,|\.|\n)/i, ['ps']],
    [/(?:amount|rs\.?|rupees)[:\s]+([\d,]+)/i, ['amount']],
    [/(?:cheque|cheque no)[:\s#.]*([0-9]+)/i, ['cheque_no']],
    [/(?:bank)[:\s]+([A-Za-z\s]{3,30})(?:,|\.|\n)/i, ['bank']],
    [/(?:sections?|under)[:\s]+([0-9A-Za-z,\s/]+?)(?:,|\.|\n|of)/i, ['sections']],
    [/(?:arrest date|arrested on)[:\s]+(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i, ['arrest_date']],
    [/(?:date|tarikh)[:\s]+(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i, ['date','fir_date','cheque_date']],
  ];
  for (const [regex, keys] of patterns) {
    const m = query.match(regex);
    if (m) keys.forEach(k => { f[k] = m[1].trim(); });
  }
  if (f.name) { f.accused = f.accused||f.name; f.client = f.client||f.name; }
  return f;
}

function detectIntent(query) {
  const q = query.toLowerCase();
  const isDraft = DRAFT_KEYWORDS.some(kw => q.includes(kw));
  if (isDraft) return 'DRAFT';
  const isSection = SECTION_KEYWORDS.some(kw => q.includes(kw));
  const isCase = CASE_KEYWORDS.some(kw => q.includes(kw));
  if (isSection) return 'SECTION';
  if (isCase) return 'CASE';
  return 'GENERAL';
}

// ── MAIN HANDLER ────────────────────────────────────────────
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { messages, language } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    const TAVILY_API_KEY = process.env.TAVILY_API_KEY;
    const COHERE_API_KEY = process.env.COHERE_API_KEY;

    if (!GROQ_API_KEY) {
      return res.status(500).json({ error: 'GROQ API key not configured.' });
    }

    const userQuery = messages[messages.length - 1]?.content || '';
    const langNote = language && language !== 'English'
      ? `IMPORTANT: Respond entirely in ${language}. Keep legal terms accurate.` : '';

    const intent = detectIntent(userQuery);
    const sections = findSections(userQuery);
    const cases = findCases(userQuery);
    const template = intent === 'DRAFT' ? findTemplate(userQuery) : null;
    const fields = template ? extractFields(userQuery) : {};

    let templateText = '';
    if (template) {
      try { templateText = template.generate(fields); } catch(e) { templateText = ''; }
    }

    // WEB SEARCH
    let webData = '', sources = [];
    if (TAVILY_API_KEY) {
      try {
        const q = intent === 'DRAFT'
          ? `${template?.name || userQuery} Indian court official format`
          : intent === 'SECTION'
          ? `${userQuery} Indian law explanation leading cases indiankanoon`
          : `${userQuery} India Supreme Court judgment`;

        const tr = await fetch('https://api.tavily.com/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: TAVILY_API_KEY, query: q,
            search_depth: 'advanced', max_results: 5, include_answer: true,
            include_domains: ['indiankanoon.org','sci.gov.in','ecourts.gov.in','livelaw.in','barandbench.com','indiacode.nic.in'],
          }),
        });
        if (tr.ok) {
          const td = await tr.json();
          sources = (td.results||[]).slice(0,4).map(r=>({ title:r.title, url:r.url, snippet:r.content?.slice(0,350) }));
          webData = sources.map(s=>`SOURCE: ${s.title}\nURL: ${s.url}\nCONTENT: ${s.snippet}`).join('\n\n');
          if (td.answer) webData = `WEB SUMMARY: ${td.answer}\n\n` + webData;
        }
      } catch(e) { console.error('Tavily:', e.message); }
    }

    // COHERE RERANK
    if (COHERE_API_KEY && sources.length > 2) {
      try {
        const cr = await fetch('https://api.cohere.com/v1/rerank', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${COHERE_API_KEY}` },
          body: JSON.stringify({ model:'rerank-english-v3.0', query:userQuery, documents:sources.map(s=>`${s.title}: ${s.snippet}`), top_n:3 }),
        });
        if (cr.ok) {
          const cd = await cr.json();
          const rr = (cd.results||[]).sort((a,b)=>b.relevance_score-a.relevance_score).map(r=>sources[r.index]).filter(Boolean);
          if (rr.length > 0) { sources = rr; webData = rr.map(s=>`SOURCE: ${s.title}\nURL: ${s.url}\nCONTENT: ${s.snippet}`).join('\n\n'); }
        }
      } catch(e) { console.error('Cohere:', e.message); }
    }

    // BUILD PROMPT
    const secText = sections.map(s=>`${s.act} Section/Article ${s.num} — ${s.title} (Old: ${s.old||'—'}):\n${s.text}`).join('\n\n');
    const caseText = cases.map(c=>`${c.name} [${c.citation}]\nFacts: ${c.facts}\nHeld: ${c.held}\nImportance: ${c.importance}`).join('\n\n');

    let system = '';

    if (intent === 'DRAFT') {
      system = `You are Legal Craft AI — India's expert legal drafting system.

${template ? `DOCUMENT: ${template.name}` : 'TASK: Draft the requested legal document.'}

${templateText ? `OFFICIAL TEMPLATE (Use as base — fill blanks with user details):
---DRAFT START---
${templateText}
---DRAFT END---` : 'No template found — draft in correct Indian court format.'}

RULES:
1. Use official Indian court format exactly
2. Use BNS 2023/BNSS 2023/BSA 2023 sections (NOT old IPC/CrPC)
3. Fill all details user provided
4. Use [PLACEHOLDER] for missing info
5. Formal legal language throughout
6. Wrap complete document in ---DRAFT START--- and ---DRAFT END---
7. After draft — list what [PLACEHOLDERS] user needs to fill

WEB DATA: ${webData||'Use template as primary source'}
${langNote}`;

    } else if (intent === 'SECTION') {
      system = `You are Legal Craft AI — India's legal section explanation system.

VERIFIED SECTIONS FROM DATABASE:
${secText||'Not found in database'}

LEADING CASES FROM DATABASE:
${caseText||'Not found'}

WEB DATA:
${webData||'Use database as primary source'}

RESPONSE FORMAT (Always follow this):
===SECTION DETAILS===
- Act name, section number, old equivalent

===EXACT TEXT===
- Complete text of section

===SIMPLE EXPLANATION===
- What it means in plain language
- Who it applies to
- Consequences/punishment

===LEADING CASES===
For each case:
- Name and citation
- Facts (3-4 simple sentences)
- What court decided
- Why important

===KEY POINTS===
- Important things to remember

RULES: Never make up sections or cases. Simple language. Always give old IPC/CrPC equivalent.
${langNote}`;

    } else if (intent === 'CASE') {
      system = `You are Legal Craft AI — India's case law research system.

DATABASE CASES:
${caseText||'Not in database'}

WEB DATA:
${webData||'Use your legal knowledge'}

RESPONSE FORMAT:
===CASE DETAILS===
Full name, court, year, citation

===BACKGROUND===
Parties and dispute

===FACTS (Chronological)===
What happened step by step

===LEGAL ISSUES===
Which articles/sections involved

===ARGUMENTS===
Petitioner vs Respondent

===JUDGMENT===
Verdict in simple words, ratio decidendi

===IMPACT===
Why important, still good law?

RULES: Never make up facts. Simple language. Full citation always.
${langNote}`;

    } else {
      system = `You are Legal Craft AI — India's comprehensive legal intelligence system.

SECTIONS FOUND: ${secText||'Not found'}
CASES FOUND: ${caseText||'Not found'}
WEB DATA: ${webData||'Use your legal knowledge'}

RULES:
1. Prefer BNS 2023, BNSS 2023, BSA 2023
2. Simple clear language — explain legal terms
3. Never guess — if not found say clearly
4. Show sources
${langNote}`;
    }

    const gr = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_API_KEY}` },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role:'system', content:system }, ...messages],
        temperature: 0.1,
        max_tokens: 4000,
      }),
    });

    if (!gr.ok) {
      const err = await gr.text();
      console.error('Groq error:', err);
      return res.status(500).json({ error: 'AI error. Please try again.' });
    }

    const gd = await gr.json();
    const reply = gd.choices?.[0]?.message?.content || 'Unable to generate response.';

    return res.status(200).json({ reply, intent, sources: sources.slice(0,3) });

  } catch (error) {
    console.error('Server error:', error.message);
    return res.status(500).json({ error: 'Server error: ' + error.message });
  }
};
