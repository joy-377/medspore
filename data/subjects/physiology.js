// MedSpore modular subject question bank. Exactly ten legacy sample MCQs.
export default [
  {
    "id": "PHY-Q-000001",
    "legacyId": 2001,
    "subjectId": "physiology",
    "subject": "Physiology",
    "topic": "General Physiology",
    "chapter": "Membrane Transport Mechanisms",
    "level": "Easy",
    "prompt": "An investigator studying epithelial transport in human enterocytes identifies a transport protein situated on the basolateral membrane that moves 3 Na+ ions out of the cell and 2 K+ ions into the cell per molecule of ATP hydrolyzed. What effect does pharmacological inhibition of this transporter by a cardiac glycoside have on intracellular solute concentrations?",
    "options": [
      "Decreased intracellular Na+ and increased intracellular K+",
      "Increased intracellular Na+ and decreased intracellular K+",
      "Increased intracellular Na+ and increased intracellular K+",
      "Decreased intracellular Na+ and decreased intracellular Ca2+"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "The Na+/K+-ATPase is a primary active electrogenic transporter located on the basolateral membrane of animal cells.",
      "details": [
        "The Na+/K+-ATPase is a primary active electrogenic transporter located on the basolateral membrane of animal cells.",
        "It couples the hydrolysis of one ATP molecule to the extrusion of 3 Na+ ions out of the cell and the uptake of 2 K+ ions into the cell, against their respective electrochemical gradients.",
        "Inhibition of this pump by cardiac glycosides (such as ouabain or digoxin) halts active Na+ extrusion and K+ import, leading directly to an accumulation of intracellular Na+ and a depletion of intracellular K+.",
        "Secondary to the elevated intracellular Na+, the forward driving force of the Na+/Ca2+ exchanger (NCX) is blunted, leading to secondary accumulation of intracellular Ca2+."
      ],
      "ruleOut": [
        "Option A (Decreased intracellular Na+ and increased intracellular K+): This represents hyperactivation of the pump, whereas inhibition causes Na+ retention and K+ loss.",
        "Option C (Increased intracellular Na+ and increased intracellular K+): While intracellular Na+ does increase due to impaired extrusion, intracellular K+ drops because the primary route of K+ entry into the cell is blocked.",
        "Option D (Decreased intracellular Na+ and decreased intracellular Ca2+): Intracellular Na+ increases, and as a consequence of decreased forward Na+/Ca2+ exchange, intracellular Ca2+ increases rather than decreases."
      ],
      "media": null
    },
    "tags": [
      "General Physiology",
      "Membrane Transport Mechanisms"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHY-Q-000002",
    "legacyId": 2006,
    "subjectId": "physiology",
    "subject": "Physiology",
    "topic": "Hematology",
    "chapter": "Erythropoiesis & Iron Metabolism",
    "level": "Easy",
    "prompt": "A 42-year-old male with chronic inflammatory bowel disease presents with microcytic, hypochromic anemia. Serum studies reveal low serum iron, low total iron-binding capacity (TIBC), and elevated serum ferritin levels. The pathophysiology of this anemia is driven by hepatic overproduction of which regulatory peptide that binds to and degrades ferroportin?",
    "options": [
      "Transferrin",
      "HFE protein",
      "Hepcidin",
      "Ceruloplasmin"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Hepcidin is a 25-amino-acid peptide hormone synthesized by hepatocytes in response to elevated systemic iron stores and inflammatory cytokines, notably Interleukin-6 (IL-6).",
      "details": [
        "Hepcidin is a 25-amino-acid peptide hormone synthesized by hepatocytes in response to elevated systemic iron stores and inflammatory cytokines, notably Interleukin-6 (IL-6).",
        "Hepcidin is the master negative regulator of systemic iron homeostasis.",
        "It binds to the basolateral iron exporter ferroportin-1 on enterocytes and macrophages, inducing its internalization and lysosomal degradation.",
        "This traps iron inside enterocytes and reticuloendothelial macrophages, preventing intestinal absorption and systemic recycling, leading to the hallmark laboratory profile of Anemia of Chronic Disease (low serum iron, low TIBC/transferrin, high/normal ferritin)."
      ],
      "ruleOut": [
        "Option A (Transferrin): Transferrin is the glycoprotein responsible for transporting Fe3+ in the circulation, not for degrading ferroportin; its level (TIBC) decreases in inflammation.",
        "Option B (HFE protein): HFE is an upstream membrane protein that modulates hepcidin expression; mutations in HFE cause hereditary hemochromatosis by inappropriately downregulating hepcidin.",
        "Option D (Ceruloplasmin): Ceruloplasmin is a copper-dependent ferroxidase that oxidizes Fe2+ to Fe3+ to facilitate binding to transferrin, but it does not degrade ferroportin."
      ],
      "media": null
    },
    "tags": [
      "Hematology",
      "Erythropoiesis & Iron Metabolism"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHY-Q-000003",
    "legacyId": 2011,
    "subjectId": "physiology",
    "subject": "Physiology",
    "topic": "Cardiovascular System",
    "chapter": "Cardiac Electrophysiology & Action Potentials",
    "level": "Easy",
    "prompt": "Electrophysiological recording from a ventricular myocardial contractile cell shows a prolonged action potential of approximately 250 milliseconds with a prominent plateau phase (Phase 2). Which ion channels are simultaneously active during Phase 2 to maintain this near-zero net membrane current?",
    "options": [
      "Inward fast Na+ current (INa) balanced by outward K+ current (Ito)",
      "Inward L-type Ca2+ current (ICa,L) balanced by outward delayed rectifier K+ currents (IKr, IKs)",
      "Inward funny current (If) balanced by outward leak K+ current (IK1)",
      "Inward T-type Ca2+ current (ICa,T) balanced by inward-rectifier K+ current (IK1)"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "The plateau phase (Phase 2) of the ventricular myocardial action potential is characterized by a balance between depolarizing inward currents and repolarizing outward currents, resulting in a prolonged refractory period.",
      "details": [
        "The plateau phase (Phase 2) of the ventricular myocardial action potential is characterized by a balance between depolarizing inward currents and repolarizing outward currents, resulting in a prolonged refractory period.",
        "The principal inward depolarizing current is mediated by voltage-gated L-type Ca2+ channels (Cav1.2, carrying ICa,L, through the dihydropyridine receptors).",
        "This is electrically balanced by outward K+ currents moving through delayed rectifier potassium channels (slow and rapid components: IKs and IKr).",
        "As L-type Ca2+ channels slowly inactivate and delayed rectifier K+ conductance increases, Phase 3 rapid repolarization ensues."
      ],
      "ruleOut": [
        "Option A (Inward fast Na+ current balanced by outward K+ current): Fast Na+ channels mediate the rapid upstroke (Phase 0) and are completely inactivated within 1-2 milliseconds by closure of their h-gates.",
        "Option C (Inward funny current balanced by outward leak K+ current): The funny current (If) is carried by hyperpolarization-activated cyclic nucleotide-gated (HCN) channels in pacemaker tissue (SA/AV node) during Phase 4 prepotential, not in ventricular myocytes.",
        "Option D (Inward T-type Ca2+ current balanced by inward-rectifier K+ current): T-type Ca2+ channels open at more negative potentials in pacemaker cells during Phase 4, whereas IK1 maintains resting membrane potential (Phase 4) and closes during Phase 2."
      ],
      "media": null
    },
    "tags": [
      "Cardiovascular System",
      "Cardiac Electrophysiology & Action Potentials"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHY-Q-000004",
    "legacyId": 2016,
    "subjectId": "physiology",
    "subject": "Physiology",
    "topic": "Respiratory System",
    "chapter": "Lung Mechanics & Compliance",
    "level": "Easy",
    "prompt": "A 32-week-gestation premature neonate develops severe tachypnea, grunting, and intercostal retractions shortly after birth. Arterial blood gas shows severe hypoxemia. Chest radiography demonstrates diffuse reticulogranular ground-glass opacities with air bronchograms. Which substance produced by alveolar Type II pneumocytes is deficient, and what is its primary physiological role?",
    "options": [
      "Dipalmitoylphosphatidylcholine (DPPC); Decreases alveolar surface tension, preventing atelectasis at low lung volumes",
      "Surfactant protein D; Enhances mucosal ciliary transport and mucociliary clearance",
      "Alpha-1 antitrypsin; Inhibits neutrophil elastase and prevents alveolar wall destruction",
      "Fibronectin; Increases alveolar capillary wall permeability to facilitate gas diffusion"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Neonatal Respiratory Distress Syndrome (NRDS) is caused by a deficiency of pulmonary surfactant, which is synthesized by Type II pneumocytes beginning around week 24 of gestation but reaches mature levels around week 35.",
      "details": [
        "Neonatal Respiratory Distress Syndrome (NRDS) is caused by a deficiency of pulmonary surfactant, which is synthesized by Type II pneumocytes beginning around week 24 of gestation but reaches mature levels around week 35.",
        "Surfactant is composed largely of dipalmitoylphosphatidylcholine (DPPC, lecithin), alongside surfactant proteins (SP-A, B, C, D).",
        "By inserting its hydrophobic fatty acyl tails into the air phase and hydrophilic heads into the aqueous lining phase, surfactant disrupts the cohesive intermolecular hydrogen bonding of water molecules at the air-liquid interface.",
        "According to the Law of Laplace (P = 2T / r), surfactant lowers surface tension (T) proportionately more in smaller alveoli than larger ones, equalizing collapsing pressures, preventing end-expiratory alveolar collapse (atelectasis), and markedly increasing lung compliance."
      ],
      "ruleOut": [
        "Option B (Surfactant protein D; Enhances mucosal ciliary transport): SP-D and SP-A are collectins that participate in innate immune defense and pathogen opsonization, but do not lower surface tension.",
        "Option C (Alpha-1 antitrypsin; Inhibits neutrophil elastase): Alpha-1 antitrypsin is a serpin antiprotease synthesized in the liver; its deficiency causes panacinar emphysema in adults, not neonatal atelectasis.",
        "Option D (Fibronectin; Increases alveolar capillary wall permeability): Fibronectin is an extracellular matrix glycoprotein; increasing capillary permeability would worsen pulmonary edema."
      ],
      "media": null
    },
    "tags": [
      "Respiratory System",
      "Lung Mechanics & Compliance"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHY-Q-000005",
    "legacyId": 2021,
    "subjectId": "physiology",
    "subject": "Physiology",
    "topic": "Renal System",
    "chapter": "Glomerular Filtration Rate & Autoregulation",
    "level": "Moderate",
    "prompt": "In an experimental animal, selective pharmacological constriction of the efferent arterioles of the glomeruli is induced while renal arterial perfusion pressure is held constant. How will this change affect Glomerular Capillary Hydrostatic Pressure (PGC), Glomerular Filtration Rate (GFR), and Renal Blood Flow (RBF)?",
    "options": [
      "Decreased PGC, Decreased GFR, Increased RBF",
      "Increased PGC, Increased GFR, Decreased RBF",
      "Decreased PGC, Increased GFR, Decreased RBF",
      "Increased PGC, Decreased GFR, Increased RBF"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "The efferent arteriole lies downstream of the glomerular capillary bed.",
      "details": [
        "The efferent arteriole lies downstream of the glomerular capillary bed.",
        "Constriction of the efferent arteriole (such as that mediated by low-dose Angiotensin II) increases downstream resistance, which causes blood to 'back up' within the glomerulus, raising the glomerular capillary hydrostatic pressure (PGC).",
        "Because net filtration pressure is driven directly by PGC, the Glomerular Filtration Rate (GFR) initially increases.",
        "Simultaneously, because total renal vascular resistance (R_afferent + R_efferent) has increased, total Renal Blood Flow (RBF = ΔP / R) decreases.",
        "Consequently, the Filtration Fraction (FF = GFR / RPF) rises significantly."
      ],
      "ruleOut": [
        "Option A (Decreased PGC, Decreased GFR, Increased RBF): This profile is characteristic of selective afferent arteriolar constriction (e.g., mediated by high-dose norepinephrine or NSAID-induced prostaglandin inhibition).",
        "Option C (Decreased PGC, Increased GFR, Decreased RBF): GFR cannot increase if PGC decreases, as PGC is the primary forward driving force of filtration.",
        "Option D (Increased PGC, Decreased GFR, Increased RBF): RBF must decrease when arteriolar resistance increases at constant arterial pressure."
      ],
      "media": null
    },
    "tags": [
      "Renal System",
      "Glomerular Filtration Rate & Autoregulation"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHY-Q-000006",
    "legacyId": 2026,
    "subjectId": "physiology",
    "subject": "Physiology",
    "topic": "Gastrointestinal System",
    "chapter": "Gastric Acid Secretion & Parietal Cells",
    "level": "Easy",
    "prompt": "A 45-year-old executive is diagnosed with a peptic ulcer. Endoscopy confirms mucosal erosion in the duodenal bulb. Gastric parietal cells synthesize and secrete hydrochloric acid (HCl) into the gastric lumen. Which primary active transport protein on the apical canalicular membrane of the parietal cell pumps protons into the lumen in exchange for potassium ions?",
    "options": [
      "Na+/K+-ATPase",
      "H+/K+-ATPase (proton pump)",
      "H+/Na+ exchanger",
      "Ca2+-ATPase"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "The gastric H+/K+-ATPase (proton pump) is a P-type primary active transport ATPase located on the apical canalicular membrane of gastric parietal (oxyntic) cells.",
      "details": [
        "The gastric H+/K+-ATPase (proton pump) is a P-type primary active transport ATPase located on the apical canalicular membrane of gastric parietal (oxyntic) cells.",
        "Upon stimulation by histamine (via H2 receptors/cAMP), acetylcholine (via M3 receptors/Ca2+), and gastrin (via CCK_B receptors/Ca2+), tubulovesicles containing the pump fuse with the apical membrane.",
        "The pump hydrolyzes ATP to extrude H+ ions into the gastric lumen against a concentration gradient of more than a million-fold (pH ~0.8 to 1.0) in exchange for K+ ions transported into the cell.",
        "Potassium subsequently recycles back into the lumen via apical K+ channels, while basolateral HCO3-/Cl- exchangers (AE2) supply chloride for apical secretion via Cl- channels (CFTR/anoctamin)."
      ],
      "ruleOut": [
        "Option A (Na+/K+-ATPase): The Na+/K+-ATPase is restricted to the basolateral membrane of the parietal cell, maintaining low intracellular Na+ and high K+.",
        "Option C (H+/Na+ exchanger): NHE is a secondary active antiporter involved in intracellular pH defense, not luminal acid secretion.",
        "Option D (Ca2+-ATPase): Plasma membrane or sarco/endoplasmic reticulum Ca2+-ATPases pump Ca2+ out of the cytosol to terminate signaling, not to acidify the gastric lumen."
      ],
      "media": null
    },
    "tags": [
      "Gastrointestinal System",
      "Gastric Acid Secretion & Parietal Cells"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHY-Q-000007",
    "legacyId": 2031,
    "subjectId": "physiology",
    "subject": "Physiology",
    "topic": "CNS & Special Senses",
    "chapter": "Sensory Receptors & Somatosensory Pathways",
    "level": "Easy",
    "prompt": "A neurologist tests vibratory sense in a 54-year-old diabetic patient by placing a 128-Hz tuning fork over the first metatarsophalangeal joint. Which specialized, rapidly adapting, encapsulated mechanoreceptors located deep in the dermis and subcutaneous tissue are primarily responsible for detecting high-frequency mechanical vibrations?",
    "options": [
      "Merkel discs",
      "Pacinian (lamellar) corpuscles",
      "Ruffini endings",
      "Meissner corpuscles"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Pacinian corpuscles (lamellar corpuscles) are large, encapsulated mechanoreceptors located deep in the skin (dermis and hypodermis), interosseous membranes, and joint capsules.",
      "details": [
        "Pacinian corpuscles (lamellar corpuscles) are large, encapsulated mechanoreceptors located deep in the skin (dermis and hypodermis), interosseous membranes, and joint capsules.",
        "They consist of a single central unmyelinated nerve ending surrounded by concentric lamellae of flattened Schwann-like cells separated by fluid.",
        "They are very rapidly adapting (RA II) receptors with large receptive fields with indistinct borders.",
        "Because the viscoelastic lamellae filter low-frequency mechanical deformations, only rapidly changing mechanical stimuli transmit deformation to the central nerve terminal, making Pacinian corpuscles the primary detectors of high-frequency vibration (optimal sensitivity at 200-300 Hz) and rapid transient touches."
      ],
      "ruleOut": [
        "Option A (Merkel discs): Merkel cells (SA I) are slowly adapting receptors in the basal layer of the epidermis that detect sustained touch, pressure, and fine spatial details/texture.",
        "Option C (Ruffini endings): Ruffini corpuscles (SA II) are slowly adapting spindle-shaped encapsulated receptors sensitive to skin stretch, joint angle, and directional shear forces.",
        "Option D (Meissner corpuscles): Meissner corpuscles (RA I) are rapidly adapting encapsulated receptors located in dermal papillae of glabrous skin sensitive to low-frequency flutter (30-50 Hz) and dynamic slip (grip adjustment)."
      ],
      "media": null
    },
    "tags": [
      "CNS & Special Senses",
      "Sensory Receptors & Somatosensory Pathways"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHY-Q-000008",
    "legacyId": 2036,
    "subjectId": "physiology",
    "subject": "Physiology",
    "topic": "Endocrinology",
    "chapter": "Hypothalamic-Pituitary Axis & Feedback",
    "level": "Easy",
    "prompt": "A 28-year-old female presents with secondary amenorrhea, bilateral galactorrhea, and mild headaches. Pregnancy test is negative. Serum prolactin is elevated at 160 ng/mL (normal: <25 ng/mL). MRI of the brain confirms a 6-mm pituitary microadenoma. Which hypothalamic neurotransmitter provides the primary tonic physiological inhibition of prolactin secretion from anterior pituitary lactotrophs?",
    "options": [
      "Thyrotropin-releasing hormone (TRH)",
      "Dopamine",
      "Somatostatin",
      "Gonadotropin-releasing hormone (GnRH)"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Unlike all other anterior pituitary hormones (which are primarily regulated by hypothalamic releasing factors), prolactin is uniquely under tonic (continuous) inhibitory control by the hypothalamus.",
      "details": [
        "Unlike all other anterior pituitary hormones (which are primarily regulated by hypothalamic releasing factors), prolactin is uniquely under tonic (continuous) inhibitory control by the hypothalamus.",
        "The physiological Prolactin-Inhibiting Factor (PIF) is dopamine, synthesized by dopaminergic neurons in the arcuate nucleus of the tuberoinfundibular pathway.",
        "Dopamine is secreted into the hypophyseal portal circulation and binds to Gi-coupled Dopamine D2 receptors on anterior pituitary lactotrophs, suppressing adenylyl cyclase, lowering intracellular cAMP and Ca2+, and inhibiting prolactin synthesis and exocytosis.",
        "Disruption of the pituitary stalk or administration of dopamine antagonists (e.g., antipsychotics, metoclopramide) lifts this inhibition, producing hyperprolactinemia."
      ],
      "ruleOut": [
        "Option A (Thyrotropin-releasing hormone - TRH): TRH stimulates prolactin release (which is why primary hypothyroidism with elevated TRH can cause galactorrhea), but it is not the primary tonic regulator.",
        "Option C (Somatostatin): Somatostatin (GHIH) primarily inhibits Growth Hormone (GH) and Thyroid-Stimulating Hormone (TSH) release, not prolactin.",
        "Option D (Gonadotropin-releasing hormone - GnRH): GnRH stimulates the release of LH and FSH from gonadotrophs, with no direct inhibitory action on lactotrophs."
      ],
      "media": null
    },
    "tags": [
      "Endocrinology",
      "Hypothalamic-Pituitary Axis & Feedback"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHY-Q-000009",
    "legacyId": 2041,
    "subjectId": "physiology",
    "subject": "Physiology",
    "topic": "Reproductive System",
    "chapter": "Ovarian Cycle & Ovulation",
    "level": "Moderate",
    "prompt": "In the normal human 28-day menstrual cycle, mid-cycle ovulation occurs approximately 10 to 12 hours after the peak of the Luteinizing Hormone (LH) surge. Which endocrine event is the mandatory prerequisite that triggers this positive feedback LH surge from anterior pituitary gonadotrophs?",
    "options": [
      "A sustained elevation of circulating 17-beta-estradiol exceeding ~200 pg/mL for at least 36 to 48 hours",
      "A sudden, steep drop in circulating progesterone levels below 1 ng/mL",
      "Inhibin A-mediated stimulation of pituitary GnRH receptors",
      "A transient surge in human chorionic gonadotropin (hCG) from the dominant follicle"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Throughout most of the follicular phase, moderate levels of estradiol exert classic negative feedback on the hypothalamus (reducing GnRH pulse frequency) and anterior pituitary (reducing LH/FSH sensitivity).",
      "details": [
        "Throughout most of the follicular phase, moderate levels of estradiol exert classic negative feedback on the hypothalamus (reducing GnRH pulse frequency) and anterior pituitary (reducing LH/FSH sensitivity).",
        "However, as the dominant Graafian follicle matures, its granulosa cells secrete large amounts of 17-beta-estradiol.",
        "When circulating estradiol concentrations surpass a critical threshold of approximately 200 pg/mL and remain continuously elevated for at least 36 to 48 hours, a switch from negative to positive feedback occurs.",
        "This sustained high estrogen stimulates kisspeptin neurons in the anteroventral periventricular (AVPV) nucleus of the hypothalamus, triggering a high-frequency GnRH discharge and dramatically sensitizing pituitary gonadotrophs to GnRH, producing the preovulatory LH surge."
      ],
      "ruleOut": [
        "Option B (A sudden, steep drop in circulating progesterone levels...): Progesterone levels are low (<1 ng/mL) throughout the early follicular phase; small preovulatory rises in progesterone actually facilitate the LH surge.",
        "Option C (Inhibin A-mediated stimulation of pituitary GnRH receptors): Inhibin A (secreted by the corpus luteum) and Inhibin B (secreted by granulosa cells) selectively inhibit pituitary FSH secretion, without stimulating LH.",
        "Option D (A transient surge in hCG from the dominant follicle): hCG is secreted by the syncytiotrophoblast of the blastocyst after fertilization and implantation, not by preovulatory ovarian follicles."
      ],
      "media": null
    },
    "tags": [
      "Reproductive System",
      "Ovarian Cycle & Ovulation"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHY-Q-000010",
    "legacyId": 2002,
    "subjectId": "physiology",
    "subject": "Physiology",
    "topic": "General Physiology",
    "chapter": "Action Potential & Excitability",
    "level": "Moderate",
    "prompt": "During an in vitro electrophysiological recording of a mammalian peripheral nerve axon, an investigator increases the extracellular potassium concentration ([K+]out) from 4.5 mEq/L to 10 mEq/L. Which of the following consequences on the resting membrane potential (RMP) and nerve excitability will occur initially?",
    "options": [
      "Hyperpolarization of RMP and increased threshold excitability",
      "Depolarization of RMP leading to initial hyperexcitability followed by inexcitability due to Na+ channel inactivation",
      "Hyperpolarization of RMP due to accelerated outward K+ diffusion",
      "No change in RMP because resting potential is determined solely by Na+ permeability"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "According to the Nernst equation (E_K = -61.5 * log10([K+]in / [K+]out)), increasing extracellular K+ reduces the concentration gradient favoring K+ efflux.",
      "details": [
        "According to the Nernst equation (E_K = -61.5 * log10([K+]in / [K+]out)), increasing extracellular K+ reduces the concentration gradient favoring K+ efflux.",
        "Consequently, the resting membrane potential (RMP) becomes less negative (depolarization).",
        "Initially, bringing the RMP closer to the threshold potential (-55 mV) increases membrane excitability.",
        "However, sustained depolarization leads to time-dependent closure of the inactivation gates (h-gates) of voltage-gated Na+ channels (accommodation/inactivation), rendering the cell refractory and ultimately inexcitable."
      ],
      "ruleOut": [
        "Option A (Hyperpolarization of RMP and increased threshold excitability): Hyperpolarization occurs when extracellular K+ drops (hypokalemia), which increases the outward concentration gradient for K+.",
        "Option C (Hyperpolarization of RMP due to accelerated outward K+ diffusion): Elevating extracellular K+ decreases, rather than accelerates, the outward chemical gradient of K+.",
        "Option D (No change in RMP because resting potential is determined solely by Na+ permeability): The resting membrane is roughly 50 to 100 times more permeable to K+ than to Na+ via inward-rectifying and background two-pore domain K+ leak channels; hence, RMP tracks E_K closely."
      ],
      "media": null
    },
    "tags": [
      "General Physiology",
      "Action Potential & Excitability"
    ],
    "reviewStatus": "legacy-sample-unverified"
  }
];
