// ════════════════════════════════════════════════════════════
// NOTICE FORMATS PACKET
// S.138 NI Act, Consumer, RTI, Rent/Eviction, Employment
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: {
    packet: "notice_formats",
    total_formats: 8,
    covers: ["S.138 NI Act Notice","S.138 Complaint","Consumer Notice","RTI Application","Rent Eviction Notice","Employment Termination","Show Cause Notice","Demand Notice"]
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 1 — S.138 NI ACT — CHEQUE BOUNCE NOTICE
  // ═══════════════════════════════════════════════════════════
  cheque_bounce_notice: {
    name: "Legal Notice U/S 138 NI Act — Cheque Dishonour",
    section: "S.138 / S.142 Negotiable Instruments Act 1881",
    court: "Sent before filing complaint",
    attach_with: ["cheque_bounce_complaint","dishonour_memo"],
    keywords: ["138 ni act notice","cheque bounce notice","cheque dishonour notice","legal notice cheque","138 notice"],
    generate: (f={}) => `LEGAL NOTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SENT BY: REGISTERED POST A.D. + SPEED POST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.drawer||"__________"} (DRAWER)
S/o ${f.drawer_father||"__________"}
${f.drawer_address||"__________"}

WITHOUT PREJUDICE

SUBJECT: Legal Notice U/S 138 r/w 142 of the Negotiable
Instruments Act, 1881 for Dishonour of Cheque No.
${f.cheque_no||"__________"} dated ${f.cheque_date||"__________"} for
Rs. ${f.amount||"__________"}/- (${f.amount_words||"__________"})
drawn on ${f.bank||"__________"} Bank, ${f.branch||"__________"} Branch.

Under instructions from and on behalf of my client:
${f.client||"__________"} (PAYEE/HOLDER)
S/o ${f.client_father||"__________"}
R/o: ${f.client_address||"__________"}

I hereby serve upon you this statutory legal notice as under:

1.  BACKGROUND / DEBT:
    That my client and you had a transaction on
    ${f.transaction_date||"__________"} whereby you had taken
    ${f.loan_or_transaction||"a loan / advance / amount"} of Rs. ${f.amount||"__________"}/-
    from my client for the purpose of ${f.purpose||"__________"}.
    / You owed Rs. ${f.amount||"__________"}/- to my client on
    account of ${f.reason||"__________"}.

2.  CHEQUE ISSUED:
    In discharge of your aforesaid legally enforceable
    liability/debt, you issued the following cheque:

    ┌─────────────────────────────────────────────────┐
    │ Cheque No.:    ${f.cheque_no||"__________"}             │
    │ Date on Cheque:${f.cheque_date||"__________"}           │
    │ Amount:        Rs. ${f.amount||"__________"}/-          │
    │ Bank:          ${f.bank||"__________"}                  │
    │ Branch:        ${f.branch||"__________"}                │
    │ Account No.:   ${f.account_no||"__________"}            │
    │ IFSC Code:     ${f.ifsc||"__________"}                  │
    └─────────────────────────────────────────────────┘

3.  PRESENTMENT AND DISHONOUR:
    The aforesaid cheque was presented for encashment
    on ${f.present_date||"__________"} at ${f.presenting_bank||"__________"} Bank.
    The cheque was returned / dishonoured on
    ${f.dishonour_date||"__________"} with the following remark
    by your bank:

    "${f.dishonour_reason||"Insufficient Funds / Payment Stopped / Account Closed"}"

    The dishonour memo is attached herewith.

4.  LEGAL POSITION:
    That the aforesaid dishonour of cheque constitutes
    an offence punishable under Section 138 of the
    Negotiable Instruments Act, 1881.

    The Hon'ble Supreme Court has held that the
    presumption under Section 139 NI Act is in favour
    of the holder that the cheque was issued for
    discharge of a legally enforceable liability.

5.  DEMAND:
    YOU ARE HEREBY CALLED UPON AND DEMANDED to pay
    the sum of Rs. ${f.amount||"__________"}/- (Rupees
    ${f.amount_words||"__________"} Only) together with interest
    @ ${f.interest||"18"}% per annum from the date of dishonour,
    within FIFTEEN (15) DAYS from the date of receipt
    of this notice.

6.  CONSEQUENCE OF NON-PAYMENT:
    Please take notice that if you fail to make the
    payment within the aforesaid period of 15 days,
    my client shall be constrained to file a criminal
    complaint against you under Section 138/142 of
    the Negotiable Instruments Act, 1881 before the
    competent court having jurisdiction, entirely at
    your risk, cost and consequence without any
    further notice.

    The jurisdiction for filing such complaint shall
    be at the place where the cheque was dishonoured
    i.e. ${f.jurisdiction||"__________"} as per the judgment in
    Dashrath Rupsingh Rathod v. State of Maharashtra
    (2014) 9 SCC 129.

${f.advocate||"__________"}
Advocate
Enrolment No.: ${f.enrol||"__________"}
Address: ${f.advocate_address||"__________"}
Mobile: ${f.advocate_mobile||"__________"}
Email: ${f.advocate_email||"__________"}

COPY TO: My client for record and necessary action.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROOF OF DISPATCH:
Regd. Post No.: _____________ Date: _____________
Speed Post No.: _____________ Date: _____________
Delivered on: _____________ Received by: _____________
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 2 — S.138 COMPLAINT BEFORE MAGISTRATE
  // ═══════════════════════════════════════════════════════════
  cheque_bounce_complaint: {
    name: "Complaint U/S 138 NI Act — Before Magistrate",
    section: "S.138 / S.142 NI Act 1881",
    court: "Judicial Magistrate First Class",
    attach_with: ["cheque_bounce_affidavit","cheque_copy","dishonour_memo","notice_copy","postal_receipt"],
    keywords: ["138 complaint","cheque bounce complaint","ni act complaint","cheque case file karna","138 ni act complaint"],
    generate: (f={}) => `IN THE COURT OF THE JUDICIAL MAGISTRATE FIRST CLASS /
CHIEF JUDICIAL MAGISTRATE
${f.district||"__________"}, ${f.state||"__________"}

COMPLAINT CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.complainant||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"}
R/o: ${f.address||"__________"}
                                        ...COMPLAINANT
VERSUS

${f.accused||"__________"} S/o ${f.accused_father||"__________"}
R/o: ${f.accused_address||"__________"}
                                        ...ACCUSED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLAINT U/S 138 r/w 142 OF THE NEGOTIABLE INSTRUMENTS
ACT, 1881 FOR DISHONOUR OF CHEQUE NO. ${f.cheque_no||"__________"}
DATED ${f.cheque_date||"__________"} FOR RS. ${f.amount||"__________"}/-
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.  PARTIES:
    The complainant is the payee/holder of the cheque
    in question. The accused is the drawer of the cheque.

2.  LEGALLY ENFORCEABLE DEBT:
    That the accused had taken ${f.loan_detail||"a loan/advance"} of
    Rs. ${f.amount||"__________"}/- from the complainant on
    ${f.transaction_date||"__________"} for ${f.purpose||"__________"}.
    The accused was legally liable to repay the same.

3.  CHEQUE DETAILS:
    In discharge of the aforesaid liability, the accused
    issued the following cheque to the complainant:

    Cheque No.:     ${f.cheque_no||"__________"}
    Date:           ${f.cheque_date||"__________"}
    Amount:         Rs. ${f.amount||"__________"}/-
    Bank:           ${f.bank||"__________"} Bank
    Branch:         ${f.branch||"__________"}

4.  PRESENTMENT AND DISHONOUR:
    The cheque was presented on ${f.present_date||"__________"}.
    The same was returned dishonoured on ${f.dishonour_date||"__________"}
    with remark: "${f.reason||"Insufficient Funds"}".
    (Dishonour Memo = Annexure C-1)

5.  STATUTORY NOTICE:
    A statutory notice U/S 138 NI Act was sent to the
    accused on ${f.notice_date||"__________"} by Registered Post AD
    demanding payment within 15 days.
    (Notice = Annexure C-2, Postal Receipt = Annexure C-3)

6.  NON-PAYMENT WITHIN 15 DAYS:
    The accused received the notice on ${f.notice_received||"__________"}.
    Despite the expiry of 15 days from receipt of notice,
    the accused has failed and neglected to make payment
    of Rs. ${f.amount||"__________"}/-.

7.  CAUSE OF ACTION AND JURISDICTION:
    This Court has jurisdiction as the cheque was
    dishonoured at ${f.bank||"__________"} Bank, ${f.branch||"__________"}
    which is within this Court's jurisdiction.
    [Dashrath Rupsingh Rathod v. State of Maharashtra
    (2014) 9 SCC 129]

    The complaint is filed within 30 days of the cause
    of action arising as required by S.142 NI Act.

8.  OFFENCE:
    The aforesaid acts of the accused constitute an
    offence punishable U/S 138 NI Act — imprisonment
    up to 2 years OR fine up to twice the cheque amount
    OR BOTH.

DOCUMENTS / ANNEXURES:
Annexure C-1: Original Dishonoured Cheque
Annexure C-2: Bank Memo of Dishonour
Annexure C-3: Copy of Legal Notice
Annexure C-4: Postal Receipt (Regd. Post)
Annexure C-5: Postal AD Card / Delivery Proof

                        *** PRAYER ***

It is most respectfully prayed that this Court may:

(a) Take cognizance of offence U/S 138 NI Act;
(b) Issue process/summons against the accused;
(c) Try, convict and sentence the accused;
(d) Direct accused to pay Rs. ${f.amount||"__________"}/- with
    interest as compensation U/S 357 BNSS / S.143-A NI Act;
(e) Award costs.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.advocate||"__________"})                   (${f.complainant||"__________"})
Advocate for Complainant                        Complainant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I, ${f.complainant||"__________"}, verify that the contents of the
above complaint are true and correct to the best of
my knowledge and belief.

Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.complainant||"__________"})
                                          COMPLAINANT`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 3 — CONSUMER FORUM COMPLAINT
  // ═══════════════════════════════════════════════════════════
  consumer_complaint: {
    name: "Consumer Complaint — District Consumer Commission",
    section: "S.35 Consumer Protection Act 2019",
    court: "District Consumer Disputes Redressal Commission",
    attach_with: ["consumer_affidavit","purchase_documents","notice_copy"],
    keywords: ["consumer complaint","consumer forum","consumer court","defective product","deficiency service","35 consumer act","consumer case"],
    generate: (f={}) => `IN THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION
${(f.district||"__________").toUpperCase()}, ${f.state||"__________"}

CONSUMER COMPLAINT NO. _____ OF ${f.year||new Date().getFullYear()}

${f.complainant||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
Mobile: ${f.mobile||"__________"}
                                        ...COMPLAINANT
VERSUS

1. ${f.op1||"__________"} (Manufacturer/Seller/Service Provider)
   ${f.op1_address||"__________"}
   Through its ${f.op1_rep||"Proprietor/Manager/Director"}

2. ${f.op2||"__________"} (if any)
   ${f.op2_address||"__________"}
                                        ...OPPOSITE PARTIES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONSUMER COMPLAINT U/S 35 CONSUMER PROTECTION ACT, 2019
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.  CONSUMER STATUS:
    The complainant is a "consumer" as defined under
    Section 2(7) of the Consumer Protection Act, 2019
    having purchased ${f.product_service||"the goods/availed the services"}
    from the OP for personal use and not for resale
    or commercial purpose.

2.  PURCHASE / SERVICE DETAILS:
    ┌────────────────────────────────────────────────┐
    │ Item/Service:  ${f.product||"__________"}               │
    │ Purchase Date: ${f.purchase_date||"__________"}         │
    │ Amount Paid:   Rs. ${f.amount||"__________"}/-          │
    │ Bill/Invoice:  ${f.bill_no||"__________"}               │
    │ Warranty/Guarantee: ${f.warranty||"__________"}         │
    └────────────────────────────────────────────────┘

3.  DEFECT IN GOODS / DEFICIENCY IN SERVICE:
    ${f.defect||`(a) The product/service was found defective/
        deficient in the following manner:
    (b) The OP was informed of the defect on __________.
    (c) Despite repeated complaints, the OP failed to
        repair/replace/refund.`}

4.  CHRONOLOGY OF EVENTS:
    ${f.facts||`Date: __________ — Purchased the product/availed service
    Date: __________ — Defect discovered / Service found deficient
    Date: __________ — Complaint to OP
    Date: __________ — OP's response (or no response)
    Date: __________ — Legal notice sent to OP (Annexure C-3)
    Date: __________ — OP failed to comply`}

5.  UNFAIR TRADE PRACTICE / DEFICIENCY:
    The aforesaid acts of the OPs constitute:
    (a) Deficiency in service U/S 2(11) CPA 2019
    (b) Defect in goods U/S 2(10) CPA 2019
    (c) Unfair trade practice U/S 2(47) CPA 2019

6.  JURISDICTION AND VALUATION:
    This Commission has jurisdiction as the amount
    involved is Rs. ${f.amount||"__________"}/- which is within
    the pecuniary jurisdiction (below Rs. 1 Crore).
    The cause of action arose within this Commission's
    territorial jurisdiction.

7.  LIMITATION:
    This complaint is within the limitation of 2 years
    from the date of cause of action.

RELIEF CLAIMED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
(a) Refund/Replace:    Rs. ${f.refund||"__________"}/-
(b) Compensation:      Rs. ${f.compensation||"__________"}/-
    (Mental agony, harassment and inconvenience)
(c) Punitive Damages:  Rs. ${f.punitive||"__________"}/-
(d) Litigation Costs:  Rs. ${f.costs||"__________"}/-
(e) Interest @ ${f.interest||"12"}% p.a. from date of purchase
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL CLAIMED: Rs. ${f.total||"__________"}/-

DOCUMENTS / ANNEXURES:
C-1: Purchase Invoice/Bill
C-2: Warranty/Guarantee Card
C-3: Legal Notice and Postal Receipt
C-4: Reply of OP (if any)
C-5: Photographs/Videos of defect
C-6: Medical reports (if injury caused)

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Place: ${f.district||"__________"}

(${f.advocate||"__________"})                   (${f.complainant||"__________"})
Advocate for Complainant                        Complainant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I, ${f.complainant||"__________"}, verify that the above contents
are true and correct to the best of my knowledge.

Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.complainant||"__________"})
                                          COMPLAINANT`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 4 — RTI APPLICATION
  // ═══════════════════════════════════════════════════════════
  rti_application: {
    name: "RTI Application U/S 6 RTI Act 2005",
    section: "S.6 Right to Information Act 2005",
    court: "Public Authority (Government Department)",
    attach_with: ["rti_fee_receipt","rti_appeal"],
    keywords: ["rti application","rti","right to information","suchna adhikar","6 rti","rti draft","rti likhna"],
    generate: (f={}) => `APPLICATION UNDER SECTION 6(1) OF THE
RIGHT TO INFORMATION ACT, 2005

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE CENTRAL / STATE PUBLIC INFORMATION OFFICER (CPIO/SPIO)
${f.department||"__________"} (Department Name)
${f.dept_address||"__________"}
${f.state||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

APPLICANT DETAILS:
Name:     ${f.name||"__________"}
Address:  ${f.address||"__________"}
Mobile:   ${f.mobile||"__________"}
Email:    ${f.email||"__________"} (optional)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMATION SOUGHT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I request the following information under the RTI Act:

1.  ${f.query1||"__________"}

2.  ${f.query2||"__________"}

3.  ${f.query3||"__________"}

4.  ${f.query4||"__________"}

5.  Please provide certified copies of the following
    documents: ${f.documents||"__________"}

PERIOD TO WHICH INFORMATION RELATES:
${f.period||"From __________ to __________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

APPLICATION FEE:
I enclose Rs. 10/- (Rupees Ten Only) as prescribed
application fee by way of:
${f.fee_mode||"☐ Indian Postal Order No.: __________\n☐ Demand Draft No.: __________\n☐ Cash (acknowledgement receipt enclosed)\n☐ Court Fee Stamp"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NOTE: I am a citizen of India and am entitled to seek
this information under the RTI Act 2005. As per Section 7,
the information must be provided within 30 days of receipt
of this application (48 hours if life/liberty is involved).

If the information is held by another public authority,
please transfer this application as per Section 6(3).

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.name||"__________"})
                                    Applicant — Signature

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACKNOWLEDGEMENT (To be filled by PIO)
Application No.: _____________ Date: _____________
Received by: _____________ Designation: _____________
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 5 — RTI FIRST APPEAL
  // ═══════════════════════════════════════════════════════════
  rti_appeal: {
    name: "RTI First Appeal U/S 19 RTI Act",
    section: "S.19(1) RTI Act 2005",
    court: "First Appellate Authority",
    keywords: ["rti appeal","rti first appeal","19 rti","rti appeal draft"],
    generate: (f={}) => `FIRST APPEAL UNDER SECTION 19(1) OF THE
RIGHT TO INFORMATION ACT, 2005

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE FIRST APPELLATE AUTHORITY
${f.faa_designation||"__________"} (Designation of FAA)
${f.department||"__________"}
${f.dept_address||"__________"}

SUBJECT: First Appeal against the Order/Non-reply of
CPIO, ${f.department||"__________"} in RTI Application
No. ${f.rti_no||"__________"} dated ${f.rti_date||"__________"}.

APPELLANT: ${f.name||"__________"}, R/o: ${f.address||"__________"}

FACTS:
1.  I filed an RTI Application bearing No. ${f.rti_no||"__________"}
    dated ${f.rti_date||"__________"} seeking information about
    ${f.information_sought||"__________"}.

2.  The CPIO ${f.cpio_response||"has not replied within 30 days / gave incomplete/incorrect reply / denied information on grounds of __________"}.

3.  The reason for filing this appeal:
    ${f.appeal_reason||"(a) No reply received within statutory period\n    (b) Information provided is incomplete/incorrect\n    (c) Information wrongly denied"}

GROUNDS OF APPEAL:
${f.grounds||`(i) The CPIO has failed to provide information within
    the statutory period of 30 days.
(ii) The information sought is not covered under any
    exemption under Section 8 of the RTI Act.
(iii) The denial of information is arbitrary and illegal.`}

PRAYER:
(a) Direct the CPIO to provide complete information;
(b) Impose penalty on CPIO for delay/refusal;
(c) Award compensation.

Enclosures:
1. Copy of RTI Application
2. Postal proof of delivery
3. Reply from CPIO (if any)

                                    (${f.name||"__________"})
                                          Appellant`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 6 — RENT / EVICTION NOTICE
  // ═══════════════════════════════════════════════════════════
  eviction_notice: {
    name: "Eviction / Quit Notice to Tenant",
    section: "Transfer of Property Act / State Rent Control Act",
    court: "Sent before filing eviction suit",
    attach_with: ["eviction_suit","rent_agreement_copy"],
    keywords: ["eviction notice","rent notice","quit notice","tenant notice","makan khali karo","eviction draft","rent eviction"],
    generate: (f={}) => `NOTICE TO QUIT / EVICTION NOTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SENT BY: REGISTERED POST A.D. + SPEED POST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.tenant||"__________"} (TENANT)
S/o ${f.tenant_father||"__________"}
Currently residing at: ${f.property_address||"__________"}

Under instructions from my client:
${f.landlord||"__________"} (LANDLORD/OWNER)
R/o: ${f.landlord_address||"__________"}

SUBJECT: Notice to Quit and Vacate the Premises at
${f.property_address||"__________"}

1.  TENANCY: My client is the owner of the premises
    at ${f.property_address||"__________"} (hereinafter "the said
    premises"). You have been in occupation of the
    said premises as a tenant since ${f.tenancy_since||"__________"}
    on a monthly rent of Rs. ${f.rent||"__________"}/- p.m.
    ${f.agreement_detail||"as per rent agreement dated __________"}.

2.  GROUND(S) FOR EVICTION:

    ${f.eviction_ground||`☐ (A) NON-PAYMENT OF RENT:
    You have not paid rent for the months of
    __________ to __________ (__________ months)
    amounting to Rs. __________/- which is due
    and payable.

    ☐ (B) EXPIRY OF TENANCY:
    The tenancy period of __________ expired on
    __________ and you have not vacated.

    ☐ (C) PERSONAL USE / BONA FIDE REQUIREMENT:
    My client bona fide requires the said premises
    for personal use / use of family members.

    ☐ (D) SUBLETTING WITHOUT PERMISSION:
    You have sublet the premises to __________
    without consent.

    ☐ (E) DAMAGE TO PROPERTY:
    You have caused material damage to the premises.`}

3.  DEMAND: You are hereby called upon to:
    (a) Pay all arrears of rent of Rs. ${f.arrears||"__________"}/-
        immediately; AND/OR
    (b) VACATE and DELIVER PEACEFUL POSSESSION of
        the said premises within ${f.notice_period||"ONE MONTH"} from
        receipt of this notice.

4.  LEGAL ACTION: Failure to comply will result in
    eviction proceedings before the competent court
    at your risk and cost.

${f.advocate||"__________"}
Advocate
Enrolment No.: ${f.enrol||"__________"}
Address: ${f.advocate_address||"__________"}
Mobile: ${f.mobile||"__________"}`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 7 — SHOW CAUSE NOTICE (Employment)
  // ═══════════════════════════════════════════════════════════
  show_cause_notice: {
    name: "Show Cause Notice — Employment",
    keywords: ["show cause notice","scn","show cause","karna pda notice","employment notice","job show cause"],
    generate: (f={}) => `SHOW CAUSE NOTICE

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.employee||"__________"}
Designation: ${f.designation||"__________"}
Department: ${f.department||"__________"}
Employee No.: ${f.emp_no||"__________"}

SUBJECT: Show Cause Notice for ${f.misconduct||"__________"}

This is to inform you that the following acts/omissions
have come to the notice of the management:

CHARGES:
1.  ${f.charge1||"__________"}
2.  ${f.charge2||"__________"}
3.  ${f.charge3||"__________"}

The aforesaid acts/omissions constitute misconduct under
the Standing Orders / Service Rules / Employment Contract.

You are hereby called upon to SHOW CAUSE within
${f.days||"7 (Seven)"} days from receipt of this notice as to why
disciplinary action should not be initiated against you.

Please submit your written explanation to the undersigned
on or before ${f.reply_date||"__________"}.

Failure to reply within the stipulated time shall be
treated as admission of charges and disciplinary
proceedings will be initiated ex-parte.

For ${f.company||"__________"}

(${f.signatory||"__________"})
${f.signatory_designation||"HR Manager / Managing Director"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

ACKNOWLEDGEMENT:
Received by: _____________ Date: _____________ Sign: _____`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 8 — DEMAND NOTICE (Money Recovery)
  // ═══════════════════════════════════════════════════════════
  demand_notice: {
    name: "Demand Notice — Money Recovery",
    keywords: ["demand notice","money recovery notice","paisa wapas","recovery notice","demand notice draft"],
    generate: (f={}) => `DEMAND NOTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SENT BY: REGISTERED POST A.D.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.respondent||"__________"}
${f.respondent_address||"__________"}

Under instructions from my client ${f.client||"__________"},
R/o: ${f.client_address||"__________"}:

1.  That on ${f.transaction_date||"__________"}, you had
    ${f.transaction_detail||"borrowed / received / taken advance of"} Rs.
    ${f.amount||"__________"}/- from my client for ${f.purpose||"__________"}.

2.  That despite repeated oral/written requests, you have
    failed to repay/return the said amount.

3.  That as per the records, you owe Rs. ${f.amount||"__________"}/-
    (principal) + interest @ ${f.interest||"18"}% = Rs. ${f.total||"__________"}/-
    in total as on date.

4.  YOU ARE HEREBY DEMANDED to pay Rs. ${f.total||"__________"}/-
    within ${f.days||"15"} days of receipt of this notice.

5.  Failing which my client shall file appropriate Civil
    and/or Criminal proceedings without further notice.

${f.advocate||"__________"}
Advocate, Enrol. No.: ${f.enrol||"__________"}
Mobile: ${f.mobile||"__________"}`
  },

};
