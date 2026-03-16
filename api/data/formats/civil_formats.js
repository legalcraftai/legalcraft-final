// ════════════════════════════════════════════════════════════
// CIVIL COURT FORMATS PACKET
// Plaint, Written Statement, Legal Notice, Vakalatnama, Injunction
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: {
    packet: "civil_formats",
    version: "1.0",
    total_formats: 8,
    covers: ["Plaint","Written Statement","Legal Notice","Vakalatnama","Temporary Injunction","Execution Petition","Affidavit","Caveat"]
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 1 — PLAINT (Civil Suit)
  // ═══════════════════════════════════════════════════════════
  plaint: {
    name: "Plaint — Civil Suit",
    section: "Order VII CPC 1908",
    court: "Civil Court / District Court",
    attach_with: ["verification_affidavit","court_fee_receipt","documents_relied"],
    keywords: ["plaint","civil suit","civil plaint","suit file karna","civil case","dawa","plaint draft"],
    generate: (f={}) => `IN THE COURT OF THE CIVIL JUDGE (SENIOR DIVISION) /
DISTRICT JUDGE
${f.district||"__________"}, ${f.state||"__________"}

SUIT NO. _____ OF ${f.year||new Date().getFullYear()}

${f.plaintiff||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"}
R/o: ${f.address||"__________"}
                                        ...PLAINTIFF
VERSUS

1. ${f.defendant1||"__________"} S/o __________, R/o: ${f.d1_addr||"__________"}
2. ${f.defendant2||"__________"} S/o __________, R/o: ${f.d2_addr||"__________"}
                                        ...DEFENDANTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PLAINT FOR ${(f.suit_type||"RECOVERY OF MONEY / SPECIFIC PERFORMANCE / PERMANENT INJUNCTION / DECLARATION").toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.   CAUSE OF ACTION AND JURISDICTION:

     That this Hon'ble Court has jurisdiction to try this
     suit as the ${f.jurisdiction_reason||"cause of action arose / defendant resides / property is situated"} within the
     territorial jurisdiction of this Court.

     The cause of action arose on ${f.coa_date||"__________"} and
     is continuing till date.

2.   PARTIES:

     (a) The plaintiff is ${f.plaintiff_desc||"__________"} residing at
         the above address.

     (b) The defendant No.1 is ${f.d1_desc||"__________"} residing
         at the above address.

3.   FACTS OF THE CASE:

     ${f.facts||`(i)  That on __________, the plaintiff and defendant
     entered into an agreement for __________.
     (ii) That as per the said agreement, __________.
     (iii)That despite repeated demands/requests, the
     defendant has failed to __________.
     (iv) That the plaintiff issued a legal notice dated
     __________ (Annexure P-__) but no reply was received.`}

4.   CAUSE OF ACTION:

     The cause of action arose when the defendant
     ${f.coa||"failed to perform / committed breach / refused to comply"} on ${f.coa_date||"__________"} and is continuing.

5.   VALUATION AND COURT FEE:

     The suit is valued at Rs. ${f.suit_value||"__________"}/-
     for the purposes of court fee and jurisdiction.
     Court fee of Rs. ${f.court_fee||"__________"}/- has been paid
     vide receipt No. ${f.fee_receipt||"__________"}.

6.   LIMITATION:

     The suit is within the period of limitation as the
     cause of action arose on ${f.coa_date||"__________"} and the
     suit is being filed within ${f.limitation||"3 years"} thereof.

7.   DOCUMENTS RELIED UPON:

     (i)   ${f.doc1||"Agreement dated __________"}
     (ii)  ${f.doc2||"Legal Notice dated __________"}
     (iii) ${f.doc3||"__________"}

8.   RELIEFS CLAIMED:

     (a) ${f.relief1||"Recovery of Rs. __________/- with interest @ __% p.a."}
     (b) ${f.relief2||"Permanent Injunction restraining the defendant from __________"}
     (c) ${f.relief3||"Declaration that __________"}
     (d) Costs of the suit;
     (e) Any other relief as this Hon'ble Court may deem fit.

                        *** PRAYER ***

     It is, therefore, most humbly prayed that this
     Hon'ble Court may be pleased to:

     (a) Decree the suit in favour of the plaintiff;
     (b) Direct the defendant to ${f.main_relief||"pay Rs. __________/- / perform the agreement / restrain from __________"};
     (c) Award costs of the suit;
     (d) Grant any other relief as deemed fit.

Place: ${f.district||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.advocate||"__________"})                   (${f.plaintiff||"__________"})
Advocate for Plaintiff                          Plaintiff
Enrol. No.: ${f.enrol||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.plaintiff||"__________"}, the plaintiff above named, verify
that the contents of paras 1 to 8 above are true to
the best of my knowledge and those in para _____ are
based on legal advice.

Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.plaintiff||"__________"})
                                          PLAINTIFF`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 2 — WRITTEN STATEMENT (Defence)
  // ═══════════════════════════════════════════════════════════
  written_statement: {
    name: "Written Statement",
    section: "Order VIII CPC 1908",
    court: "Civil Court",
    attach_with: ["ws_affidavit","counterclaim"],
    keywords: ["written statement","defence","jawab dawa","written statement draft","civil defence"],
    generate: (f={}) => `IN THE COURT OF THE CIVIL JUDGE
${f.district||"__________"}, ${f.state||"__________"}

SUIT NO. ${f.suit_no||"_____"} OF ${f.year||new Date().getFullYear()}

${f.plaintiff||"__________"}               ...PLAINTIFF
VERSUS
${f.defendant||"__________"}               ...DEFENDANT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      WRITTEN STATEMENT ON BEHALF OF DEFENDANT NO. ${f.def_no||"1"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRELIMINARY OBJECTIONS:

1.   That the suit is not maintainable in its present form.
     ${f.obj1||"(State preliminary objection)"}

2.   That this Hon'ble Court has no jurisdiction to try
     this suit as ${f.obj2_jurisdiction||"(reason for lack of jurisdiction)"}.

3.   That the suit is barred by limitation as
     ${f.obj3_limitation||"(how suit is time barred)"}.

4.   That the plaintiff has not come to the Court with
     clean hands.

ON MERITS:

5.   Para-wise reply to the plaint:

     Para 1: ${f.reply_p1||"Admitted / Denied / Partly admitted"}
     Para 2: ${f.reply_p2||"Denied. It is submitted that __________"}
     Para 3: ${f.reply_p3||"Denied. The true facts are that __________"}
     Para 4: ${f.reply_p4||"Denied for want of knowledge."}

6.   POSITIVE CASE OF DEFENDANT:

     ${f.positive_case||"That the true facts are that __________. The plaintiff's claim is false and incorrect because __________."}

7.   COUNTER CLAIM (if any):

     ${f.counter_claim||"Not applicable / The defendant counter claims Rs. __________ from the plaintiff for __________"}

PRAYER:
The suit be dismissed with costs.
${f.defence_prayer||""}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

(${f.advocate||"__________"})                   (${f.defendant||"__________"})
Advocate for Defendant                          Defendant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.defendant||"__________"}, verify that contents of paras
1 to 7 are true to best of my knowledge.

Verified at ${f.district||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.defendant||"__________"})
                                          DEFENDANT`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 3 — LEGAL NOTICE (General)
  // ═══════════════════════════════════════════════════════════
  legal_notice: {
    name: "Legal Notice — General",
    attach_with: ["acknowledgement"],
    keywords: ["legal notice","demand notice","notice bhejna","legal notice draft","notice format"],
    generate: (f={}) => `LEGAL NOTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SENT BY: REGISTERED POST A.D. + SPEED POST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.noticee||"__________"}
S/o ${f.noticee_father||"__________"}
${f.noticee_address||"__________"}

WITHOUT PREJUDICE

SUBJECT: ${f.subject||"Legal Notice for Recovery of Amount / Breach of Contract / Other"}

Under instructions and on behalf of my client
${f.client||"__________"} S/o ${f.client_father||"__________"},
R/o: ${f.client_address||"__________"},
I hereby serve you with this Legal Notice as under:

1.  That my client and you ${f.relationship||"entered into an agreement / are in a dispute"} as detailed below:
    ${f.background||"(Background of the matter — relationship between parties)"}

2.  FACTS:
    ${f.facts||`(i)  On __________, __________
    (ii) On __________, __________
    (iii)Despite repeated requests/demands, you have
         failed to __________.`}

3.  That due to your ${f.default_act||"illegal act / failure / breach / negligence"}, my client has suffered a loss of Rs. ${f.loss||"__________"}/-
    besides mental harassment and agony.

4.  LEGAL POSITION:
    ${f.legal_position||"That your aforesaid acts constitute breach of contract under Section 73 of the Indian Contract Act, 1872 / offence under __________"}

5.  YOU ARE HEREBY CALLED UPON to ${f.demand||"pay Rs. __________ / stop the illegal act / comply with the agreement"} within ${f.notice_period||"15 (Fifteen)"} days of receipt of this notice.

6.  Please note that if you fail to comply with the above
    demand within the stipulated period, my client shall
    be constrained to initiate appropriate CIVIL and/or
    CRIMINAL proceedings against you before the competent
    courts of law, entirely at your risk, cost and
    consequence, without any further notice.

${f.advocate||"__________"}
Advocate
Enrolment No.: ${f.enrol||"__________"}
Address: ${f.advocate_address||"__________"}
Mobile: ${f.advocate_mobile||"__________"}
Email: ${f.advocate_email||"__________"}

COPY TO: My Client (for record and necessary action)`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 4 — VAKALATNAMA
  // ═══════════════════════════════════════════════════════════
  vakalatnama: {
    name: "Vakalatnama",
    keywords: ["vakalatnama","vakalatnama draft","power of attorney advocate","legal representation"],
    generate: (f={}) => `VAKALATNAMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IN THE COURT OF: ${f.court||"__________"}
CASE NO.: ${f.case_no||"__________"}
NATURE OF CASE: ${f.case_nature||"Criminal/Civil/Writ/Appeal"}

CLIENT DETAILS:
${f.client||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}

ADVOCATE DETAILS:
${f.advocate||"__________"}
Enrolment No.: ${f.enrol||"__________"}
Address: ${f.advocate_address||"__________"}
Mobile: ${f.mobile||"__________"}
Bar Council: ${f.bar_council||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I/WE, the above-named client(s), do hereby appoint,
retain and authorise the above-named Advocate to be
my/our Advocate, Vakil and attorney in the above
case/matter and on my/our behalf to:

1.  Appear, plead and act before all Courts, Tribunals
    and Authorities in connection with the above case
    and all matters related thereto including appeals,
    revisions, executions and all incidental proceedings;

2.  Sign all applications, petitions, plaints, written
    statements, affidavits and other pleadings;

3.  Engage and instruct any other Advocate;

4.  Receive all notices, orders, processes and documents;

5.  Admit or deny any fact or document;

6.  Compromise, settle or withdraw the case with my/our
    prior consent and approval;

7.  Deposit and withdraw money on my/our behalf;

8.  Generally do all such acts, deeds and things in
    connection with the case as I/we could do myself/
    ourselves if personally present.

I/We agree to ratify all acts done by the said Advocate
in pursuance of this Vakalatnama.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Place: ${f.district||"__________"}


(${f.client||"__________"})
CLIENT — Signature / Thumb Impression

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCEPTANCE BY ADVOCATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.advocate||"__________"}, Advocate, do hereby accept the
above Vakalatnama and agree to act as the Advocate of
the above-named client in the above-mentioned case.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                          ADVOCATE`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 5 — TEMPORARY INJUNCTION APPLICATION
  // ═══════════════════════════════════════════════════════════
  temp_injunction: {
    name: "Temporary Injunction Application — Order XXXIX Rule 1 & 2 CPC",
    section: "Order XXXIX Rule 1 & 2 CPC",
    court: "Civil Court",
    attach_with: ["injunction_affidavit","caveat_notice"],
    keywords: ["temporary injunction","order 39 rule 1","stay order","interim injunction","injunction application","injunction draft"],
    generate: (f={}) => `IN THE COURT OF THE CIVIL JUDGE
${f.district||"__________"}, ${f.state||"__________"}

SUIT NO. ${f.suit_no||"_____"} OF ${f.year||new Date().getFullYear()}
I.A. NO. _____ OF ${f.year||new Date().getFullYear()}

${f.plaintiff||"__________"}               ...PLAINTIFF
VERSUS
${f.defendant||"__________"}               ...DEFENDANT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR TEMPORARY INJUNCTION U/O XXXIX R.1 & 2
CPC READ WITH SECTION 94 CPC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  The plaintiff has filed the above suit for
    ${f.suit_purpose||"permanent injunction / specific performance / other"}.

2.  THREE TESTS FOR INJUNCTION:

    (A) PRIMA FACIE CASE:
    That the plaintiff has a strong prima facie case
    in his/her favour because:
    ${f.prima_facie||"(State why prima facie case exists)"}

    (B) BALANCE OF CONVENIENCE:
    That the balance of convenience lies in favour of
    the plaintiff because:
    ${f.balance||"(State why balance favours plaintiff)"}

    (C) IRREPARABLE INJURY:
    That if injunction is not granted, the plaintiff
    will suffer irreparable injury which cannot be
    compensated in money because:
    ${f.irreparable||"(State nature of irreparable harm)"}

3.  That the defendant is about to ${f.apprehended_act||"sell/transfer/demolish/dispose of the property / commit the act"} which will defeat the plaintiff's rights.

4.  That time is of the essence and ex-parte injunction
    may be granted without notice to prevent imminent harm.

PRAYER:
(a) Grant ad-interim ex-parte injunction restraining
    the defendant from ${f.restrain_from||"alienating/transferring/dealing with the property / committing the act"} till next date of hearing;
(b) Issue notice to defendant;
(c) Confirm injunction after hearing.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Plaintiff`
  },

};
