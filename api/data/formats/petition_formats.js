// ════════════════════════════════════════════════════════════
// PETITION FORMATS PACKET
// Quashing, Habeas Corpus, Writ Petitions, Transfer Petition
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: {
    packet: "petition_formats",
    version: "1.0",
    total_formats: 6,
    covers: ["Quashing Petition","Habeas Corpus","Writ Petition","Revision","Transfer Petition","Affidavit"]
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 1 — QUASHING PETITION (High Court)
  // ═══════════════════════════════════════════════════════════
  quashing: {
    name: "Quashing Petition — S.528 BNSS 2023",
    section: "S.528 BNSS 2023 / S.482 CrPC",
    court: "High Court",
    attach_with: ["quashing_affidavit","fir_copy"],
    keywords: ["quashing","fir quash","528 bnss","482 crpc","quashing petition","fir cancel","quash fir"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
AT ${f.hc||"__________"}

CRIMINAL MISC. PETITION NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
                                        ...PETITIONER
VERSUS

1. STATE OF ${(f.state||"__________").toUpperCase()} THROUGH SHO
   ${f.ps||"__________"} POLICE STATION, DIST. ${f.district||"__________"}

2. ${f.complainant||"__________"} S/o __________, R/o: ${f.complainant_addr||"__________"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PETITION U/S 528 BHARATIYA NAGARIK SURAKSHA SANHITA, 2023
(Corresponding to Section 482 Cr.P.C., 1973)
FOR QUASHING OF FIR NO. ${f.fir||"_____"} DATED ${f.fir_date||"__________"}
U/S ${f.sections||"__________"} BNS 2023 REGISTERED AT P.S.
${f.ps||"__________"}, DISTRICT ${f.district||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.   IMPUGNED FIR: FIR No. ${f.fir||"_____"} dated ${f.fir_date||"__________"}
     P.S. ${f.ps||"__________"}, District ${f.district||"__________"}
     U/S ${f.sections||"__________"} BNS 2023. A true copy of the
     FIR is attached as ANNEXURE P-1.

2.   BRIEF FACTS:

     ${f.facts||`That the petitioner and respondent No.2 are __________.
     On __________, the respondent No.2 filed a false complaint
     at P.S. __________ against the petitioner for __________
     with the sole intention of __________.`}

3.   GROUNDS FOR QUASHING:

     (i)   That the FIR does not disclose any cognizable
           offence against the petitioner. Reading the
           FIR as a whole, even if the allegations are
           taken at face value, no offence is made out.

     (ii)  That the allegations in the FIR are inherently
           improbable and unbelievable on the face of it.
           ${f.improbability||"(State why allegations are impossible/improbable)"}

     (iii) That the FIR has been filed with mala fide
           intention to ${f.motive||"harass/pressurize/settle personal scores/extract money"} from the petitioner.
           ${f.mala_fide_proof||"(Evidence of mala fide — prior disputes, previous complaints, etc.)"}

     (iv)  That the matter is essentially CIVIL IN NATURE
           and has been given a criminal colour to misuse
           the process of law. The dispute is regarding
           ${f.civil_nature||"property/money/matrimonial matters"}.

     (v)   That the offences alleged are ${f.bailable||"bailable / compoundable"} in nature.

     (vi)  That continuing the investigation/proceedings
           would amount to abuse of the process of law
           and would cause grave injustice to the petitioner.

     (vii) That the Hon'ble Supreme Court in State of
           Haryana v. Bhajan Lal (1992) Supp (1) SCC 335
           has laid down 7 categories of cases where FIR
           deserves to be quashed. The present case squarely
           falls in categories (${f.bhajan_lal_category||"1/2/3/4/5/6/7"}).

     (viii)That ${f.specific_grounds||"(Any other specific legal grounds)"}

4.   That the petitioner has not filed any other petition
     challenging the same FIR before any other Court.

                        *** PRAYER ***

     It is, therefore, most humbly prayed that this
     Hon'ble Court may be pleased to:

     (A)  QUASH FIR No. ${f.fir||"_____"} dated ${f.fir_date||"__________"}
          registered at P.S. ${f.ps||"__________"} U/S
          ${f.sections||"__________"} BNS 2023 and all
          proceedings arising therefrom;

     (B)  STAY all further proceedings pursuant to the
          said FIR during the pendency of this petition;

     (C)  Pass any other order(s) as this Hon'ble Court
          may deem fit and proper in the facts of the case.

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

I, ${f.petitioner||"__________"}, verify that the contents of the
above petition are true and correct to the best of
my knowledge and belief.

Verified at ${f.hc||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.petitioner||"__________"})
                                          PETITIONER`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 2 — HABEAS CORPUS PETITION
  // ═══════════════════════════════════════════════════════════
  habeas_corpus: {
    name: "Habeas Corpus Petition",
    section: "Article 226 Constitution / S.528 BNSS",
    court: "High Court",
    attach_with: ["habeas_corpus_affidavit"],
    keywords: ["habeas corpus","habeas corpus petition","illegal detention","article 226 habeas corpus","habeas corpus draft"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
AT ${f.hc||"__________"}

WRIT PETITION (CRIMINAL) NO. _____ OF ${f.year||new Date().getFullYear()}

IN THE MATTER OF:
${f.petitioner||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
(On behalf of detained person: ${f.detainee||"__________"})
                                        ...PETITIONER
VERSUS

1. STATE OF ${(f.state||"__________").toUpperCase()} THROUGH
   PRINCIPAL SECRETARY (HOME)
2. SUPERINTENDENT, ${f.jail||"__________"} JAIL / PRISON
3. ${f.detaining_authority||"OFFICER-IN-CHARGE, __________ POLICE STATION"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRIT PETITION FOR WRIT OF HABEAS CORPUS U/A 226 OF
THE CONSTITUTION OF INDIA / S.528 BNSS 2023
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  ${f.detainee||"__________"} was illegally detained / arrested
    by ${f.detaining_authority||"__________"} on ${f.detention_date||"__________"}
    without any lawful authority.

2.  GROUNDS OF ILLEGAL DETENTION:
    ${f.grounds||`(a) No FIR registered against detainee
    (b) Not produced before Magistrate within 24 hours
    (c) No valid grounds for arrest/detention
    (d) Detained without following procedure under BNSS`}

3.  The detention is in violation of:
    • Article 21 (Right to Life and Personal Liberty)
    • Article 22 (Protection against Arbitrary Arrest)
    • Section 47 BNSS 2023 (Rights of arrested person)

4.  Despite requests, the detainee has not been released.

PRAYER:
(a) Issue writ of Habeas Corpus directing respondents
    to produce ${f.detainee||"__________"} before this Court;
(b) Declare detention as illegal;
(c) Direct immediate release of ${f.detainee||"__________"}.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 3 — CRIMINAL REVISION
  // ═══════════════════════════════════════════════════════════
  criminal_revision: {
    name: "Criminal Revision Petition",
    section: "S.432 BNSS 2023 / S.397 CrPC",
    court: "Sessions Court / High Court",
    attach_with: ["revision_affidavit","impugned_order_copy"],
    keywords: ["criminal revision","432 bnss","397 crpc","revision petition","criminal revision petition"],
    generate: (f={}) => `IN THE COURT OF THE HON'BLE SESSIONS JUDGE /
IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}

CRIMINAL REVISION NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...PETITIONER/REVISIONIST
VERSUS

1. STATE OF ${(f.state||"__________").toUpperCase()}
2. ${f.respondent||"__________"}, R/o: ${f.respondent_addr||"__________"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRIMINAL REVISION U/S 432 BNSS 2023 (S.397 CrPC)
AGAINST ORDER DATED ${f.order_date||"__________"} PASSED BY
${f.lower_court||"__________"} IN CASE NO. ${f.case_no||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  IMPUGNED ORDER: Order dated ${f.order_date||"__________"} passed
    by ${f.lower_court||"__________"} in Case No. ${f.case_no||"__________"}
    whereby the learned court ${f.order_detail||"rejected bail / dismissed complaint / convicted the petitioner"}.
    Copy of order = Annexure P-1.

2.  GROUNDS FOR REVISION:

    (i)  That the impugned order is illegal, arbitrary
         and contrary to the established principles of law.

    (ii) That the learned lower court failed to consider
         ${f.grounds||"material evidence / legal points / Supreme Court judgments"}.

    (iii)That ${f.specific_legal_error||"(Specific legal error in the impugned order)"}

    (iv) That the impugned order has caused grave injustice
         to the petitioner.

PRAYER:
(a) Call for the record of the lower court;
(b) Set aside / Modify the impugned order;
(c) Pass appropriate orders in interest of justice.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 4 — TRANSFER PETITION
  // ═══════════════════════════════════════════════════════════
  transfer_petition: {
    name: "Transfer Petition",
    section: "S.527 BNSS 2023 / S.407 CrPC",
    court: "High Court / Supreme Court",
    attach_with: ["transfer_affidavit"],
    keywords: ["transfer petition","527 bnss","407 crpc","transfer case","case transfer petition"],
    generate: (f={}) => `IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
AT ${f.hc||"__________"}

CRIMINAL MISC. PETITION (TRANSFER) NO. _____ OF ${f.year||new Date().getFullYear()}

${f.petitioner||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...PETITIONER
VERSUS

STATE OF ${(f.state||"__________").toUpperCase()} & ANOTHER
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PETITION FOR TRANSFER OF CASE U/S 527 BNSS 2023
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  CASE TO BE TRANSFERRED:
    Case No. ${f.case_no||"__________"} pending before
    ${f.current_court||"__________"} Court at ${f.current_location||"__________"}
    U/S ${f.sections||"__________"} BNS 2023.

2.  TRANSFER SOUGHT TO:
    ${f.transfer_to||"__________"} Court at ${f.transfer_location||"__________"}

3.  GROUNDS FOR TRANSFER:
    ${f.grounds||`(a) Life is in danger at current court location
    (b) Petitioner/witnesses cannot safely attend at current location
    (c) Fair trial not possible due to local influence
    (d) Convenience of parties and witnesses`}

PRAYER: Transfer the aforesaid case to ${f.transfer_to||"__________"}.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Petitioner`
  },

  // ═══════════════════════════════════════════════════════════
  // FORMAT 5 — PETITION AFFIDAVIT (General)
  // ═══════════════════════════════════════════════════════════
  petition_affidavit: {
    name: "Affidavit in Support of Petition",
    attach_with: ["quashing","habeas_corpus","criminal_revision","transfer_petition"],
    keywords: ["petition affidavit","affidavit petition","affidavit hc","high court affidavit"],
    generate: (f={}) => `AFFIDAVIT

IN THE HON'BLE HIGH COURT OF ${(f.state||"__________").toUpperCase()}
PETITION NO. _____ OF ${f.year||new Date().getFullYear()}

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, Occupation: ${f.occupation||"__________"},
R/o: ${f.address||"__________"},

DO HEREBY SOLEMNLY AFFIRM AND STATE AS UNDER:

1.  I am the petitioner in the above-mentioned petition
    and am personally acquainted with all facts herein.

2.  The contents of the above petition are true and
    correct to the best of my knowledge. Nothing false
    has been stated and nothing material has been
    concealed.

3.  The Annexures filed with the petition are true
    copies of their respective originals.

4.  ${f.specific_para||"(Any specific averment required)"}

5.  I have not filed any similar petition before
    any other High Court or the Supreme Court.
    OR
    I had filed Petition No. _____ before _____ which
    was disposed of as follows: _____

DEPONENT

VERIFICATION:
Verified at ${f.hc||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.

                                    (${f.deponent||"__________"})
                                          DEPONENT

Solemnly affirmed before me on ${f.date||new Date().toLocaleDateString('en-IN')}

                        OATH COMMISSIONER / NOTARY PUBLIC`
  },

};
