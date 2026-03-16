// ════════════════════════════════════════════════════════════
// SC/ST ATROCITY + HUMAN RIGHTS FORMATS PACKET
// Atrocity complaint, NHRC, NCW, Minority rights
// ════════════════════════════════════════════════════════════
module.exports = {
  meta:{ packet:"rights_formats", total_formats:8 },

  sc_st_atrocity_complaint: {
    name:"SC/ST Atrocity Complaint — Prevention of Atrocities Act",
    section:"SC/ST (Prevention of Atrocities) Act 1989",
    court:"Police Station / Special Court",
    keywords:["sc st atrocity complaint","atrocity complaint","dalit harassment complaint","scheduled caste complaint","atrocity act complaint","poa act complaint"],
    generate:(f={})=>`TO,
THE OFFICER-IN-CHARGE / DSP / SP
${f.ps||"__________"} Police Station
District: ${f.district||"__________"}, ${f.state||"__________"}

DATE: ${f.date||new Date().toLocaleDateString('en-IN')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLAINT UNDER SC/ST (PREVENTION OF ATROCITIES) ACT 1989
READ WITH SC/ST (PREVENTION OF ATROCITIES) RULES 1995
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPLAINANT DETAILS:
Name:           ${f.complainant||"__________"}
S/o D/o W/o:    ${f.father||"__________"}
Caste/Sub-caste: ${f.caste||"__________"} (SC/ST)
Certificate:    ${f.cert_no||"Caste Certificate No. __________ issued by __________"}
Address:        ${f.address||"__________"}
Mobile:         ${f.mobile||"__________"}

ACCUSED DETAILS:
Name:           ${f.accused||"__________"}
Caste:          ${f.accused_caste||"Non-SC/Non-ST"} (Important — accused must be non-SC/ST)
Occupation:     ${f.accused_occ||"__________"}
Address:        ${f.accused_address||"__________"}

INCIDENT DETAILS:
Date:  ${f.incident_date||"__________"}
Time:  ${f.incident_time||"__________"}
Place: ${f.place||"__________"}

OFFENCE COMMITTED:
${f.offence||`The accused, knowing that the complainant belongs to
Scheduled Caste/Scheduled Tribe community, committed
the following atrocities:

(a) S.3(1)(r) POA Act — Intentional insult/intimidation
    by calling the complainant by caste name.
(b) S.3(1)(s) POA Act — Abusing by caste name.
(c) S.3(2)(v) POA Act — Commission of offence
    against SC/ST person.
(d) Other: __________`}

WITNESSES:
1. ${f.w1||"__________"}, Address: ${f.w1_address||"__________"}
2. ${f.w2||"__________"}, Address: ${f.w2_address||"__________"}

PREVIOUS COMPLAINTS:
${f.prev_complaint||"No previous complaint / Previous complaint dated __________ not acted upon"}

RELIEF SOUGHT:
1. Register FIR under POA Act 1989 immediately;
2. Arrest accused person;
3. Investigate and charge sheet in Special Court;
4. Provide relief/compensation under Rule 12(4) POA Rules.

NOTE: Under Atrocities Act, FIR registration is MANDATORY.
HC cannot quash atrocity FIR (Subhash Kashinath Mahajan
case modified — Supreme Court 2019).

I declare the above facts are true and correct.

(${f.complainant||"__________"})
Complainant — Signature/Thumb Impression`
  },

  nhrc_complaint: {
    name:"NHRC Complaint — National Human Rights Commission",
    keywords:["nhrc complaint","human rights complaint","national human rights commission","nhrc petition","manavadhikar aayog complaint"],
    generate:(f={})=>`COMPLAINT TO NATIONAL HUMAN RIGHTS COMMISSION
(NHRC — NHRC.nic.in)

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT:
${f.complainant||"__________"} S/o ${f.father||"__________"}
Address: ${f.address||"__________"}
Mobile: ${f.mobile||"__________"}, Email: ${f.email||"__________"}

STATE CONCERNED: ${f.state||"__________"}
AUTHORITY RESPONSIBLE: ${f.authority||"__________"}

NATURE OF HUMAN RIGHTS VIOLATION:
${f.violation_type||"☐ Police brutality/custodial torture\n☐ Denial of medical care\n☐ Bonded labour\n☐ Child labour\n☐ Trafficking\n☐ Illegal detention\n☐ Failure to register FIR\n☐ Other: __________"}

FUNDAMENTAL RIGHTS VIOLATED:
• Article 21 — Right to Life and Personal Liberty
• Article 22 — Protection against arbitrary arrest
• ${f.other_article||"Article __________ — __________"}

FACTS:
${f.facts||"(State chronological facts of human rights violation)"}

REMEDY SOUGHT:
${f.remedy||"Compensation / Prosecution of erring officials / Release from illegal detention / Medical treatment / Other"}

PRIOR COMPLAINTS:
${f.prior||"Complaint to SP/DM on __________ — no action taken"}

DOCUMENTS ATTACHED:
1. ${f.doc1||"Copy of complaint to police/authorities"}
2. ${f.doc2||"Medical reports (if injury)"}
3. ${f.doc3||"Other evidence"}

I swear the above information is true.

(${f.complainant||"__________"})
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  ncw_complaint: {
    name:"Complaint to NCW — National Commission for Women",
    keywords:["ncw complaint","national commission women complaint","mahila aayog complaint","ncw petition","women rights complaint"],
    generate:(f={})=>`COMPLAINT TO NATIONAL COMMISSION FOR WOMEN
(NCW — NCW.nic.in)

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT:
Name:    ${f.complainant||"__________"} (Confidential if requested)
Age:     ${f.age||"__"} Years
Address: ${f.address||"__________"}
Mobile:  ${f.mobile||"__________"}

STATE: ${f.state||"__________"}

NATURE OF COMPLAINT:
${f.complaint_type||"☐ Domestic violence\n☐ Dowry harassment\n☐ Sexual harassment at workplace\n☐ Rape/sexual assault\n☐ Trafficking\n☐ Police inaction on women's complaint\n☐ Non-payment of maintenance\n☐ Denial of rights of women at workplace\n☐ Other: __________"}

ACCUSED/RESPONDENT:
${f.accused||"__________"}, Address: ${f.accused_address||"__________"}

FACTS:
${f.facts||"(Describe the violation of women's rights in detail)"}

ACTION TAKEN SO FAR:
${f.action_taken||"FIR filed / Not filed — Police refused to register / Application pending"}

RELIEF SOUGHT:
${f.relief||"Immediate intervention / Direction to police / Compensation / Any other relief"}

(${f.complainant||"__________"})
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  minority_complaint: {
    name:"Minority Rights Complaint — NCM",
    keywords:["minority complaint","ncm complaint","minority harassment complaint","communal violence complaint","minority rights violation"],
    generate:(f={})=>`COMPLAINT TO NATIONAL COMMISSION FOR MINORITIES
(NCM — Ncm.nic.in)

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT:
${f.complainant||"__________"} S/o ${f.father||"__________"}
Community: ${f.community||"Muslim/Christian/Sikh/Buddhist/Zoroastrian/Jain"}
Address: ${f.address||"__________"}
Mobile: ${f.mobile||"__________"}

STATE: ${f.state||"__________"}

NATURE OF COMPLAINT:
${f.complaint_type||"☐ Religious discrimination\n☐ Communal violence/riot\n☐ Damage to religious property\n☐ Interference with religious practice\n☐ Denial of employment/education\n☐ Police inaction in communal matter\n☐ Other: __________"}

INCIDENT: ${f.facts||"(State what happened)"}

AUTHORITY RESPONSIBLE: ${f.authority||"__________"}

RELIEF: ${f.relief||"(State relief sought)"}

(${f.complainant||"__________"})
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  child_rights_complaint: {
    name:"Child Rights Complaint — NCPCR / SCPCR",
    section:"POCSO Act 2012 / JJ Act 2015",
    keywords:["child rights complaint","ncpcr complaint","scpcr complaint","child abuse complaint","bal adhikar shikayat","child labour complaint"],
    generate:(f={})=>`COMPLAINT TO NATIONAL/STATE COMMISSION FOR
PROTECTION OF CHILD RIGHTS (NCPCR/SCPCR)

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT:
${f.complainant||"__________"} (Parent/Guardian/Concerned citizen)
Mobile: ${f.mobile||"__________"}

CHILD DETAILS:
Name: ${f.child||"__________"} (Confidential)
Age: ${f.child_age||"__"} Years, Gender: ${f.gender||"__________"}
School/Address: ${f.child_address||"__________"}

NATURE OF VIOLATION:
${f.violation||"☐ Child sexual abuse (POCSO)\n☐ Child labour\n☐ Child marriage\n☐ Denial of education\n☐ Institutional abuse\n☐ Child trafficking\n☐ Corporal punishment in school\n☐ Other: __________"}

INCIDENT DETAILS: ${f.facts||"(State facts)"}

AUTHORITY RESPONSIBLE: ${f.authority||"School/Government/Individual"}

RELIEF SOUGHT: ${f.relief||"Immediate rescue / Police action / Compensation / Rehabilitation"}

(${f.complainant||"__________"})
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  posh_complaint: {
    name:"POSH Internal Complaint — Sexual Harassment at Workplace",
    section:"Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013",
    court:"Internal Complaints Committee (ICC)",
    keywords:["posh complaint","sexual harassment complaint","workplace harassment complaint","icc complaint posh","posh act complaint","office mein ched chhad"],
    generate:(f={})=>`COMPLAINT BEFORE INTERNAL COMPLAINTS COMMITTEE (ICC)
UNDER SEXUAL HARASSMENT OF WOMEN AT WORKPLACE
(PREVENTION, PROHIBITION AND REDRESSAL) ACT, 2013

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE PRESIDING OFFICER / CHAIRPERSON
INTERNAL COMPLAINTS COMMITTEE
${f.company||"__________"}
${f.company_address||"__________"}

COMPLAINANT:
${f.complainant||"__________"}
Designation: ${f.designation||"__________"}
Department:  ${f.department||"__________"}
Employee ID: ${f.emp_id||"__________"}
Mobile:      ${f.mobile||"__________"} (Confidential)

RESPONDENT (ACCUSED):
${f.respondent||"__________"}
Designation: ${f.resp_designation||"__________"}
Department:  ${f.resp_dept||"__________"}
Relation:    ${f.resp_relation||"Supervisor / Colleague / Subordinate / Client"}

NATURE OF HARASSMENT:
${f.harassment||`☐ Physical contact/advances
☐ Demand/request for sexual favours
☐ Sexually coloured remarks
☐ Showing pornography
☐ Creating hostile work environment
☐ Quid pro quo harassment (promotion linked to compliance)
☐ Other unwelcome conduct: __________`}

INCIDENTS (Most recent first):
${f.incidents||`Incident 1: Date: __________, Place: __________, Description: __________
Incident 2: Date: __________, Place: __________, Description: __________
Incident 3: Date: __________, Place: __________, Description: __________`}

WITNESSES (if any):
${f.witnesses||"1. __________, Designation: __________"}

DOCUMENTARY EVIDENCE:
${f.evidence||"Messages/Emails/CCTV footage/Call recordings (attached)"}

IMPACT ON COMPLAINANT:
${f.impact||"Unable to work freely / Health affected / Transferred / Denied promotion"}

RELIEF SOUGHT:
(a) Conduct inquiry as per POSH Act within 60 days;
(b) Transfer respondent / Complainant (as appropriate);
(c) Interim relief — transfer of respondent pending inquiry;
(d) Strict action against respondent.

I understand the Committee will keep this complaint CONFIDENTIAL as per S.16 POSH Act.

(${f.complainant||"__________"})
Complainant — Signature
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  right_to_education_complaint: {
    name:"RTE Complaint — Right to Education",
    section:"Right of Children to Free and Compulsory Education Act 2009",
    keywords:["rte complaint","right to education complaint","school admission complaint rte","25 percent rte complaint","rte act complaint"],
    generate:(f={})=>`COMPLAINT UNDER RIGHT OF CHILDREN TO FREE AND
COMPULSORY EDUCATION ACT, 2009

TO,
THE DISTRICT EDUCATION OFFICER /
BLOCK EDUCATION OFFICER / DISTRICT COLLECTOR
${f.district||"__________"}, ${f.state||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT:
${f.parent||"__________"} (Parent/Guardian)
Child Name: ${f.child||"__________"}, Age: ${f.child_age||"__"} Years
Address: ${f.address||"__________"}, Mobile: ${f.mobile||"__________"}

SCHOOL: ${f.school||"__________"}, Address: ${f.school_address||"__________"}

COMPLAINT:
${f.complaint||`☐ School refusing admission to child of EWS/DG category under 25% RTE quota
☐ School charging fees from EWS/DG student
☐ School not providing free uniform/books/meals
☐ Child being detained/expelled
☐ Physical punishment given to child
☐ School not having required infrastructure
☐ Other: __________`}

FACTS:
${f.facts||"(Describe what happened)"}

DOCUMENTS:
1. Birth certificate of child
2. Income certificate (for EWS)
3. Caste certificate (for DG)
4. School rejection letter (if any)

PRAYER:
(a) Direct school to admit child under RTE quota;
(b) Stop charging fee from EWS/DG child;
(c) Take action against school for RTE violation;
(d) Provide compensation for denial of education.

(${f.parent||"__________"})
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  domestic_worker_complaint: {
    name:"Domestic Worker Rights Complaint",
    keywords:["domestic worker complaint","ghar ka kaam karne wale complaint","maid complaint","servant complaint","domestic worker exploitation"],
    generate:(f={})=>`COMPLAINT — DOMESTIC WORKER EXPLOITATION / RIGHTS VIOLATION

TO,
THE LABOUR COMMISSIONER / DISTRICT COLLECTOR
${f.district||"__________"}, ${f.state||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT/WORKER:
${f.worker||"__________"} S/o D/o ${f.father||"__________"}
Age: ${f.age||"__"} Years
Address: ${f.address||"__________"}
Mobile: ${f.mobile||"__________"}

EMPLOYER DETAILS:
Name: ${f.employer||"__________"}
Address: ${f.employer_address||"__________"}
Mobile: ${f.employer_mobile||"__________"}

EMPLOYMENT PERIOD: ${f.from||"__________"} to ${f.to||"__________"}
Work: ${f.work||"Cook/Cleaner/Caretaker/Driver/Other"}
Agreed Wage: Rs. ${f.wage||"__________"}/- per month

COMPLAINT:
${f.complaint||`☐ Non-payment of wages for __________ months = Rs. __________/-
☐ Physical abuse/assault
☐ Mental harassment/verbal abuse
☐ Illegal confinement
☐ Child employed as domestic worker
☐ Passport/documents withheld
☐ Excessive working hours
☐ Other: __________`}

PRAYER:
(a) Direct payment of unpaid wages Rs. ${f.unpaid||"__________"}/-;
(b) Initiate criminal action for abuse/assault;
(c) Ensure release of withheld documents;
(d) Register under Unorganised Workers Act.

(${f.worker||"__________"}) — Signature
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },
};
