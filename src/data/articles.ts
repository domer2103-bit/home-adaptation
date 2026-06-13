export interface Article {
  id: string;
  title: string;
  category: 'Costs' | 'Funding' | 'Bathroom' | 'Mobility' | 'Dementia & Stroke' | 'Assessments';
  readTime: string;
  shortDesc: string;
  keyTakeaway: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  faq?: { q: string; a: string }[];
  relatedServiceId?: string;
}

export const articlesData: Article[] = [
  {
    id: "wet-room-cost-uk",
    title: "How much does a wet room cost in the UK?",
    category: "Costs",
    readTime: "6 min read",
    shortDesc: "A complete analysis of UK wet room pricing including basic, mid-range and luxury levels, structural floor preparation, waterproofing tanking requirements, and unexpected pipework renovation hidden costs.",
    keyTakeaway: "A standard domestic wet room in the UK typically costs between £4,500 and £9,000, heavily influenced by floor strengthening, tanking quality, and drainage setups.",
    relatedServiceId: "wet-rooms",
    sections: [
      {
        heading: "Typical Cost Breakdown (Average 2026 UK Pricing)",
        paragraphs: [
          "A wet room requires completely sealing the bathroom floors and walls with water-impermeable layers (known as tanking), altering the door thresholds, and placing specialized sloping trays. For standard UK terrace or semi-detached homes, expect these base ranges:",
          "• Budget / Basic conversion: £4,000 - £5,500 (standard non-slip vinyl sheet flooring, basic vanity, plastic wall cladding panels instead of ceramic tiling).",
          "• Premium domestic wet room: £6,000 - £9,500 (fully tiled walls and floor, underfloor heating, premium thermostatic mixer shower, glass deflector screen, hidden drainage trap).",
          "• Large scale layout with structural extensions: £10,000+ (requires expanding space, timber joist reinforcement, high-capacity dual pumps for heavy water flow)."
        ]
      },
      {
        heading: "Crucial Elements That Drive Up Wet Room Installation Costs",
        paragraphs: [
          "Understanding the specialized labour involved prevents surprise bills. The top three cost drivers are:",
          "1. Floor Tanking & Sloping: The entire room becomes your shower enclosure. Hand-cut plywood gradients or pre-manufactured wet-room trays must be installed to funnel water directly into the drain.",
          "2. Drainage and Waste Pumps: If your bathroom floor is on joists (first floor), gravity flow might be insufficient, making a low-profile trapped waste pump necessary to drag water away quickly.",
          "3. Anti-Slip Ceramic Tile Selection: Non-slip mosaic or textured ceramic tile is essential, costing significantly more to line up, grout, and seal compared to standard bathroom sheets."
        ],
        bullets: [
          "Timber joist leveling & reinforcement: typically adds £500 - £1,200",
          "Underfloor heating installation: essential for drying standing damp quickly, costs £400 - £800",
          "Plumbing pipe rerouting: averages £600 - £1,500 depending on waste exit positioning"
        ]
      },
      {
        heading: "Are You Eligible for 0% VAT or Council Funding Relief?",
        paragraphs: [
          "If the wet room is installed strictly to help a disabled, elderly, or chronically ill resident, you may qualify for UK VAT relief (saving 20% on both materials and labour). Additionally, Disabled Facilities Grants can fund up to 100% of the cost if Approved by your local Occupational Therapist."
        ]
      }
    ],
    faq: [
      { q: "Is a wet room more expensive than a traditional walk-in shower?", a: "Yes, generally by 20% to 40% due to the requirement to completely tank (waterproof) the walls and subflooring." },
      { q: "How long does a wet room conversion take to install?", a: "A standard wet room takes 5 to 9 working days to allow multi-layer tanking membranes to cure fully." }
    ]
  },
  {
    id: "disabled-facilities-grant-workings",
    title: "What is a Disabled Facilities Grant and how does it work?",
    category: "Funding",
    readTime: "8 min read",
    shortDesc: "A complete step-by-step roadmap to the UK DFG scheme. Learn who is eligible for means-tested financial support, what architectural changes are eligible, and how to start your official council application.",
    keyTakeaway: "The Disabled Facilities Grant (DFG) is a local council grant up to £30,000 in England to support structural changes making a home accessible for an occupant with clinical mobility impairments.",
    sections: [
      {
        heading: "What Exactly is a Disabled Facilities Grant (DFG)?",
        paragraphs: [
          "The DFG is a government mandate helping people adapt their properties to stay in their homes safely. It covers everything from stairlifts and exterior concrete ramps to wheelchair-accessible wet rooms and widened doorways. It is administered directly by your local authority's Housing or Environmental Health department."
        ]
      },
      {
        heading: "Who Qualifies and How the Means Test Works",
        paragraphs: [
          "To qualify, you or someone living in your home must be disabled, and you must intend to live in the property for the grant period (usually at least 5 years).",
          "The grant is means-tested for adults, meaning the council assesses your household income, savings over £6,000, and pensions. If your income falls below a set threshold, the work can be funded up to 100%.",
          "CRITICAL EXEMPTION: Grants for disabled children and young people under the age of 19 are completely exempt from means-testing. If your child requires stair assistance or a wet room, the council covers costs regardless of household income."
        ],
        bullets: [
          "Maximum Grant Cap in England: £30,000",
          "Maximum Grant Cap in Wales: £36,000",
          "Maximum Grant Cap in Northern Ireland: £25,000"
        ]
      },
      {
        heading: "The Standard 5-Step DFG Application Journey",
        paragraphs: [
          "1. Occupational Therapist Assessment: An OT must visit to document that your proposed modifications are 'necessary and appropriate' to meet your clinical needs.",
          "2. Technical Survey: An architect or building surveyor determines if the house layout makes the changes 'safe and reasonably practicable'.",
          "3. Cost Quotes: You must procure qualified builder quotes matching standard council bidding formats.",
          "4. Form Submission: The formal application is sent to the local council (who must deliver an official decision within 6 months by law).",
          "5. Supervised Installation: Builders carry out the work, and funds are paid directly to the contractor once the council inspects and signs off."
        ]
      }
    ],
    faq: [
      { q: "Can I apply for a DFG if I am a tenant in a private rented home?", a: "Yes. Both private tenants and housing association residents can apply, with written permission from the property landlord." },
      { q: "Can I start building before my DFG is approved?", a: "No. The council will not pay for any work completed before an official written grant offer is made." }
    ]
  },
  {
    id: "bathroom-safety-elderly",
    title: "How to make a bathroom safer for elderly people",
    category: "Bathroom",
    readTime: "5 min read",
    shortDesc: "Bathrooms represent the highest slip-and-fall hazard rate for elderly citizens. Discover crucial adjustments to reduce danger, including step-height reduction, high-contrast visual cues, and ergonomic support accessories.",
    keyTakeaway: "Preventing falls in the bathroom requires eliminating step-over shower lips, adding anchored grab bars block-mounted into timber studs, and replacing highly reflective tiles that can cause depth misjudgments.",
    relatedServiceId: "bathroom-adaptations",
    sections: [
      {
        heading: "Eliminating the Deadliest Bathroom Trip Hazard",
        paragraphs: [
          "Standard UK bathtubs require climbing over a rim that is 50cm to 60cm high. As lifting height range and physical stability diminish with age, this single motion leads to severe slip risks. Replacing a porcelain tub with a flush-to-floor wet room or a walk-in shower with an ultra-low threshold (less than 25mm) removes this primary barrier.",
          "If removing the bath isn't possible, a bath lift seat or specialized transfer board should be clamped on to enable seated transfers."
        ]
      },
      {
        heading: "Securing Solid Grab Rails: Suction Cups vs. Wall Anchoring",
        paragraphs: [
          "Many families use clip-on suction grab rails. However, engineers and occupational therapists warn these are prone to losing seal pressure under sudden bodyweight loads. True safety grab rails must be screw-anchored directly into solid masonry walls or timber studs with backer plates.",
          "Place a vertical bar at the shower entry gate, a horizontal rail along the shower wall, and an angled support next to the toilet seat."
        ],
        bullets: [
          "Always buy grab rails with a textured, ribbed, or high-grip surface.",
          "Choose high-contrast colours (chrome on dark tile, or blue/red on light tile) to assist those with visual impairment.",
          "Never rely on a towel rail for physical support – they are not designed to support human bodyweight."
        ]
      },
      {
        heading: "Lighting and Anti-Slip Slip Resistive Solutions",
        paragraphs: [
          "Poor lighting causes disorientation during nighttime bathroom visits. Install automated motion-sensor lights that illuminate a clear path, and coat tile floors with certified anti-slip slip resistive solutions that achieve a secure DIN 51130 R11 slip rating."
        ]
      }
    ],
    faq: [
      { q: "What is the best alternative to a full bathroom remodel for elderly safety?", a: "Installing premium wall-anchored grab rails, placing a modular shower chair, and applying adhesive anti-slip treads to standard bath porcelain is a fantastic low-cost remedy." }
    ]
  },
  {
    id: "stairlift-vs-through-floor-lift",
    title: "Stairlift or through-floor lift: which is better?",
    category: "Mobility",
    readTime: "7 min read",
    shortDesc: "An honest comparison between stairlifts and vertical through-floor homelifts on space footprints, heavy timber structural alterations, wheelchair accessibility, and price variances across the UK.",
    keyTakeaway: "Stairlifts are ideal for ambulatory users with narrow staircases and budgets under £6,000, while through-floor lifts are the premier choice for permanent power-wheelchair users with larger budgets.",
    relatedServiceId: "through-floor-lifts",
    sections: [
      {
        heading: "Stairlifts: Features, Cost, and Boundaries",
        paragraphs: [
          "A stairlift features a track attached directly to your stair treads (never your walls) carrying a motorized seat. It is a highly reliable, non-intrusive solution for residents who can transfer out of a wheelchair independently.",
          "• Costs: Straight stairlifts cost £1,800 to £3,500. Curved stairs requiring custom copper or steel rails range from £4,500 to £8,500.",
          "• Key Drawback: High-dependency wheelchair users must lift themselves from chairs up into the seat, and have another wheelchair positioned at the landing above."
        ]
      },
      {
        heading: "Through-Floor Lifts: Fully Wheelchair Accessible",
        paragraphs: [
          "A through-floor lift (homelift) is a small vertical pod that travels through an aperture cut into your ceiling, carrying a user (often inside a heavy wheelchair) directly between floors.",
          "• Costs: Standard installations cost £12,000 to £22,000 depending on structural floor joist bracing requirements.",
          "• Top Advantages: Seamless transport of heavy electric wheelchairs, entirely preserves staircase clearance for other residents, and typically adds significant long-term real estate value to adapted UK houses."
        ],
        bullets: [
          "Through-floor construction requires building control signoff: standard stairlifts do not.",
          "Through-floor lifts operate on silent hydraulic pumps or chain drives inside compact self-supporting channels.",
          "Typical through-floor lift footprint: roughly 1 to 1.5 square metres of room area."
        ]
      }
    ]
  },
  {
    id: "planning-permission-home-ramp",
    title: "Do I need planning permission for a home ramp?",
    category: "Mobility",
    readTime: "4 min read",
    shortDesc: "Understand UK building regulations, Permitted Development rights for concrete or modular steel ramps, and boundary constraints when designing front door level access.",
    keyTakeaway: "In most UK residential properties, rear and front door access ramps fall under Permitted Development and do not require formal planning permission as long as they meet height boundaries.",
    relatedServiceId: "ramps",
    sections: [
      {
        heading: "What Are Permitted Development (PD) Rights for Ramps?",
        paragraphs: [
          "In the vast majority of cases, installing an accessibility ramp at home can be done without contacting your council planner. It is classified as an essential home adaptation. However, to maintain your Permitted Development rights, you must adhere to these physical limits:",
          "• The ramp must be constructed solely for a disabled occupant.",
          "• The height of the ramp deck cannot exceed 300mm above ground level if it contains a large raised platform.",
          "• It cannot cross or restrict public highways, shared pavements, or neighbouring boundary walls."
        ]
      },
      {
        heading: "When You MUST Seek Formal Planning Permission",
        paragraphs: [
          "Certain situations override standard Permitted Development rights. You must consult your local planning office if:",
          "1. Listed Buildings: The property is protected, or sits inside a designated Conservation Area or Area of Outstanding Natural Beauty (AONB).",
          "2. Encroaching Public Property: Part of your ramp structure needs to temporarily extend onto town-council pavement or a shared access road.",
          "3. High Raised Decking: The ramp requires a giant modular platform or landing area higher than 300mm from native grade."
        ],
        bullets: [
          "Always choose modular modular steel ramps if unsure – they are temporary structures and rarely draw planning attention.",
          "UK Building Regulations Part M recommends a slope gradient of 1:15 or 1:20 for self-propelled wheelchairs.",
          "Concrete ramps are permanent and must contain clean rainwater runoffs."
        ]
      }
    ]
  },
  {
    id: "wheelchair-access-adaptations",
    title: "What adaptations help with wheelchair access at home?",
    category: "Mobility",
    readTime: "7 min read",
    shortDesc: "An anatomical audit of home layouts designed for wheelchair users. Expert adjustments for turning radii, doorway clearances, switch and socket heights, and kitchen counter lowering.",
    keyTakeaway: "Successful wheelchair home design relies on clear 1,500mm turnaround areas, minimum 800mm door openings, and transitioning from carpets to hard timber floors.",
    relatedServiceId: "door-widening",
    sections: [
      {
        heading: "Widening Doorways and Smooth Thresholds",
        paragraphs: [
          "Standard UK interior doors are often 686mm or 762mm wide, which is too narrow for standard wheelchair frames to pass through safely without knocking knuckles or scraping paint. Widening the frames to standard wheelchair clear pass widths (minimum 800mm clear opening) is the first critical step.",
          "Furthermore, standard plastic or wooden door thresholds stick up by 20mm to 35mm. Replacing these with flush, low-profile bevelled thresholds eliminates tire snagging and tipping risks."
        ]
      },
      {
        heading: "The Essential 1.5-Metre Turning Circle RULE",
        paragraphs: [
          "A major source of frustration for wheelchair occupants is getting locked into narrow hallways and bedrooms where they cannot turn around. Accessible interior design allocates a clear circular floor zone of 1500mm x 1500mm.",
          "This turning space is especially critical in washrooms and adjacent to kitchen cooker stations, allowing the occupant to pivot 360 degrees effortlessly."
        ],
        bullets: [
          "Transition flooring from deep-pile carpet to heavy-duty non-slip LVT or wood laminate.",
          "Install pocket doorways that slide into walls, freeing up swinging space in tight corridors.",
          "Lower high kitchen counters to 800mm - 850mm with open underside knee space."
        ]
      },
      {
        heading: "Repositioning Electrical Switches and Controls",
        paragraphs: [
          "Under UK Building Regulations (Part M), light switches, wall thermostat modules, and mains fuse boxes should be repositioned to an accessible height between 450mm and 1200mm above floor level, within a comfortable seated reaching range."
        ]
      }
    ]
  },
  {
    id: "home-adaptation-after-stroke",
    title: "How to adapt a house after a stroke",
    category: "Dementia & Stroke",
    readTime: "6 min read",
    shortDesc: "A compassionate, practical guide to altering home environments quickly following a stroke. Addressing hemiplegic balance, single-handed living adjustments, and safe bedside setups.",
    keyTakeaway: "Home modification following a stroke must focus on single-sided mobility support, fall prevention on the weak side, and cognitive simplification strategies.",
    sections: [
      {
        heading: "First Steps: Transitioning Back from the Hospital Ward",
        paragraphs: [
          "When a stroke patient returns home, they frequently face physical hemi-paresis (weakness or paralysis down one side of the body). It is vital to determine their dominant side and construct a supportive home environment around it immediately.",
          "Begin with securing bedside paths and main pathways. Clear away all loose rugs, furniture corners, and trailing cables that could cause balance loss."
        ]
      },
      {
        heading: "Adapting the Bedroom and Living Spaces",
        paragraphs: [
          "Hemiplegic patients struggle to stand from soft, low seats. Raise the bed height with leg raisers or select a firm mattress to simplify pivoting. Ensure that light controllers and emergency call cords are positioned on the user's strong (unaffected) hand side."
        ],
        bullets: [
          "Install double banister handrails on stairways so they can grip with their strong hand going both up and down.",
          "Use single-lever mixer taps in the kitchen and bath to allow one-handed temperature adjustments and prevent scalding.",
          "Introduce sensory indicators and textured adhesive strips to signify steps and doorways."
        ]
      },
      {
        heading: "Bathroom Modifications and Secure Seating",
        paragraphs: [
          "Balance is compromised heavily after a stroke. Standard standing showers are dangerous. A walk-in level shower fitted with a padded wall-mounted fold-down chair and supporting backrests is often the safest configuration."
        ]
      }
    ]
  },
  {
    id: "arthritis-joint-pain-adaptations",
    title: "Best home adaptations for arthritis and joint pain",
    category: "Bathroom",
    readTime: "5 min read",
    shortDesc: "Arthritis makes simple tasks like opening doors or gripping taps painful. Learn about ergonomic leverage designs, walk-in bath alternatives, and thermostatic security systems.",
    keyTakeaway: "Managing severe arthritis at home is about reducing grip, twist, and bend forces. Swapping knob taps for levers and low heights for raised seats dramatically reduces daily joint inflammation.",
    relatedServiceId: "bathroom-adaptations",
    sections: [
      {
        heading: "Reducing Joint Loading in Practical Tasks",
        paragraphs: [
          "Osteo-arthritis and rheumatoid arthritis make finger grip and wrist torsion extremely painful. A brilliant, highly effective adjustment is swapping all standard spherical door handles for ergonomic horizontal lever handles.",
          "Similarly, replace screw-style crosshead taps with smooth-glide quarter-turn ceramic lever taps, which can be easily depressed with your forearm or palm."
        ]
      },
      {
        heading: "Easy Bathing: Walk-in Baths vs. Walk-in Showers",
        paragraphs: [
          "Stepping over high tub frames puts high shear stresses on arthritic hips and knees. A walk-in bath with an integrated watertight side chamber door allows you to walk straight into the tub and sit down on an elevated internal seat before filling it.",
          "However, if pain is severe, a step-free walk-in shower or wet room is often much faster to navigate, removing the need to wait for a bath to drain before stepping out."
        ],
        bullets: [
          "Install a raised comfort-height toilet bowl (460mm to 480mm high) to reduce knee pressure.",
          "Place pull-out basket shelving inside lower cabinets to prevent painful deep bending.",
          "Use underfloor heating in bathrooms to provide therapeutic ambient warmth to joints."
        ]
      }
    ]
  },
  {
    id: "occupational-therapist-home-assessment",
    title: "What does an occupational therapist look for in a home assessment?",
    category: "Assessments",
    readTime: "6 min read",
    shortDesc: "Understanding the role of occupational therapy. What happens during a home visit, how OTs run functional physical screens, and how their findings unlock council grant funding.",
    keyTakeaway: "An Occupational Therapist (OT) evaluates the dynamic interaction between your active physical capabilities and your built environment to make safe adaptation path recommendations.",
    sections: [
      {
        heading: "What is the Main Target of an OT Visit?",
        paragraphs: [
          "The OT doesn't just inspect the building blocks of your home; they assess how you physically interact with it. They will ask you to perform simple daily actions (such as sitting on the toilet, climbing the bottom step, reaching into cupboards) to identify potential safety hazards."
        ]
      },
      {
        heading: "The Checklist OTs Work Through",
        paragraphs: [
          "During the 1 to 2-hour home assessment, the occupational therapist will evaluate several main core domains:",
          "• Structural Enclosures: Checking doorway widths, flooring stability, loose stair treads, and slip zones.",
          "• Lighting & Safety: Reviewing light levels during night paths to toilets, step edges, and blind spots.",
          "• Sitting/Rising heights: Measuring toilet, bed, and sofa heights relative to your knee-to-floor ratio.",
          "• Moving & Climbing: Testing dynamic grip strength, balance, and handrail accessibility."
        ],
        bullets: [
          "Ensure you show the OT your typical, everyday mobility level — do not exert yourself beyond safe limits to look stronger.",
          "The OT report is the legal backbone for Disabled Facilities Grants (DFG) applications.",
          "You can request an OT through your local GP, or directly submit a request through county Social Services."
        ]
      }
    ]
  },
  {
    id: "narrow-bathroom-accessible",
    title: "How to make a narrow UK bathroom accessible",
    category: "Bathroom",
    readTime: "6 min read",
    shortDesc: "UK terraced houses often feature narrow, galley-style bathrooms. Learn clever design methods to maximize space, handle wet room layouts, and add space-saving helpers.",
    keyTakeaway: "A narrow UK bathroom is best configured into a single-direction wet room, removing old swing screens and bulky porcelain to create a continuous open floor layout.",
    relatedServiceId: "level-access-showers",
    sections: [
      {
        heading: "The Challenge of Galley Layouts",
        paragraphs: [
          "Many Victorian-era UK terraces feature bathrooms barely 150cm to 170cm wide. Traditional swinging shower doors and deep projecting basins completely block wheelchair access or turn space. The solution lies in creating an open-plan wet room."
        ]
      },
      {
        heading: "Space-Saving Accessories for Small Layouts",
        paragraphs: [
          "1. Wall-Hung Toilets & Basins: Mounting sanitary-ware directly to structural wall frames frees up premium floor space below, enabling wheelchair footplates to glide underneath.",
          "2. In-Wall Cavity Sliding Doors: Standard doors swing inward, consuming over a square metre of functional layouts. Re-modelling with a pocket door sliding into the wall frame completely resolves this.",
          "3. Concealed Wet Room Trays: By placing a sub-floor sloping tray running the full width of the far end of the room, you turn the entire narrow layout into a cohesive, barrier-free zone."
        ],
        bullets: [
          "Minimum narrow width threshold: 1400mm can still accommodate a clean linear toilet-to-wetroom flow.",
          "Use outwards-swinging doors if a pocket door isn't structurally possible.",
          "Choose bifold glass partitions that fold flat against the wall when the shower is not in use."
        ]
      }
    ]
  },
  {
    id: "walk-in-shower-vs-wet-room",
    title: "Walk-in shower vs wet room: what’s the difference?",
    category: "Bathroom",
    readTime: "5 min read",
    shortDesc: "While they sound similar, they have vast differences in structural flooring construction, cost, and waterproofing. Compare the differences to choose the right layout.",
    keyTakeaway: "A walk-in shower features a low-profile raised tray (usually 25mm to 40mm) and semi-enclosed glass panels, while a wet room is completely level, open, and fully tanked (waterproofed) floor-to-ceiling.",
    relatedServiceId: "walk-in-showers",
    sections: [
      {
        heading: "Walk-In Shower: The Quick Accessibility Option",
        paragraphs: [
          "A walk-in shower uses a low-profile tray that sits on top of the bathroom floor boards. While not fully flush, stepping over a tiny 25mm tray is much easier and safer than stepping over a standard 500mm bath wall.",
          "It does not require complete floor tiling or joist-leveling, making it significantly less expensive and faster to install (usually 2-3 days)."
        ]
      },
      {
        heading: "Wet Room: True Flush Step-Free Access",
        paragraphs: [
          "A wet room has no raised shower tray. The floor is completely flush and slopes gently toward a linear floor drain. The entire room sub-flooring must be lined with marine-grade tanking adhesive. This allows wheelchairs to roll directly into the spray zone undisturbed.",
          "It offers ultimate future-proof accessibility, though it is more complex to build and demands complete tiling."
        ],
        bullets: [
          "A walk-in shower averages £3,500 - £6,000.",
          "A full wet room averages £4,500 - £9,000.",
          "Wet rooms are better suited for users requiring assistance from a carer in the shower zone."
        ]
      }
    ]
  },
  {
    id: "council-funded-home-adaptations",
    title: "What home adaptations are often funded by the council?",
    category: "Funding",
    readTime: "6 min read",
    shortDesc: "Most local UK authorities must fund or supply home adaptations under £1,000 free of charge to eligible residents. Learn about minor versus major adaptations.",
    keyTakeaway: "Minor adaptations (under £1,000) like grab rails and external steps are funded directly by social services, while major works require a Disabled Facilities Grant.",
    sections: [
      {
        heading: "Minor Adaptations: Fast, Free, and No Means-Testing",
        paragraphs: [
          "Under the Care Act 2014, local councils in England are legally obligated to organize and pay for minor home adaptations if they are assessed as necessary to keep a resident safe. The threshold is any structural change costing under £1,000 in total.",
          "The best part is that minor adaptations are completely free and are never means-tested against your income or savings. Once an OT files the safety request, the council handles everything."
        ]
      },
      {
        heading: "Common Examples of Council-Funded Minor Adaptations",
        paragraphs: [
          "• Outside steel grab rails alongside steep paths.",
          "• Solid timber banister handrails lining both sides of a staircase.",
          "• Modular step-half platforms at the back door threshold.",
          "• Simple safety bath boards or shower seats."
        ]
      },
      {
        heading: "Major Adaptations: Over £1,000",
        paragraphs: [
          "Any work exceeding £1,000 (such as level wet rooms, through-floor lifts, or significant kitchen drops) is classified as a major adaptation. These must be funded via a Disabled Facilities Grant (DFG), which involves a formal financial means assessment."
        ]
      }
    ]
  },
  {
    id: "safer-stairs-no-stairlift",
    title: "How to make stairs safer if you cannot install a stairlift",
    category: "Mobility",
    readTime: "5 min read",
    shortDesc: "If your staircase is too narrow, has historic listed structural limits, or budget constraints prevent buying a stairlift, explore low-cost alternative modifications for safety.",
    keyTakeaway: "Adding continuous dual banisters, improving step illumination, and installing customized shallow deep half-steps can dramatically reduce staircase fall risks without a stairlift.",
    relatedServiceId: "stairlifts",
    sections: [
      {
        heading: "Maximizing Handhold Ergonomics with Dual Banisters",
        paragraphs: [
          "Most UK staircases have a handrail on one side only. This forces users to ascend or descend with their weak hand on the rail during one of the directions. Adding a second matching banister rail on the opposite wall ensures they can always hold on with their strong hand.",
          "The handrail should extend 300mm past the top and bottom steps to provide a steady grip before you begin climbing."
        ]
      },
      {
        heading: "Step Contrast and Slip-Resistant Treads",
        paragraphs: [
          "Many falls on stairs occur due to misjudging where the nose of a step ends, especially on patterned carpets. Install high-contrast colour contrasting nosing strips on each step edge. Replace thick-pile slippery carpets with low-friction, high-traction safety surface runners."
        ],
        bullets: [
          "Ideal handrail diameter for standard grip: 40mm to 45mm.",
          "Install high-intensity LED pathway lighting running along the skirting boards.",
          "Consider stair-climbing walker aids or resting seats on wider half-landings."
        ]
      }
    ]
  },
  {
    id: "common-home-adaptations-older",
    title: "What are the most common home adaptations for older people?",
    category: "Assessments",
    readTime: "6 min read",
    shortDesc: "An overview of mainstream adaptations in the UK that help seniors stay in their own homes, from smart kitchen utilities to bathroom safety setups.",
    keyTakeaway: "The most common adaptations are level-access showers, stairlifts, exterior handrails, and lighting upgrades, which target the primary fall hazards in domestic homes.",
    sections: [
      {
        heading: "Focusing on the High-Hazard Home Zones",
        paragraphs: [
          "As we age, maintaining physical autonomy relies on modifying areas that feature high physical strain: the stairs, the bath, and high entry doorsteps. Simple structural adjustments can eliminate over 80% of preventable domestic falls."
        ]
      },
      {
        heading: "Top 5 Most Popular UK Adaptations",
        paragraphs: [
          "1. Step-Free Showers: Swapping old porcelain tubs for accessible level showers is the top request.",
          "2. Electric Stairlifts: A straight or curved stairlift bypasses the struggle of climbing upstairs to the bedroom.",
          "3. Outdoor Entrance Ramps: Concrete or modular steel ramps bypass steep steps leading to the front door.",
          "4. Leverage Lever Taps: Heavy crosshead faucets are switched for quarter-turn ceramic handles.",
          "5. Widened Door Frames: Allowing wheeled frames to pass freely through bedroom and living spaces."
        ]
      }
    ]
  },
  {
    id: "prepare-mobility-assessment",
    title: "How to prepare your home for a mobility assessment",
    category: "Assessments",
    readTime: "5 min read",
    shortDesc: "A practical guide to preparing for a visit from a local council surveyor or Occupational Therapist. Learn what to highlight, how to document problems, and what questions to ask.",
    keyTakeaway: "Prepare for your mobility assessment by identifying and listing your daily struggles, keeping pathways clear, and collecting medical records beforehand.",
    sections: [
      {
        heading: "Why Preparation Matters for Your Funding Search",
        paragraphs: [
          "A mobility assessment is your golden ticket to securing local council funding. OTs and housing surveyors use their visit to gauge your level of daily care needs. Being organized helps ensure they record all critical structural hazards in their report."
        ]
      },
      {
        heading: "Your 3-Step Preparation Checklist",
        paragraphs: [
          "1. Keep a Living Journal: For 7 days leading up to the visit, write down every trip, near-miss, or painful movement (e.g., 'struggling to stand from the bath on Tuesday').",
          "2. Have a Support Relative Present: It is always helpful to have a carer or caring relative next to you during the screen to help explain issues.",
          "3. Prepare Hospital Letters: Have your diagnostic papers, prescription lists, and official GP letters compiled on the dining table."
        ],
        bullets: [
          "Avoid cleaning or rearranging things to look 'more capable' than you normally are.",
          "Ensure your main hallways are clear from clutter so they can accurately measure turning spaces.",
          "Prepare a list of your most desired changes (like converting your bath to a wet room)."
        ]
      }
    ]
  },
  {
    id: "dementia-home-adaptations",
    title: "Can you get help with home adaptations for dementia?",
    category: "Dementia & Stroke",
    readTime: "6 min read",
    shortDesc: "Dementia demands specialized focus on visual clarity, simplified layouts, and flood/burn prevention upgrades. Learn about grants and helpful design principles.",
    keyTakeaway: "Adaptations for dementia focus on cognitive support: visual contrast, flood prevention, and orientation cues to preserve daily familiarity.",
    sections: [
      {
        heading: "Visual Contrast and Cognitive Grounding",
        paragraphs: [
          "Dementia can affect spatial depth perception. A dark rug on a light floor might be misjudged as a deep hole, causing anxiety or sudden falls. Maintaining flat, consistent, high-contrast flooring is essential.",
          "Similarly, choosing toilet seats and grab rails that contrast sharply with wall tiling (such as deep blue fixtures on a white background) guides residents visually."
        ]
      },
      {
        heading: "Crucial Bathroom and Kitchen Safety Upgrades",
        paragraphs: [
          "Memory loss introduces hazards like accidental bath floods or leaving the cooker gas active. Installing smart overflow-control bath drains and automatic shutoff valves is vital.",
          "Replace vanity doors with clear glass panels so items like combs and toothbrushes remain in plain sight, reducing confusion."
        ],
        bullets: [
          "Install automatic motion-sensor lights to prevent disorientation at night.",
          "Contrast handles clearly against cabinets for easy recognition.",
          "Dementia-led safety adjustments are fully eligible for Disabled Facilities Grants (DFG)."
        ]
      }
    ]
  },
  {
    id: "step-free-front-door-access",
    title: "How to improve step-free access at the front door",
    category: "Mobility",
    readTime: "5 min read",
    shortDesc: "Your front door is the vital line to the outside world. Explore low-profile threshold plates, external step-half risers, and beautiful concrete ramp integrations.",
    keyTakeaway: "Improving entrance access requires eliminating steep steps with high-traction ramps, installing modular half-steps, and widening front frame entries.",
    relatedServiceId: "ramps",
    sections: [
      {
        heading: "The Danger of High Exterior Thresholds",
        paragraphs: [
          "UK doorways typically have steep, weathered steps or frame lips designed to keep rainwater out. For wheelchair and rollator users, these small barriers can prevent independent exit. Adding a compact rubber threshold ramp on both sides provides a smooth rolling surface."
        ]
      },
      {
        heading: "Modular Steel Ramps vs. Concrete Construction",
        paragraphs: [
          "• Modular Steel Ramps: Fast to install, fully adjustable, and can be removed when no longer needed. They feature anti-slip mesh and safety handrails.",
          "• Concrete Ramps: A highly durable, permanent choice that blends seamlessly with garden landscaping. They require professional masonry and drainage pathways."
        ],
        bullets: [
          "Maintain a ramp landing pad of at least 1200mm x 1200mm at the front door to allow wheelchair maneuvering.",
          "Install bright exterior PIR sensor lamps over keyholes and door handle ranges.",
          "Ensure exterior steps use a non-slip porous stone or high-grid paint coating."
        ]
      }
    ]
  },
  {
    id: "grab-rails-installation-guide",
    title: "What are grab rails and where should they be installed?",
    category: "Bathroom",
    readTime: "4 min read",
    shortDesc: "The ultimate locator guide for home grab rails. Discover optimal heights, structural mounting rules, and custom layouts for bathrooms, stairs, and doors.",
    keyTakeaway: "Secure grab rails must be anchored to solid masonry or timber studs. Placing them at key transfer points like toilets and showers provides vital fall prevention.",
    relatedServiceId: "grab-rails",
    sections: [
      {
        heading: "Essential Structural Support Rules",
        paragraphs: [
          "Grab rails must support loads up to 150kg. Standard plasterboard dry-walls are too weak to hold this weight under sudden drops. If a wall lacks masonry, installers must cut opening slots to place solid timber backing plates behind the plasterboard before mounting the rail."
        ]
      },
      {
        heading: "Optimal Grab Rail Placements and Heights",
        paragraphs: [
          "• Next to Toilets: Position an angled rail (at 30 degrees) or a fold-down arm rail roughly 680mm to 720mm above floor level to assist with standing.",
          "• Shower Enclosures: Install a vertical bar on the entry wall (800mm to 1400mm high) and a long horizontal bar (at 1000mm high) in the spray zone.",
          "• Entry Thresholds: Place a weather-resistant steel bar vertically inside the front doorframe to assist with steps."
        ],
        bullets: [
          "Never use towel rails or soap dishes as support – they will break under physical loads.",
          "Plastic fluted grab rails offer superior grip when hands are wet and soapy.",
          "Angle grab rails match natural wrist angles better than flat horizontal ones."
        ]
      }
    ]
  },
  {
    id: "choosing-accessible-bathroom-layout",
    title: "How to choose the right accessible bathroom layout",
    category: "Bathroom",
    readTime: "6 min read",
    shortDesc: "Layout design is crucial for bathroom safety. Learn how to configure toilet transfers, basin heights, and shower placements to optimize movement.",
    keyTakeaway: "A successful accessible bathroom layout prioritizes direct transfer paths, wide clearances, and flexible, height-adjustable fixtures.",
    relatedServiceId: "bathroom-adaptations",
    sections: [
      {
        heading: "The Golden Rules of Accessibility Layouts",
        paragraphs: [
          "Designing an accessible layout involves planning for easy, comfortable movement. Maintain clear, unobstructed paths between the toilet, basin, and shower zones to minimize turning struggles.",
          "Ensure the door swing does not block pathways or access to critical fixtures like grab rails or the shower seat."
        ]
      },
      {
        heading: "Configuring Fixtures for Maximum Usability",
        paragraphs: [
          "• Toilet: Place with a clear transfer space on at least one side (minimum 800mm wide) to enable easy wheelchair-to-seat transfers.",
          "• Basin: Mount a wall-hung basin at 800mm to 850mm high, with a completely clear underside to allow wheelchair users to roll close.",
          "• Shower: Opt for a barrier-free, curbless wet room design positioned in the corner of the room to maximize the central turning area."
        ]
      }
    ]
  },
  {
    id: "mobility-care-checklist-disabled-relative",
    title: "Home adaptation checklist for families caring for a disabled relative",
    category: "Assessments",
    readTime: "8 min read",
    shortDesc: "A master checklist for families caring for a disabled relative. Cohesive modifications across major areas to reduce injury risks and streamline daily support.",
    keyTakeaway: "Caring for a disabled relative is made safer by installing dual banisters, low-profile showers, smart monitors, and emergency call systems.",
    sections: [
      {
        heading: "Securing Common Home Areas",
        paragraphs: [
          "When a relative with a disability moves in, ensuring their daily safety and independence is a top priority. A structured audit helps identify and resolve key hazards across your home."
        ]
      },
      {
        heading: "The 4-Zone Home Adaptation Checklist",
        paragraphs: [
          "1. Entrances & Hallways: Install robust entrance ramps with 1:12 gradients, widen high-frequency doors, and replace thick carpets with sleek LVT.",
          "2. Staircases & Transit: Secure dual continuous banister rails along both walls, add high-contrast nosing to steps, or install an electric stairlift.",
          "3. Kitchens & Cooking: Lower preparation counters to wheelchair heights, swap cabinetry knobs for lever handles, and use smart shutoff kettle bases.",
          "4. Bathrooms & Hygiene: Swap high bathtubs for barrier-free level wet rooms, install wall-hung basins, and anchor secure grab rails next to the toilet."
        ]
      }
    ]
  }
];
