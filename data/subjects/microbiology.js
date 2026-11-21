// MedSpore modular subject question bank. Exactly ten legacy sample MCQs.
export default [
  {
    "id": "MIC-Q-000001",
    "legacyId": 6001,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "General Microbiology",
    "chapter": "Bacterial Cell Wall & Endotoxins",
    "level": "Moderate",
    "prompt": "A 42-year-old male with urosepsis develops profound hypotension (blood pressure 70/40 mmHg), tachypnea, and generalized petechiae. Blood cultures flag positive for Gram-negative bacilli. The patient's refractory septic shock is driven by the release of lipopolysaccharide (LPS) from the outer membrane of the lysing bacteria. Which specific chemical moiety of LPS is primarily responsible for triggering the cytokine storm via Toll-like receptor 4 (TLR4) activation?",
    "options": [
      "O-antigen polysaccharide side chain",
      "Core polysaccharide domain",
      "Lipid A",
      "Braun lipoprotein"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Lipid A represents the toxic, biologically active anchor of the lipopolysaccharide (LPS) molecule embedded in the outer leaflet of Gram-negative bacterial outer membranes.",
      "details": [
        "Lipid A represents the toxic, biologically active anchor of the lipopolysaccharide (LPS) molecule embedded in the outer leaflet of Gram-negative bacterial outer membranes.",
        "During bacterial lysis or division, Lipid A is recognized by LPS-binding protein (LBP) and presented to CD14 and Toll-like receptor 4 (TLR4) on macrophages and dendritic cells.",
        "This interaction triggers high-level NF-κB nuclear translocation, eliciting massive transcriptional release of pro-inflammatory cytokines—predominantly TNF-alpha, Interleukin-1 (IL-1), and Interleukin-6 (IL-6)—leading to nitric oxide-mediated vasodilation, systemic hypotension, microvascular leak, and septic shock."
      ],
      "ruleOut": [
        "Option A (O-antigen polysaccharide side chain): Represents the highly variable outer repeating oligosaccharide chain that determines bacterial serological specificity (e.g., E. coli O157:H7) and provides hydrophilic protection against bile salts and complement insertion, but lacks direct endotoxic shock-inducing capability.",
        "Option B (Core polysaccharide domain): Serves as a relatively conserved oligosaccharide bridge linking Lipid A to the O-antigen, containing unique bacterial sugars like 2-keto-3-deoxyoctonate (KDO) and heptose, but does not mediate endotoxic shock.",
        "Option D (Braun lipoprotein): Is the most abundant structural protein in the Gram-negative cell envelope, covalently anchoring the outer membrane to the underlying peptidoglycan layer, but does not directly stimulate the TLR4 complex to cause septic collapse."
      ],
      "media": null
    },
    "tags": [
      "General Microbiology",
      "Bacterial Cell Wall & Endotoxins"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "MIC-Q-000002",
    "legacyId": 6008,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Immunology",
    "chapter": "Hypersensitivity Reactions",
    "level": "Moderate",
    "prompt": "A 10-year-old boy receives an intravenous infusion of equine-derived anti-snake venom following a pit viper bite. Nine days later, he presents with generalized urticaria, high fever, bilateral knee arthralgias, and dark urine containing dysmorphic red blood cells and protein. Serum complement levels (C3 and C4) are markedly depressed. Which type of hypersensitivity reaction accounts for this clinical syndrome?",
    "options": [
      "Type I (IgE-mediated immediate hypersensitivity)",
      "Type II (Antibody-mediated cytotoxic hypersensitivity)",
      "Type III (Immune complex-mediated hypersensitivity)",
      "Type IV (T-cell-mediated delayed-type hypersensitivity)"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "This patient is exhibiting classic acute serum sickness, a systemic prototype of Type III hypersensitivity.",
      "details": [
        "This patient is exhibiting classic acute serum sickness, a systemic prototype of Type III hypersensitivity.",
        "When large quantities of foreign protein (e.g., equine antiserum) are administered, host IgG antibodies are generated over 7–14 days.",
        "These IgG molecules form soluble circulating antigen-antibody (immune) complexes in slight antigen excess that deposit in vulnerable microvascular beds (synovium, renal glomeruli, skin venules).",
        "Deposited immune complexes fix complement, activating the classical pathway (consuming C3/C4) and recruiting neutrophils via C5a, which release lysosomal enzymes causing acute necrotizing vasculitis, arthritis, and glomerulonephritis."
      ],
      "ruleOut": [
        "Option A (Type I): Involves IgE pre-bound to Fc-epsilon-RI on mast cells and basophils, triggering immediate degranulation and histamine release within minutes, causing acute anaphylaxis or bronchospasm without hypocomplementemic vasculitis.",
        "Option B (Type II): Mediated by IgG or IgM directed against fixed cell-surface or tissue-bound antigens (e.g., autoimmune hemolytic anemia, Goodpasture syndrome), rather than systemic deposition of soluble circulating immune complexes.",
        "Option D (Type IV): Delayed-type hypersensitivity driven by sensitized CD4+ (Th1/Th17) or CD8+ T lymphocytes releasing cytokines or directly lysing target cells (e.g., contact dermatitis, Mantoux tuberculin test), lacking antibody/complement involvement."
      ],
      "media": null
    },
    "tags": [
      "Immunology",
      "Hypersensitivity Reactions"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "MIC-Q-000003",
    "legacyId": 6016,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Systematic Bacteriology",
    "chapter": "Staphylococcus aureus",
    "level": "Moderate",
    "prompt": "A 58-year-old diabetic male develops a postoperative surgical site infection following knee arthroplasty. Blood and wound cultures grow beta-hemolytic, catalase-positive, coagulase-positive Gram-positive cocci in clusters that show resistance to oxacillin and cefoxitin. What is the genetic basis of methicillin resistance in this isolated pathogen?",
    "options": [
      "Acquisition of mecA gene encoding altered penicillin-binding protein 2a (PBP2a)",
      "Plasmid-mediated production of TEM-1 beta-lactamase",
      "Mutations in DNA gyrase subunit A (gyrA)",
      "Active efflux mediated by the norA transport pump"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Methicillin-resistant Staphylococcus aureus (MRSA) resistance is mediated by the acquisition of the staphylococcal cassette chromosome mec (SCCmec) mobile genetic element carrying the mecA (or mecC) gene.",
      "details": [
        "Methicillin-resistant Staphylococcus aureus (MRSA) resistance is mediated by the acquisition of the staphylococcal cassette chromosome mec (SCCmec) mobile genetic element carrying the mecA (or mecC) gene.",
        "This gene encodes Penicillin-Binding Protein 2a (PBP2a), a transpeptidase that has an exceptionally low binding affinity for virtually all beta-lactam antibiotics, including penicillins, cephalosporins (except 5th generation agents like ceftaroline), and carbapenems.",
        "Cefoxitin disc diffusion is the preferred surrogate screening method used in diagnostic microbiology laboratories to detect mecA-mediated resistance."
      ],
      "ruleOut": [
        "Option B (Plasmid-mediated TEM-1 beta-lactamase): Cleaves penicillinase-labile penicillins (e.g., ampicillin, benzylpenicillin), but is completely inhibited by beta-lactamase inhibitors and has no activity against penicillinase-stable penicillins (oxacillin, methicillin).",
        "Option C (Mutations in gyrA): Confers high-level target site resistance to fluoroquinolones (e.g., ciprofloxacin, levofloxacin), not beta-lactam antibiotics.",
        "Option D (NorA transport pump): An active chromosomal multidrug efflux pump in S. aureus that expels fluoroquinolones, antiseptics, and biocides, but does not confer methicillin resistance."
      ],
      "media": null
    },
    "tags": [
      "Systematic Bacteriology",
      "Staphylococcus aureus"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "MIC-Q-000004",
    "legacyId": 6028,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Virology",
    "chapter": "Herpesviruses",
    "level": "Easy",
    "prompt": "A 45-year-old female presents with acute onset of high fever, headache, olfactory hallucinations, behavioral changes, and focal seizures. Brain MRI reveals asymmetric edema, hemorrhage, and hyperintensity localized strictly to the temporal and inferior frontal lobes. Polymerase chain reaction (PCR) of the cerebrospinal fluid is positive for Herpes Simplex Virus-1 (HSV-1). Which histopathological inclusion body is classically identified in neuronal nuclei infected with this virus?",
    "options": [
      "Cowdry A inclusion body",
      "Negri body",
      "Guarnieri body",
      "Owl-eye inclusion body"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Herpes Simplex Virus-1 (HSV-1) is the leading cause of sporadic, non-epidemic focal viral encephalitis in adults, exhibiting a distinct tropism for the temporal and inferior frontal lobes.",
      "details": [
        "Herpes Simplex Virus-1 (HSV-1) is the leading cause of sporadic, non-epidemic focal viral encephalitis in adults, exhibiting a distinct tropism for the temporal and inferior frontal lobes.",
        "Microscopic examination of infected neural tissue or Tzanck preparations reveals characteristic Cowdry A inclusion bodies.",
        "These are eosinophilic, amorphous, intranuclear inclusion bodies surrounded by a clear halo within multinucleated giant cells, reflecting active herpesviral replication and chromatin margination."
      ],
      "ruleOut": [
        "Option B (Negri body): Pathognomonic sharply demarcated, eosinophilic intracytoplasmic inclusions found in the Purkinje cells of the cerebellum and pyramidal neurons of the hippocampus in Rabies virus infection.",
        "Option C (Guarnieri body): Eosinophilic intracytoplasmic inclusion bodies characteristic of Poxviruses (e.g., Variola / Smallpox, Vaccinia).",
        "Option D (Owl-eye inclusion body): Large basophilic intranuclear inclusion bodies surrounded by a clear halo, classically pathognomonic for Cytomegalovirus (CMV) infection."
      ],
      "media": null
    },
    "tags": [
      "Virology",
      "Herpesviruses"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "MIC-Q-000005",
    "legacyId": 6037,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Mycology",
    "chapter": "Superficial & Cutaneous Mycoses",
    "level": "Easy",
    "prompt": "A 22-year-old athlete presents with hypopigmented, slightly scaling macules over his chest and back that become more conspicuous during the summer after sun exposure. Potassium hydroxide (KOH) examination of skin scrapings reveals short, stubby, unbranched curved hyphae interspersed with clusters of thick-walled budding yeasts ('spaghetti and meatballs' appearance). What is the causative fungal agent?",
    "options": [
      "Malassezia furfur",
      "Trichophyton rubrum",
      "Sporothrix schenckii",
      "Microsporum canis"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Pityriasis (Tinea) versicolor is caused by Malassezia furfur (and Malassezia globosa), a lipophilic yeast that is part of the normal cutaneous microbiota.",
      "details": [
        "Pityriasis (Tinea) versicolor is caused by Malassezia furfur (and Malassezia globosa), a lipophilic yeast that is part of the normal cutaneous microbiota.",
        "Overgrowth in hot, humid conditions leads to the production of dicarboxylic acids (such as azelaic acid), which inhibit tyrosinase in melanocytes, causing characteristic hypopigmented patches (or hyperpigmentation due to stratum corneum thickening).",
        "Direct microscopy with 10% KOH mounts classically demonstrates round budding yeast cells mixed with short, angular pseudohyphae, a diagnostic feature known as the 'spaghetti and meatballs' or 'meatballs and bananas' pattern."
      ],
      "ruleOut": [
        "Option B (Trichophyton rubrum): A common dermatophyte causing tinea corporis, tinea cruris, and tinea pedis; direct microscopy demonstrates long, thin, branching, septate hyphae, not a 'spaghetti and meatballs' pattern.",
        "Option C (Sporothrix schenckii): A thermally dimorphic fungus causing subcutaneous nodular lymphocutaneous lesions; tissue biopsy shows cigar-shaped budding yeasts, not superficial curved hyphae.",
        "Option D (Microsporum canis): A zoophilic dermatophyte that causes tinea capitis, exhibiting ectothrix hair invasion and producing large, spindle-shaped, multicellular, rough-walled macroconidia in culture."
      ],
      "media": null
    },
    "tags": [
      "Mycology",
      "Superficial & Cutaneous Mycoses"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "MIC-Q-000006",
    "legacyId": 6043,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "Parasitology",
    "chapter": "Intestinal Protozoa - Amoebae",
    "level": "Moderate",
    "prompt": "A 34-year-old male presents with right upper quadrant abdominal pain, high fever, and anorexia. Ultrasonography reveals a solitary, thick-walled cavity measuring 8 cm in the right lobe of the liver. Diagnostic aspiration yields thick, odorless, reddish-brown fluid resembling 'anchovy sauce'. Which protozoan is the causative agent, and what characteristic feature differentiates its invasive vegetative trophozoites from non-pathogenic commensal amoebae?",
    "options": [
      "Entamoeba histolytica; ingestion of erythrocytes (erythrophagocytosis)",
      "Entamoeba dispar; presence of a single central karyosome",
      "Giardia duodenalis; presence of two identical sucking discs",
      "Balantidium coli; presence of prominent macronucleus and micronucleus"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Amebic liver abscess (ALA) is the most common extraintestinal manifestation of Entamoeba histolytica infection.",
      "details": [
        "Amebic liver abscess (ALA) is the most common extraintestinal manifestation of Entamoeba histolytica infection.",
        "Trophozoites breach the colonic epithelium (creating classic flask-shaped ulcers) and travel via the portal venous circulation to the liver, causing localized liquefactive necrosis filled with sterile reddish-brown necrotic liver tissue ('anchovy sauce' pus).",
        "Morphologically, E. histolytica is indistinguishable on routine light microscopy from the non-pathogenic commensal Entamoeba dispar, except by the observation of ingested host erythrocytes within the cytoplasm of motile trophozoites (erythrophagocytosis), which confirms invasive pathogenic amoebiasis."
      ],
      "ruleOut": [
        "Option B (Entamoeba dispar; central karyosome): E. dispar shares an identical bull's-eye nucleus with a centrally placed karyosome, but is an avirulent commensal that never invades tissues, causes liver abscesses, or ingests red blood cells.",
        "Option C (Giardia duodenalis): A flagellated protozoan causing non-invasive malabsorptive enteritis and steatorrhea in the duodenum, not amebic anchovy-sauce liver abscesses.",
        "Option D (Balantidium coli): The largest ciliated human intestinal parasite (associated with pig contact), which can produce dysenteric colonic ulcers but rarely causes distant hepatic liquefactive abscesses."
      ],
      "media": null
    },
    "tags": [
      "Parasitology",
      "Intestinal Protozoa - Amoebae"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "MIC-Q-000007",
    "legacyId": 6002,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "General Microbiology",
    "chapter": "Sterilization and Disinfection",
    "level": "Easy",
    "prompt": "The Central Sterile Services Department (CSSD) of a tertiary care hospital runs a routine quality assurance cycle for their surgical autoclave operating at 121°C at 15 psi for 15 minutes. Which of the following spore-forming bacterial organisms is utilized as the standard biological indicator to validate sterilization efficacy in this moist-heat autoclave?",
    "options": [
      "Geobacillus stearothermophilus",
      "Bacillus atrophaeus",
      "Clostridium tetani",
      "Bacillus pumilus"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Geobacillus stearothermophilus (formerly Bacillus stearothermophilus) produces extremely heat-resistant endospores that possess high concentrations of calcium dipicolinate and specialized small acid-soluble spore proteins (SASPs).",
      "details": [
        "Geobacillus stearothermophilus (formerly Bacillus stearothermophilus) produces extremely heat-resistant endospores that possess high concentrations of calcium dipicolinate and specialized small acid-soluble spore proteins (SASPs).",
        "Because its spores withstand temperatures up to 121°C for over 12 minutes, non-viability of G. stearothermophilus spores after a run provides the gold standard biological proof that moist-heat autoclaving conditions were fully lethal to all transmissible microbes, including bacterial spores."
      ],
      "ruleOut": [
        "Option B (Bacillus atrophaeus): Produces spores with exceptional resistance to dry heat and alkylating gases; it is the official biological indicator for dry heat sterilizers (hot air ovens) and ethylene oxide (EtO) gas sterilization, not steam autoclaves.",
        "Option C (Clostridium tetani): Although an anaerobic spore-former, its spores possess inferior thermal resistance compared to thermophilic geobacilli, making it unsuitable and hazardous for CSSD validation.",
        "Option D (Bacillus pumilus): Produces spores with extreme resistance to ionizing radiation; it is specifically utilized as the biological indicator for gamma radiation and electron beam sterilization facilities."
      ],
      "media": null
    },
    "tags": [
      "General Microbiology",
      "Sterilization and Disinfection"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "MIC-Q-000008",
    "legacyId": 6003,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "General Microbiology",
    "chapter": "Bacterial Genetics",
    "level": "Hard",
    "prompt": "A molecular microbiology lab investigates how a hospital strain of Pseudomonas aeruginosa rapidly acquired a plasmid-borne gene conferring metallo-beta-lactamase resistance. The process was completely abrogated in vitro by the addition of micrococcal DNase to the culture broth, but was unaffected by physical barriers separating donor and recipient cells that permitted free liquid flow. Which mechanism of horizontal gene transfer was responsible?",
    "options": [
      "High-frequency recombination conjugation",
      "Generalized transduction",
      "Natural transformation",
      "Specialized transduction"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Transformation is the process by which competent bacterial cells take up naked, free exogenous DNA fragments directly from their surrounding liquid environment.",
      "details": [
        "Transformation is the process by which competent bacterial cells take up naked, free exogenous DNA fragments directly from their surrounding liquid environment.",
        "Because the transforming DNA exists extracellularly without the protection of a viral capsid or direct cell-to-cell mating bridge, it is uniquely susceptible to enzymatic degradation by added deoxyribonucleases (DNases).",
        "Complete inhibition of genetic transfer by the addition of DNase is the classic experimental criterion confirming natural transformation over conjugation or transduction."
      ],
      "ruleOut": [
        "Option A (High-frequency recombination conjugation): Requires direct cell-to-cell contact through a sex pilus bridge; it is physically blocked by impermeable filter barriers (e.g., U-tube experiment) and is completely insensitive to extracellular DNase because plasmid DNA passes directly between docked cells.",
        "Option B (Generalized transduction): Mediated by packaging of host bacterial genomic DNA fragments into a bacteriophage head during lytic viral assembly; the viral protein capsid shields the DNA from extracellular DNase destruction.",
        "Option D (Specialized transduction): Mediated by temperate bacteriophages (e.g., lambda phage) excising inaccurately from the bacterial chromosome along with adjacent flanking genes; the DNA is enclosed within a protective phage head and remains fully DNase-resistant."
      ],
      "media": null
    },
    "tags": [
      "General Microbiology",
      "Bacterial Genetics"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "MIC-Q-000009",
    "legacyId": 6004,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "General Microbiology",
    "chapter": "Culture Media & Identification",
    "level": "Moderate",
    "prompt": "A 35-year-old traveler returns from an endemic coastal region with massive, painless watery diarrhea resembling 'rice water'. The clinician suspects Vibrio cholerae. Which of the following transport media is most appropriate for preserving stool specimens when immediate laboratory processing is delayed, and which selective medium should be used to isolate yellow sucrose-fermenting colonies?",
    "options": [
      "Cary-Blair medium and Thiosulfate-Citrate-Bile Salts-Sucrose (TCBS) agar",
      "Stuart medium and Lowenstein-Jensen (LJ) medium",
      "Amies medium and MacConkey agar",
      "Buffered glycerol saline and Hektoen enteric agar"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Vibrio cholerae is highly sensitive to desiccation, acidic pH, and overgrowth by normal colonic flora.",
      "details": [
        "Vibrio cholerae is highly sensitive to desiccation, acidic pH, and overgrowth by normal colonic flora.",
        "Cary-Blair medium (or alkaline peptone water) is the transport medium of choice because its alkaline pH (8.4–8.6) preserves Vibrio viability while suppressing other commensal enterobacteria.",
        "For selective primary isolation, Thiosulfate-Citrate-Bile Salts-Sucrose (TCBS) agar is utilized; V. cholerae ferments sucrose, lowering the pH and turning the bromothymol blue/thymol blue indicator from green to large, opaque yellow colonies."
      ],
      "ruleOut": [
        "Option B (Stuart medium and Lowenstein-Jensen medium): Stuart medium is a semi-solid transport medium typically used for fastidious organisms like Neisseria gonorrhoeae, while LJ medium is an egg-based selective medium dedicated to culturing Mycobacterium tuberculosis.",
        "Option C (Amies medium and MacConkey agar): MacConkey agar differentiates lactose fermenters from non-lactose fermenters, but does not provide the selective bile-citrate-alkaline conditions needed to reliably isolate V. cholerae from heavy stool flora.",
        "Option D (Buffered glycerol saline and Hektoen enteric agar): Buffered glycerol saline (BGS) is toxic to Vibrio species due to the presence of glycerol; Hektoen enteric agar is optimized for the isolation of Salmonella and Shigella species."
      ],
      "media": null
    },
    "tags": [
      "General Microbiology",
      "Culture Media & Identification"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "MIC-Q-000010",
    "legacyId": 6005,
    "subjectId": "microbiology",
    "subject": "Microbiology",
    "topic": "General Microbiology",
    "chapter": "Antimicrobial Resistance Mechanisms",
    "level": "Hard",
    "prompt": "An ICU patient with ventilator-associated pneumonia yields a strain of Klebsiella pneumoniae showing high-level resistance to ceftriaxone, piperacillin-tazobactam, and meropenem. The laboratory performs an EDTA-combined disc diffusion test, which shows significant synergy with EDTA, restoring carbapenem sensitivity. This phenotype confirms the production of which class of carbapenemase?",
    "options": [
      "Class A Serine Carbapenemase (KPC)",
      "Class B Metallo-beta-lactamase (NDM-1)",
      "Class D Oxacillinase (OXA-48)",
      "AmpC cephalosporinase"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Ambler Class B Metallo-beta-lactamases (MBLs), such as New Delhi Metallo-beta-lactamase-1 (NDM-1), VIM, and IMP, utilize divalent zinc ions (Zn2+) within their active catalytic core to coordinate and hydrolyze the beta-lactam ring.",
      "details": [
        "Ambler Class B Metallo-beta-lactamases (MBLs), such as New Delhi Metallo-beta-lactamase-1 (NDM-1), VIM, and IMP, utilize divalent zinc ions (Zn2+) within their active catalytic core to coordinate and hydrolyze the beta-lactam ring.",
        "Chelating agents such as ethylenediaminetetraacetic acid (EDTA) or dipicolinic acid sequester zinc ions, thereby rendering Class B MBLs inactive and restoring carbapenem susceptibility in in vitro synergy tests.",
        "MBLs hydrolyze all penicillins, cephalosporins, and carbapenems, but spare monobactams (aztreonam)."
      ],
      "ruleOut": [
        "Option A (Class A Serine Carbapenemase [KPC]): Utilizes a covalent serine active site rather than zinc ions for hydrolysis; it is inhibited by avibactam, vaborbactam, and relebactam, but is completely unaffected by EDTA chelation.",
        "Option C (Class D Oxacillinase [OXA-48]): Serine-based carbapenemases common in the Mediterranean region that hydrolyze penicillins and carbapenems poorly inhibited by EDTA or traditional clavulanate/tazobactam.",
        "Option D (AmpC cephalosporinase): Class C cephalosporinase that confers resistance to third-generation cephalosporins and beta-lactamase inhibitor combinations, but typically spares carbapenems unless accompanied by porin loss; it is insensitive to EDTA."
      ],
      "media": null
    },
    "tags": [
      "General Microbiology",
      "Antimicrobial Resistance Mechanisms"
    ],
    "reviewStatus": "legacy-sample-unverified"
  }
];
