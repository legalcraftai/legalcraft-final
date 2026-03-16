// ════════════════════════════════════════════════════════════
// TAX LAW FORMATS PACKET
// Income Tax, GST, TDS, Tax Notices, Appeals
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: { packet: "tax_formats", total_formats: 8 },

  // ── 1. INCOME TAX NOTICE REPLY ────────────────────────────
  it_notice_reply: {
    name: "Reply to Income Tax Notice",
    keywords: ["income tax notice reply","it notice reply","income tax notice ka jawab","143 1 notice reply","income tax scrutiny reply"],
    generate: (f={}) => `REPLY TO INCOME TAX NOTICE

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE INCOME TAX OFFICER / ASSESSING OFFICER
Ward/Circle: ${f.ward||"__________"}
${f.ito_address||"__________"}

SUBJECT: Reply to Notice U/S ${f.notice_section||"143(1) / 142(1) / 148 / 143(2) / 270A"}
         dated ${f.notice_date||"__________"} for A.Y. ${f.ay||"__________"}

PAN: ${f.pan||"__________"}
Name: ${f.assessee||"__________"}
Address: ${f.address||"__________"}

Dear Sir/Madam,

With reference to your notice dated ${f.notice_date||"__________"},
I/We hereby submit the following reply:

1.  BASIC FACTS:
    The undersigned assessee has duly filed the
    return of income for A.Y. ${f.ay||"__________"} on
    ${f.filing_date||"__________"} declaring total income
    of Rs. ${f.income||"__________"}/-

2.  REPLY TO QUERIES:

    ${f.query1_subject||"Query 1: Regarding __________"}:
    ${f.reply1||"Reply: The said income/expense is on account of __________ and is duly supported by __________. Please find attached __________"}

    ${f.query2_subject||"Query 2: Regarding __________"}:
    ${f.reply2||"Reply: __________"}

3.  DOCUMENTS ENCLOSED:
    (i)   ${f.doc1||"Bank statements for FY __________"}
    (ii)  ${f.doc2||"Form 26AS"}
    (iii) ${f.doc3||"Books of accounts / ledger / vouchers"}
    (iv)  ${f.doc4||"Contract / Agreement / Invoice"}
    (v)   ${f.doc5||"Other: __________"}

4.  REQUEST:
    In view of the above, we request that no
    addition may be made to the income declared and
    the assessment may be completed on the returned
    income.

Yours faithfully,

(${f.assessee||"__________"})
PAN: ${f.pan||"__________"}
Mobile: ${f.mobile||"__________"}
Email: ${f.email||"__________"}

Enclosures: As above`
  },

  // ── 2. GST NOTICE REPLY ───────────────────────────────────
  gst_notice_reply: {
    name: "Reply to GST Notice",
    keywords: ["gst notice reply","gst notice ka jawab","gst scrutiny reply","gst show cause reply","gst department notice"],
    generate: (f={}) => `REPLY TO GST NOTICE / SHOW CAUSE NOTICE

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE PROPER OFFICER / GST OFFICER
${f.gst_office||"__________"}
GSTIN Jurisdiction: ${f.jurisdiction||"__________"}

REFERENCE: Notice No. ${f.notice_no||"__________"} dated
${f.notice_date||"__________"} issued U/S ${f.notice_section||"73 / 74 / 61 / 65"} of the
CGST Act, 2017

GSTIN: ${f.gstin||"__________"}
Name: ${f.taxpayer||"__________"}
Address: ${f.address||"__________"}

Dear Sir/Madam,

With reference to the above notice, we submit
our reply as under:

1.  BRIEF FACTS:
    The noticee is a registered taxpayer under
    GST with GSTIN ${f.gstin||"__________"} engaged in the
    business of ${f.business||"__________"}.

2.  REPLY TO DEMAND / DISCREPANCY:

    The demand of Rs. ${f.demand||"__________"}/- is disputed
    on the following grounds:

    (a) ${f.ground1||"The tax has been duly paid as evidenced by __________"}
    (b) ${f.ground2||"The ITC claimed is valid as __________"}
    (c) ${f.ground3||"There is no willful suppression / misstatement"}
    (d) ${f.ground4||"The demand is hit by limitation under S.73(10)"}

3.  DOCUMENTS SUBMITTED:
    (i)   GSTR-1 and GSTR-3B filings
    (ii)  Tax payment challans
    (iii) Purchase invoices and e-way bills
    (iv)  Bank statements
    (v)   ${f.other_docs||"Other: __________"}

4.  PRAYER: Drop the proceedings and no penalty.

Yours faithfully,
(${f.taxpayer||"__________"})
GSTIN: ${f.gstin||"__________"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  // ── 3. INCOME TAX APPEAL (CIT-A) ─────────────────────────
  it_appeal_cita: {
    name: "Appeal to CIT(A) — Income Tax Appeal",
    section: "S.246A Income Tax Act 1961",
    keywords: ["income tax appeal","cit a appeal","246a income tax","it appeal","it appeal draft","income tax assessment appeal"],
    generate: (f={}) => `BEFORE THE COMMISSIONER OF INCOME TAX (APPEALS)
${f.cita_jurisdiction||"__________"}

APPEAL NO. _____ OF A.Y. ${f.ay||"__________"}

${f.appellant||"__________"}
PAN: ${f.pan||"__________"}
Address: ${f.address||"__________"}
                                        ...APPELLANT
VERSUS

INCOME TAX OFFICER / DCIT / ACIT
Ward/Circle: ${f.ward||"__________"}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPEAL U/S 246-A INCOME TAX ACT, 1961
AGAINST ASSESSMENT ORDER DATED ${f.order_date||"__________"}
PASSED U/S ${f.order_section||"143(3) / 147 / 144"} FOR A.Y. ${f.ay||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  IMPUGNED ORDER: Assessment order dated
    ${f.order_date||"__________"} passed by ${f.ao||"__________"} U/S
    ${f.order_section||"143(3)"} for A.Y. ${f.ay||"__________"} assessing
    income at Rs. ${f.assessed_income||"__________"}/- against returned
    income of Rs. ${f.returned_income||"__________"}/-

2.  DISPUTED ADDITIONS/DISALLOWANCES:

    (i)  Addition U/S ${f.section1||"__________"}:
         Amount: Rs. ${f.addition1||"__________"}/-
         Ground: ${f.ground1||"The addition is incorrect as __________"}

    (ii) Disallowance U/S ${f.section2||"__________"}:
         Amount: Rs. ${f.addition2||"__________"}/-
         Ground: ${f.ground2||"The disallowance is unjustified as __________"}

3.  GROUNDS OF APPEAL:

    1.  The order is contrary to facts and law.
    2.  The AO erred in making the addition without
        proper basis and ignoring the evidence submitted.
    3.  The addition U/S _____ is bad in law as
        ${f.legal_ground||"__________"}.
    4.  Without prejudice, the addition is excessive.

PRAYER:
(a) Delete the additions / disallowances;
(b) Reduce the assessed income to Rs. ${f.returned_income||"__________"}/-;
(c) Grant stay of demand during pendency.

Place: ${f.place||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.ar||"Authorised Representative / Advocate"})
For ${f.appellant||"__________"}
Membership No.: ${f.membership||"__________"}`
  },

  // ── 4. GST REFUND APPLICATION ─────────────────────────────
  gst_refund: {
    name: "GST Refund Application",
    keywords: ["gst refund","gst refund application","gst wapas","igst refund","export refund gst"],
    generate: (f={}) => `GST REFUND APPLICATION
(RFD-01 — To be filed online on GST Portal)

GSTIN: ${f.gstin||"__________"}
Legal Name: ${f.taxpayer||"__________"}
Tax Period: ${f.period||"__________"}
Date of Application: ${f.date||new Date().toLocaleDateString('en-IN')}

DETAILS OF REFUND CLAIM:

Reason for Refund: ${f.reason||"Export of goods/services without payment of tax / ITC accumulation due to inverted duty / Excess tax paid / Other"}

Amount Claimed:
    IGST: Rs. ${f.igst||"__________"}/-
    CGST: Rs. ${f.cgst||"__________"}/-
    SGST: Rs. ${f.sgst||"__________"}/-
    TOTAL: Rs. ${f.total||"__________"}/-

Bank Account for Refund:
    Bank Name:    ${f.bank||"__________"}
    Branch:       ${f.branch||"__________"}
    Account No.:  ${f.account||"__________"}
    IFSC:         ${f.ifsc||"__________"}

DOCUMENTS TO BE UPLOADED:
1. Statement of invoices (export / zero-rated)
2. FIRC / BRC (for export of services)
3. Shipping bills (for export of goods)
4. LUT / Bond (if applicable)

Declaration: I declare that information given above
is true and correct to best of my knowledge.

(${f.taxpayer||"__________"})
GSTIN: ${f.gstin||"__________"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  // ── 5. TDS DISPUTE / REPLY ────────────────────────────────
  tds_reply: {
    name: "Reply to TDS Demand Notice",
    keywords: ["tds notice reply","tds demand notice","tds mismatch reply","tds short deduction","tds notice ka jawab"],
    generate: (f={}) => `REPLY TO TDS DEMAND NOTICE / INTIMATION

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE ASSESSING OFFICER (TDS)
${f.tds_office||"__________"}

REFERENCE: Notice / Intimation dated ${f.notice_date||"__________"}
for TAN: ${f.tan||"__________"} for Quarter: ${f.quarter||"__________"}

TAN: ${f.tan||"__________"}
Name of Deductor: ${f.deductor||"__________"}
Address: ${f.address||"__________"}

Dear Sir/Madam,

1.  The above notice is received. We submit:
    ${f.reply||"(Reply to specific demand/mismatch)"}

2.  TDS has been duly deducted and deposited as
    evidenced by:
    • Challan details: ${f.challan||"__________"}
    • Form 26AS reflection: ${f.form26as||"Verified / Pending"}

3.  Any mismatch is due to ${f.mismatch_reason||"data entry error / PAN mismatch of deductee / timing difference"}.
    We request correction of the same.

4.  Documents enclosed: ${f.docs||"Challans / TDS certificates / Deductee details"}

Yours faithfully,
(${f.deductor||"__________"})
TAN: ${f.tan||"__________"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  // ── 6. INCOME TAX PENALTY REPLY ──────────────────────────
  penalty_reply: {
    name: "Reply to Penalty Notice — Income Tax",
    section: "S.270A / S.271 Income Tax Act",
    keywords: ["penalty notice reply income tax","270a penalty reply","271 penalty reply","income tax penalty reply"],
    generate: (f={}) => `REPLY TO PENALTY NOTICE
U/S ${f.penalty_section||"270-A / 271"} INCOME TAX ACT, 1961

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE ASSESSING OFFICER
Ward/Circle: ${f.ward||"__________"}

REFERENCE: Penalty Notice dated ${f.notice_date||"__________"}
Proposed Penalty: Rs. ${f.penalty||"__________"}/-
For A.Y.: ${f.ay||"__________"}

Sir/Madam,

1.  The proposed penalty of Rs. ${f.penalty||"__________"}/-
    is opposed on the following grounds:

    (a) There was NO WILLFUL MISREPRESENTATION or
        SUPPRESSION of income by the assessee.

    (b) The under-reporting of income, if any, was
        on account of a BONA FIDE mistake / difference
        of opinion / reliance on expert advice.

    (c) ${f.specific_ground||"(Specific ground for contesting penalty)"}

2.  As held by the Hon'ble Supreme Court, penalty
    is not automatic and requires proof of mens rea.

3.  The assessee cooperated fully with the assessment
    and submitted all documents required.

PRAYER: Drop penalty proceedings entirely.

Yours faithfully,
(${f.assessee||"__________"})
PAN: ${f.pan||"__________"}`
  },

  // ── 7. SETTLEMENT OF DUES LETTER ─────────────────────────
  tax_settlement: {
    name: "Letter for Settlement of Tax Dues / Vivad se Vishwas",
    keywords: ["tax settlement","vivad se vishwas","tax dues settlement","income tax dues pay"],
    generate: (f={}) => `APPLICATION FOR SETTLEMENT OF TAX DUES
(VIVAD SE VISHWAS SCHEME / DIRECT SETTLEMENT)

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE PRINCIPAL COMMISSIONER / COMMISSIONER
OF INCOME TAX
${f.commr_office||"__________"}

SUBJECT: Application for settlement of disputed
tax demand under Vivad se Vishwas Scheme /
Request for settlement of dues.

PAN: ${f.pan||"__________"}
Name: ${f.assessee||"__________"}
A.Y.: ${f.ay||"__________"}
Disputed Demand: Rs. ${f.demand||"__________"}/-

1.  The assessee desires to settle the disputed
    tax demand for A.Y. ${f.ay||"__________"}.

2.  Amount payable under settlement:
    Tax: Rs. ${f.tax||"__________"}/-
    Interest: Rs. ${f.interest||"__________"}/-
    Total: Rs. ${f.total||"__________"}/-

3.  The above amount shall be paid by ${f.payment_date||"__________"}.

4.  In lieu of settlement, the assessee requests
    withdrawal of penalty proceedings / waiver of
    interest / immunity from prosecution.

(${f.assessee||"__________"})
PAN: ${f.pan||"__________"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  // ── 8. GST REGISTRATION CANCELLATION REPLY ───────────────
  gst_cancellation_reply: {
    name: "Reply to GST Registration Cancellation Notice",
    keywords: ["gst cancellation reply","gst registration cancel reply","gst band karne ka jawab","suo motu cancellation reply"],
    generate: (f={}) => `REPLY TO NOTICE FOR CANCELLATION OF GST REGISTRATION

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE PROPER OFFICER
GST Division: ${f.division||"__________"}

REFERENCE: Notice for cancellation dated
${f.notice_date||"__________"} for GSTIN ${f.gstin||"__________"}

GSTIN: ${f.gstin||"__________"}
Name: ${f.taxpayer||"__________"}
Address: ${f.address||"__________"}

Dear Sir/Madam,

1.  The above notice proposing cancellation of GSTIN
    has been received and we submit this reply.

2.  The reason given for cancellation is:
    "${f.cancellation_reason||"Non-filing of returns / Non-commencement of business / Other"}"

3.  OUR REPLY:
    ${f.reply||`(a) We have now filed all pending returns for the period __________ to __________.
    (b) The business is operational and we produce the following evidence: __________
    (c) The delay was due to __________ which was beyond our control.`}

4.  PRAYER:
    In view of the above, we request that the
    cancellation proceedings may be dropped and
    our GSTIN may be retained.

(${f.taxpayer||"__________"})
GSTIN: ${f.gstin||"__________"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

};
