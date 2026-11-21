// MedSpore modular subject question bank. Exactly ten legacy sample MCQs.
export default [
  {
    "id": "ANE-Q-000001",
    "legacyId": 19001,
    "subjectId": "anesthesia",
    "subject": "Anesthesia",
    "topic": "General Anesthesia & Agents",
    "chapter": "Intravenous Anesthetic Agents",
    "level": "Moderate",
    "prompt": "A 45-year-old male with severe hemorrhagic shock is brought to the operating room for an emergency laparotomy. The anesthesiologist chooses an intravenous induction agent that provides cardiovascular stability but warns the surgical team that it may suppress adrenal steroidogenesis. Which of the following agents was administered?",
    "options": [
      "Propofol",
      "Ketamine",
      "Etomidate",
      "Thiopental"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Etomidate is a carboxylated imidazole derivative used for anesthetic induction.",
      "details": [
        "Etomidate is a carboxylated imidazole derivative used for anesthetic induction.",
        "Its primary advantage is excellent hemodynamic stability, making it the agent of choice in hemodynamically unstable patients or those with severe cardiovascular disease.",
        "However, it causes dose-dependent, reversible inhibition of the enzyme 11-beta-hydroxylase, leading to suppression of cortisol and aldosterone synthesis (adrenal suppression)."
      ],
      "ruleOut": [
        "Option A (Propofol): Propofol causes significant vasodilation and myocardial depression, leading to hypotension, which is contraindicated in severe hemorrhagic shock.",
        "Option B (Ketamine): Ketamine maintains hemodynamic stability via sympathetic stimulation but does not cause adrenal suppression; it is a good alternative for shock but not the agent described.",
        "Option D (Thiopental): Thiopental is a barbiturate that causes venodilation and negative inotropy, leading to profound hypotension in hypovolemic patients."
      ],
      "media": null
    },
    "tags": [
      "General Anesthesia & Agents",
      "Intravenous Anesthetic Agents"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "ANE-Q-000002",
    "legacyId": 19004,
    "subjectId": "anesthesia",
    "subject": "Anesthesia",
    "topic": "Resuscitation & ICU",
    "chapter": "Sedation in ICU",
    "level": "Moderate",
    "prompt": "A 28-year-old male with severe traumatic brain injury is sedated in the ICU with a high-dose propofol infusion for 72 hours. He suddenly develops unexplained severe metabolic acidosis, bradycardia progressing to asystole, rhabdomyolysis, and lipemic serum. What is the most likely pathophysiological mechanism underlying this lethal complication?",
    "options": [
      "Impaired mitochondrial fatty acid oxidation",
      "Massive histamine release causing anaphylactic shock",
      "Direct competitive inhibition of myocardial calcium channels",
      "Acute accumulation of toxic polyethylene glycol metabolites"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "The patient is presenting with Propofol Infusion Syndrome (PRIS), a rare but highly lethal complication associated with high-dose (>4 mg/kg/hr) and prolonged (>48 hours) propofol infusions.",
      "details": [
        "The patient is presenting with Propofol Infusion Syndrome (PRIS), a rare but highly lethal complication associated with high-dose (>4 mg/kg/hr) and prolonged (>48 hours) propofol infusions.",
        "The pathophysiology is primarily due to the impairment of mitochondrial oxidative phosphorylation and inhibition of free fatty acid entry into the mitochondria (via carnitine palmitoyltransferase).",
        "This causes an energy supply-demand mismatch leading to severe lactic acidosis, rhabdomyolysis, myocardial failure (refractory bradycardia), and lipemia."
      ],
      "ruleOut": [
        "Option B (Massive histamine release): Histamine release is associated with certain muscle relaxants (atracurium) and opioids (morphine), but not the hallmark of PRIS.",
        "Option C (Direct competitive inhibition of calcium channels): Propofol has mild calcium channel blocking effects causing vasodilation, but this does not explain the rhabdomyolysis and severe metabolic acidosis of PRIS.",
        "Option D (Acute accumulation of toxic polyethylene glycol): Lorazepam infusions (which contain propylene glycol as a solvent) can cause propylene glycol toxicity presenting with an osmolar gap and lactic acidosis, but rhabdomyolysis and lipemia are classic for PRIS."
      ],
      "media": null
    },
    "tags": [
      "Resuscitation & ICU",
      "Sedation in ICU"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "ANE-Q-000003",
    "legacyId": 19015,
    "subjectId": "anesthesia",
    "subject": "Anesthesia",
    "topic": "Local & Regional Anesthesia",
    "chapter": "Pharmacology of Local Anesthetics",
    "level": "Moderate",
    "prompt": "Local anesthetics are commonly injected to provide regional surgical anesthesia. Their primary mechanism of action involves blocking voltage-gated sodium channels. Which of the following best describes the state of the sodium channel that local anesthetics have the highest affinity for?",
    "options": [
      "Resting (closed) state",
      "Open and Inactivated states",
      "Deactivated state",
      "Repolarized state"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Local anesthetics bind to specific receptors on the intracellular portion of voltage-gated sodium channels.",
      "details": [
        "Local anesthetics bind to specific receptors on the intracellular portion of voltage-gated sodium channels.",
        "They exhibit 'use-dependent' or 'state-dependent' block, meaning they have the highest affinity for sodium channels that are in the Open (active) and Inactivated states.",
        "Channels in the resting state have a much lower affinity for the drug.",
        "This is why rapidly firing neurons (which spend more time in the open/inactivated states) are blocked more quickly than slowly firing neurons."
      ],
      "ruleOut": [
        "Option A (Resting state): Local anesthetics have the lowest affinity for channels in the resting (closed) state.",
        "Option C (Deactivated state): The deactivated state is effectively the resting state after repolarization, where drug affinity is low.",
        "Option D (Repolarized state): This refers to the membrane potential, not a specific channel state; the channels return to the resting state upon repolarization."
      ],
      "media": null
    },
    "tags": [
      "Local & Regional Anesthesia",
      "Pharmacology of Local Anesthetics"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "ANE-Q-000004",
    "legacyId": 19026,
    "subjectId": "anesthesia",
    "subject": "Anesthesia",
    "topic": "Anesthesia Equipment",
    "chapter": "Monitoring in Anesthesia",
    "level": "Easy",
    "prompt": "Immediately following endotracheal intubation of a patient in the operating room, the anesthesiologist looks at the capnograph monitor. The tracing shows a flat line with an end-tidal CO2 (ETCO2) reading of 0 mmHg over six consecutive mechanical breaths. Auscultation reveals gurgling sounds over the epigastrium. What is the most immediate action required?",
    "options": [
      "Administer intravenous epinephrine",
      "Increase the positive end-expiratory pressure (PEEP)",
      "Remove the endotracheal tube and ventilate with a bag-mask",
      "Order a stat portable chest X-ray to confirm tube depth"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Capnography (ETCO2 monitoring) is the gold standard for confirming endotracheal tube placement.",
      "details": [
        "Capnography (ETCO2 monitoring) is the gold standard for confirming endotracheal tube placement.",
        "A flat line (ETCO2 = 0) with absent waveforms after intubation signifies that no carbon dioxide is returning to the detector.",
        "Along with epigastric gurgling, this confirms an accidental esophageal intubation.",
        "The immediate, life-saving action is to remove the endotracheal tube, resume oxygenation via bag-valve-mask ventilation, and re-attempt intubation."
      ],
      "ruleOut": [
        "Option A (Administer epinephrine): Epinephrine is for cardiac arrest or anaphylaxis, not for a misplaced airway device.",
        "Option B (Increase PEEP): Increasing PEEP will only force more air into the stomach, increasing the risk of gastric distension, regurgitation, and aspiration.",
        "Option D (Order stat chest X-ray): Waiting for a chest X-ray will lead to severe, fatal hypoxic brain injury. Misplaced tubes must be recognized clinically and by capnography immediately."
      ],
      "media": null
    },
    "tags": [
      "Anesthesia Equipment",
      "Monitoring in Anesthesia"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "ANE-Q-000005",
    "legacyId": 19002,
    "subjectId": "anesthesia",
    "subject": "Anesthesia",
    "topic": "General Anesthesia & Agents",
    "chapter": "Intravenous Anesthetic Agents",
    "level": "Moderate",
    "prompt": "A 6-year-old child with severe asthma requires procedural sedation for closed reduction of a forearm fracture. The chosen agent provides profound analgesia and amnesia while producing a 'dissociative' state. During the procedure, the child's heart rate and blood pressure increase, and bronchodilation is noted. What is the primary mechanism of action of this anesthetic agent?",
    "options": [
      "Positive allosteric modulation of GABA-A receptors",
      "Antagonism of NMDA receptors",
      "Agonism of alpha-2 adrenergic receptors",
      "Inhibition of voltage-gated sodium channels"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "The clinical vignette describes Ketamine, a phencyclidine derivative that produces 'dissociative anesthesia' characterized by profound analgesia, amnesia, and a cataleptic state.",
      "details": [
        "The clinical vignette describes Ketamine, a phencyclidine derivative that produces 'dissociative anesthesia' characterized by profound analgesia, amnesia, and a cataleptic state.",
        "Its primary mechanism of action is non-competitive antagonism of the N-methyl-D-aspartate (NMDA) receptor.",
        "It uniquely stimulates the sympathetic nervous system (increasing HR and BP) and is a potent bronchodilator, making it an ideal agent for asthmatic patients."
      ],
      "ruleOut": [
        "Option A (Positive allosteric modulation of GABA-A receptors): This is the mechanism for most other IV anesthetics (Propofol, Thiopental, Etomidate), which cause respiratory depression and hypotension.",
        "Option C (Agonism of alpha-2 adrenergic receptors): This describes Dexmedetomidine, which provides sedation and analgesia but typically causes bradycardia and hypotension without a dissociative state.",
        "Option D (Inhibition of voltage-gated sodium channels): This is the mechanism of local anesthetics (e.g., Lidocaine), not systemic dissociative agents."
      ],
      "media": null
    },
    "tags": [
      "General Anesthesia & Agents",
      "Intravenous Anesthetic Agents"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "ANE-Q-000006",
    "legacyId": 19003,
    "subjectId": "anesthesia",
    "subject": "Anesthesia",
    "topic": "General Anesthesia & Agents",
    "chapter": "Intravenous Anesthetic Agents",
    "level": "Hard",
    "prompt": "A 32-year-old female with a history of acute intermittent porphyria (AIP) is scheduled for an elective cholecystectomy. Which of the following intravenous induction agents is absolutely contraindicated in this patient because it can precipitate a life-threatening acute porphyric crisis?",
    "options": [
      "Propofol",
      "Dexmedetomidine",
      "Ketamine",
      "Thiopental"
    ],
    "correctIndex": 3,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Thiopental (and other barbiturates) is absolutely contraindicated in patients with acute intermittent porphyria.",
      "details": [
        "Thiopental (and other barbiturates) is absolutely contraindicated in patients with acute intermittent porphyria.",
        "Barbiturates induce the enzyme delta-aminolevulinic acid (ALA) synthase, which is the rate-limiting enzyme in heme biosynthesis.",
        "In patients with partial deficiencies of downstream enzymes (like porphobilinogen deaminase in AIP), this induction leads to a massive accumulation of toxic porphyrin precursors (ALA and PBG), precipitating a life-threatening acute neurovisceral crisis."
      ],
      "ruleOut": [
        "Option A (Propofol): Propofol is considered safe and is widely used for induction and maintenance of anesthesia in patients with porphyria.",
        "Option B (Dexmedetomidine): Dexmedetomidine has not been shown to precipitate porphyric crises and is safe.",
        "Option C (Ketamine): Ketamine is considered safe in porphyric patients and does not induce ALA synthase."
      ],
      "media": null
    },
    "tags": [
      "General Anesthesia & Agents",
      "Intravenous Anesthetic Agents"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "ANE-Q-000007",
    "legacyId": 19005,
    "subjectId": "anesthesia",
    "subject": "Anesthesia",
    "topic": "General Anesthesia & Agents",
    "chapter": "Neuromuscular Blocking Agents",
    "level": "Easy",
    "prompt": "A 40-year-old male is scheduled for skin grafting 14 days after sustaining 45% total body surface area full-thickness burns. During rapid sequence intubation, the anesthesiologist avoids a specific neuromuscular blocking agent due to the risk of precipitating lethal cardiac arrest. The avoided drug belongs to which of the following classes?",
    "options": [
      "Depolarizing neuromuscular blocker",
      "Non-depolarizing benzylisoquinolinium",
      "Non-depolarizing aminosteroid",
      "Reversal agent for neuromuscular blockade"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Succinylcholine, a depolarizing neuromuscular blocker, is absolutely contraindicated in patients with extensive burns, crush injuries, major denervating spinal cord injuries, or severe myopathies after 48-72 hours post-injury.",
      "details": [
        "Succinylcholine, a depolarizing neuromuscular blocker, is absolutely contraindicated in patients with extensive burns, crush injuries, major denervating spinal cord injuries, or severe myopathies after 48-72 hours post-injury.",
        "These conditions cause an extrajunctional proliferation of fetal-type acetylcholine receptors.",
        "When succinylcholine binds to these upregulated receptors, it causes a massive, uncoordinated efflux of potassium from muscle cells, leading to severe hyperkalemia and lethal cardiac arrhythmias."
      ],
      "ruleOut": [
        "Option B (Non-depolarizing benzylisoquinolinium): Agents like atracurium or cisatracurium do not cause potassium efflux and are safe to use in burn patients.",
        "Option C (Non-depolarizing aminosteroid): Agents like rocuronium and vecuronium are competitive antagonists and do not cause depolarization or massive potassium release.",
        "Option D (Reversal agent): Sugammadex or Neostigmine are reversal agents; they do not cause hyperkalemic cardiac arrest in burn patients."
      ],
      "media": null
    },
    "tags": [
      "General Anesthesia & Agents",
      "Neuromuscular Blocking Agents"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "ANE-Q-000008",
    "legacyId": 19006,
    "subjectId": "anesthesia",
    "subject": "Anesthesia",
    "topic": "General Anesthesia & Agents",
    "chapter": "Neuromuscular Blocking Agents",
    "level": "Easy",
    "prompt": "At the conclusion of a complex bariatric surgery, the anesthesiologist administers Sugammadex to rapidly reverse profound neuromuscular blockade. Which of the following muscle relaxants is specifically targeted and encapsulated by Sugammadex?",
    "options": [
      "Succinylcholine",
      "Atracurium",
      "Rocuronium",
      "Mivacurium"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Sugammadex is a modified gamma-cyclodextrin that selectively encapsulates and forms a tight, biologically inactive complex with steroidal non-depolarizing neuromuscular blocking agents, particularly Rocuronium and Vecuronium.",
      "details": [
        "Sugammadex is a modified gamma-cyclodextrin that selectively encapsulates and forms a tight, biologically inactive complex with steroidal non-depolarizing neuromuscular blocking agents, particularly Rocuronium and Vecuronium.",
        "By drastically reducing the free plasma concentration of the relaxant, it creates a concentration gradient that rapidly pulls the drug away from the neuromuscular junction, leading to rapid and complete reversal regardless of the depth of blockade."
      ],
      "ruleOut": [
        "Option A (Succinylcholine): Succinylcholine is a depolarizing agent degraded by plasma pseudocholinesterase; Sugammadex has no effect on it.",
        "Option B (Atracurium): Atracurium is a benzylisoquinolinium compound. Sugammadex is structurally incapable of binding benzylisoquinoliniums.",
        "Option D (Mivacurium): Mivacurium is also a benzylisoquinolinium (short-acting) and cannot be reversed by Sugammadex."
      ],
      "media": null
    },
    "tags": [
      "General Anesthesia & Agents",
      "Neuromuscular Blocking Agents"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "ANE-Q-000009",
    "legacyId": 19007,
    "subjectId": "anesthesia",
    "subject": "Anesthesia",
    "topic": "General Anesthesia & Agents",
    "chapter": "Neuromuscular Blocking Agents",
    "level": "Moderate",
    "prompt": "A 65-year-old female with end-stage renal disease and severe hepatic cirrhosis requires general anesthesia for an emergency laparotomy. Which of the following neuromuscular blocking agents is the most appropriate choice for maintaining muscle relaxation in this patient?",
    "options": [
      "Pancuronium",
      "Rocuronium",
      "Vecuronium",
      "Cisatracurium"
    ],
    "correctIndex": 3,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Cisatracurium is the ideal non-depolarizing neuromuscular blocking agent for patients with severe hepatic and/or renal dysfunction.",
      "details": [
        "Cisatracurium is the ideal non-depolarizing neuromuscular blocking agent for patients with severe hepatic and/or renal dysfunction.",
        "It undergoes organ-independent degradation in the plasma via Hofmann elimination (a non-enzymatic, spontaneous chemical breakdown dependent strictly on physiological pH and body temperature).",
        "Therefore, its duration of action is not prolonged in renal or hepatic failure."
      ],
      "ruleOut": [
        "Option A (Pancuronium): Pancuronium is heavily dependent on renal excretion (up to 80%); its use in end-stage renal disease leads to dramatically prolonged paralysis.",
        "Option B (Rocuronium): Rocuronium is primarily eliminated via the liver and biliary system. Liver cirrhosis will significantly prolong its half-life.",
        "Option C (Vecuronium): Vecuronium relies on both hepatic metabolism and renal excretion, making it suboptimal in a patient with combined hepatorenal failure."
      ],
      "media": null
    },
    "tags": [
      "General Anesthesia & Agents",
      "Neuromuscular Blocking Agents"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "ANE-Q-000010",
    "legacyId": 19008,
    "subjectId": "anesthesia",
    "subject": "Anesthesia",
    "topic": "General Anesthesia & Agents",
    "chapter": "Complications of Anesthesia",
    "level": "Hard",
    "prompt": "Ten minutes after the administration of succinylcholine and halothane for an appendectomy, a 15-year-old boy develops jaw muscle rigidity, a sudden and rapid rise in end-tidal CO2 (ETCO2), and tachycardia. His core temperature quickly rises to 39.5°C. Arterial blood gas shows severe mixed metabolic and respiratory acidosis. The drug of choice for treating this life-threatening condition acts by which of the following mechanisms?",
    "options": [
      "Inhibiting the ryanodine receptor (RYR1) to decrease sarcoplasmic calcium release",
      "Competitively antagonizing at the motor end plate",
      "Chelating intracellular calcium to prevent muscle contraction",
      "Activating central alpha-2 receptors to reduce sympathetic outflow"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "The patient is experiencing Malignant Hyperthermia (MH), a pharmacogenetic hypermetabolic crisis triggered by volatile anesthetics (e.g., halothane) and/or succinylcholine.",
      "details": [
        "The patient is experiencing Malignant Hyperthermia (MH), a pharmacogenetic hypermetabolic crisis triggered by volatile anesthetics (e.g., halothane) and/or succinylcholine.",
        "The earliest sign is a rapid rise in ETCO2, followed by rigidity (often masseter spasm), tachycardia, and hyperthermia.",
        "It is due to a mutation in the Ryanodine receptor (RYR1) causing uncontrolled calcium release from the sarcoplasmic reticulum.",
        "The life-saving antidote is Dantrolene, which binds directly to the RYR1 receptor and inhibits further calcium release into the myoplasm, halting the hypermetabolic cascade."
      ],
      "ruleOut": [
        "Option B (Competitively antagonizing at the motor end plate): This describes non-depolarizing muscle relaxants (e.g., rocuronium). They do not reverse the intracellular calcium defect of MH.",
        "Option C (Chelating intracellular calcium): Dantrolene does not chelate calcium; it blocks its release channel. Calcium chelation acts in the plasma, not selectively in the myoplasm.",
        "Option D (Activating central alpha-2 receptors): This describes dexmedetomidine, which provides sedation but has no efficacy in treating the peripheral intracellular defect of MH."
      ],
      "media": null
    },
    "tags": [
      "General Anesthesia & Agents",
      "Complications of Anesthesia"
    ],
    "reviewStatus": "legacy-sample-unverified"
  }
];
