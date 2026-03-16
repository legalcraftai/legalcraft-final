// ════════════════════════════════════════════════════════════
// CRIMINAL TRIAL FORMATS PACKET
// Discharge Application, Statement 313, Appeal, Complaint
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: { packet: "criminal_trial_formats", total_formats: 8 },

  // ── 1. DISCHARGE APPLICATION ─────────────────────────────
  discharge_application: {
    name: "Discharge Application — S.250 BNSS 2023",
    section: "S.250 BNSS 2023 / S.227 CrPC",
    court: "Sessions Court",
    attach_with: ["discharge_affidavit"],
    keywords: ["discharge application","250 bnss","227 crpc","discharge accused","discharge se pehle","framing charge se pehle discharge"],
    generate: (f={}) => `IN THE COURT OF THE SESSIONS JUDGE
${f.district||"__________"}, ${f.state||"__________"}

SESSIONS CASE NO. ${f.case_no||"_____"} OF ${f.year||new Date().getFullYear()}
(ARISING OUT OF FIR NO. ${f.fir||"_____"} P.S. ${f.ps||"__________"})

STATE OF ${(f.state||"__________").toUpperCase()}    ...PROSECUTION
VERSUS
${f.accused||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}    ...ACCUSED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR DISCHARGE U/S 250 BNSS 2023
(Corresponding to S.227 CrPC 1973)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.   The accused is facing trial in the above Sessions
     Case for offences U/S ${f.sections||"__________"} BNS 2023.
     Charge sheet was filed on ${f.chargesheet_date||"__________"}.

2.   GROUNDS FOR DISCHARGE:

     (i)  That there is absolutely no prima facie case
          against the accused. The material placed before
          this Hon'ble Court does not make out any offence.

     (ii) That the evidence on record is wholly insufficient
          to frame a charge against the accused and even
          if taken at face value, no offence is made out.

     (iii)That the entire prosecution case is based on
          ${f.ground||"false statements / concocted evidence / interested witnesses"}.

     (iv) That the Hon'ble Supreme Court in Union of India
          v. Prafulla Kumar Samal (1979) 3 SCC 4 held that
          at the stage of discharge, if there is no
          sufficient ground for proceeding, the accused
          shall be discharged.

     (v)  That ${f.specific_ground||"(specific legal ground for discharge)"}

PRAYER:
(a) Discharge the accused U/S 250 BNSS 2023;
(b) Pass any other order as deemed fit.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

                              (${f.advocate||"__________"})
                              Advocate for Accused
                              Enrol. No.: ${f.enrol||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I, ${f.accused||"__________"}, verify contents are true.
Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.
                              (${f.accused||"__________"}) — ACCUSED`
  },

  // ── 2. STATEMENT UNDER S.351 BNSS (313 CrPC) ────────────
  statement_351: {
    name: "Statement of Accused — S.351 BNSS 2023",
    section: "S.351 BNSS 2023 / S.313 CrPC",
    court: "Trial Court",
    keywords: ["statement 351 bnss","313 crpc statement","accused statement","statement of accused","313 bayaan"],
    generate: (f={}) => `IN THE COURT OF ${f.court||"__________"}
${f.district||"__________"}, ${f.state||"__________"}

CASE NO. ${f.case_no||"_____"} OF ${f.year||new Date().getFullYear()}
STATE VERSUS ${f.accused||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATEMENT OF ACCUSED U/S 351 BNSS 2023 (S.313 CrPC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name of Accused: ${f.accused||"__________"}
Date of Examination: ${f.date||new Date().toLocaleDateString('en-IN')}

Q.1: Do you understand the charges framed against you?
A.1: ${f.a1||"Yes, I understand the charges."}

Q.2: The prosecution has produced evidence against you. What do you say?
A.2: ${f.a2||"The prosecution evidence is false. I am innocent."}

Q.3: PW-1 (${f.pw1||"__________"}) has deposed against you. What is your explanation?
A.3: ${f.a3||"PW-1 is a interested/inimical witness and has deposed falsely due to __________."}

Q.4: The documents (Exhibit __) produced show __________. What do you say?
A.4: ${f.a4||"The said document/exhibit is __________ and does not prove my guilt."}

Q.5: Do you wish to lead defence evidence?
A.5: ${f.a5||"Yes, I wish to examine defence witnesses. / No, I do not wish to lead evidence."}

Q.6: Do you have anything else to say?
A.6: ${f.a6||"I am innocent and have been falsely implicated. I pray for acquittal."}

                              (${f.accused||"__________"})
                              ACCUSED — Signature

Read over and explained to accused in ${f.language||"Hindi/English"}.
                              (${f.judge||"__________"})
                              PRESIDING OFFICER`
  },

  // ── 3. CRIMINAL APPEAL ───────────────────────────────────
  criminal_appeal: {
    name: "Criminal Appeal Against Conviction",
    section: "S.413 BNSS 2023 / S.374 CrPC",
    court: "Sessions Court / High Court",
    attach_with: ["appeal_affidavit","judgment_copy"],
    keywords: ["criminal appeal","413 bnss","374 crpc","appeal against conviction","saza ke khilaf appeal","criminal appeal draft"],
    generate: (f={}) => `IN THE COURT OF THE SESSIONS JUDGE /
IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}

CRIMINAL APPEAL NO. _____ OF ${f.year||new Date().getFullYear()}

${f.appellant||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
Convicted by: ${f.lower_court||"__________"}
                                        ...APPELLANT/ACCUSED
VERSUS

STATE OF ${(f.state||"__________").toUpperCase()}
                                        ...RESPONDENT/STATE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPEAL U/S 413 BNSS 2023 (S.374 CrPC)
AGAINST JUDGMENT AND ORDER DATED ${f.judgment_date||"__________"}
PASSED BY ${f.lower_court||"__________"} IN SESSIONS CASE /
CRIMINAL CASE NO. ${f.case_no||"_____"} OF ${f.lower_year||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.   IMPUGNED JUDGMENT: By the judgment and order dated
     ${f.judgment_date||"__________"}, the learned ${f.lower_court||"__________"}
     convicted the appellant for offences U/S
     ${f.sections||"__________"} BNS 2023 and sentenced him to
     ${f.sentence||"__________"}.

2.   GROUNDS OF APPEAL:

     (i)  That the learned lower court has committed grave
          error in appreciating the evidence on record.

     (ii) That the prosecution has failed to prove its
          case beyond reasonable doubt and the benefit
          of doubt ought to have been given to the appellant.

     (iii)That the evidence of PW ${f.pw||"__________"} is wholly
          unreliable being ${f.pw_issue||"interested / contradictory / tutored"}.

     (iv) That the identification of the accused is
          doubtful as ${f.id_issue||"(state identification issue)"}.

     (v)  That the learned court below failed to consider
          ${f.unconsidered||"material evidence / defence plea / medical evidence"}.

     (vi) That the sentence awarded is harsh and excessive.

     (vii)That ${f.specific_ground||"(specific legal error in judgment)"}

3.   LIMITATION: The appeal is within limitation.

PRAYER:
(a) Allow the appeal;
(b) Set aside the conviction and sentence;
(c) Acquit the appellant / Reduce the sentence;
(d) Release appellant on bail during pendency.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

                              (${f.advocate||"__________"})
                              Advocate for Appellant`
  },

  // ── 4. ACQUITTAL APPEAL BY STATE ─────────────────────────
  state_appeal_acquittal: {
    name: "Appeal Against Acquittal — By State",
    section: "S.418 BNSS 2023 / S.378 CrPC",
    court: "High Court",
    keywords: ["appeal against acquittal","418 bnss","378 crpc","state appeal acquittal","bari ke khilaf appeal"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
AT ${f.hc||"__________"}

CRIMINAL APPEAL NO. _____ OF ${f.year||new Date().getFullYear()}
(APPEAL AGAINST ACQUITTAL)

STATE OF ${(f.state||"__________").toUpperCase()} THROUGH
PUBLIC PROSECUTOR    ...APPELLANT/STATE

VERSUS

${f.accused||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}    ...RESPONDENT/ACCUSED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATE APPEAL AGAINST ACQUITTAL U/S 418 BNSS 2023
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  The respondent was acquitted by ${f.lower_court||"__________"}
    vide judgment dated ${f.judgment_date||"__________"} in
    ${f.case_no||"__________"} for offences U/S ${f.sections||"__________"}.

2.  GROUNDS:
    (i)  The acquittal is perverse and against evidence.
    (ii) The lower court misappreciated material evidence.
    (iii)${f.grounds||"(Specific grounds for challenging acquittal)"}

PRAYER: Set aside acquittal and convict the accused.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                              PUBLIC PROSECUTOR`
  },

  // ── 5. PROTEST PETITION ──────────────────────────────────
  protest_petition: {
    name: "Protest Petition Against Closure Report",
    section: "S.193 BNSS 2023",
    court: "Magistrate Court",
    keywords: ["protest petition","closure report protest","final report protest","B summary protest","police report protest"],
    generate: (f={}) => `IN THE COURT OF THE CHIEF JUDICIAL MAGISTRATE /
JUDICIAL MAGISTRATE FIRST CLASS
${f.district||"__________"}, ${f.state||"__________"}

CASE NO. _____ OF ${f.year||new Date().getFullYear()}
(IN FIR NO. ${f.fir||"_____"} P.S. ${f.ps||"__________"})

${f.complainant||"__________"} S/o ${f.father||"__________"}
                                        ...COMPLAINANT/PROTESTOR
VERSUS

STATE OF ${(f.state||"__________").toUpperCase()} & ${f.accused||"__________"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROTEST PETITION AGAINST FINAL REPORT / CLOSURE REPORT
(B-SUMMARY) U/S 193 BNSS 2023
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  The complainant filed FIR No. ${f.fir||"_____"} dated
    ${f.fir_date||"__________"} at P.S. ${f.ps||"__________"} for
    offences U/S ${f.sections||"__________"} BNS 2023.

2.  The police has filed a Final Report / Closure
    Report / B-Summary dated ${f.closure_date||"__________"} in
    the above case without proper investigation.

3.  GROUNDS FOR PROTEST:

    (i)  The police investigation was inadequate and
         incomplete. Material evidence was not collected.

    (ii) Witnesses named by the complainant were not
         examined by the police namely ${f.unexamined_witnesses||"__________"}.

    (iii)The police failed to ${f.police_failure||"collect forensic evidence / examine accused properly / seize relevant documents"}.

    (iv) The closure report is perverse and not based
         on proper investigation.

    (v)  ${f.specific_ground||"(Specific ground of protest)"}

4.  The complainant submits that the offence was indeed
    committed and the accused is guilty.

PRAYER:
(a) Reject the Final Report / Closure Report;
(b) Direct further investigation by ${f.investigation_by||"senior officer / CBI / SIT"};
(c) Take cognizance of the offence and issue process;
(d) Pass any other order as deemed fit.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                              (${f.advocate||"__________"})
                              Advocate for Complainant`
  },

  // ── 6. APPLICATION FOR COPY OF DOCUMENTS ─────────────────
  copy_application: {
    name: "Application for Certified Copy of Documents",
    keywords: ["certified copy","copy application","court documents copy","judgment copy application"],
    generate: (f={}) => `TO,
THE READER / COPYIST
${f.court||"__________"} Court
${f.district||"__________"}, ${f.state||"__________"}

DATE: ${f.date||new Date().toLocaleDateString('en-IN')}

APPLICATION FOR CERTIFIED COPY

Sir/Madam,

I, ${f.applicant||"__________"} S/o ${f.father||"__________"},
the ${f.role||"accused / complainant / party"} in Case No.
${f.case_no||"__________"}, request certified copies of the
following documents:

1. ${f.doc1||"Judgment dated __________"}
2. ${f.doc2||"Order dated __________"}
3. ${f.doc3||"Charge Sheet / FIR Copy"}
4. ${f.doc4||"__________"}

PURPOSE: ${f.purpose||"For filing appeal / For personal record / For legal proceedings"}

I am ready to pay the prescribed copy charges.

                              (${f.applicant||"__________"})
                              Applicant — Signature

FOR COURT USE:
Copy No.: _______  Charges: Rs. _______  Date: _______`
  },

  // ── 7. MEMO OF PARTIES ────────────────────────────────────
  memo_of_parties: {
    name: "Memo of Parties",
    keywords: ["memo of parties","parties memo","case parties list"],
    generate: (f={}) => `MEMO OF PARTIES

COURT: ${f.court||"__________"}
CASE NO.: ${f.case_no||"__________"}

APPELLANT / PETITIONER / PLAINTIFF:
1. ${f.party1||"__________"} S/o ${f.p1_father||"__________"}
   Age: ${f.p1_age||"__"} Yrs, R/o: ${f.p1_address||"__________"}
   Advocate: ${f.p1_advocate||"__________"}, Enrol: ${f.p1_enrol||"__________"}

RESPONDENT / ACCUSED / DEFENDANT:
1. ${f.party2||"__________"} S/o ${f.p2_father||"__________"}
   R/o: ${f.p2_address||"__________"}
   Advocate: ${f.p2_advocate||"__________"}

2. STATE OF ${(f.state||"__________").toUpperCase()} Through:
   Public Prosecutor / Government Pleader

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                              (${f.advocate||"__________"})
                              Advocate — Enrol. No.: ${f.enrol||"__________"}`
  },

  // ── 8. CONDONATION OF DELAY ───────────────────────────────
  condonation_delay: {
    name: "Application for Condonation of Delay",
    section: "S.5 Limitation Act 1963",
    court: "Any Court",
    keywords: ["condonation of delay","delay condone","late filing application","5 limitation act","delay excuse","deri maafi"],
    generate: (f={}) => `IN THE COURT OF ${f.court||"__________"}
${f.district||"__________"}, ${f.state||"__________"}

${f.case_type||"APPEAL / APPLICATION"} NO. _____ OF ${f.year||new Date().getFullYear()}

${f.applicant||"__________"}    ...APPLICANT
VERSUS
${f.respondent||"__________"}   ...RESPONDENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR CONDONATION OF DELAY OF ${f.delay||"___"} DAYS
IN FILING THE ${f.filing_type||"APPEAL / APPLICATION"}
U/S 5 LIMITATION ACT, 1963
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  The applicant is filing this ${f.filing_type||"appeal / application"}
    with a delay of ${f.delay||"___"} days beyond the
    prescribed limitation period.

2.  CAUSE OF DELAY:

    (i)  Date of impugned order/judgment: ${f.order_date||"__________"}
    (ii) Prescribed limitation period:     ${f.limitation||"30 / 60 / 90 days"}
    (iii)Last date for filing:             ${f.last_date||"__________"}
    (iv) Date of actual filing:            ${f.filing_date||new Date().toLocaleDateString('en-IN')}
    (v)  Total delay:                      ${f.delay||"___"} days

3.  REASONS FOR DELAY (Sufficient cause):

    ${f.reasons||`(i)  The applicant came to know of the impugned
         order/judgment only on __________ as __________
    (ii) The applicant was seriously ill from __________ to
         __________ and was unable to attend to legal work.
         Medical certificate = Annexure A.
    (iii)The applicant was unable to engage a lawyer
         immediately due to financial constraints.
    (iv) The applicant is a poor/illiterate person
         residing in a remote area.
    (v)  There was __________ other sufficient cause.`}

4.  That the delay was not due to any deliberate
    inaction or negligence on the part of the applicant.

5.  That the applicant has a good case on merits.

PRAYER:
(a) Condone the delay of ${f.delay||"___"} days;
(b) Allow the ${f.filing_type||"appeal / application"} to be filed.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                              (${f.advocate||"__________"})
                              Advocate for Applicant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AFFIDAVIT IN SUPPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.applicant||"__________"}, verify that the reasons stated
above for the delay are true and correct.

Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                              (${f.applicant||"__________"})
                                    DEPONENT`
  },

};
