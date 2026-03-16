// ════════════════════════════════════════════════════════════
// PROPERTY + CONSUMER + RTI FORMATS PACKET
// Sale Deed, Gift Deed, Rent Agreement, RERA, Consumer, RTI
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: { packet: "property_consumer_rti_formats", total_formats: 10 },

  // ── 1. SALE DEED ─────────────────────────────────────────
  sale_deed: {
    name: "Sale Deed — S.54 Transfer of Property Act",
    section: "S.54 TPA 1882 / Registration Act 1908",
    court: "Sub-Registrar Office",
    attach_with: ["sale_deed_affidavit","encumbrance_certificate","mutation_application"],
    keywords: ["sale deed","property sale","54 tpa","registry karna","sale deed draft","property bikri","sampatti bikri"],
    generate: (f={}) => `SALE DEED

THIS DEED OF SALE is executed on ${f.date||new Date().toLocaleDateString('en-IN')}
at ${f.place||"__________"}.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VENDOR / SELLER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${f.vendor||"__________"} S/o ${f.vendor_father||"__________"}
Age: ${f.vendor_age||"__"} Yrs, Occupation: ${f.vendor_occ||"__________"}
R/o: ${f.vendor_address||"__________"}
Aadhaar No.: ${f.vendor_aadhaar||"__________"}
PAN No.: ${f.vendor_pan||"__________"}
(Hereinafter referred to as "VENDOR" which expression
shall include heirs, legal representatives, successors,
assigns and attorneys)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURCHASER / BUYER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${f.purchaser||"__________"} S/o ${f.purchaser_father||"__________"}
Age: ${f.purchaser_age||"__"} Yrs, Occupation: ${f.purchaser_occ||"__________"}
R/o: ${f.purchaser_address||"__________"}
Aadhaar No.: ${f.purchaser_aadhaar||"__________"}
PAN No.: ${f.purchaser_pan||"__________"}
(Hereinafter referred to as "PURCHASER" which expression
shall include heirs, legal representatives, successors,
assigns and attorneys)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCHEDULE OF PROPERTY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${f.property_desc||`All that piece and parcel of land/building/flat bearing
Plot/House/Flat No. __________, situated at __________,
Ward No. / Khasra No. __________,
Area: __________ Sq.Ft. / __________ Sq.Mtr. / __________ Acres,
bounded as follows:
North: __________    South: __________
East:  __________    West:  __________
Municipal/Khasra/Survey No.: __________
Registration District: __________`}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RECITALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. HOW VENDOR ACQUIRED TITLE:
   ${f.title_history||"The Vendor acquired the above property by purchase vide registered Sale Deed dated __________ registered as Doc. No. __________ / by inheritance / by gift deed dated __________"}

2. TITLE IS CLEAR: The property is free from all
   encumbrances, mortgages, charges, liens, claims,
   disputes, litigation, court orders and attachments.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOW THIS DEED WITNESSETH:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  CONSIDERATION: In consideration of the sum of
    Rs. ${f.amount||"__________"}/- (Rupees ${f.amount_words||"__________"}
    Only), paid by the Purchaser to the Vendor as
    follows:
    • By cash:                  Rs. ${f.cash||"__________"}/-
    • By cheque/NEFT/DD:        Rs. ${f.cheque_amount||"__________"}/-
    • By loan (if any):         Rs. ${f.loan||"__________"}/-
    Total:                      Rs. ${f.amount||"__________"}/-

    The Vendor hereby acknowledges receipt of the full
    consideration amount.

2.  TRANSFER: The Vendor hereby sells, transfers,
    conveys and assures the Schedule Property unto the
    Purchaser absolutely and forever.

3.  POSSESSION: The Vendor has handed over vacant and
    peaceful physical possession of the Schedule Property
    to the Purchaser on this date.

4.  COVENANT OF TITLE: The Vendor covenants that:
    (a) He has absolute right and full power to sell;
    (b) Property is free from encumbrances;
    (c) Vendor will execute any further documents for
        assuring title to Purchaser.

5.  INDEMNITY: The Vendor shall indemnify the Purchaser
    against all claims, demands and liabilities of
    third parties.

6.  STAMP DUTY: Stamp duty of Rs. ${f.stamp_duty||"__________"}/-
    has been paid. Registration charges: Rs. ${f.reg_charges||"__________"}/-

IN WITNESS WHEREOF the parties hereto have set their
respective hands and signatures on the date first
above written.

(${f.vendor||"__________"})              (${f.purchaser||"__________"})
    VENDOR                                  PURCHASER

WITNESSES:
1. Name: ________________  Sign: ________________  Date: _______
   Address: ________________________________________
2. Name: ________________  Sign: ________________  Date: _______
   Address: ________________________________________`
  },

  // ── 2. GIFT DEED ─────────────────────────────────────────
  gift_deed: {
    name: "Gift Deed — S.122 Transfer of Property Act",
    section: "S.122 TPA 1882",
    court: "Sub-Registrar Office",
    keywords: ["gift deed","sampatti uphar","122 tpa","gift property","gift deed draft"],
    generate: (f={}) => `GIFT DEED

THIS DEED OF GIFT is executed on ${f.date||new Date().toLocaleDateString('en-IN')}
at ${f.place||"__________"}.

DONOR:
${f.donor||"__________"} S/o ${f.donor_father||"__________"}
Age: ${f.donor_age||"__"} Yrs, R/o: ${f.donor_address||"__________"}

DONEE / RECIPIENT:
${f.donee||"__________"} S/o ${f.donee_father||"__________"}
Age: ${f.donee_age||"__"} Yrs, R/o: ${f.donee_address||"__________"}
Relation with Donor: ${f.relation||"Son / Daughter / Wife / Other"}

SCHEDULE OF PROPERTY (GIFTED):
${f.property||"(Full description of property being gifted)"}

NOW THIS DEED WITNESSETH:

1.  The Donor, out of natural love and affection for
    the Donee, hereby GIFTS the above Schedule Property
    to the Donee absolutely and forever WITHOUT ANY
    CONSIDERATION.

2.  The Donor has delivered possession of the property
    to the Donee on this date.

3.  The Donee accepts this gift.

4.  The Donor covenants that he has full right to make
    this gift and the property is free from encumbrances.

5.  THIS GIFT IS IRREVOCABLE except as provided by law.

(${f.donor||"__________"})              (${f.donee||"__________"})
    DONOR                                   DONEE

WITNESSES:
1. Name: ________________  Sign: ________________
2. Name: ________________  Sign: ________________`
  },

  // ── 3. RENT / LEASE AGREEMENT ────────────────────────────
  rent_agreement: {
    name: "Rent Agreement / Lease Deed",
    section: "S.105 Transfer of Property Act 1882",
    keywords: ["rent agreement","lease deed","kiraya agreement","105 tpa","rent agreement draft","tenancy agreement"],
    generate: (f={}) => `RENT AGREEMENT / LEASE DEED

THIS AGREEMENT is made on ${f.date||new Date().toLocaleDateString('en-IN')}
between:

LANDLORD / LESSOR:
${f.landlord||"__________"} S/o ${f.landlord_father||"__________"}
R/o: ${f.landlord_address||"__________"}
                                        ...LANDLORD
AND

TENANT / LESSEE:
${f.tenant||"__________"} S/o ${f.tenant_father||"__________"}
R/o: ${f.tenant_address||"__________"}
Aadhaar No.: ${f.tenant_aadhaar||"__________"}
                                        ...TENANT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROPERTY: ${f.property||"House No. / Flat No. __________, Area: __________, Address: __________"}

TERMS AND CONDITIONS:

1.  RENT: Rs. ${f.rent||"__________"}/- per month payable
    by ${f.rent_due||"5th"} of each month.

2.  TENURE: From ${f.from_date||"__________"} to ${f.to_date||"__________"}
    (${f.tenure||"11 months"} — renewable by mutual consent).

3.  SECURITY DEPOSIT: Rs. ${f.deposit||"__________"}/- refundable
    at end of tenancy (subject to deductions if any).

4.  PURPOSE: Property to be used for ${f.purpose||"residential / commercial"} purpose only.

5.  MAINTENANCE: Tenant responsible for minor repairs.
    Major repairs: Landlord's responsibility.

6.  UTILITIES: Electricity, water, gas bills payable
    by ${f.utilities||"Tenant"}.

7.  SUBLETTING: Tenant shall NOT sublet without
    prior written consent of Landlord.

8.  TERMINATION: Either party may terminate with
    ${f.notice_period||"1 month"} written notice.

9.  PROHIBITED ACTS: Tenant shall not carry out any
    illegal activities on the premises.

10. POLICE VERIFICATION: Tenant shall get police
    verification done within ${f.police_verification||"7 days"}.

(${f.landlord||"__________"})              (${f.tenant||"__________"})
    LANDLORD                                  TENANT

WITNESSES:
1. _________________ 2. _________________`
  },

  // ── 4. CONSUMER COMPLAINT ────────────────────────────────
  consumer_complaint: {
    name: "Consumer Complaint — Consumer Protection Act 2019",
    section: "S.35 Consumer Protection Act 2019",
    court: "District Consumer Commission",
    attach_with: ["consumer_affidavit","purchase_receipt","correspondence"],
    keywords: ["consumer complaint","consumer forum","defective product","deficiency service","consumer court","35 consumer act","consumer case"],
    generate: (f={}) => `IN THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION
${(f.district||"__________").toUpperCase()}, ${f.state||"__________"}

CONSUMER COMPLAINT NO. _____ OF ${f.year||new Date().getFullYear()}

${f.complainant||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
                                        ...COMPLAINANT
VERSUS

1. ${f.op1||"__________"} (${f.op1_desc||"Manufacturer / Dealer / Service Provider"})
   ${f.op1_address||"__________"}

2. ${f.op2||"__________"} (${f.op2_desc||"Company / Agency"})
   ${f.op2_address||"__________"}
                                        ...OPPOSITE PARTY(IES)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONSUMER COMPLAINT U/S 35 CONSUMER PROTECTION ACT, 2019
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.   The complainant is a CONSUMER as defined under
     Section 2(7) of the Consumer Protection Act, 2019.

2.   PURCHASE / SERVICE DETAILS:
     Product/Service:    ${f.product||"__________"}
     Date of Purchase:   ${f.purchase_date||"__________"}
     Invoice/Bill No.:   ${f.bill_no||"__________"}
     Amount Paid:        Rs. ${f.amount||"__________"}/-
     Mode of Payment:    ${f.payment_mode||"Cash / Card / UPI / Online"}
     Warranty Period:    ${f.warranty||"__________"}

3.   DEFICIENCY / DEFECT:

     (i)  ${f.defect1||"The product was found to be defective / not working as promised because __________"}

     (ii) ${f.defect2||"The service was deficient in that __________"}

     (iii)The complainant complained to the OP on
          ${f.complaint_date||"__________"} but OP ${f.op_response||"failed to respond / gave unsatisfactory response / refused to replace/refund"}.

4.   LEGAL NOTICE:

     The complainant issued a legal notice dated
     ${f.notice_date||"__________"} but the OP did not
     comply within the stipulated period.

5.   CLAIM / LOSS:
     ┌──────────────────────────────────────────────┐
     │ Refund of purchase amount: Rs. ${f.refund||"__________"}/-│
     │ Compensation for deficiency: Rs. ${f.comp||"__________"}/-│
     │ Mental agony & harassment:   Rs. ${f.mental||"__________"}/-│
     │ Litigation costs:            Rs. ${f.costs||"__________"}/-│
     │ TOTAL:                       Rs. ${f.total||"__________"}/-│
     └──────────────────────────────────────────────┘

PRAYER:
(a) Hold the OP guilty of deficiency in service /
    unfair trade practice;
(b) Direct OP to replace/repair/refund Rs. ${f.refund||"__________"}/-;
(c) Award compensation of Rs. ${f.comp||"__________"}/- for
    mental agony and harassment;
(d) Award litigation costs of Rs. ${f.costs||"__________"}/-;
(e) Pass any other order as deemed fit.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.advocate||"__________"})                   (${f.complainant||"__________"})
Advocate for Complainant                        Complainant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I, ${f.complainant||"__________"}, verify that contents are true.
Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.
                              (${f.complainant||"__________"}) — COMPLAINANT`
  },

  // ── 5. RTI APPLICATION ────────────────────────────────────
  rti_application: {
    name: "RTI Application — S.6 RTI Act 2005",
    section: "S.6 Right to Information Act 2005",
    court: "Public Authority (Department)",
    attach_with: ["postal_order_10rs"],
    keywords: ["rti application","rti file karna","right to information","suchna ka adhikar","6 rti act","rti draft"],
    generate: (f={}) => `APPLICATION UNDER SECTION 6(1) OF THE
RIGHT TO INFORMATION ACT, 2005
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE CENTRAL/STATE PUBLIC INFORMATION OFFICER (CPIO/SPIO)
${f.department||"__________"}
${f.department_address||"__________"}

APPLICANT DETAILS:
Name:         ${f.name||"__________"}
S/o D/o W/o:  ${f.father||"__________"}
Address:      ${f.address||"__________"}
Mobile:       ${f.mobile||"__________"}
Email:        ${f.email||"__________"} (optional)
Aadhaar No.:  ${f.aadhaar||"__________"} (optional)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMATION SOUGHT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ${f.q1||"(First query — be specific and clear about what information is needed)"}

2. ${f.q2||"(Second query)"}

3. ${f.q3||"(Third query if any)"}

4. ${f.q4||"(Fourth query if any)"}

5. Certified copies of the following documents:
   ${f.docs||"(List documents needed)"}

TIME PERIOD / REFERENCE: ${f.period||"(Specify time period or reference number)"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRESCRIBED FEE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Application fee of Rs. 10/- enclosed by way of:
☐ Indian Postal Order No. __________
☐ Cash (Receipt to be obtained)
☐ Demand Draft / Pay Order
☐ Court Fee Stamp

NOTE: BPL applicants are exempt from fee (BPL card copy attached).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please provide the above information within 30 (Thirty)
days as mandated under Section 7(1) of the RTI Act, 2005.

In case of information relating to life or liberty,
please provide within 48 hours as per S.7(1) RTI Act.

If the information is held by another public authority,
please transfer this application as per S.6(3) RTI Act.

                              (${f.name||"__________"})
                              Applicant — Signature`
  },

  // ── 6. RTI FIRST APPEAL ───────────────────────────────────
  rti_first_appeal: {
    name: "RTI First Appeal — S.19(1) RTI Act",
    section: "S.19(1) Right to Information Act 2005",
    keywords: ["rti first appeal","rti appeal","19 rti","rti appeal karna","first appeal rti"],
    generate: (f={}) => `FIRST APPEAL UNDER SECTION 19(1)
RIGHT TO INFORMATION ACT, 2005
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE FIRST APPELLATE AUTHORITY
${f.faa_designation||"Joint Secretary / Additional Director"}
${f.department||"__________"}
${f.department_address||"__________"}

APPELLANT: ${f.name||"__________"}, R/o: ${f.address||"__________"}
Mobile: ${f.mobile||"__________"}

SUBJECT: First Appeal against Order/Response of CPIO
dated ${f.cpio_date||"__________"} in RTI Application
No. ${f.rti_no||"__________"} dated ${f.rti_date||"__________"}.

GROUNDS OF APPEAL:

1.  The CPIO vide reply dated ${f.cpio_date||"__________"}
    ${f.cpio_action||"refused to provide information / provided incomplete information / did not reply within 30 days / provided wrong information"}.

2.  GROUNDS:

    (i)  ${f.ground1||"The information sought is not exempt under any provision of S.8 RTI Act."}

    (ii) ${f.ground2||"The CPIO failed to reply within the stipulated 30-day period which amounts to deemed refusal."}

    (iii)${f.ground3||"The information withheld is in public interest and must be disclosed."}

    (iv) ${f.ground4||"(Specific ground)"}

PRAYER:
(a) Allow this appeal;
(b) Direct CPIO to provide complete information
    within ${f.days||"15"} days;
(c) Impose penalty on CPIO if applicable.

                              (${f.name||"__________"})
                              Appellant`
  },

  // ── 7. RERA COMPLAINT ─────────────────────────────────────
  rera_complaint: {
    name: "RERA Complaint — S.31 RERA Act 2016",
    section: "S.31 Real Estate (Regulation & Development) Act 2016",
    court: "RERA Authority / Adjudicating Officer",
    attach_with: ["rera_affidavit","agreement_for_sale","payment_receipts"],
    keywords: ["rera complaint","rera builder complaint","31 rera","flat possession delay","builder complaint rera"],
    generate: (f={}) => `BEFORE THE REAL ESTATE REGULATORY AUTHORITY
${(f.state||"__________").toUpperCase()}

COMPLAINT NO. _____ OF ${f.year||new Date().getFullYear()}

${f.complainant||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...COMPLAINANT/ALLOTTEE
VERSUS

M/s ${f.builder||"__________"}
${f.builder_address||"__________"}
RERA Registration No.: ${f.rera_reg_no||"__________"}
                                        ...RESPONDENT/PROMOTER

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLAINT U/S 31 REAL ESTATE (REGULATION &
DEVELOPMENT) ACT, 2016
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  AGREEMENT FOR SALE:

    The complainant entered into an Agreement for
    Sale dated ${f.agreement_date||"__________"} with the
    Respondent for purchase of:
    Flat No. ${f.flat_no||"__________"}, Tower/Block: ${f.tower||"__________"}
    Floor: ${f.floor||"__________"}, Area: ${f.area||"__________"} Sq.Ft.
    Project: ${f.project||"__________"}
    Location: ${f.project_location||"__________"}
    Agreed Price: Rs. ${f.price||"__________"}/-

2.  AMOUNT PAID:
    The complainant has paid Rs. ${f.paid||"__________"}/-
    (${f.percent||"__"}% of total amount) as detailed below:
    ${f.payment_details||"Date: __________, Amount: Rs. __________/-"}

3.  PROMISED POSSESSION DATE:
    As per agreement, possession was to be given by
    ${f.possession_date||"__________"}. However, possession
    has not been given till date.

4.  GRIEVANCE:

    ${f.grievance||`(i)  Delay in possession beyond agreed date
    (ii) Poor construction quality / structural defects
    (iii)Deviation from sanctioned plan
    (iv) Failure to provide promised amenities
    (v)  Other: __________`}

5.  PRIOR CORRESPONDENCE:
    The complainant wrote to the Respondent on
    ${f.complaint_date||"__________"} but received no
    satisfactory response.

RELIEF SOUGHT:

(a) Direct Respondent to hand over possession of
    Flat No. ${f.flat_no||"__________"} with OC/CC;

(b) Direct Respondent to pay interest @ SBI
    highest lending rate on Rs. ${f.paid||"__________"}/-
    from ${f.possession_date||"__________"} till possession;

(c) Direct Respondent to rectify defects within
    ${f.rectify_period||"30"} days;

(d) Direct Respondent to pay compensation of
    Rs. ${f.compensation||"__________"}/- for mental agony;

(e) Pass any other order as deemed fit.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                              (${f.complainant||"__________"})
                              Complainant`
  },

  // ── 8. MUTATION APPLICATION ───────────────────────────────
  mutation_application: {
    name: "Mutation Application / Dakhil Kharij",
    keywords: ["mutation application","dakhil kharij","property mutation","naam mutation","namantaran"],
    generate: (f={}) => `TO,
THE TEHSILDAR / NAIB TEHSILDAR
${f.tehsil||"__________"} Tehsil, District: ${f.district||"__________"}

DATE: ${f.date||new Date().toLocaleDateString('en-IN')}

SUBJECT: Application for Mutation of Property in
Revenue Records — Khasra/Plot No. ${f.khasra_no||"__________"}
Village/Ward: ${f.village||"__________"}

Sir/Madam,

I, ${f.applicant||"__________"} S/o ${f.father||"__________"},
R/o: ${f.address||"__________"}, hereby request that my
name may be mutated in the revenue records of the
above property on the following basis:

BASIS OF OWNERSHIP:
☐ Purchase — Sale Deed dated ${f.sale_deed_date||"__________"}
   Registered as Doc. No. ${f.doc_no||"__________"} at
   Sub-Registrar Office ${f.sub_registrar||"__________"}

☐ Inheritance — Death of ${f.deceased||"__________"} on
   ${f.death_date||"__________"} (Death Certificate attached)

☐ Gift — Gift Deed dated ${f.gift_deed_date||"__________"}

☐ Court Order — Order dated ${f.order_date||"__________"}

PROPERTY DETAILS:
Khasra/Plot/Survey No.: ${f.khasra_no||"__________"}
Village/Mohalla:        ${f.village||"__________"}
Area:                   ${f.area||"__________"}
Present Owner's Name:   ${f.present_owner||"__________"}

DOCUMENTS ATTACHED:
1. ${f.doc1||"Registered Sale Deed / Inheritance Certificate"}
2. ${f.doc2||"Identity Proof (Aadhaar)"}
3. ${f.doc3||"Previous Khatoni / Record of Rights"}
4. ${f.doc4||"Court fee stamp of Rs. __________"}

I request that mutation may kindly be made in my
name at the earliest.

                              (${f.applicant||"__________"})
                              Applicant — Signature`
  },

};
