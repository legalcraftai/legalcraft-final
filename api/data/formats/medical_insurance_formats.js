// ════════════════════════════════════════════════════════════
// MEDICAL, INSURANCE & ACCIDENT FORMATS PACKET
// Medical Negligence, MACT, Insurance Claim, Disability
// ════════════════════════════════════════════════════════════
module.exports = {
  meta:{ packet:"medical_insurance_formats", total_formats:8 },

  medical_negligence_complaint: {
    name:"Medical Negligence Complaint — Consumer Commission",
    section:"S.35 Consumer Protection Act 2019 + Tort Law",
    court:"District Consumer Commission / State Commission",
    attach_with:["medical_records","hospital_bills","expert_opinion"],
    keywords:["medical negligence complaint","doctor negligence consumer","hospital complaint consumer forum","medical malpractice consumer complaint","dawai galat complaint"],
    generate:(f={})=>`IN THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION
${(f.district||"__________").toUpperCase()}, ${f.state||"__________"}

CONSUMER COMPLAINT NO. _____ OF ${f.year||new Date().getFullYear()}

${f.complainant||"__________"} S/o ${f.father||"__________"}
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"}
(Patient / Legal Heir of Deceased Patient)
                                        ...COMPLAINANT
VERSUS

1. Dr. ${f.doctor||"__________"} (${f.doctor_qual||"MBBS/MD/MS"})
   ${f.clinic||"__________"} Hospital/Clinic
   ${f.hospital_address||"__________"}

2. ${f.hospital||"__________"} Hospital
   ${f.hospital_address2||"__________"}
                                        ...OPPOSITE PARTIES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLAINT U/S 35 CONSUMER PROTECTION ACT 2019
FOR MEDICAL NEGLIGENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.   PATIENT DETAILS:
     Name:                ${f.patient||"__________"}
     Date of Admission:   ${f.admission_date||"__________"}
     Date of Discharge:   ${f.discharge_date||"__________"}
     Nature of Treatment: ${f.treatment||"__________"}
     Total Fees Paid:     Rs. ${f.fees||"__________"}/-

2.   MEDICAL NEGLIGENCE COMMITTED:
     ${f.negligence||`(a) WRONG DIAGNOSIS: Diagnosed as __________ 
         but actual condition was __________.
     (b) WRONG MEDICATION: Administered __________ 
         which caused __________.
     (c) SURGICAL NEGLIGENCE: During surgery on __________,
         __________ occurred due to negligence.
     (d) LACK OF INFORMED CONSENT: No consent obtained for __________.
     (e) DELAY IN TREATMENT: Critical treatment delayed 
         by __________ hours/days causing __________.`}

3.   LEGAL STANDARD VIOLATED:
     As held in Jacob Mathew v State of Punjab AIR 2005
     SC 3180 — doctor must possess ordinary competent
     skill and exercise reasonable care. The OP failed
     this standard.

     As held in Spring Meadows Hospital v Harjol
     Ahluwaiah AIR 1998 SC 1801 — hospital services are
     covered under Consumer Protection Act.

4.   HARM CAUSED:
     ${f.harm||"Death of patient / Permanent disability / Additional surgery required / Prolonged suffering"}
     Quantified loss: Rs. ${f.harm_value||"__________"}/-

5.   PRIOR COMPLAINT:
     Complaint to Medical Council on ${f.mc_complaint||"__________"}.
     Hospital's response: ${f.hospital_response||"Denied liability / No response"}.

6.   CLAIM:
     ┌─────────────────────────────────────────────┐
     │ Medical expenses (past):     Rs. ${f.past_medical||"__________"}/-│
     │ Future medical expenses:     Rs. ${f.future_medical||"__________"}/-│
     │ Loss of income:              Rs. ${f.income_loss||"__________"}/-│
     │ Compensation (negligence):   Rs. ${f.compensation||"__________"}/-│
     │ Mental agony & grief:        Rs. ${f.mental_agony||"__________"}/-│
     │ Litigation costs:            Rs. ${f.costs||"__________"}/-│
     │ TOTAL:                       Rs. ${f.total||"__________"}/-│
     └─────────────────────────────────────────────┘

PRAYER:
(a) Hold OPs guilty of medical negligence;
(b) Direct payment of Rs. ${f.total||"__________"}/- as above;
(c) Direct Rs. ${f.costs||"__________"}/- towards costs.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                              (${f.advocate||"__________"})
                              Advocate for Complainant`
  },

  mact_claim: {
    name:"Motor Accident Claim — MACT Application",
    section:"S.166 Motor Vehicles Act 1988",
    court:"Motor Accidents Claims Tribunal",
    attach_with:["fir_copy","injury_report","death_certificate","insurance_policy"],
    keywords:["mact claim","motor accident claim","166 mva","accident compensation claim","sadak durghatna claim","mact application"],
    generate:(f={})=>`BEFORE THE MOTOR ACCIDENTS CLAIMS TRIBUNAL
${f.district||"__________"}, ${f.state||"__________"}

CLAIM PETITION NO. _____ OF ${f.year||new Date().getFullYear()}

1. ${f.claimant1||"__________"} Age: ${f.age1||"__"} — ${f.relation1||"Injured / Widow"}
2. ${f.claimant2||"__________"} Age: ${f.age2||"__"} — ${f.relation2||"Minor Child / Dependent"}
3. ${f.claimant3||"__________"} Age: ${f.age3||"__"} — ${f.relation3||"__________"}
(Legal heirs of deceased / Injured person)
All R/o: ${f.address||"__________"}
                                        ...CLAIMANTS
VERSUS

1. ${f.driver||"__________"} (Driver of ${f.vehicle_type||"__________"})
   R/o: ${f.driver_address||"__________"}

2. ${f.owner||"__________"} (Owner of ${f.vehicle_type||"__________"})
   R/o: ${f.owner_address||"__________"}

3. ${f.insurance_co||"__________"} Insurance Company
   Policy No.: ${f.policy_no||"__________"}
   ${f.insurance_address||"__________"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLAIM PETITION U/S 166 MOTOR VEHICLES ACT 1988
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.   ACCIDENT DETAILS:
     Date:     ${f.accident_date||"__________"}
     Time:     ${f.accident_time||"__________"}
     Place:    ${f.accident_place||"__________"}
     FIR No.:  ${f.fir||"_____"} P.S. ${f.ps||"__________"}

2.   VEHICLE DETAILS:
     Type:             ${f.vehicle_type||"Car/Truck/Bus/Bike"}
     Registration No.: ${f.vehicle_reg||"__________"}
     Insurance:        ${f.policy_no||"__________"} valid till ${f.policy_valid||"__________"}

3.   DECEASED/INJURED:
     Name:             ${f.victim||"__________"}
     Age:              ${f.victim_age||"__"} Years
     Occupation:       ${f.victim_occ||"__________"}
     Monthly Income:   Rs. ${f.income||"__________"}/-

4.   NATURE OF INJURY/DEATH:
     ${f.injury||"Death / Permanent disability __% / Fracture / Head injury / Other"}

5.   COMPENSATION CALCULATION:
     (As per Sarla Verma v DTC (2009) 6 SCC 121 and
     National Insurance Co. v Pranay Sethi 2017 SC)

     Annual Income:    Rs. ${f.annual_income||"__________"}/-
     Future Prospects: ${f.future_prospects||"25/40/50"}% addition
     Multiplier:       ${f.multiplier||"__"} (based on age)
     Dependency:       ${f.dependency||"50/60/70"}%

     ┌─────────────────────────────────────────────┐
     │ Loss of Dependency/Income: Rs. ${f.loss_income||"__________"}/-│
     │ Loss of Consortium:        Rs. ${f.consortium||"40,000"}/-│
     │ Funeral Expenses:          Rs. ${f.funeral||"15,000"}/-│
     │ Medical Expenses:          Rs. ${f.medical||"__________"}/-│
     │ Pain & Suffering:          Rs. ${f.pain||"__________"}/-│
     │ TOTAL:                     Rs. ${f.total||"__________"}/-│
     └─────────────────────────────────────────────┘

PRAYER:
(a) Award compensation of Rs. ${f.total||"__________"}/- with interest
    @ 9% p.a. from date of accident;
(b) Direct Respondent 3 (Insurance) to pay the
    compensation amount.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                              (${f.advocate||"__________"})
                              Advocate for Claimants`
  },

  disability_certificate_application: {
    name:"Application for Disability Certificate",
    section:"Rights of Persons with Disabilities Act 2016",
    keywords:["disability certificate","viklaangta praman patra","disability application","rpwd act application","disability card application"],
    generate:(f={})=>`APPLICATION FOR DISABILITY CERTIFICATE
(UNDER RIGHTS OF PERSONS WITH DISABILITIES ACT 2016)

TO,
THE DISTRICT MEDICAL BOARD / CMO
${f.district||"__________"}, ${f.state||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

APPLICANT DETAILS:
Name:          ${f.name||"__________"}
S/o D/o W/o:   ${f.father||"__________"}
Date of Birth: ${f.dob||"__________"}
Aadhaar No.:   ${f.aadhaar||"__________"}
Address:       ${f.address||"__________"}
Mobile:        ${f.mobile||"__________"}

DISABILITY DETAILS:
Type of Disability:    ${f.disability_type||"Visual / Hearing / Locomotor / Intellectual / Mental / Multiple / Other"}
Cause of Disability:   ${f.cause||"Congenital / Accident on __________ / Disease / Other"}
Duration:              ${f.duration||"Since birth / Since __________"}
Medical Documents:     ${f.documents||"Hospital records attached"}

PURPOSE:
☐ Government job reservation (4% quota)
☐ Income tax exemption
☐ Bus/train concession
☐ Education concession
☐ Insurance claim
☐ Social security pension
☐ Other: ${f.other_purpose||"__________"}

I request examination by the Medical Board and issuance
of disability certificate at the earliest.

DOCUMENTS ATTACHED:
1. Aadhaar card copy
2. Medical reports/records
3. Passport size photographs (${f.photos||"2"})
4. Address proof

                              (${f.name||"__________"})
                              Applicant — Signature
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  insurance_claim_application: {
    name:"Insurance Claim Application",
    keywords:["insurance claim","bima claim","life insurance claim","health insurance claim","insurance death claim","maturity claim"],
    generate:(f={})=>`INSURANCE CLAIM APPLICATION

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE CLAIMS MANAGER
${f.insurance_co||"__________"} Life/General Insurance Co. Ltd.
${f.company_address||"__________"}

CLAIM TYPE: ${f.claim_type||"Death Claim / Maturity Claim / Health Claim / Accident Claim"}

POLICY DETAILS:
Policy No.:       ${f.policy_no||"__________"}
Proposer Name:    ${f.proposer||"__________"}
Life Assured:     ${f.life_assured||"__________"}
Date of Issue:    ${f.policy_date||"__________"}
Sum Assured:      Rs. ${f.sum_assured||"__________"}/-
Policy Status:    ${f.policy_status||"In Force / Lapsed"}
Premium Status:   ${f.premium_status||"Paid up to __________"}

CLAIMANT DETAILS:
Name:       ${f.claimant||"__________"}
Relation:   ${f.relation||"Nominee / Proposer / Life Assured"}
Address:    ${f.address||"__________"}
Bank A/c:   ${f.account||"__________"}, IFSC: ${f.ifsc||"__________"}

CLAIM DETAILS:
Date of Event:  ${f.event_date||"__________"}
Nature:         ${f.event||"Death / Maturity / Accident / Hospitalisation"}
Cause:          ${f.cause||"__________"}

DOCUMENTS SUBMITTED:
${f.documents||`☐ Original policy document
☐ Death certificate (for death claim)
☐ FIR copy (for accident)
☐ Medical records/discharge summary
☐ KYC documents
☐ Bank account proof
☐ Nominee's documents`}

I request early settlement of the claim.

(${f.claimant||"__________"})
Claimant — Signature
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  medical_affidavit: {
    name:"Medical Affidavit / Fitness Certificate",
    keywords:["medical affidavit","fitness affidavit","medical fitness certificate","health affidavit","medical declaration"],
    generate:(f={})=>`MEDICAL AFFIDAVIT / DECLARATION

I, ${f.deponent||"__________"} S/o ${f.father||"__________"},
Age: ${f.age||"__"} Yrs, R/o: ${f.address||"__________"},

DO HEREBY SOLEMNLY AFFIRM ON OATH:

1.  That I am physically and mentally fit to ${f.purpose||"appear in court / undertake employment / drive vehicle / other"}.

2.  That I ${f.condition||"do not suffer from any contagious / communicable disease / am free from any disability affecting the said purpose"}.

3.  ${f.para3||"That I last underwent medical examination on __________ at __________ and was declared fit."}

4.  ${f.para4||"That I am not under any medication that would impair judgment or physical ability."}

5.  That the facts stated above are true and correct.

DEPONENT

Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.
(${f.deponent||"__________"}) — DEPONENT

OATH COMMISSIONER / NOTARY PUBLIC
(Seal & Stamp)`
  },

  hospital_discharge_complaint: {
    name:"Complaint — Unlawful Detention by Hospital",
    keywords:["hospital unlawful detention","hospital not releasing patient","ransom hospital complaint","hospital body withholding","hospital detention complaint"],
    generate:(f={})=>`COMPLAINT — ILLEGAL DETENTION / WITHHOLDING OF PATIENT/BODY
BY HOSPITAL

TO,
THE OFFICER-IN-CHARGE
${f.ps||"__________"} Police Station / Collector Office
${f.district||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT: ${f.complainant||"__________"}, Mobile: ${f.mobile||"__________"}

HOSPITAL: ${f.hospital||"__________"}, ${f.hospital_address||"__________"}

FACTS:
${f.facts||`1. My relative ${f.patient||"__________"} was admitted to the hospital on ${f.admission_date||"__________"}.
2. The hospital is refusing to discharge / release the body of the patient.
3. Reason given by hospital: __________
4. Amount demanded beyond actual dues: Rs. __________/-
5. Despite payment/assurance of payment, the hospital refuses release.`}

LEGAL VIOLATION:
The hospital's act violates:
• Articles 21/22 of the Constitution
• MCI/NMC regulations
• Consumer Protection Act 2019
• S.127 BNS 2023 — Wrongful confinement

PRAYER:
(a) Direct hospital to immediately release patient/body;
(b) Initiate proceedings for wrongful confinement;
(c) Direct hospital to provide detailed bill breakdown.

(${f.complainant||"__________"}) — Signature
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  rti_medical_records: {
    name:"RTI Application for Medical Records",
    keywords:["rti medical records","hospital rti application","medical records rti","government hospital records rti"],
    generate:(f={})=>`APPLICATION UNDER SECTION 6(1) RTI ACT 2005
FOR MEDICAL RECORDS

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE PUBLIC INFORMATION OFFICER (CPIO)
${f.hospital||"__________"} Hospital
(Government / Aided Institution)
${f.hospital_address||"__________"}

APPLICANT:
${f.name||"__________"}, R/o: ${f.address||"__________"}
Mobile: ${f.mobile||"__________"}

SUBJECT: Seeking medical records of patient
${f.patient||"__________"}, IP No./OPD No.: ${f.ip_no||"__________"}

INFORMATION SOUGHT:
1. Complete case sheet / medical records
2. Discharge summary
3. Operation notes / anaesthesia records
4. Pathology and radiology reports
5. ICU records (if applicable)
6. Prescriptions and medicine charts
7. Consent forms signed
8. Bills and receipts

TIME PERIOD: Admission from ${f.from||"__________"} to ${f.to||"__________"}

Fee: Rs. 10/- enclosed by IPO/Cash.

Purpose: ${f.purpose||"Insurance claim / Legal proceedings / Second opinion / Personal record"}

I am entitled to these records as the ${f.relation||"patient himself / legal heir / guardian"} of the patient.

(${f.name||"__________"})
Applicant — Signature`
  },
};
