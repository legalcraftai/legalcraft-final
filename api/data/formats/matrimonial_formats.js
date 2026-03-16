// ════════════════════════════════════════════════════════════
// MATRIMONIAL + FAMILY LAW ADDITIONAL FORMATS
// Succession, Will, Adoption, Guardianship, Streedhan
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: { packet: "matrimonial_formats", total_formats: 10 },

  // ── 1. WILL / TESTAMENT ───────────────────────────────────
  will: {
    name: "Will / Last Will and Testament",
    keywords: ["will","last will testament","vasiyat","will draft","vasihat patra","wasiyat"],
    generate: (f={}) => `LAST WILL AND TESTAMENT

I, ${f.testator||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},
Aadhaar No.: ${f.aadhaar||"__________"},

being of sound mind and disposing memory, do hereby
revoke all former wills and codicils made by me
and declare this to be my LAST WILL AND TESTAMENT:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  EXECUTOR:
    I appoint ${f.executor||"__________"} S/o ${f.executor_father||"__________"},
    R/o: ${f.executor_address||"__________"}, as the EXECUTOR of
    this Will. If he/she is unable to act, I appoint
    ${f.alt_executor||"__________"} as alternate executor.

2.  PAYMENT OF DEBTS:
    I direct my executor to pay all my debts,
    funeral expenses and testamentary expenses from
    my estate as soon as possible after my death.

3.  BEQUESTS:

    (A) IMMOVEABLE PROPERTY:
        I bequeath my property described below to
        ${f.heir1||"__________"} (${f.heir1_relation||"my son/daughter/wife"}):

        Property: ${f.property1||"House / Plot / Flat at __________"}
        Survey/Khasra No.: ${f.khasra||"__________"}

    (B) MOVEABLE PROPERTY / BANK ACCOUNTS:
        I bequeath my bank account(s) and deposits:
        Bank: ${f.bank||"__________"}, Account No.: ${f.account||"__________"}
        to ${f.heir2||"__________"} (${f.heir2_relation||"__________"}).

    (C) JEWELLERY / STRIDHAN:
        I bequeath all jewellery to ${f.heir3||"__________"}.

    (D) BUSINESS:
        ${f.business_bequest||"My share in business / company shall vest in __________."}

    (E) RESIDUE:
        All remaining property not specifically
        bequeathed shall go to ${f.residuary||"__________"} equally.

4.  MINOR BENEFICIARIES:
    If any beneficiary is a minor at the time of my
    death, the executor shall hold the property in
    trust until he/she attains majority.

5.  CONDITIONS:
    ${f.conditions||"The bequest is unconditional. / The property shall vest only if beneficiary survives me by 30 days."}

6.  REVOCATION:
    This Will revokes all previous wills.

IN WITNESS WHEREOF, I sign this Will on
${f.date||new Date().toLocaleDateString('en-IN')} at ${f.place||"__________"}.

                              (${f.testator||"__________"})
                              TESTATOR — Signature

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ATTESTATION BY WITNESSES
(Required: 2 witnesses who have seen testator sign)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WITNESS 1:
We, the undersigned, attest that we have seen
${f.testator||"__________"} execute this Will on ${f.date||new Date().toLocaleDateString('en-IN')}.

Name:    ${f.w1_name||"__________"}
S/o:     ${f.w1_father||"__________"}
Address: ${f.w1_address||"__________"}
Sign:    _________________

WITNESS 2:
Name:    ${f.w2_name||"__________"}
S/o:     ${f.w2_father||"__________"}
Address: ${f.w2_address||"__________"}
Sign:    _________________`
  },

  // ── 2. ADOPTION DEED ──────────────────────────────────────
  adoption_deed: {
    name: "Adoption Deed — Hindu Adoptions & Maintenance Act",
    section: "Hindu Adoptions and Maintenance Act 1956",
    keywords: ["adoption deed","adoption document","adopt child","hama act adoption","deed of adoption"],
    generate: (f={}) => `DEED OF ADOPTION

THIS DEED OF ADOPTION is executed on
${f.date||new Date().toLocaleDateString('en-IN')} at ${f.place||"__________"}.

ADOPTING PARENT(S):
${f.adopter||"__________"} S/o ${f.adopter_father||"__________"}
Age: ${f.adopter_age||"__"} Yrs, R/o: ${f.adopter_address||"__________"}
${f.adopter_spouse ? `AND ${f.adopter_spouse||""} W/o ${f.adopter||"__________"}` : ""}

NATURAL PARENT(S) / GUARDIAN:
${f.natural_parent||"__________"} S/o ${f.np_father||"__________"}
R/o: ${f.np_address||"__________"}

CHILD BEING ADOPTED:
Name:        ${f.child||"__________"}
D.O.B.:      ${f.child_dob||"__________"}
Age:         ${f.child_age||"__"} Years
Sex:         ${f.child_sex||"Male/Female"}
Caste/Religion: ${f.child_religion||"Hindu"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RECITALS:
1.  The natural parent(s) have consented to give
    the said child in adoption.
2.  The adopting parent(s) have consented to accept
    the child in adoption.
3.  All conditions under Hindu Adoptions and
    Maintenance Act, 1956 are fulfilled.

NOW THIS DEED WITNESSETH:

1.  The natural parent(s) GIVE the above-named child
    ${f.child||"__________"} in adoption to the adopting parent(s).

2.  The adopting parent(s) TAKE and ACCEPT the said
    child as their lawful adopted ${f.child_relation||"son/daughter"}.

3.  From this date, the child shall be the adopted
    ${f.child_relation||"son/daughter"} of the adopting parent(s) with
    all rights and obligations.

4.  The child's new name shall be:
    ${f.new_name||"Same as before / Changed to __________"}

5.  The child shall have all rights in the adopting
    family including inheritance rights.

(${f.adopter||"__________"})           (${f.natural_parent||"__________"})
ADOPTING PARENT                      NATURAL PARENT

WITNESSES:
1. Name: _____________ Sign: _____________
2. Name: _____________ Sign: _____________`
  },

  // ── 3. GUARDIANSHIP APPLICATION ───────────────────────────
  guardianship: {
    name: "Guardianship Application — Guardians & Wards Act",
    section: "Guardians and Wards Act 1890 / S.26 HMA",
    keywords: ["guardianship application","guardian court","guardians wards act","guardianship petition","minor guardian appointment"],
    generate: (f={}) => `IN THE COURT OF THE DISTRICT JUDGE /
PRINCIPAL JUDGE FAMILY COURT
${f.district||"__________"}, ${f.state||"__________"}

GUARDIANSHIP CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...PETITIONER
VERSUS

${f.respondent||"__________"} S/o ${f.resp_father||"__________"}
R/o: ${f.resp_address||"__________"}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PETITION FOR APPOINTMENT OF GUARDIAN U/S 7
GUARDIANS AND WARDS ACT, 1890
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MINOR CHILD DETAILS:
Name:  ${f.child||"__________"}, D.O.B.: ${f.child_dob||"__________"}
Age:   ${f.child_age||"__"} Years
Currently residing with: ${f.child_with||"__________"}

1.  The petitioner is the ${f.petitioner_relation||"father/mother/relative"} of
    the minor child ${f.child||"__________"}.

2.  The petitioner seeks appointment as guardian of:
    ☐ Person of minor
    ☐ Property of minor
    ☐ Both

3.  NEED FOR GUARDIANSHIP:
    ${f.need||"(a) Both parents are deceased / incapacitated\n    (b) The minor has inherited property requiring management\n    (c) The minor needs legal representation for __________"}

4.  PETITIONER'S SUITABILITY:
    The petitioner is suitable to be appointed as
    guardian because:
    ${f.suitability||"(State reasons)"}

5.  BEST INTEREST OF MINOR:
    Appointment of petitioner as guardian is in
    the best interest of the minor because:
    ${f.best_interest||"(State reasons)"}

PROPERTY OF MINOR (if applicable):
${f.minor_property||"1. __________ valued at Rs. __________/-"}

PRAYER:
(a) Appoint petitioner as guardian of the person
    and/or property of minor ${f.child||"__________"};
(b) Grant interim guardianship forthwith;
(c) Pass any other order as deemed fit.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ── 4. STRIDHAN RECOVERY APPLICATION ─────────────────────
  stridhan_recovery: {
    name: "Application for Recovery of Stridhan",
    section: "S.14 Hindu Succession Act / DV Act / S.406 IPC/BNS",
    keywords: ["stridhan recovery","stridhan application","jewellery recovery","wife property recovery","stridhan wapas"],
    generate: (f={}) => `IN THE COURT OF THE JUDICIAL MAGISTRATE /
FAMILY COURT
${f.district||"__________"}, ${f.state||"__________"}

CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.wife||"__________"} W/o ${f.husband||"__________"}
R/o: ${f.wife_address||"__________"}
                                        ...APPLICANT/WIFE
VERSUS

1. ${f.husband||"__________"} S/o ${f.h_father||"__________"}
   R/o: ${f.h_address||"__________"}
2. ${f.mil||"__________"} (Mother-in-law)
3. ${f.fil||"__________"} (Father-in-law)
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR RECOVERY OF STRIDHAN AND MATRIMONIAL
PROPERTY U/S 14 HSA / S.27 HAMA / S.12 DV ACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  The applicant was married to respondent no.1 on
    ${f.marriage_date||"__________"}.

2.  STRIDHAN AND PROPERTY GIVEN AT MARRIAGE:

    ┌─────────────────────────────────────────────────────┐
    │ ITEM           │ GIVEN BY    │ QUANTITY │ VALUE (Rs.) │
    ├─────────────────────────────────────────────────────┤
    │ Gold jewellery │ ${f.giver1||"Parents"} │ ${f.gold||"__ grams"}  │ ${f.gold_val||"__________"}  │
    │ Silver items   │ ${f.giver2||"In-laws"}  │ ${f.silver||"__ grams"} │ ${f.silver_val||"__________"} │
    │ Cash           │ ${f.giver3||"Parents"}  │ Rs.${f.cash||"__________"} │ ${f.cash_val||"__________"}  │
    │ Clothes        │ ${f.giver4||"Parents"}  │ ${f.clothes||"__"}       │ ${f.clothes_val||"__________"} │
    │ Electronics    │ ${f.giver5||"__________"} │ ${f.electronics||"__"}  │ ${f.elec_val||"__________"}  │
    │ Other          │ ${f.giver6||"__________"} │ ${f.other||"__________"} │ ${f.other_val||"__________"} │
    ├─────────────────────────────────────────────────────┤
    │ TOTAL VALUE    │             │          │ Rs.${f.total||"__________"}/- │
    └─────────────────────────────────────────────────────┘

3.  The respondents are in unlawful possession of
    the above stridhan and are refusing to return it.

4.  Retention of stridhan by respondents constitutes:
    (a) Criminal breach of trust U/S 316 BNS 2023;
    (b) Domestic violence under DV Act 2005.

PRAYER:
(a) Direct respondents to return all stridhan;
(b) In alternative, pay Rs. ${f.total||"__________"}/- as compensation;
(c) Pass interim protection order U/S 18 DV Act.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate for Applicant`
  },

  // ── 5. SUCCESSION CERTIFICATE PETITION ───────────────────
  succession_certificate: {
    name: "Petition for Succession Certificate",
    section: "S.372 Indian Succession Act 1925",
    court: "District Court",
    keywords: ["succession certificate","372 succession act","varisan praman patra","bank certificate succession","succession certificate petition"],
    generate: (f={}) => `IN THE COURT OF THE DISTRICT JUDGE
${f.district||"__________"}, ${f.state||"__________"}

SUCCESSION CERTIFICATE CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
(Legal Heir of Late ${f.deceased||"__________"})
                                        ...PETITIONER
VERSUS

${f.respondent||"STATE OF __________"} / BANK / INSTITUTION
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PETITION U/S 372 INDIAN SUCCESSION ACT 1925
FOR GRANT OF SUCCESSION CERTIFICATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  Late ${f.deceased||"__________"} S/o ${f.deceased_father||"__________"},
    R/o: ${f.deceased_address||"__________"} expired on
    ${f.death_date||"__________"} at ${f.death_place||"__________"}.

2.  The deceased died INTESTATE (without a will) /
    leaving a will which has been probated.

3.  LEGAL HEIRS OF DECEASED:
    ${f.petitioner||"__________"} — ${f.relation||"Son/Daughter/Wife/Husband"}
    ${f.heir2||"__________"} — ${f.heir2_relation||"__________"} (if applicable)

4.  DEBTS AND SECURITIES:
    The following debts/securities were due to
    the deceased at the time of death:

    (i)  Bank Account No. ${f.account||"__________"} with ${f.bank||"__________"}
         Balance: Rs. ${f.balance||"__________"}/-
    (ii) Fixed Deposits: Rs. ${f.fd||"__________"}/-
    (iii)${f.other_assets||"Other: __________"}
    TOTAL: Rs. ${f.total||"__________"}/-

5.  The petitioner is entitled to the above amounts
    as sole legal heir / as per share of ${f.share||"__________"}%.

6.  No court fee as this is an application for
    succession certificate / Court fee paid:
    Rs. ${f.court_fee||"__________"}/-

PRAYER:
(a) Grant Succession Certificate in favour of
    petitioner in respect of the above debts/securities;
(b) Pass any other order as deemed fit.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ── 6. PROBATE PETITION ───────────────────────────────────
  probate_petition: {
    name: "Probate Petition",
    section: "S.276 Indian Succession Act 1925",
    keywords: ["probate petition","276 succession act","will probate","probate will","vasiyat probate"],
    generate: (f={}) => `IN THE COURT OF THE DISTRICT JUDGE
${f.district||"__________"}, ${f.state||"__________"}

PROBATE CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.executor||"__________"} (Executor under the Will)
S/o ${f.father||"__________"}, R/o: ${f.address||"__________"}
                                        ...PETITIONER/EXECUTOR

IN THE MATTER OF THE ESTATE OF:
Late ${f.testator||"__________"} S/o ${f.testator_father||"__________"}
Who expired on ${f.death_date||"__________"} at ${f.death_place||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PETITION FOR PROBATE U/S 276
INDIAN SUCCESSION ACT 1925
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  Late ${f.testator||"__________"} expired on ${f.death_date||"__________"}
    leaving behind a WILL dated ${f.will_date||"__________"}
    (Original Will annexed as ANNEXURE A).

2.  The Will was duly executed by the testator
    in the presence of witnesses and attested.

3.  The petitioner is named as EXECUTOR in the Will.

4.  ESTATE OF DECEASED:
    Immoveable property:   Rs. ${f.immoveable||"__________"}/-
    Moveable property:     Rs. ${f.moveable||"__________"}/-
    Bank deposits:         Rs. ${f.bank||"__________"}/-
    TOTAL ESTATE VALUE:    Rs. ${f.total||"__________"}/-

5.  The deceased was a Hindu/Christian/Parsi
    permanently residing in ${f.residence||"__________"}.

PRAYER:
(a) Admit the Will to probate;
(b) Grant letters testamentary to the petitioner;
(c) Pass any other order as deemed fit.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ── 7. LETTERS OF ADMINISTRATION ─────────────────────────
  letters_administration: {
    name: "Petition for Letters of Administration",
    section: "S.278 Indian Succession Act 1925",
    keywords: ["letters of administration","278 succession act","intestate estate administration","la petition","letters administration petition"],
    generate: (f={}) => `IN THE COURT OF THE DISTRICT JUDGE
${f.district||"__________"}, ${f.state||"__________"}

L.A. CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} — Legal Heir of
Late ${f.deceased||"__________"}
R/o: ${f.address||"__________"}
                                        ...PETITIONER

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PETITION FOR LETTERS OF ADMINISTRATION U/S 278
INDIAN SUCCESSION ACT, 1925
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  Late ${f.deceased||"__________"} died on ${f.death_date||"__________"}
    INTESTATE (without leaving a valid will).

2.  The petitioner is the ${f.relation||"spouse/son/daughter/legal heir"} of the deceased and is entitled to administer the estate.

3.  ESTATE: Rs. ${f.estate||"__________"}/- (approximately)

4.  LEGAL HEIRS: ${f.heirs||"(List all legal heirs with relationship)"}

PRAYER: Grant letters of administration to petitioner.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ── 8. MARRIAGE REGISTRATION APPLICATION ─────────────────
  marriage_registration: {
    name: "Application for Marriage Registration Certificate",
    keywords: ["marriage registration","vivah panjeeyan","marriage certificate application","shadi certificate","marriage registration application"],
    generate: (f={}) => `APPLICATION FOR REGISTRATION OF MARRIAGE
(UNDER HINDU MARRIAGE ACT 1955 / SPECIAL MARRIAGE ACT 1954)

TO,
THE MARRIAGE REGISTRATION OFFICER /
SUB-REGISTRAR
${f.office||"__________"}
District: ${f.district||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

HUSBAND DETAILS:
Name:         ${f.husband||"__________"}
S/o:          ${f.h_father||"__________"}
D.O.B.:       ${f.h_dob||"__________"}
Age at Marriage: ${f.h_age||"__"} Years
Address:      ${f.h_address||"__________"}
Aadhaar No.:  ${f.h_aadhaar||"__________"}

WIFE DETAILS:
Name:         ${f.wife||"__________"}
D/o:          ${f.w_father||"__________"}
D.O.B.:       ${f.w_dob||"__________"}
Age at Marriage: ${f.w_age||"__"} Years
Address:      ${f.w_address||"__________"}
Aadhaar No.:  ${f.w_aadhaar||"__________"}

MARRIAGE DETAILS:
Date of Marriage:  ${f.marriage_date||"__________"}
Place of Marriage: ${f.marriage_place||"__________"}
Form of Marriage:  ${f.marriage_form||"Hindu rites / Court marriage / Religious ceremony"}
Witnesses present: ${f.witnesses||"(Names and addresses of 2 witnesses)"}

DOCUMENTS ATTACHED:
1. Aadhaar cards of both parties
2. Photographs (3 each — passport size)
3. Age proof (Birth certificate / 10th marksheet)
4. Address proof
5. Marriage invitation card / Photographs of ceremony
6. Affidavit of marriage

We request that our marriage may be registered
and marriage certificate issued.

(${f.husband||"__________"})              (${f.wife||"__________"})
    HUSBAND                                  WIFE

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

WITNESS 1: _________________  WITNESS 2: _________________`
  },

  // ── 9. SECOND MOTION — MUTUAL DIVORCE ────────────────────
  second_motion_divorce: {
    name: "Second Motion for Mutual Consent Divorce",
    section: "S.13-B(2) Hindu Marriage Act 1955",
    keywords: ["second motion divorce","13b 2 hma","second motion mutual divorce","second motion draft"],
    generate: (f={}) => `IN THE COURT OF THE PRINCIPAL JUDGE, FAMILY COURT
${f.district||"__________"}, ${f.state||"__________"}

MATRIMONIAL SUIT NO. ${f.suit_no||"_____"} OF ${f.year||new Date().getFullYear()}
(SECOND MOTION — DIVORCE BY MUTUAL CONSENT)

${f.husband||"__________"} — Petitioner No.1
${f.wife||"__________"}    — Petitioner No.2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR SECOND MOTION U/S 13-B(2) HMA 1955
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  The petitioners filed the First Motion on
    ${f.first_motion_date||"__________"} in the above suit.

2.  More than 6 months / The mandatory period has
    elapsed since the First Motion.

3.  The petitioners have not reconciled and their
    mutual consent to dissolve the marriage persists.

4.  All terms of settlement remain as agreed and
    set out in the First Motion / Settlement Deed
    dated ${f.settlement_date||"__________"}.

5.  The petitioners now move the Second Motion and
    pray for a decree of divorce.

PRAYER:
(a) Hear and record the Second Motion;
(b) Pass decree of divorce by mutual consent forthwith.

(${f.husband||"__________"})              (${f.wife||"__________"})
PETITIONER NO.1                       PETITIONER NO.2

Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  // ── 10. ELDER ABUSE COMPLAINT ─────────────────────────────
  elder_abuse: {
    name: "Elder Abuse Complaint — Maintenance and Welfare of Parents Act",
    section: "Maintenance and Welfare of Parents and Senior Citizens Act 2007",
    keywords: ["elder abuse complaint","maintenance parents","senior citizen complaint","2007 act parents maintenance","bujurg suraksha complaint"],
    generate: (f={}) => `APPLICATION UNDER THE MAINTENANCE AND WELFARE OF
PARENTS AND SENIOR CITIZENS ACT, 2007

TO,
THE MAINTENANCE TRIBUNAL / SDM /
DISTRICT COLLECTOR
${f.district||"__________"}, ${f.state||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

APPLICANT (SENIOR CITIZEN / PARENT):
Name:     ${f.senior||"__________"}
Age:      ${f.age||"__"} Years
Address:  ${f.address||"__________"}
Mobile:   ${f.mobile||"__________"}

RESPONDENT (SON / DAUGHTER / LEGAL HEIR):
1. ${f.resp1||"__________"} (${f.resp1_relation||"Son/Daughter"})
   Address: ${f.resp1_addr||"__________"}
2. ${f.resp2||"__________"} (${f.resp2_relation||"__________"})
   Address: ${f.resp2_addr||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPLAINT / APPLICATION:

1.  The applicant is a senior citizen of ${f.age||"__"} years
    and is unable to maintain himself/herself.

2.  The respondents are the children/legal heirs
    of the applicant and have sufficient means.

3.  NATURE OF COMPLAINT:
    ${f.complaint||`(a) The respondents have abandoned the applicant
    (b) Respondents are not providing food/shelter/medical care
    (c) Respondents have illegally transferred/taken property
    (d) Physical/mental abuse by respondents`}

4.  INCOME/ASSETS OF APPLICANT:
    Monthly income: Rs. ${f.income||"Nil / __________"}/-
    Assets: ${f.assets||"Nil / __________"}

5.  MONTHLY EXPENSES:
    Food: Rs. ${f.food||"__________"}/-
    Medical: Rs. ${f.medical||"__________"}/-
    Other: Rs. ${f.other||"__________"}/-
    TOTAL: Rs. ${f.total||"__________"}/-

PRAYER:
(a) Direct respondents to pay monthly maintenance
    of Rs. ${f.maintenance||"__________"}/- to the applicant;
(b) Direct return of property wrongfully taken;
(c) Pass protection order against abuse;
(d) Any other order as deemed fit.

(${f.senior||"__________"})
Senior Citizen — Signature`
  },

};
