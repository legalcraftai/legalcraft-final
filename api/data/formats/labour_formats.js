// ════════════════════════════════════════════════════════════
// LABOUR LAW FORMATS PACKET
// Retrenchment, Gratuity, ESI, PF, Workmen Compensation,
// Industrial Dispute, Appointment Letter, Termination
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: { packet: "labour_formats", total_formats: 10 },

  // ── 1. RETRENCHMENT NOTICE ────────────────────────────────
  retrenchment_notice: {
    name: "Retrenchment Notice — S.25F Industrial Disputes Act",
    section: "S.25F Industrial Disputes Act 1947",
    keywords: ["retrenchment notice","25f ida","layoff notice","naukri khatam notice","retrenchment letter"],
    generate: (f={}) => `RETRENCHMENT NOTICE
U/S 25-F INDUSTRIAL DISPUTES ACT, 1947

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Ref. No.: ${f.ref_no||"__________"}

TO,
${f.employee||"__________"}
Employee ID: ${f.emp_id||"__________"}
Designation: ${f.designation||"__________"}
Department: ${f.department||"__________"}
R/o: ${f.address||"__________"}

SUBJECT: Notice of Retrenchment

Dear ${f.employee||"__________"},

This is to inform you that due to ${f.reason||"reduction in workload / closure of department / economic reasons / surplus labour"}, the management has decided to retrench your services with effect from ${f.effective_date||"__________"}.

DETAILS OF RETRENCHMENT COMPENSATION:

Date of Joining:                ${f.doj||"__________"}
Date of Retrenchment:           ${f.effective_date||"__________"}
Total Service:                  ${f.service_years||"__"} Years ${f.service_months||"__"} Months
Average Monthly Wages:          Rs. ${f.monthly_wages||"__________"}/-
Retrenchment Compensation
@ 15 days per year of service:  Rs. ${f.compensation||"__________"}/-
Notice Pay (1 Month):           Rs. ${f.notice_pay||"__________"}/-
Leave Encashment:               Rs. ${f.leave_enc||"__________"}/-
Gratuity (if applicable):       Rs. ${f.gratuity||"__________"}/-
PF Settlement:                  Rs. ${f.pf||"__________"}/-
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL:                          Rs. ${f.total||"__________"}/-

Please collect your full and final settlement from the HR Department on ${f.settlement_date||"__________"}.

A copy of this notice is being sent to the appropriate Government as required under S.25F(c) of the Industrial Disputes Act, 1947.

You are requested to hand over charge to ${f.handover_to||"__________"} and complete all formalities before the date of retrenchment.

Yours faithfully,

(${f.authority||"__________"})
${f.authority_designation||"HR Manager / Managing Director"}
${f.company||"__________"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

ACKNOWLEDGEMENT:
I, ${f.employee||"__________"}, acknowledge receipt of this notice.
Signature: _________________ Date: _________________`
  },

  // ── 2. GRATUITY CLAIM APPLICATION ────────────────────────
  gratuity_claim: {
    name: "Gratuity Claim Application — Payment of Gratuity Act 1972",
    section: "S.4 Payment of Gratuity Act 1972",
    keywords: ["gratuity claim","gratuity application","4 gratuity act","gratuity form","gratuity payment application"],
    generate: (f={}) => `APPLICATION FOR PAYMENT OF GRATUITY
(FORM-I Under Rule 7(1) — Payment of Gratuity Rules)

To,
The Employer / Controlling Authority
${f.company||"__________"}
${f.company_address||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

I, ${f.employee||"__________"}, hereby apply for payment of
gratuity as detailed below:

EMPLOYEE DETAILS:
Name:                    ${f.employee||"__________"}
Father's/Husband's Name: ${f.father||"__________"}
Department:              ${f.department||"__________"}
Designation:             ${f.designation||"__________"}
Employee ID:             ${f.emp_id||"__________"}
Date of Joining:         ${f.doj||"__________"}
Date of Leaving:         ${f.dol||"__________"}
Total Service:           ${f.service||"__"} Years ${f.months||"__"} Months
Reason for Leaving:      ${f.reason||"Retirement / Resignation / Retrenchment / Death / Disablement"}

CALCULATION OF GRATUITY:
Last drawn Monthly Wages: Rs. ${f.wages||"__________"}/-
Years of Service:         ${f.years||"__"} years (${f.years||"__"} completed years)
Gratuity = Last Wages × 15/26 × Years of Service
         = Rs. ${f.wages||"__________"} × 15/26 × ${f.years||"__"}
         = Rs. ${f.gratuity||"__________"}/-

BANK DETAILS FOR PAYMENT:
Bank Name:        ${f.bank||"__________"}
Branch:           ${f.branch||"__________"}
Account No.:      ${f.account||"__________"}
IFSC Code:        ${f.ifsc||"__________"}
Account Holder:   ${f.account_holder||"__________"}

NOMINEE DETAILS (in case of death):
Name:       ${f.nominee||"__________"}
Relation:   ${f.nominee_relation||"__________"}
Address:    ${f.nominee_address||"__________"}

I request that the gratuity amount of Rs. ${f.gratuity||"__________"}/-
be paid to me within 30 days as per S.7(3) of the
Payment of Gratuity Act, 1972.

(${f.employee||"__________"})
Employee — Signature
Date: ${f.date||new Date().toLocaleDateString('en-IN')}

ACKNOWLEDGEMENT BY EMPLOYER:
Received application on: _________________
Signature of Employer: _________________`
  },

  // ── 3. INDUSTRIAL DISPUTE REFERENCE ──────────────────────
  industrial_dispute: {
    name: "Statement of Claim — Industrial Dispute",
    section: "Industrial Disputes Act 1947",
    keywords: ["industrial dispute","labour court claim","unfair dismissal claim","industrial tribunal","wrongful termination claim"],
    generate: (f={}) => `BEFORE THE LABOUR COURT / INDUSTRIAL TRIBUNAL
${f.state||"__________"}

CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.workman||"__________"} S/o ${f.father||"__________"}
Designation: ${f.designation||"__________"}, Dept: ${f.dept||"__________"}
R/o: ${f.address||"__________"}
                                        ...CLAIMANT/WORKMAN
VERSUS

M/s ${f.company||"__________"}
${f.company_address||"__________"}
                                        ...RESPONDENT/EMPLOYER

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATEMENT OF CLAIM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.   EMPLOYMENT DETAILS:
     Date of Joining:   ${f.doj||"__________"}
     Designation:       ${f.designation||"__________"}
     Last Drawn Wages:  Rs. ${f.wages||"__________"}/- per month
     Date of Termination: ${f.termination_date||"__________"}
     Nature of Termination: ${f.termination_type||"Dismissal / Discharge / Retrenchment / Lay-off"}

2.   FACTS:
     ${f.facts||`That the claimant has been working with the
     respondent since __________. On __________, the
     respondent __________ the claimant without
     following due procedure of law.`}

3.   GROUNDS:
     (i)  The termination is illegal, unjust and void
          as the respondent did not follow the principles
          of natural justice.

     (ii) No inquiry was conducted / The inquiry was
          not fair and proper.

     (iii)The termination violates S.${f.violated_section||"25-F / 25-N"} of the
          Industrial Disputes Act, 1947.

4.   RELIEF CLAIMED:
     (a) Reinstatement with full back wages;
     (b) Continuity of service;
     (c) Retrenchment compensation of Rs. ${f.compensation||"__________"}/-;
     (d) Any other relief as deemed fit.

Place: ${f.place||"__________"}
Date:  ${f.date||new Date().toLocaleDateString('en-IN')}

                              (${f.advocate||"__________"})
                              Advocate for Claimant`
  },

  // ── 4. APPOINTMENT LETTER ─────────────────────────────────
  appointment_letter: {
    name: "Appointment Letter / Offer Letter",
    keywords: ["appointment letter","offer letter","naukri letter","employment letter","joining letter"],
    generate: (f={}) => `APPOINTMENT LETTER / OFFER OF EMPLOYMENT

${f.company||"__________"}
${f.company_address||"__________"}
CIN: ${f.cin||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Ref. No.: ${f.ref_no||"__________"}

TO,
${f.employee||"__________"}
${f.employee_address||"__________"}

Dear ${f.employee||"__________"},

We are pleased to appoint you as ${f.designation||"__________"} in
${f.department||"__________"} Department with effect from
${f.joining_date||"__________"} on the following terms and conditions:

1.  DESIGNATION: ${f.designation||"__________"}
2.  DEPARTMENT:  ${f.department||"__________"}
3.  REPORTING TO: ${f.reporting||"__________"}
4.  PLACE OF POSTING: ${f.location||"__________"}

5.  COMPENSATION:
    Basic Salary:         Rs. ${f.basic||"__________"}/- per month
    HRA:                  Rs. ${f.hra||"__________"}/- per month
    Conveyance:           Rs. ${f.conveyance||"__________"}/- per month
    Other Allowances:     Rs. ${f.other||"__________"}/- per month
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    GROSS MONTHLY SALARY: Rs. ${f.gross||"__________"}/- per month
    CTC per annum:        Rs. ${f.ctc||"__________"}/-

6.  PROBATION: ${f.probation||"6 months"} from date of joining.
    During probation, either party may terminate with
    ${f.probation_notice||"1 week"} notice.

7.  NOTICE PERIOD: After confirmation — ${f.notice||"1 month"} notice
    from either side or salary in lieu thereof.

8.  WORKING HOURS: ${f.hours||"9:00 AM to 6:00 PM, Monday to Saturday"}

9.  LEAVE: As per company policy.

10. CONFIDENTIALITY: You shall keep all company
    information strictly confidential during and after
    employment.

11. NON-COMPETE: During employment you shall not
    engage in any competing business.

12. THIS APPOINTMENT IS SUBJECT TO:
    (a) Verification of documents submitted;
    (b) Satisfactory background check;
    (c) Medical fitness certificate.

Please sign and return the duplicate copy as token
of acceptance within ${f.acceptance_days||"7 days"}.

Congratulations and welcome aboard!

For ${f.company||"__________"},

(${f.authority||"__________"})
${f.authority_designation||"HR Manager / Director"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCEPTANCE

I, ${f.employee||"__________"}, accept the above appointment
on the terms and conditions mentioned.

Signature: _________________  Date: _________________`
  },

  // ── 5. RESIGNATION LETTER ─────────────────────────────────
  resignation_letter: {
    name: "Resignation Letter",
    keywords: ["resignation letter","naukri chhodna","resignation draft","resign letter","istifa patra"],
    generate: (f={}) => `RESIGNATION LETTER

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.manager||"__________"} / The HR Manager
${f.company||"__________"}
${f.company_address||"__________"}

SUBJECT: Resignation from the post of ${f.designation||"__________"}

Dear Sir/Madam,

I, ${f.employee||"__________"}, am hereby submitting my
resignation from the position of ${f.designation||"__________"}
in ${f.department||"__________"} Department, with effect from
${f.last_date||"__________"}.

As per the terms of my employment, I am serving a
notice period of ${f.notice||"1 month"} / I am willing to pay
${f.notice||"1 month"} salary in lieu of notice.

REASON FOR RESIGNATION:
${f.reason||"Personal reasons / Better opportunity / Health reasons / Other"}

I take this opportunity to thank the organization
for the experience and opportunities provided to me.
I will ensure a smooth transition and complete all
pending work before my last working day.

Please accept my resignation and process my Full
and Final Settlement including:
• Salary till ${f.last_date||"__________"}
• Leave encashment
• Gratuity (if eligible)
• PF withdrawal / transfer
• Experience Certificate
• Relieving Letter

Yours faithfully,

(${f.employee||"__________"})
Employee ID: ${f.emp_id||"__________"}
Mobile: ${f.mobile||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACKNOWLEDGEMENT BY EMPLOYER:
Resignation accepted.
Last Working Day: _________________
Full & Final Settlement Date: _________________
(${f.authority||"__________"}) — HR Manager`
  },

  // ── 6. TERMINATION LETTER ─────────────────────────────────
  termination_letter: {
    name: "Termination Letter / Dismissal Order",
    keywords: ["termination letter","dismissal letter","naukri se nikaala","terminate employee","employee termination"],
    generate: (f={}) => `TERMINATION ORDER / DISMISSAL LETTER

${f.company||"__________"}
${f.company_address||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Ref. No.: ${f.ref_no||"__________"}

TO,
${f.employee||"__________"}
Employee ID: ${f.emp_id||"__________"}
Designation: ${f.designation||"__________"}
${f.employee_address||"__________"}

SUBJECT: Termination of Services

Dear ${f.employee||"__________"},

With reference to the inquiry/show cause notice
proceedings against you, the management has decided
to TERMINATE your services with effect from
${f.effective_date||"__________"} on account of:

${f.grounds||`(i)  Misconduct namely __________
(ii) Repeated violations of company policy
(iii)Insubordination
(iv) Wilful negligence of duty
(v)  Other: __________`}

This decision has been taken after following due
process of law including:
• Show cause notice dated ${f.scn_date||"__________"}
• Domestic inquiry conducted on ${f.inquiry_date||"__________"}
• Inquiry report dated ${f.inquiry_report_date||"__________"}
• Your reply / no reply was received

Your Full and Final Settlement will be processed as per company policy and law, AFTER DEDUCTING:
• Notice pay (if applicable)
• Outstanding dues

You are directed to:
(a) Hand over all company property immediately;
(b) Clear all outstanding dues;
(c) Vacate company accommodation (if any) within ${f.vacate_days||"7"} days.

For ${f.company||"__________"},

(${f.authority||"__________"})
${f.authority_designation||"Managing Director / HR Manager"}

ACKNOWLEDGEMENT:
I have received this letter.
(${f.employee||"__________"}) — Signature  Date: _________________`
  },

  // ── 7. WORKMEN COMPENSATION CLAIM ────────────────────────
  workmen_compensation: {
    name: "Workmen Compensation Claim — Workmen's Compensation Act",
    section: "Workmen's Compensation Act 1923 / Employees Compensation Act",
    keywords: ["workmen compensation","accident compensation","industrial accident claim","employees compensation act","kaam par chot"],
    generate: (f={}) => `BEFORE THE COMMISSIONER FOR WORKMEN'S COMPENSATION
${f.district||"__________"}, ${f.state||"__________"}

CASE NO. _____ OF ${f.year||new Date().getFullYear()}

${f.claimant||"__________"} W/o / S/o ${f.father||"__________"}
(Injured Workman / Legal Heir of Deceased Workman)
R/o: ${f.address||"__________"}
                                        ...CLAIMANT
VERSUS

M/s ${f.employer||"__________"}
${f.employer_address||"__________"}
                                        ...RESPONDENT/EMPLOYER

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLAIM PETITION UNDER WORKMEN'S COMPENSATION ACT 1923
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.   ACCIDENT DETAILS:
     Date of Accident:    ${f.accident_date||"__________"}
     Time of Accident:    ${f.accident_time||"__________"}
     Place of Accident:   ${f.accident_place||"__________"}
     Nature of Accident:  ${f.accident_nature||"__________"}
     Injuries Sustained:  ${f.injuries||"__________"}

2.   WORKMAN DETAILS:
     Name:              ${f.workman||"__________"}
     Age:               ${f.age||"__"} Years
     Designation:       ${f.designation||"__________"}
     Monthly Wages:     Rs. ${f.wages||"__________"}/-
     Date of Joining:   ${f.doj||"__________"}

3.   NATURE OF DISABILITY:
     ${f.disability||"Total permanent disability / Partial permanent disability / Temporary disability / Death"}
     Percentage of disability: ${f.disability_percent||"__"}%

4.   MEDICAL TREATMENT:
     Treatment taken at: ${f.hospital||"__________"}
     Medical expenses:   Rs. ${f.medical_exp||"__________"}/-

5.   COMPENSATION CALCULATION:
     As per Schedule I / II of the Act:
     Monthly Wages × Relevant Factor = Rs. ${f.compensation||"__________"}/-
     Medical expenses:                Rs. ${f.medical_exp||"__________"}/-
     TOTAL CLAIM:                     Rs. ${f.total||"__________"}/-

6.   The employer has not paid any compensation
     despite the accident having occurred during
     course of employment.

PRAYER:
(a) Award compensation of Rs. ${f.total||"__________"}/-;
(b) Award interest @ 12% p.a. from date of accident;
(c) Impose penalty for delay;
(d) Pass any other order as deemed fit.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
                              (${f.advocate||"__________"})
                              Advocate for Claimant`
  },

  // ── 8. PF WITHDRAWAL COMPLAINT ───────────────────────────
  pf_complaint: {
    name: "PF Withdrawal Complaint to EPFO",
    keywords: ["pf complaint","epfo complaint","pf withdrawal complaint","provident fund complaint","pf nahi mila"],
    generate: (f={}) => `COMPLAINT TO REGIONAL PROVIDENT FUND COMMISSIONER
EMPLOYEES PROVIDENT FUND ORGANISATION
${f.epfo_office||"__________"} Regional Office

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

SUBJECT: Complaint regarding non-payment of PF dues

Sir/Madam,

I, ${f.employee||"__________"}, UAN No. ${f.uan||"__________"},
PF Account No. ${f.pf_account||"__________"}, was employed with
M/s ${f.company||"__________"} from ${f.doj||"__________"} to
${f.dol||"__________"}.

GRIEVANCE:
${f.grievance||`1. My PF withdrawal application dated __________ has
   not been processed despite __________ days.
2. The employer has not deposited PF contributions
   from __________ to __________ amounting to Rs. __________.
3. My KYC is not updated by employer.
4. Other: __________`}

AMOUNT INVOLVED: Rs. ${f.amount||"__________"}/-

DOCUMENTS ATTACHED:
1. PF Account Statement
2. Employment proof / Salary slips
3. Aadhaar / PAN
4. Bank account proof

I request your good office to:
(a) Direct the employer to comply with EPF Act;
(b) Ensure payment of PF dues within 30 days;
(c) Impose penalty on defaulting employer.

(${f.employee||"__________"})
Mobile: ${f.mobile||"__________"}
Email: ${f.email||"__________"}`
  },

  // ── 9. SHOW CAUSE NOTICE ─────────────────────────────────
  show_cause_notice: {
    name: "Show Cause Notice to Employee",
    keywords: ["show cause notice","explanation notice","scn employee","karna explain","show cause notice draft"],
    generate: (f={}) => `SHOW CAUSE NOTICE

${f.company||"__________"}
${f.company_address||"__________"}

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Ref. No.: ${f.ref_no||"__________"}

TO,
${f.employee||"__________"}
Employee ID: ${f.emp_id||"__________"}
Designation: ${f.designation||"__________"}

SUBJECT: Show Cause Notice for ${f.subject||"Misconduct / Absence / Negligence"}

Dear ${f.employee||"__________"},

It has been brought to the notice of the management
that you have ${f.allegation||"been absent without leave from __________ to __________ / committed misconduct on __________ by __________"}.

The aforesaid act constitutes:
• Violation of Standing Orders / Service Rules
• Misconduct as per your Service Agreement
• ${f.violation||"Other violation"}

This is a SERIOUS MATTER which may result in
disciplinary action including termination.

YOU ARE HEREBY CALLED UPON to submit your written
explanation within ${f.days||"7 (Seven)"} working days from
receipt of this notice, explaining why disciplinary
action should not be initiated against you.

Your failure to reply within the stipulated period
shall be treated as admission of the charges and
the matter shall be decided ex-parte.

For ${f.company||"__________"},

(${f.authority||"__________"})
${f.authority_designation||"HR Manager / Department Head"}

ACKNOWLEDGEMENT:
I acknowledge receipt of this Show Cause Notice.
(${f.employee||"__________"}) — Signature  Date: _________________`
  },

  // ── 10. LABOUR COURT REPLY / WRITTEN STATEMENT ───────────
  labour_written_statement: {
    name: "Written Statement / Reply by Employer — Labour Court",
    keywords: ["labour court reply","employer written statement","industrial tribunal reply","management reply labour court"],
    generate: (f={}) => `BEFORE THE LABOUR COURT / INDUSTRIAL TRIBUNAL
${f.state||"__________"}

CASE NO. ${f.case_no||"_____"} OF ${f.year||new Date().getFullYear()}

${f.workman||"__________"}          ...CLAIMANT/WORKMAN
VERSUS
M/s ${f.company||"__________"}      ...RESPONDENT/MANAGEMENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRITTEN STATEMENT ON BEHALF OF MANAGEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRELIMINARY OBJECTIONS:

1.  The claim is not maintainable as the claimant
    is not a "workman" as defined under the
    Industrial Disputes Act, 1947.

2.  The claim is barred by limitation.

3.  This Court has no jurisdiction as ${f.jurisdiction||"__________"}.

ON MERITS:

4.  The termination of the claimant was legal,
    valid and in accordance with law because:
    ${f.grounds||`(i)  Proper inquiry was conducted
    (ii) Principles of natural justice were followed
    (iii)Charges of misconduct were proved
    (iv) Adequate opportunity was given`}

5.  Para-wise reply:
    Para 1: ${f.r1||"Admitted / Denied"}
    Para 2: ${f.r2||"Denied. The true facts are: __________"}

6.  The management is not liable to pay any
    compensation, back wages or other relief.

PRAYER: The claim petition be dismissed with costs.

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

                              (${f.advocate||"__________"})
                              Advocate for Management`
  },

};
