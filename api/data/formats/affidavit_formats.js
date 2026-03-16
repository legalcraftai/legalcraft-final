// ════════════════════════════════════════════════════════════
// AFFIDAVIT FORMATS PACKET — All types of Affidavits
// General, Income, Age, Character, Residence, Lost Document, etc.
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: {
    packet: "affidavit_formats",
    total_formats: 12,
    covers: ["General Affidavit","Income Affidavit","Age Affidavit","Character Certificate Affidavit","Residence Proof Affidavit","Lost Document Affidavit","Relationship Affidavit","Name Change Affidavit","No Objection Affidavit","Indemnity Bond","Succession Affidavit","Marriage Affidavit"]
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 1 — GENERAL AFFIDAVIT
  // ═══════════════════════════════════════════════════════════
  general_affidavit: {
    name: "General Purpose Affidavit",
    keywords: ["general affidavit","affidavit","affidavit draft","shapath patra","affidavit kaise likhe","affidavit banao"],
    generate: (f={}) => `AFFIDAVIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},
Aadhaar No.: ${f.aadhaar||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND DECLARE ON OATH
AS UNDER:

1.  ${f.para1||"That I am a citizen of India and the facts stated herein are within my personal knowledge."}

2.  ${f.para2||"That __________"}

3.  ${f.para3||"That __________"}

4.  ${f.para4||"That __________"}

5.  ${f.para5||"That the contents of this affidavit are true and correct to the best of my knowledge and belief. Nothing is false and nothing material has been concealed."}

                                    DEPONENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION:
Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')} that the
contents of the above affidavit are true and correct
to the best of my knowledge and belief.

                                    (${f.deponent||"__________"})
                                          DEPONENT

Solemnly affirmed and signed before me on
${f.date||new Date().toLocaleDateString('en-IN')} at ${f.place||"__________"}.

                              (${f.notary||"__________"})
                        OATH COMMISSIONER / NOTARY PUBLIC
                        Reg. No.: ${f.notary_reg||"__________"}
                        Seal & Stamp`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 2 — INCOME AFFIDAVIT
  // ═══════════════════════════════════════════════════════════
  income_affidavit: {
    name: "Income Affidavit",
    keywords: ["income affidavit","income proof affidavit","aay shapath patra","income declaration"],
    generate: (f={}) => `INCOME AFFIDAVIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND DECLARE AS UNDER:

1.  That I am a permanent resident of the above address.

2.  That my annual income from all sources for the
    financial year ${f.fy||"20__-20__"} is as follows:

    ┌────────────────────────────────────────────────┐
    │ Source: ${f.source1||"Salary/Business/Agriculture"}     │
    │ Annual Income: Rs. ${f.source1_income||"__________"}/-  │
    │                                                │
    │ Source: ${f.source2||"Other source"}                    │
    │ Annual Income: Rs. ${f.source2_income||"__________"}/-  │
    │                                                │
    │ TOTAL ANNUAL INCOME: Rs. ${f.total_income||"__________"}/-│
    │ MONTHLY INCOME: Rs. ${f.monthly_income||"__________"}/-  │
    └────────────────────────────────────────────────┘

3.  That I have ${f.property_status||"no immoveable property / the following property"} in my name.

4.  That I am filing this affidavit for the purpose of
    ${f.purpose||"legal aid / government scheme / court proceedings"}.

5.  The contents are true and correct.

                                    DEPONENT

VERIFICATION:
Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.deponent||"__________"})

Solemnly affirmed before me on ${f.date||new Date().toLocaleDateString('en-IN')}.

                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 3 — AGE / DATE OF BIRTH AFFIDAVIT
  // ═══════════════════════════════════════════════════════════
  age_affidavit: {
    name: "Age / Date of Birth Affidavit",
    keywords: ["age affidavit","date of birth affidavit","dob affidavit","janam tithi shapath patra","age proof affidavit"],
    generate: (f={}) => `AGE DECLARATION AFFIDAVIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
R/o: ${f.address||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND DECLARE AS UNDER:

1.  That my full name is ${f.full_name||"__________"}.

2.  That I was born on ${f.dob||"__________"} at
    ${f.birth_place||"__________"}, District ${f.birth_district||"__________"},
    State ${f.birth_state||"__________"}.

3.  That my present age as on date is ${f.age||"__"} years.

4.  That my birth certificate / school leaving certificate
    ${f.document_status||"is not available / shows date of birth as __________"}.

5.  That the correct date of birth is ${f.dob||"__________"}
    as per the knowledge of my family.

6.  I am making this affidavit for the purpose of
    ${f.purpose||"passport / PAN card / school admission / government records"}.

7.  The above facts are true and correct.

                                    DEPONENT

VERIFICATION:
Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.deponent||"__________"})

Solemnly affirmed before me on ${f.date||new Date().toLocaleDateString('en-IN')}.

                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 4 — LOST DOCUMENT AFFIDAVIT
  // ═══════════════════════════════════════════════════════════
  lost_document_affidavit: {
    name: "Lost Document Affidavit",
    keywords: ["lost document affidavit","khoye document affidavit","lost certificate affidavit","document kho gaya affidavit","lost affidavit"],
    generate: (f={}) => `AFFIDAVIT REGARDING LOSS OF DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"},
Aadhaar No.: ${f.aadhaar||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND DECLARE AS UNDER:

1.  That I was in possession of the following
    original document:

    Document: ${f.document_type||"__________"}
    Issued by: ${f.issuing_authority||"__________"}
    Date of Issue: ${f.issue_date||"__________"}
    Document No./Registration No.: ${f.doc_no||"__________"}
    Details: ${f.doc_details||"__________"}

2.  That the said document has been LOST / MISPLACED
    on/around ${f.loss_date||"__________"} at ${f.loss_place||"__________"}.

3.  That I have searched for the said document
    thoroughly but have not been able to trace it.

4.  That I have filed a complaint with
    ${f.police_complaint||"__________ Police Station / NOT filed"} about the loss.
    FIR/NCR No.: ${f.fir_no||"__________" }(if filed)

5.  That I am making this affidavit for the purpose
    of obtaining a DUPLICATE/FRESH copy of the
    said document from the concerned authority.

6.  That if the original document is found in future,
    I shall deposit the same with the concerned
    authority immediately.

7.  That the said document has not been pledged,
    mortgaged or deposited with any person or
    institution as security.

8.  The contents are true and correct.

                                    DEPONENT

VERIFICATION:
Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.deponent||"__________"})

Solemnly affirmed before me on ${f.date||new Date().toLocaleDateString('en-IN')}.

                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 5 — NAME CHANGE AFFIDAVIT
  // ═══════════════════════════════════════════════════════════
  name_change_affidavit: {
    name: "Name Change Affidavit",
    keywords: ["name change affidavit","naam badlna affidavit","name change","naam parivartan affidavit","name correction affidavit"],
    generate: (f={}) => `NAME CHANGE AFFIDAVIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.old_name||"__________"} now known as ${f.new_name||"__________"},
S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"},
Aadhaar No.: ${f.aadhaar||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND DECLARE AS UNDER:

1.  That my original name was ${f.old_name||"__________"}.

2.  That I have CHANGED / CORRECTED my name from
    "${f.old_name||"__________"}" to "${f.new_name||"__________"}"
    for the reason: ${f.reason||"spelling correction / marriage / personal choice"}.

3.  That both the above names refer to ONE AND THE
    SAME PERSON i.e. myself.

4.  That henceforth I shall be known, identified and
    called by my new name "${f.new_name||"__________"}" only.

5.  That I intend to publish this name change in
    the Official Gazette / local newspaper.

6.  That I am making this affidavit for the purpose
    of correcting my name in:
    ${f.purpose||"Aadhaar Card / PAN Card / Passport / Educational Certificates / Other Documents"}.

7.  The above contents are true and correct.

OLD NAME: ${f.old_name||"__________"}
NEW NAME: ${f.new_name||"__________"}

                                    (${f.new_name||"__________"})
                                          DEPONENT

VERIFICATION:
Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

Solemnly affirmed before me on ${f.date||new Date().toLocaleDateString('en-IN')}.

                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 6 — RELATIONSHIP AFFIDAVIT
  // ═══════════════════════════════════════════════════════════
  relationship_affidavit: {
    name: "Relationship / Family Affidavit",
    keywords:["relationship affidavit","rishta affidavit","family affidavit","legal heir affidavit","legal heir certificate affidavit"],
    generate: (f={}) => `RELATIONSHIP AFFIDAVIT / LEGAL HEIR AFFIDAVIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND DECLARE AS UNDER:

1.  That the late ${f.deceased||"__________"} S/o ${f.deceased_father||"__________"},
    who was residing at ${f.deceased_address||"__________"},
    passed away on ${f.death_date||"__________"} at ${f.death_place||"__________"}.

2.  That the late ${f.deceased||"__________"} was my
    ${f.relation||"father/mother/husband/wife/son/daughter"}.

3.  That the LEGAL HEIRS of the late ${f.deceased||"__________"}
    are as follows:

    ┌─────────────────────────────────────────────────┐
    │ 1. Name: ${f.heir1||"__________"}                       │
    │    Relation: ${f.heir1_relation||"__________"}           │
    │    Age: ${f.heir1_age||"__"} Yrs                        │
    │                                                 │
    │ 2. Name: ${f.heir2||"__________"}                       │
    │    Relation: ${f.heir2_relation||"__________"}           │
    │    Age: ${f.heir2_age||"__"} Yrs                        │
    │                                                 │
    │ 3. Name: ${f.heir3||"__________"}                       │
    │    Relation: ${f.heir3_relation||"__________"}           │
    │    Age: ${f.heir3_age||"__"} Yrs                        │
    └─────────────────────────────────────────────────┘

4.  That there is no other legal heir of the deceased
    besides those mentioned above.

5.  That this affidavit is being made for the purpose
    of ${f.purpose||"claiming insurance / bank balance / property / government benefits"}.

6.  The above contents are true and correct.

                                    DEPONENT

VERIFICATION:
Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.deponent||"__________"})

Solemnly affirmed before me.

                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 7 — INDEMNITY BOND
  // ═══════════════════════════════════════════════════════════
  indemnity_bond: {
    name: "Indemnity Bond",
    keywords: ["indemnity bond","indemnity","indemnity bond draft","kshatipurti patra","indemnity agreement"],
    generate: (f={}) => `INDEMNITY BOND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This Indemnity Bond is executed on ${f.date||new Date().toLocaleDateString('en-IN')}

BY (INDEMNIFIER):
${f.indemnifier||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}

IN FAVOUR OF (INDEMNIFIED):
${f.indemnified||"__________"} / ${f.indemnified_type||"Bank / Company / Authority"}
Address: ${f.indemnified_address||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHEREAS:
${f.recital||"The indemnified has agreed to __________ at the request of the indemnifier."}

NOW, THEREFORE, in consideration of the above, I/We
the indemnifier(s) do hereby undertake, covenant and
agree as under:

1.  That I shall INDEMNIFY, DEFEND AND HOLD HARMLESS
    the indemnified from and against all claims,
    demands, losses, costs, expenses and damages
    arising from ${f.indemnity_scope||"__________"}.

2.  That this bond shall be VALID AND BINDING until
    ${f.validity||"the indemnified is fully protected / __________ date"}.

3.  That I agree to pay the indemnified all costs and
    expenses incurred in defending any claim.

INDEMNIFIER: (${f.indemnifier||"__________"})

SURETY (if required):
Name: ${f.surety||"__________"}, Sign: ________________

WITNESSES:
1. _________________ 2. _________________

Executed before Notary / Court on ${f.date||new Date().toLocaleDateString('en-IN')}

                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 8 — MARRIAGE AFFIDAVIT
  // ═══════════════════════════════════════════════════════════
  marriage_affidavit: {
    name: "Marriage Affidavit / Proof of Marriage",
    keywords: ["marriage affidavit","shadi affidavit","vivah shapath patra","marriage proof affidavit","marriage certificate affidavit"],
    generate: (f={}) => `JOINT MARRIAGE AFFIDAVIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HUSBAND: ${f.husband||"__________"} S/o ${f.h_father||"__________"}
Age: ${f.h_age||"__"} Yrs, R/o: ${f.h_address||"__________"}
Religion: ${f.h_religion||"__________"}

WIFE: ${f.wife||"__________"} W/o ${f.husband||"__________"},
D/o ${f.w_father||"__________"}, Age: ${f.w_age||"__"} Yrs
R/o: ${f.w_address||"__________"}
Religion: ${f.w_religion||"__________"}

WE JOINTLY AND SOLEMNLY AFFIRM AND DECLARE:

1.  That we got married on ${f.marriage_date||"__________"} at
    ${f.marriage_place||"__________"} according to
    ${f.marriage_rites||"Hindu / Muslim / Christian / Court"} rites.

2.  That at the time of marriage:
    (a) Husband's age was ${f.h_age_at_marriage||"__"} years (above 21 years)
    (b) Wife's age was ${f.w_age_at_marriage||"__"} years (above 18 years)
    (c) Neither of us had any subsisting marriage.

3.  That we are legally married and are living together
    as husband and wife since ${f.marriage_date||"__________"}.

4.  That we are making this affidavit for the purpose
    of ${f.purpose||"passport / visa / bank records / insurance / other"}.

5.  The above facts are true and correct.

(${f.husband||"__________"})           (${f.wife||"__________"})
HUSBAND                                WIFE

VERIFICATION:
Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

Solemnly affirmed before me.

                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

};
