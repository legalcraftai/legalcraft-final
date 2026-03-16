// ════════════════════════════════════════════════════════════
// WRIT PETITION FORMATS — HIGH COURT
// All 5 Writs + PIL + Contempt + Review
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: { packet: "writ_formats", total_formats: 10 },

  // ── 1. WRIT PETITION — GENERAL (Article 226) ─────────────
  writ_general: {
    name: "Writ Petition — Article 226 Constitution",
    section: "Article 226 Constitution of India",
    court: "High Court",
    attach_with: ["writ_affidavit","impugned_order_copy"],
    keywords: ["writ petition","article 226","high court writ petition","writ petition draft","226 constitution"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
AT ${f.hc||"__________"}

WRIT PETITION (CIVIL/CRIMINAL) NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"}
R/o: ${f.address||"__________"}
                                        ...PETITIONER
VERSUS

1. ${f.resp1||"UNION OF INDIA"} Through Secretary
   Ministry of ${f.ministry||"__________"}
   ${f.resp1_addr||"New Delhi — 110001"}

2. STATE OF ${(f.state||"__________").toUpperCase()} Through
   Principal Secretary, ${f.dept||"__________"}
   ${f.resp2_addr||"__________"}

3. ${f.resp3||"__________"}, ${f.resp3_addr||"__________"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRIT PETITION UNDER ARTICLE 226 OF THE CONSTITUTION
OF INDIA FOR ISSUANCE OF WRIT OF
${f.writ_type||"CERTIORARI / MANDAMUS / PROHIBITION / QUO WARRANTO / HABEAS CORPUS"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.   BRIEF FACTS:

     ${f.facts||`(a) The petitioner is __________ engaged in __________.

     (b) On __________, the respondent no. __ passed an
         order dated __________ whereby __________.

     (c) The impugned order/action is illegal, arbitrary
         and violative of the petitioner's fundamental/
         legal rights.`}

2.   IMPUGNED ORDER/ACTION:

     The impugned order dated ${f.order_date||"__________"} passed by
     ${f.authority||"__________"} (Annexure P-${f.annex_no||"1"}) is liable
     to be quashed on the following grounds.

3.   QUESTIONS OF LAW INVOLVED:

     (i)  Whether the impugned order is violative of
          ${f.violated_right||"Article 14 / Article 19 / Article 21"} of the Constitution?

     (ii) Whether the respondent has acted without
          jurisdiction / in excess of jurisdiction?

     (iii)Whether the impugned order is passed without
          following the principles of natural justice?

4.   GROUNDS:

     (A) VIOLATION OF NATURAL JUSTICE:
         The petitioner was not given any hearing /
         opportunity to present his/her case before
         passing the impugned order.

     (B) WITHOUT JURISDICTION:
         The respondent had no authority/jurisdiction
         to pass the impugned order as ${f.jurisdiction_ground||"__________"}.

     (C) ARBITRARY AND UNREASONABLE:
         The impugned order is arbitrary and violates
         Article 14 of the Constitution as ${f.art14_ground||"__________"}.

     (D) VIOLATION OF ARTICLE ${f.article||"19/21"}:
         ${f.fundamental_right_violation||"(State specific fundamental right violated)"}

     (E) SPECIFIC LEGAL GROUNDS:
         ${f.legal_grounds||"(State specific statutory/legal grounds)"}

5.   ALTERNATIVE REMEDY:
     ${f.alternative_remedy||"There is no equally efficacious alternative remedy available to the petitioner. / Although there is an alternative remedy, the same is illusory/inadequate because __________"}

6.   URGENCY:
     ${f.urgency||"The petitioner will suffer irreparable harm if stay is not granted immediately."}

7.   The petitioner has not filed any other petition
     in connection with the subject matter of this
     petition before any other court.

                        *** PRAYER ***

     It is therefore most humbly prayed that this
     Hon'ble Court may be pleased to:

     (A)  Issue a Writ of ${f.writ_type||"Certiorari/Mandamus"} or any
          other appropriate writ direction or order:
          (i)  Quashing the impugned order dated
               ${f.order_date||"__________"};
          (ii) Directing the respondent to ${f.direction||"__________"};

     (B)  Issue an interim stay/injunction restraining
          the respondent from ${f.stay_from||"__________"} during
          the pendency of this petition;

     (C)  Pass any other order as this Hon'ble Court
          may deem fit and proper.

                    AND FOR THIS ACT OF KINDNESS
                    THE PETITIONER SHALL EVER PRAY.

Place: ${f.hc||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner
                                    Enrol. No.: ${f.enrol||"__________"}
                                    Mobile: ${f.mobile||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I, ${f.petitioner||"__________"}, verify that the contents of
the above petition are true and correct.
Verified at ${f.hc||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.
                                    (${f.petitioner||"__________"}) — PETITIONER`
  },

  // ── 2. WRIT OF MANDAMUS ───────────────────────────────────
  writ_mandamus: {
    name: "Writ of Mandamus — Directing Government Action",
    section: "Article 226 Constitution — Mandamus",
    court: "High Court",
    keywords: ["writ mandamus","mandamus petition","government action direction","mandamus draft","direct government action"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}

WRIT PETITION NO. _____ OF ${f.year||new Date().getFullYear()}
(WRIT OF MANDAMUS)

${f.petitioner||"__________"}    ...PETITIONER
VERSUS
${f.respondent||"State / Authority / Official"}    ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRIT PETITION FOR WRIT OF MANDAMUS
DIRECTING RESPONDENT TO ${(f.direction||"PERFORM LEGAL DUTY").toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  The respondent has a statutory/legal duty to
    ${f.duty||"grant licence / decide application / pay dues / other"} under
    ${f.statute||"__________"} (Section ${f.section||"__________"}).

2.  The petitioner applied for ${f.applied_for||"__________"} on
    ${f.application_date||"__________"} (Annexure P-1).

3.  Despite ${f.time_elapsed||"__________"} having elapsed, the
    respondent has neither decided the application
    nor communicated any decision.

4.  The inaction of the respondent is:
    (i)  Contrary to the mandate of ${f.statute||"__________"};
    (ii) In violation of Article 14 of the Constitution;
    (iii)Causing irreparable prejudice to the petitioner.

5.  A legal notice was sent on ${f.notice_date||"__________"} but
    no action was taken (Annexure P-2).

PRAYER:
(a) Issue Writ of Mandamus directing respondent to
    ${f.mandamus_direction||"decide the application within __ days / grant the licence / release the dues"};
(b) Award costs.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ── 3. PIL — PUBLIC INTEREST LITIGATION ──────────────────
  pil: {
    name: "Public Interest Litigation (PIL)",
    section: "Article 32 (SC) / Article 226 (HC)",
    court: "High Court / Supreme Court",
    keywords: ["pil","public interest litigation","pil draft","jan hit yachika","public interest petition"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
AT ${f.hc||"__________"}

PUBLIC INTEREST LITIGATION NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} — Social Activist / Advocate /
Concerned Citizen, R/o: ${f.address||"__________"}
                                        ...PETITIONER IN PIL
VERSUS

1. STATE OF ${(f.state||"__________").toUpperCase()} Through Chief Secretary
2. ${f.resp2||"Concerned Department / Authority"}
3. ${f.resp3||"__________"} (if any)
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PUBLIC INTEREST LITIGATION U/A 226 OF CONSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LOCUS STANDI:
The petitioner is a ${f.petitioner_desc||"concerned citizen / social activist / NGO"} having
locus standi to file this PIL as the matter involves
${f.public_interest||"public health / environment / fundamental rights / rights of weaker sections"}.

THE ISSUE OF PUBLIC IMPORTANCE:

1.  ${f.issue||"(State the public issue — environmental degradation / violation of rights / illegal construction / failure of public duty etc.)"}

2.  FACTS:
    ${f.facts||"(State facts establishing the public interest issue)"}

3.  CONSTITUTIONAL / LEGAL VIOLATION:
    The above situation constitutes violation of:
    (i)  Article 21 — Right to life and dignity
    (ii) Article 14 — Right to equality
    (iii)${f.other_violation||"Other: __________"}

4.  FAILURE OF AUTHORITIES:
    Despite being aware, the respondents have failed
    to take any remedial action because ${f.failure_reason||"__________"}.

5.  URGENCY:
    The situation is deteriorating and immediate
    intervention of this Court is necessary.

PRAYER:
(a) Issue appropriate writ/direction to respondents to
    ${f.prayer||"take remedial action / stop illegal activity / enforce law"};
(b) Constitute a committee to oversee compliance;
(c) Issue directions in public interest;
(d) Award costs to be paid to petitioner / charity.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ── 4. CONTEMPT PETITION ─────────────────────────────────
  contempt_petition: {
    name: "Contempt Petition — Non-compliance of Court Order",
    section: "Contempt of Courts Act 1971 / Article 215",
    court: "High Court",
    keywords: ["contempt petition","contempt of court","court order not followed","contempt draft","disobedience court order"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
AT ${f.hc||"__________"}

CONTEMPT PETITION NO. _____ OF ${f.year||new Date().getFullYear()}
(CIVIL CONTEMPT)

IN THE MATTER OF:
WRIT PETITION / CIVIL SUIT / ORDER NO. ${f.original_case||"__________"}
DATED ${f.court_order_date||"__________"}

${f.petitioner||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...PETITIONER/COMPLAINANT
VERSUS

${f.contemnor||"__________"}, ${f.contemnor_designation||"Designation"}
R/o / Office at: ${f.contemnor_address||"__________"}
                                        ...RESPONDENT/ALLEGED CONTEMNOR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTEMPT PETITION U/S 12 CONTEMPT OF COURTS ACT 1971
READ WITH ARTICLE 215 CONSTITUTION OF INDIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  COURT ORDER VIOLATED:

    This Hon'ble Court vide order dated
    ${f.court_order_date||"__________"} in ${f.original_case||"__________"}
    directed the respondent to ${f.order_direction||"__________"}
    within ${f.compliance_period||"__________"} days.

    A certified copy of the order is attached as
    ANNEXURE P-1.

2.  NON-COMPLIANCE:

    Despite the clear direction of this Hon'ble Court
    and lapse of ${f.days_elapsed||"__________"} days, the respondent
    has willfully failed to comply with the order as:

    (i)   ${f.non_compliance1||"The order has not been implemented at all."}
    (ii)  ${f.non_compliance2||"The respondent has taken no steps towards compliance."}
    (iii) ${f.non_compliance3||"(Specific non-compliance detail)"}

3.  WILLFUL DISOBEDIENCE:

    The non-compliance is willful and deliberate
    because ${f.willful_reason||"the respondent was personally served with the order / the respondent acknowledged receipt of order / despite reminders no action taken"}.

4.  LEGAL NOTICE:

    The petitioner sent a legal notice dated
    ${f.contempt_notice_date||"__________"} calling upon the respondent
    to comply, but to no avail (Annexure P-2).

PRAYER:

(a) Hold the respondent GUILTY of civil contempt
    of this Hon'ble Court;

(b) Sentence the respondent to IMPRISONMENT and/or
    FINE as provided under S.12 of the Contempt
    of Courts Act, 1971;

(c) Direct the respondent to comply with the order
    dated ${f.court_order_date||"__________"} forthwith;

(d) Award costs to the petitioner.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner
                                    Enrol. No.: ${f.enrol||"__________"}`
  },

  // ── 5. WRIT AFFIDAVIT ─────────────────────────────────────
  writ_affidavit: {
    name: "Affidavit in Support of Writ Petition",
    keywords: ["writ affidavit","affidavit writ petition","high court affidavit","writ supporting affidavit"],
    generate: (f={}) => `AFFIDAVIT IN SUPPORT OF WRIT PETITION

IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
WRIT PETITION NO. _____ OF ${f.year||new Date().getFullYear()}

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND STATE ON OATH:

1.  I am the petitioner in the above writ petition
    and am fully conversant with the facts herein.

2.  The contents of the writ petition are true and
    correct to the best of my knowledge and belief.

3.  The Annexures filed with the petition are true
    copies of their respective originals.

4.  I have not filed any other petition before any
    other High Court or the Supreme Court on the
    subject matter of this petition.

5.  ${f.specific||"(Any specific averment)"}

DEPONENT

VERIFICATION:
Verified at ${f.hc||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.
                                    (${f.deponent||"__________"}) — DEPONENT

Solemnly affirmed and signed before me on
${f.date||new Date().toLocaleDateString('en-IN')}
                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

  // ── 6. SERVICE MATTER WRIT ────────────────────────────────
  service_writ: {
    name: "Service Matter Writ — Government Employee",
    keywords:["service writ","government employee writ","sarkari naukri writ","service matter high court","promotion writ"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}

WRIT PETITION (SERVICE) NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"}, ${f.designation||"__________"}
Department: ${f.department||"__________"}
Employee ID: ${f.emp_id||"__________"}
R/o: ${f.address||"__________"}
                                        ...PETITIONER
VERSUS

1. STATE OF ${(f.state||"__________").toUpperCase()} Through Chief Secretary
2. SECRETARY, ${f.dept||"__________"} Department
3. ${f.authority||"__________"} (Appointing Authority)
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRIT PETITION CHALLENGING ${(f.service_issue||"TERMINATION / SUSPENSION / DEMOTION / NON-PROMOTION").toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  SERVICE RECORD:
    Date of Appointment:   ${f.doa||"__________"}
    Designation:           ${f.designation||"__________"}
    Date of Impugned Order: ${f.order_date||"__________"}

2.  IMPUGNED ORDER/ACTION:
    The respondents vide order dated ${f.order_date||"__________"}
    have ${f.action||"terminated / suspended / demoted / denied promotion"}
    the petitioner. (Annexure P-1)

3.  GROUNDS:
    (i)  No inquiry was conducted / Inquiry was unfair.
    (ii) Principles of natural justice not followed.
    (iii)The order is disproportionate to the charge.
    (iv) ${f.specific_ground||"(Specific ground)"}

4.  The petitioner has a spotless service record
    of ${f.service_years||"__"} years. The action is mala fide.

PRAYER:
(a) Quash the impugned order dated ${f.order_date||"__________"};
(b) Reinstate with all consequential benefits;
(c) Grant promotion from ${f.promotion_date||"__________"};
(d) Award back wages and costs.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ── 7. ELECTION PETITION ──────────────────────────────────
  election_petition: {
    name: "Election Petition",
    section: "Representation of the People Act 1951",
    keywords: ["election petition","chunav petition","election dispute","81 rp act","election result challenge"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}

ELECTION PETITION NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} S/o ${f.father||"__________"}
Candidate / Elector, R/o: ${f.address||"__________"}
                                        ...PETITIONER
VERSUS

1. ${f.returned_candidate||"__________"} — Returned Candidate
   R/o: ${f.rc_address||"__________"}

2. RETURNING OFFICER, ${f.constituency||"__________"} Constituency
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ELECTION PETITION U/S 81 READ WITH S.100 REPRESENTATION
OF THE PEOPLE ACT, 1951
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  ELECTION DETAILS:
    Constituency: ${f.constituency||"__________"}
    Date of Election: ${f.election_date||"__________"}
    Date of Result: ${f.result_date||"__________"}
    Returned Candidate: ${f.returned_candidate||"__________"} (Votes: ${f.rc_votes||"__________"})
    Petitioner's Votes: ${f.petitioner_votes||"__________"}
    Margin: ${f.margin||"__________"}

2.  GROUNDS U/S 100:
    ${f.grounds||`(i)  Corrupt practices by returned candidate U/S 123
    (ii) Improper acceptance/rejection of nomination
    (iii)Non-compliance with provisions of RP Act
    (iv) Impersonation of voters
    (v)  Booth capturing`}

3.  FACTS IN SUPPORT:
    ${f.facts||"(State specific facts with dates, places and persons involved)"}

PRAYER:
(a) Declare the election of ${f.returned_candidate||"__________"} void;
(b) Declare petitioner as duly elected;
(c) Conduct fresh election;
(d) Pass any other order as deemed fit.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ── 8. REVIEW PETITION ────────────────────────────────────
  review_petition: {
    name: "Review Petition",
    section: "S.114 / Order XLVII CPC / Article 137 Constitution",
    keywords: ["review petition","review judgment","punarvichar yachika","order 47 cpc","review petition draft"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}

REVIEW PETITION NO. _____ OF ${f.year||new Date().getFullYear()}
(IN WRIT PETITION / CIVIL SUIT NO. ${f.original_case||"__________"})

${f.petitioner||"__________"}    ...PETITIONER/APPLICANT
VERSUS
${f.respondent||"__________"}    ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REVIEW PETITION U/S 114 / O.XLVII CPC
AGAINST JUDGMENT AND ORDER DATED ${f.judgment_date||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  IMPUGNED JUDGMENT: Judgment dated ${f.judgment_date||"__________"}
    in ${f.original_case||"__________"} whereby the petition/suit was
    disposed of with the direction that ${f.direction||"__________"}.

2.  GROUNDS FOR REVIEW:

    (i)  DISCOVERY OF NEW EVIDENCE:
         After pronouncement of the judgment, the
         petitioner has discovered new evidence namely
         ${f.new_evidence||"__________"} which was not available
         earlier and which would have materially
         affected the decision.

    (ii) ERROR APPARENT ON FACE OF RECORD:
         There is an error apparent on the face of
         record in that the Court has ${f.error||"overlooked material evidence / misread a statutory provision / ignored binding precedent"}.

    (iii)ANY OTHER SUFFICIENT REASON:
         ${f.other_reason||"__________"}

PRAYER:
(a) Review the judgment dated ${f.judgment_date||"__________"};
(b) Recall the said judgment and pass fresh order;
(c) Pass any other order as deemed fit.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ── 9. SPECIAL LEAVE PETITION (SLP) — SUPREME COURT ──────
  slp: {
    name: "Special Leave Petition (SLP) — Supreme Court",
    section: "Article 136 Constitution of India",
    court: "Supreme Court of India",
    keywords: ["slp","special leave petition","supreme court appeal","article 136","slp draft","sc appeal"],
    generate: (f={}) => `IN THE SUPREME COURT OF INDIA
CIVIL/CRIMINAL APPELLATE JURISDICTION

SPECIAL LEAVE PETITION (CIVIL/CRIMINAL)
NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...PETITIONER
VERSUS

${f.respondent||"__________"} R/o ${f.resp_address||"__________"}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SPECIAL LEAVE PETITION U/A 136 CONSTITUTION OF INDIA
AGAINST JUDGMENT AND ORDER DATED ${f.hc_order_date||"__________"}
PASSED BY HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
IN ${f.hc_case||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  IMPUGNED ORDER: HC judgment dated ${f.hc_order_date||"__________"}.

2.  QUESTIONS OF LAW:
    (i)  Whether the High Court erred in ${f.question1||"__________"}?
    (ii) Whether the judgment is against the settled
         law as laid down in ${f.precedent||"__________"}?

3.  GROUNDS:
    (i)  The High Court has committed grave error of law.
    (ii) The judgment is contrary to Constitution/statute.
    (iii)${f.specific_ground||"(Specific ground)"}

4.  LIMITATION: Filed within 90 days of HC judgment.

PRAYER:
(a) Grant Special Leave to Appeal;
(b) Stay the HC order during pendency;
(c) Set aside HC judgment and restore original order.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate on Record`
  },

  // ── 10. CURATIVE PETITION ─────────────────────────────────
  curative_petition: {
    name: "Curative Petition — Supreme Court",
    section: "Rupa Ashok Hurra v Ashok Hurra (2002) — Inherent Jurisdiction",
    court: "Supreme Court",
    keywords: ["curative petition","curative petition sc","last resort petition","after review dismissed sc"],
    generate: (f={}) => `IN THE SUPREME COURT OF INDIA

CURATIVE PETITION NO. _____ OF ${f.year||new Date().getFullYear()}
(IN SLP/APPEAL NO. ${f.original_case||"__________"})

${f.petitioner||"__________"}    ...PETITIONER
VERSUS
${f.respondent||"__________"}    ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CURATIVE PETITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  This curative petition is filed after exhausting
    all remedies including review petition which was
    dismissed on ${f.review_date||"__________"}.

2.  The original judgment dated ${f.judgment_date||"__________"} suffers
    from violation of principles of natural justice /
    abuse of process of court in that ${f.grounds||"__________"}.

3.  This petition is filed on the following grounds
    as laid down in Rupa Ashok Hurra v Ashok Hurra
    AIR 2002 SC 1771:

    (i)  Violation of natural justice — the petitioner
         was not heard on ${f.not_heard||"__________"}.

    (ii) The Judge(s) who delivered the judgment had
         a conflict of interest / personal interest.
         (State specific facts: ${f.conflict||"__________"})

PRAYER: Review the judgment in the interest of
justice and pass fresh orders.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate on Record`
  },

};
