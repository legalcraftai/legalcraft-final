// ════════════════════════════════════════════════════════════
// BAIL FORMATS PACKET — All bail types + attached documents
// Regular Bail, Anticipatory Bail, Default Bail + Affidavits
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: {
    packet: "bail_formats",
    version: "1.0",
    total_formats: 8,
    covers: ["Regular Bail","Anticipatory Bail","Default Bail","Bail Cancellation","Surety Bond","Bail Affidavit","Personal Bond","Undertaking"]
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 1 — REGULAR BAIL (Sessions Court)
  // Attached: Affidavit + Surety Bond
  // ═══════════════════════════════════════════════════════════
  regular_bail: {
    name: "Regular Bail Application",
    section: "S.483 BNSS 2023 / S.439 CrPC",
    court: "Sessions Court / High Court",
    attach_with: ["bail_affidavit","surety_bond","personal_bond"],
    keywords: ["regular bail","bail application","483 bnss","439 crpc","sessions bail","bail chahiye","regular bail draft"],
    generate: (f={}) => `IN THE COURT OF THE HON'BLE SESSIONS JUDGE /
ADDITIONAL SESSIONS JUDGE
${f.district||"__________"}, ${f.state||"__________"}

CRIMINAL MISC. APPLICATION NO. _____ OF ${f.year||new Date().getFullYear()}

IN THE MATTER OF FIR NO. ${f.fir||"_____"} DATED ${f.fir_date||"__________"}
POLICE STATION ${f.ps||"__________"}, DISTRICT ${f.district||"__________"}
U/S ${f.sections||"__________"} BNS 2023

${f.accused||"__________"}
S/o Sh. ${f.father||"__________"}
Age: ${f.age||"__"} Years, Occupation: ${f.occupation||"__________"}
R/o: ${f.address||"__________"}
Currently Lodged at: ${f.jail||"__________"}
                                        ...APPLICANT/ACCUSED
VERSUS

STATE OF ${(f.state||"__________").toUpperCase()} THROUGH
STATION HOUSE OFFICER
${f.ps||"__________"} POLICE STATION
                                        ...NON-APPLICANT/STATE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   APPLICATION FOR BAIL U/S 483 BNSS 2023 (S.439 CrPC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.   That the applicant/accused has been arrested on
     ${f.arrest_date||"__________"} in connection with FIR No.
     ${f.fir||"_____"} dated ${f.fir_date||"__________"} registered at
     P.S. ${f.ps||"__________"}, District ${f.district||"__________"},
     for alleged offences U/S ${f.sections||"__________"} of the
     Bharatiya Nyaya Sanhita, 2023 and is presently
     lodged at ${f.jail||"__________"} since ${f.custody_since||"__________"}.

2.   BRIEF FACTS OF THE CASE:

     ${f.facts||"That the prosecution alleges that on __________ at __________, the applicant __________. The applicant denies all allegations."}

3.   GROUNDS IN SUPPORT OF BAIL:

     (i)   That the applicant is innocent and has been falsely
           and fraudulently implicated in this case. The FIR
           has been lodged with mala fide intention to harass
           the applicant.

     (ii)  That there is absolutely no credible or reliable
           evidence against the applicant. The case of the
           prosecution is based entirely on conjectures and
           surmises.

     (iii) That the applicant has deep roots in the society.
           He/She is a permanent resident of ${f.address||"__________"}
           and is not likely to abscond or flee from justice.

     (iv)  That the applicant has ${f.family||"wife/husband/children/parents"}
           who are fully dependent upon him/her and his/her
           incarceration is causing severe hardship to them.

     (v)   That the applicant has no previous criminal record
           and is a law-abiding citizen.

     (vi)  That the investigation in the present case is
           complete and the charge-sheet ${f.chargesheet||"has been filed / is likely to be filed soon"}.

     (vii) That the applicant shall not tamper with the
           evidence or influence or intimidate any witness
           if released on bail.

     (viii)That ${f.special_grounds||"(any special grounds — medical/age/women/etc.)"}

     (ix)  That it is a settled proposition of law that
           "BAIL IS THE RULE AND JAIL IS THE EXCEPTION."
           The Hon'ble Supreme Court in Satender Kumar Antil
           v. CBI (2022) 10 SCC 51 has categorically held
           that courts must not mechanically deny bail.

     (x)   That keeping the applicant in custody serves no
           purpose of justice and would only cause
           irreparable harm to the applicant and his/her family.

4.   That the applicant undertakes to:
     (a)   Appear before this Hon'ble Court / Investigating
           Agency on each and every date;
     (b)   Not leave the territorial jurisdiction of this
           Court without prior permission;
     (c)   Not contact, threaten or influence any witness;
     (d)   Surrender his/her passport if so directed;
     (e)   Abide by all conditions imposed by this Court.

5.   That no previous bail application has been filed by the
     applicant before this Hon'ble Court or any other court
     in connection with this FIR.
     OR
     That a previous bail application was rejected by this
     Court on __________ on the ground that __________. The
     present application is based on fresh grounds viz.
     __________.

                        *** PRAYER ***

     It is therefore most humbly prayed that this Hon'ble
     Court may be pleased to:

     (A)  GRANT BAIL to the applicant in FIR No. ${f.fir||"_____"}
          dated ${f.fir_date||"__________"} P.S. ${f.ps||"__________"}
          on such terms and conditions as may be deemed just
          and proper by this Hon'ble Court;

     (B)  Pass any other order(s) in favour of the applicant
          in the interest of justice.

                    AND FOR THIS ACT OF KINDNESS
                    THE APPLICANT SHALL EVER PRAY.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}


(${f.advocate||"__________"})                   (${f.accused||"__________"})
Advocate for Applicant                          Applicant
Enrol. No.: ${f.enrol||"__________"}
Mobile: ${f.mobile||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.accused||"__________"}, the applicant above named, do hereby
solemnly verify that the contents of paragraphs 1 to 5
of the above application are true and correct to the best
of my personal knowledge and belief. No part of it is
false and nothing material has been concealed therefrom.

Verified at ${f.district||"__________"} on this ${f.date||new Date().toLocaleDateString('en-IN')}.

                                        (${f.accused||"__________"})
                                              APPLICANT`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 2 — ANTICIPATORY BAIL
  // Attached: Affidavit + Undertaking
  // ═══════════════════════════════════════════════════════════
  anticipatory_bail: {
    name: "Anticipatory Bail Application",
    section: "S.482 BNSS 2023 / S.438 CrPC",
    court: "Sessions Court / High Court (both have jurisdiction)",
    attach_with: ["anticipatory_bail_affidavit","undertaking"],
    keywords: ["anticipatory bail","482 bnss","438 crpc","pre arrest bail","advance bail","giraftari se pehle bail","anticipatory bail draft"],
    generate: (f={}) => `IN THE COURT OF HON'BLE SESSIONS JUDGE
${f.district||"__________"}, ${f.state||"__________"}

                            OR

IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
AT ${f.hc||"__________"}

CRIMINAL MISC. APPLICATION NO. _____ OF ${f.year||new Date().getFullYear()}

${f.applicant||"__________"}
S/o Sh. ${f.father||"__________"}
Age: ${f.age||"__"} Years, Occupation: ${f.occupation||"__________"}
R/o: ${f.address||"__________"}
                                        ...APPLICANT
VERSUS

STATE OF ${(f.state||"__________").toUpperCase()}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  APPLICATION FOR ANTICIPATORY BAIL U/S 482 BNSS 2023
              (Corresponding to S.438 CrPC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.   That the applicant has a reasonable apprehension that
     he/she is likely to be arrested by the ${f.ps||"__________"}
     Police in connection with ${f.case_detail||"a false complaint / FIR No. _____ dated _____ / prospective FIR"} for alleged
     offences U/S ${f.sections||"__________"} BNS 2023.

2.   BACKGROUND AND FACTS:

     ${f.background||"That the applicant and the complainant __________ are involved in a __________ dispute. The applicant apprehends that the complainant may file a false FIR against him/her with mala fide intention to harass and humiliate him/her."}

3.   GROUNDS FOR ANTICIPATORY BAIL:

     (i)   That the apprehension of arrest is based on a
           false, frivolous and malicious complaint/FIR
           filed by ${f.complainant||"__________"} with the sole
           intention of ${f.motive||"harassing/pressurising/settling personal scores"}.

     (ii)  That the applicant is innocent and has not
           committed any offence as alleged.

     (iii) That the applicant is a permanent resident of the
           above address and has deep roots in the society.
           He/She is not likely to abscond or flee.

     (iv)  That the applicant is ready and willing to fully
           cooperate with the Investigating Officer and shall
           make himself/herself available for interrogation
           whenever required.

     (v)   That the applicant shall not tamper with any
           evidence or attempt to influence any witness.

     (vi)  That the Hon'ble Supreme Court in Gurbaksh Singh
           Sibbia v. State of Punjab AIR 1980 SC 1632 has
           held that anticipatory bail cannot be refused
           merely because the alleged offence is serious.
           The court must look at the overall facts.

     (vii) That in Sushila Aggarwal v. State (NCT of Delhi)
           (2020) 5 SCC 1, the Hon'ble Supreme Court held
           that anticipatory bail need not be time-limited
           and shall continue till end of trial.

     (viii)That ${f.special_grounds||"(special grounds — prominent citizen / medical condition / sole earning member)"}

4.   That the applicant undertakes to:
     (a)   Present himself/herself before the I.O. for
           interrogation as and when required;
     (b)   Not leave the country without permission of Court;
     (c)   Surrender passport to the I.O. if so required;
     (d)   Not tamper with evidence or influence witnesses;
     (e)   Abide by all terms and conditions imposed.

                        *** PRAYER ***

     It is therefore most humbly prayed that this Hon'ble
     Court may be pleased to:

     (A)  DIRECT that in the event of arrest of the
          applicant in connection with the aforesaid
          case/complaint, the applicant shall be released
          on ANTICIPATORY BAIL on such terms and conditions
          as this Hon'ble Court may deem fit;

     (B)  Grant an ex-parte ad-interim protection from
          arrest to the applicant pending hearing of this
          application;

     (C)  Pass any other order(s) in the interest of justice.

                    AND FOR THIS ACT OF KINDNESS
                    THE APPLICANT SHALL EVER PRAY.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}


(${f.advocate||"__________"})                   (${f.applicant||"__________"})
Advocate for Applicant                          Applicant
Enrol. No.: ${f.enrol||"__________"}
Mobile: ${f.mobile||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.applicant||"__________"}, do hereby verify that the contents
of the above application are true and correct.

Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                        (${f.applicant||"__________"})
                                              APPLICANT`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 3 — DEFAULT / STATUTORY BAIL (Half Period)
  // ═══════════════════════════════════════════════════════════
  default_bail: {
    name: "Default Bail / Statutory Bail",
    section: "S.479 BNSS 2023 / S.436-A CrPC",
    court: "Magistrate Court",
    attach_with: ["custody_certificate","bail_affidavit"],
    keywords: ["default bail","statutory bail","479 bnss","half period bail","undertrial bail"],
    generate: (f={}) => `IN THE COURT OF THE CHIEF JUDICIAL MAGISTRATE /
JUDICIAL MAGISTRATE FIRST CLASS
${f.district||"__________"}, ${f.state||"__________"}

CRIMINAL MISC. APPLICATION NO. _____ OF ${f.year||new Date().getFullYear()}

${f.accused||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Years, R/o: ${f.address||"__________"}
Lodged at: ${f.jail||"__________"} since ${f.custody_date||"__________"}
                                        ...APPLICANT/ACCUSED
VERSUS

STATE OF ${(f.state||"__________").toUpperCase()}
                                        ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    APPLICATION FOR STATUTORY/DEFAULT BAIL U/S 479
    BNSS 2023 (Corresponding to Section 436-A CrPC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  The applicant was arrested on ${f.arrest_date||"__________"} in
    FIR No. ${f.fir||"_____"} P.S. ${f.ps||"__________"} U/S
    ${f.sections||"__________"} BNS 2023.

2.  PERIOD CALCULATION:
    ┌─────────────────────────────────────────────────┐
    │ Date of Arrest:              ${f.arrest_date||"__________"}       │
    │ Maximum Sentence for Offence: ${f.max_sentence||"___ Years"}      │
    │ Half of Maximum Sentence:     ${f.half_period||"___ Years/Months"}│
    │ Period Already in Custody:    ${f.custody_period||"__________"}   │
    │ Entitled to Default Bail from:${f.entitled_from||"__________"}   │
    └─────────────────────────────────────────────────┘

3.  As per S.479 BNSS 2023, any person detained during
    investigation/inquiry/trial for a period extending to
    ONE-HALF of maximum imprisonment specified for that
    offence SHALL BE RELEASED ON BAIL by the Magistrate.

4.  The trial has not concluded despite applicant being
    in custody for ${f.custody_period||"__________"} which exceeds the
    statutory half period.

5.  The applicant is entitled to default bail as a matter
    of RIGHT and the Court has no discretion to refuse.

PRAYER: Release the applicant on statutory bail forthwith
under S.479 BNSS 2023.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Applicant`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 4 — BAIL AFFIDAVIT (Attached with Bail)
  // ═══════════════════════════════════════════════════════════
  bail_affidavit: {
    name: "Affidavit in Support of Bail Application",
    attach_with: ["regular_bail","anticipatory_bail"],
    keywords: ["bail affidavit","affidavit bail","bail ke sath affidavit","bail supporting affidavit"],
    generate: (f={}) => `AFFIDAVIT

IN THE COURT OF SESSIONS JUDGE / JUDICIAL MAGISTRATE
${f.district||"__________"}, ${f.state||"__________"}
CASE: FIR No. ${f.fir||"_____"} P.S. ${f.ps||"__________"}

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},

Do hereby solemnly affirm and state on oath as under:

1.  That I am the applicant/accused / surety / relative
    of the accused ${f.accused||"__________"} in the above case
    and am fully conversant with the facts herein.

2.  That the contents of the accompanying bail application
    are true and correct to the best of my knowledge
    and belief and no material fact has been concealed.

3.  That the accused ${f.accused||"__________"} is a permanent
    resident of ${f.accused_address||"__________"} and is not likely
    to abscond or flee from justice.

4.  That ${f.accused||"__________"} has ${f.family||"a family including wife/children/parents"} who are dependent upon him/her.

5.  That the accused has no previous criminal antecedents
    of a serious nature.

6.  That I am ready and willing to stand as surety for
    the accused for a sum of Rs. ${f.surety_amount||"__________"}/-.

7.  That I own the following property which I offer as
    security if required by this Hon'ble Court:
    ${f.property||"__________"}
    Estimated Value: Rs. ${f.property_value||"__________"}/-

8.  That the facts stated above are true and correct.
    Nothing is false and nothing material has been
    concealed.

                                    DEPONENT

VERIFICATION:
Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')} that the
contents of the above affidavit are true and correct.

                                    (${f.deponent||"__________"})
                                          DEPONENT

Solemnly affirmed and signed before me on
${f.date||new Date().toLocaleDateString('en-IN')}

                        OATH COMMISSIONER / NOTARY PUBLIC
                        Stamp & Seal`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 5 — SURETY BOND
  // ═══════════════════════════════════════════════════════════
  surety_bond: {
    name: "Surety Bond",
    attach_with: ["regular_bail","default_bail"],
    keywords: ["surety bond","bail bond","zamaanat","surety bail","bail surety"],
    generate: (f={}) => `SURETY BOND / ZAMAANAT PATRA

BEFORE: The Hon'ble Court of ${f.court||"__________"}
CASE NO.: ${f.case_no||"__________"}
FIR No.: ${f.fir||"_____"} P.S.: ${f.ps||"__________"}
ACCUSED: ${f.accused||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I/WE HEREBY BIND OURSELVES:

SURETY 1:
Name:         ${f.surety1_name||"__________"}
S/o:          ${f.surety1_father||"__________"}
Age:          ${f.surety1_age||"__"} Years
Occupation:   ${f.surety1_occupation||"__________"}
Address:      ${f.surety1_address||"__________"}
Relation with accused: ${f.surety1_relation||"__________"}

SURETY 2 (if required):
Name:         ${f.surety2_name||"__________"}
S/o:          ${f.surety2_father||"__________"}
Address:      ${f.surety2_address||"__________"}

AMOUNT OF BOND: Rs. ${f.bond_amount||"__________"}/- each
(Rupees ${f.amount_words||"__________"} Only)

CONDITION OF THIS BOND:

The condition of this bond is that if the above-named
accused ${f.accused||"__________"} shall:

(a) Appear before this Hon'ble Court on EACH AND EVERY
    DATE fixed in the above case without fail;

(b) Not leave the jurisdiction of this Court without
    prior written permission;

(c) Not tamper with any evidence or influence witnesses;

(d) Abide by all conditions imposed by the Hon'ble Court;

Then this bond shall be void, otherwise it shall remain
in full force and effect.

PROPERTY OFFERED AS SECURITY (if required):
Description: ${f.property||"__________"}
Market Value: Rs. ${f.property_value||"__________"}/-
Documents attached: ${f.property_docs||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.surety1_name||"__________"})         (${f.surety2_name||"__________"})
    SURETY 1                              SURETY 2

WITNESS:
1. Name: _____________ Sign: _____________ Date: _______
2. Name: _____________ Sign: _____________ Date: _______

ACCEPTED BY THE COURT:
Signature of Court Officer: _____________
Designation: _____________
Date: _____________`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 6 — PERSONAL BOND (Accused himself)
  // ═══════════════════════════════════════════════════════════
  personal_bond: {
    name: "Personal Bond",
    attach_with: ["regular_bail","default_bail"],
    keywords: ["personal bond","bail personal bond","muchilaaka","PR bond"],
    generate: (f={}) => `PERSONAL BOND / MUCHILAAKA

BEFORE: The Hon'ble Court of ${f.court||"__________"}
CASE: FIR No. ${f.fir||"_____"} P.S. ${f.ps||"__________"}

I, ${f.accused||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Years, R/o: ${f.address||"__________"},

do hereby bind myself in the sum of Rs. ${f.bond_amount||"__________"}/-
(Rupees ${f.amount_words||"__________"} Only) to appear before
this Hon'ble Court on each and every date fixed in the
above-mentioned case and to abide by all conditions
imposed by this Hon'ble Court.

I undertake that:
(a) I shall appear on every date without fail;
(b) I shall not leave the jurisdiction without permission;
(c) I shall not tamper with evidence or contact witnesses;
(d) I shall surrender myself if the bail is cancelled.

If I fail to comply with any of the above conditions,
I shall be liable to forfeit the above amount.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Place: ${f.district||"__________"}

                                    (${f.accused||"__________"})
                                    ACCUSED/APPLICANT

WITNESS:
1. _________________ 2. _________________`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 7 — UNDERTAKING (Court Condition Compliance)
  // ═══════════════════════════════════════════════════════════
  undertaking: {
    name: "Undertaking / Affidavit of Compliance",
    attach_with: ["anticipatory_bail","regular_bail"],
    keywords: ["undertaking bail","bail undertaking","compliance affidavit"],
    generate: (f={}) => `UNDERTAKING

IN THE COURT OF ${f.court||"__________"}
CASE: FIR No. ${f.fir||"_____"} P.S. ${f.ps||"__________"}

I, ${f.accused||"__________"} S/o ${f.father||"__________"},
R/o: ${f.address||"__________"},

do hereby solemnly undertake and assure this Hon'ble Court as under:

1.  I shall appear before this Court / I.O. on each and
    every date without fail.

2.  I shall not, directly or indirectly, tamper with
    evidence or try to influence any witness.

3.  I shall not leave the territorial jurisdiction of
    this Court without prior written permission.

4.  I shall surrender my passport to the I.O. / Court
    within ${f.days||"7 (Seven)"} days.

5.  I shall report to ${f.ps||"__________"} Police Station
    every ${f.report_frequency||"Sunday"} between ${f.report_time||"10 AM to 12 PM"}.

6.  I shall not contact the complainant directly or
    indirectly.

7.  I shall not repeat or commit any similar offence.

8.  I shall abide by all conditions imposed by this
    Hon'ble Court and shall not misuse the liberty of bail.

If I breach any of the above conditions, I consent to
my bail being cancelled and being taken into custody.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.accused||"__________"})
                                    DEPONENT/ACCUSED

Solemnly affirmed before me:

                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 8 — BAIL CANCELLATION
  // ═══════════════════════════════════════════════════════════
  bail_cancellation: {
    name: "Bail Cancellation Application",
    section: "S.483 BNSS 2023",
    court: "Sessions Court / High Court",
    attach_with: ["bail_cancellation_affidavit"],
    keywords: ["bail cancellation","cancel bail","bail cancel","bail wapas lo","bail cancellation application"],
    generate: (f={}) => `IN THE COURT OF HON'BLE SESSIONS JUDGE
${f.district||"__________"}, ${f.state||"__________"}

CRIMINAL MISC. APPLICATION NO. _____ OF ${f.year||new Date().getFullYear()}

STATE OF ${(f.state||"__________").toUpperCase()} THROUGH SHO
${f.ps||"__________"} POLICE STATION / ${f.complainant||"__________"}
                                        ...APPLICANT
VERSUS

${f.accused||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...RESPONDENT/ACCUSED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     APPLICATION FOR CANCELLATION OF BAIL U/S 483 BNSS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  The respondent/accused was granted bail by this
    Hon'ble Court vide order dated ${f.bail_order_date||"__________"}
    in FIR No. ${f.fir||"_____"} P.S. ${f.ps||"__________"}.

2.  After being released on bail, the accused has:
    ${f.grounds||"(a) Threatened the complainant/witnesses\n    (b) Tampered with evidence\n    (c) Committed a fresh offence\n    (d) Violated bail conditions by ________"}

3.  That the accused has misused the liberty of bail
    and continued criminal activities.

4.  Evidence of violation: ${f.evidence||"__________"}

PRAYER: Cancel bail and take accused into custody.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Applicant`
  },

};
