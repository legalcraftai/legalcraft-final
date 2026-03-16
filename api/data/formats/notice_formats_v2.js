// ════════════════════════════════════════════════════════════
// LEGAL NOTICE FORMATS — ALL TYPES
// Defamation, Eviction, Employment, Property, Medical, Cyber
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: { packet: "notice_formats_v2", total_formats: 10 },

  // ── 1. EVICTION NOTICE ────────────────────────────────────
  eviction_notice: {
    name: "Eviction Notice / Notice to Quit",
    keywords: ["eviction notice","notice to quit","ghar khaali karo","tenant eviction notice","quit notice","kiraya notice"],
    generate: (f={}) => `EVICTION NOTICE / NOTICE TO QUIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY REGISTERED POST A.D. + SPEED POST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.tenant||"__________"} (Tenant)
${f.tenant_address||"__________"}

Under instructions from my client ${f.landlord||"__________"},
Owner of the property at: ${f.property||"__________"},

I hereby call upon you to VACATE AND DELIVER vacant
possession of the above premises within ${f.days||"15 (Fifteen)"}
days of receipt of this notice.

GROUNDS FOR EVICTION:

${f.ground||"(a) Non-payment of rent from __________ to __________ amounting to Rs. __________/-\n(b) Expiry of lease agreement dated __________\n(c) Sub-letting without permission\n(d) Causing damage to property\n(e) Nuisance to neighbours\n(f) Change of use of premises\n(g) Landlord requires property for personal use"}

ARREARS OF RENT:
Rent pending from ${f.rent_from||"__________"} to ${f.rent_to||"__________"}:
@ Rs. ${f.monthly_rent||"__________"}/- per month = Rs. ${f.arrears||"__________"}/-

You are called upon to:
(a) VACATE the premises by ${f.vacate_date||"__________"};
(b) Pay arrears of Rs. ${f.arrears||"__________"}/- immediately;
(c) Hand over keys and all accessories.

Failure to vacate will result in:
(a) Suit for eviction and recovery of arrears;
(b) Claiming damages for illegal use and occupation.

${f.advocate||"__________"}
Advocate for Landlord
Enrolment No.: ${f.enrol||"__________"}
Mobile: ${f.mobile||"__________"}`
  },

  // ── 2. DEFAMATION NOTICE ─────────────────────────────────
  defamation_notice: {
    name: "Legal Notice for Defamation",
    keywords: ["defamation notice","manahaani notice","defamation legal notice","libel notice","slander notice"],
    generate: (f={}) => `LEGAL NOTICE FOR DEFAMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY REGISTERED POST A.D. + EMAIL

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.defendant||"__________"}
${f.defendant_address||"__________"}

Under instructions from my client
${f.client||"__________"} R/o ${f.client_address||"__________"}:

1.  On ${f.incident_date||"__________"}, you ${f.defamatory_act||"made defamatory statements / published defamatory content / circulated false information"} regarding my client in the following manner:

    ${f.defamation_detail||"(Describe specific defamatory statement/post/article)"}

2.  The above statement is FALSE and DEFAMATORY
    as it ${f.harm||"damages the reputation / professional standing / social standing"} of my client.

3.  The statement was circulated to ${f.circulation||"__________"} persons / published on ${f.platform||"social media / newspaper / WhatsApp"} and has caused serious harm.

4.  Your act constitutes:
    (a) Defamation U/S 356 BNS 2023 (criminal);
    (b) Civil wrong entitling damages.

5.  YOU ARE CALLED UPON within ${f.days||"7 (Seven)"} days to:
    (a) PUBLICLY RETRACT and APOLOGIZE unconditionally;
    (b) Remove/delete all defamatory content;
    (c) Pay damages of Rs. ${f.damages||"__________"}/-;
    (d) Undertake not to repeat such acts.

6.  Failure shall result in criminal complaint U/S 356
    BNS 2023 and civil suit for damages.

${f.advocate||"__________"}
Advocate for ${f.client||"__________"}
Enrolment No.: ${f.enrol||"__________"}
Mobile: ${f.mobile||"__________"}`
  },

  // ── 3. CYBER HARASSMENT / ONLINE ABUSE NOTICE ────────────
  cyber_notice: {
    name: "Legal Notice for Cyber Harassment / Online Abuse",
    keywords:["cyber notice","online harassment notice","cyber harassment legal notice","cyber bullying notice","online abuse notice"],
    generate: (f={}) => `LEGAL NOTICE FOR CYBER HARASSMENT / ONLINE ABUSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY REGISTERED POST A.D. + EMAIL

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.harasser||"__________"}
${f.harasser_address||"__________"}
Email: ${f.harasser_email||"__________"}

Under instructions from my client ${f.client||"__________"}:

1.  You have been engaged in the following
    CYBER HARASSMENT / ONLINE ABUSE against my client:

    ${f.harassment||`(a) Sending repeated abusive/threatening messages
    (b) Posting morphed/obscene images of my client
    (c) Creating fake profiles impersonating my client
    (d) Cyberstalking and monitoring online activities
    (e) Sharing private information without consent
    (f) Online defamation and character assassination`}

    Platform/Medium: ${f.platform||"WhatsApp / Instagram / Facebook / Email"}
    Period: ${f.period||"From __________ to __________"}

2.  Your acts constitute offences under:
    (a) Section 67-E IT Act 2000 (privacy violation)
    (b) Section 66-C IT Act 2000 (identity theft)
    (c) Section 351/356 BNS 2023 (threat/defamation)
    (d) Section 78 BNS 2023 (stalking)

3.  Evidence is being preserved including:
    Screenshots, recordings, metadata, server logs.

4.  YOU ARE CALLED UPON within ${f.days||"48 hours"} to:
    (a) IMMEDIATELY STOP all harassment;
    (b) Delete all objectionable content;
    (c) Issue public apology;
    (d) Pay compensation of Rs. ${f.compensation||"__________"}/-

5.  Failure will result in:
    (a) FIR under IT Act and BNS 2023;
    (b) Civil suit for damages.

${f.advocate||"__________"}
Advocate
Enrolment No.: ${f.enrol||"__________"}
Mobile: ${f.mobile||"__________"}`
  },

  // ── 4. MEDICAL NEGLIGENCE NOTICE ─────────────────────────
  medical_negligence_notice: {
    name: "Legal Notice for Medical Negligence",
    keywords: ["medical negligence notice","doctor negligence notice","hospital notice","medical malpractice notice","dawai galat notice"],
    generate: (f={}) => `LEGAL NOTICE FOR MEDICAL NEGLIGENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY REGISTERED POST A.D.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
1. Dr. ${f.doctor||"__________"} (${f.doctor_qualification||"MBBS/MD/MS"})
   ${f.clinic||"__________"} Hospital/Clinic
   ${f.hospital_address||"__________"}

2. ${f.hospital||"__________"} Hospital
   ${f.hospital_address2||"__________"}

Under instructions from my client
${f.patient||"__________"} / Legal Heir of Late ${f.deceased_patient||"__________"}:

1.  TREATMENT DETAILS:
    Patient:           ${f.patient||"__________"}
    Date of Admission: ${f.admission_date||"__________"}
    Diagnosis:         ${f.diagnosis||"__________"}
    Treatment Given:   ${f.treatment||"__________"}
    Date of Incident:  ${f.incident_date||"__________"}

2.  MEDICAL NEGLIGENCE COMMITTED:

    ${f.negligence||`(a) Wrong diagnosis leading to wrong treatment
    (b) Wrong medication / wrong dosage administered
    (c) Failure to obtain informed consent
    (d) Post-operative complications due to negligence
    (e) Failure to take proper care in ICU/post-op
    (f) Delay in treatment causing deterioration`}

3.  INJURY/HARM CAUSED:
    ${f.harm||"(Describe specific harm — death / permanent disability / prolonged suffering / additional medical expenses)"}

4.  LEGAL POSITION:
    As held in Jacob Mathew v State of Punjab AIR 2005
    SC 3180 and Spring Meadows Hospital v Harjol
    Ahluwalia AIR 1998 SC 1801 — doctor/hospital is
    liable for negligence and deficiency in service.

5.  LOSSES:
    Medical expenses: Rs. ${f.medical_exp||"__________"}/-
    Loss of income:   Rs. ${f.income_loss||"__________"}/-
    Compensation:     Rs. ${f.compensation||"__________"}/-
    TOTAL:            Rs. ${f.total||"__________"}/-

6.  You are called upon within ${f.days||"15 (Fifteen)"} days to:
    (a) Pay Rs. ${f.total||"__________"}/- as compensation;
    (b) Furnish complete medical records;
    (c) Provide insurance details.

7.  Failure shall result in complaint before Consumer
    Commission / Medical Council / Criminal complaint.

${f.advocate||"__________"}
Advocate
Enrolment No.: ${f.enrol||"__________"}
Mobile: ${f.mobile||"__________"}`
  },

  // ── 5. DEMAND NOTICE — LOAN RECOVERY ─────────────────────
  loan_demand_notice: {
    name: "Demand Notice for Loan Recovery",
    keywords: ["loan demand notice","loan recovery notice","paisa wapas notice","debt recovery notice","loan wapas maango"],
    generate: (f={}) => `DEMAND NOTICE FOR LOAN RECOVERY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY REGISTERED POST A.D.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.borrower||"__________"} S/o ${f.father||"__________"}
${f.borrower_address||"__________"}

Under instructions from my client
${f.lender||"__________"} R/o ${f.lender_address||"__________"}:

1.  LOAN DETAILS:
    Date of Loan:     ${f.loan_date||"__________"}
    Amount Advanced:  Rs. ${f.principal||"__________"}/-
    Purpose:          ${f.purpose||"__________"}
    Rate of Interest: ${f.interest||"__"}% per annum
    Repayment Terms:  ${f.terms||"On demand / by __________"}
    Security Given:   ${f.security||"Nil / Promissory note / Cheque / Property"}

2.  CURRENT OUTSTANDING:
    Principal:                  Rs. ${f.principal||"__________"}/-
    Interest till date:         Rs. ${f.interest_amount||"__________"}/-
    ━━━━━━━━━━━━━━━━━━━━━━━━━
    TOTAL OUTSTANDING:          Rs. ${f.total||"__________"}/-

3.  DEFAULT: Despite repeated oral requests and
    reminders, you have failed to repay the loan.
    Last payment made: ${f.last_payment||"Nil / Rs. __________ on __________"}

4.  YOU ARE HEREBY CALLED UPON to pay Rs. ${f.total||"__________"}/-
    within ${f.days||"15 (Fifteen)"} days of receipt of this notice.

5.  Failure shall result in:
    (a) Civil suit for recovery;
    (b) Criminal complaint U/S 420 BNS 2023 / S.138 NI Act;
    (c) Attachment of your property.

${f.advocate||"__________"}
Advocate for ${f.lender||"__________"}
Enrolment No.: ${f.enrol||"__________"}`
  },

  // ── 6. NOTICE UNDER SARFAESI ACT ─────────────────────────
  sarfaesi_notice: {
    name: "SARFAESI Notice — S.13(2) SARFAESI Act",
    section: "S.13(2) SARFAESI Act 2002",
    keywords: ["sarfaesi notice","13 2 sarfaesi","bank sarfaesi notice","npa notice","secured creditor notice"],
    generate: (f={}) => `NOTICE UNDER SECTION 13(2) OF THE SECURITISATION
AND RECONSTRUCTION OF FINANCIAL ASSETS AND
ENFORCEMENT OF SECURITY INTEREST (SARFAESI) ACT, 2002
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY REGISTERED POST A.D. + SPEED POST

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Notice No.: ${f.notice_no||"__________"}

TO,
1. ${f.borrower||"__________"} (Borrower)
   ${f.borrower_address||"__________"}

2. ${f.guarantor||"__________"} (Guarantor/Mortgagor)
   ${f.guarantor_address||"__________"}

NOTICE U/S 13(2) SARFAESI ACT 2002

From: ${f.bank||"__________"} Bank, ${f.bank_branch||"__________"} Branch
      (Secured Creditor)

Dear Sir/Madam,

LOAN DETAILS:
Account No.:     ${f.account||"__________"}
Type of Loan:    ${f.loan_type||"__________"}
Sanctioned Amount: Rs. ${f.sanctioned||"__________"}/-
Current Outstanding:
  Principal:   Rs. ${f.principal||"__________"}/-
  Interest:    Rs. ${f.interest||"__________"}/-
  Charges:     Rs. ${f.charges||"__________"}/-
  TOTAL:       Rs. ${f.total||"__________"}/-

NPA Classification: ${f.npa_date||"__________"}

SECURITY CHARGED:
${f.security||"Mortgage of property at __________ / Hypothecation of assets"}

You are hereby CALLED UPON to discharge the total
outstanding of Rs. ${f.total||"__________"}/- within 60 (Sixty)
days from date of receipt of this notice.

FAILING WHICH the Bank as secured creditor shall
be entitled to take possession of and sell the
secured assets under SARFAESI Act without
any further notice.

For ${f.bank||"__________"} Bank,

(${f.bank_officer||"__________"})
Authorized Officer — SARFAESI
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  // ── 7. INSURANCE CLAIM REJECTION NOTICE ──────────────────
  insurance_notice: {
    name: "Legal Notice — Insurance Claim Rejection",
    keywords:["insurance notice","insurance claim rejection notice","insurance company notice","claim reject notice","bima claim notice"],
    generate: (f={}) => `LEGAL NOTICE TO INSURANCE COMPANY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY REGISTERED POST A.D.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE MANAGER / CLAIMS DEPARTMENT
${f.insurance_company||"__________"} Insurance Co. Ltd.
${f.company_address||"__________"}

Under instructions from my client
${f.insured||"__________"} R/o ${f.insured_address||"__________"}:

1.  POLICY DETAILS:
    Policy No.:     ${f.policy_no||"__________"}
    Type of Policy: ${f.policy_type||"Life / Health / Vehicle / Property"}
    Sum Insured:    Rs. ${f.sum_insured||"__________"}/-
    Premium paid:   Up to date

2.  CLAIM DETAILS:
    Date of Incident: ${f.incident_date||"__________"}
    Nature of Claim:  ${f.claim_nature||"Death / Accident / Fire / Theft / Hospitalization"}
    Claim No.:        ${f.claim_no||"__________"}
    Claim Amount:     Rs. ${f.claim_amount||"__________"}/-

3.  WRONGFUL REJECTION:
    You have rejected the claim vide letter dated
    ${f.rejection_date||"__________"} on the ground that
    "${f.rejection_reason||"__________"}"

    The rejection is ILLEGAL, ARBITRARY AND UNJUSTIFIED
    because: ${f.rebuttal||"(State why rejection is wrong)"}

4.  The rejection constitutes DEFICIENCY IN SERVICE
    under Consumer Protection Act 2019.

5.  YOU ARE CALLED UPON within ${f.days||"15 (Fifteen)"} days to:
    (a) Settle the claim of Rs. ${f.claim_amount||"__________"}/-;
    (b) Pay interest from date of claim;
    (c) Failing which consumer complaint will be filed.

${f.advocate||"__________"}
Advocate for ${f.insured||"__________"}
Enrolment No.: ${f.enrol||"__________"}`
  },

  // ── 8. EMPLOYEE HARASSMENT NOTICE ────────────────────────
  workplace_harassment_notice: {
    name: "Legal Notice — Workplace Harassment / POSH",
    keywords: ["workplace harassment notice","posh notice","sexual harassment workplace notice","office harassment notice"],
    generate: (f={}) => `LEGAL NOTICE FOR WORKPLACE SEXUAL HARASSMENT
(UNDER POSH ACT 2013 / VISHAKA GUIDELINES)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONFIDENTIAL — BY REGISTERED POST A.D.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
1. THE INTERNAL COMPLAINTS COMMITTEE (ICC)
   ${f.company||"__________"}
   ${f.company_address||"__________"}

2. ${f.harasser||"__________"} (Accused/Respondent)
   ${f.harasser_designation||"Designation"}, ${f.company||"__________"}

Under instructions from my client
${f.complainant||"__________"} (Employee ID: ${f.emp_id||"__________"}),
${f.designation||"Designation"}, ${f.company||"__________"}:

1.  COMPLAINT:
    The respondent ${f.harasser||"__________"} has been engaging
    in sexual harassment as under:

    ${f.harassment_acts||`(a) Making sexually coloured remarks
    (b) Physical contact and advances
    (c) Demand/request for sexual favours
    (d) Showing pornography
    (e) Any other unwelcome physical/verbal/non-verbal conduct`}

    Incidents occurred on: ${f.incident_dates||"(List dates)"}
    Place: ${f.incident_place||"Office / Zoom / WhatsApp"}

2.  COMPLAINT to ICC on ${f.icc_complaint_date||"__________"} was not
    adequately addressed / ICC failed to take action.

3.  YOU ARE CALLED UPON to:
    (a) Conduct fair inquiry within 60 days per POSH Act;
    (b) Take appropriate action against respondent;
    (c) Ensure safety of complainant;
    (d) Pay compensation as per S.13 POSH Act.

4.  Failure shall result in complaint to Labour
    Department and Women's Commission.

${f.advocate||"__________"}
Advocate
Enrolment No.: ${f.enrol||"__________"}`
  },

  // ── 9. PROPERTY DISPUTE NOTICE ────────────────────────────
  property_dispute_notice: {
    name: "Legal Notice for Property Dispute",
    keywords: ["property dispute notice","property notice","zameen notice","property conflict notice","illegal possession notice"],
    generate: (f={}) => `LEGAL NOTICE FOR PROPERTY DISPUTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY REGISTERED POST A.D.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.opponent||"__________"} S/o ${f.opp_father||"__________"}
${f.opponent_address||"__________"}

Under instructions from my client
${f.client||"__________"} R/o ${f.client_address||"__________"}:

1.  PROPERTY IN DISPUTE:
    ${f.property||"Plot/House/Land bearing Khasra No. __________, Area __________, situated at __________"}

2.  MY CLIENT'S TITLE:
    My client acquired the above property vide:
    ${f.title_basis||"Sale Deed dated __________ registered as Doc. No. __________ / Inheritance / Gift deed"}

3.  DISPUTE / ILLEGAL ACT BY YOU:
    ${f.dispute||`(a) You are illegally in possession of the property
    (b) You have encroached upon the property
    (c) You are creating obstruction in my client's use
    (d) You are claiming false title / fabricating documents
    (e) You are trying to alienate the property illegally`}

4.  YOU ARE CALLED UPON within ${f.days||"15 (Fifteen)"} days to:
    (a) ${f.demand||"Vacate the property / Remove encroachment / Stop obstruction / Desist from claiming title"};
    (b) Execute all documents as required;
    (c) Pay damages of Rs. ${f.damages||"__________"}/-.

5.  Failure shall result in:
    (a) Civil suit for possession/injunction;
    (b) Criminal complaint U/S 447/329 BNS 2023.

${f.advocate||"__________"}
Advocate for ${f.client||"__________"}
Enrolment No.: ${f.enrol||"__________"}`
  },

  // ── 10. NOTICE FOR BREACH OF CONTRACT ────────────────────
  breach_contract_notice: {
    name: "Legal Notice for Breach of Contract",
    keywords:["breach contract notice","contract breach notice","agreement violation notice","contract notice draft","anubandh torna notice"],
    generate: (f={}) => `LEGAL NOTICE FOR BREACH OF CONTRACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY REGISTERED POST A.D.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.defaulter||"__________"}
${f.defaulter_address||"__________"}

Under instructions from my client
${f.client||"__________"} R/o ${f.client_address||"__________"}:

1.  CONTRACT DETAILS:
    Agreement Date:  ${f.agreement_date||"__________"}
    Contract For:    ${f.contract_subject||"__________"}
    Contract Value:  Rs. ${f.contract_value||"__________"}/-

2.  YOUR OBLIGATIONS UNDER CONTRACT:
    ${f.obligations||"(List specific obligations that were agreed)"}

3.  BREACH COMMITTED:
    You have committed the following breach(es):
    ${f.breach||"(a) Failed to deliver goods by agreed date of __________\n    (b) Delivered defective goods/services\n    (c) Failed to make payment of Rs. __________\n    (d) Violated confidentiality clause\n    (e) Other: __________"}

4.  LOSS SUFFERED:
    My client has suffered the following losses due
    to your breach:
    Direct losses:        Rs. ${f.direct_loss||"__________"}/-
    Consequential losses: Rs. ${f.consequential_loss||"__________"}/-
    TOTAL:                Rs. ${f.total_loss||"__________"}/-

5.  As per S.73 Indian Contract Act 1872, you are
    liable to pay compensation for the above losses.

6.  YOU ARE CALLED UPON within ${f.days||"15 (Fifteen)"} days to:
    (a) ${f.remedy||"Perform your contractual obligations / Pay Rs. __________ / Replace defective goods"};
    (b) Pay compensation of Rs. ${f.total_loss||"__________"}/-.

7.  Failure shall result in civil suit and
    criminal complaint as applicable.

${f.advocate||"__________"}
Advocate for ${f.client||"__________"}
Enrolment No.: ${f.enrol||"__________"}`
  },

};
