// ════════════════════════════════════════════════════════════
// APPEAL & WRIT FORMATS PACKET
// Criminal Appeal, Civil Appeal, Writ Petition, RERA, Service
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: {
    packet: "appeal_formats",
    total_formats: 9,
    covers: ["Criminal Appeal","Civil First Appeal","Writ Petition HC","Writ Petition SC","RERA Complaint","Service Matter","Execution Petition","Review Petition","Affidavit Appeal"]
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 1 — CRIMINAL APPEAL (Sessions/HC)
  // ═══════════════════════════════════════════════════════════
  criminal_appeal: {
    name: "Criminal Appeal",
    section: "S.413/415 BNSS 2023 / S.374 CrPC",
    court: "Sessions Court / High Court",
    attach_with: ["appeal_affidavit","impugned_judgment_copy","trial_court_record"],
    keywords: ["criminal appeal","413 bnss","374 crpc","appeal against conviction","criminal appeal draft","faisle ke khilaf appeal"],
    generate: (f={}) => `IN THE COURT OF THE SESSIONS JUDGE /
IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}

CRIMINAL APPEAL NO. _____ OF ${f.year||new Date().getFullYear()}

${f.appellant||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
(Convicted by: ${f.lower_court||"__________"} on ${f.conviction_date||"__________"})
                                        ...APPELLANT
VERSUS

STATE OF ${(f.state||"__________").toUpperCase()}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRIMINAL APPEAL U/S ${f.section||"413 BNSS 2023"} AGAINST
JUDGMENT AND ORDER DATED ${f.judgment_date||"__________"} PASSED BY
${f.lower_court||"__________"} IN ${f.lower_court_case||"__________"}
CONVICTING THE APPELLANT U/S ${f.convicted_u_s||"__________"} BNS 2023
AND SENTENCING HIM TO ${f.sentence||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.  IMPUGNED JUDGMENT:
    The appellant was convicted by ${f.lower_court||"__________"}
    in Case No. ${f.lower_court_case||"__________"} vide judgment
    dated ${f.judgment_date||"__________"} for offence(s) U/S
    ${f.convicted_u_s||"__________"} BNS 2023 and sentenced to
    ${f.sentence||"__________"}. A copy of the judgment is
    attached as Annexure A-1.

2.  BRIEF FACTS OF THE CASE:
    ${f.brief_facts||"(State the facts of the case briefly)"}

3.  GROUNDS OF APPEAL:

    (i)  That the learned trial court ERRED in
         convicting the appellant as the prosecution
         has failed to prove the case beyond reasonable
         doubt.

    (ii) That the impugned judgment is PERVERSE and
         against the weight of evidence on record.

    (iii)That the learned trial court failed to properly
         appreciate the following material evidence:
         ${f.evidence_ignored||"(State evidence not considered)"}

    (iv) That the witness(es) examination was not
         properly conducted and the ${f.witness_issue||"__________"}.

    (v)  That the conviction is based on mere suspicion
         and surmise without any reliable evidence.

    (vi) That the identification parade was not
         conducted as per law. ${f.id_parade||""}

    (vii)That the learned trial court overlooked the
         following important legal aspects:
         ${f.legal_error||"(Specific legal errors in the judgment)"}

    (viii)That the sentence awarded is EXCESSIVE and
          harsh given the facts and circumstances.

4.  SUSPENSION OF SENTENCE:
    The appellant is in custody / on bail. An application
    for suspension of sentence is filed separately.

                        *** PRAYER ***

    It is most humbly prayed that this Court may:

    (a) ALLOW this appeal and SET ASIDE the impugned
        judgment and order of conviction;

    (b) ACQUIT the appellant of all charges;

    ALTERNATIVELY:
    (c) REDUCE the sentence to the period already
        undergone;

    (d) Suspend sentence and release on bail pending
        appeal;

    (e) Pass any other order as deemed fit.

Place: ${f.court_location||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Appellant
                                    Enrol. No.: ${f.enrol||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.appellant||"__________"}, verify that the contents of the
above appeal are true and correct.

Verified at ${f.court_location||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.appellant||"__________"})
                                          APPELLANT`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 2 — CIVIL FIRST APPEAL
  // ═══════════════════════════════════════════════════════════
  civil_appeal: {
    name: "Civil First Appeal",
    section: "S.96 CPC 1908",
    court: "District Court / High Court",
    attach_with: ["appeal_affidavit","impugned_decree_copy"],
    keywords: ["civil appeal","96 cpc","first appeal civil","civil case appeal","decree appeal","civil faisle appeal"],
    generate: (f={}) => `IN THE COURT OF THE DISTRICT JUDGE /
IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}

CIVIL APPEAL NO. _____ OF ${f.year||new Date().getFullYear()}

${f.appellant||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
(Originally: ${f.original_status||"Plaintiff/Defendant"} in ${f.lower_court_case||"__________"})
                                        ...APPELLANT
VERSUS

${f.respondent||"__________"} S/o ${f.r_father||"__________"}
R/o: ${f.r_address||"__________"}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FIRST APPEAL U/S 96 CPC AGAINST JUDGMENT AND DECREE
DATED ${f.decree_date||"__________"} PASSED BY ${f.lower_court||"__________"}
IN ${f.lower_court_case||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  IMPUGNED DECREE: Judgment and decree dated
    ${f.decree_date||"__________"} passed by ${f.lower_court||"__________"}
    in ${f.lower_court_case||"__________"} whereby the learned court
    ${f.decree_detail||"dismissed the suit / decreed the suit against the appellant"}.
    Annexed as Annexure A-1.

2.  BRIEF FACTS:
    ${f.brief_facts||"(State brief facts of the original suit)"}

3.  GROUNDS OF APPEAL:

    (i)  That the impugned judgment is erroneous and
         contrary to law and evidence on record.

    (ii) That the learned trial court erred in
         ${f.main_error||"appreciating the evidence / applying correct law / considering important documents"}.

    (iii)That the trial court failed to consider
         ${f.ignored_evidence||"(evidence/legal points not considered)"}.

    (iv) That the finding of fact is PERVERSE and against
         the weight of evidence.

    (v)  That ${f.other_grounds||"(other specific legal errors)"}

PRAYER:
(a) Allow this appeal and set aside impugned judgment;
(b) Pass decree in favour of appellant;
(c) Award costs.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Appellant`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 3 — WRIT PETITION (HIGH COURT)
  // ═══════════════════════════════════════════════════════════
  writ_petition_hc: {
    name: "Writ Petition — High Court Article 226",
    section: "Article 226 Constitution of India",
    court: "High Court",
    attach_with: ["writ_affidavit","impugned_order","cause_of_action_docs"],
    keywords: ["writ petition","article 226","hc writ","writ petition hc","high court writ petition","writ petition draft"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
AT ${f.hc||"__________"}

WRIT PETITION (${f.writ_type||"CIVIL/CRIMINAL"}) NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
                                        ...PETITIONER
VERSUS

1. ${f.r1||"UNION OF INDIA / STATE OF __________"}
   Through: ${f.r1_rep||"Principal Secretary, __________"}

2. ${f.r2||"__________"}
   ${f.r2_address||"__________"}

3. ${f.r3||"__________"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRIT PETITION UNDER ARTICLE 226 OF THE CONSTITUTION
OF INDIA FOR ISSUANCE OF WRIT OF
${(f.writ||"MANDAMUS / CERTIORARI / PROHIBITION / QUO WARRANTO").toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.  The petition is filed under Article 226 of the
    Constitution for issuance of Writ of ${f.writ||"Mandamus"}
    challenging ${f.challenge||"the order/action/inaction of respondent"}.

2.  FACTS:
    ${f.facts||`(i) The petitioner is __________
    (ii) The respondent __________ passed an order/took
         action dated __________ whereby __________
    (iii)The impugned order/action is illegal because __________`}

3.  IMPUGNED ORDER/ACTION:
    ${f.impugned||"(Describe the order/action being challenged)"}
    A copy is annexed as Annexure P-1.

4.  FUNDAMENTAL/LEGAL RIGHTS VIOLATED:
    The impugned order/action violates:
    ${f.rights_violated||`• Article 14 (Right to Equality)
    • Article 19(1)(g) (Right to practise profession)
    • Article 21 (Right to Life and Liberty)
    • __________ (Other provisions)`}

5.  GROUNDS:

    (i)  That the impugned order is ARBITRARY, ILLEGAL
         and VIOLATIVE of the Constitution.

    (ii) That the respondent acted WITHOUT JURISDICTION
         OR IN EXCESS OF JURISDICTION.

    (iii)That the impugned order violates the principles
         of NATURAL JUSTICE — the petitioner was not
         given a fair opportunity of hearing.

    (iv) That the order is MALA FIDE and passed with
         ulterior motives.

    (v)  That ${f.specific_grounds||"(Specific legal grounds)"}

6.  ALTERNATIVE REMEDIES:
    The petitioner has ${f.alt_remedy||"no alternative remedy / exhausted all remedies"} as ${f.alt_remedy_reason||"__________"}.

7.  URGENT INTERIM RELIEF REQUIRED:
    ${f.urgency||"(State why urgent relief is needed)"}

                        *** PRAYER ***

    It is most humbly prayed that this Court may:

    (a) Issue writ of ${f.writ||"Mandamus"} directing the
        respondent(s) to ${f.writ_direction||"__________"};

    (b) QUASH/SET ASIDE the impugned order dated
        ${f.impugned_date||"__________"};

    (c) Grant ad-interim stay of the impugned order
        pending disposal of this petition;

    (d) Pass any other order as deemed fit.

Place: ${f.hc||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner
                                    Enrol. No.: ${f.enrol||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.petitioner||"__________"}, verify that the contents of the
above petition are true and correct.

Verified at ${f.hc||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.petitioner||"__________"})
                                          PETITIONER`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 4 — RERA COMPLAINT
  // ═══════════════════════════════════════════════════════════
  rera_complaint: {
    name: "RERA Complaint — Against Builder",
    section: "S.31 Real Estate (Regulation and Development) Act 2016",
    court: "Real Estate Regulatory Authority (RERA)",
    attach_with: ["rera_affidavit","allotment_letter","payment_receipts","agreement_for_sale"],
    keywords: ["rera complaint","31 rera","builder complaint","rera","flat possession delay","builder refund","rera case"],
    generate: (f={}) => `BEFORE THE REAL ESTATE REGULATORY AUTHORITY
${f.state||"__________"} RERA
${f.rera_office||"__________"}

COMPLAINT NO. _____ OF ${f.year||new Date().getFullYear()}

${f.complainant||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
                                        ...COMPLAINANT / ALLOTTEE
VERSUS

${f.builder||"__________"} (PROMOTER/BUILDER)
RERA Registration No.: ${f.rera_reg||"__________"}
${f.builder_address||"__________"}
                                        ...RESPONDENT / PROMOTER

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLAINT U/S 31 OF THE REAL ESTATE (REGULATION AND
DEVELOPMENT) ACT, 2016
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.  PROJECT DETAILS:
    ┌────────────────────────────────────────────────┐
    │ Project Name:    ${f.project||"__________"}             │
    │ Location:        ${f.project_location||"__________"}    │
    │ RERA Reg. No.:   ${f.rera_reg||"__________"}            │
    │ Unit No./Floor:  ${f.unit_no||"__________"}             │
    │ Type:            ${f.unit_type||"BHK/Plot/Commercial"}  │
    │ Carpet Area:     ${f.carpet_area||"__________"} sq.ft.  │
    └────────────────────────────────────────────────┘

2.  BOOKING AND PAYMENT:
    ┌────────────────────────────────────────────────┐
    │ Booking Date:    ${f.booking_date||"__________"}        │
    │ Total Amount:    Rs. ${f.total_amount||"__________"}/-  │
    │ Amount Paid:     Rs. ${f.paid_amount||"__________"}/-   │
    │ Agreement Date:  ${f.agreement_date||"__________"}      │
    │ Promised Delivery: ${f.promised_date||"__________"}     │
    └────────────────────────────────────────────────┘

3.  FACTS / GRIEVANCE:
    ${f.facts||`(i) The complainant booked Flat No. __________ in
    the said project on __________ by paying Rs. __________.
    (ii) As per the Agreement for Sale, possession was to
    be given by __________. The builder has failed to give
    possession despite __________ months/years delay.
    (iii)The builder has __________ (state specific issue).`}

4.  VIOLATIONS BY PROMOTER:
    The respondent/promoter has violated:
    ${f.violations||`(a) S.11 RERA — Failed to complete project as promised
    (b) S.18 RERA — Failed to give possession by agreed date
    (c) S.12 RERA — Made false representations in advertisements`}

5.  RELIEF SOUGHT:

    AS PER S.18 RERA (choose applicable):

    ☐ (A) POSSESSION WITH INTEREST:
    Direct the promoter to hand over possession
    immediately and pay interest @ MCLR+2% per annum
    for the delay period from ${f.promised_date||"__________"} till date.
    Interest amount: Rs. ${f.interest_amount||"__________"}/-

    ☐ (B) REFUND WITH INTEREST:
    Direct the promoter to refund Rs. ${f.paid_amount||"__________"}/-
    with interest @ MCLR+2% p.a. from date of each
    payment. Total amount: Rs. ${f.refund_total||"__________"}/-

    COMPENSATION:
    Compensation for mental agony and harassment:
    Rs. ${f.compensation||"__________"}/-

DOCUMENTS / ANNEXURES:
A-1: Booking Application and Receipt
A-2: Agreement for Sale
A-3: All Payment Receipts
A-4: Demand Letters from Builder
A-5: Correspondence with Builder
A-6: RERA Registration Certificate
A-7: Legal Notice (if sent)

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.advocate||"__________"})                   (${f.complainant||"__________"})
Advocate for Complainant                        Complainant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.complainant||"__________"}, verify the above contents are true.

Verified at ${f.state||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.complainant||"__________"})
                                          COMPLAINANT`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 5 — EXECUTION PETITION
  // ═══════════════════════════════════════════════════════════
  execution_petition: {
    name: "Execution Petition",
    section: "Order XXI CPC 1908",
    court: "Civil Court",
    attach_with: ["execution_affidavit","decree_copy"],
    keywords: ["execution petition","order 21 cpc","execute decree","farman nafizi","decree execute","execute court order"],
    generate: (f={}) => `IN THE COURT OF THE CIVIL JUDGE
${f.district||"__________"}, ${f.state||"__________"}

EXECUTION PETITION NO. _____ OF ${f.year||new Date().getFullYear()}
(ARISING FROM CIVIL SUIT NO. ${f.suit_no||"_____"} OF ${f.suit_year||"__________"})

${f.decree_holder||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...DECREE HOLDER
VERSUS

${f.judgment_debtor||"__________"} S/o ${f.jd_father||"__________"}
R/o: ${f.jd_address||"__________"}
                                        ...JUDGMENT DEBTOR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXECUTION PETITION U/O XXI CPC FOR EXECUTION OF DECREE
DATED ${f.decree_date||"__________"} PASSED IN CIVIL SUIT NO.
${f.suit_no||"_____"} OF ${f.suit_year||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  DECREE: A decree was passed on ${f.decree_date||"__________"}
    in Civil Suit No. ${f.suit_no||"_____"} directing the judgment
    debtor to: ${f.decree_content||"pay Rs. __________ / vacate property / perform act __________"}.

2.  NON-COMPLIANCE: Despite the decree having become
    final, the judgment debtor has not complied with
    the same.

3.  AMOUNT DUE:
    Principal decree amount: Rs. ${f.principal||"__________"}/-
    Interest from _______ to _______: Rs. ${f.interest||"__________"}/-
    Costs: Rs. ${f.costs||"__________"}/-
    TOTAL DUE: Rs. ${f.total||"__________"}/-

4.  MODE OF EXECUTION SOUGHT:
    ${f.execution_mode||`☐ Attachment and sale of moveable property
    ☐ Attachment and sale of immoveable property
    ☐ Arrest and detention of judgment debtor
    ☐ Appointment of Receiver
    ☐ Delivery of possession`}

PRAYER:
(a) Execute the decree in favour of decree holder;
(b) ${f.prayer||"Attach and sell the property of judgment debtor"};
(c) Recover Rs. ${f.total||"__________"}/- from judgment debtor.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Decree Holder`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 6 — SERVICE MATTER PETITION
  // ═══════════════════════════════════════════════════════════
  service_matter: {
    name: "Service Matter Petition — CAT / HC",
    section: "Administrative Tribunals Act / Article 226",
    court: "Central Administrative Tribunal / High Court",
    attach_with: ["service_matter_affidavit","service_record"],
    keywords: ["service matter","cat petition","government job petition","seniority promotion","service petition","government employee case"],
    generate: (f={}) => `BEFORE THE CENTRAL ADMINISTRATIVE TRIBUNAL /
IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}

O.A. / W.P. NO. _____ OF ${f.year||new Date().getFullYear()}

${f.applicant||"__________"}
Designation: ${f.designation||"__________"}
Department: ${f.department||"__________"}
Employee No.: ${f.emp_no||"__________"}
R/o: ${f.address||"__________"}
                                        ...APPLICANT
VERSUS

1. UNION OF INDIA / STATE OF ${(f.state||"__________").toUpperCase()}
   Through: Secretary, ${f.ministry||"__________"}
2. ${f.r2||"__________"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ORIGINAL APPLICATION / WRIT PETITION FOR
${f.relief_type||"PROMOTION / SENIORITY / REGULARISATION / WRONGFUL TERMINATION / PAY FIXATION"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  SERVICE DETAILS:
    Joined service as: ${f.initial_designation||"__________"} on ${f.joining_date||"__________"}
    Current designation: ${f.designation||"__________"}
    Department: ${f.department||"__________"}

2.  FACTS:
    ${f.facts||"(State complete service related facts)"}

3.  IMPUGNED ORDER/ACTION:
    The respondents have ${f.impugned_act||"denied promotion / wrongly superseded / illegally terminated / not regularised / fixed pay incorrectly"} vide order dated ${f.impugned_date||"__________"}.

4.  GROUNDS:
    (i) The impugned action is contrary to service rules.
    (ii) The applicant is entitled to ${f.entitlement||"__________"} as per:
         ${f.legal_basis||"Service Rules / Statutory provisions / Court directions"}
    (iii)${f.other_grounds||"(Other grounds)"}

PRAYER:
(a) Set aside the impugned order dated ${f.impugned_date||"__________"};
(b) Direct respondent to ${f.relief||"promote / regularise / reinstate / pay arrears"};
(c) Award consequential benefits and costs.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Applicant`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 7 — REVIEW PETITION
  // ═══════════════════════════════════════════════════════════
  review_petition: {
    name: "Review Petition",
    section: "S.114 r/w Order XLVII CPC / S.362 BNSS",
    court: "Same Court which passed the order",
    attach_with: ["review_affidavit","impugned_order_copy"],
    keywords: ["review petition","review of judgment","114 cpc","order 47 cpc","review order","faisla review"],
    generate: (f={}) => `IN THE COURT OF ${f.court||"__________"}
${f.district||"__________"}, ${f.state||"__________"}

REVIEW PETITION NO. _____ OF ${f.year||new Date().getFullYear()}
(IN CASE NO. ${f.case_no||"__________"})

${f.petitioner||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...REVIEW PETITIONER
VERSUS

${f.respondent||"__________"}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REVIEW PETITION U/S 114 r/w ORDER XLVII CPC FOR REVIEW
OF JUDGMENT/ORDER DATED ${f.order_date||"__________"} IN ${f.case_no||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GROUNDS FOR REVIEW:
(Review only on limited grounds: new evidence, error on face of record, or sufficient cause)

${f.review_ground||`☐ (A) DISCOVERY OF NEW EVIDENCE:
    New evidence has come to light which was not
    available at the time of hearing, namely __________

☐ (B) ERROR ON FACE OF RECORD:
    There is an apparent error on the face of the
    record in the impugned order, namely __________

☐ (C) SUFFICIENT CAUSE:
    There is sufficient cause for review as __________`}

PRAYER:
Review the order dated ${f.order_date||"__________"} and pass
appropriate order after reconsideration.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

};
