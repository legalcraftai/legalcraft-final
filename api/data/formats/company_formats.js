// ════════════════════════════════════════════════════════════
// COMPANY / BUSINESS LAW FORMATS PACKET
// Company formation, MOA, AOA, Board Resolution, Notices
// ════════════════════════════════════════════════════════════
module.exports = {

  meta: { packet: "company_formats", total_formats: 10 },

  // ── 1. BOARD RESOLUTION ───────────────────────────────────
  board_resolution: {
    name: "Board Resolution",
    keywords: ["board resolution","board meeting resolution","directors resolution","company resolution draft"],
    generate: (f={}) => `BOARD RESOLUTION

COMPANY: M/s ${f.company||"__________"} (${f.company_type||"Private Limited / Public Limited / LLP"})
CIN: ${f.cin||"__________"}
REGISTERED OFFICE: ${f.reg_office||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MINUTES OF BOARD MEETING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Date of Meeting: ${f.date||new Date().toLocaleDateString('en-IN')}
Time: ${f.time||"__________"}
Venue: ${f.venue||"Registered Office of the Company"}

DIRECTORS PRESENT:
1. ${f.director1||"__________"} — Managing Director / Whole-time Director
2. ${f.director2||"__________"} — Independent Director
3. ${f.director3||"__________"} — Director
(Quorum: ${f.quorum||"2 Directors"} — Quorum is present)

DIRECTORS ABSENT WITH LEAVE:
${f.absent||"Nil"}

CHAIRMAN: ${f.chairman||"__________"} chaired the meeting.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESOLUTION NO. ${f.resolution_no||"1"} — ${f.resolution_subject||"__________"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RESOLVED THAT:

${f.resolution_text||`The Board hereby authorises __________ to
__________ on behalf of the Company.

FURTHER RESOLVED THAT __________ be and is hereby
authorised to do all such acts, deeds and things
as may be necessary to give effect to this resolution.`}

The resolution was PASSED by ${f.vote||"unanimous consent / __ votes in favour, __ against"}.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
There being no other business, the meeting concluded
at ${f.end_time||"__________"}.

Certified as a true copy:

(${f.director1||"__________"})              (${f.director2||"__________"})
    DIRECTOR                                  DIRECTOR

Signature of Company Secretary (if applicable):
(${f.cs||"__________"})
Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

  // ── 2. SHAREHOLDERS AGREEMENT ────────────────────────────
  shareholders_agreement: {
    name: "Shareholders Agreement",
    keywords: ["shareholders agreement","share agreement","investor agreement","sha draft","founder agreement"],
    generate: (f={}) => `SHAREHOLDERS AGREEMENT

THIS AGREEMENT is executed on ${f.date||new Date().toLocaleDateString('en-IN')}

BETWEEN:

PROMOTER / FOUNDER 1:
${f.founder1||"__________"} S/o ${f.f1_father||"__________"}
R/o: ${f.f1_address||"__________"}
Shareholding: ${f.f1_shares||"__"}% (${f.f1_share_no||"__________"} shares)

PROMOTER / FOUNDER 2:
${f.founder2||"__________"} S/o ${f.f2_father||"__________"}
R/o: ${f.f2_address||"__________"}
Shareholding: ${f.f2_shares||"__"}% (${f.f2_share_no||"__________"} shares)

INVESTOR (if any):
${f.investor||"__________"}
${f.investor_address||"__________"}
Shareholding: ${f.investor_shares||"__"}%

REGARDING: M/s ${f.company||"__________"} (CIN: ${f.cin||"__________"})

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  BUSINESS: ${f.business||"__________"}

2.  SHARE TRANSFER RESTRICTIONS:
    No shareholder shall transfer shares without
    first offering to other shareholders — RIGHT OF
    FIRST REFUSAL (ROFR) at same price.

3.  LOCK-IN PERIOD:
    Founders shall not transfer shares for
    ${f.lock_in||"3 years"} from date of this agreement.

4.  ANTI-DILUTION: ${f.anti_dilution||"Pro-rata rights for existing shareholders in future funding rounds."}

5.  DRAG-ALONG: If ${f.drag_along_threshold||"75%"} shareholders agree to sell,
    remaining shareholders shall also sell on same terms.

6.  TAG-ALONG: If majority shareholders sell, minority
    has right to sell on same terms.

7.  BOARD COMPOSITION:
    ${f.board||"Founder 1: 2 seats, Founder 2: 1 seat, Investor: 1 seat"}

8.  DIVIDEND POLICY: ${f.dividend||"Dividends declared by Board as per Companies Act."}

9.  EXIT: ${f.exit||"IPO / Strategic sale / Buyback after __________ years"}

10. DISPUTE RESOLUTION: Disputes shall be resolved
    by arbitration under Arbitration Act 1996 at
    ${f.arb_seat||"__________"}.

(${f.founder1||"__________"})   (${f.founder2||"__________"})   (${f.investor||"__________"})
  FOUNDER 1                 FOUNDER 2                   INVESTOR`
  },

  // ── 3. STATUTORY NOTICE — AGM ────────────────────────────
  agm_notice: {
    name: "Notice of Annual General Meeting (AGM)",
    section: "S.101 Companies Act 2013",
    keywords: ["agm notice","annual general meeting notice","101 companies act","agm notice draft","company meeting notice"],
    generate: (f={}) => `${f.company||"__________"}
CIN: ${f.cin||"__________"}
Registered Office: ${f.reg_office||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTICE OF ${f.agm_no||"__"}TH ANNUAL GENERAL MEETING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NOTICE IS HEREBY GIVEN that the ${f.agm_no||"__"}th Annual
General Meeting of the Members of ${f.company||"__________"}
will be held on:

Date:    ${f.agm_date||"__________"}
Day:     ${f.agm_day||"__________"}
Time:    ${f.agm_time||"__________"}
Venue:   ${f.agm_venue||"__________"}

to transact the following ORDINARY BUSINESS:

1.  To receive, consider and adopt the Audited
    Financial Statements for the year ended
    ${f.financial_year||"31st March __________"} together with the
    Reports of the Board of Directors and Auditors.

2.  To declare dividend of Rs. ${f.dividend||"__________"}/- per
    share on equity shares.

3.  To re-appoint ${f.director||"__________"} as Director, who
    retires by rotation.

4.  To appoint Auditors and fix their remuneration.

SPECIAL BUSINESS:

5.  ${f.special_business||"To approve related party transactions / To increase authorised share capital / Other"}

NOTES:

1.  A member entitled to attend and vote is entitled
    to appoint a PROXY to attend and vote instead.

2.  The Register of Members will remain closed from
    ${f.record_date||"__________"} to ${f.agm_date||"__________"} (both days inclusive).

3.  Members are requested to update KYC and bank details.

By Order of the Board,

(${f.cs||"Company Secretary"} / ${f.director||"Director"})
Date: ${f.notice_date||new Date().toLocaleDateString('en-IN')}
Place: ${f.place||"__________"}`
  },

  // ── 4. MEMORANDUM OF UNDERSTANDING (MOU) ─────────────────
  mou: {
    name: "Memorandum of Understanding (MOU)",
    keywords: ["mou","memorandum of understanding","mou draft","samjhauta patra","mou agreement"],
    generate: (f={}) => `MEMORANDUM OF UNDERSTANDING (MOU)

This Memorandum of Understanding is entered into
on ${f.date||new Date().toLocaleDateString('en-IN')} at ${f.place||"__________"}.

BETWEEN:

PARTY 1: ${f.party1||"__________"}
         ${f.party1_address||"__________"}
         (Hereinafter "PARTY 1")

AND

PARTY 2: ${f.party2||"__________"}
         ${f.party2_address||"__________"}
         (Hereinafter "PARTY 2")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: ${f.purpose||"Collaboration / Joint Venture / Partnership / Service Arrangement"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHEREAS:
(a) Party 1 is engaged in ${f.p1_business||"__________"}
(b) Party 2 is engaged in ${f.p2_business||"__________"}
(c) Both parties desire to collaborate for mutual benefit.

NOW THE PARTIES AGREE AS UNDER:

1.  SCOPE OF COLLABORATION:
    ${f.scope||"(Describe what both parties will do together)"}

2.  RESPONSIBILITIES:
    Party 1 shall: ${f.p1_responsibilities||"__________"}
    Party 2 shall: ${f.p2_responsibilities||"__________"}

3.  FINANCIAL TERMS:
    ${f.financial||"Revenue sharing: __% to Party 1, __% to Party 2"}
    Payment terms: ${f.payment||"__________"}

4.  DURATION: This MOU shall be valid for ${f.duration||"1 year"}
    from the date of signing, renewable by mutual consent.

5.  CONFIDENTIALITY: Both parties shall keep all
    information shared under this MOU confidential.

6.  INTELLECTUAL PROPERTY: ${f.ip||"All IP created jointly shall be jointly owned."}

7.  TERMINATION: Either party may terminate this MOU
    with ${f.notice||"30 days"} written notice.

8.  THIS MOU IS NOT LEGALLY BINDING / IS LEGALLY BINDING
    (${f.binding||"Delete as applicable"})

9.  GOVERNING LAW: Laws of India. Disputes at ${f.jurisdiction||"__________"}.

Note: This MOU represents the intent of the parties
and shall be replaced by a formal agreement.

(${f.party1||"__________"})            (${f.party2||"__________"})
    PARTY 1                             PARTY 2

WITNESSES:
1. _________________ 2. _________________`
  },

  // ── 5. NDA — NON-DISCLOSURE AGREEMENT ────────────────────
  nda: {
    name: "Non-Disclosure Agreement (NDA)",
    keywords: ["nda","non disclosure agreement","confidentiality agreement","nda draft","secrecy agreement"],
    generate: (f={}) => `NON-DISCLOSURE AGREEMENT (NDA)
(Confidentiality Agreement)

This Agreement is entered into on ${f.date||new Date().toLocaleDateString('en-IN')}

BETWEEN:

DISCLOSING PARTY: ${f.discloser||"__________"}
                  ${f.discloser_address||"__________"}

RECEIVING PARTY:  ${f.receiver||"__________"}
                  ${f.receiver_address||"__________"}

PURPOSE: ${f.purpose||"Discussion of potential business collaboration / Employment / Investment"}

NOW IT IS AGREED:

1.  CONFIDENTIAL INFORMATION means all information
    disclosed by Disclosing Party including but not
    limited to: business plans, technical data,
    financial information, customer lists, trade
    secrets, know-how and all other proprietary
    information marked as confidential.

2.  OBLIGATIONS: The Receiving Party shall:
    (a) Keep all Confidential Information strictly confidential;
    (b) Not disclose to any third party without prior written consent;
    (c) Use only for the stated purpose;
    (d) Protect with same care as own confidential information.

3.  EXCEPTIONS: Not applicable to information that:
    (a) Is already publicly known;
    (b) Was already known to Receiving Party;
    (c) Is independently developed;
    (d) Is required to be disclosed by law / court order.

4.  DURATION: This NDA shall remain in force for
    ${f.duration||"3 years"} from the date of signing.

5.  RETURN OF INFORMATION: On request, all confidential
    materials shall be returned or destroyed.

6.  REMEDY: Any breach shall entitle Disclosing Party
    to seek injunctive relief and damages.

7.  GOVERNING LAW: Laws of India. Jurisdiction: ${f.jurisdiction||"__________"}.

(${f.discloser||"__________"})           (${f.receiver||"__________"})
DISCLOSING PARTY                      RECEIVING PARTY

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

WITNESS: _________________ WITNESS: _________________`
  },

  // ── 6. DEMAND NOTICE — COMPANY ───────────────────────────
  company_demand_notice: {
    name: "Demand Notice before winding up — S.271 Companies Act",
    section: "S.271 Companies Act 2013",
    keywords: ["winding up notice","271 companies act","company debt notice","statutory demand company","demand notice company"],
    generate: (f={}) => `STATUTORY DEMAND NOTICE
(U/S 271 COMPANIES ACT, 2013)

Date: ${f.date||new Date().toLocaleDateString('en-IN')}
BY REGISTERED POST A.D.

TO,
THE BOARD OF DIRECTORS
M/s ${f.company||"__________"}
CIN: ${f.cin||"__________"}
Registered Office: ${f.reg_office||"__________"}

SUBJECT: Demand Notice for payment of undisputed
debt of Rs. ${f.amount||"__________"}/- failing which
winding up proceedings shall be initiated.

Under instructions from my client ${f.client||"__________"},

We hereby demand payment of Rs. ${f.amount||"__________"}/-
(Rupees ${f.amount_words||"__________"} Only) which is an
undisputed debt payable to my client, as:
${f.basis||"(Nature of debt — loan / services / goods)"}

This debt has been due since ${f.due_date||"__________"}.

YOU ARE HEREBY CALLED UPON to pay the above sum
within TWENTY-ONE (21) DAYS of this notice.

Failure to pay within 21 days shall be deemed to
be inability to pay debts under S.271(2)(b) of the
Companies Act 2013, and winding up petition shall
be filed before NCLT without further notice.

${f.advocate||"__________"}
Advocate
Enrolment No.: ${f.enrol||"__________"}`
  },

  // ── 7. NOTICE TO CREDITORS / PUBLIC NOTICE ───────────────
  public_notice: {
    name: "Public Notice / Newspaper Notice",
    keywords: ["public notice","newspaper notice","public notice draft","legal notice newspaper","missing person notice"],
    generate: (f={}) => `PUBLIC NOTICE

TAKE NOTICE that I/We, ${f.issuer||"__________"} S/o ${f.father||"__________"},
R/o: ${f.address||"__________"},

hereby give PUBLIC NOTICE as follows:

${f.notice_text||`1.  That __________ has been lost/misplaced. Anyone
    finding the same is requested to contact me.

2.  That I am no longer responsible for any debts,
    liabilities or obligations incurred by __________.

3.  That the property bearing __________ has been
    sold to __________ vide Sale Deed dated __________.

4.  That anyone having any claim on the said property
    must contact the undersigned within 30 days.`}

If no claim is received within 30 days from the
date of this notice, the undersigned shall proceed
without any further notice.

(${f.issuer||"__________"})
Contact: ${f.mobile||"__________"}
Date: ${f.date||new Date().toLocaleDateString('en-IN')}
Place: ${f.place||"__________"}

Note: This notice is being published in
${f.newspaper||"__________ newspaper"} on ${f.pub_date||"__________"}.`
  },

  // ── 8. LEGAL NOTICE — INTELLECTUAL PROPERTY ──────────────
  ip_infringement_notice: {
    name: "Legal Notice for IP Infringement / Copyright Violation",
    keywords: ["ip infringement notice","copyright infringement","trademark violation notice","ip notice draft","copyright notice"],
    generate: (f={}) => `LEGAL NOTICE FOR INTELLECTUAL PROPERTY INFRINGEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BY: REGISTERED POST A.D. + EMAIL

Date: ${f.date||new Date().toLocaleDateString('en-IN')}

TO,
${f.infringer||"__________"}
${f.infringer_address||"__________"}

Under instructions from my client ${f.client||"__________"}:

1.  My client is the registered owner / creator of:
    ${f.ip_details||"Trademark No. __________ / Copyright registration __________ / Patent No. __________"}
    for the ${f.ip_type||"mark / work / invention"}: "${f.ip_name||"__________"}"

2.  You have without permission been using my client's
    ${f.ip_type||"trademark / copyright / patent"} as follows:
    ${f.infringement||"(Describe specific infringement)"}

3.  This constitutes infringement under:
    ${f.law||"Trade Marks Act 1999 / Copyright Act 1957 / Patents Act 1970"}

4.  YOU ARE HEREBY CALLED UPON WITHIN 7 DAYS to:
    (a) IMMEDIATELY CEASE AND DESIST from using my
        client's intellectual property;
    (b) Destroy all infringing material;
    (c) Account for profits from infringement;
    (d) Pay damages of Rs. ${f.damages||"__________"}/-

5.  Failure to comply shall result in legal action
    including injunction and criminal proceedings.

${f.advocate||"__________"}
Advocate for ${f.client||"__________"}
Enrolment No.: ${f.enrol||"__________"}`
  },

  // ── 9. FRANCHISE AGREEMENT ────────────────────────────────
  franchise_agreement: {
    name: "Franchise Agreement",
    keywords: ["franchise agreement","franchise deed","franchise draft","franchisee agreement"],
    generate: (f={}) => `FRANCHISE AGREEMENT

This Franchise Agreement is executed on
${f.date||new Date().toLocaleDateString('en-IN')} at ${f.place||"__________"}.

FRANCHISOR: ${f.franchisor||"__________"} (${f.franchisor_type||"Company/Individual"})
            ${f.franchisor_address||"__________"}

FRANCHISEE: ${f.franchisee||"__________"} (${f.franchisee_type||"Company/Individual"})
            ${f.franchisee_address||"__________"}

BRAND / BUSINESS: ${f.brand||"__________"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  GRANT OF FRANCHISE:
    Franchisor grants Franchisee the right to operate
    the ${f.brand||"__________"} franchise at:
    ${f.territory||"__________"}

2.  FRANCHISE FEE: Rs. ${f.franchise_fee||"__________"}/- (one time)

3.  ROYALTY: ${f.royalty||"__"}% of monthly gross revenue

4.  TERM: ${f.term||"3 years"} renewable.

5.  INVESTMENT REQUIRED: Rs. ${f.investment||"__________"}/-

6.  FRANCHISEE OBLIGATIONS:
    (a) Follow Franchisor's standards strictly;
    (b) Use only approved products/suppliers;
    (c) Maintain quality standards;
    (d) Not reveal trade secrets.

7.  FRANCHISOR SUPPORT:
    (a) Training for ${f.training||"__"} days;
    (b) Marketing support;
    (c) Operations manual.

8.  TERMINATION:
    Franchisor may terminate for material breach,
    non-payment, or reputational damage.

(${f.franchisor||"__________"})           (${f.franchisee||"__________"})
   FRANCHISOR                               FRANCHISEE`
  },

  // ── 10. SERVICE AGREEMENT ─────────────────────────────────
  service_agreement: {
    name: "Service Agreement / Consultancy Agreement",
    keywords: ["service agreement","consultancy agreement","service contract","professional service agreement","consultant agreement"],
    generate: (f={}) => `SERVICE AGREEMENT / CONSULTANCY AGREEMENT

This Agreement is entered into on
${f.date||new Date().toLocaleDateString('en-IN')} at ${f.place||"__________"}.

SERVICE PROVIDER: ${f.provider||"__________"}
                  ${f.provider_address||"__________"}
                  (Hereinafter "SERVICE PROVIDER")

CLIENT:           ${f.client||"__________"}
                  ${f.client_address||"__________"}
                  (Hereinafter "CLIENT")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  SCOPE OF SERVICES:
    ${f.scope||"(Describe services to be provided)"}

2.  DELIVERABLES:
    ${f.deliverables||"(List specific deliverables with timelines)"}

3.  FEES:
    Professional Fee: Rs. ${f.fee||"__________"}/- per ${f.fee_basis||"month / project / hour"}
    Payment due: ${f.payment_terms||"within 15 days of invoice"}
    GST: ${f.gst||"18"}% extra as applicable

4.  TERM: ${f.term||"1 year"} from ${f.start_date||"__________"}

5.  INDEPENDENCE: Service Provider is an independent
    contractor and not an employee of Client.

6.  CONFIDENTIALITY: All information shared shall
    be kept strictly confidential.

7.  INTELLECTUAL PROPERTY: All work product created
    shall ${f.ip_ownership||"belong to Client / remain with Service Provider"}.

8.  TERMINATION: Either party may terminate with
    ${f.notice||"30 days"} written notice. Client to pay for
    work done till termination.

9.  GOVERNING LAW: Laws of India. Disputes at ${f.jurisdiction||"__________"}.

(${f.provider||"__________"})           (${f.client||"__________"})
SERVICE PROVIDER                          CLIENT

Date: ${f.date||new Date().toLocaleDateString('en-IN')}`
  },

};
