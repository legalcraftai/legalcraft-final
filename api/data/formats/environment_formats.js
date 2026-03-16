// ════════════════════════════════════════════════════════════
// ENVIRONMENT & NGT FORMATS PACKET
// NGT Application, Environment Notice, Forest Rights
// ════════════════════════════════════════════════════════════
module.exports = {
  meta: { packet: "environment_formats", total_formats: 8 },

  ngt_application: {
    name: "Application before NGT — National Green Tribunal",
    section: "S.14 National Green Tribunal Act 2010",
    court: "National Green Tribunal",
    keywords: ["ngt application","national green tribunal","environment complaint","pollution complaint ngt","ngt petition","green tribunal application"],
    generate: (f={}) => `BEFORE THE NATIONAL GREEN TRIBUNAL
${f.bench||"PRINCIPAL BENCH, NEW DELHI / REGIONAL BENCH"}

APPLICATION NO. _____ OF ${f.year||new Date().getFullYear()}

${f.applicant||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}
                                        ...APPLICANT
VERSUS

1. UNION OF INDIA Through Ministry of
   Environment, Forest & Climate Change
   Indira Paryavaran Bhawan, New Delhi

2. STATE OF ${(f.state||"__________").toUpperCase()} Through
   Principal Secretary, Environment Dept.
   ${f.state_address||"__________"}

3. ${f.respondent3||"CONCERNED INDUSTRY / AUTHORITY"}
   ${f.resp3_address||"__________"}
                                        ...RESPONDENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION U/S 14/15/18 NATIONAL GREEN TRIBUNAL ACT 2010
FOR ${(f.relief_sought||"ENFORCEMENT OF ENVIRONMENTAL LAW / COMPENSATION / RESTORATION").toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST RESPECTFULLY SHOWETH:

1.   APPLICANT'S LOCUS STANDI:
     The applicant is a ${f.applicant_desc||"resident / farmer / fisherman / NGO / concerned citizen"} who is directly affected by the environmental damage being caused.

2.   ENVIRONMENTAL VIOLATION:

     (a) NATURE OF POLLUTION/VIOLATION:
         ${f.violation||"Industrial effluents being discharged into river __________ / Air pollution from factory __________ / Illegal mining at __________ / Deforestation at __________"}

     (b) VIOLATOR:
         ${f.violator||"M/s __________ factory / Industry located at __________"}

     (c) LAWS VIOLATED:
         • Water (Prevention & Control of Pollution) Act 1974
         • Air (Prevention & Control of Pollution) Act 1981
         • Environment Protection Act 1986
         • ${f.other_law||"Forest Conservation Act / Wild Life Protection Act"}

3.   HARM CAUSED:

     (a) To environment:
         ${f.env_harm||"River/groundwater contamination / Air quality degradation / Loss of biodiversity / Soil contamination"}

     (b) To applicant/community:
         ${f.human_harm||"Health problems / Loss of livelihood / Crop damage / Drinking water contamination"}

     (c) Quantified harm: Rs. ${f.harm_amount||"__________"}/- approximately

4.   PRINCIPLE OF ABSOLUTE LIABILITY:
     As held in MC Mehta v Union of India AIR 1987 SC
     1086 — enterprises engaged in hazardous activities
     are strictly and absolutely liable for all harm.

5.   PRINCIPLE OF POLLUTER PAYS:
     As held in Vellore Citizens v Union of India AIR
     1996 SC 2715 — polluter must pay for all damage.

6.   FAILURE OF AUTHORITIES:
     Despite complaints to ${f.authority_complained||"PCB / Collector / DFO"} on ${f.complaint_date||"__________"}, no action has been taken.

7.   URGENT RELIEF REQUIRED:
     The pollution/violation is ongoing and causing
     irreversible damage to the environment.

                        *** PRAYER ***

     It is most humbly prayed that this Hon'ble
     Tribunal may be pleased to:

     (A)  Issue directions to respondents to
          IMMEDIATELY STOP ${f.stop_activity||"the polluting activity / illegal mining / deforestation"};

     (B)  Direct CLOSURE of the violating unit/activity
          until all environmental norms are complied with;

     (C)  Direct payment of compensation of
          Rs. ${f.compensation||"__________"}/- to affected persons;

     (D)  Direct ENVIRONMENTAL RESTORATION of the
          damaged area at the cost of the violator;

     (E)  Constitute an expert committee to assess
          damage and recommend remedial measures;

     (F)  Pass any other order in interest of environment.

Place: ${f.place||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

                                    (${f.advocate||"__________"})
                                    Advocate for Applicant
                                    Enrol. No.: ${f.enrol||"__________"}`
  },

  pollution_complaint: {
    name: "Pollution Complaint to PCB",
    keywords: ["pollution complaint","pcb complaint","pollution board complaint","factory pollution complaint","prdushan shikayat"],
    generate: (f={}) => `COMPLAINT TO POLLUTION CONTROL BOARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
THE MEMBER SECRETARY
${f.state||"__________"} POLLUTION CONTROL BOARD
${f.pcb_address||"__________"}

SUBJECT: Complaint regarding ${f.pollution_type||"water / air / noise / land"} pollution by ${f.polluter||"__________"}

COMPLAINANT:
${f.complainant||"__________"}, R/o: ${f.address||"__________"}
Mobile: ${f.mobile||"__________"}

FACTS:
1. ${f.polluter||"__________"} located at ${f.polluter_address||"__________"} has been causing ${f.pollution_type||"__________"} pollution.

2. Specific violations:
   ${f.violations||"(a) Discharging untreated effluents into __________\n   (b) Emitting harmful gases beyond permissible limits\n   (c) Burning waste illegally"}

3. Evidence available: ${f.evidence||"Photographs / Water samples / Medical reports / Witnesses"}

4. Harm caused to me/community:
   ${f.harm||"Health problems / Crop damage / Water contamination / Other"}

PRAYER:
(a) Inspect the said unit immediately;
(b) Take action under Water Act 1974 / Air Act 1981 / EP Act 1986;
(c) Impose penalties and order closure if non-compliant;
(d) Direct compensation to affected persons.

                              (${f.complainant||"__________"})
                              Complainant — Signature`
  },

  forest_rights_claim: {
    name: "Forest Rights Claim — Forest Rights Act 2006",
    keywords: ["forest rights claim","van adhikar dava","fra claim","forest rights act claim","tribal forest rights"],
    generate: (f={}) => `CLAIM UNDER THE SCHEDULED TRIBES AND OTHER TRADITIONAL
FOREST DWELLERS (RECOGNITION OF FOREST RIGHTS) ACT, 2006

TO,
THE GRAM SABHA / FOREST RIGHTS COMMITTEE
Village: ${f.village||"__________"}
Tehsil: ${f.tehsil||"__________"}, District: ${f.district||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

CLAIMANT DETAILS:
Name:           ${f.claimant||"__________"}
S/o:            ${f.father||"__________"}
Community:      ${f.community||"Scheduled Tribe / Other Traditional Forest Dweller"}
Village:        ${f.village||"__________"}
Period of Residence: Since ${f.residence_since||"__________"} (${f.years||"__"} generations)

TYPE OF RIGHTS CLAIMED:
☐ Individual forest rights (cultivation land)
☐ Community forest rights
☐ Community tenures
☐ Rights of nomadic/pastoral communities

LAND DETAILS:
Survey/Khasra No.:  ${f.khasra||"__________"}
Area:               ${f.area||"__________"} Acres/Hectares
Location:           ${f.location||"__________"}
Nature of land:     ${f.land_nature||"Agricultural / Habitation / Community use"}

EVIDENCE OF POSSESSION:
${f.evidence||"(a) 75 years of continuous possession\n(b) Revenue records\n(c) Oral testimony of elders\n(d) Photographs\n(e) Community evidence"}

I hereby claim recognition of forest rights as above
under the Forest Rights Act 2006.

(${f.claimant||"__________"})
Claimant — Signature / Thumb Impression
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  environmental_notice: {
    name: "Legal Notice for Environmental Damage",
    keywords: ["environmental notice","environment damage notice","environmental harm notice","pollution legal notice"],
    generate: (f={}) => `LEGAL NOTICE FOR ENVIRONMENTAL DAMAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.polluter||"__________"} / M/s ${f.company||"__________"}
${f.address||"__________"}

Under instructions from ${f.client||"__________"}:

1. You have been causing ${f.pollution_type||"water/air/land/noise"} pollution at ${f.location||"__________"} in violation of:
   • Environment Protection Act 1986
   • Water (Prevention & Control of Pollution) Act 1974
   • Air (Prevention & Control of Pollution) Act 1981

2. HARM CAUSED: ${f.harm||"(Describe specific environmental harm)"}

3. LOSSES SUFFERED: Rs. ${f.loss||"__________"}/-

4. YOU ARE CALLED UPON within ${f.days||"15"} days to:
   (a) IMMEDIATELY STOP the polluting activity;
   (b) Pay compensation of Rs. ${f.loss||"__________"}/-;
   (c) Restore the environment at your cost.

5. Failure will result in NGT application and FIR.

${f.advocate||"__________"}, Advocate
Enrolment No.: ${f.enrol||"__________"}`
  },

  wildlife_complaint: {
    name: "Wildlife Protection Complaint",
    keywords: ["wildlife complaint","vanjeev suraksha shikayat","poaching complaint","wildlife protection act complaint","animal cruelty complaint"],
    generate: (f={}) => `COMPLAINT UNDER WILDLIFE PROTECTION ACT 1972

TO,
THE DEPUTY CONSERVATOR OF FORESTS /
WILDLIFE WARDEN / DISTRICT COLLECTOR
${f.district||"__________"}, ${f.state||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT: ${f.complainant||"__________"}, R/o: ${f.address||"__________"}
Mobile: ${f.mobile||"__________"}

COMPLAINT:
On ${f.date_of_incident||"__________"} at ${f.location||"__________"}, I witnessed/
have reliable information that:

${f.incident||"(a) Poaching of __________ (species) at __________\n(b) Illegal trade in wildlife parts at __________\n(c) Destruction of wildlife habitat at __________\n(d) Cruelty to animals at __________"}

ACCUSED:
${f.accused||"Known: __________ / Unknown persons"}

EVIDENCE:
${f.evidence||"Photographs / Video / Witnesses / Other"}

PRAYER:
(a) Register FIR U/S 9/50/51 Wildlife Protection Act 1972;
(b) Arrest accused and recover wildlife/parts;
(c) Take legal action immediately.

(${f.complainant||"__________"})
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  tree_cutting_complaint: {
    name: "Complaint Against Illegal Tree Cutting",
    keywords: ["tree cutting complaint","illegal deforestation complaint","ped katna complaint","tree felling notice"],
    generate: (f={}) => `COMPLAINT AGAINST ILLEGAL TREE CUTTING / DEFORESTATION

TO,
THE DIVISIONAL FOREST OFFICER /
DISTRICT COLLECTOR / MUNICIPAL COMMISSIONER
${f.district||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

COMPLAINANT: ${f.complainant||"__________"}, Mobile: ${f.mobile||"__________"}

COMPLAINT:
That on ${f.date_of_incident||"__________"} at ${f.location||"__________"},
trees have been illegally cut/felled by
${f.accused||"__________"} without any permission/NOC from
the Forest Department / Municipal Authority.

DETAILS:
Number of trees cut: ${f.tree_count||"__________"}
Species: ${f.species||"__________"}
Location: ${f.location||"__________"} (Khasra No. ${f.khasra||"__________"})
Permission obtained: YES / NO

VIOLATION OF:
• Indian Forest Act 1927
• Forest Conservation Act 1980
• Environment Protection Act 1986
• State Tree Preservation Act

PRAYER:
(a) Register FIR against accused;
(b) Stop further cutting immediately;
(c) Impose penalty and direct plantation of ${f.replant||"10x"} trees;
(d) Restore the site.

(${f.complainant||"__________"})
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  environment_affidavit: {
    name: "Affidavit — Environmental Compliance",
    keywords: ["environment affidavit","environmental compliance affidavit","noc environment affidavit"],
    generate: (f={}) => `AFFIDAVIT OF ENVIRONMENTAL COMPLIANCE

I, ${f.deponent||"__________"}, ${f.designation||"Director/Owner/Occupier"},
M/s ${f.company||"__________"}, R/o: ${f.address||"__________"},

DO HEREBY SOLEMNLY AFFIRM:

1. Our unit M/s ${f.company||"__________"} located at ${f.unit_address||"__________"} is engaged in ${f.business||"__________"}.

2. We have obtained the following environmental clearances:
   (a) Consent to Establish: ${f.cts||"No. __________ dated __________"}
   (b) Consent to Operate: ${f.cto||"No. __________ dated __________"}
   (c) Environmental Clearance: ${f.ec||"No. __________ dated __________"}

3. We are complying with all conditions of the above consents/clearances.

4. We have installed pollution control equipment: ${f.equipment||"ETP / STP / Air pollution control device"}

5. We are not causing any pollution beyond permissible limits.

6. The facts stated above are true and correct.

DEPONENT

Verified at ${f.place||"__________"} on ${f.date||new Date().toLocaleDateString('en-IN')}.
(${f.deponent||"__________"}) — DEPONENT

OATH COMMISSIONER / NOTARY PUBLIC`
  },

  rehabilitation_claim: {
    name: "Land Acquisition / Rehabilitation Claim",
    keywords: ["land acquisition claim","rehabilitation claim","compensation land acquisition","larr act claim","bhumi adhigrahan claim"],
    generate: (f={}) => `CLAIM FOR COMPENSATION / REHABILITATION
UNDER RIGHT TO FAIR COMPENSATION AND TRANSPARENCY IN
LAND ACQUISITION, REHABILITATION AND RESETTLEMENT ACT 2013

TO,
THE LAND ACQUISITION COLLECTOR /
DISTRICT COLLECTOR
${f.district||"__________"}, ${f.state||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

CLAIMANT:
${f.claimant||"__________"} S/o ${f.father||"__________"}
R/o: ${f.address||"__________"}

LAND DETAILS:
Khasra/Survey No.: ${f.khasra||"__________"}
Area:              ${f.area||"__________"}
Location:          ${f.location||"__________"}
Award No.:         ${f.award_no||"__________"}

CLAIM:
1. COMPENSATION: The compensation offered of Rs. ${f.offered||"__________"}/- is inadequate. Market value is Rs. ${f.market_value||"__________"}/-.

2. SOLATIUM: 100% solatium as per S.30 LARR Act 2013.

3. REHABILITATION: Entitled to rehabilitation under Schedule II including ${f.rehab||"employment / house / alternative land / other benefits"}.

4. INTEREST: 12% per annum from date of possession.

PRAYER:
(a) Revise compensation to Rs. ${f.claimed||"__________"}/-;
(b) Provide rehabilitation as per LARR Act 2013;
(c) Pay interest @ 12% p.a. from date of possession.

(${f.claimant||"__________"})
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },
};
