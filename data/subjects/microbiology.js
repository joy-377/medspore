// MedSpore Microbiology: 10 independently authored sample MCQs; pending expert medical review.
export default [
  {
    "id": "MIC-Q-000001",
    "legacyId": 6901,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Bacteriology",
    "chapter": "Diphtheria toxin regulation",
    "level": "Moderate",
    "prompt": "A laboratory isolates Corynebacterium diphtheriae from a patient with a gray pharyngeal pseudomembrane. The isolate produces markedly more toxin when cultured in iron-depleted medium. Which mechanism best explains this observation?",
    "options": [
      "Iron directly activates the toxin promoter",
      "Low iron reduces DtxR-mediated repression of the tox gene",
      "Toxin synthesis requires an iron-containing ribosome",
      "Iron deprivation converts the organism to a Gram-negative phenotype"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Low iron relieves DtxR repression, allowing expression of the phage-encoded diphtheria tox gene.",
      "details": [
        "The tox gene is carried by a lysogenic corynephage in toxigenic strains.",
        "Iron-bound DtxR acts as a transcriptional repressor; reduced available iron decreases repression.",
        "Diphtheria toxin inhibits eukaryotic protein synthesis by ADP-ribosylating elongation factor 2."
      ],
      "ruleOut": [
        "Option A (Iron directly activates the toxin promoter): Iron-bound DtxR represses rather than activates tox transcription.",
        "Option C (Toxin synthesis requires an iron-containing ribosome): Toxin production does not depend on an iron-containing ribosome.",
        "Option D (Iron deprivation converts the organism to a Gram-negative phenotype): Iron levels do not alter the organism’s Gram classification."
      ],
      "media": null
    },
    "tags": [
      "Bacteriology",
      "Diphtheria toxin regulation"
    ],
    "reviewStatus": "sample-pending-medical-review"
  },
  {
    "id": "MIC-Q-000002",
    "legacyId": 6902,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "General Microbiology",
    "chapter": "Bacterial cell envelopes",
    "level": "Easy",
    "prompt": "A teaching diagram compares two bacterial cell envelopes. Structure X shows a thick peptidoglycan layer without an outer membrane; structure Y shows a thin peptidoglycan layer between inner and outer membranes. Which statement is correct?",
    "options": [
      "X is Gram-negative and contains lipopolysaccharide",
      "Y is Gram-positive and contains teichoic acids",
      "Y has an outer membrane containing lipopolysaccharide",
      "Both envelopes lack peptidoglycan"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": {
      "kind": "image",
      "src": "/assets/microbiology/cell-envelopes.svg",
      "alt": "Comparison of Gram-positive and Gram-negative bacterial cell envelopes",
      "caption": "Original vector teaching diagram · Not to scale"
    },
    "explanation": {
      "quick": "A Gram-negative envelope has a thin peptidoglycan layer and an LPS-containing outer membrane.",
      "details": [
        "Gram-positive bacteria typically have a thick peptidoglycan wall without an outer membrane.",
        "Gram-negative bacteria have inner and outer membranes separated by a periplasmic space containing thin peptidoglycan.",
        "Lipid A within LPS is responsible for most endotoxin activity."
      ],
      "ruleOut": [
        "Option A (X is Gram-negative and contains lipopolysaccharide): X represents the Gram-positive pattern.",
        "Option B (Y is Gram-positive and contains teichoic acids): Y represents the Gram-negative pattern.",
        "Option D (Both envelopes lack peptidoglycan): Both types generally possess peptidoglycan."
      ],
      "media": null
    },
    "tags": [
      "General Microbiology",
      "Bacterial cell envelopes"
    ],
    "reviewStatus": "sample-pending-medical-review"
  },
  {
    "id": "MIC-Q-000003",
    "legacyId": 6903,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Immunology",
    "chapter": "Complement deficiencies",
    "level": "Moderate",
    "prompt": "A 16-year-old has experienced three episodes of meningococcal meningitis. Immunoglobulin levels are normal, and neutrophil oxidative burst testing is normal. Which immune defect most strongly predisposes to this pattern?",
    "options": [
      "C5–C9 terminal complement deficiency",
      "Selective IgA deficiency",
      "Myeloperoxidase deficiency",
      "Deficiency of C1 esterase inhibitor"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Terminal complement (C5–C9) deficiency predisposes to recurrent Neisseria infections.",
      "details": [
        "The membrane attack complex is formed by C5b through C9.",
        "Neisseria species are particularly vulnerable to complement-mediated membrane damage.",
        "Recurrent invasive meningococcal disease should prompt evaluation of terminal complement function."
      ],
      "ruleOut": [
        "Option B (Selective IgA deficiency): IgA deficiency more often causes mucosal infections.",
        "Option C (Myeloperoxidase deficiency): Myeloperoxidase deficiency does not characteristically cause recurrent meningococcal meningitis.",
        "Option D (Deficiency of C1 esterase inhibitor): C1 inhibitor deficiency causes hereditary angioedema, not this infection pattern."
      ],
      "media": {
        "kind": "image",
        "src": "/assets/microbiology/complement-mac.svg",
        "alt": "Schematic assembly of the terminal complement membrane attack complex",
        "caption": "Original vector teaching diagram · Simplified mechanism"
      }
    },
    "tags": [
      "Immunology",
      "Complement deficiencies"
    ],
    "reviewStatus": "sample-pending-medical-review"
  },
  {
    "id": "MIC-Q-000004",
    "legacyId": 6904,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Virology",
    "chapter": "Hepatitis B serology",
    "level": "Moderate",
    "prompt": "A healthcare worker has HBsAg negative, anti-HBs positive, and total anti-HBc negative results. Which interpretation is most appropriate?",
    "options": [
      "Resolved natural hepatitis B infection",
      "Immunity following hepatitis B vaccination",
      "Acute hepatitis B during the window period",
      "Chronic hepatitis B infection"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Isolated anti-HBs positivity with negative anti-HBc indicates vaccine-induced immunity.",
      "details": [
        "Hepatitis B vaccines contain surface antigen and do not induce anti-core antibodies.",
        "Natural infection usually produces anti-HBc that remains detectable long-term.",
        "HBsAg negativity and anti-HBs positivity together support immunity rather than active infection."
      ],
      "ruleOut": [
        "Option A (Resolved natural hepatitis B infection): Resolved natural infection typically has anti-HBc positivity.",
        "Option C (Acute hepatitis B during the window period): The window period is commonly associated with anti-HBc IgM rather than isolated anti-HBs.",
        "Option D (Chronic hepatitis B infection): Chronic infection generally has persistent HBsAg positivity."
      ],
      "media": null
    },
    "tags": [
      "Virology",
      "Hepatitis B serology"
    ],
    "reviewStatus": "sample-pending-medical-review"
  },
  {
    "id": "MIC-Q-000005",
    "legacyId": 6905,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Mycology",
    "chapter": "Dimorphic fungi",
    "level": "Moderate",
    "prompt": "A patient develops pulmonary infection after exploring a cave heavily contaminated with bat droppings. Tissue examination shows small intracellular budding yeasts within macrophages. Which organism is most likely?",
    "options": [
      "Blastomyces dermatitidis",
      "Cryptococcus neoformans",
      "Histoplasma capsulatum",
      "Coccidioides species"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Histoplasma commonly appears as small intracellular yeasts in macrophages.",
      "details": [
        "Exposure to soil enriched with bird or bat droppings is a classic epidemiologic clue.",
        "Histoplasma is a thermally dimorphic fungus: mold in the environment and yeast in tissue.",
        "Small intracellular budding yeasts can be demonstrated in infected macrophages."
      ],
      "ruleOut": [
        "Option A (Blastomyces dermatitidis): Blastomyces classically shows broad-based budding yeasts.",
        "Option B (Cryptococcus neoformans): Cryptococcus is usually encapsulated and not classically identified as tiny intracellular yeasts.",
        "Option D (Coccidioides species): Coccidioides forms spherules containing endospores in tissue."
      ],
      "media": null
    },
    "tags": [
      "Mycology",
      "Dimorphic fungi"
    ],
    "reviewStatus": "sample-pending-medical-review"
  },
  {
    "id": "MIC-Q-000006",
    "legacyId": 6906,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Parasitology",
    "chapter": "Malaria life cycle",
    "level": "Easy",
    "prompt": "During malaria transmission, an infected female Anopheles mosquito injects the parasite stage that first invades human hepatocytes. Which stage is injected?",
    "options": [
      "Merozoite",
      "Sporozoite",
      "Gametocyte",
      "Ookinete"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "The mosquito injects sporozoites, which initiate the hepatic stage of malaria.",
      "details": [
        "Sporozoites migrate from the bite site to the liver and invade hepatocytes.",
        "Hepatic schizogony produces merozoites that subsequently infect red blood cells.",
        "Gametocytes are taken up by mosquitoes during a blood meal."
      ],
      "ruleOut": [
        "Option A (Merozoite): Merozoites are released after schizogony and invade erythrocytes.",
        "Option C (Gametocyte): Gametocytes are sexual blood stages ingested by mosquitoes.",
        "Option D (Ookinete): Ookinetes develop in the mosquito midgut."
      ],
      "media": {
        "kind": "image",
        "src": "/assets/microbiology/malaria-cycle.svg",
        "alt": "Simplified malaria human stages from sporozoite to erythrocytic merozoites",
        "caption": "Original vector teaching diagram · Simplified lifecycle"
      }
    },
    "tags": [
      "Parasitology",
      "Malaria life cycle"
    ],
    "reviewStatus": "sample-pending-medical-review"
  },
  {
    "id": "MIC-Q-000007",
    "legacyId": 6907,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Hospital Infection Control",
    "chapter": "Clostridioides difficile",
    "level": "Moderate",
    "prompt": "A hospitalized patient develops profuse watery diarrhea after broad-spectrum antibiotic treatment. Stool testing supports Clostridioides difficile infection. Which infection-control measure is especially important?",
    "options": [
      "Alcohol hand rub alone reliably removes spores",
      "Contact precautions and soap-and-water handwashing when indicated",
      "Airborne isolation with a negative-pressure room",
      "No environmental disinfection is required after symptoms resolve"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "C. difficile forms spores: contact precautions and appropriate soap-and-water hygiene are key.",
      "details": [
        "C. difficile spores persist in the environment and are not reliably removed by alcohol-based hand rub alone.",
        "Use gloves and gowns according to facility protocols, and clean contaminated surfaces with an effective sporicidal disinfectant.",
        "Soap-and-water handwashing is particularly important in outbreak settings or when hands are visibly soiled."
      ],
      "ruleOut": [
        "Option A (Alcohol hand rub alone reliably removes spores): Alcohol hand rub does not reliably eliminate C. difficile spores.",
        "Option C (Airborne isolation with a negative-pressure room): Airborne precautions are not the routine isolation category for C. difficile.",
        "Option D (No environmental disinfection is required after symptoms resolve): Environmental cleaning is important because spores persist."
      ],
      "media": null
    },
    "tags": [
      "Hospital Infection Control",
      "Clostridioides difficile"
    ],
    "reviewStatus": "sample-pending-medical-review"
  },
  {
    "id": "MIC-Q-000008",
    "legacyId": 6908,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Clinical Microbiology",
    "chapter": "Bacterial meningitis",
    "level": "Hard",
    "prompt": "A 19-year-old college student presents with fever, neck stiffness, and a rapidly spreading petechial rash. Cerebrospinal fluid shows neutrophilic pleocytosis, and Gram stain reveals intracellular Gram-negative diplococci. Which virulence factor is most directly associated with fulminant endotoxin-mediated shock?",
    "options": [
      "IgA protease",
      "Polysaccharide capsule",
      "Lipooligosaccharide",
      "Type IV pili"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Meningococcal lipooligosaccharide drives the intense endotoxin-mediated inflammatory response.",
      "details": [
        "Neisseria meningitidis has an outer-membrane lipooligosaccharide (LOS) that can trigger profound cytokine release.",
        "LOS-mediated systemic inflammation contributes to vascular injury, shock, and disseminated intravascular coagulation.",
        "The capsule is important for resistance to phagocytosis but is not the principal endotoxin."
      ],
      "ruleOut": [
        "Option A (IgA protease): IgA protease facilitates mucosal colonization.",
        "Option B (Polysaccharide capsule): Capsule protects against host defenses but is not the endotoxin.",
        "Option D (Type IV pili): Pili mediate adherence and colonization rather than directly causing endotoxin shock."
      ],
      "media": null
    },
    "tags": [
      "Clinical Microbiology",
      "Bacterial meningitis"
    ],
    "reviewStatus": "sample-pending-medical-review"
  },
  {
    "id": "MIC-Q-000009",
    "legacyId": 6909,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Virology",
    "chapter": "HIV diagnostics",
    "level": "Moderate",
    "prompt": "A patient has a reactive fourth-generation HIV antigen/antibody screening assay, but the HIV-1/HIV-2 antibody differentiation assay is negative. What is the most appropriate next diagnostic test?",
    "options": [
      "Repeat antibody differentiation in one year without other testing",
      "HIV-1 nucleic acid test",
      "CD4 count alone",
      "Western blot as the only confirmatory test"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "After a reactive fourth-generation screen and negative differentiation assay, perform an HIV-1 NAT.",
      "details": [
        "Fourth-generation assays detect HIV-1 p24 antigen as well as HIV-1/2 antibodies.",
        "A negative differentiation assay after a reactive screen may indicate acute HIV-1 infection or a false-positive screen.",
        "An HIV-1 nucleic acid test helps distinguish these possibilities under the laboratory algorithm."
      ],
      "ruleOut": [
        "Option A (Repeat antibody differentiation in one year without other testing): Deferring evaluation could miss acute infection.",
        "Option C (CD4 count alone): CD4 count does not establish HIV diagnosis.",
        "Option D (Western blot as the only confirmatory test): Western blot is not the recommended next step in the modern laboratory algorithm."
      ],
      "media": null
    },
    "tags": [
      "Virology",
      "HIV diagnostics"
    ],
    "reviewStatus": "sample-pending-medical-review"
  },
  {
    "id": "MIC-Q-000010",
    "legacyId": 6910,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Bacteriology",
    "chapter": "Tuberculosis drug resistance",
    "level": "Hard",
    "prompt": "A sputum molecular assay detects Mycobacterium tuberculosis complex and a mutation in the rpoB gene associated with rifampicin resistance. Which bacterial target is altered?",
    "options": [
      "DNA gyrase subunit A",
      "Beta subunit of DNA-dependent RNA polymerase",
      "Arabinogalactan synthesis enzyme EmbB",
      "ATP synthase c subunit"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Rifampicin targets the beta subunit of bacterial DNA-dependent RNA polymerase encoded by rpoB.",
      "details": [
        "Rifampicin blocks transcription by binding bacterial RNA polymerase.",
        "Mutations in the rpoB rifampicin-resistance-determining region can reduce drug binding.",
        "Molecular rifampicin resistance warrants prompt evaluation for additional resistance and specialist-directed treatment."
      ],
      "ruleOut": [
        "Option A (DNA gyrase subunit A): DNA gyrase is targeted by fluoroquinolones.",
        "Option C (Arabinogalactan synthesis enzyme EmbB): EmbB is associated with ethambutol resistance.",
        "Option D (ATP synthase c subunit): ATP synthase is targeted by bedaquiline."
      ],
      "media": null
    },
    "tags": [
      "Bacteriology",
      "Tuberculosis drug resistance"
    ],
    "reviewStatus": "sample-pending-medical-review"
  }
];
