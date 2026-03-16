// ════════════════════════════════════════════════════════════
// AFFIDAVITS + GENERAL DOCUMENTS PACKET
// General Affidavit, NOC, Indemnity Bond, Power of Attorney
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: { packet: "affidavit_general_formats", total_formats: 10 },

  // ── 1. GENERAL AFFIDAVIT ─────────────────────────────────
  general_affidavit: {
    name: "General Affidavit",
    keywords: ["general affidavit","affidavit","shapath patra","affidavit banao","affidavit draft"],
    generate: (f={}) => `AFFIDAVIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},
Aadhaar No.: ${f.aadhaar||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND STATE ON OATH
AS UNDER:

1.  That I am the deponent above named and am fully
    conversant with the facts stated herein.

2.  ${f.para2||"That __________"}

3.  ${f.para3||"That __________"}

4.  ${f.para4||"That __________"}

5.  ${f.para5||"That __________"}

6.  That the facts stated above are true and correct
    to the best of my knowledge and belief. Nothing
    false has been stated and nothing material has
    been concealed therefrom.

DEPONENT

VERIFICATION:
Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')} that
the contents of the above affidavit are true and correct.

                              (${f.deponent||"__________"})
                                    DEPONENT

Solemnly affirmed and signed before me on this the
${f.date||new Date().toLocaleDateString('en-IN')} at ${f.place||"__________"}.

                        OATH COMMISSIONER / NOTARY PUBLIC
                              (Seal & Stamp & Signature)`
  },

  // ── 2. INDEMNITY BOND ─────────────────────────────────────
  indemnity_bond: {
    name: "Indemnity Bond",
    keywords: ["indemnity bond","indemnity","kshatipurti bond","indemnity bond draft"],
    generate: (f={}) => `INDEMNITY BOND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This INDEMNITY BOND is executed on ${f.date||new Date().toLocaleDateString('en-IN')}
at ${f.place||"__________"} by:

INDEMNIFIER:
${f.indemnifier||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
(Hereinafter "INDEMNIFIER")

IN FAVOUR OF:
${f.indemnified||"__________"}
${f.indemnified_address||"__________"}
(Hereinafter "INDEMNIFIED")

WHEREAS:

1.  ${f.background||"(State the purpose/background — why indemnity is being given)"}

2.  The Indemnified has agreed to ${f.action||"issue duplicate documents / release payment / allow possession / other"} subject to the Indemnifier providing this bond.

NOW THIS BOND WITNESSETH:

In consideration of the Indemnified agreeing to
${f.action||"__________"}, the Indemnifier hereby agrees to:

1.  Indemnify and keep indemnified the Indemnified
    against all losses, damages, costs, charges,
    claims and proceedings that may arise from
    ${f.risk||"the issue of duplicate / the said action"}.

2.  Pay all legal costs and expenses incurred by
    the Indemnified in defending any claims.

3.  This indemnity shall be absolute, unconditional
    and irrevocable.

SECURITY: The Indemnifier offers the following
as security: ${f.security||"Property bearing __________ / Personal guarantee / Nil"}

IN WITNESS WHEREOF the Indemnifier has executed
this bond on the date first above written.

                              (${f.indemnifier||"__________"})
                                  INDEMNIFIER

WITNESSES:
1. Name: ________________  Sign: ________________
2. Name: ________________  Sign: ________________

Accepted by: (${f.indemnified||"__________"})`
  },

  // ── 3. NO OBJECTION CERTIFICATE (NOC) ────────────────────
  noc: {
    name: "No Objection Certificate (NOC)",
    keywords: ["noc","no objection certificate","noc draft","no objection letter"],
    generate: (f={}) => `NO OBJECTION CERTIFICATE
(NOC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Ref. No.: ${f.ref_no||"__________"}

TO WHOM IT MAY CONCERN / TO WHOM IT IS ADDRESSED

I/We, ${f.issuer||"__________"}, ${f.issuer_designation||"Proprietor/Director/Owner"},
${f.issuer_org||"__________"}, R/o: ${f.issuer_address||"__________"},

do hereby certify and state that:

1.  I/We have NO OBJECTION to ${f.purpose||"__________"}
    being done by ${f.beneficiary||"__________"}.

2.  ${f.para2||"That the said __________ is known to us and we have no objection to __________."}

3.  ${f.para3||"This NOC is issued at the specific request of __________."}

4.  This NOC is valid for ${f.validity||"6 months / 1 year"} from
    the date of issue.

5.  This NOC does not prejudice any other rights or
    claims of the issuing authority.

                              (${f.issuer||"__________"})
                              ${f.issuer_designation||"Authorized Signatory"}
                              ${f.issuer_org||""}
                              Seal & Stamp`
  },

  // ── 4. SPECIAL POWER OF ATTORNEY ─────────────────────────
  special_poa: {
    name: "Special Power of Attorney",
    keywords:["power of attorney","special poa","mukhtiarnama","special power of attorney draft"],
    generate: (f={}) => `SPECIAL POWER OF ATTORNEY
(On Non-Judicial Stamp Paper of Appropriate Value)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.principal||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},
Aadhaar No.: ${f.aadhaar||"__________"},
(Hereinafter called the "PRINCIPAL")

do hereby appoint and constitute:

${f.attorney||"__________"} S/o ${f.attorney_father||"__________"},
Age: ${f.attorney_age||"__"} Yrs,
R/o: ${f.attorney_address||"__________"},
(Hereinafter called the "ATTORNEY")

as my lawful Attorney to act for me in my name,
place and stead to do the following:

1.  ${f.power1||"To appear before all Courts, Tribunals and Authorities."}
2.  ${f.power2||"To execute and register Sale Deed / Agreement for property bearing __________."}
3.  ${f.power3||"To receive and give receipts for money."}
4.  ${f.power4||"To file and defend cases."}
5.  ${f.power5||"(Any other specific power)"}

This Power of Attorney is SPECIAL and LIMITED to the
above-mentioned purpose(s) only.

I agree to ratify all acts done by my said Attorney
in pursuance of this Power of Attorney.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Place: ${f.place||"__________"}

                              (${f.principal||"__________"})
                              PRINCIPAL — Signature

WITNESSES:
1. Name: ________________  Sign: ________________
   Address: ________________________________
2. Name: ________________  Sign: ________________
   Address: ________________________________

ACCEPTED BY ATTORNEY:
I, ${f.attorney||"__________"}, accept the above appointment.
                              (${f.attorney||"__________"})
                              ATTORNEY — Signature

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTARIZATION / OATH COMMISSIONER:
Subscribed and sworn before me on ${f.date||new Date().toLocaleDateString('en-IN')}
                        NOTARY PUBLIC / OATH COMMISSIONER`
  },

  // ── 5. DEATH CERTIFICATE AFFIDAVIT ───────────────────────
  death_certificate_affidavit: {
    name: "Affidavit for Death Certificate / Legal Heir Certificate",
    keywords: ["death certificate affidavit","legal heir certificate","varisan","legal heir affidavit","death affidavit"],
    generate: (f={}) => `AFFIDAVIT FOR LEGAL HEIR / DEATH CERTIFICATE

I, ${f.deponent||"__________"} ${f.relation||"S/o D/o W/o"} Late ${f.deceased||"__________"},
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND STATE ON OATH:

1.  That Late ${f.deceased||"__________"} S/o ${f.deceased_father||"__________"},
    R/o: ${f.deceased_address||"__________"}, expired on
    ${f.death_date||"__________"} at ${f.death_place||"__________"}.

2.  That at the time of death, the deceased left behind
    the following legal heirs:

    ┌──────────────────────────────────────────────────────┐
    │ S.No. │ Name           │ Relation  │ Age │ Address   │
    ├──────────────────────────────────────────────────────┤
    │   1.  │ ${f.heir1||"__________"}  │ ${f.rel1||"________"} │ ${f.age1||"__"} │ ${f.addr1||"__________"} │
    │   2.  │ ${f.heir2||"__________"}  │ ${f.rel2||"________"} │ ${f.age2||"__"} │ ${f.addr2||"__________"} │
    │   3.  │ ${f.heir3||"__________"}  │ ${f.rel3||"________"} │ ${f.age3||"__"} │ ${f.addr3||"__________"} │
    └──────────────────────────────────────────────────────┘

3.  That the deceased died ${f.will||"intestate (without making a will) / leaving a will dated __________"}.

4.  That there is no dispute regarding the succession
    and heirship of the deceased's property.

5.  That this affidavit is being made for the purpose
    of ${f.purpose||"obtaining legal heir certificate / insurance claim / bank / property mutation"}.

6.  That the facts stated above are true and correct.

                              (${f.deponent||"__________"})
                                    DEPONENT

Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

  // ── 6. UNDERTAKING / DECLARATION ─────────────────────────
  general_undertaking: {
    name: "General Undertaking / Declaration",
    keywords:["undertaking","declaration","pratigya patra","undertaking draft","general declaration"],
    generate: (f={}) => `UNDERTAKING / DECLARATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, ${f.declarant||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},
Aadhaar No.: ${f.aadhaar||"__________"},

do hereby solemnly undertake, declare and state as under:

1.  ${f.declaration1||"That I, __________, undertake to __________"}
2.  ${f.declaration2||"That __________"}
3.  ${f.declaration3||"That __________"}
4.  ${f.declaration4||"That in case any of the above undertakings are found to be false or incorrect, I shall be liable for appropriate legal action."}

This undertaking is given voluntarily and without
any coercion or pressure.

Place: ${f.place||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

                              (${f.declarant||"__________"})
                              DECLARANT — Signature

WITNESS:
Name: ________________  Sign: ________________`
  },

  // ── 7. PARTNERSHIP DEED ───────────────────────────────────
  partnership_deed: {
    name: "Partnership Deed",
    section: "Partnership Act 1932",
    keywords: ["partnership deed","firm agreement","saajhedari","partnership deed draft"],
    generate: (f={}) => `PARTNERSHIP DEED

THIS DEED OF PARTNERSHIP is entered into on
${f.date||new Date().toLocaleDateString('en-IN')} at ${f.place||"__________"}.

BETWEEN:

PARTNER 1: ${f.partner1||"__________"} S/o ${f.p1_father||"__________"}
           R/o: ${f.p1_address||"__________"}
           Share: ${f.p1_share||"__"}%

PARTNER 2: ${f.partner2||"__________"} S/o ${f.p2_father||"__________"}
           R/o: ${f.p2_address||"__________"}
           Share: ${f.p2_share||"__"}%

PARTNER 3: ${f.partner3||"__________"} S/o ${f.p3_father||"__________"}
           R/o: ${f.p3_address||"__________"}
           Share: ${f.p3_share||"__"}%

NOW IT IS AGREED AS UNDER:

1.  FIRM NAME: The business shall be carried on under
    the name of "M/s ${f.firm_name||"__________"}".

2.  NATURE OF BUSINESS: ${f.business||"__________"}

3.  PLACE OF BUSINESS: ${f.business_address||"__________"}

4.  COMMENCEMENT: ${f.start_date||new Date().toLocaleDateString('en-IN')}

5.  CAPITAL CONTRIBUTION:
    Partner 1: Rs. ${f.p1_capital||"__________"}/-
    Partner 2: Rs. ${f.p2_capital||"__________"}/-
    Partner 3: Rs. ${f.p3_capital||"__________"}/-

6.  PROFIT/LOSS SHARING:
    Partner 1: ${f.p1_share||"__"}%
    Partner 2: ${f.p2_share||"__"}%
    Partner 3: ${f.p3_share||"__"}%

7.  BANK ACCOUNT: All partners shall jointly operate
    the firm's bank account.

8.  DUTIES: ${f.duties||"Each partner shall devote full time to the business."}

9.  REMUNERATION: ${f.remuneration||"No separate remuneration / Rs. __________ per month to each partner"}

10. RETIREMENT/DISSOLUTION: ${f.dissolution||"Any partner may retire on giving 3 months notice. Firm shall not dissolve on retirement of one partner."}

IN WITNESS WHEREOF the parties have signed:

(${f.partner1||"__________"})   (${f.partner2||"__________"})   (${f.partner3||"__________"})
  PARTNER 1                 PARTNER 2                 PARTNER 3

WITNESSES:
1. _________________ 2. _________________`
  },

  // ── 8. EXPERIENCE / CHARACTER CERTIFICATE ────────────────
  character_certificate: {
    name: "Character Certificate / Experience Certificate",
    keywords: ["character certificate","experience certificate","service certificate","naukri certificate","chalan character"],
    generate: (f={}) => `${f.cert_type||"CHARACTER"} CERTIFICATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Ref. No.: ${f.ref_no||"__________"}

TO WHOM IT MAY CONCERN

This is to certify that ${f.employee||"__________"} S/o
${f.father||"__________"}, R/o: ${f.address||"__________"},

${f.cert_type=="Experience"?
`has been employed with us as ${f.designation||"__________"} in
${f.department||"__________"} department from ${f.join_date||"__________"}
to ${f.leave_date||"__________"} (${f.duration||"__________"}).

During his/her tenure, he/she has demonstrated:
• Excellent work performance and dedication
• Good conduct and behaviour
• ${f.qualities||"Technical skills in __________"}

We wish him/her all the best for future endeavours.`
:
`is personally known to us for the past ${f.known_years||"__________"} years.

To the best of our knowledge and belief:
• He/She bears a good moral character
• He/She is honest and law-abiding
• He/She has no criminal antecedents
• He/She is fit for ${f.purpose||"employment / admission / other purpose"}`
}

This certificate is issued at his/her request for
the purpose of ${f.purpose||"__________"}.

                              (${f.issuer||"__________"})
                              ${f.designation||"Issuing Authority"}
                              ${f.organization||""}
                              Seal & Stamp`
  },

};
