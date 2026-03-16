// ════════════════════════════════════════════════════════════
// FIR & COMPLAINT FORMATS PACKET
// FIR, Zero FIR, Magistrate Complaint, NCR + Affidavits
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: {
    packet: "fir_formats",
    version: "1.0",
    total_formats: 6,
    covers: ["FIR","Zero FIR","Magistrate Complaint","NCR","Section 156(3) Application","Complaint Affidavit"]
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 1 — FIR (Police Station)
  // ═══════════════════════════════════════════════════════════
  fir: {
    name: "FIR — First Information Report",
    section: "S.173 BNSS 2023 / S.154 CrPC",
    court: "Police Station",
    attach_with: ["fir_affidavit"],
    keywords: ["fir","first information report","173 bnss","police complaint","fir draft","fir likhna","fir kaise likhe"],
    generate: (f={}) => `TO,
THE STATION HOUSE OFFICER / OFFICER-IN-CHARGE
${f.ps||"__________"} Police Station
District: ${f.district||"__________"}, State: ${f.state||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FIRST INFORMATION REPORT / WRITTEN COMPLAINT
U/S 173 BHARATIYA NAGARIK SURAKSHA SANHITA, 2023
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPLAINANT PARTICULARS:
┌──────────────────────────────────────────────────────┐
│ Name:        ${f.name||"__________"}                  │
│ S/o D/o W/o: ${f.father||"__________"}               │
│ Age:         ${f.age||"__"} Years                     │
│ Address:     ${f.address||"__________"}               │
│ Mobile:      ${f.mobile||"__________"}                │
│ Occupation:  ${f.occupation||"__________"}            │
│ Aadhaar No.: ${f.aadhaar||"(Optional)"}              │
└──────────────────────────────────────────────────────┘

ACCUSED PARTICULARS:
┌──────────────────────────────────────────────────────┐
│ Name:        ${f.accused||"Known/Unknown"}            │
│ S/o:         ${f.accused_father||"__________"}       │
│ Address:     ${f.accused_address||"__________"}      │
│ Mobile:      ${f.accused_mobile||"(if known)"}       │
│ Relation:    ${f.relation||"__________"}              │
└──────────────────────────────────────────────────────┘

INCIDENT PARTICULARS:
┌──────────────────────────────────────────────────────┐
│ Date of Incident: ${f.incident_date||"__________"}   │
│ Time of Incident: ${f.incident_time||"__________"}   │
│ Place:            ${f.place||"__________"}           │
│                   ${f.place_detail||"(Landmark/exact location)"} │
└──────────────────────────────────────────────────────┘

FACTS OF THE CASE:
(Narration in chronological order)

${f.facts||`That on __________, at about _________ hours, the
complainant was at ____________ when ________________.
The accused then ___________. As a result, the complainant
suffered ____________. The incident was witnessed by
____________.`}

WITNESSES:
1. Name: ${f.w1_name||"__________"}, Address: ${f.w1_address||"__________"}
2. Name: ${f.w2_name||"__________"}, Address: ${f.w2_address||"__________"}
3. Name: ${f.w3_name||"__________"}, Address: ${f.w3_address||"__________"}

EVIDENCE / DOCUMENTS AVAILABLE:
${f.evidence||"(Photographs/Videos/Medical Reports/Documents/Other)"}

OFFENCES COMMITTED:
The aforesaid acts of the accused constitute offences under:
• ${f.sections||"__________"} Bharatiya Nyaya Sanhita, 2023
• ${f.other_sections||"(Other Acts if applicable)"}

RELIEF SOUGHT:
1. Register FIR against the accused persons;
2. Arrest accused and take appropriate legal action;
3. ${f.relief||"Recover stolen property / Take medical report / Other"}
4. Do the needful in the interest of justice.

I declare that the above information is TRUE AND CORRECT
to the best of my knowledge and belief.

Date:  ${f.date||new Date().toLocaleDateString('en-IN')}
Time:  ${f.time||new Date().toLocaleTimeString('en-IN')}
Place: ${f.ps||"__________"} Police Station

                                    (${f.name||"__________"})
                                    Complainant — Signature
                                    Left Thumb Impression

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOR POLICE STATION USE ONLY:
FIR No.: _______   Date: _______   Time: _______
Entered by: _______   Station Diary No.: _______
Free copy given to complainant: YES / NO
Forwarded to Magistrate: YES / NO   Date: _______
Signature of SHO: _______
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 2 — ZERO FIR
  // ═══════════════════════════════════════════════════════════
  zero_fir: {
    name: "Zero FIR — Any Police Station",
    section: "S.173 BNSS 2023",
    court: "Any Police Station",
    attach_with: ["fir_affidavit"],
    keywords: ["zero fir","zero fir draft","any police station fir","zero fir likhna"],
    generate: (f={}) => `TO,
THE STATION HOUSE OFFICER
${f.ps||"__________"} Police Station
District: ${f.district||"__________"}, ${f.state||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ZERO FIR U/S 173 BNSS 2023
    (To be transferred to Jurisdictional Police Station)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Respected Sir/Madam,

I, ${f.name||"__________"} S/o ${f.father||"__________"},
R/o: ${f.address||"__________"}, Mobile: ${f.mobile||"__________"},

am filing this Zero FIR as the incident occurred at
${f.place||"__________"} which falls under the jurisdiction of
${f.jurisdiction_ps||"__________"} Police Station, District
${f.jurisdiction_district||"__________"}.

As I am presently at ${f.current_location||"__________"} and am in
urgent need of police action, I am filing this complaint
at your Police Station under the Zero FIR provision.

INCIDENT DETAILS:
Date: ${f.incident_date||"__________"}
Time: ${f.incident_time||"__________"}
Place: ${f.place||"__________"} (Jurisdiction: ${f.jurisdiction_ps||"__________"} PS)

ACCUSED: ${f.accused||"__________"}, Address: ${f.accused_address||"__________"}

FACTS:
${f.facts||"(Describe incident briefly)"}

OFFENCES: ${f.sections||"__________"} BNS 2023

PRAYER:
1. Register this as Zero FIR immediately;
2. Transfer to ${f.jurisdiction_ps||"__________"} PS within 24 hours;
3. Provide me FIR number and transfer details.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.name||"__________"})
                                          Complainant`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 3 — PRIVATE COMPLAINT TO MAGISTRATE
  // ═══════════════════════════════════════════════════════════
  magistrate_complaint: {
    name: "Private Complaint to Magistrate",
    section: "S.210 BNSS 2023 / S.190 CrPC",
    court: "Judicial Magistrate First Class / CJM",
    attach_with: ["complaint_affidavit","witness_list"],
    keywords: ["private complaint magistrate","210 bnss","190 crpc","magistrate complaint","private complaint"],
    generate: (f={}) => `IN THE COURT OF THE CHIEF JUDICIAL MAGISTRATE /
JUDICIAL MAGISTRATE FIRST CLASS
${f.district||"__________"}, ${f.state||"__________"}

COMPLAINT CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.complainant||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
                                        ...COMPLAINANT
VERSUS

1. ${f.accused1||"__________"} S/o __________, R/o: ${f.accused1_addr||"__________"}
2. ${f.accused2||"__________"} S/o __________, R/o: ${f.accused2_addr||"__________"}
3. ${f.accused3||"__________"} S/o __________, R/o: ${f.accused3_addr||"__________"}
                                        ...ACCUSED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  COMPLAINT U/S 210 BNSS 2023 FOR OFFENCES U/S
  ${f.sections||"__________"} BHARATIYA NYAYA SANHITA, 2023
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.   That the complainant is a law-abiding citizen and
     the facts mentioned below are within his/her
     personal knowledge.

2.   CHRONOLOGY OF EVENTS:

     ${f.facts||`On __________, the accused __________ illegally
     __________. On __________, the accused further __________
     __________. Due to the aforesaid acts, the complainant
     has suffered __________.`}

3.   That the above acts of the accused persons constitute
     the following offences:
     (a) ${f.offence1||"__________"} — U/S ${f.section1||"__________"} BNS 2023
     (b) ${f.offence2||"__________"} — U/S ${f.section2||"__________"} BNS 2023

4.   That the complainant filed a complaint at P.S.
     ${f.ps||"__________"} on ${f.police_date||"__________"} but the
     police failed to register FIR / take appropriate action.
     Hence, this complaint before this Hon'ble Court.

5.   WITNESSES TO BE EXAMINED:
     (i)  ${f.w1||"__________"}, R/o: ${f.w1_addr||"__________"}
     (ii) ${f.w2||"__________"}, R/o: ${f.w2_addr||"__________"}

6.   DOCUMENTS RELIED UPON:
     (i)  ${f.doc1||"__________"}
     (ii) ${f.doc2||"__________"}

PRAYER:
(a) Take cognizance of offences under ${f.sections||"__________"} BNS;
(b) Issue summons/warrant to the accused;
(c) Examine the complainant on oath under S.213 BNSS;
(d) Try and punish the accused as per law.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Place: ${f.district||"__________"}

(${f.advocate||"__________"})
Advocate for Complainant
Enrol. No.: ${f.enrol||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.complainant||"__________"}, verify that the contents of the
above complaint are true and correct to the best of my
knowledge and belief.

Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.complainant||"__________"})
                                          COMPLAINANT`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 4 — S.175(3) BNSS / S.156(3) CrPC APPLICATION
  // (Directing Police to Register FIR)
  // ═══════════════════════════════════════════════════════════
  s175_3_application: {
    name: "Application U/S 175(3) BNSS — Direction to Register FIR",
    section: "S.175(3) BNSS 2023 / S.156(3) CrPC",
    court: "Magistrate Court",
    attach_with: ["complaint_affidavit","police_inaction_proof"],
    keywords: ["156 3 crpc","175 3 bnss","direction to register fir","police inaction","fir register karne ka order"],
    generate: (f={}) => `IN THE COURT OF THE CHIEF JUDICIAL MAGISTRATE /
JUDICIAL MAGISTRATE FIRST CLASS
${f.district||"__________"}, ${f.state||"__________"}

APPLICATION NO. _____ OF ${f.year||new Date().getFullYear()}

${f.applicant||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...APPLICANT/COMPLAINANT
VERSUS

1. STATE OF ${(f.state||"__________").toUpperCase()} THROUGH SHO
   ${f.ps||"__________"} POLICE STATION
2. ${f.accused||"__________"}, R/o: ${f.accused_address||"__________"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION U/S 175(3) BNSS 2023 / S.156(3) CrPC FOR
DIRECTING POLICE TO REGISTER FIR AND INVESTIGATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  The applicant filed a complaint with SHO ${f.ps||"__________"}
    on ${f.complaint_date||"__________"} regarding ${f.offence||"__________"}
    committed by the accused. Copy of complaint = Annexure A.

2.  Despite ${f.days||"__________"} days having elapsed, the police
    has neither registered FIR nor taken any action.
    ${f.action_taken||"(State whatever police has or has not done)"}

3.  The alleged acts constitute cognizable offences U/S
    ${f.sections||"__________"} BNS 2023 and the police is bound to
    register FIR as per the judgment in Lalita Kumari v.
    Govt. of U.P. (2014) 2 SCC 1.

4.  The inaction of police is causing irreparable harm.

PRAYER:
(a) Direct SHO ${f.ps||"__________"} to register FIR forthwith;
(b) Direct police to investigate the matter;
(c) Take cognizance of offences and issue process.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Applicant`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 5 — COMPLAINT AFFIDAVIT
  // ═══════════════════════════════════════════════════════════
  complaint_affidavit: {
    name: "Affidavit in Support of Complaint",
    attach_with: ["magistrate_complaint","s175_3_application"],
    keywords: ["complaint affidavit","affidavit complaint","shikayat affidavit"],
    generate: (f={}) => `AFFIDAVIT

IN THE COURT OF: ${f.court||"__________"}
CASE / COMPLAINT: ${f.case||"__________"}

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND STATE ON OATH AS UNDER:

1.  That I am the complainant/applicant in the above case
    and am personally acquainted with all facts herein.

2.  That the contents of the accompanying complaint are
    true and correct to the best of my knowledge. Nothing
    false has been stated and nothing material concealed.

3.  That I was personally present at the time of
    the incident described in the complaint.

4.  That the documents annexed with the complaint are
    true copies of their respective originals.

5.  That I have not filed any other complaint regarding
    the same incident before any other court.
    OR
    That I have filed a complaint before _________ which
    is pending / has been disposed of as follows: _______

6.  That the statements made in paragraphs _____ to _____
    of the complaint are within my personal knowledge
    and those in paragraphs _____ are based on information
    received which I believe to be true.

DEPONENT

VERIFICATION:
Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')} that the
contents of this affidavit are true and correct.

                                    (${f.deponent||"__________"})
                                          DEPONENT

Solemnly affirmed and signed before me this
${f.date||new Date().toLocaleDateString('en-IN')}

                        OATH COMMISSIONER / NOTARY PUBLIC
                              (Seal & Stamp)`
  },

};
