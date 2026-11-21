// MedSpore modular subject question bank. Exactly ten legacy sample MCQs.
export default [
  {
    "id": "BCH-Q-000001",
    "legacyId": 3001,
    "subjectId": "biochemistry",
    "subject": "Biochemistry",
    "topic": "Cell & Organelles",
    "chapter": "Lysosomes and Peroxisomes",
    "level": "Moderate",
    "prompt": "A 4-month-old infant is brought to the pediatric clinic due to poor feeding, hypotonia, and craniofacial dysmorphism characterized by a high forehead, large anterior fontanelle, and shallow orbital ridges. Brain MRI demonstrates diffuse demyelination and polymicrogyria. Biochemical analysis reveals markedly elevated levels of very-long-chain fatty acids (VLCFAs, C26:0 and C26:1) and phytanic acid in plasma, alongside absent catalase-containing organelles on liver biopsy. Which of the following organelles is primarily defective in this patient?",
    "options": [
      "Peroxisome",
      "Lysosome",
      "Mitochondrion",
      "Rough endoplasmic reticulum"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Zellweger syndrome (cerebrohepatorenal syndrome) is an autosomal recessive peroxisome biogenesis disorder caused by mutations in PEX genes (most commonly PEX1).",
      "details": [
        "Zellweger syndrome (cerebrohepatorenal syndrome) is an autosomal recessive peroxisome biogenesis disorder caused by mutations in PEX genes (most commonly PEX1).",
        "Peroxisomes are essential for alpha-oxidation of branched-chain fatty acids (e.g., phytanic acid) and the initial beta-oxidation of very-long-chain fatty acids (VLCFAs, >22 carbons) prior to mitochondrial completion.",
        "Absence of functional peroxisomes causes accumulation of VLCFAs, phytanic acid, and pristanic acid, leading to profound neurological impairment, craniofacial abnormalities, and early death."
      ],
      "ruleOut": [
        "Option B (Lysosome): Lysosomal storage diseases (e.g., Gaucher, Tay-Sachs) result from defective acid hydrolases degrading sphingolipids or glycosaminoglycans, not defects in peroxisomal beta- or alpha-oxidation.",
        "Option C (Mitochondrion): Mitochondria perform beta-oxidation of short-, medium-, and long-chain fatty acids, but they cannot initiate oxidation of VLCFAs (C24-C26).",
        "Option D (Rough endoplasmic reticulum): The RER is responsible for synthesis and folding of secretory and membrane proteins, not fatty acid oxidation or phytanic acid metabolism."
      ],
      "media": null
    },
    "tags": [
      "Cell & Organelles",
      "Lysosomes and Peroxisomes"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "BCH-Q-000002",
    "legacyId": 3006,
    "subjectId": "biochemistry",
    "subject": "Biochemistry",
    "topic": "Enzymes",
    "chapter": "Enzyme Kinetics and Inhibition",
    "level": "Easy",
    "prompt": "A clinical biochemist evaluates an experimental competitive inhibitor targeting HMG-CoA reductase. In the presence of a fixed concentration of this competitive inhibitor, what changes are observed in the Michaelis constant (Km) and the maximum velocity (Vmax) of the reaction?",
    "options": [
      "Km increases, Vmax remains unchanged",
      "Km decreases, Vmax remains unchanged",
      "Km remains unchanged, Vmax decreases",
      "Both Km and Vmax decrease proportionally"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Competitive inhibitors reversibly bind to the active site of the free enzyme, directly competing with the substrate.",
      "details": [
        "Competitive inhibitors reversibly bind to the active site of the free enzyme, directly competing with the substrate.",
        "Because increasing the substrate concentration can displace the inhibitor, the maximum reaction velocity (Vmax) remains unchanged.",
        "However, a higher substrate concentration is required to achieve half-maximal velocity, resulting in an increased apparent Km (lower apparent affinity)."
      ],
      "ruleOut": [
        "Option B (Km decreases, Vmax unchanged): A decrease in Km indicates increased substrate affinity, which does not occur with competitive inhibitors.",
        "Option C (Km unchanged, Vmax decreases): Characteristic of pure non-competitive inhibitors, which bind allosterically to both free enzyme and enzyme-substrate complex.",
        "Option D (Both Km and Vmax decrease): Hallmark of uncompetitive inhibition, where the inhibitor binds exclusively to the enzyme-substrate (ES) complex."
      ],
      "media": null
    },
    "tags": [
      "Enzymes",
      "Enzyme Kinetics and Inhibition"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "BCH-Q-000003",
    "legacyId": 3012,
    "subjectId": "biochemistry",
    "subject": "Biochemistry",
    "topic": "Carbohydrate Metabolism",
    "chapter": "Glycolysis and Pyruvate Oxidation",
    "level": "Moderate",
    "prompt": "An otherwise healthy 24-year-old marathon runner experiences severe muscle cramping and dark urine after a prolonged endurance race. In red blood cells, which lack mitochondria, glycolysis generates ATP strictly by substrate-level phosphorylation. Which of the following glycolytic enzymes catalyzes a substrate-level phosphorylation step that directly generates ATP?",
    "options": [
      "Phosphoglycerate kinase",
      "Glyceraldehyde 3-phosphate dehydrogenase",
      "Hexokinase",
      "Phosphofructokinase-1"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Glycolysis contains two substrate-level phosphorylation reactions that directly generate ATP: (1) Phosphoglycerate kinase, which transfers a high-energy phosphate from 1,3-bisphosphoglycerate to ADP forming 3-phosphoglycerate and…",
      "details": [
        "Glycolysis contains two substrate-level phosphorylation reactions that directly generate ATP: (1) Phosphoglycerate kinase, which transfers a high-energy phosphate from 1,3-bisphosphoglycerate to ADP forming 3-phosphoglycerate and ATP; and (2) Pyruvate kinase, which converts phosphoenolpyruvate (PEP) to pyruvate generating ATP."
      ],
      "ruleOut": [
        "Option B (Glyceraldehyde 3-phosphate dehydrogenase): Catalyzes an oxidative phosphorylation reaction coupling NAD+ reduction to the formation of 1,3-bisphosphoglycerate, generating NADH rather than ATP directly.",
        "Option C (Hexokinase): Consumes one molecule of ATP to phosphorylate glucose to glucose 6-phosphate.",
        "Option D (Phosphofructokinase-1): Consumes one molecule of ATP to phosphorylate fructose 6-phosphate to fructose 1,6-bisphosphate."
      ],
      "media": null
    },
    "tags": [
      "Carbohydrate Metabolism",
      "Glycolysis and Pyruvate Oxidation"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "BCH-Q-000004",
    "legacyId": 3021,
    "subjectId": "biochemistry",
    "subject": "Biochemistry",
    "topic": "Lipid Metabolism",
    "chapter": "Fatty Acid Oxidation and Ketogenesis",
    "level": "Moderate",
    "prompt": "A 2-year-old child presents with lethargy, vomiting, and seizures following an overnight fast triggered by viral gastroenteritis. Laboratory findings reveal severe non-ketotic hypoglycemia (blood glucose 24 mg/dL, negative urine ketones), hyperammonemia, and dicarboxylic aciduria. A defect in carnitine palmitoyltransferase-1 (CPT-1) is suspected. Which of the following molecules allosterically inhibits CPT-1 during the fed state?",
    "options": [
      "Malonyl-CoA",
      "Acetyl-CoA",
      "Citrate",
      "Acetoacetyl-CoA"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Carnitine palmitoyltransferase-1 (CPT-1) on the outer mitochondrial membrane converts long-chain fatty acyl-CoAs to acylcarnitines for import into the matrix.",
      "details": [
        "Carnitine palmitoyltransferase-1 (CPT-1) on the outer mitochondrial membrane converts long-chain fatty acyl-CoAs to acylcarnitines for import into the matrix.",
        "In the fed state, active fatty acid synthesis produces Malonyl-CoA (via Acetyl-CoA carboxylase).",
        "Malonyl-CoA potently inhibits CPT-1, preventing simultaneous, futile synthesis and beta-oxidation of fatty acids."
      ],
      "ruleOut": [
        "Option B (Acetyl-CoA): Inhibits pyruvate dehydrogenase and activates pyruvate carboxylase, but does not directly inhibit CPT-1.",
        "Option C (Citrate): An allosteric activator of Acetyl-CoA carboxylase (stimulating lipogenesis), but does not directly inhibit CPT-1.",
        "Option D (Acetoacetyl-CoA): An intermediate in ketogenesis and cholesterol biosynthesis, without direct regulatory action on CPT-1."
      ],
      "media": null
    },
    "tags": [
      "Lipid Metabolism",
      "Fatty Acid Oxidation and Ketogenesis"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "BCH-Q-000005",
    "legacyId": 3030,
    "subjectId": "biochemistry",
    "subject": "Biochemistry",
    "topic": "Protein & Amino Acid Metabolism",
    "chapter": "Urea Cycle Disorders",
    "level": "Hard",
    "prompt": "A 3-day-old male neonate becomes progressively lethargic, develops tachypnea, and vomits repeatedly. Arterial blood gas shows respiratory alkalosis. Serum ammonia is 680 mcg/dL (markedly elevated). Plasma amino acid chromatography demonstrates undetectable levels of citrulline, low arginine, and markedly elevated levels of orotic acid in the urine. Which enzyme of the urea cycle is deficient?",
    "options": [
      "Ornithine transcarbamylase",
      "Carbamoyl phosphate synthetase I",
      "N-acetylglutamate synthase",
      "Argininosuccinate synthetase"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Ornithine transcarbamylase (OTC) deficiency is the most common urea cycle disorder and is the only one inherited in an X-linked recessive pattern.",
      "details": [
        "Ornithine transcarbamylase (OTC) deficiency is the most common urea cycle disorder and is the only one inherited in an X-linked recessive pattern.",
        "Deficiency of OTC causes accumulation of mitochondrial carbamoyl phosphate, which spills into the cytosol and enters the pyrimidine synthesis pathway via aspartate transcarbamylase, causing massive excretion of orotic acid in urine.",
        "Hyperammonemia with low/absent citrulline and high orotic acid confirms OTC deficiency."
      ],
      "ruleOut": [
        "Option B (Carbamoyl phosphate synthetase I): Deficient CPS I leads to hyperammonemia and undetectable citrulline, but orotic acid is NOT elevated because carbamoyl phosphate cannot be produced.",
        "Option C (N-acetylglutamate synthase): Deficiency mimics CPS I (absent activator), causing hyperammonemia without orotic aciduria.",
        "Option D (Argininosuccinate synthetase): Deficiency causes classic Citrullinemia Type I, characterized by massive elevations in plasma citrulline, not absent citrulline."
      ],
      "media": null
    },
    "tags": [
      "Protein & Amino Acid Metabolism",
      "Urea Cycle Disorders"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "BCH-Q-000006",
    "legacyId": 3039,
    "subjectId": "biochemistry",
    "subject": "Biochemistry",
    "topic": "Molecular Biology & Genetics",
    "chapter": "DNA Replication and Repair",
    "level": "Easy",
    "prompt": "A 6-year-old child presents with severe sunburns, freckling, and dry, scaly skin on minimal sun exposure. Examination reveals multiple hyperpigmented macules, poikiloderma, and two ulcerated cutaneous nodules confirmed on biopsy to be squamous cell carcinomas. Which DNA repair mechanism is defective in this patient?",
    "options": [
      "Nucleotide excision repair",
      "Base excision repair",
      "Mismatch repair",
      "Non-homologous end joining"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Xeroderma pigmentosum (XP) is an autosomal recessive disease caused by mutations in genes encoding the Nucleotide Excision Repair (NER) complex (e.g., XPA through XPG endonucleases).",
      "details": [
        "Xeroderma pigmentosum (XP) is an autosomal recessive disease caused by mutations in genes encoding the Nucleotide Excision Repair (NER) complex (e.g., XPA through XPG endonucleases).",
        "Ultraviolet radiation induces the covalent cross-linking of adjacent pyrimidine bases, forming cyclobutane pyrimidine dimers (thymine dimers).",
        "The NER system recognizes, excises an oligonucleotide containing the lesion, and repairs it.",
        "Loss of NER causes extreme UV sensitivity and a >1000-fold increased risk of skin cancers."
      ],
      "ruleOut": [
        "Option B (Base excision repair): Fixes non-bulky, spontaneous base alterations (e.g., deamination of cytosine to uracil) using DNA glycosylases and AP endonucleases.",
        "Option C (Mismatch repair): Fixes post-replicative mismatches and microsatellite slippages; defective in Lynch syndrome (HNPCC).",
        "Option D (Non-homologous end joining): Reconnects double-stranded DNA breaks induced by ionizing radiation; defective in ataxia-telangiectasia and severe combined immunodeficiency (SCID)."
      ],
      "media": null
    },
    "tags": [
      "Molecular Biology & Genetics",
      "DNA Replication and Repair"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "BCH-Q-000007",
    "legacyId": 3046,
    "subjectId": "biochemistry",
    "subject": "Biochemistry",
    "topic": "Vitamins & Minerals",
    "chapter": "Fat-Soluble Vitamins",
    "level": "Easy",
    "prompt": "A 4-year-old boy in a refugee camp presents with dry, scaly eyes and poor vision in dim lighting. Examination of the conjunctiva reveals triangular, foamy-appearing plaques adjacent to the limbus (Bitot spots) and generalized xerophthalmia. Which of the following vitamin forms is directly isomerized by photons in rhodopsin during visual phototransduction?",
    "options": [
      "11-cis-retinal",
      "All-trans-retinoic acid",
      "Beta-carotene",
      "Retinyl palmitate"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Vitamin A deficiency causes nyctalopia (night blindness), xerophthalmia, Bitot spots, and keratomalacia.",
      "details": [
        "Vitamin A deficiency causes nyctalopia (night blindness), xerophthalmia, Bitot spots, and keratomalacia.",
        "In retinal rod cells, the visual chromophore 11-cis-retinal is covalently bound to the apoprotein opsin, forming rhodopsin.",
        "Absorption of a photon isomerizes 11-cis-retinal into all-trans-retinal, triggering a conformational change into metarhodopsin II that activates the G-protein transducin, closing cGMP-gated sodium channels and hyperpolarizing the photoreceptor."
      ],
      "ruleOut": [
        "Option B (All-trans-retinoic acid): An active metabolite that binds nuclear RAR receptors to regulate epithelial gene differentiation; it cannot participate in the rhodopsin visual cycle.",
        "Option C (Beta-carotene): Provitamin A carotenoid cleaved by intestinal dioxygenase to form retinal; it cannot bind opsin directly without cleavage.",
        "Option D (Retinyl palmitate): The primary hepatic storage form of vitamin A within hepatic stellate (Ito) cells, not the active photopigment."
      ],
      "media": null
    },
    "tags": [
      "Vitamins & Minerals",
      "Fat-Soluble Vitamins"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "BCH-Q-000008",
    "legacyId": 3002,
    "subjectId": "biochemistry",
    "subject": "Biochemistry",
    "topic": "Cell & Organelles",
    "chapter": "Protein Targeting and Sorting",
    "level": "Hard",
    "prompt": "An 8-month-old male infant presents with severe developmental delay, coarse facial features, gingival hyperplasia, and restricted joint mobility. Skeletal survey reveals dysostosis multiplex. Analysis of cultured fibroblasts reveals dense cytoplasmic granular inclusions. Laboratory testing shows markedly elevated levels of multiple lysosomal enzymes in the patient's serum, but their intracellular activity within cultured fibroblasts is deficient. Which of the following biochemical defects accounts for this presentation?",
    "options": [
      "Defective mannose-6-phosphate tagging in the Golgi apparatus",
      "Mutations in the signal recognition particle (SRP) receptor",
      "Deficiency of lysosomal beta-galactosidase activity",
      "Impaired retrograde transport via COP-I vesicles"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "This infant presents with I-cell disease (mucolipidosis type II), caused by an autosomal recessive defect in UDP-N-acetylglucosamine:lysophosphotransferase (GlcNAc-phosphotransferase).",
      "details": [
        "This infant presents with I-cell disease (mucolipidosis type II), caused by an autosomal recessive defect in UDP-N-acetylglucosamine:lysophosphotransferase (GlcNAc-phosphotransferase).",
        "This Golgi apparatus enzyme adds mannose-6-phosphate (M6P) tags to newly synthesized acid hydrolases.",
        "Without M6P, the enzymes cannot bind the M6P receptor for delivery to lysosomes; instead, they are constitutively secreted into the extracellular space/plasma, leading to empty lysosomes, substrate accumulation (dense cytoplasmic inclusion bodies), and high plasma lysosomal enzyme levels."
      ],
      "ruleOut": [
        "Option B (Mutations in SRP receptor): SRP receptor defects halt the docking of translating ribosomes onto the rough ER membrane, broadly abolishing secretory and transmembrane protein synthesis rather than selectively mistargeting lysosomal hydrolases.",
        "Option C (Deficiency of lysosomal beta-galactosidase): Causes GM1 gangliosidosis or Krabbe disease, characterized by single-enzyme deficiencies rather than elevated serum levels of dozens of distinct acid hydrolases.",
        "Option D (Impaired COP-I retrograde transport): COP-I mediates retrograde transport from Golgi to ER; defects disrupt general ER-Golgi recycling, not specific M6P-dependent lysosomal targeting."
      ],
      "media": null
    },
    "tags": [
      "Cell & Organelles",
      "Protein Targeting and Sorting"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "BCH-Q-000009",
    "legacyId": 3003,
    "subjectId": "biochemistry",
    "subject": "Biochemistry",
    "topic": "Cell & Organelles",
    "chapter": "Mitochondrial Structure and Apoptosis",
    "level": "Moderate",
    "prompt": "During intrinsic apoptosis induced by DNA damage, the pro-apoptotic proteins Bax and Bak oligomerize to form pores in the mitochondrial outer membrane. Release of which of the following molecules into the cytosol directly binds Apaf-1 to initiate apoptosome assembly?",
    "options": [
      "Cytochrome c",
      "Cytochrome P450",
      "Cardiolipin",
      "Succinate dehydrogenase"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "In the intrinsic (mitochondrial) pathway of apoptosis, mitochondrial outer membrane permeabilization (MOMP) mediated by Bax/Bak releases Cytochrome c from the intermembrane space into the cytosol.",
      "details": [
        "In the intrinsic (mitochondrial) pathway of apoptosis, mitochondrial outer membrane permeabilization (MOMP) mediated by Bax/Bak releases Cytochrome c from the intermembrane space into the cytosol.",
        "Cytosolic cytochrome c binds apoptotic protease activating factor-1 (Apaf-1) in the presence of dATP, triggering heptamerization of the Apaf-1/cytochrome c complex into the apoptosome, which recruits and activates procaspase-9."
      ],
      "ruleOut": [
        "Option B (Cytochrome P450): Hemeprotein enzymes located predominantly in the smooth endoplasmic reticulum involved in phase I xenobiotic metabolism and steroidogenesis; they do not trigger apoptosome assembly.",
        "Option C (Cardiolipin): A specialized diphosphatidylglycerol lipid found in the inner mitochondrial membrane that anchors cytochrome c; it does not bind Apaf-1 in the cytosol.",
        "Option D (Succinate dehydrogenase): Complex II of the electron transport chain embedded in the inner mitochondrial membrane; it is not released as a soluble pro-apoptotic trigger."
      ],
      "media": null
    },
    "tags": [
      "Cell & Organelles",
      "Mitochondrial Structure and Apoptosis"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "BCH-Q-000010",
    "legacyId": 3004,
    "subjectId": "biochemistry",
    "subject": "Biochemistry",
    "topic": "Cell & Organelles",
    "chapter": "Plasma Membrane and Cytoskeleton",
    "level": "Easy",
    "prompt": "A 7-year-old child presents with recurrent jaundice, splenomegaly, and mild pallor. Peripheral blood smear reveals numerous spherocytes lacking central pallor. An osmotic fragility test is positive. Genetic sequencing confirms a mutation in ankyrin. Ankyrin normally connects the spectrin-actin cytoskeleton of erythrocytes to which integral membrane protein?",
    "options": [
      "Band 3 (Anion exchanger 1)",
      "Aquaporin-1",
      "Sodium-potassium ATPase",
      "Glycophorin A"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "In hereditary spherocytosis, destabilization of the RBC membrane skeletal lattice leads to spontaneous membrane budding, spherical remodeling, and splenic sequestration.",
      "details": [
        "In hereditary spherocytosis, destabilization of the RBC membrane skeletal lattice leads to spontaneous membrane budding, spherical remodeling, and splenic sequestration.",
        "The vertical membrane tether consists of spectrin connected via ankyrin to Band 3 (anion exchanger 1) and Protein 4.2.",
        "Mutations in ankyrin (~50%), Band 3, or beta-spectrin disrupt this vertical scaffold."
      ],
      "ruleOut": [
        "Option B (Aquaporin-1): A water channel protein present on erythrocyte membranes, but it does not anchor the spectrin-based submembranous cytoskeleton.",
        "Option C (Sodium-potassium ATPase): Maintains resting ion gradients across membranes, but does not serve as the structural anchor for ankyrin.",
        "Option D (Glycophorin A): Glycophorin C (not A) interacts with protein 4.1R in the horizontal junctional complex; Band 3 is the direct binding partner for ankyrin."
      ],
      "media": null
    },
    "tags": [
      "Cell & Organelles",
      "Plasma Membrane and Cytoskeleton"
    ],
    "reviewStatus": "legacy-sample-unverified"
  }
];
