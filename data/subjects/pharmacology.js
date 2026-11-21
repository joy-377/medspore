// MedSpore modular subject question bank. Exactly ten legacy sample MCQs.
export default [
  {
    "id": "PHA-Q-000001",
    "legacyId": 5001,
    "subjectId": "pharmacology",
    "subject": "Pharmacology",
    "topic": "General Pharmacology",
    "chapter": "Pharmacokinetics: Volume of Distribution",
    "level": "Moderate",
    "prompt": "A 65-year-old male weighing 70 kg is brought to the emergency department with acute ventricular tachycardia. The attending physician decides to administer a loading dose of an antiarrhythmic drug to achieve an immediate target plasma concentration of 4 mg/L. The drug has an apparent volume of distribution (Vd) of 2 L/kg and a bioavailability of 100% when given intravenously. What is the calculated intravenous loading dose required for this patient?",
    "options": [
      "140 mg",
      "280 mg",
      "560 mg",
      "1120 mg"
    ],
    "correctIndex": 2,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "The loading dose (LD) of a drug is calculated using the formula: Loading Dose = (Target Plasma Concentration × Volume of Distribution) / Bioavailability (F).",
      "details": [
        "The loading dose (LD) of a drug is calculated using the formula: Loading Dose = (Target Plasma Concentration × Volume of Distribution) / Bioavailability (F).",
        "For intravenous administration, F = 1.0 (100%).",
        "The patient's total volume of distribution is Vd = 2 L/kg × 70 kg = 140 L.",
        "Substituting the values: LD = (4 mg/L × 140 L) / 1.0 = 560 mg.",
        "Loading doses are designed to rapidly achieve the desired therapeutic steady-state concentration without having to wait for 4 to 5 half-lives."
      ],
      "ruleOut": [
        "Option A (140 mg): This value represents only the total volume of distribution in liters (70 kg × 2 L/kg = 140 L), omitting multiplication by the target plasma concentration.",
        "Option B (280 mg): This represents an error where the target plasma concentration is multiplied only by the weight-based Vd (4 mg/L × 70 kg = 280 mg), failing to incorporate the distribution volume of 2 L/kg.",
        "Option D (1120 mg): This represents a mathematical doubling of the correct dose, which would result in toxic supratherapeutic plasma levels (8 mg/L)."
      ],
      "media": null
    },
    "tags": [
      "General Pharmacology",
      "Pharmacokinetics: Volume of Distribution"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHA-Q-000002",
    "legacyId": 5007,
    "subjectId": "pharmacology",
    "subject": "Pharmacology",
    "topic": "Autonomic Nervous System",
    "chapter": "Cholinergic System: Organophosphate Toxicity",
    "level": "Easy",
    "prompt": "A 35-year-old agricultural laborer is rushed to the emergency department unconscious, profusely diaphoretic, salivating, and wheezing. Physical examination reveals pinpoint pupils (miosis), generalized muscle fasciculations, bradycardia (HR 42 bpm), and involuntary urination and defecation. Following stabilization of the airway and administration of atropine, which specific pharmacological agent should be administered to regenerate acetylcholinesterase at the neuromuscular junction?",
    "options": [
      "Physostigmine",
      "Pralidoxime (2-PAM)",
      "Neostigmine",
      "Edrophonium"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Organophosphates irreversibly phosphorylate the serine hydroxyl group at the esteratic site of acetylcholinesterase, leading to massive synaptic accumulation of acetylcholine.",
      "details": [
        "Organophosphates irreversibly phosphorylate the serine hydroxyl group at the esteratic site of acetylcholinesterase, leading to massive synaptic accumulation of acetylcholine.",
        "While atropine competitively blocks muscarinic receptors (relieving miosis, bronchorrhea, bradycardia, and salivation), it has zero effect at nicotinic neuromuscular junctions.",
        "Pralidoxime (2-PAM) is a cholinesterase reactivator with an oxime moiety that binds the anionic site of phosphorylated cholinesterase, generates a high-affinity nucleophilic attack on the phosphate group, and removes it, thereby regenerating active acetylcholinesterase and reversing nicotinic paralysis and fasciculations before irreversible 'aging' of the enzyme occurs."
      ],
      "ruleOut": [
        "Option A (Physostigmine): Physostigmine is a tertiary amine anticholinesterase used to treat anticholinergic poisoning (e.g., atropine overdose); giving it in organophosphate toxicity would compound cholinergic catastrophe.",
        "Option C (Neostigmine): Neostigmine is another acetylcholinesterase inhibitor used in myasthenia gravis, which would exacerbate organophosphate poisoning.",
        "Option D (Edrophonium): Edrophonium is a short-acting competitive cholinesterase inhibitor historically used in the Tensilon test, contraindicated here."
      ],
      "media": null
    },
    "tags": [
      "Autonomic Nervous System",
      "Cholinergic System: Organophosphate Toxicity"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHA-Q-000003",
    "legacyId": 5013,
    "subjectId": "pharmacology",
    "subject": "Pharmacology",
    "topic": "Central Nervous System",
    "chapter": "Antiepileptic Drugs: Status Epilepticus",
    "level": "Easy",
    "prompt": "A 19-year-old male is brought to the emergency department actively convulsing in generalized tonic-clonic status epilepticus lasting 15 minutes. Following airway assessment and oxygenation, what is the initial first-line pharmacological treatment of choice, and what is its cellular mechanism of action?",
    "options": [
      "Intravenous Phenytoin; Voltage-gated potassium channel activation",
      "Intravenous Lorazepam; Allosteric potentiation of GABAA receptor chloride conductance",
      "Intravenous Valproate; Blockade of low-threshold T-type calcium channels",
      "Intravenous Levetiracetam; Inhibition of synaptic vesicle protein SV2A"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "The first-line therapy for terminating active convulsive status epilepticus is an intravenous benzodiazepine—specifically Lorazepam (0.1 mg/kg IV) or Diazepam (or IM Midazolam if IV access is unavailable).",
      "details": [
        "The first-line therapy for terminating active convulsive status epilepticus is an intravenous benzodiazepine—specifically Lorazepam (0.1 mg/kg IV) or Diazepam (or IM Midazolam if IV access is unavailable).",
        "Benzodiazepines bind allosterically to the GABAA receptor complex at the interface of alpha and gamma subunits.",
        "This binding increases the FREQUENCY of opening of the intrinsic chloride ion channel in response to GABA, leading to chloride influx, hyperpolarization of the neuronal postsynaptic membrane, and rapid suppression of epileptogenic bursting."
      ],
      "ruleOut": [
        "Option A (Intravenous Phenytoin; Voltage-gated potassium channel activation): Phenytoin blocks voltage-gated Na+ channels and is used as second-line therapy after benzodiazepines, not as the immediate initial agent.",
        "Option C (Intravenous Valproate; Blockade of T-type calcium channels): Valproate is a broad-spectrum second-line agent for status epilepticus, but benzodiazepines are mandatory first-line drugs.",
        "Option D (Intravenous Levetiracetam; Inhibition of SV2A): Levetiracetam binds SV2A to inhibit glutamate exocytosis; it is an excellent second-line agent administered concurrently or immediately following benzodiazepine cessation."
      ],
      "media": null
    },
    "tags": [
      "Central Nervous System",
      "Antiepileptic Drugs: Status Epilepticus"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHA-Q-000004",
    "legacyId": 5019,
    "subjectId": "pharmacology",
    "subject": "Pharmacology",
    "topic": "Cardiovascular Drugs",
    "chapter": "Heart Failure: Sacubitril/Valsartan (ARNI)",
    "level": "Moderate",
    "prompt": "A 62-year-old male with Heart Failure with reduced Ejection Fraction (HFrEF; LVEF 28%, NYHA Class III) is switched from enalapril to Sacubitril/Valsartan. The cardiologist mandates a strict 36-hour washout period between the last dose of enalapril and the first dose of sacubitril/valsartan. What is the critical pharmacological rationale for this mandatory washout period?",
    "options": [
      "Preventing severe hyperkalemia due to additive aldosterone receptor inhibition",
      "Preventing life-threatening angioedema caused by dual inhibition of bradykinin degradation",
      "Allowing restoration of renal neutral endopeptidase enzymes to prevent acute tubular necrosis",
      "Preventing acute profound refractory hypotension from synergistic cGMP synthesis"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Sacubitril is a prodrug that is metabolized to LBQ657, an inhibitor of Neprilysin (neutral endopeptidase).",
      "details": [
        "Sacubitril is a prodrug that is metabolized to LBQ657, an inhibitor of Neprilysin (neutral endopeptidase).",
        "Neprilysin degrades beneficial vasoactive peptides including Natriuretic Peptides (ANP, BNP), Bradykinin, and Adrenomedullin.",
        "Angiotensin-Converting Enzyme (ACE, kininase II) is also the primary enzyme responsible for the metabolic breakdown of Bradykinin.",
        "If an ACE inhibitor (like enalapril) and a neprilysin inhibitor (sacubitril) are administered concurrently without a 36-hour washout period, dual inhibition of bradykinin breakdown leads to massive bradykinin accumulation, triggering fatal angioedema.",
        "Because Angiotensin Receptor Blockers (ARBs like valsartan) do not inhibit bradykinin breakdown, valsartan is safely combined with sacubitril."
      ],
      "ruleOut": [
        "Option A (Preventing severe hyperkalemia...): While both drugs conserve potassium, hyperkalemia can be monitored and managed; it is not the reason for the strict 36-hour washout rule.",
        "Option C (Allowing restoration of renal neutral endopeptidase...): Neprilysin inhibition is the deliberate therapeutic goal to enhance natriuresis, not a toxic process causing acute tubular necrosis.",
        "Option D (Preventing acute profound hypotension...): While blood pressure must be monitored, hypotension does not necessitate a 36-hour clearance window; the risk of fatal asphyxiation from angioedema is the sole driver."
      ],
      "media": null
    },
    "tags": [
      "Cardiovascular Drugs",
      "Heart Failure: Sacubitril/Valsartan (ARNI)"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHA-Q-000005",
    "legacyId": 5025,
    "subjectId": "pharmacology",
    "subject": "Pharmacology",
    "topic": "Renal & Diuretics",
    "chapter": "Diuretics: Calcium Handling (Loop vs Thiazide)",
    "level": "Easy",
    "prompt": "A 56-year-old male with chronic recurrent calcium oxalate kidney stones (nephrolithiasis) and mild hypertension is evaluated for pharmacological therapy to reduce urinary calcium excretion. Simultaneously, an adjacent patient in the ward has severe acute hypercalcemia of malignancy requiring forced diuresis. Which classes of diuretics are indicated for hypercalciuria with stones and acute hypercalcemic crisis, respectively?",
    "options": [
      "Loop diuretics for recurrent stones; Thiazide diuretics for hypercalcemic crisis",
      "Thiazide diuretics for recurrent stones; Loop diuretics for hypercalcemic crisis",
      "Potassium-sparing diuretics for recurrent stones; Carbonic anhydrase inhibitors for hypercalcemic crisis",
      "Osmotic diuretics for recurrent stones; Thiazide diuretics for hypercalcemic crisis"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Thiazides and Loop diuretics have opposing effects on renal calcium excretion ('Loops Lose Calcium, Thiazides Take it In'): (1) Thiazide diuretics (e.g., Chlorthalidone) inhibit apical Na+/Cl- cotransporters in the DCT, lowering…",
      "details": [
        "Thiazides and Loop diuretics have opposing effects on renal calcium excretion ('Loops Lose Calcium, Thiazides Take it In'): (1) Thiazide diuretics (e.g., Chlorthalidone) inhibit apical Na+/Cl- cotransporters in the DCT, lowering intracellular Na+, which hyper-activates the basolateral Na+/Ca2+ exchanger (NCX) to increase transcellular calcium reabsorption into blood.",
        "By lowering urinary calcium (hypocalciuria), thiazides prevent calcium stone recurrence.",
        "(2) Loop diuretics (e.g., Furosemide) inhibit the luminal NKCC2 cotransporter in the thick ascending limb, abolishing the lumen-positive transepithelial potential difference (+8 to +10 mV) that normally drives paracellular reabsorption of Ca2+ and Mg2+.",
        "This promotes rapid calciuresis, making loop diuretics (with IV saline) ideal for acute hypercalcemia."
      ],
      "ruleOut": [
        "Option A (Loop diuretics for recurrent stones; Thiazides for hypercalcemia): Loop diuretics increase urinary calcium excretion and would dramatically worsen nephrolithiasis; thiazides elevate serum calcium and would worsen hypercalcemic crisis.",
        "Option C (Potassium-sparing diuretics...): Amiloride or spironolactone do not have the potent hypocalciuric efficacy of thiazides, and acetazolamide does not promote rapid calciuresis.",
        "Option D (Osmotic diuretics...): Mannitol does not selectively enhance calcium excretion compared to loop diuretics."
      ],
      "media": null
    },
    "tags": [
      "Renal & Diuretics",
      "Diuretics: Calcium Handling (Loop vs Thiazide)"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHA-Q-000006",
    "legacyId": 5030,
    "subjectId": "pharmacology",
    "subject": "Pharmacology",
    "topic": "Blood & Inflammation",
    "chapter": "Anticoagulants: Heparin-Induced Thrombocytopenia (HIT)",
    "level": "Moderate",
    "prompt": "A 62-year-old female receiving unfractionated heparin following orthopedic surgery exhibits a 55% drop in platelet count on postoperative day 7 (from 240,000/mm³ to 105,000/mm³), accompanied by acute pain and swelling of the left calf confirmed as a deep vein thrombosis. Heparin-Induced Thrombocytopenia (HIT Type II) is diagnosed. What is the immediate management strategy, and which anticoagulant should be initiated?",
    "options": [
      "Switch immediately to Low-Molecular-Weight Heparin (Enoxaparin)",
      "Discontinue all heparin products immediately and initiate a Direct Thrombin Inhibitor such as Argatroban",
      "Stop heparin and immediately initiate full-dose Warfarin monotherapy",
      "Administer intravenous platelet transfusions followed by high-dose Aspirin"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "HIT Type II is an immune-mediated prothrombotic emergency caused by IgG antibodies directed against complexes of Platelet Factor 4 (PF4) and Heparin.",
      "details": [
        "HIT Type II is an immune-mediated prothrombotic emergency caused by IgG antibodies directed against complexes of Platelet Factor 4 (PF4) and Heparin.",
        "The Fc portions of these antibodies cross-link Fc-gamma-RIIa receptors on platelets, triggering widespread platelet activation, consumption (thrombocytopenia), and paradoxical arterial/venous thrombosis.",
        "Immediate management requires complete cessation of all heparin products (including flushes).",
        "Low-molecular-weight heparins exhibit >90% cross-reactivity with HIT antibodies and are strictly contraindicated.",
        "The drug of choice is a parenteral direct thrombin inhibitor (DTI) that does not cross-react with HIT antibodies, such as Argatroban (hepatically cleared) or Bivalirudin."
      ],
      "ruleOut": [
        "Option A (Switch immediately to Low-Molecular-Weight Heparin): LMWHs cross-react strongly with PF4-heparin antibodies and will exacerbate platelet activation and thrombosis.",
        "Option C (Stop heparin and initiate full-dose Warfarin monotherapy): Warfarin is strictly CONTRAINDICATED in acute HIT; it rapidly depletes Protein C while procoagulant factors persist, precipitating microvascular thrombosis and warfarin-induced skin necrosis.",
        "Option D (Administer IV platelet transfusions...): Platelet transfusions are contraindicated in HIT as they provide additional substrate for antibody-mediated activation, 'adding fuel to the fire'."
      ],
      "media": null
    },
    "tags": [
      "Blood & Inflammation",
      "Anticoagulants: Heparin-Induced Thrombocytopenia (HIT)"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHA-Q-000007",
    "legacyId": 5036,
    "subjectId": "pharmacology",
    "subject": "Pharmacology",
    "topic": "Endocrine Pharmacology",
    "chapter": "Antidiabetic Drugs: Metformin & Lactic Acidosis",
    "level": "Easy",
    "prompt": "A 64-year-old male with long-standing type 2 diabetes mellitus is admitted for a severe acute pyelonephritis with septic shock. His blood pressure is 85/50 mmHg, serum creatinine has risen acutely from 1.1 to 3.2 mg/dL, and his estimated GFR is 18 mL/min/1.73m². His home antidiabetic regimen includes Metformin 1000 mg twice daily. Why must metformin be immediately withheld in this clinical scenario?",
    "options": [
      "Metformin directly stimulates pancreatic beta cells, causing fatal refractory hypoglycemia",
      "Impaired renal clearance and tissue hypoperfusion dramatically increase the risk of fatal Lactic Acidosis",
      "Metformin chelates broad-spectrum beta-lactam antibiotics, rendering them completely inactive",
      "Metformin induces severe osmotic diuresis, compounding septic shock hypovolemia"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Metformin is a biguanide that lowers blood glucose primarily by activating AMP-activated protein kinase (AMPK) in hepatocytes, which suppresses hepatic gluconeogenesis and lipogenesis while increasing peripheral insulin sensitivity.",
      "details": [
        "Metformin is a biguanide that lowers blood glucose primarily by activating AMP-activated protein kinase (AMPK) in hepatocytes, which suppresses hepatic gluconeogenesis and lipogenesis while increasing peripheral insulin sensitivity.",
        "Gluconeogenesis utilizes lactate as a major substrate.",
        "In conditions with tissue hypoperfusion, sepsis, or renal impairment, lactate accumulates systemically.",
        "Metformin is eliminated entirely unchanged by the kidneys via glomerular filtration and tubular secretion.",
        "In acute kidney injury (or eGFR < 30 mL/min/1.73m²), metformin accumulates to toxic levels, inhibiting mitochondrial complex I of the respiratory chain.",
        "This shifts cellular metabolism toward anaerobic glycolysis, resulting in Metformin-Associated Lactic Acidosis (MALA), a life-threatening emergency with high mortality."
      ],
      "ruleOut": [
        "Option A (Metformin directly stimulates beta cells...): Metformin is an euglycemic/antihyperglycemic agent that does NOT stimulate insulin release; it carries virtually zero risk of hypoglycemia when used as monotherapy.",
        "Option C (Metformin chelates broad-spectrum antibiotics...): Metformin does not chelate beta-lactams or aminoglycosides.",
        "Option D (Metformin induces severe osmotic diuresis...): Osmotic diuresis is a property of SGLT2 inhibitors or uncontrolled hyperglycemia, not metformin."
      ],
      "media": null
    },
    "tags": [
      "Endocrine Pharmacology",
      "Antidiabetic Drugs: Metformin & Lactic Acidosis"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHA-Q-000008",
    "legacyId": 5042,
    "subjectId": "pharmacology",
    "subject": "Pharmacology",
    "topic": "Antimicrobials",
    "chapter": "Glycopeptides: Vancomycin & Infusion Reactions",
    "level": "Easy",
    "prompt": "A 32-year-old male with severe MRSA bacteremia is receiving his initial dose of intravenous Vancomycin (1 g infused rapidly over 15 minutes). Mid-infusion, he develops dramatic flushing, an erythematous pruritic maculopapular rash over his face, neck, and upper torso, accompanied by mild hypotension. His vitals are HR 105 bpm, BP 90/60 mmHg, with no laryngeal edema or wheezing. What is the mechanism of this adverse reaction ('Red Man Syndrome'), and how is it managed?",
    "options": [
      "IgE-mediated type I hypersensitivity reaction; Administer intramuscular epinephrine immediately",
      "Rate-dependent direct non-immunologic mast cell degranulation and histamine release; Slow the infusion rate to ≥60 minutes and administer antihistamines",
      "Type IV delayed-type hypersensitivity with epidermal necrolysis; Permanently discontinue all glycopeptide antibiotics",
      "Complement-mediated immune complex deposition in dermal capillaries; Administer intravenous methylprednisolone"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Vancomycin Infusion Reaction (formerly known as 'Red Man Syndrome') is a classic rate-dependent adverse drug reaction, NOT an IgE-mediated allergic response.",
      "details": [
        "Vancomycin Infusion Reaction (formerly known as 'Red Man Syndrome') is a classic rate-dependent adverse drug reaction, NOT an IgE-mediated allergic response.",
        "Rapid intravenous administration of vancomycin triggers direct, non-immune degranulation of mast cells and basophils, releasing large amounts of preformed histamine into the systemic circulation.",
        "This results in profound cutaneous vasodilation, flushing of the upper body ('red neck/red man'), pruritus, and transient hypotension.",
        "The definitive management is to halt or slow the infusion rate to a minimum of 60 minutes (or ≤10 mg/min), dilute the infusion volume, and administer H1/H2 antihistamines.",
        "The patient can safely receive vancomycin in the future with proper infusion rates."
      ],
      "ruleOut": [
        "Option A (IgE-mediated type I hypersensitivity; IM epinephrine): True vancomycin anaphylaxis is exceptionally rare; true anaphylaxis involves IgE, produces bronchospasm/stridor, and precludes further vancomycin use.",
        "Option C (Type IV delayed hypersensitivity...): This describes DRESS syndrome or Stevens-Johnson syndrome, which occur days to weeks into therapy, not within minutes of rapid infusion.",
        "Option D (Complement-mediated immune complex deposition): This describes serum sickness (type III hypersensitivity), which presents with fever, arthritis, and nephritis 7–10 days later."
      ],
      "media": null
    },
    "tags": [
      "Antimicrobials",
      "Glycopeptides: Vancomycin & Infusion Reactions"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHA-Q-000009",
    "legacyId": 5048,
    "subjectId": "pharmacology",
    "subject": "Pharmacology",
    "topic": "Chemotherapy & Anticancer",
    "chapter": "Cytotoxic Antibiotics: Anthracyclines & Cardioprotection",
    "level": "Easy",
    "prompt": "A 52-year-old woman with invasive ductal breast cancer undergoes adjuvant chemotherapy with Doxorubicin and Cyclophosphamide. The oncologist strictly tracks her cumulative lifetime dose of doxorubicin to not exceed 450-550 mg/m². What type of cardiotoxicity is associated with anthracyclines, and what pharmacological chelating agent can be administered to mitigate this risk in high-dose therapy?",
    "options": [
      "Dilated cardiomyopathy and congestive heart failure; Dexrazoxane",
      "Constrictive pericarditis; Amifostine",
      "Hypertrophic cardiomyopathy; Leucovorin",
      "Acute coronary vasospasm; Mesna"
    ],
    "correctIndex": 0,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Anthracyclines (Doxorubicin, Daunorubicin) intercalate between DNA base pairs and inhibit Topoisomerase II.",
      "details": [
        "Anthracyclines (Doxorubicin, Daunorubicin) intercalate between DNA base pairs and inhibit Topoisomerase II.",
        "Their major dose-limiting adverse effect is cumulative, dose-dependent cardiotoxicity, leading to irreversible Dilated Cardiomyopathy and congestive heart failure.",
        "Inside cardiac myocytes, doxorubicin complexes with intracellular iron (Fe3+) to generate massive amounts of toxic superoxide and hydroxyl free radicals; cardiac tissue is uniquely vulnerable because it has low levels of protective catalase.",
        "Dexrazoxane is an intracellular iron-chelating agent that hydrolyzes into an EDTA-like ring-opened molecule, preventing iron-anthracycline free-radical generation and dramatically reducing cardiotoxicity."
      ],
      "ruleOut": [
        "Option B (Constrictive pericarditis; Amifostine): Anthracyclines cause myocardial myofibrillar drop-out and chamber dilation, not pericarditis; Amifostine is a free-radical scavenger used to prevent cisplatin nephrotoxicity.",
        "Option C (Hypertrophic cardiomyopathy; Leucovorin): Anthracyclines cause dilated, not hypertrophic, cardiomyopathy; Leucovorin (folinic acid) rescues cells from methotrexate toxicity.",
        "Option D (Acute coronary vasospasm; Mesna): Coronary vasospasm is characteristic of 5-Fluorouracil (5-FU); Mesna protects against cyclophosphamide/ifosfamide hemorrhagic cystitis."
      ],
      "media": null
    },
    "tags": [
      "Chemotherapy & Anticancer",
      "Cytotoxic Antibiotics: Anthracyclines & Cardioprotection"
    ],
    "reviewStatus": "legacy-sample-unverified"
  },
  {
    "id": "PHA-Q-000010",
    "legacyId": 5002,
    "subjectId": "pharmacology",
    "subject": "Pharmacology",
    "topic": "General Pharmacology",
    "chapter": "Pharmacokinetics: Elimination Kinetics",
    "level": "Easy",
    "prompt": "A 24-year-old male presents to the emergency department following an acute overdose of ethanol. His initial blood alcohol concentration is 200 mg/dL. Three hours later, repeat testing shows a concentration of 155 mg/dL, and six hours after admission, it is 110 mg/dL. This pattern of a constant amount of drug being eliminated per unit of time regardless of plasma concentration is characteristic of which type of elimination kinetics?",
    "options": [
      "First-order kinetics",
      "Zero-order kinetics",
      "Michaelis-Menten fractional clearance",
      "Substrate-independent exponential decay"
    ],
    "correctIndex": 1,
    "questionType": "single",
    "media": null,
    "explanation": {
      "quick": "Zero-order (capacity-limited or saturation) kinetics occurs when the metabolic enzymes or transport systems responsible for drug clearance become fully saturated at therapeutic or supratherapeutic concentrations.",
      "details": [
        "Zero-order (capacity-limited or saturation) kinetics occurs when the metabolic enzymes or transport systems responsible for drug clearance become fully saturated at therapeutic or supratherapeutic concentrations.",
        "Consequently, a constant absolute AMOUNT of drug is eliminated per unit time, meaning clearance is variable and the half-life is not constant (it increases with dose).",
        "Classic high-yield drugs exhibiting zero-order kinetics at clinical or toxic levels include Ethanol, Phenytoin, High-dose Salicylates (Aspirin), and Theophylline (mnemonic: 'PEAS' or 'THE Pits')."
      ],
      "ruleOut": [
        "Option A (First-order kinetics): In first-order kinetics, a constant FRACTION (or percentage) of the drug is eliminated per unit time; clearance and half-life remain constant as the elimination rate is proportional to plasma concentration.",
        "Option C (Michaelis-Menten fractional clearance): While Michaelis-Menten kinetics underlies the transition between first- and zero-order processes, the steady state where rate of elimination is fixed is specifically defined as zero-order kinetics.",
        "Option D (Substrate-independent exponential decay): Exponential decay is the hallmark of first-order kinetics, where concentrations decline logarithmically rather than linearly."
      ],
      "media": null
    },
    "tags": [
      "General Pharmacology",
      "Pharmacokinetics: Elimination Kinetics"
    ],
    "reviewStatus": "legacy-sample-unverified"
  }
];
