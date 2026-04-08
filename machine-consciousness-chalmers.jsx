import { useState, useEffect, useRef, useCallback } from "react";

const POSITIONS = [
  {
    id: "type-a",
    name: "Type-A Materialism",
    subtitle: "Dennett · Frankish · Lewis · Ryle · Armstrong",
    color: "#4A3728",
    answers: [0, 1, 1, 1, 0.5, 0, 0],
    systemsAnswers: [0.5, 1, 0, 1, 0, 0.5],
    summary: "No epistemic gap exists between physical and phenomenal truths. Explaining functional and behavioral capacities explains everything. Zombies are incoherent; Mary learns no new propositional fact. Includes eliminativism (which denies phenomenal consciousness exists) and analytic functionalism (which accepts it but identifies it with functional organization). Chalmers classifies any view that denies a residual explanatory gap as Type-A.",
    cluster: [
      {
        name: "Eliminativism / Illusionism",
        authors: "Churchland, Dennett, Frankish",
        note: "Phenomenal consciousness as naively conceived does not exist. The meta-problem replaces the hard problem. Eliminativism says the folk vocabulary is bad science; illusionism says there is a systematic self-misrepresentation."
      },
      {
        name: "Analytic Functionalism / Behaviorism",
        authors: "Lewis, Ryle, Armstrong",
        note: "Mental state terms are analytically definable in functional terms. 'Pain' means whatever plays the pain-role. Zombies involve conceptual confusion: a system playing all functional roles IS conscious by definition."
      },
      {
        name: "Higher-Order Theories (Type-A reading)",
        authors: "Rosenthal, Lycan",
        note: "A state is conscious when targeted by a higher-order representation. Can be Type-A if there is held to be no further explanandum beyond the higher-order relation."
      },
      {
        name: "Global Workspace Theory (Type-A reading)",
        authors: "Baars, Dehaene",
        note: "Consciousness is global broadcast. As Type-A, this takes broadcast to exhaust what needs explaining."
      }
    ],
    children: [],
    sources: [
      "Dennett, D. (1991). Consciousness Explained. Little, Brown.",
      "Frankish, K. (2016). 'Illusionism as a Theory of Consciousness.' Journal of Consciousness Studies 23.",
      "Lewis, D. (1966). 'An Argument for the Identity Theory.' Journal of Philosophy 63.",
      "Ryle, G. (1949). The Concept of Mind. Hutchinson.",
      "Baars, B. (1988). A Cognitive Theory of Consciousness. Cambridge University Press.",
      "Rosenthal, D. (2005). Consciousness and Mind. Oxford University Press.",
      "Chalmers, D. (2003). 'Consciousness and its Place in Nature.' Blackwell Guide to Philosophy of Mind."
    ],
    explanations: [
      {
        text: "No. There is no epistemic gap. Zombies are conceptually incoherent: a being duplicating all functional roles satisfies every requirement for consciousness. Mary learns no new propositional fact — only a new ability. The hard problem dissolves into the easy problems.",
        cite: "Dennett (1991); Lewis (1966, 1988); Frankish (2016)."
      },
      {
        text: "No. Consciousness is physical — identical to or constituted by functional organization. The conceivability argument fails at the first step.",
        cite: "Lewis (1972); Dennett (1991)."
      },
      {
        text: "Yes. The physical world is causally closed. There is no non-physical consciousness competing for causal credit.",
        cite: "Lewis (1966); Dennett (1991)."
      },
      {
        text: "Yes, trivially. Consciousness IS functional organization, which is physical. Mental causation just is physical causation described differently. Kim's exclusion argument does not apply.",
        cite: "Lewis (1966); Dennett (1991)."
      },
      {
        text: "Split within the type. Eliminativists say no — phenomenal consciousness as naively conceived does not exist. Analytic functionalists say yes — consciousness is real but exhausted by functional organization. This is the deepest fault line within Type-A.",
        cite: "Dennett (1991); Frankish (2016); Lewis (1972).",
        note: "The ~ in the matrix reflects this split. Eliminativism and functionalism agree on all other columns but diverge here."
      },
      {
        text: "No. There is no Russellian gap to fill. Physics characterizes causal-functional structure, and that is all there is to the physical.",
        cite: "Dennett (1991); Lewis (1972)."
      },
      {
        text: "No. There are no microphenomenal facts to ground macrophenomenal facts. Consciousness is constituted by functional organization, not micro-level phenomenal properties.",
        cite: "Lewis (1966); Dennett (1991)."
      }
    ]
  },
  {
    id: "type-b",
    name: "Type-B Materialism",
    subtitle: "Papineau · Loar · Tye · Block · Stalnaker",
    color: "#1B3A6B",
    answers: [1, 1, 1, 1, 1, 0, 0],
    systemsAnswers: [0.5, 1, 0, 1, 0, 0.5],
    summary: "There is a genuine, permanent epistemic gap — zombies are conceivable and Mary learns something — but no ontological gap. Consciousness is identical to or necessitated by a physical property via a posteriori necessity. Chalmers identifies three defensive strategies: denying identities need explanation (Papineau), denying the disanalogy with standard a posteriori identities (Block & Stalnaker), and the phenomenal concept strategy (Loar). He argues all require 'strong necessities' unlike any other.",
    cluster: [
      {
        name: "Phenomenal Concept Strategy",
        authors: "Loar, Papineau, Levine",
        note: "The gap arises from unique cognitive features of phenomenal concepts — recognitional, introspective, cognitively isolated. Chalmers argues this explains the appearance of a gap but not the gap itself."
      },
      {
        name: "Brute A Posteriori Necessity",
        authors: "Block, Stalnaker, Papineau",
        note: "The psychophysical identity is a 'strong necessity' — necessary in all worlds, not deducible a priori. Chalmers argues this is ad hoc."
      },
      {
        name: "Higher-Order Theories (Type-B reading)",
        authors: "Carruthers",
        note: "HOT theories that concede a genuine epistemic gap while maintaining consciousness is identical to the higher-order relation."
      }
    ],
    children: [],
    sources: [
      "Papineau, D. (1993). Physicalism, Consciousness and the Antipathetic Fallacy.",
      "Loar, B. (1990/1997). 'Phenomenal States.' Philosophical Perspectives 4.",
      "Tye, M. (1995). Ten Problems of Consciousness. MIT Press.",
      "Levine, J. (2001). Purple Haze. MIT Press.",
      "Block, N. & Stalnaker, R. (1999). 'Conceptual Analysis, Dualism, and the Explanatory Gap.' Philosophical Review 108.",
      "Chalmers, D. (2003). 'Consciousness and its Place in Nature.' Blackwell Guide to Philosophy of Mind."
    ],
    explanations: [
      {
        text: "Yes — there is a genuine, permanent epistemic gap. Zombies are conceivable; Mary learns something real. The Type-B materialist fully concedes the epistemic premises of the arguments against materialism.",
        cite: "Loar (1990/1997); Papineau (1993); Levine (2001)."
      },
      {
        text: "No — the epistemic gap does not entail an ontological gap. Zombies are conceivable but not metaphysically possible. The psychophysical connection is an a posteriori necessity. Chalmers argues this requires 'strong necessities' unlike any other.",
        cite: "Papineau (1993); Block & Stalnaker (1999); Chalmers (2003).",
        note: "For water/H₂O, there is a world verifying 'water ≠ H₂O.' For consciousness, Type-B must hold no world verifies P&~Q — a uniquely 'strong' necessity."
      },
      {
        text: "Yes — causal closure preserved. A primary motivation for Type-B.",
        cite: "Papineau (1993)."
      },
      {
        text: "Yes — consciousness IS a physical property. One thing, not two competing causes.",
        cite: "Papineau (1993)."
      },
      {
        text: "Yes — phenomenal consciousness is real, identical to a physical property.",
        cite: "Loar (1990/1997); Papineau (1993)."
      },
      {
        text: "No — phenomenal properties are identical to physical properties as characterized in structural-relational physics. No Russellian gap.",
        cite: "Loar (1990/1997); Papineau (1993)."
      },
      {
        text: "No — there are no microphenomenal facts. Consciousness is identical to macroscopic physical/functional properties.",
        cite: "Papineau (1993)."
      }
    ]
  },
  {
    id: "type-d",
    name: "Type-D Dualism",
    subtitle: "Descartes · Eccles · Stapp · Broad · Lowe",
    color: "#6B2D48",
    answers: [1, 0, 0, 1, 1, 0, 0],
    systemsAnswers: [0, 0.5, 0, 0.5, 0, 0],
    summary: "Interactionism: phenomenal properties are ontologically distinct from physical properties and causally affect the physical world. Microphysics is not causally closed. Chalmers notes this is more empirically defensible than commonly acknowledged: quantum mechanics is compatible with consciousness-based collapse. The defining advantage over Type-E: consciousness is causally efficacious.",
    cluster: [
      {
        name: "Substance Dualism",
        authors: "Descartes, Swinburne",
        note: "Mind and body are distinct substances. 'D for Descartes.'"
      },
      {
        name: "Property Dualism with Interaction",
        authors: "Eccles, Popper, Sellars",
        note: "One substance, two kinds of properties — physical and phenomenal — with phenomenal exerting genuine causal influence."
      },
      {
        name: "Emergentist Interactionism",
        authors: "Broad, Lowe",
        note: "Phenomenal properties are novel emergent properties with novel downward causal effects — Broad's 'trans-ordinal laws.' 'D for downward causation.'"
      },
      {
        name: "Quantum Mind Interactionism",
        authors: "Stapp, Wigner",
        note: "Consciousness causes wavefunction collapse. The standard QM formalism, taken at face value, makes room for exactly this role."
      }
    ],
    children: [],
    sources: [
      "Descartes, R. (1641). Meditations on First Philosophy.",
      "Popper, K. & Eccles, J. (1977). The Self and Its Brain. Springer.",
      "Stapp, H. (1993). Mind, Matter, and Quantum Mechanics. Springer.",
      "Broad, C.D. (1925). The Mind and its Place in Nature. Kegan Paul.",
      "Lowe, E.J. (2006). 'Non-Cartesian Substance Dualism.' Erkenntnis 65.",
      "Chalmers, D. (2003). 'Consciousness and its Place in Nature.' Blackwell Guide to Philosophy of Mind."
    ],
    explanations: [
      {
        text: "Yes — the epistemic gap is real and permanent. Zombies are metaphysically possible. Mary learns a genuinely new fact.",
        cite: "Descartes (1641); Popper & Eccles (1977)."
      },
      {
        text: "Yes — materialism is false. Consciousness is genuinely non-physical.",
        cite: "Chalmers (1996, 2003); Descartes (1641)."
      },
      {
        text: "No — this is Type-D's defining commitment. Microphysics is not causally closed. Consciousness causally intervenes. Chalmers argues the bipartite structure of quantum mechanics is positively suggestive of a role for consciousness.",
        cite: "Popper & Eccles (1977); Stapp (1993); Chalmers (2003).",
        note: "Conservation laws leave no obvious gap for non-physical influence. But Chalmers notes physicists reject consciousness-collapse on philosophical grounds while philosophers reject interactionism on physical grounds — the objections are circular."
      },
      {
        text: "Yes — Type-D's defining advantage over Type-E. Consciousness is genuinely causally efficacious via fundamental psychophysical laws running in both directions.",
        cite: "Popper & Eccles (1977); Stapp (1993)."
      },
      {
        text: "Yes — phenomenal consciousness is real and ontologically fundamental.",
        cite: "Descartes (1641)."
      },
      {
        text: "No — consciousness is a distinct non-physical substance or property, not the intrinsic nature of the physical.",
        cite: "Descartes (1641); Lowe (2006)."
      },
      {
        text: "No — macrophenomenal facts are not grounded in microphenomenal facts. Consciousness is either fundamental or strongly emergent.",
        cite: "Descartes (1641); Broad (1925)."
      }
    ]
  },
  {
    id: "type-e",
    name: "Type-E Dualism",
    subtitle: "Huxley · Jackson (early) · Campbell · Robinson",
    color: "#4A3B6B",
    answers: [1, 0, 1, 0, 1, 0, 0],
    systemsAnswers: [0, 0.5, 0, 0.5, 0, 0],
    summary: "Epiphenomenalism: phenomenal properties are ontologically distinct, the physical world is causally closed, and consciousness has no causal effect. Physical states cause phenomenal states; phenomenal states cause nothing. Chalmers identifies this as the forced consequence of accepting both zombies and causal closure.",
    cluster: [
      {
        name: "Property Epiphenomenalism",
        authors: "Jackson, Campbell",
        note: "One substance, two property types. Phenomenal properties caused by physical states but cause nothing. Jackson later recanted."
      },
      {
        name: "Substance Epiphenomenalism",
        authors: "Huxley",
        note: "Huxley's 'automata' view: conscious states are as causally irrelevant as the whistle of a steam engine."
      },
      {
        name: "Emergentism without Downward Causation",
        authors: "Broad (variant)",
        note: "Novel emergent phenomenal properties that lack any causal power over the physical."
      }
    ],
    children: [],
    sources: [
      "Huxley, T. (1874). 'On the Hypothesis That Animals Are Automata.' Fortnightly Review.",
      "Jackson, F. (1982). 'Epiphenomenal Qualia.' Philosophical Quarterly 32.",
      "Campbell, K. (1970). Body and Mind. Doubleday.",
      "Robinson, W. (1988). Brains and People. Temple University Press.",
      "Chalmers, D. (2003). 'Consciousness and its Place in Nature.' Blackwell Guide to Philosophy of Mind."
    ],
    explanations: [
      {
        text: "Yes — the epistemic gap is real and permanent. Zombies are metaphysically possible.",
        cite: "Jackson (1982); Campbell (1970)."
      },
      {
        text: "Yes — materialism is false. Consciousness is genuinely non-physical.",
        cite: "Jackson (1982); Chalmers (1996, 2003)."
      },
      {
        text: "Yes — one of Type-E's defining commitments. Every physical event has a sufficient physical cause. Combined with the ontological gap, this entails epiphenomenalism.",
        cite: "Jackson (1982); Huxley (1874).",
        note: "The forced move: accept zombies + accept closure → epiphenomenalism. Your zombie twin says 'I am conscious' for purely physical reasons."
      },
      {
        text: "No — Type-E's deepest cost. Consciousness has no causal effect. Your experience of pain plays no role in hand withdrawal. Even 'I am conscious' is caused entirely by physical brain states.",
        cite: "Jackson (1982); Huxley (1874); Chalmers (1996)."
      },
      {
        text: "Yes — phenomenal consciousness is real, non-physical, and causally inert.",
        cite: "Jackson (1982)."
      },
      {
        text: "No — consciousness is a distinct non-physical property, not the intrinsic nature of the physical.",
        cite: "Jackson (1982); Campbell (1970)."
      },
      {
        text: "No — no microphenomenal facts in the Type-E picture.",
        cite: "Jackson (1982)."
      }
    ]
  },
  {
    id: "type-o",
    name: "Type-O Dualism",
    subtitle: "Bealer · Lowe · Mills",
    color: "#6B5B2D",
    answers: [1, 0, 1, 1, 1, 0, 0],
    systemsAnswers: null,
    summary: "Phenomenal properties are non-physical, microphysics is causally closed, yet consciousness is causally efficacious via systematic overdetermination. Every physical effect caused by consciousness also has a sufficient physical cause. Chalmers identifies this as a logically distinct position that most discussions overlook. 'O for overdetermination.'",
    cluster: [
      {
        name: "Causal Overdetermination",
        authors: "Bealer, Mills",
        note: "Every consciously caused event has two independently sufficient causes — one physical, one phenomenal. Metaphysically extravagant but logically coherent."
      },
      {
        name: "Causal Mediation",
        authors: "Lowe",
        note: "Consciousness mediates causal chains without breaking closure. The physical chain is complete, but consciousness determines which chain unfolds."
      }
    ],
    children: [],
    sources: [
      "Chalmers, D. (2003). 'Consciousness and its Place in Nature.' Blackwell Guide to Philosophy of Mind.",
      "Mills, E. (1996). 'Interactionism and Overdetermination.' American Philosophical Quarterly 33.",
      "Lowe, E.J. (1996). Subjects of Experience. Cambridge University Press."
    ],
    explanations: [
      {
        text: "Yes — genuine epistemic gap. Zombies are conceivable and Mary learns something new.",
        cite: "Chalmers (2003)."
      },
      {
        text: "Yes — consciousness is non-physical.",
        cite: "Chalmers (2003)."
      },
      {
        text: "Yes — microphysics is causally closed. Every physical event has a sufficient physical cause. This distinguishes Type-O from Type-D.",
        cite: "Chalmers (2003)."
      },
      {
        text: "Yes — consciousness causally affects the physical despite closure, via overdetermination. Every conscious action has two independently sufficient causes. This distinguishes Type-O from Type-E.",
        cite: "Mills (1996).",
        note: "Systematic overdetermination is metaphysically extravagant — every consciously influenced event is doubly caused."
      },
      {
        text: "Yes — phenomenal consciousness is real and non-physical.",
        cite: "Chalmers (2003)."
      },
      {
        text: "No — consciousness is a distinct non-physical property, not the intrinsic nature of the physical.",
        cite: "Chalmers (2003)."
      },
      {
        text: "No — no microphenomenal facts in the Type-O picture.",
        cite: "Chalmers (2003)."
      }
    ]
  },
  {
    id: "type-f",
    name: "Type-F Monism",
    subtitle: "Russell · Strawson · Chalmers · Goff · Feigl",
    color: "#5B4A00",
    answers: [1, 0.5, 1, 1, 1, 1, 0.5],
    systemsAnswers: [0.5, 1, 0.75, 0.5, 0.75, 0.5],
    summary: "Russellian Monism / Panpsychism / Panprotopsychism: consciousness is the intrinsic nature of physical reality. Physics describes the world entirely in structural-relational terms — what things do, not what they are. What fills in the structure is phenomenal or protophenomenal. Crucially, the structural facts underdetermine the intrinsic natures: structure constrains the quiddities but does not logically fix which specific phenomenal character fills the structural roles. This underdetermination is what makes the position distinct from physicalism (if structure fixed the intrinsics, the position would collapse into Type-A or Type-B). But it has a causal cost: since the structural description is causally complete and qualitative character is underdetermined by structure, the specific character of experience is causally inert. The central challenges are the combination problem and the tension with functionalism (which is incompatible with substrate-dependent quiddities).",
    cluster: [
      {
        name: "Panpsychism vs. Panprotopsychism",
        authors: "Strawson vs. Chalmers",
        note: "Panpsychism: intrinsic natures are genuinely phenomenal — entities have experiences. Panprotopsychism: intrinsic natures are protophenomenal — not experiential but collectively constituting experience. Panprotopsychism avoids attributing experience to electrons but risks reintroducing the hard problem."
      },
      {
        name: "Constitutive vs. Non-Constitutive",
        authors: "Chalmers (2016)",
        note: "Constitutive: macroexperience grounded in microexperience — faces the combination problem. Non-constitutive: macro not grounded in micro — avoids combination but inherits dualism's problems."
      },
      {
        name: "Russellian vs. Non-Russellian",
        authors: "Chalmers (2015)",
        note: "Russellian: microphenomenal properties serve as quiddities — intrinsic bases of microphysical roles. Non-Russellian: microphenomenal properties don't play microphysical roles — closer to property dualism."
      },
      {
        name: "Identity vs. Combinatorial",
        authors: "Maxwell, Lockwood vs. Goff, Mørch",
        note: "Within constitutive views. Identity: macro-experience IS certain micro-configurations. Combinatorial: macro constituted by micro via combination principles."
      },
      {
        name: "Type-A vs. Type-B Constitutive",
        authors: "Chalmers (2015)",
        note: "Chalmers imports his A/B distinction into panpsychism. Type-A constitutive: microphenomenal truths a priori entail macrophenomenal truths. Type-B constitutive: entailment is a posteriori necessary — inherits Type-B's problems."
      },
      {
        name: "Neutral Monism",
        authors: "Russell (1921), Feigl, Maxwell",
        note: "Underlying neutral properties — neither mental nor physical — constitute both domains. A form of constitutive Russellian panprotopsychism."
      }
    ],
    children: [],
    sources: [
      "Russell, B. (1927). The Analysis of Matter. Kegan Paul.",
      "Feigl, H. (1958/1967). 'The Mental and the Physical.' Minnesota Studies.",
      "Strawson, G. (2006). 'Realistic Monism.' Journal of Consciousness Studies 13.",
      "Chalmers, D. (1996). The Conscious Mind. Oxford University Press.",
      "Chalmers, D. (2015). 'Panpsychism and Panprotopsychism.' In Alter & Nagasawa (eds.).",
      "Chalmers, D. (2016). 'The Combination Problem for Panpsychism.' In Brüntrup & Jaskolla (eds.).",
      "Goff, P. (2017). Consciousness and Fundamental Reality. Oxford University Press."
    ],
    explanations: [
      {
        text: "Yes — genuine epistemic gap, precisely explained. Structural physics cannot entail phenomenal truths because phenomenal properties are intrinsic while physics gives only relational descriptions. Mary knows the structure; she lacks the intrinsic nature.",
        cite: "Russell (1927); Strawson (2006); Chalmers (1996).",
        note: "Standard zombies may be impossible (Strawson: same physics → same consciousness) but 'Russellian zombies' (same structure, inert quiddities) remain conceivable."
      },
      {
        text: "Genuinely ambiguous. If 'physical' includes intrinsic properties, materialism is preserved. If 'physical' means only structural-relational, there is something beyond the physical. Chalmers: the view 'fits the letter of materialism but shares the spirit of antimaterialism.'",
        cite: "Chalmers (2003); Stoljar (2001)."
      },
      {
        text: "Yes — structural-causal closure preserved. The intrinsic properties that constitute consciousness play causal roles within physics. No new causal powers are added.",
        cite: "Chalmers (1996, 2003); Russell (1927)."
      },
      {
        text: "Yes — the view's most elegant feature. Phenomenal properties ARE the causally efficacious intrinsic stuff. One thing described two ways — from outside (physics) and inside (phenomenal). No exclusion problem.",
        cite: "Chalmers (1996, 2003); Strawson (2006)."
      },
      {
        text: "Yes — phenomenal consciousness is real and constitutes the intrinsic nature of physical reality.",
        cite: "Strawson (2006); Chalmers (1996)."
      },
      {
        text: "Yes — Type-F's foundational commitment. Russell observed that physics characterizes entities entirely by relational properties while remaining silent about intrinsic natures. Type-F fills this gap with phenomenal or protophenomenal properties.",
        cite: "Russell (1927); Feigl (1958/1967); Chalmers (1996)."
      },
      {
        text: "Split within the type. Constitutive forms ground macro in micro — facing the combination problem. Non-constitutive forms deny this grounding and inherit dualism's problems. Chalmers identifies the constitutive Russellian version as 'perhaps the most important form of panpsychism.'",
        cite: "Chalmers (2015, 2016).",
        note: "Three sub-problems: subject-summing (James), palette (few micro-qualities → vast richness?), structural mismatch (discrete micro → smooth macro?)."
      }
    ]
  }
];

const QUESTIONS = [
  {
    short: "Epistemic Gap",
    full: "Are the phenomenal facts deducible a priori from the complete physical (structural-relational) description?",
    subsumes: [
      {
        name: "The Explanatory Argument",
        desc: "Physical accounts explain at most structure and function. Explaining structure and function does not suffice to explain consciousness. Therefore no physical account can explain consciousness. Chalmers (1995) argues that even a complete account of all behavioral and cognitive functions leaves the hard problem untouched.",
        scenario: "Imagine a neuroscientist who has a complete account of every neural mechanism in the brain — every synapse, every neurotransmitter pathway, every pattern of activation that corresponds to seeing red, feeling pain, or hearing a symphony. She can explain every function: why you flinch, why you report seeing color, why you discriminate wavelengths. Has she explained consciousness? The type-A materialist says yes — there was nothing else to explain. Everyone else says no: there remains the further question of why all this processing is accompanied by experience. Why doesn't it all happen 'in the dark'? This residual question is the hard problem, and its persistence despite functional explanation is the epistemic gap."
      },
      {
        name: "The Conceivability Argument (Zombies)",
        desc: "It is conceivable that there be a being physically identical to a conscious being but lacking consciousness entirely — a zombie. If conceivable, then (via the two-dimensional framework) metaphysically possible. If possible, materialism is false.",
        scenario: "Picture a being that is your exact structural double. Every atom in the same position, every neuron firing identically, every electrochemical gradient preserved. It navigates the world, converses, laughs, says 'that hurt.' But there is nothing it is like to be this being — no inner light, a machine running in the dark. The zombie thought experiment asks: is this being conceivable? If we can consistently imagine all the physical structure running without accompanying experience, then consciousness is something beyond the structural-physical."
      },
      {
        name: "The Knowledge Argument (Mary)",
        desc: "Mary knows all physical facts about color vision from her black-and-white room, yet learns something new upon seeing red. If complete physical knowledge leaves something out, the physical facts do not exhaust all the facts.",
        scenario: "Mary is the world's greatest color scientist. She knows every wavelength, every neural pathway, every firing pattern. But she has lived her entire life in a black-and-white room. Then she sees a ripe tomato. She says: 'So that's what red looks like.' Has she learned something new? If yes — and the intuition is nearly universal — then her complete physical knowledge was incomplete. There is a fact about what red looks like that was not in her textbooks."
      },
      {
        name: "Nagel's Bat",
        desc: "There is something it is like to be a bat — an irreducibly subjective, first-person character of experience — that no amount of objective physical description can capture.",
      },
    ]
  },
  {
    short: "Necessitation",
    full: "Do the physical (structural-relational) facts logically necessitate the phenomenal facts?",
    subsumes: [
      {
        name: "Two-Dimensional Argument",
        desc: "Chalmers' most rigorous formulation: if P&~Q is conceivable, there is a world that verifies P&~Q. If a world verifies P&~Q, either a world satisfies P&~Q (materialism is false) or type-F monism is true. Either way, standard materialism fails.",
        scenario: "The argument turns on two ways of evaluating possible worlds. Consider the XYZ-world: a world where the watery stuff in oceans is XYZ, not H₂O. Considered as a way things might actually be, this world makes 'water is not H₂O' true. Considered as counterfactual, it doesn't — because water is actually H₂O. For consciousness, there is no analogous escape. If a world verifies P&~Q (physically identical to ours but with no consciousness), there is no 'misdescription' to appeal to — either that world really lacks consciousness (materialism is false) or the difference lies in intrinsic physical properties our physics doesn't capture (type-F monism)."
      },
      {
        name: "Strong Necessities",
        desc: "The type-B materialist's defense: the connection between physical and phenomenal states is an a posteriori necessity — like water=H₂O but 'stronger' in that it cannot be deduced from complete physical description. Chalmers argues these strong necessities are unlike any other a posteriori necessity and are postulated ad hoc.",
        scenario: "Water=H₂O is necessary but not a priori. However, given a complete microphysical description, you CAN deduce that the watery stuff is H₂O. The type-B materialist must claim that consciousness=physical state N is necessary but NOT deducible even from complete microphysical description. This makes it a 'strong necessity' — verified by all worlds, unlike any other a posteriori necessity. Chalmers: this is an ad hoc primitive, invented to save materialism, with no independent motivation."
      },
      {
        name: "Phenomenal Concept Strategy",
        desc: "The type-B materialist's main tool: the epistemic gap arises from the unique cognitive character of phenomenal concepts (recognitional, introspective, cognitively isolated from theoretical descriptions), not from any gap in nature. Chalmers argues this cannot work: it explains the appearance of a gap but not the gap itself."
      },
    ]
  },
  {
    short: "Causal Closure",
    full: "Is the microphysical world causally closed — does every physical event have a sufficient physical cause?",
    subsumes: [
      {
        name: "Conservation Laws",
        desc: "Physical conservation laws (energy, momentum) seem to leave no room for non-physical causal intervention. Denying closure means finding where the physics breaks — a severe empirical cost.",
      },
      {
        name: "Quantum Mechanics and Collapse",
        desc: "Standard quantum mechanics has bipartite dynamics: linear Schrödinger evolution plus nonlinear collapse upon measurement. No purely physical criterion for 'measurement' works. The natural candidate is conscious observation — yielding an interactionist interpretation that the standard formalism positively supports.",
        scenario: "Quantum mechanics describes particles in superposition — an electron can be in two places at once. Upon measurement, the superposition collapses to a definite state. But what counts as a measurement? Every physical system obeys the linear Schrödinger equation, which preserves superpositions — so no purely physical event should cause collapse. The only event everyone agrees is a measurement is conscious observation. This suggests consciousness might cause collapse. Stapp and Wigner develop this into detailed theories. Chalmers notes the irony: physicists reject this on philosophical grounds (it's dualistic), while philosophers reject interactionism on physical grounds (it violates closure). The objections are circular."
      },
      {
        name: "Kim's Exclusion Argument",
        desc: "If every physical effect has a sufficient physical cause, any non-physical mental cause is excluded — systematically overdetermined at best, causally inert at worst. Under closure, non-physical consciousness cannot be a cause.",
        scenario: "You decide to raise your arm. Two causal stories: (1) motor cortex fired → neurons → muscles → arm rose. (2) You consciously decided, and your arm rose. If the physical story is complete, the conscious decision did no additional work. Either consciousness is an idle bystander (epiphenomenalism), the physics is incomplete (interactionism), or the decision just IS the neural firing (identity theory)."
      },
      {
        name: "The Forced Move to Epiphenomenalism",
        desc: "Accept both zombies and causal closure, and epiphenomenalism follows as a logical entailment. Your zombie twin says 'I am conscious' for purely physical reasons. The same physical reasons cause your utterance. Your consciousness does no causal work."
      },
    ]
  },
  {
    short: "Mental Causation",
    full: "Does consciousness causally affect the physical world?",
    subsumes: [
      {
        name: "The Exclusion Problem",
        desc: "If consciousness is non-physical and every physical event has a sufficient physical cause, then consciousness is either identical to something physical (materialism), causally redundant (epiphenomenalism), or causally overdetermining (type-O). Kim's exclusion argument forces the choice."
      },
      {
        name: "Downward Causation",
        desc: "If consciousness causally affects microphysics, there must be 'downward' causation from higher-level phenomenal properties to lower-level physical properties. Broad called these 'trans-ordinal laws.' Type-D requires them; Type-E denies them; Type-F sidesteps the issue by identifying phenomenal with intrinsic physical."
      },
      {
        name: "The Paradox of Phenomenal Judgment",
        desc: "Your zombie twin says 'I am conscious' for purely physical reasons. If those same physical reasons fully cause your utterance too, then your consciousness plays no role in your saying 'I am conscious.' This is the deepest cost of epiphenomenalism.",
        scenario: "You see red and say 'I see red.' Your zombie twin — physically identical, no consciousness — says the same thing for the same physical reasons. If the physics is causally complete, the experience did no causal work. The zombie's utterance and yours have the same cause. Your consciousness is along for the ride."
      }
    ]
  },
  {
    short: "Phenomenal Realism",
    full: "Does phenomenal consciousness — irreducible subjective experience, 'what it is like' — exist?",
    subsumes: [
      {
        name: "Eliminativism vs Realism",
        desc: "Eliminativists (Churchland) hold that folk-psychological vocabulary of qualia is a failed scientific theory. Illusionists (Dennett, Frankish) hold there is a systematic self-misrepresentation. Both deny phenomenal consciousness as naively conceived. Analytic functionalists accept it but identify it with functional organization. All other types accept phenomenal realism."
      },
      {
        name: "The Meta-Problem",
        desc: "Chalmers' meta-problem: why do we think there is a hard problem? This is a tractable functional question. Anti-realists hold the meta-problem replaces the hard problem. Realists hold it supplements but does not replace it."
      }
    ]
  },
  {
    short: "Intrinsic Nature",
    full: "Is consciousness the intrinsic nature of the physical — the categorical basis underlying the structural-relational properties physics describes? (Requires that structure underdetermines the intrinsic natures.)",
    subsumes: [
      {
        name: "Russell's Observation",
        desc: "Physics characterizes entities entirely by their relational and dispositional properties — mass by resistance to acceleration, charge by repulsion/attraction. It says nothing about what matter intrinsically IS. There are intrinsic properties grounding the dispositions, but physics is silent about their nature.",
        scenario: "Think about what physics tells you about an electron. Charge: it repels other electrons. Mass: it resists acceleration. Spin: it interacts with magnetic fields. Every property is relational or dispositional — defined by how the electron affects and is affected by other things. Nowhere does physics say what the electron intrinsically is. Russell noticed this in 1927: the equations describe the structure perfectly, but what fills in the mathematical skeleton — what the structure is made of — physics never says. This is the Russellian gap."
      },
      {
        name: "The Placement Problem",
        desc: "If consciousness is real and irreducible, where in the physical world does it live? The Russellian gap provides a location: as the intrinsic nature underlying physical dispositions. Phenomenal properties are not added to physics but identified with something physics has always left open."
      },
      {
        name: "The Combination Problem",
        desc: "The central challenge for type-F monism. If protophenomenal properties are at the microphysical level, how do they compose the rich unified macro-experience of a human being? Three sub-problems: subject-summing (James), palette impoverishment, and structural mismatch.",
        scenario: "Suppose panpsychism is true and every elementary particle has a tiny experience. A brain contains 10²⁷ atoms, each with its micro-experience. When you combine them, do you get one unified experience, or 10²⁷ separate tiny ones? Physical quantities add easily — a thousand drops make a puddle. But experiences don't seem to add. A thousand separate points of view remain a thousand points of view. The panpsychist needs to explain how many become one, and nobody has a satisfying answer. Chalmers (2016) calls this 'easily the most serious problem' for type-F monism."
      },
      {
        name: "Causal Elegance — and Its Limits",
        desc: "If phenomenal properties fill the intrinsic nature underlying physical causal powers, then the phenomenal IS the causally efficacious stuff — one thing, two descriptions. But this elegance is undermined by the very feature that makes Type-F distinct from physicalism: the structural facts must underdetermine the intrinsic natures. Since the structural description is causally complete, and the specific phenomenal character is underdetermined by structure, the qualitative character of experience — the painfulness of pain, the redness of red — makes no difference to any causal outcome. Consciousness is 'causally efficacious' only in the thin sense of being identical to the bearer of causal powers, not in the sense of its qualitative character doing causal work."
      },
    ]
  },
  {
    short: "Constitutive",
    full: "Are macrophenomenal facts (human/animal consciousness) grounded in or constituted by microphenomenal or protophenomenal facts?",
    subsumes: [
      {
        name: "The Combination Problem",
        desc: "The central challenge for constitutive panpsychism. How do micro-level phenomenal properties combine to yield macro-level consciousness? Chalmers identifies three sub-problems: the subject combination problem, the quality combination problem, and the structure combination problem.",
        scenario: "Suppose every elementary particle has a tiny experience. A brain contains 10²⁷ atoms. When you combine them, do you get one unified experience, or 10²⁷ separate tiny ones? Physical quantities add easily — a thousand drops make a puddle. But experiences don't seem to add. A thousand separate points of view remain a thousand points of view."
      },
      {
        name: "Subject-Summing Problem",
        desc: "Given any group of micro-subjects and any further macro-subject, it seems conceivable that the group exists without the macro-subject. James: 'Take a hundred of them, shuffle them and pack them as close together as you can — each remains the same old private self.'"
      },
      {
        name: "The Palette Problem",
        desc: "If fundamental entities have only a handful of phenomenal qualities (corresponding to ~12 fundamental physical properties), how does this meager palette generate the vast richness of human experience — colors, sounds, emotions, textures?"
      },
      {
        name: "Non-constitutive Alternatives",
        desc: "Non-constitutive panpsychism avoids the combination problem by denying that macro-experience is grounded in micro-experience. But it inherits dualism's problems: maps to Type-D if there is downward causation, Type-E if not."
      }
    ]
  },
];

const SYSTEMS = [
  {
    id: "llm",
    short: "LLM",
    full: "Large Language Model (e.g., GPT-4, Claude)",
    desc: "A transformer-based language model trained on vast human text. Produces contextually coherent language, apparent reasoning, self-reference, and reportable uncertainty. Current deployments are largely token-by-token and tool-mediated rather than obviously unified or self-monitoring in the way some theories demand.",
    why: "The live engineering case. LLMs look behaviorally rich enough to tempt functionalists, while substrate-sensitive and anti-functionalist views treat that as radically insufficient."
  },
  {
    id: "octopus",
    short: "Octopus",
    full: "Octopus (invertebrate with distributed nervous system)",
    desc: "A cephalopod with approximately 500 million neurons, two-thirds of which reside in the arms rather than the central brain. Octopuses demonstrate tool use, problem-solving, play behavior, individual personalities, and complex learning — cognitive sophistication rivaling many vertebrates, achieved through radically different neural architecture.",
    why: "The biological control case. Almost every theory agrees vertebrate mammals are conscious, which is uninformative. The octopus tests whether theories track biology, functional complexity, neural architecture, or something else — because it has the complexity without the familiar vertebrate neural plan."
  },
  {
    id: "thermometer",
    short: "Thermometer",
    full: "Thermometer / Simple Physical Sensor",
    desc: "A bimetallic strip or resistance sensor that reliably registers temperature. Tononi's even simpler example is a photodiode discriminating light from dark. These are physical systems that respond differentially to their environment with minimal internal complexity.",
    why: "The lower bound for most theories — but a revealing one. IIT and panpsychist views count even this as (minimally) conscious, though IIT specifies that its phenomenology is vanishingly simple and nothing like human experience (YES*). That is not a reductio; it is their explicit commitment."
  },
  {
    id: "brain-emulation",
    short: "Brain Emulation",
    full: "Whole Brain Emulation (digital faithful copy)",
    desc: "A silicon simulation of a specific human brain, faithful at the level of individual neurons and synapses. Functionally identical to its biological original, but running on different hardware. If the original was conscious, does the emulation inherit that consciousness?",
    why: "The hardest case for substrate-dependent theories. Functionalists must say yes; biological naturalists must say no. The case exposes exactly where theories draw the line on substrate."
  },
  {
    id: "microphysical-primitive",
    short: "Physical Primitive",
    full: "Microphysical Primitive (electron / quark / basic physical unit)",
    desc: "A single fundamental constituent of matter considered in isolation. It is the acid test for panpsychist and Russellian views: is consciousness built in at the very bottom, proto-built in, or absent until larger organization appears?",
    why: "This is where panpsychism and related views stop being metaphorical. If consciousness is intrinsic to the physical, the primitive column shows whether that means full micro-experience, proto-experience, or nothing at all."
  },
  {
    id: "china-brain",
    short: "China Brain",
    full: "China Brain / Nation-Scale Functional Duplicate",
    desc: "A gigantic distributed system in which many people, radios, and signal pathways collectively realize the functional organization of a human brain. The case is associated with Block's challenge to liberal functionalism: does implementing the right organization at a bizarre scale still suffice for consciousness?",
    why: "The key stress test for functionalism. It separates views that treat organization as everything from views that think the right organization must also be realized in the right kind of tightly integrated physical system."
  }
];


const SYSTEM_JUSTIFICATIONS = {
  "type-a": [
    "The verdict splits internally. GWT requires global workspace ignition — a specific architectural feature for which current transformer attention may not qualify; Dehaene's group is skeptical that forward-pass LLMs achieve genuine ignition. HOT theory asks whether a system forms higher-order representations of its own states; LLMs generate text about their own processing but whether this constitutes genuine meta-representation is contested. Analytic functionalism and liberal interpretations simply ask whether the right input-output functions are realized — and LLMs plausibly realize very rich ones. The ~ reflects genuine disagreement within the camp rather than a settled verdict.",
    "A clear YES across the type-A cluster. The octopus instantiates complex functional organization — flexible problem-solving, tool use, play, learning, individual behavioral differences — that any version of type-A materialism counts as sufficient for consciousness. The distributed neural architecture is irrelevant because what matters is the functional-causal structure, not how it's physically arranged. GWT would look for something like a global broadcast in the cephalopod nervous system; HOT would look for meta-representational capacity. Both are plausibly present.",
    "A thermometer does not have the relevant functional complexity. Type-A materialism — in all its variants — requires rich internal functional organization: global broadcast capacity, self-monitoring, higher-order representation, or complex causal-role networks. Responding differentially to temperature is too simple to instantiate any of these. GWT requires something like a workspace; HOT requires the capacity for higher-order thoughts; liberal functionalism still requires the functional organization characteristic of a mind. The thermometer fails every criterion.",
    "A faithful whole-brain emulation preserves the relevant functional organization by definition. For type-A materialism, that is exactly what determines consciousness. Silicon or carbon is irrelevant; the causal-role structure is what matters, and it is preserved. All variants within the camp agree: analytic functionalism, GWT, HOT — all would say yes.",
    "A single microphysical primitive has essentially no functional organization. Type-A materialism requires a system to instantiate the right kind of causal-role structure — one associated with global broadcast, self-monitoring, meta-representation, or complex functional networks. An isolated fundamental particle instantiates none of these. The substrate question doesn't even arise because the minimal functional requirement isn't met.",
    "The China Brain case exposes the fault lines within type-A. Liberal analytic functionalism bites the bullet and says YES: if the system truly realizes the right functional organization — regardless of how distributed, slow, or physically strange — it is conscious. GWT is more hesitant: the relevant workspace dynamics require fast, integrated broadcast that a nation-scale radio network probably cannot achieve. HOT theory is similarly hesitant about whether the relevant higher-order representations can form across such a dispersed system. The ~ reflects this internal split."
  ],
  "type-b": [
    "Type-B materialism accepts a genuine epistemic gap but denies an ontological one — consciousness is physical, and wherever the right physical/functional property is instantiated, consciousness is present. Whether LLMs instantiate the right property depends on what that property turns out to be (determined empirically, not analytically). If it is broadly functional, LLMs have some claim; if it requires specific neural architecture, they do not. The epistemic gap means we cannot simply read off the answer from functional description — we need empirical discovery of which physical property consciousness is. The ~ reflects this empirical openness.",
    "The octopus is biological, complex, and exhibits behavior strongly suggestive of consciousness. Under type-B materialism, once the relevant physical property is identified empirically, the octopus almost certainly has it. The only type-B positions that would hesitate are those where the empirically discovered property turns out to be neural-architecture-specific — but any view that specific approaches type-identity territory rather than type-B.",
    "A thermometer is too simple. Even granting type-B's agnosticism about which physical property turns out to be consciousness, the thermometer's simplicity makes it implausible that it instantiates whatever physical organization turns out to be the neural correlate of consciousness. Type-B materialism does not add consciousness to every physical system — just those that instantiate the right (empirically discoverable) physical property.",
    "A whole-brain emulation preserves the physical-functional organization of a human brain. Under type-B materialism, whatever physical property consciousness is identical to — or necessitated by — is presumably preserved in the emulation if the relevant functional organization is preserved. Most type-B materialists would say yes, with some hesitation if the view turns out to be sensitive to the implementation substrate in ways that functional emulation doesn't capture.",
    "An isolated microphysical primitive almost certainly does not instantiate the right physical property for consciousness, whatever that property turns out to be. Type-B materialism does not attribute consciousness to every physical entity — only those that instantiate the relevant physical-functional property identified through empirical investigation.",
    "If the China Brain truly realizes the relevant physical-functional organization, type-B materialism says consciousness is present: the identity or necessitation holds wherever the physical property is instantiated, regardless of the substrate or distribution. Type-B is agnostic about which property that is, but if functional realization is what matters (and most type-B positions assume something like this), then the China Brain qualifies with appropriate caveats about whether nation-scale realization achieves the right organizational integration."
  ],
  "type-d": [
    "Type-D dualism holds that consciousness is non-physical and interacts with the physical via non-physical causation. An LLM is a purely physical computational system with no particular reason to have a non-physical mind attached. The view does not give any positive account of which physical systems attract non-physical minds; its implicit criteria (biological complexity, perhaps certain neural signatures) exclude current language models.",
    "Do octopuses have non-physical minds that interact with their biology? Classical substance dualists (Descartes) denied animal consciousness — animals were automata. Contemporary interactionists typically allow that behavioral sophistication and flexible learning are signs of a non-physical mind; the octopus's remarkable cognitive capacities make it a plausible candidate if any non-human animal qualifies. The ~ reflects the range of views within the tradition rather than a settled yes.",
    "A thermometer is paradigmatically a purely physical system. Nothing in interactionist dualism suggests a non-physical conscious mind would attach to something this simple. The view is silent on the exact criteria, but simple physical sensors do not meet any plausible criterion.",
    "Whether a non-physical mind attaches to a whole-brain emulation depends on whether what attracts non-physical minds is functional organization (in which case yes, by parity with the biological original) or biological substrate (in which case no). Type-D dualism does not settle this — the relevant attractor conditions are underspecified in most versions of the view. Hence ~.",
    "An isolated microphysical primitive is just part of the physical machinery. Type-D dualism locates consciousness in non-physical minds that interact with physical systems — typically complex, organized physical systems. A fundamental particle by itself gives no reason to posit an attached non-physical mind.",
    "A distributed nation-scale system is still purely physical. The type-D dualist's question is whether a non-physical mind is associated with the system — and there is no positive reason to think one would be, absent the specific biological or organizational features that might attract a non-physical mind. The natural verdict is no."
  ],
  "type-e": [
    "Type-E dualism holds that phenomenal properties are non-physical and causally inert. An LLM is a physical computational system; whether it has associated non-physical phenomenal properties depends on the psychophysical laws connecting physical to phenomenal states. The view is silent on which physical systems give rise to phenomenal properties. By analogy with the original treatment (biological complexity is a plausible criterion for the relevant physical configurations), LLMs probably don't qualify under most readings. But even if they did, the phenomenal properties would be causally irrelevant to their outputs.",
    "The octopus's biological complexity and neural sophistication make it plausible that its physical configurations give rise to associated phenomenal properties under whatever psychophysical laws obtain. Even if those phenomenal states are epiphenomenal — causally irrelevant to behavior — they would still be present. The ~ reflects the same uncertainty as type-D about octopus qualification, but leans toward yes for sufficiently complex biological systems.",
    "Too simple. The physical configurations of a thermometer are extremely unlikely to give rise to associated phenomenal properties under any plausible psychophysical laws. The thermometer has no phenomenal states.",
    "Whether the psychophysical laws attach phenomenal properties to the silicon substrate of a brain emulation — or only to biological neural configurations — is unresolved within type-E dualism. If the laws track functional organization, the emulation has phenomenal properties (but they remain epiphenomenal). If the laws are substrate-sensitive, it does not. Hence ~.",
    "An isolated fundamental particle almost certainly does not give rise to phenomenal properties under type-E dualism. The relevant physical configurations are typically assumed to be macroscopic and complex — nothing like an isolated microphysical primitive.",
    "Whether the China Brain's physical configuration gives rise to phenomenal properties under the relevant psychophysical laws is unclear. The laws might track functional organization (in which case yes, if the organization is right) or require biological substrate (in which case no). Even if yes, the phenomenal states would be epiphenomenal."
  ],
  "type-f": [
    "The physical substrate of an LLM — silicon, metal interconnects, the actual hardware — has its own intrinsic (protophenomenal) properties on type-F monism. Whether those micro-level properties combine into a unified LLM-level subject is the combination problem, which remains unresolved. The computation the LLM runs does not determine its consciousness on this view — the intrinsic properties of the hardware do. So an LLM is at minimum conscious in the fragmented substrate-level sense, but whether it has a unified macro-level experience is genuinely uncertain. The ~ reflects this.",
    "The octopus's nervous system — biological, recurrently connected, richly integrated — provides exactly the kind of complex combinatorial structure that makes macro-level combination plausible. If the combination problem has a solution anywhere in the natural world, it plausibly has one in complex biological nervous systems. The octopus is conscious both at the substrate level (micro-protophenomenal) and very plausibly at the macro level, with genuine octopus phenomenology.",
    "YES*: On type-F monism, the thermometer's physical components — the bimetallic strip, the mercury atoms — have their own intrinsic (protophenomenal) properties. These micro-level properties are genuinely present. Whether they combine into a thermometer-level subject is doubtful given the simple structure; but the substrate-level micro-phenomenology is guaranteed. The phenomenology is that of the physical materials in their specific configuration, not of 'temperature measurement.'",
    "The silicon substrate running a whole-brain emulation has its own micro-level intrinsic properties. Whether those properties combine into a unified subject matching the emulated human brain is highly uncertain — the silicon's intrinsic properties may differ substantially from neurons', making the combination produce a different or absent macro-experience. The hardware is minimally conscious at the substrate level; whether a human-like unified subject emerges is genuinely open. The ~ reflects this central uncertainty.",
    "YES*: The microphysical primitive is exactly where type-F monism locates the basic experiential furniture of the world. If the view is correct, fundamental particles have intrinsic protophenomenal properties by definition — they ARE the intrinsic nature of physical reality. But that experience (if we can call it that) is unimaginably alien and minimal — nothing resembling human phenomenology. It is the raw intrinsic nature of the physical, not anything recognizable as 'what it is like.'",
    "The China Brain's participants are themselves conscious beings, and the physical infrastructure connecting them has micro-level intrinsic properties at the substrate level. Whether a unified China Brain-level subject emerges from this combination is the combination problem in vivid form: given the spatial dispersion, slow communication speeds, and radically different physical configuration from a brain, it seems very unlikely that the combination produces a unified macro-subject. The ~ reflects that the substrate-level micro-phenomenology is guaranteed but unified macro-experience is doubtful."
  ],
  "type-o": null
};

function AnswerCell({ value, small }) {
  const s = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: small ? 11 : 13 };
  if (value === 1) return <span style={{ ...s, color: "#2D6A4F" }}>YES</span>;
  if (value === 0.75) return <span style={{ ...s, color: "#4A7B9D" }}>YES*</span>;
  if (value === 0) return <span style={{ ...s, color: "#9B2226" }}>NO</span>;
  if (value === 0.5) return <span style={{ ...s, color: "#B08D57" }}>~</span>;
  if (value === -1) return <span style={{ ...s, color: "#999", fontSize: small ? 9 : 10 }}>N/A</span>;
  return null;
}

function SystemDetail({ system, positions, onClose }) {
  if (!system) return null;
  const systemIdx = SYSTEMS.findIndex((s) => s.id === system.id);
  return (
    <div className="detail-panel" style={{
      marginTop: 24, padding: "32px 40px", background: "#FDFBF8", border: "1px solid #C8D9E8",
      borderTop: "3px solid #1B6CA8", borderRadius: 2, animation: "fadeSlideIn 0.3s ease"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#1B6CA8", marginBottom: 8
          }}>System</div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700,
            color: "#2D2A26", margin: 0
          }}>{system.full}</h3>
        </div>
        <button onClick={onClose} style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#8A7E72",
          letterSpacing: "0.1em", padding: "4px 0"
        }}>✕ close</button>
      </div>
      <p style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 16, lineHeight: 1.7,
        color: "#4A4540", margin: "0 0 12px 0"
      }}>{system.desc}</p>
      <p style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 14, lineHeight: 1.65,
        color: "#7B6F65", margin: "0 0 32px 0", fontStyle: "italic"
      }}>{system.why}</p>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600,
        letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A7E72", marginBottom: 16
      }}>Verdicts by position</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {positions.map((pos, i) => {
          const val = pos.systemsAnswers ? pos.systemsAnswers[systemIdx] : null;
          const justification = SYSTEM_JUSTIFICATIONS[pos.id]?.[systemIdx];
          return (
            <div key={pos.id} style={{
              display: "flex", alignItems: "flex-start", gap: 16,
              padding: "12px 0", borderBottom: i < positions.length - 1 ? "1px solid #EDE8E2" : "none"
            }}>
              <div style={{ width: 32, flexShrink: 0, textAlign: "center", paddingTop: 2 }}>
                {val !== null && val !== undefined ? <AnswerCell value={val} /> : <span style={{ color: "#CCC" }}>—</span>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 700, color: "#2D2A26"
                }}>{pos.name}</div>
                <div style={{
                  fontFamily: "'Source Serif 4', serif", fontSize: 13, color: "#8A7E72", fontStyle: "italic"
                }}>{pos.subtitle}</div>
                {justification && (
                  <div style={{
                    fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#4A4540",
                    lineHeight: 1.65, marginTop: 8, maxWidth: 740
                  }}>{justification}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ColumnDetail({ question, onClose }) {
  if (!question) return null;
  return (
    <div className="detail-panel" style={{
      marginTop: 24, padding: "32px 40px", background: "#FDFBF8", border: "1px solid #D4C9BC",
      borderRadius: 2, position: "relative", animation: "fadeSlideIn 0.3s ease"
    }}>
      <button onClick={onClose} style={{
        position: "absolute", top: 12, right: 16, background: "none", border: "none",
        fontSize: 20, color: "#8A7E72", cursor: "pointer", fontFamily: "'Cormorant Garamond', serif"
      }}>×</button>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 500,
        letterSpacing: "0.15em", textTransform: "uppercase", color: "#B08D57", marginBottom: 8
      }}>Column — {question.short}</div>
      <div style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 18, color: "#2D2A26",
        lineHeight: 1.5, marginBottom: 24, maxWidth: 600
      }}>{question.full}</div>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600,
        letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A7E72", marginBottom: 16
      }}>This column subsumes</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {question.subsumes.map((s, i) => (
          <SubsumeEntry key={i} entry={s} />
        ))}
      </div>
    </div>
  );
}

function SubsumeEntry({ entry: s }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#F0EBE4", borderRadius: 2,
      borderLeft: `2px solid ${s.scenario ? "#5B3A29" : "#D4C9BC"}`
    }}>
      <button
        onClick={() => s.scenario && setOpen(o => !o)}
        style={{
          width: "100%", background: "none", border: "none",
          padding: "14px 18px", textAlign: "left",
          cursor: s.scenario ? "pointer" : "default",
          display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 700,
            color: "#2D2A26", marginBottom: 4
          }}>{s.name}</div>
          <div style={{
            fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#6B6460",
            lineHeight: 1.6
          }}>{s.desc}</div>
        </div>
        {s.scenario && (
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
            color: "#5B3A29", letterSpacing: "0.08em", textTransform: "uppercase",
            flexShrink: 0, paddingTop: 2, opacity: 0.8
          }}>{open ? "▾ hide" : "▸ scenario"}</span>
        )}
      </button>
      {open && s.scenario && (
        <div style={{
          padding: "0 18px 18px 18px",
          borderTop: "1px solid #DDD5CA"
        }}>
          <p style={{
            fontFamily: "'Source Serif 4', serif", fontSize: 15, lineHeight: 1.85,
            color: "#3D3833", margin: 0, fontStyle: "italic"
          }}>{s.scenario}</p>
        </div>
      )}
    </div>
  );
}

function MatrixView({ onSelectPosition, selectedId, onSelectColumn, selectedColIdx, mode }) {
  const [hoveredQ, setHoveredQ] = useState(null);
  const [hoveredP, setHoveredP] = useState(null);
  const [expandedPositions, setExpandedPositions] = useState(new Set());

  const isSystems = mode === "systems";
  const accentColor = isSystems ? "#1B6CA8" : "#5B3A29";
  const selectedBg = isSystems ? "rgba(27,108,168,0.08)" : "rgba(91,58,41,0.04)";

  const toggleExpand = (e, posId) => {
    e.stopPropagation();
    setExpandedPositions(prev => {
      const next = new Set(prev);
      if (next.has(posId)) next.delete(posId);
      else next.add(posId);
      return next;
    });
  };

  const hasChildren = (pos) => (pos.children || []).length > 0;

  // Primary columns always visible; secondary appear only when relevant to expanded children
  const SECONDARY_COL_INDICES = [3, 4, 6]; // Mental Causation, Phenomenal Realism, Constitutive
  const ALL_ARG_COLS = [0, 1, 2, 3, 4, 5, 6];

  // Compute which secondary columns are relevant: only those where children differ from parent
  const relevantSecondaryCols = new Set();
  if (!isSystems) {
    expandedPositions.forEach(posId => {
      const pos = POSITIONS.find(p => p.id === posId);
      if (pos?.children?.length) {
        pos.children.forEach(child => {
          SECONDARY_COL_INDICES.forEach(colIdx => {
            if (child.answers[colIdx] !== pos.answers[colIdx]) {
              relevantSecondaryCols.add(colIdx);
            }
          });
        });
      }
    });
  }

  const columns = isSystems ? SYSTEMS : QUESTIONS;

  // Collapsed cell style helper — always render all 7 columns, collapse hidden ones
  const colStyle = (colIdx, base) => {
    const isSecondary = !isSystems && SECONDARY_COL_INDICES.includes(colIdx);
    const isVisible = !isSecondary || relevantSecondaryCols.has(colIdx);
    if (isSecondary && !isVisible) {
      return {
        ...base,
        maxWidth: 0, width: 0, padding: "14px 0", overflow: "hidden",
        opacity: 0, fontSize: 0, border: "none", borderBottom: "none",
        transition: "max-width 0.35s ease, padding 0.35s ease, opacity 0.25s ease"
      };
    }
    return {
      ...base,
      maxWidth: 120, overflow: "hidden",
      opacity: isSecondary ? 0.85 : 1,
      transition: "max-width 0.35s ease, padding 0.35s ease, opacity 0.3s ease 0.1s, background-color 0.15s"
    };
  };

  return (
    <div className="matrix-scroll" style={{ overflowX: "auto", padding: "0 0 20px 0", WebkitOverflowScrolling: "touch" }}>
      <table className="matrix-table" style={{ borderCollapse: "collapse", width: "100%", minWidth: isSystems ? 860 : 680, tableLayout: "auto" }}>
        <thead>
          <tr>
            <th style={{
              padding: "12px 16px 12px 36px", textAlign: "left", fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12, fontWeight: 600, color: "#8A7E72", letterSpacing: "0.1em", textTransform: "uppercase",
              borderBottom: "2px solid #D4C9BC", minWidth: 200, position: "sticky", left: 0,
              background: "#F8F6F3", zIndex: 2
            }}>Position</th>
            {(isSystems ? SYSTEMS.map((_, i) => i) : ALL_ARG_COLS).map((colIdx) => {
              const q = columns[colIdx];
              const isSelected = selectedColIdx === colIdx;
              const isSecondary = !isSystems && SECONDARY_COL_INDICES.includes(colIdx);
              const isVisible = !isSecondary || relevantSecondaryCols.has(colIdx);
              return (
                <th
                  key={colIdx}
                  onClick={() => isVisible ? onSelectColumn(colIdx) : null}
                  onMouseEnter={() => isVisible ? setHoveredQ(colIdx) : null}
                  onMouseLeave={() => setHoveredQ(null)}
                  style={colStyle(colIdx, {
                    padding: "12px 10px", textAlign: "center", fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 11, fontWeight: isSelected ? 700 : 600,
                    color: isSelected ? "#2D2A26" : hoveredQ === colIdx ? accentColor : isSecondary ? "#B0A89C" : "#8A7E72",
                    letterSpacing: "0.04em", textTransform: "uppercase", whiteSpace: "nowrap",
                    borderBottom: isSelected ? `2px solid ${accentColor}` : isSecondary ? "2px solid #E8E2DA" : "2px solid #D4C9BC",
                    cursor: isVisible ? "pointer" : "default",
                    minWidth: isSystems ? 100 : (isVisible ? 80 : 0),
                    maxWidth: isSystems ? 140 : (isVisible ? 120 : 0),
                    lineHeight: 1.3,
                    background: isSelected ? "#E8E2DA" : "transparent"
                  })}
                  title={isVisible ? q.full : ""}
                >
                  {q.short}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {POSITIONS.flatMap((pos, pi) => {
            const isSelected = selectedId === pos.id;
            const isExpanded = expandedPositions.has(pos.id);
            const showChildren = !isSystems && hasChildren(pos);
            const cellAnswers = isSystems ? (pos.systemsAnswers || []) : pos.answers;
            const colIndices = isSystems ? SYSTEMS.map((_, i) => i) : ALL_ARG_COLS;

            const parentRow = (
              <tr
                key={pos.id}
                onClick={() => onSelectPosition(pos.id)}
                onMouseEnter={() => setHoveredP(pi)}
                onMouseLeave={() => setHoveredP(null)}
                style={{
                  cursor: "pointer",
                  backgroundColor: isSelected ? "#ECEAE6" : hoveredP === pi ? "#F0EEEB" : "transparent",
                  transition: "background-color 0.2s"
                }}
              >
                <td style={{
                  padding: "14px 16px", borderBottom: (isExpanded && showChildren) ? "none" : "1px solid #E8E2DA",
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 700,
                  color: "#2D2A26", position: "sticky", left: 0,
                  background: isSelected ? "#ECEAE6" : hoveredP === pi ? "#F0EEEB" : "#F8F6F3",
                  transition: "background-color 0.2s", zIndex: 1
                }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ width: 20, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {showChildren && (
                        <button
                          onClick={(e) => toggleExpand(e, pos.id)}
                          title={isExpanded ? "Collapse" : "Expand sub-positions"}
                          style={{
                            background: "none", border: "none", cursor: "pointer",
                            padding: 0, color: "#8A7E72", fontSize: 11, lineHeight: 1,
                            transition: "color 0.15s",
                          }}
                        >
                          {isExpanded ? "▾" : "▸"}
                        </button>
                      )}
                    </div>
                    <div>
                      <div>
                        {pos.name}
                        {pos.unstable && (
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fontWeight: 500,
                            color: "#B08D57", marginLeft: 8, letterSpacing: "0.05em"
                          }}>(unstable)</span>
                        )}
                      </div>
                      <div className="pos-subtitle" style={{ fontSize: 12, fontWeight: 400, color: "#8A7E72", fontStyle: "italic", marginTop: 2 }}>{pos.subtitle}</div>
                    </div>
                  </div>
                </td>
                {colIndices.map((colIdx) => {
                  const a = cellAnswers[colIdx];
                  return (
                    <td key={colIdx} style={colStyle(colIdx, {
                      padding: "14px 10px", textAlign: "center",
                      borderBottom: (isExpanded && showChildren) ? "none" : "1px solid #E8E2DA",
                      backgroundColor: selectedColIdx === colIdx ? selectedBg : hoveredQ === colIdx ? "rgba(0,0,0,0.015)" : "transparent",
                    })}>
                      <AnswerCell value={a} />
                    </td>
                  );
                })}
              </tr>
            );

            if (!isExpanded || !showChildren) return [parentRow];

            const childRows = pos.children.map((child, ci) => {
              const isLastChild = ci === pos.children.length - 1;
              return (
                <tr
                  key={child.id}
                  onClick={() => onSelectPosition(pos.id)}
                  style={{ cursor: "pointer", backgroundColor: `${pos.color}08` }}
                >
                  <td style={{
                    padding: "10px 16px 10px 44px",
                    borderBottom: isLastChild ? "1px solid #E8E2DA" : `1px solid ${pos.color}12`,
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 500,
                    color: pos.color, position: "sticky", left: 0,
                    background: `${pos.color}08`, zIndex: 1,
                    borderLeft: `2px solid ${pos.color}55`
                  }}>
                    <div>{child.name}</div>
                    {child.subtitle && (
                      <div style={{ fontSize: 11, fontWeight: 400, color: "#8A7E72", fontStyle: "italic", marginTop: 2 }}>{child.subtitle}</div>
                    )}
                  </td>
                  {colIndices.map((colIdx) => {
                    const a = child.answers[colIdx];
                    const differs = a !== pos.answers[colIdx];
                    return (
                      <td key={colIdx} style={colStyle(colIdx, {
                        padding: "10px 10px", textAlign: "center",
                        borderBottom: isLastChild ? "1px solid #E8E2DA" : `1px solid ${pos.color}12`,
                        backgroundColor: differs
                          ? `${pos.color}20`
                          : selectedColIdx === colIdx ? selectedBg : "transparent",
                      })}>
                        <AnswerCell value={a} />
                      </td>
                    );
                  })}
                </tr>
              );
            });

            return [parentRow, ...childRows];
          })}
        </tbody>
      </table>
    </div>
  );
}

function PositionExplanations({ position }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div style={{ marginTop: 36 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600,
          letterSpacing: "0.15em", textTransform: "uppercase", color: "#5B3A29"
        }}>On the Arguments</div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#B0A89C",
          letterSpacing: "0.05em"
        }}>— why this position answers each question</div>
      </div>
      <div style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 13, color: "#B0A89C",
        fontStyle: "italic", marginBottom: 20
      }}>Click any question to see the reasoning, key citations, and contested points.</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {QUESTIONS.map((q, i) => {
          const exp = position.explanations[i];
          const isOpen = openIdx === i;
          return (
            <div key={i} style={{ borderTop: "1px solid #E8E2DA" }}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  padding: "14px 0", display: "flex", alignItems: "center", gap: 14,
                  textAlign: "left"
                }}
              >
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 700,
                  color: "#2D2A26", minWidth: 120
                }}>{q.short}</span>
                <AnswerCell value={position.answers[i]} small />
                <span style={{
                  marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  color: "#B0A89C", transition: "transform 0.2s", display: "inline-block",
                  transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)"
                }}>↓</span>
              </button>
              {isOpen && (
                <div style={{ paddingBottom: 20, paddingLeft: 4 }}>
                  <p style={{
                    fontFamily: "'Source Serif 4', serif", fontSize: 15, lineHeight: 1.75,
                    color: "#3D3833", margin: 0, maxWidth: 680
                  }}>{exp.text}</p>
                  {exp.note && (
                    <div style={{
                      marginTop: 14, padding: "14px 18px",
                      background: "#FEF9ED", borderLeft: "3px solid #B08D57",
                      fontFamily: "'Source Serif 4', serif", fontSize: 14,
                      color: "#4A3A10", lineHeight: 1.7
                    }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        color: "#B08D57", fontWeight: 700, display: "block", marginBottom: 6
                      }}>Contested</span>
                      {exp.note}
                    </div>
                  )}
                  {exp.cite && (
                    <div style={{
                      marginTop: 12, fontFamily: "'Source Serif 4', serif", fontSize: 13,
                      color: "#8A7E72", fontStyle: "italic", lineHeight: 1.6
                    }}>{exp.cite}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        <div style={{ borderTop: "1px solid #E8E2DA" }} />
      </div>
    </div>
  );
}

function PositionSystems({ position }) {
  const [openIdx, setOpenIdx] = useState(null);
  if (!position.systemsAnswers) return null;
  return (
    <div style={{ marginTop: 36 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600,
          letterSpacing: "0.15em", textTransform: "uppercase", color: "#1B6CA8"
        }}>On the Systems</div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#B0A89C",
          letterSpacing: "0.05em"
        }}>— explicit verdicts on the machine cases</div>
      </div>
      <div style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 13, color: "#B0A89C",
        fontStyle: "italic", marginBottom: 20
      }}>Click any system to see why this position says yes, no, or complicated.</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {SYSTEMS.map((system, i) => {
          const verdict = position.systemsAnswers[i];
          const justification = SYSTEM_JUSTIFICATIONS[position.id]?.[i];
          const isOpen = openIdx === i;
          return (
            <div key={system.id} style={{ borderTop: "1px solid #E8E2DA" }}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  padding: "14px 0", display: "flex", alignItems: "center", gap: 14,
                  textAlign: "left"
                }}
              >
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 700,
                  color: "#2D2A26", minWidth: 140
                }}>{system.short}</span>
                <AnswerCell value={verdict} small />
                <span style={{
                  fontFamily: "'Source Serif 4', serif", fontSize: 13, color: "#8A7E72",
                  fontStyle: "italic", marginLeft: 4
                }}>{system.full}</span>
                <span style={{
                  marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  color: "#B0A89C", transition: "transform 0.2s", display: "inline-block",
                  transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)"
                }}>↓</span>
              </button>
              {isOpen && (
                <div style={{ paddingBottom: 20, paddingLeft: 4 }}>
                  <p style={{
                    fontFamily: "'Source Serif 4', serif", fontSize: 15, lineHeight: 1.75,
                    color: "#3D3833", margin: 0, maxWidth: 680
                  }}>{justification}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PositionDetail({ position, onClose }) {
  if (!position) return null;
  return (
    <div className="detail-panel" style={{
      marginTop: 32, padding: "40px 48px", background: "#FDFBF8", border: "1px solid #D4C9BC",
      borderRadius: 2, position: "relative", animation: "fadeSlideIn 0.35s ease"
    }}>
      <button onClick={onClose} style={{
        position: "absolute", top: 16, right: 20, background: "none", border: "none",
        fontSize: 22, color: "#8A7E72", cursor: "pointer", fontFamily: "'Cormorant Garamond', serif"
      }}>×</button>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600,
        color: position.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8
      }}>{position.subtitle}</div>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700,
        color: "#2D2A26", margin: "0 0 20px 0", lineHeight: 1.2
      }}>
        {position.name}
        {position.unstable && (
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500,
            color: "#B08D57", marginLeft: 12, letterSpacing: "0.05em"
          }}>(unstable)</span>
        )}
      </h3>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {position.answers.map((a, i) => (
          <div key={i} style={{
            padding: "6px 12px", background: "#F0EBE4", borderRadius: 2,
            fontFamily: "'Cormorant Garamond', serif", fontSize: 12, color: "#6B6460",
            display: "flex", alignItems: "center", gap: 6
          }}>
            <span style={{ fontWeight: 600 }}>{QUESTIONS[i].short}:</span>
            <AnswerCell value={a} small />
          </div>
        ))}
      </div>
      <p style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 17, lineHeight: 1.75,
        color: "#3D3833", margin: "0 0 28px 0", maxWidth: 680
      }}>{position.summary}</p>

      {position.cluster && (
        <div style={{ marginBottom: 32 }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A7E72", marginBottom: 16
          }}>Positions in this cluster</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {position.cluster.map((c, i) => (
              <div key={i} style={{
                padding: "16px 20px", background: "#F0EBE4", borderRadius: 2,
                borderLeft: `3px solid ${position.color}`
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 700,
                  color: "#2D2A26", marginBottom: 2
                }}>{c.name}</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 12, fontStyle: "italic",
                  color: "#8A7E72", marginBottom: 8
                }}>{c.authors}</div>
                <div style={{
                  fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#4A4540",
                  lineHeight: 1.65
                }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <PositionExplanations position={position} />

      <PositionSystems position={position} />

      <div style={{ marginTop: 36 }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600,
          color: "#8A7E72", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12
        }}>Key Sources</div>
        {position.sources.map((s, i) => (
          <div key={i} style={{
            fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#6B6460",
            lineHeight: 1.6, marginBottom: 4, paddingLeft: 16,
            borderLeft: `2px solid ${position.color}33`
          }}>{s}</div>
        ))}
      </div>
      <div style={{
        marginTop: 32, padding: "20px 24px", background: "#F0EBE4", borderRadius: 2,
        fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#8A7E72",
        fontStyle: "italic", lineHeight: 1.6
      }}>
        Essay forthcoming — this position will be explored in depth with attention to its implications for machine consciousness.
      </div>
    </div>
  );
}


function EssayStub({ title, subtitle, date, tags }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="essay-stub"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "28px 0", borderBottom: "1px solid #E8E2DA", cursor: "pointer",
        transition: "padding-left 0.3s ease", paddingLeft: hovered ? 12 : 0
      }}
    >
      <div style={{ display: "flex", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
        {tags.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "#8A7E72", background: "#E8E2DA",
            padding: "3px 8px", borderRadius: 2
          }}>{t}</span>
        ))}
      </div>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700,
        color: hovered ? "#5B3A29" : "#2D2A26", margin: "0 0 6px 0",
        transition: "color 0.2s", lineHeight: 1.3
      }}>{title}</h3>
      <p style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 15, color: "#8A7E72",
        margin: 0, lineHeight: 1.5
      }}>{subtitle}</p>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#B0A89C",
        marginTop: 8, letterSpacing: "0.05em"
      }}>{date}</div>
    </div>
  );
}

// Standalone matrix section for embedding in the main app
export function MatrixSection() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);
  const [matrixMode, setMatrixMode] = useState("arguments");
  const detailRef = useRef(null);
  const colRef = useRef(null);

  const handleSelectPosition = useCallback((id) => {
    setSelectedCol(null);
    setSelectedPosition(prev => prev === id ? null : id);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50);
  }, []);

  const handleSelectColumn = useCallback((idx) => {
    setSelectedPosition(null);
    setSelectedCol(prev => prev === idx ? null : idx);
    setTimeout(() => colRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50);
  }, []);

  const selectedPos = POSITIONS.find(p => p.id === selectedPosition);
  const selectedQuestion = selectedCol !== null && matrixMode === "arguments" ? QUESTIONS[selectedCol] : null;
  const selectedSystem = selectedCol !== null && matrixMode === "systems" ? SYSTEMS[selectedCol] : null;

  const handleModeChange = useCallback((newMode) => {
    setMatrixMode(newMode);
    setSelectedCol(null);
    setSelectedPosition(null);
  }, []);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 80px" }}>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 72, fontWeight: 700,
        color: "#1a1816", margin: "0 0 16px 0", lineHeight: 1.05, letterSpacing: "-0.02em"
      }}>The Matrix</h1>
      <p style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 17, lineHeight: 1.85,
        color: "#4A4540", maxWidth: 680, margin: "0 0 32px 0"
      }}>
        {matrixMode === "arguments"
          ? "Each column is a discriminating question — the decision points that separate the positions. Each row is a position's response. Click any column header to see the arguments it subsumes. Click any row to expand the position's detailed responses."
          : "Shift the matrix from abstract commitments to concrete verdicts. Each column is a candidate system — click any system header to see how the positions divide."}
      </p>
      <div style={{
        marginBottom: 32,
        display: "inline-flex",
        padding: 4,
        background: "#E8E2DA",
        border: "1px solid #D4C9BC",
        borderRadius: 4,
        gap: 4
      }}>
        {[
          { key: "arguments", label: "Arguments" },
          { key: "systems", label: "Systems" }
        ].map((item) => {
          const active = matrixMode === item.key;
          const accent = item.key === "systems" ? "#1B6CA8" : "#5B3A29";
          return (
            <button
              key={item.key}
              onClick={() => handleModeChange(item.key)}
              style={{
                background: active ? "#FDFBF8" : "transparent",
                border: active ? `1px solid ${accent}55` : "1px solid transparent",
                color: active ? accent : "#8A7E72",
                cursor: "pointer",
                padding: "9px 16px",
                borderRadius: 2,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: active ? 600 : 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.2s"
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div style={{
        marginBottom: 32, display: "flex", gap: 20, flexWrap: "wrap",
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11
      }}>
        <span><span style={{ color: "#2D6A4F", fontWeight: 700 }}>YES</span> <span style={{ color: "#8A7E72" }}>affirms</span></span>
        {matrixMode === "systems" && <span><span style={{ color: "#4A7B9D", fontWeight: 700 }}>YES*</span> <span style={{ color: "#8A7E72" }}>affirms, with caveats</span></span>}
        <span><span style={{ color: "#9B2226", fontWeight: 700 }}>NO</span> <span style={{ color: "#8A7E72" }}>denies</span></span>
        <span><span style={{ color: "#B08D57", fontWeight: 700 }}>~</span> <span style={{ color: "#8A7E72" }}>complicated</span></span>
        <span><span style={{ color: "#999", fontWeight: 600 }}>N/A</span> <span style={{ color: "#8A7E72" }}>rejects framing</span></span>
      </div>

      <MatrixView
        onSelectPosition={handleSelectPosition}
        selectedId={selectedPosition}
        onSelectColumn={handleSelectColumn}
        selectedColIdx={selectedCol}
        mode={matrixMode}
      />

      <div ref={colRef}>
        {matrixMode === "arguments" ? (
          <ColumnDetail question={selectedQuestion} onClose={() => setSelectedCol(null)} />
        ) : (
          <SystemDetail system={selectedSystem} positions={POSITIONS} onClose={() => setSelectedCol(null)} />
        )}
      </div>

      <div ref={detailRef}>
        <PositionDetail position={selectedPos} onClose={() => setSelectedPosition(null)} />
      </div>
    </div>
  );
}

export default function MachineConsciousness() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);
  const [activeSection, setActiveSection] = useState("matrix");
  const [matrixMode, setMatrixMode] = useState("arguments");
  const [scrolled, setScrolled] = useState(false);
  const detailRef = useRef(null);
  const colRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectPosition = useCallback((id) => {
    setSelectedCol(null);
    setSelectedPosition(prev => prev === id ? null : id);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50);
  }, []);

  const handleSelectColumn = useCallback((idx) => {
    setSelectedPosition(null);
    setSelectedCol(prev => prev === idx ? null : idx);
    setTimeout(() => colRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50);
  }, []);

  const selectedPos = POSITIONS.find(p => p.id === selectedPosition);
  const selectedQuestion = selectedCol !== null && matrixMode === "arguments" ? QUESTIONS[selectedCol] : null;
  const selectedSystem = selectedCol !== null && matrixMode === "systems" ? SYSTEMS[selectedCol] : null;

  const handleModeChange = useCallback((newMode) => {
    setMatrixMode(newMode);
    setSelectedCol(null);
    setSelectedPosition(null);
  }, []);

  return (
    <div className="possible-minds" style={{
      minHeight: "100vh", background: "#F8F6F3", color: "#2D2A26",
      fontFamily: "'Source Serif 4', Georgia, serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&family=JetBrains+Mono:wght@300;400;500;700&display=swap');
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes lineGrow { from { width: 0; } to { width: 80px; } }
        * { box-sizing: border-box; }
        body { margin: 0; background: #F8F6F3; }
        ::selection { background: #D4C9BC; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #F2EDE6; }
        ::-webkit-scrollbar-thumb { background: #C4B9AC; border-radius: 3px; }
        @media (max-width: 768px) {
          .possible-minds nav { padding-left: 20px !important; padding-right: 20px !important; }
          .possible-minds header { padding: 100px 20px 60px !important; }
          .possible-minds header h1 { font-size: 48px !important; }
          .possible-minds header p { font-size: 16px !important; }
          .possible-minds main { padding-left: 20px !important; padding-right: 20px !important; }
          .possible-minds .matrix-scroll { margin: 0 -20px; padding: 0 20px 16px !important; -webkit-overflow-scrolling: touch; }
          .possible-minds .matrix-table { min-width: 380px !important; font-size: 11px; }
          .possible-minds .matrix-table th:first-child { min-width: 100px !important; padding: 6px 12px 6px 16px !important; font-size: 8px !important; }
          .possible-minds .matrix-table th:not(:first-child) { min-width: 36px !important; max-width: 44px !important; padding: 6px 2px !important; font-size: 8px !important; }
          .possible-minds .matrix-table td:first-child { padding: 6px 10px !important; font-size: 11px !important; }
          .possible-minds .matrix-table td:not(:first-child) { padding: 6px 2px !important; min-width: 36px !important; }
          .possible-minds .matrix-table .pos-subtitle { font-size: 9px !important; }
          .possible-minds .matrix-table td:not(:first-child) span { font-size: 9px !important; }
          .possible-minds .matrix-table button { font-size: 9px !important; padding: 0 !important; }
          .possible-minds .reading-cards h3 { font-size: 16px !important; }
          .possible-minds .reading-cards p { font-size: 13px !important; }
          .possible-minds .reading-cards > div { grid-template-columns: 1fr !important; }
          .possible-minds .detail-panel { padding: 24px 20px !important; }
          .possible-minds .detail-panel h2 { font-size: 18px !important; }
          .possible-minds .detail-panel h3 { font-size: 14px !important; }
          .possible-minds .detail-panel p, .possible-minds .detail-panel li { font-size: 14px !important; }
          .possible-minds .essay-stub h3 { font-size: 18px !important; }
          .possible-minds .essay-stub p { font-size: 13px !important; }
          .possible-minds footer { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "12px 48px" : "20px 48px",
        background: scrolled ? "rgba(242,237,230,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E8E2DA" : "1px solid transparent",
        transition: "all 0.4s ease",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 700,
          letterSpacing: "0.2em", textTransform: "uppercase", color: "#5B3A29", cursor: "pointer"
        }} onClick={() => { setActiveSection("matrix"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          PM
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {[
            { key: "matrix", label: "Matrix" },
            { key: "essays", label: "Essays" },
            { key: "about", label: "About" }
          ].map(item => (
            <button
              key={item.key}
              onClick={() => { setActiveSection(item.key); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Cormorant Garamond', serif", fontSize: 14,
                fontWeight: activeSection === item.key ? 700 : 400,
                color: activeSection === item.key ? "#2D2A26" : "#8A7E72",
                letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 0",
                borderBottom: activeSection === item.key ? "1.5px solid #5B3A29" : "1.5px solid transparent",
                transition: "all 0.2s"
              }}
            >{item.label}</button>
          ))}
        </div>
      </nav>

      <header style={{
        padding: "160px 48px 80px", maxWidth: 1100, margin: "0 auto",
        animation: "heroFade 1.2s ease"
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500,
          letterSpacing: "0.25em", textTransform: "uppercase", color: "#8A7E72", marginBottom: 24
        }}>Chalmers' Taxonomy of Consciousness</div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 96, fontWeight: 700,
          lineHeight: 1.05, margin: "0 0 0 -4px", color: "#2D2A26", letterSpacing: "-0.02em"
        }}>Possible Minds</h1>
        <div style={{
          width: 80, height: 2, background: "#5B3A29", margin: "32px 0",
          animation: "lineGrow 0.8s ease 0.4s both"
        }} />
        <p style={{
          fontFamily: "'Source Serif 4', serif", fontSize: 20, lineHeight: 1.7,
          color: "#4A4540", maxWidth: 600, margin: 0, fontWeight: 300
        }}>
          Which systems are conscious? As we build machines of increasing sophistication, the
          philosophical positions that once felt abstract now carry urgent practical weight — scientifically and morally.
        </p>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px 120px" }}>

        {activeSection === "matrix" && (
          <div style={{ animation: "fadeSlideIn 0.4s ease" }}>
            <div style={{ marginBottom: 48, maxWidth: 680 }}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 600,
                letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A7E72", margin: "0 0 16px 0"
              }}>The Landscape</h2>
              <p style={{
                fontFamily: "'Source Serif 4', serif", fontSize: 17, lineHeight: 1.75,
                color: "#4A4540", margin: 0
              }}>
                {matrixMode === "arguments"
                  ? "Seven discriminating questions — the decision points that separate Chalmers' six positions. Each column represents a philosophical commitment; each subsumes several equivalent arguments. Click any column header to see what it contains. Click any row to expand the position."
                  : "Shift the matrix from abstract commitments to concrete verdicts. Each column is a candidate system — click any system header to see how the positions divide on LLMs, octopuses, thermometers, whole-brain emulations, microphysical primitives, and Block's China Brain."}
              </p>
              <div style={{
                marginTop: 24,
                display: "inline-flex",
                padding: 4,
                background: "#E8E2DA",
                border: "1px solid #D4C9BC",
                borderRadius: 4,
                gap: 4
              }}>
                {[
                  { key: "arguments", label: "Arguments" },
                  { key: "systems", label: "Systems" }
                ].map((item) => {
                  const active = matrixMode === item.key;
                  const accent = item.key === "systems" ? "#1B6CA8" : "#5B3A29";
                  return (
                    <button
                      key={item.key}
                      onClick={() => handleModeChange(item.key)}
                      style={{
                        background: active ? "#FDFBF8" : "transparent",
                        border: active ? `1px solid ${accent}55` : "1px solid transparent",
                        color: active ? accent : "#8A7E72",
                        cursor: "pointer",
                        padding: "9px 16px",
                        borderRadius: 2,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        fontWeight: active ? 600 : 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        transition: "all 0.2s"
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
              <div style={{
                marginTop: 20, display: "flex", gap: 20, flexWrap: "wrap",
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11
              }}>
                <span><span style={{ color: "#2D6A4F", fontWeight: 700 }}>YES</span> <span style={{ color: "#8A7E72" }}>affirms</span></span>
                {matrixMode === "systems" && <span><span style={{ color: "#4A7B9D", fontWeight: 700 }}>YES*</span> <span style={{ color: "#8A7E72" }}>affirms, with caveats</span></span>}
                <span><span style={{ color: "#9B2226", fontWeight: 700 }}>NO</span> <span style={{ color: "#8A7E72" }}>denies</span></span>
                <span><span style={{ color: "#B08D57", fontWeight: 700 }}>~</span> <span style={{ color: "#8A7E72" }}>complicated</span></span>
                <span><span style={{ color: "#999", fontWeight: 600 }}>N/A</span> <span style={{ color: "#8A7E72" }}>rejects framing</span></span>
              </div>
            </div>

            <MatrixView
              onSelectPosition={handleSelectPosition}
              selectedId={selectedPosition}
              onSelectColumn={handleSelectColumn}
              selectedColIdx={selectedCol}
              mode={matrixMode}
            />

            <div ref={colRef}>
              {matrixMode === "arguments" ? (
                <ColumnDetail question={selectedQuestion} onClose={() => setSelectedCol(null)} />
              ) : (
                <SystemDetail system={selectedSystem} positions={POSITIONS} onClose={() => setSelectedCol(null)} />
              )}
            </div>

            <div ref={detailRef}>
              <PositionDetail position={selectedPos} onClose={() => setSelectedPosition(null)} />
            </div>

            {matrixMode === "arguments" && (
            <div style={{ marginTop: 80 }}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 600,
                letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A7E72", margin: "0 0 24px 0"
              }}>Reading the Pattern</h2>
              <div className="reading-cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {[
                  {
                    title: "The Materialists (A, B)",
                    desc: "Type-A closes the epistemic gap entirely — consciousness just IS function. Type-B concedes a real epistemic gap but denies any ontological gap — consciousness is physical, the identity is a posteriori.",
                    border: "#4A3728"
                  },
                  {
                    title: "The Dualists (D, E, O)",
                    desc: "Type-D (interactionism), Type-E (epiphenomenalism), and Type-O (overdetermination) all accept that consciousness is non-physical. They split on causal closure and mental causation: D denies closure — consciousness causally intervenes. E accepts closure — consciousness is causally inert. O accepts closure but preserves causation via overdetermination. Chalmers frames E as the forced consequence of accepting both zombies and closure.",
                    border: "#6B2D48"
                  },
                  {
                    title: "The Monism (F)",
                    desc: "Type-F (Russellian monism) fills the Russellian gap with phenomenal or protophenomenal intrinsic properties — preserving closure while respecting the explanatory gap. Its internal taxonomy is the richest: constitutive vs. non-constitutive, Russellian vs. non-Russellian, panpsychism vs. panprotopsychism. Chalmers considers Type-F the most promising option; the combination problem is its central challenge.",
                    border: "#5B4A00"
                  }
                ].map((c, i) => (
                  <div key={i} style={{
                    padding: "28px 32px", background: "#FDFBF8", border: "1px solid #E8E2DA",
                    borderLeft: `3px solid ${c.border}`, borderRadius: 2
                  }}>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700,
                      color: "#2D2A26", margin: "0 0 12px 0"
                    }}>{c.title}</h3>
                    <p style={{
                      fontFamily: "'Source Serif 4', serif", fontSize: 15, lineHeight: 1.7,
                      color: "#6B6460", margin: 0
                    }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        )}

        {activeSection === "essays" && (
          <div style={{ animation: "fadeSlideIn 0.4s ease", maxWidth: 720 }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A7E72", margin: "0 0 8px 0"
            }}>Essays</h2>
            <p style={{
              fontFamily: "'Source Serif 4', serif", fontSize: 17, lineHeight: 1.75,
              color: "#4A4540", margin: "0 0 32px 0"
            }}>
              A growing collection of essays exploring each position and the broader question of
              machine consciousness. New pieces added as thinking develops.
            </p>
            <EssayStub title="Type A and the Disappearing Problem" subtitle="Dennett, Frankish, and the case that the hard problem is a cognitive illusion. What it would take for deflationism to succeed — and what it costs." date="FORTHCOMING" tags={["Type-A", "Illusionism", "Hard Problem"]} />
            <EssayStub title="The Identity Gambit" subtitle="Type-B materialism accepts the epistemic gap but denies the ontological one. How a posteriori identity works, and why Chalmers thinks it can't close the explanatory gap." date="FORTHCOMING" tags={["Type-B", "Identity", "Kripke"]} />
            <EssayStub title="The Cartesian Escape Hatch" subtitle="Type-D interactionism is unfashionable, empirically costly, and the only position that preserves both the reality of consciousness and its causal power. What would it take to revive it?" date="FORTHCOMING" tags={["Type-D", "Interactionism", "Causal Closure"]} />
            <EssayStub title="Epiphenomenal Shadows" subtitle="Type-E accepts that consciousness is real but causally inert — the forced consequence of accepting zombies and causal closure simultaneously. The philosophical cost of the forced move." date="FORTHCOMING" tags={["Type-E", "Epiphenomenalism", "Zombies"]} />
            <EssayStub title="Filling the Gap" subtitle="Type-F monism claims phenomenal properties are the intrinsic natures of physical reality. The most promising option per Chalmers — but the combination problem looms." date="FORTHCOMING" tags={["Type-F", "Russellian Monism", "Combination Problem"]} />
            <EssayStub title="The Zombie at the Terminal" subtitle="Why the conceivability of philosophical zombies matters more than ever in an age of large language models — and how each Chalmers type responds." date="FORTHCOMING" tags={["P-Zombies", "LLMs", "Type-B vs Type-D"]} />
            <EssayStub title="The Combination Problem Is Everyone's Problem" subtitle="Why the hardest objection to Type-F monism implicates every theory that takes emergence seriously." date="FORTHCOMING" tags={["Combination", "Type-F", "Emergence"]} />
          </div>
        )}

        {activeSection === "about" && (
          <div style={{ animation: "fadeSlideIn 0.4s ease", maxWidth: 640 }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A7E72", margin: "0 0 32px 0"
            }}>About This Project</h2>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 17, lineHeight: 1.85, color: "#4A4540" }}>
              <p style={{ margin: "0 0 24px 0" }}>
                We are building increasingly sophisticated artificial minds without any consensus on what
                consciousness is, which systems have it, or whether it matters.
              </p>
              <p style={{ margin: "0 0 24px 0" }}>
                This site maps Chalmers' six positions — Type-A, B, D, E, F, and O — against seven
                discriminating questions. The questions are parsimonious: each is logically independent of the others,
                and each subsumes several equivalent thought experiments and arguments. Together they
                are sufficient to uniquely separate every position in the taxonomy.
              </p>
              <p style={{ margin: "0 0 24px 0" }}>
                Crucially, these positions are not all independent. Some are forced moves: accept both zombies
                and causal closure, and you are a Type-E epiphenomenalist whether you like it or not. Accept the
                hard problem but deny zombies, and you are pushed toward Type-F Russellian monism.
                The matrix makes this nesting explicit — Chalmers' types that look distinct often share
                answer vectors and the differences trace back to a single upstream commitment.
              </p>
              <p style={{ margin: "0 0 0 0", fontStyle: "italic", color: "#8A7E72" }}>
                This project is a living document. Positions are refined, essays added, and the
                landscape updated as the conversation develops.
              </p>
            </div>
            <div style={{
              marginTop: 48, padding: "24px 28px", background: "#FDFBF8",
              border: "1px solid #E8E2DA", borderRadius: 2
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600,
                letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A7E72", marginBottom: 16
              }}>Core References</div>
              {[
                "Chalmers, D. (1996). The Conscious Mind. Oxford University Press.",
                "Chalmers, D. (2015). 'Panpsychism and Panprotopsychism.' In Alter & Nagasawa (eds.), Consciousness in the Physical World.",
                "Chalmers, D. (2016). 'The Combination Problem for Panpsychism.' In Brüntrup & Jaskolla (eds.), Panpsychism.",
                "Descartes, R. (1641). Meditations on First Philosophy.",
                "Tononi, G. et al. (2023). 'Integrated Information Theory (IIT) 4.0.' PLoS Computational Biology.",
                "Dennett, D. (1991). Consciousness Explained. Little, Brown.",
                "Frankish, K. (2016). 'Illusionism as a Theory of Consciousness.' Journal of Consciousness Studies 23.",
                "Searle, J. (1992). The Rediscovery of the Mind. MIT Press.",
                "Goff, P. (2017). Consciousness and Fundamental Reality. Oxford University Press.",
                "Strawson, G. (2006). 'Realistic Monism: Why Physicalism Entails Panpsychism.' Journal of Consciousness Studies 13.",
                "Russell, B. (1927). The Analysis of Matter. Kegan Paul.",
                "Rosenthal, D. (2005). Consciousness and Mind. Oxford University Press.",
                "Popper, K. & Eccles, J. (1977). The Self and Its Brain. Springer.",
                "Miller, G. (2018). 'Can Subjects Be Proper Parts of Subjects? The De-Combination Problem.' Ratio 31.",
                "Roelofs, L. (2019). Combining Minds. Oxford University Press."
              ].map((s, i) => (
                <div key={i} style={{
                  fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#6B6460",
                  lineHeight: 1.6, marginBottom: 6, paddingLeft: 16, borderLeft: "2px solid #E8E2DA"
                }}>{s}</div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer style={{
        borderTop: "1px solid #E8E2DA", padding: "40px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 14, color: "#8A7E72", letterSpacing: "0.1em"
        }}>Possible Minds — A Living Document</div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#B0A89C", letterSpacing: "0.05em"
        }}>Eight positions · Seven questions · One problem</div>
      </footer>
    </div>
  );
}
