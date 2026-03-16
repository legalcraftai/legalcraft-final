// ════════════════════════════════════════════════════════════
// BANKING & FINANCE FORMATS PACKET
// Loan Agreement, Bank Complaint, DRT, Insolvency
// ════════════════════════════════════════════════════════════
module.exports = {
  meta: { packet: "banking_formats", total_formats: 8 },

  loan_agreement: {
    name: "Loan Agreement",
    keywords: ["loan agreement","karz samjhauta","loan deed","money lending agreement","loan agreement draft"],
    generate: (f={}) => `LOAN AGREEMENT

THIS LOAN AGREEMENT is executed on ${f.date||new Date().toLocaleDateString('en-IN')} at ${f.place||"__________"}.

LENDER:
${f.lender||"__________"} S/o ${f.lender_father||"__________"}
R/o: ${f.lender_address||"__________"}
PAN: ${f.lender_pan||"__________"}
(Hereinafter "LENDER")

BORROWER:
${f.borrower||"__________"} S/o ${f.borrower_father||"__________"}
R/o: ${f.borrower_address||"__________"}
PAN: ${f.borrower_pan||"__________"}
(Hereinafter "BORROWER")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TERMS AND CONDITIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  LOAN AMOUNT: Rs. ${f.amount||"__________"}/- (Rupees ${f.amount_words||"__________"} Only)

2.  PURPOSE: ${f.purpose||"Business / Personal / Medical / Education / Other"}

3.  DISBURSEMENT: Paid by ${f.mode||"Cash/NEFT/Cheque No. __________"} on ${f.date||"__________"}.

4.  INTEREST RATE: ${f.interest||"__"}% per annum / per month (${f.interest_type||"simple/compound"})

5.  REPAYMENT SCHEDULE:
    Start Date:      ${f.repayment_start||"__________"}
    EMI Amount:      Rs. ${f.emi||"__________"}/- per month
    No. of EMIs:     ${f.emis||"__"}
    Last EMI Date:   ${f.last_emi||"__________"}
    OR
    On Demand:       ${f.on_demand||"Yes / No"}

6.  SECURITY:
    ${f.security||"Nil / Mortgage of property at __________ / Pledge of __________ / Third party guarantee by __________"}

7.  DEFAULT: If Borrower fails to pay any EMI on due date:
    (a) The entire outstanding becomes payable immediately;
    (b) Penal interest @ ${f.penal_interest||"2"}% per month on overdue amount;
    (c) Lender may enforce security.

8.  PREPAYMENT: Borrower may repay early ${f.prepayment||"without any penalty / with prepayment charges of ___%"}.

9.  REPRESENTATIONS BY BORROWER:
    (a) Has legal capacity to borrow;
    (b) Loan for stated purpose only;
    (c) No other undisclosed liabilities.

10. JURISDICTION: Courts at ${f.jurisdiction||"__________"}.

IN WITNESS WHEREOF the parties sign on ${f.date||new Date().toLocaleDateString('en-IN')}.

(${f.lender||"__________"})              (${f.borrower||"__________"})
    LENDER                                  BORROWER

WITNESS: 1. _________________ 2. _________________`
  },

  bank_ombudsman_complaint: {
    name: "Complaint to Banking Ombudsman / RBI",
    keywords: ["bank ombudsman complaint","rbi complaint","banking ombudsman","bank complaint","bank service complaint","cms rbi complaint"],
    generate: (f={}) => `COMPLAINT TO BANKING OMBUDSMAN
(RESERVE BANK OF INDIA — INTEGRATED OMBUDSMAN SCHEME 2021)

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE BANKING OMBUDSMAN
Reserve Bank of India
${f.rbi_office||"__________"} Regional Office

COMPLAINANT:
Name:         ${f.complainant||"__________"}
Address:      ${f.address||"__________"}
Mobile:       ${f.mobile||"__________"}
Email:        ${f.email||"__________"}
Account No.:  ${f.account||"__________"}

BANK DETAILS:
Bank Name:    ${f.bank||"__________"}
Branch:       ${f.branch||"__________"}
Branch Code:  ${f.branch_code||"__________"}

NATURE OF COMPLAINT:
${f.complaint_type||"☐ Non-credit of amount transferred\n☐ Failure to issue/delay in issuing cheque book\n☐ Non-adherence to fair practices code\n☐ Credit card charges dispute\n☐ Unauthorized debit from account\n☐ Non-payment of interest\n☐ Closure of account without proper notice\n☐ Other: __________"}

FACTS:
1. On ${f.incident_date||"__________"}, ${f.incident||"(describe what happened)"}

2. I complained to the bank on ${f.bank_complaint_date||"__________"} but received ${f.bank_response||"no reply / unsatisfactory reply"}.

3. The bank's action/inaction has caused me a loss of Rs. ${f.loss||"__________"}/-

RELIEF SOUGHT:
${f.relief||"(a) Refund of Rs. __________/-\n(b) Compensation for mental agony\n(c) Interest on delayed payment\n(d) Any other appropriate relief"}

I confirm that:
(a) This matter has been pending with the bank for more than 30 days.
(b) I have not initiated any legal proceedings.

(${f.complainant||"__________"})
Complainant — Signature
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  drt_application: {
    name: "Application before DRT — Debt Recovery Tribunal",
    section: "S.17 Recovery of Debts and Bankruptcy Act 1993",
    keywords: ["drt application","debt recovery tribunal","17 rdba","drt petition","bank loan recovery drt"],
    generate: (f={}) => `BEFORE THE DEBT RECOVERY TRIBUNAL-${f.drt_no||"__"}
${f.city||"__________"}

OA NO. _____ OF ${f.year||new Date().getFullYear()}

${f.bank||"__________"} BANK
${f.bank_address||"__________"}
                                        ...APPLICANT/BANK
VERSUS

1. ${f.borrower||"__________"} S/o ${f.father||"__________"}
   R/o: ${f.borrower_address||"__________"}
                                        (PRINCIPAL BORROWER)
2. ${f.guarantor||"__________"} S/o ${f.g_father||"__________"}
   R/o: ${f.guarantor_address||"__________"}
                                        (GUARANTOR)
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ORIGINAL APPLICATION U/S 17
RECOVERY OF DEBTS AND BANKRUPTCY ACT 1993
FOR RECOVERY OF Rs. ${f.total||"__________"}/-
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  LOAN DETAILS:
    Loan Type:        ${f.loan_type||"Term Loan / CC Limit / Housing Loan"}
    Account No.:      ${f.account||"__________"}
    Sanctioned Amount: Rs. ${f.sanctioned||"__________"}/-
    Date of Sanction: ${f.sanction_date||"__________"}
    NPA Date:         ${f.npa_date||"__________"}

2.  OUTSTANDING AS ON ${f.outstanding_date||new Date().toLocaleDateString('en-IN')}:
    Principal:  Rs. ${f.principal||"__________"}/-
    Interest:   Rs. ${f.interest||"__________"}/-
    Charges:    Rs. ${f.charges||"__________"}/-
    TOTAL:      Rs. ${f.total||"__________"}/-

3.  SECURITY:
    ${f.security||"Mortgage of property / Hypothecation / Personal guarantee"}

4.  SARFAESI NOTICE issued on ${f.sarfaesi_date||"__________"}. No payment received.

PRAYER:
(a) Pass Recovery Certificate for Rs. ${f.total||"__________"}/-;
(b) Direct sale of secured assets;
(c) Award interest @ ${f.interest_rate||"18"}% p.a. till realization;
(d) Award costs.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                              (${f.advocate||"__________"})
                              Advocate for Applicant/Bank`
  },

  credit_card_dispute: {
    name: "Credit Card Dispute / Chargeback",
    keywords: ["credit card dispute","credit card complaint","chargeback","unauthorized transaction credit card","credit card fraud complaint"],
    generate: (f={}) => `CREDIT CARD DISPUTE / CHARGEBACK REQUEST

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE NODAL OFFICER / CREDIT CARD DEPARTMENT
${f.bank||"__________"} Bank
${f.bank_address||"__________"}

CARD DETAILS:
Card No. (last 4 digits): XXXX-XXXX-XXXX-${f.card_last4||"____"}
Card Holder:              ${f.cardholder||"__________"}
Account No.:              ${f.account||"__________"}

DISPUTED TRANSACTION(S):
┌──────────────────────────────────────────────────────┐
│ Date       │ Merchant        │ Amount    │ Reason     │
├──────────────────────────────────────────────────────┤
│ ${f.txn_date||"__________"} │ ${f.merchant||"__________"} │ Rs.${f.amount||"__________"} │ ${f.reason||"Unauthorized"} │
└──────────────────────────────────────────────────────┘

REASON FOR DISPUTE:
${f.dispute_reason||"☐ I did not authorize this transaction\n☐ I was charged but goods/services not received\n☐ I was charged wrong amount\n☐ Duplicate charge\n☐ Refund not credited"}

DETAILS:
${f.details||"(Provide specific details of the dispute)"}

MY CARD WAS: ☐ In my possession ☐ Lost/Stolen (reported on: ${f.reported_date||"__________"})

I request:
(a) Immediate CHARGEBACK / REVERSAL of the disputed amount;
(b) Interim credit pending investigation;
(c) Police report attached: ${f.police_report||"Yes/No"}.

(${f.cardholder||"__________"})
Signature: _________________
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  investment_complaint: {
    name: "Investment Fraud / Chit Fund Complaint",
    keywords: ["investment fraud complaint","chit fund complaint","ponzi scheme complaint","sebi complaint","investment company fraud"],
    generate: (f={}) => `COMPLAINT REGARDING INVESTMENT FRAUD / CHIT FUND

TO,
THE SUPERINTENDENT OF POLICE / EOW /
SEBI REGIONAL OFFICE / ROC
${f.authority_address||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT:
${f.complainant||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}, Mobile: ${f.mobile||"__________"}

ACCUSED COMPANY / PERSONS:
${f.company||"__________"} / Promoter: ${f.promoter||"__________"}
Address: ${f.company_address||"__________"}
Registration No.: ${f.reg_no||"__________"} (if any)

INVESTMENT DETAILS:
Date of Investment: ${f.invest_date||"__________"}
Amount Invested: Rs. ${f.amount||"__________"}/-
Returns Promised: ${f.promised_return||"__"}% per month/annum
Mode of Payment: ${f.mode||"__________"}
Receipt/Agreement No.: ${f.receipt||"__________"}

COMPLAINT:
${f.complaint||`1. The company/promoter induced me to invest by promising unrealistic returns.
2. The company has stopped paying returns since __________.
3. The promoter is absconding / offices closed.
4. My total loss: Rs. __________/-`}

RELIEF SOUGHT:
(a) FIR U/S 318/316 BNS 2023 and MPID Act/Chit Fund Act;
(b) Attachment of accused's assets;
(c) Recovery of Rs. ${f.amount||"__________"}/- from accused;
(d) Arrest of accused.

DOCUMENTS ATTACHED:
1. Investment receipts / agreement
2. Bank statements
3. Communication with company

(${f.complainant||"__________"})
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  mortgage_deed: {
    name: "Mortgage Deed — Simple Mortgage",
    section: "S.58 Transfer of Property Act 1882",
    keywords: ["mortgage deed","simple mortgage","property mortgage deed","58 tpa mortgage deed","girvi deed"],
    generate: (f={}) => `MORTGAGE DEED
(SIMPLE MORTGAGE)

This Mortgage Deed is executed on ${f.date||new Date().toLocaleDateString('en-IN')} at ${f.place||"__________"}.

MORTGAGOR (BORROWER):
${f.mortgagor||"__________"} S/o ${f.m_father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.mortgagor_address||"__________"}
(Hereinafter "MORTGAGOR")

MORTGAGEE (LENDER):
${f.mortgagee||"__________"} S/o ${f.mg_father||"__________"}
R/o: ${f.mortgagee_address||"__________"}
(Hereinafter "MORTGAGEE")

SCHEDULE OF MORTGAGED PROPERTY:
${f.property||"(Full description of property — location, area, boundaries, khasra no.)"}

PRINCIPAL AMOUNT: Rs. ${f.principal||"__________"}/-
(Rupees ${f.principal_words||"__________"} Only)

RATE OF INTEREST: ${f.interest||"__"}% per annum

REPAYMENT DATE: ${f.repayment_date||"__________"}

NOW THIS DEED WITNESSETH:

1. The Mortgagor having borrowed Rs. ${f.principal||"__________"}/- from the Mortgagee, hereby MORTGAGES the above property to the Mortgagee as security.

2. The Mortgagor shall repay Rs. ${f.principal||"__________"}/- with interest @ ${f.interest||"__"}% p.a. by ${f.repayment_date||"__________"}.

3. The Mortgagor retains possession of the property.

4. If the Mortgagor fails to repay, the Mortgagee shall be entitled to obtain a decree and have the property sold.

5. This mortgage shall stand discharged upon full repayment.

(${f.mortgagor||"__________"})              (${f.mortgagee||"__________"})
   MORTGAGOR                                  MORTGAGEE

WITNESSES: 1. _________________ 2. _________________`
  },

  bank_guarantee_invocation: {
    name: "Invocation of Bank Guarantee",
    keywords: ["bank guarantee invocation","invoke bank guarantee","bank guarantee encash","bank guarantee letter"],
    generate: (f={}) => `LETTER FOR INVOCATION OF BANK GUARANTEE

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Ref: ${f.ref||"__________"}

TO,
THE MANAGER / AUTHORIZED OFFICER
${f.issuing_bank||"__________"} Bank
${f.bank_address||"__________"}

SUBJECT: Invocation of Bank Guarantee No. ${f.bg_no||"__________"}
Dated: ${f.bg_date||"__________"}
Amount: Rs. ${f.bg_amount||"__________"}/-
Issued on behalf of: ${f.applicant_name||"__________"}
In favour of: ${f.beneficiary||"__________"} (Us)

Dear Sir/Madam,

We hereby INVOKE the above Bank Guarantee on the following grounds:

1. The party ${f.applicant_name||"__________"} has committed a default by ${f.default||"failing to perform contract obligations / not paying dues / other default as per contract"}.

2. As per the terms of the Bank Guarantee, on invocation, you are required to pay Rs. ${f.bg_amount||"__________"}/- unconditionally and without demur.

3. The Bank Guarantee is valid up to ${f.bg_validity||"__________"}.

We request IMMEDIATE PAYMENT of Rs. ${f.bg_amount||"__________"}/- to our account:
Bank: ${f.our_bank||"__________"}, Account No.: ${f.our_account||"__________"}, IFSC: ${f.our_ifsc||"__________"}

For ${f.beneficiary||"__________"},

(${f.authorized_signatory||"__________"})
${f.designation||"Authorized Signatory"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },
};
