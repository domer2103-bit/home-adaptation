import { FundingGuide } from '../types';

export const fundingGuidesData: FundingGuide[] = [
  {
    id: 'dfg',
    title: 'Disabled Facilities Grant (DFG)',
    shortDesc: 'A UK government grant of up to £30,000 in England to cover the cost of essential home adaptations.',
    description: 'The Disabled Facilities Grant (DFG) is a local council-managed fund designed to help disabled, chronic-ill, and elderly residents adapt their home to enable them to continue living independently and safely. The grant can pay for crucial changes, including wet rooms, stairlifts, widening doorways, and modular wheelchair access ramps. Crucially, the grant does not affect your state pension, personal independence payment (PIP), or attendance allowance.',
    eligibilityRules: [
      'You must own the property or be a tenant (private or council) intending to live there for the next 5 years.',
      'The applicant must have a recognized physical disability, sensory impairment, learning struggle, or age-related mobility decline.',
      'The adaptation must be deemed "necessary and appropriate" by an Occupational Therapist (OT).',
      'The application is means-tested for adults (evaluating household savings and taxable income), but is NOT means-tested for children under 19.'
    ],
    applicationSteps: [
      'Request an Occupational Therapist (OT) home assessment through your local council social services care team.',
      'The OT visits your home to evaluate your safety, stability, and make specific adaptation specifications.',
      'Submit the formal application to the council alongside professional installation quotes resembling our specialist costings.',
      'Wait for the council approval (they are legally required to give an answer within 6 months of a formal submission).',
      'Our certified engineers undertake the work, and the council pays the provider directly after a quality inspection.'
    ],
    frequentlyAsked: [
      {
        q: 'How much money can I get under a Disabled Facilities Grant?',
        a: 'The maximum grant limits are £30,000 in England, £36,000 in Wales, and up to £25,000 in Northern Ireland. In Scotland, different local equipment and adaptation grants apply through the Integration Joint Boards.'
      },
      {
        q: 'Will receiving a DFG affect my other benefits?',
        a: 'No. The DFG is an independent, non-taxable grant. It does not affect state pensions, Disability Living Allowance (DLA), Personal Independence Payment (PIP), Universal Credit, or Attendance Allowance.'
      },
      {
        q: 'Is the DFG means-tested?',
        a: 'For adults, yes. The council will audit your household income and savings on a sliding scale. If you are on guaranteed benefits (like Pension Credit Guarantee or Income Support), you normally pay absolutely nothing towards the costs. If adapting for a child under 19, there is no means test at all.'
      }
    ]
  },
  {
    id: 'council-adaptations',
    title: 'Council Minor Adaptations',
    shortDesc: 'A fast-track council support scheme providing free adaptions under £1,000 directly to residents in need.',
    description: 'If your adaptation needs are compact—such as fitting anti-slip grab rails next to the shower, a raised toilet seat, minor pathway ramping, or a banister rail for the stairs—you may not need a full means-tested DFG grant. Most UK local authorities run a fast-track "Minor Adaptations Service" for improvements costing under £1,000. These are usually provided completely free of charge to help prevent fall-related hospital admissions.',
    eligibilityRules: [
      'You are a resident in the council borough and need support due to age, chronic illness, or physical limitation.',
      'The estimated cost of the materials and labor for the required works is under £1,000 in total.',
      'The recommendations can be confirmed by a social worker, OT, or community assessment officer.'
    ],
    applicationSteps: [
      'Contact your local UK council social work or independent living team directly.',
      'Describe the difficulties you or your family member are experiencing with basic movements.',
      'An assessment officer will review the request—often over the phone or via a speedy drop-in visit.',
      'If approved, local council council-contracted handymen will arrive within 2 to 4 weeks to install the aids safely.'
    ],
    frequentlyAsked: [
      {
        q: 'Do I have to pay anything at all for minor installations under £1,000?',
        a: 'No. By law in England and Wales, councils must provide minor adaptations (costing under £1,000, including fitting) free of charge to any resident who qualifies under Care Act standards.'
      },
      {
        q: 'How long does this expedited service take?',
        a: 'While full DFGs can take months, minor adaptations are normally fast-tracked and completed inside 14 to 30 days, as they bypass heavy administration and means-testing.'
      }
    ]
  },
  {
    id: 'ot-assessment',
    title: 'Occupational Therapist (OT) Assessment',
    shortDesc: 'The vital step to qualify for funding. Learn how to secure a free OT home assessment and prepare for their visit.',
    description: 'An Occupational Therapist (OT) is a highly trained healthcare professional who looks at all your physical activities in relation to your home environment. Their clinical stamp of approval is the "golden ticket" to qualifying for both minor and major council-funded home adaptations. They focus on preserving your clinical safety, bodily stability, and quality of life.',
    eligibilityRules: [
      'Open to any UK resident experiencing recurring difficulty performing crucial activities of daily living (bathing, cooking, stair transit, or transfers).',
      'Can be requested for yourself, a family member, or on behalf of a patient you look after.'
    ],
    applicationSteps: [
      'Request the assessment for free by calling your district council\'s Social Services department or Adult Social Care team.',
      'Alternative route: Ask your local GP, district nurse, or hospital discharge coordinator to submit an expedited clinical referral.',
      'Prepare for the visit: Jot down exactly when you feel unsafe, and the specific daily tasks that give you pain or anxiety.',
      'The visit: The OT will observe you standing, walking, getting out of bed, and negotiating stairs or shower thresholds, checking for slip and balance risks.',
      'The report: The OT drafts a precise medical specification recommending the exact home improvements required.'
    ],
    frequentlyAsked: [
      {
        q: 'What is the waiting list time for a free council OT assessment?',
        a: 'Waiting times vary severely across different boroughs. High-priority cases (e.g., coming home from hospital or recovering from strokes) are usually seen inside 2 to 4 weeks, whereas routine assessments can occasionally take several months. You can also hire an independent, private OT to bypass the queue, whose assessment is still legally recognized.'
      },
      {
        q: 'What happens during the therapist’s home visit?',
        a: 'The OT will act like a helpful detective. They will ask you to show them how you currently manage routine tasks, inspect your lighting, test standard heights (like toilet seats, chairs, and low steps), and recommend layout tweaks or professional aids.'
      }
    ]
  }
];

export const generalFaqData = [
  {
    q: 'How do I know if I qualify for home adaptation funding?',
    a: 'Generally, you qualify for funding if you have a permanent and substantial disability, difficulty navigating your home, or high fall risks. If you receive low income or are on guaranteed pension credits, you may get 100% of the adaptation paid for by the Disabled Facilities Grant (DFG).'
  },
  {
    q: 'Can a private tenant get local authority help?',
    a: 'Absolutely. Private tenants, council/housing association tenants, and homeowners are all fully eligible to apply for high-value funding grants. Private tenants will simply need the formal written consent of their landlord to proceed.'
  },
  {
    q: 'What is VAT exemption and do I qualify?',
    a: 'In the UK, if you are chronically sick or disabled, you do not have to pay VAT (which saves you 20%) on many home adaptation products and building services. Our advisors will supply a simple self-declaration form to subtract this tax from your private quote automatically.'
  },
  {
    q: 'How long does a wet room or walk-in shower installation take?',
    a: 'A standard straight stairlift takes about 3 to 5 hours. A comprehensive wet room, which requires stripping tiles, fitting under-floor drainage, tanking, and safety flooring, typically takes between 4 and 7 working days with our clean and tidy team.'
  },
  {
    q: 'Can I choose my own contractor for DFG works?',
    a: 'Yes, most councils allow you to use your own chosen certified, fully insured supplier (like our vetted lead generation partners) as long as their quotation aligns with equivalent council schedule rates and matches the OT\'s clinical list of requirements.'
  }
];
