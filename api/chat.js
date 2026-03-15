// ================================================================
// LEGAL CRAFT AI — MAIN BACKEND
// Loads all data packets — same features as legalcraft-final + more accurate
// ================================================================

// ── LOAD ALL DATA PACKETS ─────────────────────────────────
const CONTRACT  = require('./data/contract.js');
const BNS       = require('./data/bns.js');
const BNSS      = require('./data/bnss.js');
const BSA_CONST = require('./data/bsa_const_ni_hma.js');
const OTHER     = require('./data/other_acts.js');
const CASES     = require('./data/cases.js');

// ── BUILD UNIFIED SECTIONS DATABASE ──────────────────────
const SECTIONS_DB = [
  ...CONTRACT.map(x => ({ ...x, act: x.act || "Contract Act 1872" })),
  ...BNS.map(x      => ({ ...x, act: x.act || "BNS 2023" })),
  ...BNSS.map(x     => ({ ...x, act: x.act || "BNSS 2023" })),
  ...BSA_CONST.map(x=> ({ ...x, act: x.act || "BSA 2023" })),
  ...OTHER.map(x    => ({ ...x, act: x.act || "Other Acts" })),
];

// ── INTENT DETECTION KEYWORDS ────────────────────────────
const DRAFT_KW = [
  "draft","drafting","banao","likho","taiyar karo","application chahiye",
  "petition chahiye","notice chahiye","format chahiye","document chahiye",
  "bail application","notice bhejna","plaint","vakalatnama","deed chahiye",
  "complaint likhni","fir likhni","application draft","draft karo","draft karna"
];
const SECTION_KW = [
  "section","dhara","article","bns","bnss","bsa","ipc","crpc","cpc",
  "kya hai","explain","batao","samjhao","what is","meaning","matlab","define","definition"
];
const CASE_KW = [
  "case","judgment","judgement","verdict","landmark","leading case",
  "supreme court case","case law","precedent","famous case","kaunsa case","case batao"
];

// ── SEARCH FUNCTIONS ──────────────────────────────────────
function findSections(query) {
  const q = query.toLowerCase();
  return SECTIONS_DB.filter(s => {
    const kws = s.kw || [];
    return kws.some(kw => q.includes(kw)) ||
      q.includes(`section ${s.s}`) ||
      q.includes(`sec ${s.s}`) ||
      q.includes(`s.${s.s}`) ||
      q.includes(`article ${s.s}`) ||
      q.includes(`art ${s.s}`) ||
      q.includes(`art. ${s.s}`);
  }).slice(0, 5);
}

function findCases(query) {
  const q = query.toLowerCase();
  return CASES.filter(c => c.kw.some(k => q.includes(k))).slice(0, 3);
}

function detectIntent(query) {
  const q = query.toLowerCase();
  if (DRAFT_KW.some(kw => q.includes(kw)))   return 'DRAFT';
  if (SECTION_KW.some(kw => q.includes(kw))) return 'SECTION';
  if (CASE_KW.some(kw => q.includes(kw)))    return 'CASE';
  return 'GENERAL';
}

// ── TEMPLATES DATABASE ────────────────────────────────────
const TEMPLATES_DB = {
  bail: {
    keywords: ["bail application","regular bail","bail chahiye","483 bnss","439 crpc","bail ke liye"],
    name: "Bail Application — Section 483 BNSS 2023",
    generate: (f) => `IN THE COURT OF ${f.court||"[COURT NAME]"}
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

5. No previous bail application has been filed / Previous application rejected on [DATE].

PRAYER:
It is prayed that this Hon'ble Court may be pleased to:
(a) Release applicant on bail in FIR No. ${f.fir||"[FIR NO]"};
(b) Pass any other order as deemed fit and proper.

Place: ${f.district||"[PLACE]"}          (${f.advocate||"[ADVOCATE NAME]"})
Date: ${new Date().toLocaleDateString('en-IN')}   Counsel for Applicant
                                          Enrol. No.: ${f.enrol||"[ENROLMENT NO]"}

VERIFICATION: I, ${f.name||"[NAME]"}, verify contents are true.
Verified at ${f.district||"[PLACE]"} on ${new Date().toLocaleDateString('en-IN')}.
                                          (${f.name||"[NAME]"}) — Applicant`
  },

  anticipatory_bail: {
    keywords: ["anticipatory bail","advance bail","pre-arrest bail","482 bnss","438 crpc","giraftari se pehle bail","anticipatory"],
    name: "Anticipatory Bail — Section 482 BNSS 2023",
    generate: (f) => `IN THE COURT OF ${f.court||"THE SESSIONS JUDGE / HIGH COURT"}
${f.district||"[DISTRICT]"}, ${f.state||"[STATE]"}

APPLICATION FOR ANTICIPATORY BAIL UNDER SECTION 482 BNSS 2023
(Formerly Section 438 CrPC 1973)

${f.name||"[APPLICANT NAME]"}, Age: ${f.age||"[AGE]"} yrs, R/o: ${f.address||"[ADDRESS]"}
                                          ...APPLICANT
VERSUS
STATE OF ${(f.state||"[STATE]").toUpperCase()}
                                          ...RESPONDENT

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
   (f) As held in Gurbaksh Singh Sibbia v State of Punjab AIR 1980 SC 1632 — cannot be refused merely because offence is serious.
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
    keywords: ["fir","fir likhwana","fir complaint","police complaint","section 173","154 crpc","complaint draft"],
    name: "FIR / Police Complaint — Section 173 BNSS 2023",
    generate: (f) => `TO,
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
${f.facts||"[DESCRIBE WHAT HAPPENED STEP BY STEP — DATE, TIME, PLACE, WHO DID WHAT, WITNESSES]"}

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
    keywords: ["legal notice 138","cheque bounce notice","section 138 notice","138 ni act notice","cheque dishonour notice"],
    name: "Legal Notice — Section 138 NI Act (Cheque Bounce)",
    generate: (f) => `LEGAL NOTICE UNDER SECTION 138 READ WITH SECTION 142
NEGOTIABLE INSTRUMENTS ACT, 1881

BY SPEED POST / REGISTERED A.D.

Date: ${new Date().toLocaleDateString('en-IN')}

TO,
${f.accused||"[DRAWER/ACCUSED NAME]"}
${f.accused_address||"[COMPLETE ADDRESS OF ACCUSED]"}

Under instructions from my client ${f.name||"[CLIENT NAME]"} R/o ${f.address||"[ADDRESS]"}:

1. My client and you had a transaction/agreement whereby you owed Rs. ${f.amount||"[AMOUNT]"}/- to my client on account of ${f.reason||"[REASON FOR DEBT/LIABILITY]"}.

2. In discharge of your liability, you issued the following cheque:
   Cheque No.:  ${f.cheque_no||"[CHEQUE NUMBER]"}
   Date:        ${f.cheque_date||"[DATE ON CHEQUE]"}
   Amount:      Rs. ${f.amount||"[AMOUNT]"}/-
   Bank:        ${f.bank||"[BANK NAME]"}
   Branch:      ${f.branch||"[BRANCH]"}

3. The cheque was presented on ${f.present_date||"[DATE OF PRESENTATION]"} and returned dishonoured on ${f.dishonour_date||"[DATE OF DISHONOUR]"} with remark: "${f.reason_return||"Insufficient Funds / Payment Stopped"}".

4. This constitutes an offence under Section 138, Negotiable Instruments Act, 1881.

5. YOU ARE HEREBY CALLED UPON to pay Rs. ${f.amount||"[AMOUNT]"}/- with interest @ 18% per annum within FIFTEEN (15) DAYS of receipt of this notice.

6. Failure to pay will result in criminal complaint under Section 138/142 NI Act at your risk and cost.

${f.advocate||"[ADVOCATE NAME]"}
Advocate — Enrol. No.: ${f.enrol||"[ENROLMENT NO]"}
${f.advocate_address||"[ADVOCATE ADDRESS]"}
Mobile: ${f.advocate_mobile||"[MOBILE]"}`
  },

  quashing: {
    keywords: ["quashing","fir quash","section 528","482 crpc","quashing petition","fir cancel karna"],
    name: "Quashing Petition — Section 528 BNSS 2023",
    generate: (f) => `IN THE HIGH COURT OF ${(f.state||"[STATE]").toUpperCase()}
AT ${f.hc||f.district||"[LOCATION]"}

CRIMINAL MISC. PETITION NO. _____ OF ${new Date().getFullYear()}

${f.name||"[PETITIONER NAME]"}, R/o: ${f.address||"[ADDRESS]"}
                                          ...PETITIONER
VERSUS
1. STATE OF ${(f.state||"[STATE]").toUpperCase()}
2. ${f.complainant||"[COMPLAINANT NAME]"}, R/o: ${f.complainant_address||"[ADDRESS]"}
                                          ...RESPONDENTS

PETITION UNDER SECTION 528 BNSS 2023
FOR QUASHING OF FIR NO. ${f.fir||"[FIR NO]"} DATED ${f.fir_date||"[DATE]"}
PS: ${f.ps||"[POLICE STATION]"}, DIST. ${f.district||"[DISTRICT]"}

MOST RESPECTFULLY SHOWETH:

1. Petitioner files this petition for quashing of FIR No. ${f.fir||"[FIR NO]"} for offences under ${f.sections||"[SECTIONS]"}.

2. FACTS: ${f.facts||"[FACTS CHRONOLOGICALLY — WHY FIR IS ILLEGAL/MALAFIDE]"}

3. GROUNDS FOR QUASHING:
   (a) FIR does not disclose any cognizable offence against petitioner.
   (b) Allegations are vague, general and inherently improbable.
   (c) FIR filed with malafide intention — ${f.grounds||"[SPECIFIC GROUNDS]"}
   (d) This is essentially a civil dispute dressed in criminal form.
   (e) As held in State of Haryana v Bhajan Lal 1992 Supp 1 SCC 335 — present FIR falls within quashable categories.

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
    keywords: ["divorce petition","talak","section 13 hma","divorce karna","vivah viched"],
    name: "Divorce Petition — Section 13 HMA 1955",
    generate: (f) => `IN THE FAMILY COURT / COURT OF DISTRICT JUDGE
${f.district||"[DISTRICT]"}, ${f.state||"[STATE]"}

MATRIMONIAL CASE NO. _____ OF ${new Date().getFullYear()}

${f.name||"[PETITIONER NAME]"}, Age: ${f.age||"[AGE]"} yrs, R/o: ${f.address||"[ADDRESS]"}
                                          ...PETITIONER
VERSUS
${f.respondent||"[RESPONDENT NAME]"}, R/o: ${f.r_address||"[ADDRESS]"}
                                          ...RESPONDENT

PETITION FOR DIVORCE UNDER SECTION 13
HINDU MARRIAGE ACT, 1955

MOST RESPECTFULLY SHOWETH:

1. MARRIAGE: The petitioner and respondent were married on ${f.marriage_date||"[DATE]"} at ${f.marriage_place||"[PLACE]"} as per Hindu rites. Children: ${f.children||"Nil"}.

2. FACTS (Chronological):
${f.facts||"   [DATE] — [FIRST EVENT]\n   [DATE] — [SUBSEQUENT EVENTS]\n   [DATE] — [SPECIFIC ACTS OF CRUELTY]"}

3. GROUNDS: The respondent has treated the petitioner with cruelty under Section 13(1)(ia) HMA 1955:
${f.grounds||"   [SPECIFIC ACTS OF CRUELTY — PHYSICAL/MENTAL]"}

4. Parties have been living separately since ${f.separation||"[DATE]"}.

PRAYER:
(a) Decree of divorce dissolving marriage dated ${f.marriage_date||"[DATE]"};
(b) Permanent alimony/maintenance of Rs. ${f.alimony||"[AMOUNT]"}/- per month;
(c) Custody of minor child/children;
(d) Costs of proceedings.

Place: ${f.district||"[PLACE]"}          (${f.advocate||"[ADVOCATE NAME]"})
Date: ${new Date().toLocaleDateString('en-IN')}   Counsel for Petitioner

VERIFICATION: I, ${f.name||"[NAME]"}, verify contents are true.
Verified at ${f.district||"[PLACE]"} on ${new Date().toLocaleDateString('en-IN')}.`
  },

  consumer: {
    keywords: ["consumer complaint","consumer forum","defective product","deficiency service","consumer court","consumer case"],
    name: "Consumer Complaint — Consumer Protection Act 2019",
    generate: (f) => `IN THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION
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
    keywords: ["rti application","rti file karna","right to information","suchna ka adhikar","rti draft"],
    name: "RTI Application — Section 6 RTI Act 2005",
    generate: (f) => `APPLICATION UNDER SECTION 6(1)
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

                                          (${f.name||"[NAME]"})
                                          ${f.address||"[ADDRESS]"}
                                          Mobile: ${f.mobile||"[MOBILE]"}`
  },

  vakalatnama: {
    keywords: ["vakalatnama","vakalatnama banao","power of attorney advocate"],
    name: "Vakalatnama",
    generate: (f) => `VAKALATNAMA

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
    keywords: ["sale deed","property sale","registry karna","54 tpa","sampatti bikri","sale deed draft"],
    name: "Sale Deed — Section 54 TPA 1882",
    generate: (f) => `SALE DEED

Executed on: ${new Date().toLocaleDateString('en-IN')}

VENDOR (SELLER): ${f.vendor||"[SELLER FULL NAME]"}, Age: ${f.vendor_age||"[AGE]"} yrs
S/o: ${f.vendor_father||"[FATHER NAME]"}, R/o: ${f.vendor_address||"[ADDRESS]"}

PURCHASER (BUYER): ${f.purchaser||"[BUYER FULL NAME]"}, Age: ${f.purchaser_age||"[AGE]"} yrs
S/o: ${f.purchaser_father||"[FATHER NAME]"}, R/o: ${f.purchaser_address||"[ADDRESS]"}

SCHEDULE OF PROPERTY:
${f.property||"Plot/House No.: [NUMBER]\nArea: [SQ.FT/ACRES]\nLocation: [COMPLETE ADDRESS WITH BOUNDARIES]"}

SALE CONSIDERATION: Rs. ${f.amount||"[AMOUNT]"}/- (${f.amount_words||"[AMOUNT IN WORDS]"})

1. PAYMENT: Purchaser has paid Rs. ${f.amount||"[AMOUNT]"}/- in full. Vendor acknowledges receipt.
2. TRANSFER: Vendor sells, conveys and transfers all rights, title and interest in Schedule Property to Purchaser.
3. POSSESSION: Vendor has handed over peaceful vacant possession to Purchaser today.
4. TITLE: Property is free from all encumbrances, mortgages, disputes and litigation.
5. INDEMNITY: Vendor shall indemnify Purchaser against all third-party claims.

VENDOR: (${f.vendor||"[SELLER]"})          PURCHASER: (${f.purchaser||"[BUYER]"})

WITNESSES:
1. _________________ Signature: _________________
2. _________________ Signature: _________________`
  },

  legal_notice: {
    keywords: ["legal notice","demand notice","general notice","notice bhejna","notice draft"],
    name: "General Legal Notice",
    generate: (f) => `LEGAL NOTICE
BY SPEED POST / REGISTERED A.D.
Date: ${new Date().toLocaleDateString('en-IN')}

TO,
${f.accused||"[RECEIVER NAME]"}
${f.accused_address||"[RECEIVER ADDRESS]"}

Under instructions from my client ${f.name||"[CLIENT NAME]"} R/o ${f.address||"[ADDRESS]"}:

1. ${f.facts||"[FACTS OF THE MATTER — WHAT HAPPENED, WHAT IS OWED]"}

2. Due to your ${f.default||"act/omission/breach"}, my client has suffered losses of Rs. ${f.amount||"[AMOUNT]"}/-

3. You are called upon to ${f.demand||"[SPECIFIC DEMAND — PAY/STOP/DO]"} within ${f.days||"15 (Fifteen)"} days of receipt of this notice.

4. Failing which legal proceedings — civil and/or criminal — shall be initiated at your risk and cost.

${f.advocate||"[ADVOCATE NAME]"}
Advocate — Enrol. No.: ${f.enrol||"[ENROLMENT NO]"}
${f.advocate_address||"[ADDRESS]"}
Mobile: ${f.advocate_mobile||"[MOBILE]"}`
  },
};

// ── HELPER FUNCTIONS ──────────────────────────────────────
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
  if (f.name) { f.accused = f.accused || f.name; f.client = f.client || f.name; }
  return f;
}

// ── MAIN HANDLER ──────────────────────────────────────────
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

    const GROQ_API_KEY   = process.env.GROQ_API_KEY;
    const TAVILY_API_KEY = process.env.TAVILY_API_KEY;
    const COHERE_API_KEY = process.env.COHERE_API_KEY;

    if (!GROQ_API_KEY) return res.status(500).json({ error: 'GROQ API key not configured.' });

    const userQuery = messages[messages.length - 1]?.content || '';
    const langNote  = language && language !== 'English' ? `IMPORTANT: Respond entirely in ${language}. Keep legal terms accurate.` : '';

    const intent   = detectIntent(userQuery);
    const sections = findSections(userQuery);
    const cases    = findCases(userQuery);
    const template = intent === 'DRAFT' ? findTemplate(userQuery) : null;
    const fields   = template ? extractFields(userQuery) : {};

    let templateText = '';
    if (template) {
      try { templateText = template.generate(fields); } catch(e) { templateText = ''; }
    }

    // ── WEB SEARCH ────────────────────────────────────────
    let webData = '', sources = [];
    if (TAVILY_API_KEY) {
      try {
        const q = intent === 'DRAFT'
          ? `${template?.name || userQuery} Indian court official format BNS BNSS 2023`
          : intent === 'SECTION'
          ? `${userQuery} Indian law section explanation leading cases indiankanoon`
          : `${userQuery} India Supreme Court judgment`;

        const tr = await fetch('https://api.tavily.com/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: TAVILY_API_KEY, query: q,
            search_depth: 'advanced', max_results: 5, include_answer: true,
            include_domains: ['indiankanoon.org','sci.gov.in','ecourts.gov.in','livelaw.in','barandbench.com','indiacode.nic.in','judgments.ecourts.gov.in','freelaw.in'],
          }),
        });
        if (tr.ok) {
          const td = await tr.json();
          sources = (td.results||[]).slice(0,4).map(r => ({ title:r.title, url:r.url, snippet:r.content?.slice(0,350) }));
          webData = sources.map(s => `SOURCE: ${s.title}\nURL: ${s.url}\nCONTENT: ${s.snippet}`).join('\n\n');
          if (td.answer) webData = `WEB SUMMARY: ${td.answer}\n\n` + webData;
        }
      } catch(e) { console.error('Tavily:', e.message); }
    }

    // ── COHERE RERANK ────────────────────────────────────
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

    // ── BUILD SYSTEM PROMPT ───────────────────────────────
    const secText  = sections.map(s=>`${s.act} Section/Article ${s.s} — ${s.t}:\n${s.d}\nLeading Cases: ${s.cl||'See web data'}`).join('\n\n---\n\n');
    const caseText = cases.map(c=>`${c.n} [${c.c}]\nFacts: ${c.f}\nHeld: ${c.h}\nImportance: ${c.i}`).join('\n\n---\n\n');

    let system = '';

    if (intent === 'DRAFT') {
      system = `You are Legal Craft AI — India's expert legal drafting system.

${template ? `DOCUMENT: ${template.name}` : 'TASK: Draft the requested legal document.'}

${templateText ? `OFFICIAL TEMPLATE (Use as base — fill blanks with user details):\n---DRAFT START---\n${templateText}\n---DRAFT END---` : 'No template found — draft in correct Indian court format.'}

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

VERIFIED SECTIONS FROM COMPLETE DATABASE:
${secText||'Not found in database'}

LEADING CASES FROM DATABASE:
${caseText||'Not found'}

WEB DATA:
${webData||'Use database as primary source'}

RESPONSE FORMAT (Always follow this):
===SECTION DETAILS===
Act name, section number, old equivalent (IPC/CrPC)

===EXACT TEXT===
Complete text of section

===SIMPLE EXPLANATION===
What it means in plain language; Who it applies to; Consequences/punishment

===LEADING CASES===
For each case: Name + citation; Facts (3-4 sentences); What court decided; Why important

===KEY POINTS===
Important things to remember

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
Verdict in simple words; ratio decidendi

===IMPACT===
Why important; still good law?

RULES: Never make up facts. Simple language. Full citation always.
${langNote}`;

    } else {
      system = `You are Legal Craft AI — India's comprehensive legal intelligence system.

SECTIONS FOUND: ${secText||'Not found'}
CASES FOUND: ${caseText||'Not found'}
WEB DATA: ${webData||'Use your legal knowledge'}

RULES:
1. Prefer BNS 2023, BNSS 2023, BSA 2023
2. Simple clear language
3. Never guess — if not found say clearly
4. Show sources
${langNote}`;
    }

    // ── GROQ API CALL ─────────────────────────────────────
    const gr = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_API_KEY}` },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'system', content: system }, ...messages],
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
