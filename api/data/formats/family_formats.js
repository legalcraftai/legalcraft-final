// ════════════════════════════════════════════════════════════
// FAMILY LAW FORMATS PACKET
// Divorce, Maintenance, Custody, DV, Adoption, Guardianship
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: {
    packet: "family_formats",
    version: "1.0",
    total_formats: 9,
    covers: ["Divorce Petition","Mutual Consent Divorce","Maintenance","Child Custody","DV Application","Restitution","Guardianship","Adoption","Marriage Certificate"]
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 1 — DIVORCE PETITION (Contested)
  // ═══════════════════════════════════════════════════════════
  divorce_petition: {
    name: "Divorce Petition — Contested",
    section: "S.13 Hindu Marriage Act 1955",
    court: "Family Court / District Court",
    attach_with: ["divorce_affidavit","marriage_certificate","photos"],
    keywords: ["divorce petition","talak","13 hma","divorce karna","divorce draft","divorce application"],
    generate: (f={}) => `IN THE COURT OF THE PRINCIPAL JUDGE /
DISTRICT JUDGE, FAMILY COURT
${f.district||"__________"}, ${f.state||"__________"}

MATRIMONIAL SUIT NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} ${f.petitioner_gender=="W"?"W/o":"S/o"} ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"}
R/o: ${f.address||"__________"}
                                        ...PETITIONER
VERSUS

${f.respondent||"__________"} ${f.respondent_gender=="W"?"W/o":"S/o"} ${f.r_father||"__________"}
Age: ${f.r_age||"__"} Yrs, Occupation: ${f.r_occupation||"__________"}
R/o: ${f.r_address||"__________"}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PETITION FOR DIVORCE U/S 13(1)(${f.divorce_ground_code||"ia"})
HINDU MARRIAGE ACT, 1955
(${f.divorce_ground||"CRUELTY"})
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.   MARRIAGE:

     That the petitioner and the respondent were married
     on ${f.marriage_date||"__________"} at ${f.marriage_place||"__________"}
     according to Hindu rites and ceremonies.
     
     Marriage Certificate / Evidence of Marriage:
     ${f.marriage_evidence||"Marriage Certificate / Photographs / Witness Testimony"}
     
     Children born of the marriage:
     ${f.children||"Nil / 1. Name: _______, DOB: _______"}

2.   BRIEF FACTS OF MATRIMONIAL LIFE:

     ${f.marriage_facts||`That after marriage, the parties started living
     together at __________. Initially the matrimonial
     life was __________.`}

3.   ACTS OF CRUELTY / GROUNDS FOR DIVORCE:

     ${f.grounds||`(i)  On __________, the respondent __________
     (ii) On __________, the respondent __________
     (iii)The respondent has been treating the petitioner
          with physical/mental cruelty by __________.
     (iv) On __________, the respondent __________`}

4.   EFFORTS AT RECONCILIATION:

     That the petitioner made sincere efforts at
     reconciliation through ${f.reconciliation||"family members / marriage counsellor"} but without success.

5.   PRESENT STATUS:

     That the petitioner and respondent have been
     living separately since ${f.separation_date||"__________"}.
     The marriage has irretrievably broken down.

6.   JURISDICTION:

     This Court has jurisdiction as the parties
     ${f.jurisdiction||"last resided together / petitioner is residing"} within its territorial limits.

7.   LIMITATION:

     The petition is within limitation as the last
     act of cruelty occurred on ${f.last_act||"__________"}.

                        *** PRAYER ***

     It is most humbly prayed that this Hon'ble Court
     may be pleased to:

     (a) Pass a DECREE OF DIVORCE dissolving the
         marriage between the petitioner and respondent
         solemnised on ${f.marriage_date||"__________"};

     (b) Direct the respondent to pay permanent alimony/
         maintenance of Rs. ${f.alimony||"__________"}/- per month;

     (c) Grant custody of minor child/children to the
         petitioner with reasonable visitation rights
         to respondent;

     (d) Award costs of the proceedings;

     (e) Pass any other order(s) as deemed fit.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.advocate||"__________"})                   (${f.petitioner||"__________"})
Advocate for Petitioner                         Petitioner

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.petitioner||"__________"}, verify that the contents of the
above petition are true and correct to the best of
my personal knowledge and belief.

Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.petitioner||"__________"})
                                          PETITIONER`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 2 — MUTUAL CONSENT DIVORCE
  // ═══════════════════════════════════════════════════════════
  mutual_divorce: {
    name: "Mutual Consent Divorce — First Motion",
    section: "S.13-B Hindu Marriage Act 1955",
    court: "Family Court",
    attach_with: ["mutual_divorce_affidavit","settlement_deed","marriage_certificate"],
    keywords: ["mutual consent divorce","13b hma","aapsi sahmat talak","mutual divorce","first motion divorce"],
    generate: (f={}) => `IN THE COURT OF THE PRINCIPAL JUDGE, FAMILY COURT /
DISTRICT JUDGE
${f.district||"__________"}, ${f.state||"__________"}

MATRIMONIAL SUIT NO. _____ OF ${f.year||new Date().getFullYear()}
(DIVORCE BY MUTUAL CONSENT — FIRST MOTION)

PETITIONER NO.1: ${f.husband||"__________"} S/o ${f.h_father||"__________"}
Age: ${f.h_age||"__"} Yrs, R/o: ${f.h_address||"__________"}

PETITIONER NO.2: ${f.wife||"__________"} W/o ${f.husband||"__________"}
Age: ${f.w_age||"__"} Yrs, R/o: ${f.w_address||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PETITION FOR DIVORCE BY MUTUAL CONSENT U/S 13-B
HINDU MARRIAGE ACT, 1955 (FIRST MOTION)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The above-named petitioners jointly submit as under:

1.  MARRIAGE: The petitioners were married on
    ${f.marriage_date||"__________"} at ${f.marriage_place||"__________"}
    as per Hindu rites. Certificate = Annexure A.

2.  LIVING SEPARATELY: The petitioners have been
    living separately from each other since
    ${f.separation_date||"__________"} i.e. for more than
    ONE YEAR without cohabitation.

3.  UNABLE TO LIVE TOGETHER: The petitioners have
    not been able to live together and all efforts
    at reconciliation have failed.

4.  MUTUAL CONSENT: The petitioners have mutually
    and voluntarily agreed to dissolve the marriage.

5.  SETTLEMENT / TERMS AGREED:

    (a) MAINTENANCE/ALIMONY:
        ${f.alimony_terms||"Full and final settlement of Rs. __________ / Nil maintenance / Monthly maintenance of Rs. __________"}

    (b) CHILDREN/CUSTODY:
        ${f.custody_terms||"No children / Custody of __________ to __________ with visitation rights to __________"}

    (c) PROPERTY:
        ${f.property_terms||"All disputes regarding property have been settled / Details: __________"}

    (d) STRIDHAN / JEWELLERY:
        ${f.stridhan_terms||"Wife's stridhan/jewellery of Rs. __________ has been returned"}

    (e) OTHER TERMS:
        ${f.other_terms||"__________"}

6.  A comprehensive settlement deed dated ${f.settlement_date||"__________"}
    has been executed between the parties.

PRAYER:

(a) Accept this petition as First Motion for divorce
    by mutual consent;

(b) Waive the 6-month mandatory waiting period as
    the marriage has irretrievably broken down
    [Amardeep Singh v. Harveen Kaur (2017) 8 SCC 746];

(c) Pass decree of divorce at the earliest.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.husband||"__________"})           (${f.wife||"__________"})
PETITIONER NO.1                    PETITIONER NO.2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We, the petitioners, jointly and severally verify that
the contents of the above petition are true and correct.

Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

(${f.husband||"__________"})           (${f.wife||"__________"})
PETITIONER NO.1                    PETITIONER NO.2`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 3 — MAINTENANCE APPLICATION
  // ═══════════════════════════════════════════════════════════
  maintenance: {
    name: "Maintenance Application",
    section: "S.125 BNSS 2023 / S.24 HMA / S.20 DV Act",
    court: "Family Court / Magistrate Court",
    attach_with: ["maintenance_affidavit","income_proof"],
    keywords: ["maintenance application","125 bnss","guzara bhatta","maintenance draft","wife maintenance","child maintenance"],
    generate: (f={}) => `IN THE COURT OF THE JUDICIAL MAGISTRATE FIRST CLASS /
PRINCIPAL JUDGE, FAMILY COURT
${f.district||"__________"}, ${f.state||"__________"}

MISC. CASE / M.C. NO. _____ OF ${f.year||new Date().getFullYear()}

${f.applicant||"__________"} W/o / D/o ${f.respondent||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
                                        ...APPLICANT
VERSUS

${f.respondent||"__________"} S/o ${f.r_father||"__________"}
R/o: ${f.r_address||"__________"}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR MAINTENANCE U/S 125 BNSS 2023
(Corresponding to S.125 CrPC) / U/S 24 HMA 1955
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  RELATIONSHIP: The applicant is the ${f.relation||"wife/child/parent"}
    of the respondent. The parties were married on
    ${f.marriage_date||"__________"} / The applicant is the ${f.relation||"__________"} of the respondent.

2.  INCOME OF RESPONDENT:
    The respondent is employed as ${f.r_occupation||"__________"}
    and earns approximately Rs. ${f.r_income||"__________"}/- per month.
    He owns ${f.r_assets||"__________"} (assets).

3.  APPLICANT'S CONDITION:
    The applicant has no independent income / earns
    only Rs. ${f.applicant_income||"__________"}/-. The applicant is
    unable to maintain herself/himself due to
    ${f.reason||"__________"}.

4.  NEGLECT / REFUSAL TO MAINTAIN:
    The respondent has ${f.neglect||"refused to maintain / deserted / neglected"} the applicant despite the applicant's legal entitlement.

5.  MONTHLY EXPENSES OF APPLICANT:
    ┌────────────────────────────────────┐
    │ Food & Groceries: Rs. ${f.food||"_____"}/-    │
    │ Rent:             Rs. ${f.rent||"_____"}/-    │
    │ Medical:          Rs. ${f.medical||"_____"}/-    │
    │ Children's Edu:   Rs. ${f.education||"_____"}/-    │
    │ Other:            Rs. ${f.other||"_____"}/-    │
    │ TOTAL:            Rs. ${f.total_expenses||"_____"}/-    │
    └────────────────────────────────────┘

PRAYER:
(a) Award maintenance of Rs. ${f.maintenance_sought||"__________"}/- per month
    to the applicant with effect from date of application;
(b) Award interim maintenance pending final disposal;
(c) Pass any other order as deemed fit.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Applicant`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 4 — DOMESTIC VIOLENCE APPLICATION
  // ═══════════════════════════════════════════════════════════
  dv_application: {
    name: "Domestic Violence Application",
    section: "S.12 Protection of Women from DV Act 2005",
    court: "Magistrate Court",
    attach_with: ["dv_affidavit","incident_report","medical_report"],
    keywords: ["domestic violence","12 dv act","gharelu hinsa","dv application","protection order","dv case"],
    generate: (f={}) => `IN THE COURT OF THE JUDICIAL MAGISTRATE FIRST CLASS /
METROPOLITAN MAGISTRATE
${f.district||"__________"}, ${f.state||"__________"}

D.V. CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.aggrieved||"__________"} W/o ${f.respondent||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
                                        ...AGGRIEVED PERSON
VERSUS

1. ${f.respondent||"__________"} S/o ${f.r_father||"__________"}
   R/o: ${f.r_address||"__________"} (Husband)

2. ${f.r2||"__________"} (Mother-in-law/Father-in-law/Other)
   R/o: ${f.r2_address||"__________"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION U/S 12 PROTECTION OF WOMEN FROM
DOMESTIC VIOLENCE ACT, 2005
FOR PROTECTION ORDER / RESIDENCE ORDER /
MONETARY RELIEF / CUSTODY ORDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  MARRIAGE: The applicant was married to respondent
    No.1 on ${f.marriage_date||"__________"} at ${f.marriage_place||"__________"}.

2.  DOMESTIC VIOLENCE COMMITTED:

    (A) PHYSICAL ABUSE:
    ${f.physical_abuse||"(Describe physical violence — beating, assault, injuries)"}

    (B) VERBAL & EMOTIONAL ABUSE:
    ${f.verbal_abuse||"(Describe abusive language, threats, humiliation)"}

    (C) ECONOMIC ABUSE:
    ${f.economic_abuse||"(Describe denial of money, stridhan, property)"}

    (D) SEXUAL ABUSE:
    ${f.sexual_abuse||"(If applicable — describe)"}

3.  SHARED HOUSEHOLD:
    The applicant and respondents are residing at
    ${f.shared_household||"__________"} which is the shared household.

4.  STRIDHAN NOT RETURNED:
    The respondents have not returned the applicant's
    stridhan/jewellery worth Rs. ${f.stridhan||"__________"}/-

RELIEFS SOUGHT:

PROTECTION ORDER U/S 18:
Restrain respondents from committing DV, entering
applicant's workplace/school, contacting applicant.

RESIDENCE ORDER U/S 19:
Allow applicant to continue residing at shared
household and restrain respondent from dispossessing.

MONETARY RELIEF U/S 20:
Medical expenses: Rs. ${f.medical_relief||"__________"}/-
Loss of earnings: Rs. ${f.loss_relief||"__________"}/-
Monthly maintenance: Rs. ${f.monthly_relief||"__________"}/-

CUSTODY ORDER U/S 21:
Custody of minor child ${f.child||"__________"} to applicant.

COMPENSATION U/S 22:
Rs. ${f.compensation||"__________"}/- for mental torture and emotional distress.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Applicant`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 5 — CHILD CUSTODY APPLICATION
  // ═══════════════════════════════════════════════════════════
  child_custody: {
    name: "Child Custody Application",
    section: "S.26 HMA / Guardians & Wards Act 1890",
    court: "Family Court",
    attach_with: ["custody_affidavit","child_documents"],
    keywords: ["child custody","custody application","bachche ki custody","26 hma","custody draft","guardianship"],
    generate: (f={}) => `IN THE COURT OF THE PRINCIPAL JUDGE, FAMILY COURT
${f.district||"__________"}, ${f.state||"__________"}

GUARDIANSHIP / CUSTODY CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.applicant||"__________"} (${f.relation||"Father/Mother"})
R/o: ${f.address||"__________"}
                                        ...APPLICANT
VERSUS

${f.respondent||"__________"} (${f.r_relation||"Mother/Father"})
R/o: ${f.r_address||"__________"}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR CUSTODY OF MINOR CHILD U/S 26 HMA 1955 /
GUARDIANS AND WARDS ACT 1890
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CHILD DETAILS:
Name: ${f.child_name||"__________"}, DOB: ${f.child_dob||"__________"}
Age: ${f.child_age||"__"} Years, Currently with: ${f.child_with||"__________"}

1.  The applicant and respondent are ${f.parties_relation||"husband and wife / separated / divorced"}.

2.  APPLICANT'S SUITABILITY:
    The applicant is better suited for custody because:
    ${f.suitability||`(a) Financially stable with income of Rs. ________/- pm
    (b) Has better living conditions / accommodation
    (c) Can provide better education and care
    (d) Child is emotionally attached to applicant`}

3.  BEST INTEREST OF CHILD:
    The welfare of the minor child is best served by
    granting custody to the applicant because:
    ${f.welfare||"(State specific reasons for child's welfare)"}

4.  RESPONDENT'S CONDUCT:
    ${f.respondent_conduct||"(If relevant — state why respondent is not suitable)"}

PRAYER:
(a) Grant permanent custody of minor ${f.child_name||"__________"}
    to the applicant;
(b) Grant reasonable visitation rights to respondent;
(c) Pass interim custody order forthwith.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Applicant`
  },

};
