import { FundingGuide } from '../types';

export const fundingGuidesData: FundingGuide[] = [
  {
    id: 'dfg',
    title: 'Disabled Facilities Grant (DFG)',
    shortDesc: 'A UK government grant of up to £30,000 in England to cover the cost of essential home adaptations.',
    description: 'The Disabled Facilities Grant (DFG) is a local council-managed fund designed to help disabled and elderly residents adapt their home to enable them to continue living independently and safely. The grant can pay for crucial changes, including level-access showers, stairlifts, and wheelchair ramps. In Merseyside, each council has its own team but follows the same national guidelines.',
    eligibilityRules: [
      'You must own the property or be a tenant (private or council) intending to live there for the next 5 years.',
      'The applicant must have a recognized physical disability or age-related mobility decline.',
      'The adaptation must be deemed "necessary and appropriate" by an Occupational Therapist (OT).',
      'The application is means-tested for adults but not for children under 19.'
    ],
    applicationSteps: [
      'Request an Occupational Therapist (OT) home assessment through your local Merseyside council.',
      'The OT visits your home to evaluate your safety and specific needs.',
      'Submit the formal application to the council with our professional installation quotes.',
      'Wait for council approval (usually within 6 months).',
      'Our local team undertakes the work, and the council typically pays directly upon completion.'
    ],
    frequentlyAsked: [
      {
        q: 'How much money can I get under a Disabled Facilities Grant?',
        a: 'The maximum grant limit is £30,000 in England. This can often cover the full cost of a wet room or stairlift installation.'
      },
      {
        q: 'Will receiving a DFG affect my other benefits?',
        a: 'No. The DFG is an independent grant and does not affect your state pension, Personal Independence Payment (PIP), or Attendance Allowance.'
      }
    ]
  }
];

export const generalFaqData = [
  {
    q: 'What is a level access shower?',
    a: 'A level access shower is a shower where the tray is fitted flush with the floor, meaning there is no step to climb over. This makes it much safer for anyone with mobility issues and allows for wheelchair or walker access.'
  },
  {
    q: 'How long does a stairlift installation take?',
    a: 'For a standard straight staircase, a stairlift can usually be installed in just 2 to 4 hours. Curved stairlifts are custom-made and may take a little longer to install, but our goal is always to minimize disruption in your home.'
  },
  {
    q: 'Do you offer free quotes?',
    a: 'Yes, we provide free, no-obligation home assessments and quotes across the Merseyside area. A local specialist will visit your home, discuss your needs, and provide a clear, practical recommendation.'
  },
  {
    q: 'Can I get help if I’m not sure what adaptation I need?',
    a: 'Absolutely. We offer friendly, professional advice to help you decide. We can also help you arrange an Occupational Therapist (OT) assessment through your local council to ensure the adaptation is perfectly matched to your clinical needs.'
  },
  {
    q: 'Do you work with private homes and landlords?',
    a: 'Yes, we work with private homeowners, tenants, and landlords. Whether you own your home or are renting, we can help you navigate the process and even assist with council grant applications.'
  }
];
