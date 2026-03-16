// ════════════════════════════════════════════════════════════
// PROPERTY & CONTRACT FORMATS PACKET
// Sale Deed, Gift Deed, Rent Agreement, MOU, Partnership, Power of Attorney
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: {
    packet: "property_formats",
    total_formats: 8,
    covers: ["Sale Deed","Gift Deed","Rent/Lease Agreement","MOU","Partnership Deed","Power of Attorney","Agreement to Sell","Will/Testament"]
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 1 — SALE DEED
  // ═══════════════════════════════════════════════════════════
  sale_deed: {
    name: "Sale Deed — Immoveable Property",
    section: "S.54 Transfer of Property Act 1882",
    court: "Sub-Registrar Office (for registration)",
    attach_with: ["identity_proof","property_documents","encumbrance_certificate"],
    keywords: ["sale deed","property sale","54 tpa","registry karna","sampatti bikri","sale deed draft","property deed"],
    generate: (f={}) => `SALE DEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This Sale Deed is executed on this ${f.day||"___"} day of
${f.month||"___________"}, ${f.year||new Date().getFullYear()}

AT ${f.registration_place||"__________"} Sub-Registrar Office

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VENDOR / SELLER (PARTY OF THE FIRST PART):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ${f.vendor1||"__________"} S/o ${f.vendor1_father||"__________"}
   Age: ${f.vendor1_age||"__"} Yrs, Occupation: ${f.vendor1_occ||"__________"}
   R/o: ${f.vendor1_address||"__________"}
   Aadhaar No.: ${f.vendor1_aadhaar||"__________"}
   PAN No.: ${f.vendor1_pan||"__________"}

2. ${f.vendor2||""} ${f.vendor2?"S/o "+f.vendor2_father:""}
   ${f.vendor2?("R/o: "+(f.vendor2_address||"__________")):""}

(hereinafter referred to as "VENDOR/SELLER" which
expression shall include heirs, executors, legal
representatives and assigns)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURCHASER / BUYER (PARTY OF THE SECOND PART):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ${f.purchaser1||"__________"} S/o ${f.purchaser1_father||"__________"}
   Age: ${f.purchaser1_age||"__"} Yrs, Occupation: ${f.purchaser1_occ||"__________"}
   R/o: ${f.purchaser1_address||"__________"}
   Aadhaar No.: ${f.purchaser1_aadhaar||"__________"}
   PAN No.: ${f.purchaser1_pan||"__________"}

(hereinafter referred to as "PURCHASER/BUYER" which
expression shall include heirs, executors, legal
representatives and assigns)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCHEDULE OF PROPERTY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${f.property_schedule||`Plot/House No.:     __________
Survey/Khasra No.:  __________
Ward/Mohalla:       __________
Village/City:       __________
Tehsil:             __________
District:           __________
State:              __________
Area:               __________ sq.ft. / __________ sq.mt.
                    (__________ Acre/Bigha/Marla)
Boundaries:
  NORTH:  __________
  SOUTH:  __________
  EAST:   __________
  WEST:   __________`}

(hereinafter referred to as "the Said Property")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHEREAS:

A. The Vendor is the absolute owner of the Said Property
   having acquired the same by virtue of
   ${f.vendor_title||"purchase/inheritance/gift"} as per document
   dated ${f.title_doc_date||"__________"} registered as Doc. No.
   ${f.title_doc_no||"__________"} with Sub-Registrar
   ${f.sr_office||"__________"}.

B. The Vendor has agreed to sell and the Purchaser has
   agreed to purchase the Said Property for a total
   consideration of Rs. ${f.consideration||"__________"}/-
   (Rupees ${f.consideration_words||"__________"} Only).

NOW, THIS DEED WITNESSETH AS FOLLOWS:

1.  CONSIDERATION / PAYMENT:
    The Purchaser has paid the total sale consideration
    of Rs. ${f.consideration||"__________"}/- to the Vendor as follows:

    ${f.payment_details||`(a) By cash:      Rs. __________ on __________
    (b) By cheque:    Rs. __________ (Cheque No. ________ dated _______ drawn on _______ Bank)
    (c) By RTGS/NEFT: Rs. __________ (UTR No. ________ dated ________)`}

    The Vendor hereby acknowledges receipt of the
    complete consideration amount.

2.  ABSOLUTE SALE AND TRANSFER:
    In consideration of the aforesaid amount, the Vendor
    hereby SELLS, CONVEYS, TRANSFERS, and ASSURES the
    Said Property unto and in favour of the Purchaser
    ABSOLUTELY and FOREVER, free from all encumbrances,
    attachments, charges, mortgages, liens and claims.

3.  POSSESSION:
    The Vendor has this day delivered PEACEFUL VACANT
    POSSESSION of the Said Property to the Purchaser.
    The Purchaser is now in physical possession of the
    Said Property.

4.  TITLE:
    The Said Property is free and clear from all
    encumbrances, mortgages, charges, attachments,
    litigation, legal proceedings, claims or demands
    of any nature whatsoever.

5.  INDEMNITY:
    The Vendor shall indemnify and keep indemnified the
    Purchaser against all claims, demands, actions or
    proceedings arising from defect in title.

6.  FURTHER ASSURANCE:
    The Vendor agrees to execute all such documents and
    do all such acts as may be required to perfect the
    title of the Purchaser.

7.  STAMP DUTY AND REGISTRATION:
    Stamp duty, registration charges and all other
    expenses for execution and registration of this
    deed shall be borne by the Purchaser.

IN WITNESS WHEREOF, the parties have signed this deed
on the day, month and year first written above.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VENDOR                                PURCHASER
(${f.vendor1||"__________"})                    (${f.purchaser1||"__________"})
Signature:                            Signature:
Date: ${f.date||new Date().toLocaleDateString('en-IN')}                      Date: ${f.date||new Date().toLocaleDateString('en-IN')}

WITNESSES:
1. Name: _________________ Sign: _________________ Date: _______
   Address: _________________________________________________

2. Name: _________________ Sign: _________________ Date: _______
   Address: _________________________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IDENTIFICATION BY ADVOCATE:
I, ${f.advocate||"__________"}, Advocate, Enrol. No. ${f.enrol||"__________"},
hereby identify the parties who have executed this deed.

Signature: _________________
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 2 — GIFT DEED
  // ═══════════════════════════════════════════════════════════
  gift_deed: {
    name: "Gift Deed — Immoveable Property",
    section: "S.122 Transfer of Property Act 1882",
    court: "Sub-Registrar Office",
    attach_with: ["gift_deed_affidavit","property_documents"],
    keywords: ["gift deed","gift property","122 tpa","uphar deed","property gift deed","gift deed draft"],
    generate: (f={}) => `GIFT DEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This Gift Deed is executed on ${f.date||new Date().toLocaleDateString('en-IN')}

DONOR:
${f.donor||"__________"} S/o ${f.donor_father||"__________"}
Age: ${f.donor_age||"__"} Yrs, R/o: ${f.donor_address||"__________"}
Aadhaar: ${f.donor_aadhaar||"__________"}

DONEE:
${f.donee||"__________"} S/o/D/o ${f.donee_father||"__________"}
Age: ${f.donee_age||"__"} Yrs, R/o: ${f.donee_address||"__________"}
Aadhaar: ${f.donee_aadhaar||"__________"}
Relation with Donor: ${f.relation||"__________"}

PROPERTY:
${f.property_schedule||"(Complete description of property being gifted)"}

GIFT:
The Donor hereby voluntarily and without any
consideration GIVES, GRANTS AND TRANSFERS the above
property absolutely to the Donee out of
${f.gift_reason||"natural love and affection"} for the Donee.

The Donor confirms that this gift is made:
(a) Voluntarily and without any coercion;
(b) Without any consideration;
(c) While being of sound mind.

ACCEPTANCE:
The Donee hereby ACCEPTS this gift gratefully.

POSSESSION: Possession handed over on ${f.date||new Date().toLocaleDateString('en-IN')}.

DONOR: (${f.donor||"__________"})      DONEE: (${f.donee||"__________"})

WITNESSES:
1. _________________ 2. _________________`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 3 — RENT / LEASE AGREEMENT
  // ═══════════════════════════════════════════════════════════
  rent_agreement: {
    name: "Rent / Lease Agreement",
    section: "S.105 Transfer of Property Act 1882",
    court: "Sub-Registrar / Stamp Paper",
    attach_with: ["rent_affidavit"],
    keywords: ["rent agreement","lease agreement","105 tpa","kiraya agreement","rent deed","rental agreement draft","lease deed"],
    generate: (f={}) => `RENT / LEASE AGREEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This Rent Agreement is executed on ${f.date||new Date().toLocaleDateString('en-IN')}

LANDLORD / LESSOR:
${f.landlord||"__________"} S/o ${f.landlord_father||"__________"}
R/o: ${f.landlord_address||"__________"}
Aadhaar: ${f.landlord_aadhaar||"__________"}
(hereinafter "LANDLORD")

TENANT / LESSEE:
${f.tenant||"__________"} S/o ${f.tenant_father||"__________"}
R/o (Permanent): ${f.tenant_perm_address||"__________"}
Aadhaar: ${f.tenant_aadhaar||"__________"}
(hereinafter "TENANT")

PROPERTY DESCRIPTION:
${f.property||"House/Flat/Shop No. __________, Floor __________, Address: __________"}

TERMS AND CONDITIONS:

1.  RENT: Rs. ${f.rent||"__________"}/- per month
    Payable by: ${f.rent_due||"5th"} of every month
    Mode: ${f.payment_mode||"Cash / Online Transfer / Cheque"}

2.  SECURITY DEPOSIT: Rs. ${f.deposit||"__________"}/-
    (Equivalent to ${f.deposit_months||"2"} months rent)
    Refundable on vacating (after deducting damages if any)

3.  TENANCY PERIOD: From ${f.start_date||"__________"}
    To: ${f.end_date||"__________"}
    (${f.period||"11 months"} — renewable by mutual consent)

4.  PURPOSE: The premises shall be used for
    ${f.purpose||"residential / commercial"} purpose only.

5.  MAINTENANCE: ${f.maintenance||"Tenant shall maintain the premises in good condition. Minor repairs (up to Rs. 500/-) by tenant. Major repairs by landlord."}

6.  UTILITIES: ${f.utilities||"Electricity, water, gas charges to be paid by tenant directly."}

7.  SUBLETTING: Tenant shall NOT sublet or assign
    premises without written consent of landlord.

8.  TERMINATION: Either party may terminate by giving
    ${f.notice_period||"30 days"} written notice.

9.  RENT INCREASE: ${f.rent_increase||"Rent shall increase by ___% per year on renewal."}

10. PROHIBITED ACTIVITIES: No illegal/immoral/noisy
    activities on the premises.

11. ENTRY: Landlord may enter premises for inspection
    with ${f.entry_notice||"24 hours"} prior notice.

LANDLORD: (${f.landlord||"__________"})      TENANT: (${f.tenant||"__________"})

WITNESSES:
1. Name: _________________ Sign: _________________
2. Name: _________________ Sign: _________________`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 4 — MEMORANDUM OF UNDERSTANDING (MOU)
  // ═══════════════════════════════════════════════════════════
  mou: {
    name: "Memorandum of Understanding (MOU)",
    keywords: ["mou","memorandum of understanding","mou draft","agreement mou","samjhauta patra"],
    generate: (f={}) => `MEMORANDUM OF UNDERSTANDING (MOU)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This Memorandum of Understanding is entered into on
${f.date||new Date().toLocaleDateString('en-IN')} BETWEEN:

PARTY 1:
${f.party1||"__________"} ${f.party1_type||"(Individual/Company/Firm)"}
${f.party1_address||"__________"}
Represented by: ${f.party1_rep||"__________"}
(hereinafter "PARTY 1" or "${f.party1_short||"First Party"}")

AND

PARTY 2:
${f.party2||"__________"} ${f.party2_type||"(Individual/Company/Firm)"}
${f.party2_address||"__________"}
Represented by: ${f.party2_rep||"__________"}
(hereinafter "PARTY 2" or "${f.party2_short||"Second Party"}")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PURPOSE:
${f.purpose||"The parties hereby agree to __________ for the purpose of __________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TERMS:

1.  SCOPE OF COOPERATION:
    ${f.scope||"(Describe what parties will do together)"}

2.  OBLIGATIONS OF PARTY 1:
    ${f.party1_obligations||"(a) __________ (b) __________ (c) __________"}

3.  OBLIGATIONS OF PARTY 2:
    ${f.party2_obligations||"(a) __________ (b) __________ (c) __________"}

4.  FINANCIAL TERMS:
    ${f.financial||"(Revenue sharing / Investment / Fees — describe)"}

5.  INTELLECTUAL PROPERTY:
    ${f.ip||"All intellectual property created during this MOU shall belong to __________."}

6.  CONFIDENTIALITY:
    Both parties agree to keep all information
    exchanged under this MOU confidential.

7.  DURATION:
    This MOU shall be valid from ${f.start_date||"__________"}
    to ${f.end_date||"__________"} and may be renewed by mutual consent.

8.  TERMINATION:
    Either party may terminate this MOU by giving
    ${f.notice_period||"30 days"} written notice.

9.  DISPUTE RESOLUTION:
    Disputes shall be resolved by ${f.dispute_resolution||"mutual negotiation / arbitration / courts of __________"}.

10. GOVERNING LAW:
    This MOU shall be governed by the laws of India.

11. NON-BINDING NATURE:
    This MOU is ${f.binding_nature||"not legally binding / a statement of intent only"} unless specifically agreed otherwise.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IN WITNESS WHEREOF:

PARTY 1: (${f.party1_rep||"__________"})       PARTY 2: (${f.party2_rep||"__________"})
For ${f.party1||"__________"}                  For ${f.party2||"__________"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}                     Date: ${f.date||new Date().toLocaleDateString('en-IN')}

WITNESSES:
1. _________________ 2. _________________`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 5 — PARTNERSHIP DEED
  // ═══════════════════════════════════════════════════════════
  partnership_deed: {
    name: "Partnership Deed",
    section: "Partnership Act 1932",
    keywords: ["partnership deed","partnership agreement","sanjha kaarobaar","partnership deed draft","firm deed"],
    generate: (f={}) => `PARTNERSHIP DEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This Partnership Deed is executed on ${f.date||new Date().toLocaleDateString('en-IN')}

BETWEEN:

1. ${f.partner1||"__________"} S/o ${f.p1_father||"__________"}
   Age: ${f.p1_age||"__"} Yrs, R/o: ${f.p1_address||"__________"}

2. ${f.partner2||"__________"} S/o ${f.p2_father||"__________"}
   Age: ${f.p2_age||"__"} Yrs, R/o: ${f.p2_address||"__________"}

3. ${f.partner3||""} ${f.partner3?("S/o "+(f.p3_father||"__________")):""}
   ${f.partner3?("R/o: "+(f.p3_address||"__________")):""}

(All hereinafter collectively referred to as "PARTNERS")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  FIRM NAME: The firm shall be known as
    "${f.firm_name||"M/s __________"}"

2.  BUSINESS: The partners shall carry on the business
    of ${f.business||"__________"} and such other business as
    may be mutually agreed upon.

3.  PLACE OF BUSINESS: ${f.business_address||"__________"}

4.  COMMENCEMENT: From ${f.start_date||"__________"}

5.  DURATION: ${f.duration||"At will / for a fixed period of __________ years"}

6.  CAPITAL CONTRIBUTION:
    ┌─────────────────────────────────────────────────┐
    │ Partner 1 (${f.partner1||"__________"}): Rs. ${f.p1_capital||"__________"}/- │
    │ Partner 2 (${f.partner2||"__________"}): Rs. ${f.p2_capital||"__________"}/- │
    │ Partner 3 (${f.partner3||"__________"}): Rs. ${f.p3_capital||"__________"}/- │
    │ TOTAL CAPITAL:           Rs. ${f.total_capital||"__________"}/- │
    └─────────────────────────────────────────────────┘

7.  PROFIT AND LOSS SHARING:
    ┌─────────────────────────────────────────────────┐
    │ Partner 1 (${f.partner1||"__________"}): ${f.p1_share||"__"}%              │
    │ Partner 2 (${f.partner2||"__________"}): ${f.p2_share||"__"}%              │
    │ Partner 3 (${f.partner3||"__________"}): ${f.p3_share||"__"}%              │
    └─────────────────────────────────────────────────┘

8.  MANAGEMENT: ${f.management||"All partners shall jointly manage the firm. Day-to-day management by __________. Major decisions by majority/unanimous consent."}

9.  SALARY/REMUNERATION: ${f.salary||"No salary to partners / Partner 1 shall receive Rs. ________/- pm as working partner remuneration."}

10. INTEREST ON CAPITAL: ${f.interest||"Interest @ ____% p.a. payable on capital contribution."}

11. BANKING: The firm shall have account at
    ${f.bank||"__________"} Bank. Operated by ${f.bank_operation||"any one / any two partners jointly"}.

12. BOOKS OF ACCOUNTS: Maintained at firm's office.
    Financial year: April 1 to March 31.

13. DISSOLUTION: The firm may be dissolved:
    (a) By mutual consent of all partners;
    (b) By death/insolvency of a partner;
    (c) By order of court.

14. DISPUTE RESOLUTION: Disputes to be referred
    to arbitration under Arbitration Act 1996.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SIGNED BY PARTNERS:

(${f.partner1||"__________"})     (${f.partner2||"__________"})     (${f.partner3||"__________"})
PARTNER 1              PARTNER 2              PARTNER 3

WITNESSES:
1. _________________ 2. _________________`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 6 — POWER OF ATTORNEY (General)
  // ═══════════════════════════════════════════════════════════
  power_of_attorney: {
    name: "General Power of Attorney",
    keywords: ["power of attorney","poa","general poa","mukhtyarnaama","power of attorney draft","poa draft"],
    generate: (f={}) => `GENERAL POWER OF ATTORNEY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.principal||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"},
Aadhaar: ${f.aadhaar||"__________"} (hereinafter "PRINCIPAL")

DO HEREBY APPOINT AND CONSTITUTE:

${f.attorney||"__________"} S/o ${f.attorney_father||"__________"},
Age: ${f.attorney_age||"__"} Yrs, R/o: ${f.attorney_address||"__________"}
Relation: ${f.relation||"__________"}
(hereinafter "ATTORNEY")

as my true and lawful attorney to do all or any of
the following acts, deeds and things on my behalf:

1.  PROPERTY MATTERS:
    ${f.property_powers||`(a) To sell, purchase, mortgage or lease my property
    (b) To execute sale deeds, mortgage deeds and other documents
    (c) To receive sale consideration and give receipts`}

2.  LEGAL MATTERS:
    ${f.legal_powers||`(a) To file, conduct and settle legal cases on my behalf
    (b) To appoint advocates and sign vakalatnamas
    (c) To appear before all courts and authorities`}

3.  FINANCIAL MATTERS:
    ${f.financial_powers||`(a) To operate my bank accounts
    (b) To receive payments and give receipts
    (c) To execute cheques and financial instruments`}

4.  REGISTRATION:
    To present, execute and register documents before
    the Sub-Registrar or any registration authority.

5.  GENERAL:
    ${f.general_powers||"To do all such acts as may be necessary and incidental to the above."}

I hereby ratify and confirm all acts done by my said
Attorney in pursuance of this Power of Attorney.

This Power of Attorney is IRREVOCABLE for ${f.irrevocable_period||"___ years"} /
REVOCABLE at will.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Place: ${f.place||"__________"}

                                    (${f.principal||"__________"})
                                          PRINCIPAL

IDENTIFIED BY ADVOCATE: ${f.advocate||"__________"}

WITNESSES:
1. _________________ 2. _________________

Notarized / Registered Before Sub-Registrar
Document No.: _____________ Date: _____________`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 7 — AGREEMENT TO SELL
  // ═══════════════════════════════════════════════════════════
  agreement_to_sell: {
    name: "Agreement to Sell / Sale Agreement",
    section: "S.54 TPA 1882 / Contract Act 1872",
    keywords: ["agreement to sell","sale agreement","property agreement","byana","advance payment agreement","bayana deed","property agreement draft"],
    generate: (f={}) => `AGREEMENT TO SELL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This Agreement to Sell is executed on ${f.date||new Date().toLocaleDateString('en-IN')}

VENDOR: ${f.vendor||"__________"} S/o ${f.vendor_father||"__________"}
R/o: ${f.vendor_address||"__________"} (hereinafter "VENDOR")

PURCHASER: ${f.purchaser||"__________"} S/o ${f.purchaser_father||"__________"}
R/o: ${f.purchaser_address||"__________"} (hereinafter "PURCHASER")

PROPERTY: ${f.property||"(Description of property)"}

TOTAL SALE PRICE: Rs. ${f.total_price||"__________"}/-

PAYMENT TERMS:
1. Advance/Token Amount paid today: Rs. ${f.advance||"__________"}/-
   (By: ${f.advance_mode||"Cash/Cheque No. __________"})
2. Balance Amount: Rs. ${f.balance||"__________"}/-
   To be paid at time of registry/sale deed execution.

COMPLETION DATE: Sale deed to be executed on or before
${f.completion_date||"__________"}.

CONDITIONS:
1. Vendor shall clear all dues, loans, encumbrances
   before sale deed execution.
2. Vendor shall provide clear title documents.
3. If Vendor fails to execute sale deed — advance
   money shall be returned with ${f.penalty_vendor||"double"} the advance.
4. If Purchaser fails to complete — advance shall
   be forfeited by Vendor.

VENDOR: (${f.vendor||"__________"})      PURCHASER: (${f.purchaser||"__________"})

WITNESSES:
1. _________________ 2. _________________`
  },

};
