// ════════════════════════════════════════════════════════════
// NI ACT + RECOVERY FORMATS PACKET
// Cheque Bounce Notice, Complaint, Reply + Money Recovery
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: { packet: "ni_act_recovery_formats", total_formats: 7 },

  // ── 1. CHEQUE BOUNCE LEGAL NOTICE ────────────────────────
  cheque_bounce_notice: {
    name: "Legal Notice — Cheque Bounce S.138 NI Act",
    section: "S.138/142 Negotiable Instruments Act 1881",
    court: "Notice (Pre-litigation)",
    attach_with: ["dishonour_memo_copy"],
    keywords: ["cheque bounce notice","138 ni act notice","legal notice 138","cheque dishonour notice","cheque wapas notice"],
    generate: (f={}) => `LEGAL NOTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SENT VIA: REGISTERED POST A.D. + SPEED POST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.drawer||"__________"}
S/o ${f.drawer_father||"__________"}
${f.drawer_address||"__________"}

SUBJECT: Legal Notice U/S 138 read with S.142 of the
Negotiable Instruments Act, 1881 for dishonour of
Cheque No. ${f.cheque_no||"__________"} dated ${f.cheque_date||"__________"}
for Rs. ${f.amount||"__________"}/- drawn on ${f.bank||"__________"}.

WITHOUT PREJUDICE

Under instructions from and on behalf of my client
${f.payee||"__________"} S/o ${f.payee_father||"__________"},
R/o: ${f.payee_address||"__________"},

I hereby serve you with this statutory notice as under:

1.   My client and you had entered into a financial
     transaction / agreement dated ${f.transaction_date||"__________"}
     whereby you are legally liable to pay a sum of
     Rs. ${f.amount||"__________"}/- (Rupees ${f.amount_words||"__________"}
     Only) to my client towards ${f.reason||"repayment of loan / goods supplied / services rendered / other lawful debt"}.

2.   In discharge of the above-said legal liability /
     debt, you issued the following cheque:

     ┌──────────────────────────────────────────────┐
     │ Cheque No.    : ${f.cheque_no||"__________"}           │
     │ Date on Cheque: ${f.cheque_date||"__________"}         │
     │ Amount        : Rs. ${f.amount||"__________"}/-        │
     │ Bank          : ${f.bank||"__________"}                │
     │ Branch        : ${f.branch||"__________"}              │
     │ Account No.   : ${f.account||"__________"}            │
     │ IFSC Code     : ${f.ifsc||"__________"}               │
     └──────────────────────────────────────────────┘

3.   My client presented the aforesaid cheque for
     encashment on ${f.presentation_date||"__________"} through
     ${f.payee_bank||"__________"} Bank, ${f.payee_branch||"__________"} Branch.

4.   The said cheque was returned DISHONOURED by your
     Bank on ${f.dishonour_date||"__________"} vide Cheque Return
     Memo dated ${f.return_memo_date||"__________"} with remarks
     "${f.return_reason||"Insufficient Funds / Exceeds Arrangement / Payment Stopped"}".

     A copy of the Cheque Return Memo is enclosed.

5.   By dishonour of the aforesaid cheque, you have
     committed an offence punishable U/S 138 of the
     Negotiable Instruments Act, 1881.

6.   YOU ARE HEREBY CALLED UPON AND DEMANDED to pay
     my client the following amounts within FIFTEEN
     (15) DAYS from the receipt of this notice:

     ┌──────────────────────────────────────────────┐
     │ Cheque Amount      : Rs. ${f.amount||"__________"}/-  │
     │ Bank Charges       : Rs. ${f.bank_charges||"500"}/-   │
     │ Interest @ ${f.interest||"18"}% p.a.: Rs. ${f.interest_amount||"__________"}/-│
     │ Legal Notice Charges: Rs. ${f.notice_charges||"5000"}/-│
     │ TOTAL DEMAND       : Rs. ${f.total||"__________"}/-   │
     └──────────────────────────────────────────────┘

7.   Please note that if you fail to make the payment
     within the stipulated period of 15 days from
     receipt of this notice, my client shall be left
     with no option but to file a criminal complaint
     against you before the competent court of law
     under Section 138 of the Negotiable Instruments
     Act, 1881, ENTIRELY AT YOUR RISK, COST AND
     CONSEQUENCE, without any further notice.

${f.advocate||"__________"}
Advocate
Enrolment No.: ${f.enrol||"__________"}
Address: ${f.advocate_address||"__________"}
Mobile: ${f.advocate_mobile||"__________"}
Email: ${f.advocate_email||"__________"}

Enclosure: Copy of Cheque Return Memo
COPY TO: Client (for record)`
  },

  // ── 2. CHEQUE BOUNCE COMPLAINT ────────────────────────────
  cheque_bounce_complaint: {
    name: "Cheque Bounce Complaint — S.138 NI Act",
    section: "S.138/142 NI Act 1881",
    court: "Judicial Magistrate First Class",
    attach_with: ["cheque_copy","dishonour_memo","notice_copy","postal_receipt","reply_if_any"],
    keywords: ["cheque bounce complaint","138 case","cheque complaint","138 ni act complaint","cheque bounce case file"],
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
Age: ${f.accused_age||"__"} Yrs
R/o: ${f.accused_address||"__________"}
                                        ...ACCUSED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLAINT U/S 138 READ WITH S.141 AND 142
NEGOTIABLE INSTRUMENTS ACT, 1881
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.   That the complainant and the accused were known
     to each other and the accused is legally liable
     to pay Rs. ${f.amount||"__________"}/- to the complainant
     towards ${f.reason||"__________"}.

2.   That the accused in discharge of the legal
     liability issued Cheque No. ${f.cheque_no||"__________"}
     dated ${f.cheque_date||"__________"} for Rs. ${f.amount||"__________"}/-
     drawn on ${f.bank||"__________"}, ${f.branch||"__________"} Branch.

3.   That the complainant presented the cheque on
     ${f.presentation_date||"__________"} through ${f.payee_bank||"__________"}
     Bank which was returned dishonoured on
     ${f.dishonour_date||"__________"} with memo stating
     "${f.return_reason||"Insufficient Funds"}".
     (Annexure A: Cheque + Return Memo)

4.   That the complainant issued a Legal Notice dated
     ${f.notice_date||"__________"} sent via Registered Post
     demanding payment within 15 days.
     (Annexure B: Notice + Postal Receipt)

5.   That despite receipt of notice, the accused has
     failed to pay the amount within 15 days.
     ${f.reply||"No reply was received. / Reply dated __________ was received but payment not made."}

6.   That the cause of action arose on ${f.coa_date||"__________"}
     i.e. on expiry of 15 days from notice receipt.
     This complaint is filed within 30 days thereof.

7.   That the accused has committed an offence
     punishable U/S 138 NI Act 1881.

8.   JURISDICTION: The accused's bank is situated at
     ${f.bank_location||"__________"} which is within the jurisdiction
     of this Hon'ble Court. [Dashrath Rupsingh Rathod
     v. State of Maharashtra AIR 2014 SC 3519]

DOCUMENTS ANNEXED:
(A) Cheque No. ${f.cheque_no||"__________"} (Original)
(B) Cheque Return Memo dated ${f.dishonour_date||"__________"}
(C) Legal Notice dated ${f.notice_date||"__________"}
(D) Postal Receipt / Tracking Report
(E) ${f.doc_e||"Reply to Notice / Delivery Confirmation"}

PRAYER:
(a) Take cognizance of offence U/S 138 NI Act;
(b) Issue summons/process against the accused;
(c) Try and punish the accused;
(d) Direct accused to pay Rs. ${f.amount||"__________"}/- with
    interest as compensation U/S 143-A NI Act.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.advocate||"__________"})                   (${f.complainant||"__________"})
Advocate for Complainant                        Complainant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.complainant||"__________"}, verify that the contents of
the above complaint are true and correct.

Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.
                              (${f.complainant||"__________"}) — COMPLAINANT`
  },

  // ── 3. REPLY TO CHEQUE BOUNCE NOTICE ─────────────────────
  cheque_bounce_reply: {
    name: "Reply to Cheque Bounce Legal Notice",
    keywords: ["reply cheque notice","138 notice reply","cheque bounce notice ka jawab","cheque notice reply"],
    generate: (f={}) => `REPLY TO LEGAL NOTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VIA: REGISTERED POST A.D. + SPEED POST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.notice_sender_advocate||"__________"}
Advocate for ${f.noticee_name||"__________"}
${f.advocate_address||"__________"}

SUBJECT: Reply to your Legal Notice dated ${f.notice_date||"__________"}
on behalf of ${f.client||"__________"}

Under instructions from my client
${f.client||"__________"} S/o ${f.client_father||"__________"},
R/o: ${f.client_address||"__________"},

I hereby send this reply to your Legal Notice as under:

1.   My client has received the aforesaid notice and
     the same has been perused carefully.

2.   The allegations in the notice are emphatically
     DENIED being false, incorrect and misleading.

3.   SPECIFIC REPLIES:

     (i)  ${f.reply1||"It is denied that my client is liable to pay any amount to your client. The truth is that __________"}

     (ii) ${f.reply2||"The cheque in question was issued as security / under undue influence / by mistake and not towards any debt or liability."}

     (iii)${f.reply3||"Your client is not entitled to maintain the complaint as the cheque was not issued towards discharge of a legally enforceable debt."}

     (iv) ${f.reply4||"(Any other specific reply)"}

4.   WITHOUT PREJUDICE, my client is willing to
     pay Rs. ${f.settlement||"__________"}/- in full and final
     settlement of all claims. This offer is open
     for acceptance within 7 days.

5.   Your client is hereby warned against filing a
     false and frivolous complaint.

${f.advocate||"__________"}
Advocate for ${f.client||"__________"}
Enrolment No.: ${f.enrol||"__________"}
Mobile: ${f.mobile||"__________"}`
  },

  // ── 4. MONEY RECOVERY SUIT ────────────────────────────────
  money_recovery_suit: {
    name: "Money Recovery Suit (Summary Suit / Regular Suit)",
    section: "Order XXXVII CPC (Summary Suit) / Order VII CPC",
    court: "Civil Court",
    attach_with: ["plaint_affidavit","documents"],
    keywords: ["money recovery suit","paisa wapas","summary suit","order 37 cpc","recovery suit","debt recovery suit"],
    generate: (f={}) => `IN THE COURT OF THE CIVIL JUDGE (SENIOR DIVISION) /
DISTRICT JUDGE
${f.district||"__________"}, ${f.state||"__________"}

SUIT NO. _____ OF ${f.year||new Date().getFullYear()}
(SUMMARY SUIT U/O XXXVII CPC / REGULAR SUIT)

${f.plaintiff||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"}
R/o: ${f.address||"__________"}
                                        ...PLAINTIFF
VERSUS

${f.defendant||"__________"} S/o ${f.d_father||"__________"}
Age: ${f.d_age||"__"} Yrs, Occupation: ${f.d_occupation||"__________"}
R/o: ${f.d_address||"__________"}
                                        ...DEFENDANT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PLAINT FOR RECOVERY OF RS. ${f.principal||"__________"}/-
ALONG WITH INTEREST @ ${f.interest_rate||"18"}% P.A.
AMOUNTING TO RS. ${f.total||"__________"}/- IN ALL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.   CAUSE OF ACTION AND JURISDICTION:

     The cause of action arose at ${f.district||"__________"}
     where the transaction took place and defendant resides.
     This Court has jurisdiction to try this suit.

2.   LOAN / TRANSACTION DETAILS:

     (i)  On ${f.loan_date||"__________"}, the plaintiff advanced
          a loan of Rs. ${f.principal||"__________"}/- to the
          defendant.

     (ii) The terms were: ${f.terms||"repayment on demand / within __________ months / in instalments of Rs. __________ per month"}.

     (iii)Rate of interest: ${f.interest_rate||"18"}% per annum.

     (iv) The loan was given for ${f.purpose||"business purpose / personal need"}.

3.   SECURITY / ACKNOWLEDGEMENT:

     ${f.security||"The defendant executed a promissory note / agreement / signed a receipt for the said amount."}
     (Annexure A: ${f.security_doc||"Promissory Note / Agreement / Receipt"})

4.   DEFAULT IN REPAYMENT:

     Despite repeated requests and demands, the defendant
     has failed to repay the loan amount. The defendant
     last made payment of Rs. ${f.last_payment||"Nil / __________"}
     on ${f.last_payment_date||"__________"} / has not made any payment.

5.   LEGAL NOTICE:

     The plaintiff issued a Legal Notice dated
     ${f.notice_date||"__________"} demanding repayment but the
     defendant has not responded / failed to pay.

6.   CALCULATION OF CLAIM:

     ┌──────────────────────────────────────────────┐
     │ Principal Amount      : Rs. ${f.principal||"__________"}/- │
     │ Interest from ${f.interest_from||"__________"}:             │
     │   @ ${f.interest_rate||"18"}% p.a. = Rs. ${f.interest_amount||"__________"}/- │
     │ Total as on date      : Rs. ${f.total||"__________"}/- │
     │ Future interest @ ${f.interest_rate||"18"}% p.a. till realisation │
     └──────────────────────────────────────────────┘

7.   SUIT VALUE AND COURT FEE:

     Suit value: Rs. ${f.total||"__________"}/-
     Court fee paid: Rs. ${f.court_fee||"__________"}/-

PRAYER:
(a) Decree the suit for Rs. ${f.principal||"__________"}/-;
(b) Award interest @ ${f.interest_rate||"18"}% p.a. from ${f.interest_from||"__________"} till realisation;
(c) Award costs of the suit;
(d) Pass any other order as deemed fit.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.advocate||"__________"})                   (${f.plaintiff||"__________"})
Advocate for Plaintiff                          Plaintiff

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I, ${f.plaintiff||"__________"}, verify that contents are true.
Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.
                              (${f.plaintiff||"__________"}) — PLAINTIFF`
  },

  // ── 5. EXECUTION PETITION ─────────────────────────────────
  execution_petition: {
    name: "Execution Petition — Decree Execution",
    section: "S.36 CPC / Order XXI CPC",
    court: "Civil Court",
    keywords: ["execution petition","decree execution","order 21 cpc","execute decree","decree enforce"],
    generate: (f={}) => `IN THE COURT OF THE CIVIL JUDGE
${f.district||"__________"}, ${f.state||"__________"}

EXECUTION PETITION NO. _____ OF ${f.year||new Date().getFullYear()}
(IN SUIT NO. ${f.suit_no||"_____"} OF ${f.decree_year||"__________"})

${f.decree_holder||"__________"} S/o ${f.father||"__________"}
                                        ...DECREE HOLDER
VERSUS

${f.judgment_debtor||"__________"} S/o ${f.jd_father||"__________"}
R/o: ${f.jd_address||"__________"}
                                        ...JUDGMENT DEBTOR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXECUTION PETITION U/S 36 CPC / ORDER XXI CPC
FOR EXECUTION OF DECREE DATED ${f.decree_date||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  A decree was passed on ${f.decree_date||"__________"} in
    Suit No. ${f.suit_no||"_____"} directing the judgment debtor
    to pay Rs. ${f.decree_amount||"__________"}/- with interest
    @ ${f.interest||"__________"}% p.a. and costs.

2.  The judgment debtor has failed to satisfy the decree
    despite demand. Amount remaining unpaid:
    Rs. ${f.unpaid||"__________"}/-

3.  Mode of execution sought:
    ${f.execution_mode||"Attachment of property / Attachment of bank account / Arrest and detention of judgment debtor / Other"}

4.  Property / Bank Account for attachment:
    ${f.attachment_details||"__________"}

PRAYER:
(a) Issue execution warrant / Attach property;
(b) Recover Rs. ${f.unpaid||"__________"}/- from judgment debtor;
(c) Pass any other order as deemed fit.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                              (${f.advocate||"__________"})
                              Advocate for Decree Holder`
  },

  // ── 6. APPLICATION U/S 143-A NI ACT (Interim Compensation) ─
  interim_compensation_143A: {
    name: "Application for Interim Compensation — S.143-A NI Act",
    section: "S.143-A Negotiable Instruments Act",
    keywords: ["143a ni act","interim compensation cheque","cheque interim compensation","20 percent compensation cheque"],
    generate: (f={}) => `IN THE COURT OF THE JUDICIAL MAGISTRATE FIRST CLASS
${f.district||"__________"}, ${f.state||"__________"}

COMPLAINT CASE NO. ${f.case_no||"_____"} OF ${f.year||new Date().getFullYear()}
(U/S 138 NI ACT)

${f.complainant||"__________"}   ...COMPLAINANT
VERSUS
${f.accused||"__________"}       ...ACCUSED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR INTERIM COMPENSATION U/S 143-A
NEGOTIABLE INSTRUMENTS ACT, 1881
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  This complaint is pending before this Court for
    dishonour of Cheque No. ${f.cheque_no||"__________"} for
    Rs. ${f.cheque_amount||"__________"}/-

2.  As per S.143-A NI Act, the court may direct the
    accused to pay INTERIM COMPENSATION not exceeding
    20% of the cheque amount during pendency of the trial.

3.  20% of cheque amount = Rs. ${f.twenty_percent||"__________"}/-

4.  The complainant is entitled to interim compensation
    as the case prima facie discloses an offence U/S 138.

PRAYER:
Direct accused to pay interim compensation of
Rs. ${f.twenty_percent||"__________"}/- (20% of cheque amount)
within 60 days as per S.143-A NI Act.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                              (${f.advocate||"__________"})
                              Advocate for Complainant`
  },

  // ── 7. PROMISSORY NOTE / PRO-NOTE ────────────────────────
  promissory_note: {
    name: "Promissory Note / Pro-Note",
    keywords:["promissory note","pro note","pronote","hundi","loan receipt","loan agreement promissory"],
    generate: (f={}) => `PROMISSORY NOTE / PRO-NOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Place: ${f.place||"__________"}
Amount: Rs. ${f.amount||"__________"}/- (Rupees ${f.amount_words||"__________"} Only)

I, ${f.borrower||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},

DO HEREBY PROMISE TO PAY to ${f.lender||"__________"} S/o
${f.lender_father||"__________"}, R/o: ${f.lender_address||"__________"},
or order, the sum of Rs. ${f.amount||"__________"}/- (Rupees
${f.amount_words||"__________"} Only) being the amount borrowed
by me today for ${f.purpose||"my personal/business/other needs"}.

TERMS:
• Repayment date: ${f.repayment_date||"On Demand / __________ months from date"}
• Rate of interest: ${f.interest||"18"}% per annum
• If default: entitled to recover with all costs

I acknowledge receipt of Rs. ${f.amount||"__________"}/- in cash /
by cheque / by NEFT/RTGS on this day.

SECURITY:
${f.security||"This promissory note is without security / The following property is pledged as security: __________"}

                              (${f.borrower||"__________"})
                                    EXECUTANT/BORROWER
                              Left Thumb Impression

WITNESS:
1. Name: _____________ Sign: _____________ Address: _____________
2. Name: _____________ Sign: _____________ Address: _____________

ACCEPTED BY LENDER:
(${f.lender||"__________"})
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTE: This promissory note is executed on Rs. ${f.stamp_value||"100"}/- 
Non-Judicial Stamp Paper as required by law.`
  },

};
