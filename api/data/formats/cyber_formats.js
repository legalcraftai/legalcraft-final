// ════════════════════════════════════════════════════════════
// CYBER CRIME & IT ACT FORMATS PACKET
// Cyber FIR, Online Fraud, Identity Theft, Hacking, Deepfake
// ════════════════════════════════════════════════════════════
module.exports = {
  meta: { packet:"cyber_formats", total_formats:8 },

  cyber_fir: {
    name:"Cyber Crime FIR / Complaint",
    section:"IT Act 2000 + BNS 2023",
    court:"Cyber Crime Cell / Police Station",
    attach_with:["screenshot_evidence","bank_statement"],
    keywords:["cyber crime fir","cyber complaint","online fraud fir","cyber cell complaint","cyber crime police complaint","digital crime complaint"],
    generate:(f={})=>`TO,
THE OFFICER-IN-CHARGE
CYBER CRIME CELL / POLICE STATION
${f.ps||"__________"}, District: ${f.district||"__________"}, ${f.state||"__________"}

DATE: ${f.date||new Date().toLocaleDateString('en-IN')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CYBER CRIME COMPLAINT U/S 173 BNSS 2023 READ WITH
INFORMATION TECHNOLOGY ACT 2000
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPLAINANT DETAILS:
Name:         ${f.name||"__________"}
S/o D/o W/o:  ${f.father||"__________"}
Age:          ${f.age||"__"} Years
Address:      ${f.address||"__________"}
Mobile:       ${f.mobile||"__________"}
Email:        ${f.email||"__________"}
Aadhaar No.:  ${f.aadhaar||"__________"}

ACCUSED DETAILS:
Name (if known):  ${f.accused||"Unknown / __________"}
Platform/Website: ${f.platform||"__________"}
Phone No.:        ${f.accused_mobile||"__________"}
Email/Account:    ${f.accused_email||"__________"}

NATURE OF CYBER CRIME:
${f.crime_type||"☐ Online Financial Fraud\n☐ Identity Theft\n☐ Hacking of Account\n☐ Cyber Harassment/Stalking\n☐ Morphed Images/Deepfake\n☐ OTP Fraud\n☐ Investment Scam\n☐ Sextortion\n☐ Fake Social Media Profile\n☐ Other: __________"}

INCIDENT DETAILS:
Date of Incident: ${f.incident_date||"__________"}
Time:             ${f.incident_time||"__________"}
Platform Used:    ${f.platform||"__________"}

FACTS (Chronological):
${f.facts||`1. On __________, the accused/unknown person
   contacted me via ${f.platform||"WhatsApp/Email/Social Media"}.

2. The accused ${f.method||"impersonated bank official / sent fraudulent link / demanded OTP / other"}.

3. I was induced to ${f.victim_action||"share OTP / click link / transfer money / share personal information"}.

4. As a result, Rs. ${f.loss||"__________"}/- was debited from my account / my data was compromised.

5. Transaction details:
   UTR/Reference No.: ${f.utr||"__________"}
   Date: ${f.txn_date||"__________"}
   Amount: Rs. ${f.loss||"__________"}/-
   Bank: ${f.bank||"__________"}, Account No.: ${f.account||"__________"}`}

OFFENCES COMMITTED:
• Section ${f.it_section||"66/66C/66D/67"} Information Technology Act 2000
• Section ${f.bns_section||"318/316/351"} Bharatiya Nyaya Sanhita 2023

EVIDENCE AVAILABLE:
${f.evidence||"• Screenshots of conversations (attached)\n• Bank transaction proof\n• Call recordings\n• Email screenshots"}

PRAYER:
1. Register FIR / Cyber Crime complaint;
2. Trace and arrest accused;
3. Freeze fraudulent accounts;
4. Recover Rs. ${f.loss||"__________"}/- and return to complainant.

I declare the above facts are true and correct.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                              (${f.name||"__________"})
                              Complainant — Signature`
  },

  online_fraud_notice: {
    name:"Legal Notice — Online Fraud / UPI Fraud",
    keywords:["online fraud notice","upi fraud notice","digital fraud notice","payment fraud notice","cyber fraud legal notice"],
    generate:(f={})=>`LEGAL NOTICE FOR ONLINE / DIGITAL FRAUD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY REGISTERED POST + EMAIL
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.accused||"__________"} / Unknown Person
Last Known Address: ${f.accused_address||"__________"}
Mobile: ${f.accused_mobile||"__________"}
UPI ID / Account: ${f.accused_account||"__________"}

Under instructions from my client
${f.client||"__________"}, R/o: ${f.client_address||"__________"}:

1.  On ${f.fraud_date||"__________"}, Rs. ${f.amount||"__________"}/- was
    fraudulently transferred from my client's account
    via ${f.mode||"UPI/NEFT/RTGS/Debit Card"} bearing reference
    no. ${f.ref||"__________"} to your account/UPI ID.

2.  MODUS OPERANDI:
    ${f.modus||"(Describe how fraud was committed)"}

3.  The aforesaid act is an offence under:
    (a) Section 66D IT Act 2000 — Cheating by personation;
    (b) Section 318 BNS 2023 — Cheating and fraud;
    (c) Section 420/415 — Inducement by deception.

4.  YOU ARE CALLED UPON within 48 HOURS to return
    Rs. ${f.amount||"__________"}/- to my client failing which:
    (a) Police complaint will be filed;
    (b) Cyber Crime portal complaint at cybercrime.gov.in;
    (c) Bank dispute and chargeback.

${f.advocate||"__________"}, Advocate
Mobile: ${f.mobile||"__________"}`
  },

  hacking_complaint: {
    name:"Hacking / Unauthorized Access Complaint",
    section:"S.66 IT Act 2000",
    keywords:["hacking complaint","account hack complaint","66 it act complaint","unauthorized access complaint","account hacked fir"],
    generate:(f={})=>`COMPLAINT — HACKING / UNAUTHORIZED COMPUTER ACCESS
U/S 66 INFORMATION TECHNOLOGY ACT 2000

TO,
THE CYBER CRIME CELL
${f.city||"__________"} Police / Cyber Cell

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT: ${f.complainant||"__________"}, Mobile: ${f.mobile||"__________"}

HACKED ACCOUNT/DEVICE:
Platform:     ${f.platform||"Gmail/Facebook/Instagram/Bank/Other"}
Account ID:   ${f.account_id||"__________"}
Date of Hack: ${f.hack_date||"__________"}
Detected on:  ${f.detected_date||"__________"}

WHAT HAPPENED:
${f.facts||`1. My ${f.platform||"account"} was hacked on ${f.hack_date||"__________"}.
2. Unauthorized access was gained by __________.
3. The hacker changed my password/recovery email.
4. The hacker has been ${f.hacker_activity||"posting/messaging/accessing data/stealing files"} from my account.
5. Financial loss: Rs. ${f.loss||"__________"}/- (if any)`}

TECHNICAL DETAILS:
IP Address (if known): ${f.ip||"__________"}
Login location shown:  ${f.location||"__________"}
Last legitimate login: ${f.last_login||"__________"}

OFFENCES:
• S.66 IT Act — Computer-related offences
• S.43 IT Act — Unauthorized access
• S.66C IT Act — Identity theft (if applicable)

PRAYER:
(a) Register complaint and investigate;
(b) Trace IP and identify hacker;
(c) Suspend/restore account;
(d) Arrest and prosecute accused.

(${f.complainant||"__________"}) — Signature
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  sextortion_complaint: {
    name:"Sextortion / Blackmail Complaint",
    section:"S.67/67A IT Act + S.308/351 BNS 2023",
    keywords:["sextortion complaint","blackmail complaint","obscene photo blackmail","online blackmail complaint","nude photo blackmail"],
    generate:(f={})=>`COMPLAINT — SEXTORTION / ONLINE BLACKMAIL
(STRICTLY CONFIDENTIAL)

TO,
THE OFFICER-IN-CHARGE, CYBER CRIME CELL
${f.district||"__________"} Police

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT:
Name:    ${f.complainant||"__________"} (Confidential)
Mobile:  ${f.mobile||"__________"}
Address: ${f.address||"__________"}

ACCUSED:
Name (if known): ${f.accused||"Unknown"}
Platform:        ${f.platform||"WhatsApp/Instagram/Facebook"}
Mobile/ID:       ${f.accused_contact||"__________"}

FACTS:
${f.facts||`1. On __________, the accused contacted me on ${f.platform||"__________"}.
2. The accused obtained private/intimate content by __________.
3. Since __________, the accused has been threatening to share this content.
4. The accused is demanding Rs. __________/- / other acts.
5. I have not paid / have paid Rs. __________/- under duress.`}

OFFENCES:
• S.66E IT Act — Privacy violation
• S.67/67A IT Act — Obscene material
• S.308 BNS 2023 — Extortion
• S.351 BNS 2023 — Criminal intimidation
• S.79 BNS 2023 — Word/gesture to insult woman (if applicable)

PRAYER:
(a) Register FIR and investigate;
(b) Immediately take down/block the content;
(c) Trace and arrest the accused;
(d) Ensure strict confidentiality of complainant's identity.

I am ready to provide evidence in strictest confidence.

(COMPLAINANT — Name Withheld at Request)
Mobile: ${f.mobile||"__________"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  deepfake_notice: {
    name:"Legal Notice — Deepfake / Morphed Image",
    keywords:["deepfake notice","morphed image notice","fake video legal notice","ai generated fake complaint","deepfake complaint"],
    generate:(f={})=>`LEGAL NOTICE — DEEPFAKE / MORPHED IMAGE COMPLAINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.accused||"__________"}
${f.accused_address||"__________"}

AND TO,
THE GRIEVANCE OFFICER
${f.platform||"Meta/Google/YouTube/X/Instagram"}
(Via prescribed complaint mechanism)

Under instructions from my client ${f.client||"__________"}:

1.  You have created/circulated/published AI-generated
    deepfake / morphed images/videos of my client on
    ${f.platform||"__________"} without consent.

2.  URL/Link: ${f.url||"__________"}
    Posted on: ${f.post_date||"__________"}

3.  This constitutes:
    (a) S.66E IT Act — Violation of privacy;
    (b) S.67/67A IT Act — Obscene electronic content;
    (c) S.356 BNS 2023 — Defamation;
    (d) S.74 BNS 2023 — Assault on dignity of woman.

4.  DEMAND within 24 HOURS:
    (a) Remove ALL content immediately;
    (b) Provide identity of uploader;
    (c) Issue public apology;
    (d) Pay damages of Rs. ${f.damages||"__________"}/-

5.  Failure = FIR + Civil suit + Platform escalation.

${f.advocate||"__________"}, Advocate
Enrolment: ${f.enrol||"__________"}`
  },

  data_breach_notice: {
    name:"Legal Notice — Data Breach / Privacy Violation",
    section:"S.43A IT Act 2000 / IT Rules 2011",
    keywords:["data breach notice","privacy violation notice","43a it act notice","data leak complaint","personal data breach"],
    generate:(f={})=>`LEGAL NOTICE — DATA BREACH / PRIVACY VIOLATION
U/S 43-A INFORMATION TECHNOLOGY ACT 2000

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE CEO / DATA PROTECTION OFFICER
M/s ${f.company||"__________"}
${f.company_address||"__________"}

Under instructions from my client ${f.client||"__________"}:

1.  My client had entrusted sensitive personal information to your organization including:
    ${f.data_shared||"Name, Aadhaar, PAN, Bank details, Medical records, Other"}

2.  BREACH:
    On ${f.breach_date||"__________"}, my client's data was ${f.breach_type||"leaked/hacked/sold/shared without consent"}.

    Evidence: ${f.evidence||"Phishing email received / Dark web exposure / Unauthorized login alerts"}

3.  VIOLATIONS:
    (a) S.43A IT Act — Failure to protect sensitive data;
    (b) IT (Reasonable Security Practices) Rules 2011;
    (c) RBI/SEBI/IRDAI regulations (if applicable).

4.  HARM CAUSED:
    ${f.harm||"Financial fraud / Identity theft / Reputational damage"}
    Estimated loss: Rs. ${f.loss||"__________"}/-

5.  IMMEDIATE DEMANDS:
    (a) Notify all affected parties per Rule 3;
    (b) Provide incident report within 72 hours;
    (c) Pay compensation Rs. ${f.compensation||"__________"}/-;
    (d) Implement security measures.

6.  Failure = Complaint to CERT-In + Civil suit + Consumer forum.

${f.advocate||"__________"}, Advocate
Enrolment: ${f.enrol||"__________"}`
  },

  cyber_appeal: {
    name:"Appeal Against Cyber Crime Closure Report",
    keywords:["cyber crime appeal","cyber complaint appeal","appeal police inaction cyber","cybercrime closure report appeal"],
    generate:(f={})=>`IN THE COURT OF JUDICIAL MAGISTRATE FIRST CLASS
${f.district||"__________"}, ${f.state||"__________"}

APPLICATION NO. _____ OF ${f.year||new Date().getFullYear()}

${f.applicant||"__________"}, R/o: ${f.address||"__________"}
                              ...APPLICANT
VERSUS
STATE OF ${(f.state||"__________").toUpperCase()}    ...RESPONDENT

APPLICATION U/S 175(3) BNSS 2023 — DIRECTING
CYBER CRIME POLICE TO REGISTER FIR AND INVESTIGATE

1.  Complainant filed cyber crime complaint at
    ${f.ps||"__________"} Cyber Cell on ${f.complaint_date||"__________"}.

2.  Despite ${f.days||"__________"} days, police has taken
    no action / filed closure report.

3.  The cyber crime is cognizable and mandatory FIR
    registration is required per Lalita Kumari
    v Govt of UP 2014 2 SCC 1.

4.  Loss: Rs. ${f.loss||"__________"}/- via online fraud.

PRAYER:
(a) Direct Cyber Cell to register FIR forthwith;
(b) Direct proper investigation;
(c) Appoint SIT if needed.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                              (${f.advocate||"__________"})
                              Advocate for Applicant`
  },

  social_media_complaint: {
    name:"Social Media Abuse / Harassment Complaint",
    keywords:["social media complaint","facebook harassment complaint","instagram complaint","twitter harassment complaint","social media abuse fir"],
    generate:(f={})=>`COMPLAINT — SOCIAL MEDIA HARASSMENT / ABUSE

TO, THE CYBER CRIME CELL
${f.district||"__________"} Police

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT: ${f.complainant||"__________"}
Mobile: ${f.mobile||"__________"}, Email: ${f.email||"__________"}

PLATFORM:  ${f.platform||"Facebook / Instagram / Twitter(X) / YouTube / WhatsApp"}
Profile URL of Accused: ${f.accused_url||"__________"}
Accused Name/Handle: ${f.accused_handle||"__________"}

HARASSMENT DETAILS:
${f.harassment||`1. Abusive/threatening messages being sent since __________.
2. Posting defamatory content about me.
3. Creating fake profile in my name.
4. Sharing private information/photos.
5. Inciting others against me (cyber mob).`}

EVIDENCE:
• Screenshots attached (${f.screenshot_count||"__"} nos.)
• Screen recordings
• Post URLs: ${f.post_urls||"__________"}

OFFENCES:
• S.66A IT Act — STRUCK DOWN (cannot charge)
• S.66C/66E IT Act — Identity theft/Privacy
• S.354D BNS 2023 — Stalking (if applicable)
• S.351/356 BNS 2023 — Threat/Defamation

PRAYER:
(a) Register FIR;
(b) Serve legal process on platform for account details;
(c) Take down abusive content;
(d) Arrest accused.

(${f.complainant||"__________"}) — Signature
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },
};
