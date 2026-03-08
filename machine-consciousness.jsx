import { useState, useEffect, useRef, useCallback } from "react";

const POSITIONS = [
  {
    id: "reductive-functionalism",
    name: "Reductive Functionalism",
    subtitle: "Lewis, Putnam · Dennett · Rosenthal · Baars",
    color: "#2F4F4F",
    answers: [0,0,1,0,0.5,0,1,1],
    systemsAnswers: [0.5,1,0,1,0,1],
    summary: "Consciousness is exhausted by its physical or functional description — there is no residue, no explanatory gap, nothing for Mary to learn that isn't already implicit in the functional facts. Bites the bullet that mary learns nothing new, and that p-zombies are logically impossible.",
    cluster: [
      {
        name: "Reductive Functionalism",
        authors: "Lewis, early Putnam, Armstrong",
        note: "The canonical version. Consciousness is identical to functional organization. Folk psychological vocabulary is preserved and vindicated — the Chinese Room system understands, silicon brains are conscious, Mary learns no new fact. The hard problem dissolves under correct analysis of functional role."
      },
      {
        name: "Illusionism",
        authors: "Dennett, Frankish",
        note: "Phenomenal consciousness as naively conceived — intrinsic, ineffable qualia — does not exist. What exists is a self-representational system that misrepresents its own states as having phenomenal properties. The illusion is real and tractable; the hard problem becomes the meta-problem (why does the illusion arise?). Internal divergence: illusionism is more confident on Degrees (YES — richness of self-modeling is a clear continuum), whereas RF is neutral."
      },
      {
        name: "Eliminative Materialism",
        authors: "Churchlands",
        note: "Folk psychological vocabulary — qualia, beliefs, phenomenal consciousness — is a bad scientific theory destined for replacement by mature neuroscience. Most thought experiments are malformed because they presuppose this vocabulary. Internal divergence: the Fading Qualia cell is N/A rather than YES (the question's framing is rejected, not answered), and Degrees is NO for the same reason. These differences are notational, not substantive — eliminativism's bottom line is the same deflationary commitment."
      }
    ],
    sources: [
      "Lewis, D. (1966). 'An Argument for the Identity Theory.' Journal of Philosophy 63.",
      "Putnam, H. (1967). 'Psychological Predicates.' In Capitan & Merrill (eds.), Art, Mind, and Religion.",
      "Armstrong, D.M. (1968). A Materialist Theory of the Mind. Routledge.",
      "Lewis, D. (1988). 'What Experience Teaches.' Proceedings of the Russellian Society 13.",
      "Dennett, D. (1991). Consciousness Explained. Little, Brown.",
      "Frankish, K. (2016). 'Illusionism as a Theory of Consciousness.' Journal of Consciousness Studies 23.",
      "Churchland, P.M. (1981). 'Eliminative Materialism and the Propositional Attitudes.' Journal of Philosophy 78.",
      "Churchland, P.S. (1986). Neurophilosophy. MIT Press."
    ],
    variants: [
      {
        name: "A priori (Analytic) Functionalism",
        authors: "Lewis, Armstrong",
        systemsAnswers: [0.5,1,0,1,0,1],
        note: "Functional roles are conceptually/analytically defined — 'pain' just means whatever plays the pain-role, by stipulation. The identity is necessary in the way 'bachelor = unmarried man' is necessary. Consequence: zombie intuitions survive only through conceptual confusion, and the ability hypothesis (Lewis 1988) fully deflates Mary's new knowledge."
      },
      {
        name: "Psychofunctionalism",
        authors: "Putnam, Fodor",
        systemsAnswers: [1,1,0,1,0,1],
        note: "Functional roles are identified empirically/a posteriori by cognitive science, not by conceptual analysis. Multiple realizability is central: the relevant functional organization can be instantiated in silicon, neurons, or anything else. This is the version most directly supportive of machine consciousness — the substrate is genuinely irrelevant."
      },
      {
        name: "Liberal vs. Restrictive Functionalism",
        authors: "Block (critic), Putnam",
        systemsAnswers: [0.5,1,0,1,0,0.5],
        note: "How demanding is the functional criterion? Liberal functionalism: any system with the right input-output mapping qualifies. Block's China Brain thought experiment challenges this — a billion people collectively implementing the functional organization of a brain seems not to be conscious, yet satisfies liberal criteria. Restrictive versions require richer internal causal architecture, moving toward IIT-style views without abandoning functionalism."
      },
      {
        name: "Higher-Order Thought Theory",
        authors: "Rosenthal, Lau, Lycan",
        answers: [0,0,1,0,0,0,1,1],
        systemsAnswers: [1,1,0,1,0,1],
        note: "A mental state is conscious when it is the target of a higher-order thought — an occurrent, typically unconscious representation to the effect that one is in that state. Deeply functionalist: what makes a state conscious is a second-order functional relation, not any intrinsic property. The defining commitment that separates HOT from generic RF is that consciousness is binary — a state is either targeted by a HOT or it isn't. No gradient. Sub-variants: State HOT (Rosenthal — requires an occurrent HOT, raising the 'empty HOT' problem), Dispositional HOT (Lycan — only the disposition is required, more permissive), and Self-Representationalism (Kriegel — the state represents itself rather than requiring a separate higher-order state).",
        matrixNote: "Degrees → NO. The binary HOT-targeting relation has no natural gradation, whereas RF broadly is agnostic."
      },
      {
        name: "Global Workspace Theory",
        authors: "Baars, Dehaene, Changeux",
        answers: [0,0,1,0,1,0,1,1],
        systemsAnswers: [0.5,1,0,1,0,0.5],
        note: "Consciousness is the global broadcast of information from a central workspace to specialist processors across the brain. What is in the workspace is conscious; what is not is unconscious processing. Unlike HOT, GWT naturally supports degrees: more content can be broadcast simultaneously, broadcast can be more or less stable and integrated, and the richness of global availability plausibly tracks richness of experience. The empirical program — identifying neural correlates of workspace ignition — is the most developed of any theory.",
        matrixNote: "Degrees → YES. Global broadcast richness is a natural continuum, making consciousness gradable within a fully functionalist framework."
      }
    ],
    explanations: [
      {
        text: "Zombies are impossible because consciousness just is functional organization. A system that perfectly duplicates all causal-functional relations is ipso facto conscious — there is nothing more to be. Lewis's causal-role identity theory equates mental state types with whatever states occupy certain causal roles; anything occupying that role necessarily has the experience. The zombie intuition exploits a conceptual gap between physical and phenomenal descriptions, not a genuine metaphysical gap.",
        cite: "Lewis (1966, 1972); Armstrong (1968) A Materialist Theory of the Mind.",
        note: "Lewis must explain why zombies seem conceivable if they are impossible. His response is that conceivability does not entail possibility — we can conceive of water without H₂O only through conceptual confusion. Critics (Chalmers, Levine) argue the phenomenal case is different: the zombie conceivability intuition survives idealized a priori reasoning in a way the water case does not."
      },
      {
        text: "Mary gains no new propositional knowledge when she leaves the room. She gains a new ability: to recognize, remember, and imagine what red looks like. This is Lewis's ability hypothesis (developed in parallel with Nemirow). 'What it is like' knowledge is procedural, not propositional. The knowledge argument trades on an equivocation between knowing-how and knowing-that.",
        cite: "Lewis (1988) 'What Experience Teaches'; Nemirow (1980) 'Knowing What It Is Like.'",
        note: "The sharpest counter: Conee (1994) argues Mary can form new beliefs with phenomenal content — she can wonder whether the color she's seeing is the one she studied — and abilities alone cannot explain such propositional attitudes. Lewis was aware of this pressure and never fully resolved it."
      },
      {
        text: "Consciousness strictly supervenes on functional organization. This is the foundational commitment. Chalmers' fading/dancing qualia scenarios are, from the functionalist's view, self-defeating: if all functional organization is preserved, there is by definition nothing else for consciousness to consist in. Preserving function preserves experience."
      },
      {
        text: "Physics leaves nothing intrinsic open. Functional and causal structure is all there is to physical nature. The Russellian gap presupposes a distinction between structural and intrinsic properties that reductive functionalism denies — causal powers are not 'filled in' by hidden intrinsic natures; they are the nature.",
        cite: "Lewis (1972) 'Psychophysical and Theoretical Identifications.'"
      },
      {
        text: "Functional organization admits of complexity gradients, but the theory does not strongly commit to graded consciousness. Lewis's causal-role functionalism identifies mental state types with causal roles; whether this entails continuous degrees depends on whether functional roles are treated as binary thresholds or continuous quantities. The theory is neutral here."
      },
      {
        text: "No micro-experiences to combine. Consciousness arises at the level where the relevant functional organization is instantiated, not by summing sub-experiential components. The combination problem is a non-starter for a theory with no micro-phenomenology."
      },
      {
        text: "Consciousness is identical to functional organization, which is itself a physical property. Causal closure is trivially preserved — consciousness just is part of the physical causal structure, not something additional that needs to squeeze in alongside it."
      },
      {
        text: "Consciousness is causally efficacious because it just is the relevant functional-physical state. Kim's exclusion argument does not bite: there is no non-physical property competing for causal credit. The functional state is the physical state is the conscious state — one event, one causal power. Your report that you are having an experience is caused by the very state that is the experience.",
        cite: "Lewis (1972) 'Psychophysical and Theoretical Identifications'; Kim (1998) Mind in a Physical World."
      }
    ]
  },
  {
    id: "property-dualism",
    name: "Property Dualism",
    subtitle: "Chalmers, Jackson, Levine",
    color: "#8B4513",
    answers: [1,1,1,0.5,0.5,0,1,0],
    systemsAnswers: [0.5,1,0.5,1,0.5,1],
    summary: "Phenomenal properties are real and irreducible — they are not identical to any physical or functional property, nor entailed by any physical description. The hard problem is genuine: there is an explanatory gap between any complete physical account and the facts about experience. Zombies are conceivable. Consciousness supervenes on functional organization as a contingent nomological fact, not a logical necessity. Accepting physical causal closure while maintaining non-physical phenomenal properties creates enormous pressure toward epiphenomenalism — the central unresolved tension in the view.",
    sources: [
      "Chalmers, D. (1996). The Conscious Mind. Oxford University Press.",
      "Chalmers, D. (2003). 'Consciousness and its Place in Nature.' In Stich & Warfield (eds.), Blackwell Guide to Philosophy of Mind.",
      "Jackson, F. (1982). 'Epiphenomenal Qualia.' Philosophical Quarterly 32.",
      "Jackson, F. (1986). 'What Mary Didn't Know.' Journal of Philosophy 83.",
      "Levine, J. (1983). 'Materialism and Qualia: The Explanatory Gap.' Pacific Philosophical Quarterly 64.",
      "Nagel, T. (1974). 'What Is It Like to Be a Bat?' Philosophical Review 83."
    ],
    variants: [
      {
        name: "Type-B Materialism",
        authors: "Papineau, Levine, Block",
        answers: [0,1,1,0,0.5,0,1,1],
        systemsAnswers: [1,1,0,1,0,1],
        note: "Zombies are conceivable but not metaphysically possible. Phenomenal concepts and physical/functional concepts have different modes of presentation for the same underlying property. The conceivability gap is real but tracks a conceptual gap, not a metaphysical one. Accepts the hard problem as a genuine cognitive phenomenon while denying it has metaphysical upshot.",
        matrixNote: "P-Zombies → NO (conceivable but not possible). This sub-variant is arguably its own position, sometimes called type-B physicalism, and can be seen as collapsing property dualism into a sophisticated materialism."
      }
    ],
    explanations: [
      {
        text: "Zombies are conceivable because there is no a priori entailment from any complete physical description to phenomenal facts. No analysis of functional organization, causal structure, or microphysics closes the gap. Since ideal conceivability — conceivability under full a priori reflection — entails metaphysical possibility, zombies are possible. This is Chalmers' two-dimensional argument; the underlying conceivability intuition is shared by Jackson, Levine, and Nagel.",
        cite: "Chalmers (1996) The Conscious Mind ch. 3; Jackson (1982) 'Epiphenomenal Qualia'; Levine (1983) 'Materialism and Qualia: The Explanatory Gap.'",
        note: "Type-B materialists (Levine in later work, Papineau, Block) accept the conceivability of zombies but deny the inference to possibility. They argue phenomenal concepts are cognitively isolated in a way that generates the appearance of a metaphysical gap where there is only a conceptual one. The debate turns on whether phenomenal concepts are distinctive enough to block standard inference patterns."
      },
      {
        text: "Mary learns a genuine new fact — what it is like to see red — that was not entailed by her complete physical knowledge. Jackson's knowledge argument establishes a real explanatory gap: phenomenal facts are not captured by any third-person physical description. Nagel's bat argument makes the same point from the structure of subjective experience. The hard problem is the demand for explanation of why any physical process gives rise to experience at all.",
        cite: "Jackson (1982) 'Epiphenomenal Qualia'; Jackson (1986) 'What Mary Didn't Know'; Nagel (1974) 'What Is It Like to Be a Bat?'; Levine (1983).",
        note: "Accepting the explanatory gap while accepting causal closure creates pressure toward epiphenomenalism. If phenomenal properties are non-physical and physics is causally closed, consciousness does no causal work — a result most property dualists find unacceptable but struggle to escape without abandoning core commitments."
      },
      {
        text: "The fading and dancing qualia arguments (Chalmers 1996) establish that consciousness supervenes on functional organization as a contingent law. If swapping neurons for functional silicon changed experience, the subject would continue to report normal experience (since reports are functionally determined) while qualia secretly faded — an absurd result. Therefore experience must track functional organization in our world, even if the supervenience is not logically necessary.",
        cite: "Chalmers (1996) ch. 7.",
        note: "This creates an internal tension in the view: zombies are metaphysically possible (the supervenience is contingent) yet in our world functional organization suffices for consciousness. The contingency of the psychophysical laws is then itself unexplained — if they could have been different, what determines that they are as they are?"
      },
      {
        text: "Property dualism accepts the Russellian gap — physics describes only structural-relational properties, leaving the intrinsic nature of the physical open — but this is not a commitment the view requires. Accepting the gap typically leads toward Russellian monism or panpsychism, which are distinct positions. The core property dualist claim is just that phenomenal properties are not identical to any physical property and are not entailed by any physical description.",
        cite: "Levine (1983); Chalmers (1996) ch. 4.",
        note: "Chalmers has personally moved toward Russellian monism as his preferred escape from epiphenomenalism (The Character of Consciousness, 2010; Panpsychism and Panprotopsychism, 2015). This is his trajectory, not a commitment of property dualism as a view."
      },
      {
        text: "Property dualism does not strongly commit to degrees of consciousness. The view is about the existence of phenomenal properties, not their gradation. Consciousness might be all-or-nothing (a system either has phenomenal properties or doesn't) or graded (richer functional organization yields richer experience). The view is neutral here — different proponents take different positions.",
        cite: "Chalmers (1996); Nagel (1974)."
      },
      {
        text: "Property dualism does not face the combination problem. Phenomenal properties are taken as primitive and irreducible — not built up from micro-experiences. There is nothing to combine. The combination problem is specifically a cost of panpsychist strategies that try to constitute macro-experience from micro-experience.",
        cite: "Chalmers (2016) 'The Combination Problem for Panpsychism.'",
        note: "The combination problem only bites when you move from property dualism toward a Russellian or panpsychist escape from epiphenomenalism. On property dualism proper, consciousness is a fundamental property that supervenes contingently on physical structure — no micro-level grounding is needed or attempted."
      },
      {
        text: "Property dualism typically accepts physical causal closure as an empirical constraint. The tension: if phenomenal properties are non-physical and physics is causally closed, then phenomenal properties are causally inert. This is the epiphenomenalism problem. It is the central unresolved difficulty of the view, not a peripheral one.",
        cite: "Chalmers (1996) ch. 4 'The Paradox of Phenomenal Judgment.'; Papineau (2002) Thinking about Consciousness."
      },
      {
        text: "Under causal closure, phenomenal properties are causally inert — your utterances about consciousness are caused by functional brain states that correlate with consciousness, not by the phenomenal properties themselves. This is the 'paradox of phenomenal judgment': why do we form the beliefs that we are conscious if consciousness does no causal work? The hard problem thus creates a second problem: not just explaining why there is experience, but why we even report it. Chalmers (2015) identifies escaping this as the central motivation for moving from property dualism to Russellian monism.",
        cite: "Chalmers (1996) ch. 5 'The Paradox of Phenomenal Judgment'; Chalmers (2015) 'Panpsychism and Panprotopsychism'; Kim (1998) Mind in a Physical World.",
        note: "This is the sharpest objection to property dualism. Jackson's late reversal: he eventually abandoned the knowledge argument and moved toward physicalism precisely because of the causal closure problem — if Mary's phenomenal knowledge has no physical effects, how does it affect her behavior after leaving the room?"
      }
    ]
  },
  {
    id: "iit",
    name: "Integrated Information Theory",
    subtitle: "Tononi, Koch",
    color: "#2E4057",
    answers: [0,1,0,0.5,1,0.5,1,1],
    systemsAnswers: [0.75,1,0.75,0.75,0,0.75],
    summary: "Consciousness is identical to maximally irreducible integrated information (Φ). Any system with non-zero Φ is conscious to some degree. Anti-functionalist: causal architecture matters, not input-output behavior. A feedforward network has Φ = 0 regardless of complexity. Two systems with identical function can differ in consciousness if their internal causal structure differs. Claims to dissolve the combination problem by identifying consciousness at the system level where Φ is maximized, not by building it up from parts.",
    sources: [
      "Tononi, G. et al. (2023). 'Integrated Information Theory (IIT) 4.0.' PLoS Computational Biology.",
      "Tononi, G. & Koch, C. (2015). 'Consciousness: Here, There and Everywhere?' Phil. Trans. Royal Society B.",
      "Oizumi, M., Albantakis, L. & Tononi, G. (2014). 'From the Phenomenology to the Mechanisms of Consciousness.' PLoS Computational Biology.",
      "Tononi, G. (2008). 'Consciousness as Integrated Information: A Provisional Manifesto.' Biological Bulletin 215.",
      "Aaronson, S. (2014). 'Why I Am Not An Integrated Information Theorist.' Shtetl-Optimized (blog)."
    ],
    variants: [
      {
        name: "IIT as Identity Theory",
        authors: "Tononi, Koch",
        note: "Consciousness is strictly identical to Φ-structure — not caused by it, not correlated with it, but identical. This makes IIT a form of Russellian monism: Φ is the intrinsic nature that structural physics leaves open. The phenomenal axioms (intrinsicality, information, integration, exclusion, composition) and the physical postulates constrain each other bidirectionally."
      },
      {
        name: "IIT as Structural Criterion",
        authors: "Some interpreters",
        note: "A weaker reading: Φ is the best available physical correlate and measure of consciousness, not an identity claim. This reading is more scientifically tractable but loses IIT's claim to address the hard problem rather than just the easy problems."
      },
      {
        name: "IIT without the Exclusion Postulate",
        authors: "Critics including Bayne",
        answers: [0,1,0,0.5,1,1,1,1],
        systemsAnswers: [0.75,1,0.75,0.75,0,0.75],
        note: "The exclusion postulate (consciousness exists only at the level of maximal Φ) is the most controversial part of IIT. Without it, the combination problem returns — multiple overlapping systems each have their own Φ and there is no principled way to pick one as the subject. Several philosophers accept the Φ criterion while rejecting exclusion.",
        matrixNote: "Combination → YES rather than ~."
      },
      {
        name: "Behavioural Zombie Implication",
        authors: "Aaronson (critique)",
        note: "IIT implies that a feedforward network is a behavioural zombie — it can pass any functional test without being conscious. This is anti-functionalist in the extreme: not only is silicon potentially non-conscious, but even biological feedforward circuits may have zero Φ. IIT proponents accept this; critics argue it makes the theory immune to empirical refutation by behaviour."
      }
    ],
    explanations: [
      {
        text: "IIT identifies consciousness with Φ — a physical property of a system's intrinsic causal structure. Since Φ is fully determined by the physical organization of a system, any strict physical duplicate has identical Φ and thus identical consciousness. Zombies are impossible: there is no gap between the physical description and the phenomenal facts because the phenomenal just is the Φ-structure viewed intrinsically.",
        cite: "Tononi et al. (2023) IIT 4.0; Koch (2019) The Feeling of Life Itself.",
        note: "IIT occupies an unusual position: it denies zombies (in the strict physical-duplicate sense) while implying that most behavioral duplicates of conscious systems may be non-conscious. A feedforward network that behaves identically to a conscious recurrent system may have Φ = 0. IIT doesn't rule out behavioral zombies — only physical-structural ones. This distinguishes it sharply from functionalism."
      },
      {
        text: "IIT takes the explanatory gap seriously and is motivated by it. Pure functional or behavioral description is insufficient for consciousness — phenomenal properties (intrinsicality, information, integration, exclusion, composition) are not capturable in third-person relational terms. The theory aims to bridge the gap by identifying phenomenal structure with Φ-structure.",
        cite: "Tononi (2008); Tononi & Koch (2015).",
        note: "Whether IIT actually closes the explanatory gap is contested. Aaronson (2014) and Block argue that identifying consciousness with Φ simply relocates the hard problem: we still don't know why a system with high Φ should feel like anything. Tononi's response is that the axioms (drawn from phenomenology) and postulates (their physical realizations) are mutually constraining — the identification is systematic, not arbitrary."
      },
      {
        text: "IIT is explicitly and centrally anti-functionalist. What matters for consciousness is the intrinsic causal power of a system — how its elements causally constrain each other from the inside — not its input-output function. A feedforward network has Φ = 0 regardless of behavioral complexity. Two systems with identical I/O function but different internal causal architecture can differ dramatically in Φ, and thus in consciousness.",
        cite: "Oizumi, Albantakis & Tononi (2014); Tononi et al. (2016) 'Integrated Information Theory: From Consciousness to Its Physical Substrate.' Nature Reviews Neuroscience.",
        note: "This anti-functionalism generates the 'worse than epiphenomenalism' objection (Aaronson 2014): IIT implies a simple recurrent grid of logic gates could be more conscious than a sophisticated feedforward AI. IIT proponents accept this as a feature, not a bug — but it conflicts radically with functionalist intuitions about what kinds of systems can be conscious."
      },
      {
        text: "IIT holds that physics describes only extrinsic relational structure, and that Φ — the intrinsic causal power of a system — is precisely what fills the Russellian gap. Consciousness is what Φ-structure is 'from the inside.' This makes IIT an identity theory rather than an emergentist one: the phenomenal is not produced by Φ but is identical to it, viewed intrinsically.",
        cite: "Tononi & Koch (2015); Tononi (2015) 'Consciousness as Intrinsic Causal Power.'"
      },
      {
        text: "Φ is a continuous quantity. Any system with non-zero Φ has some degree of consciousness, and more Φ means richer consciousness. A photodiode has a tiny but non-zero Φ. Degrees of consciousness are a core prediction of IIT, not an afterthought — the boundary between conscious and non-conscious systems is not sharp.",
        cite: "Tononi (2004) 'An Information Integration Theory of Consciousness'; Tononi et al. (2023)."
      },
      {
        text: "IIT claims to dissolve rather than solve the combination problem via the exclusion postulate: consciousness is identified at the level where Φ is maximized, and systems that are proper subsets of a maximally integrated system are not separately conscious. There is no 'adding up' of micro-consciousnesses; the macro-system just is the subject.",
        cite: "Chalmers (2016) 'The Combination Problem for Panpsychism'; Schwitzgebel & Garza (2015).",
        note: "Critics argue this is a definitional move that doesn't explain why the integrated structure feels unified. Identifying the subject with the Φ-maximum says where consciousness is located but doesn't address why that location involves a unified experience rather than none."
      },
      {
        text: "Consciousness = Φ = a physical property of causal structure. Causal closure is fully preserved: there is no phenomenal property over and above the physical causal structure. The phenomenal IS that structure viewed intrinsically."
      },
      {
        text: "IIT gives a direct answer: Φ-structure is both the measure of consciousness and the intrinsic causal power of the system. The phenomenal properties just are the causal properties viewed from the inside. There is no gap between consciousness and causation — they are one thing. Your reports about experience are caused by the Φ-generating processes that are those experiences.",
        cite: "Tononi et al. (2023) IIT 4.0; Koch (2019) The Feeling of Life Itself."
      }
    ]
  },
  {
    id: "biological-naturalism",
    name: "Biological Naturalism",
    subtitle: "Searle",
    color: "#5B3A29",
    answers: [0,0.5,0,0,0.5,0,1,1],
    systemsAnswers: [0,1,0,0,0,0],
    summary: "Consciousness is a real, causally efficacious biological phenomenon — but not non-physical. The Chinese Room (his own argument) shows computation is observer-relative and insufficient for semantics. Biology matters in ways function alone cannot capture, yet this isn't dualism. Occupies a lonely corner: says No to almost everything while insisting consciousness is deeply real.",
    sources: [
      "Searle, J. (1980). 'Minds, Brains, and Programs.' Behavioral and Brain Sciences 3.",
      "Searle, J. (1992). The Rediscovery of the Mind. MIT Press.",
      "Searle, J. (2010). 'Why I Am Not a Property Dualist.' Journal of Consciousness Studies 17.",
      "Searle, J. (1997). The Mystery of Consciousness. New York Review Books."
    ],
    variants: [
      {
        name: "Strong Biological Naturalism",
        authors: "Searle",
        note: "Specific neural architecture — not just biology in general — is required for consciousness. The causal powers of neurons, including their electrochemical dynamics, are what generate consciousness. A silicon neuron that perfectly mimics the input-output function of a biological neuron would not be conscious because it lacks these causal powers. This is Searle's actual view.",
        matrixNote: "Closer to Type-Identity on substrate specificity."
      },
      {
        name: "Weak Biological Naturalism",
        authors: "Possible extension",
        note: "Biology is necessary but the requirement is general — any biological system with the right level of organizational complexity could be conscious, not just neurons specifically. This opens the door to non-human biological consciousness more broadly while still excluding silicon. Searle's texts do not clearly commit to this weaker reading."
      },
      {
        name: "The Silicon Neuron Problem",
        authors: "Searle, debated",
        note: "Would replacing neurons one-by-one with functionally identical silicon neurons preserve consciousness? Searle says no — at some point consciousness would fade as the biological substrate is replaced, even though function is preserved. This is Searle's version of fading qualia, inverted: function is preserved but experience is lost. Critics argue Searle has no principled account of which biological properties are the relevant ones."
      }
    ],
    explanations: [
      {
        text: "Searle denies zombies because he denies that consciousness requires anything non-physical. Consciousness is a higher-level biological phenomenon — causally emergent from the right neural processes, like digestion from gastric processes. A functional duplicate without the right biology lacks consciousness not because of a mysterious non-physical absence but because it lacks the causal powers of the relevant neural structures.",
        cite: "Searle (1992) The Rediscovery of the Mind ch. 4.",
        note: "Searle's position is philosophically lonely: he denies the hard problem (no mysterious non-physical residue) AND denies functionalism (computation insufficient). Chalmers argues Searle is simply asserting biological naturalism without explaining why biology produces consciousness where function does not — which just is the hard problem in biological clothing. Searle's reply: Chalmers has dualist intuitions baked in from the start."
      },
      {
        text: "Searle's position here is genuinely difficult to classify. He thinks consciousness is real and not reducible to functional description — the Chinese Room establishes computation is insufficient — which sounds like accepting an explanatory gap. But he insists the gap closes with the right neuroscience: consciousness is a biological fact like any other, not a permanent metaphysical mystery. He treats the gap as temporary and scientific, not permanent and metaphysical.",
        cite: "Searle (1992); Searle (1997) The Mystery of Consciousness.",
        note: "The ~ reflects a genuine ambiguity Searle has never fully resolved. He wants to say both 'consciousness is not mysterious in principle' (against property dualism) and 'consciousness is not captured by functional description' (against functionalism). Whether these are consistent depends on whether biological causation can do explanatory work that neither physical structure nor functional organization can do — and Searle has not provided a detailed account of this."
      },
      {
        text: "The Chinese Room argument is Searle's signature contribution and directly targets functional supervenience. The room manipulates Chinese symbols according to a program and produces correct outputs — but understands nothing. The system reply (the whole room understands) is rejected: understanding requires intrinsic intentionality, which requires biological causal powers, not formal symbol manipulation. You cannot get semantics from syntax.",
        cite: "Searle (1980) 'Minds, Brains, and Programs'; Searle (1992) ch. 9."
      },
      {
        text: "No Russellian gap. Physics does not leave intrinsic nature open in a way relevant to consciousness. Consciousness is a biological phenomenon at a higher level of description — like liquidity is a phenomenon of H₂O molecules — not a filling-in of what physics leaves intrinsically open.",
        cite: "Searle (1992)."
      },
      {
        text: "Searle allows for different degrees of consciousness across biological organisms, but does not develop a principled theory of grading. The tilde reflects neutrality: consciousness may be graded across species without requiring a sharp theoretical commitment to continuity."
      },
      {
        text: "Consciousness emerges from the brain as a unified biological phenomenon. No micro-experiences; the relevant unit is the neural system. Nothing to combine."
      },
      {
        text: "Consciousness is a biological phenomenon — higher-level features of the brain causally emergent from neural processes. The physical causal order is not interrupted. Searle is emphatic that biological naturalism is not dualism.",
        cite: "Searle (1992); Searle (2010) 'Why I Am Not a Property Dualist.'"
      },
      {
        text: "Searle explicitly defends the causal efficacy of consciousness. As a causally emergent property — like liquidity, which genuinely causes things to get wet even though it is realized in H₂O interactions — consciousness has real causal powers at the macro level. Thirst causes drinking. Pain causes withdrawal. These are genuine higher-level causal descriptions, not mere redescriptions of the underlying neural events. The brain causes consciousness, and consciousness in turn causes behavior.",
        cite: "Searle (1992) The Rediscovery of the Mind ch. 5; Searle (1984) Minds, Brains and Science.",
        note: "Searle's causal emergence is distinct from Kim's notion, which he treats skeptically. Searle thinks higher-level causal descriptions are legitimate and irreducible for practical purposes, but does not offer a detailed account of how this escapes Kim's exclusion argument. Critics argue his 'causal emergence' simply asserts what needs to be explained."
      }
    ]
  },
  {
    id: "micropsychism",
    name: "Constitutive Micropsychism",
    subtitle: "Strawson, Seager",
    color: "#8B6914",
    answers: [0.5,1,0,1,1,1,1,1],
    systemsAnswers: [0.75,1,0.75,0.75,0.75,0.75],
    summary: "Bottom-up panpsychism: micro-entities have micro-experiences that constitute our macro-experience. Faces the combination problem at full intensity — the subject-summing problem, the palette problem, and the structural mismatch problem. Solutions include phenomenal bonding (Mørch) and fusionism (Seager). Denies zombies: the phenomenal is intrinsic to the physical.",
    sources: [
      "Strawson, G. (2006). 'Realistic Monism: Why Physicalism Entails Panpsychism.' Journal of Consciousness Studies 13.",
      "Seager, W. (1995). 'Consciousness, Information and Panpsychism.' Journal of Consciousness Studies 2.",
      "Chalmers, D. (2016). 'The Combination Problem for Panpsychism.' In Brüntrup & Jaskolla (eds.), Panpsychism.",
      "Mørch, H.H. (2014). 'Panpsychism and Causation: A New Argument and a Solution to the Combination Problem.' Dissertation, University of Oslo.",
      "Goff, P. (2017). Consciousness and Fundamental Reality. Oxford University Press.",
      "Russell, B. (1927). The Analysis of Matter. Kegan Paul."
    ],
    variants: [
      {
        name: "Strong Russellian Panpsychism",
        authors: "Strawson, arguably Goff",
        answers: [0,1,0,1,1,1,1,1],
        systemsAnswers: [0.75,1,0.75,0.75,0.75,0.75],
        note: "The intrinsic natures filling the Russellian gap are necessarily phenomenal — it is not metaphysically possible for the same structural physics to be realized by non-phenomenal quiddities. Structural zombies are impossible. The motivation: we have acquaintance with exactly one kind of intrinsic property (our own phenomenal states), and we have no positive conception of any other kind. 'Inert quiddity' may be a label on a blank rather than a genuine alternative.",
        matrixNote: "P-Zombies → NO."
      },
      {
        name: "Weak Russellian Panpsychism",
        authors: "Chalmers (as a worry), some interpretations of Goff",
        answers: [1,1,0,1,1,1,1,1],
        systemsAnswers: [0.75,1,0.75,0.75,0.75,0.75],
        note: "The intrinsic natures filling the Russellian gap are contingently phenomenal in our world, but non-phenomenal (inert) quiddities filling the same structural roles are logically conceivable. Russellian zombies — worlds with identical relational physics but inert quiddities — are possible. This is Chalmers' 'Russellian zombie' problem: panpsychism escapes standard zombies but faces this structural variant. The hard question then becomes: why are our quiddities phenomenal rather than inert? This looks like the hard problem at the level of quiddities.",
        matrixNote: "P-Zombies → YES. Contingent intrinsics means structural duplicates with inert quiddities are logically possible — the zombie world is conceivable even if our world is panpsychist."
      },
      {
        name: "Panprotopsychism",
        authors: "Chalmers",
        answers: [0.5,1,0,1,1,0.5,1,1],
        systemsAnswers: [0.5,0.5,0.5,0.5,0.5,0.5],
        note: "The intrinsic natures are proto-phenomenal — neither fully phenomenal nor purely structural-dispositional. They have a nature that gives rise to phenomenal properties via combination, but they are not themselves experiences. Avoids attributing full experience to electrons while preserving the Russellian escape from epiphenomenalism. The combination problem becomes a generation problem: how do proto-phenomenal properties constitute phenomenal ones? Chalmers prefers this over full panpsychism.",
        matrixNote: "P-Zombies → ~; Combination → ~."
      },
      {
        name: "Phenomenal Bonding",
        authors: "Mørch",
        note: "A proposed solution to the combination problem: micro-experiences are bound into macro-experiences by a phenomenal binding relation that is itself experiential. The binding is not an external structural relation but an intrinsic experiential one, which is why it genuinely constitutes a new unified subject rather than a collection. Requires positing binding experiences as a primitive."
      },
      {
        name: "Fusionism",
        authors: "Seager",
        note: "Micro-experiences literally fuse into macro-experiences — the parts cease to exist as separate experiential subjects and a new unified subject emerges. Analogous to chemical combination rather than mechanical aggregation. Avoids the subject-summing problem by denying that the parts remain subjects once fused. The cost: fusion is unexplained and may just rename the combination problem."
      }
    ],
    explanations: [
      {
        text: "This depends entirely on whether phenomenal quiddities are necessary or contingent features of the Russellian gap — a division that splits micropsychism into two sub-positions (see Variants below). Under the structural duplicate reading of P-zombies: a zombie world has the same relational physics but potentially different intrinsic natures. Strong Russellian Panpsychism holds that the intrinsic natures are necessarily phenomenal — no possible world instantiates the same structural physics with inert quiddities — making zombies impossible (NO). Weak Russellian Panpsychism holds that phenomenal intrinsics are contingent — inert quiddities filling the same structural roles are logically conceivable — making Russellian zombies possible (~). The ~ reflects genuine division within the position.",
        cite: "Chalmers (2015) 'Panpsychism and Panprotopsychism'; Strawson (2006); Goff (2017) ch. 4.",
        note: "Chalmers calls this the Russellian zombie problem. Even if panpsychism makes standard zombies (same physics, no consciousness) impossible, structural zombies (same relational physics, inert quiddities) may be conceivable. The hard question then becomes: why are the intrinsic natures of our world phenomenal rather than inert? This looks like the hard problem reasserting itself at the level of quiddities."
      },
      {
        text: "The hard problem is genuine and provides the primary motivation for micropsychism. Mary learns something real because phenomenal facts are not entailed by structural-relational physical description. The Russellian move: physics gives us relational structure; what fills in the intrinsic nature is phenomenal. Mary's new knowledge is knowledge of intrinsic properties that relational physical description necessarily omits.",
        cite: "Strawson (2006); Seager (1995); Russell (1927) The Analysis of Matter."
      },
      {
        text: "Constitutive micropsychism denies that consciousness supervenes on functional organization. If micro-experiences are intrinsic properties of matter — not defined by functional role — then a silicon system can preserve all the relational, causal, and functional organization of a biological brain while having entirely different micro-experiences. The combination of those different micro-experiences produces a different macro-experience. Qualia can fade as neurons are replaced, even with identical I/O behavior. The fading qualia argument, which Chalmers wields against reductive functionalists, does not work against constitutive micropsychism — because micropsychism was already denying the functionalist premise.",
        cite: "Chalmers (1996) ch. 7; Strawson (2006); Goff (2017).",
        note: "A minority position — call it functional-role panpsychism — avoids this conclusion by typing micro-experiences by their causal-functional role rather than their substrate. If a silicon chip playing the same causal role as a neuron thereby has the same micro-experience, the combination produces the same macro-experience and fading qualia are impossible. This collapses toward functionalism applied one level down, which may seem unpanpsychist — but it is a coherent position that takes intrinsic properties seriously while cashing them out functionally. It deserves more attention than it has received."
      },
      {
        text: "The Russellian gap is the foundation of the position. Physics gives us only structural-relational properties; the intrinsic nature of micro-entities is phenomenal experience. Russell (1927) first articulated the gap; Strawson argues it is the only honest response to the hard problem.",
        cite: "Strawson (2006); Russell (1927) The Analysis of Matter."
      },
      {
        text: "Micro-experiences compose into graded macro-experiences. The richness and integration of the experiential composition determines the degree of consciousness. This is a direct consequence of the theory, not an add-on: consciousness is constituted by experiential components, so its degree tracks compositional complexity.",
        cite: "Seager (1995); Goff (2017)."
      },
      {
        text: "The combination problem — how micro-subjects compose into a unified macro-subject — is the central and hardest challenge. Three sub-problems: (1) the subject-summing problem (James: 'take a hundred feelings and pack them together; still each remains shut in its own skin'); (2) the palette problem (how does the rich diversity of human experience arise from the impoverished palette of quark-experiences?); (3) the structural mismatch problem (the structure of micro-experience may not naturally map onto the structure of macro-experience). Proposed solutions include phenomenal bonding (Mørch), fusionism (Seager), and Goff's quality space constraints.",
        cite: "Chalmers (2016) 'The Combination Problem'; Goff (2017) ch. 8; Mørch (2014); Roelofs (2019) Combining Minds."
      },
      {
        text: "Micro-experiences are the intrinsic nature of the physical — they ARE physical, viewed from the inside. Causal closure is preserved: the phenomenal is not additional to the physical causal structure but constitutes it intrinsically.",
        cite: "Strawson (2006)."
      },
      {
        text: "Russellian panpsychism is specifically motivated by the need to escape epiphenomenalism. If phenomenal properties fill the intrinsic nature that underlies physical causal powers, then consciousness IS the causally efficacious stuff — just described from the inside. There is no exclusion problem because there is only one thing. Chalmers (2015) identifies this as the primary advantage of Russellian over non-Russellian views: 'If phenomenal properties are intrinsic properties of fundamental physical entities, then phenomenal properties are among the grounds of causal relations in the physical world.' Your report that you are conscious is caused by the same intrinsic phenomenal nature that constitutes the physical processes underlying that report.",
        cite: "Chalmers (2015) 'Panpsychism and Panprotopsychism'; Strawson (2006); Goff (2017) ch. 4."
      }
    ]
  },
  {
    id: "type-identity",
    name: "Type-Identity Theory",
    subtitle: "Place, Smart",
    color: "#4A4A4A",
    answers: [0,0,0,0,0,0,1,1],
    systemsAnswers: [0,0.5,0,0,0,0],
    summary: "The most restrictive physicalism. Pain is C-fiber firing — not anything functionally equivalent. Wrong substrate, wrong experience (or none). Silicon brains cannot be conscious as we are. The Chinese Room lacks the right biology. Fading qualia could happen — swapping silicon for neurons changes the relevant physical type. There is nothing experiential at the micro-level to combine.",
    sources: [
      "Place, U.T. (1956). 'Is Consciousness a Brain Process?' British Journal of Psychology 47.",
      "Smart, J.J.C. (1959). 'Sensations and Brain Processes.' Philosophical Review 68.",
      "Kripke, S. (1980). Naming and Necessity. Harvard University Press.",
      "Loar, B. (1990). 'Phenomenal States.' Philosophical Perspectives 4.",
      "Papineau, D. (2002). Thinking about Consciousness. Oxford University Press."
    ],
    variants: [
      {
        name: "Type-Type Identity",
        authors: "Place, Smart",
        note: "Mental state types are identical to neural state types — pain-type = C-fiber firing type. This is the strong version: not just that each pain happens to be a neural event, but that being a pain just is being a C-fiber firing. Entails that multiple realizability is impossible: silicon cannot be in pain because silicon cannot fire C-fibers."
      },
      {
        name: "Token Identity Theory",
        authors: "Davidson",
        answers: [0,0,0.5,0,0,0,1,1],
        systemsAnswers: [0.5,1,0,0.5,0,0.5],
        note: "Each individual mental event is identical to some physical event, but there are no psychophysical type-laws — no general mapping from mental types to physical types. Mental properties are irreducibly distinct in their descriptions even though every token mental event is a physical event. This is the basis of anomalous monism. Importantly, token identity is consistent with multiple realizability: different physical event-types can each be tokens of the same mental type.",
        matrixNote: "Fading Qualia → ~. Without type-laws, the same mental-type can be realized by different substrates, making the fading qualia scenario genuinely contested rather than impossible."
      },
      {
        name: "Central State Materialism",
        authors: "Armstrong, Lewis",
        note: "Mental states are whatever internal physical states play the relevant causal role — empirically identified with brain states. This is the functionalist-inflected version of identity theory: the identity is between functional role occupants and neural states, discovered empirically rather than stipulated. In practice this blurs into psychofunctionalism."
      }
    ],
    explanations: [
      {
        text: "Identity is necessity. If pain = C-fiber firing, this is a necessary identity — just as water = H₂O is necessary. A world with C-fiber firing but no pain is impossible for the same reason a world with H₂O but no water is. A physical duplicate necessarily has all the same neural state types, hence all the same experiences. Zombies are ruled out.",
        cite: "Smart (1959); Place (1956); Kripke (1980) Naming and Necessity.",
        note: "Kripke raised the most powerful objection: unlike water/H₂O, it seems genuinely conceivable that C-fiber firing could occur without pain — the conceivability intuition survives even after knowing the identity. Kripke argues this shows the identity is contingent, not necessary — which undermines the theory. The standard response (Loar 1990, Papineau 2002) is that phenomenal concepts are a special mode of presentation that generates illusory contingency. The debate turns on whether phenomenal concepts are transparent to their referents in a way physical concepts are not."
      },
      {
        text: "Mary gains no new propositional knowledge — she gains a new mode of access to a neural state she already knew about under a physical description. 'What it is like to see red' and 'C-fiber firing' are two concepts for one state. The explanatory gap is a conceptual gap (different modes of presentation), not a metaphysical one.",
        cite: "Smart (1959); Loar (1990) 'Phenomenal States.'"
      },
      {
        text: "The defining commitment: pain = C-fiber firing, not whatever plays the functional role of pain. Replace C-fibers with silicon while preserving functional organization, and you have something that plays the functional role of pain but is not pain. Fading qualia are possible — as you swap the substrate, the experience genuinely changes or disappears. This is why the theory entails strong biological specificity.",
        cite: "Place (1956); Smart (1959)."
      },
      {
        text: "No Russellian gap. The identity theory holds that mental state types are straightforwardly identical to neural state types. There are no intrinsic natures left open by physics for phenomenal properties to fill.",
        cite: "Smart (1959)."
      },
      {
        text: "Neural state types are discrete. You either have C-fiber firing or you don't. The theory does not naturally accommodate continuous gradations of consciousness."
      },
      {
        text: "No micro-experiences. Consciousness is a neural type-level property, not composed from sub-experiential components."
      },
      {
        text: "Consciousness is identical to neural states, which are physical. Causal closure is trivially preserved.",
        cite: "Smart (1959)."
      },
      {
        text: "The identity thesis directly solves the mental causation problem. If pain is identical to C-fiber firing, then pain causes behavior in exactly the same way that C-fiber firing does — there is one event, one causal power, described in two vocabularies. Kim's exclusion argument does not arise: there is nothing to exclude because the mental and physical are numerically identical, not merely correlated. This is Kim's own preferred solution for intentional states.",
        cite: "Smart (1959) 'Sensations and Brain Processes'; Kim (1998) Mind in a Physical World ch. 4."
      }
    ]
  },
  {
    id: "cosmopsychism",
    name: "Constitutive Cosmopsychism",
    subtitle: "Goff, Shani, Nagasawa",
    color: "#4A6741",
    answers: [0.5,1,0,1,1,0.5,1,1],
    systemsAnswers: [0.5,0.5,0.5,0.5,0,0.5],
    summary: "The cosmos as a whole is the fundamental conscious subject; our minds are grounded in cosmic consciousness. Avoids the combination problem but faces the decombination problem: how does one unified cosmic consciousness break into bounded individual subjects? Miller argues these problems are structurally equivalent. Denies zombies; consciousness is the intrinsic nature of reality at the cosmic scale.",
    sources: [
      "Goff, P. (2017). Consciousness and Fundamental Reality, ch. 9. Oxford University Press.",
      "Shani, I. (2015). 'Cosmopsychism: A Holistic Approach to the Metaphysics of Experience.' Philosophical Papers 44.",
      "Miller, G. (2018). 'Can Subjects Be Proper Parts of Subjects? The De-Combination Problem.' Ratio 31.",
      "Nagasawa, Y. & Wager, K. (2016). 'Panpsychism and Priority Cosmopsychism.' In Brüntrup & Jaskolla (eds.), Panpsychism.",
      "Roelofs, L. (2019). Combining Minds. Oxford University Press."
    ],
    variants: [
      {
        name: "Priority Cosmopsychism",
        authors: "Shani, Goff",
        note: "The cosmos is ontologically prior to its parts — individual minds are aspects, limitations, or determinations of cosmic consciousness, not separate entities that aggregate into a whole. The decombination mechanism: cosmic consciousness self-limits or self-differentiates into bounded individual subjects. This is Goff's preferred version and the most developed in the literature."
      },
      {
        name: "Existence Monism",
        authors: "Jaskolla, Buck",
        answers: [0.5,1,0,1,1,0,1,1],
        systemsAnswers: [0.5,0.5,0.5,0.5,0,0.5],
        note: "Only one concrete object exists — the cosmos — and apparent individuals are merely ways of talking about its internal variation. On this view there is no decombination problem in the strict sense because individuals were never truly separate to begin with. Critics argue this collapses into a position with no resources for explaining the distinctness of individual perspectival experience.",
        matrixNote: "Combination → NO. There is no combination or decombination problem because there are no genuinely distinct individuals to combine or split — only the cosmos and its internal variation."
      },
      {
        name: "Strong Russellian Cosmopsychism",
        authors: "Parallel to Strong Russellian Micropsychism",
        answers: [0,1,0,1,1,0.5,1,1],
        note: "Cosmic phenomenal intrinsics are necessarily phenomenal — no structurally identical world could have inert quiddities at the cosmic level. Russellian zombies are impossible. The motivation mirrors the micropsychist strong version: we have no positive conception of an inert quiddity, so the structural zombie scenario collapses into incoherence.",
        matrixNote: "P-Zombies → NO. Structural duplicates of the cosmos necessarily share its phenomenal intrinsic nature."
      },
      {
        name: "Weak Russellian Cosmopsychism",
        authors: "Parallel to Weak Russellian Micropsychism",
        note: "Cosmic phenomenal intrinsics are contingently phenomenal — a structurally identical cosmos with inert quiddities is conceivable. This is the Russellian zombie problem applied at the cosmic level: why are the intrinsic natures of our cosmos phenomenal rather than inert? The hard problem reasserts itself at the largest possible scale. The literature has not directly addressed this split for cosmopsychism.",
        matrixNote: "P-Zombies → ~ (same as parent). Represented by the parent row's ~ answer."
      }
    ],
    explanations: [
      {
        text: "Cosmic consciousness is the intrinsic nature of physical reality at the fundamental level. A physical duplicate of the universe has the same cosmic structure, hence the same cosmic consciousness. Individual consciousnesses are grounded in cosmic consciousness via a decombination process — so physical duplicates have identical individual consciousnesses. Zombies are impossible.",
        cite: "Goff (2017) ch. 9; Shani (2015)."
      },
      {
        text: "The hard problem is real and motivates the cosmopsychist move. Phenomenal properties — including cosmic-level experience — are intrinsic properties not capturable in relational terms. Mary's new knowledge is knowledge of intrinsic phenomenal properties that no structural-relational description can capture.",
        cite: "Goff (2017); Nagasawa & Wager (2016)."
      },
      {
        text: "Same structural ambiguity as constitutive micropsychism — the ~ is earned by the same dilemma, now playing out at the cosmic scale.",
        cite: "Goff (2017); Miller (2018).",
        note: "If individual consciousnesses are grounded in cosmic consciousness via a structural decombination process, then same functional structure → same decombination → same individual experience (YES, functionalism at the macro level). If the specific intrinsic phenomenal qualities of cosmic consciousness are constitutive of individual experience in a way that depends on those specific qualities, then changing substrate while preserving functional structure could change individual experience (NO). Goff's Quality Space Theory pushes toward YES via structural mirroring, but the decombination mechanism is even less developed than the combination mechanism in micropsychism. The ~ is the most defensible position."
      },
      {
        text: "Cosmopsychism is explicitly Russellian: physics gives us structure; cosmic consciousness fills in the intrinsic nature at the most fundamental level.",
        cite: "Goff (2017); Shani (2015)."
      },
      {
        text: "Individual consciousnesses are aspects or limitations of cosmic consciousness, varying in richness and integration. Degrees of consciousness are natural to the framework.",
        cite: "Goff (2017)."
      },
      {
        text: "Cosmopsychism is motivated partly by avoiding the combination problem — going top-down instead of bottom-up. But it faces the structurally analogous decombination problem: how does one unified cosmic consciousness break into many bounded individual subjects? Miller (2018) argues the two problems are equivalent in difficulty — the philosophical work merely relocates.",
        cite: "Miller (2018); Goff (2017) ch. 9.",
        note: "Goff's response to Miller is that priority monism (the cosmos is ontologically prior to its parts) gives cosmopsychism a theoretical advantage: the unity of the cosmic subject is primitive and unearned, whereas micropsychism must explain how unity arises from many. Critics argue this just restates the decombination problem rather than solving it."
      },
      {
        text: "Cosmic consciousness is the intrinsic nature of physical reality — it IS the physical, viewed from the inside. Causal closure is preserved.",
        cite: "Goff (2017)."
      },
      {
        text: "Same Russellian reasoning as micropsychism: cosmic phenomenal properties fill the intrinsic causal nature of physical reality. The causal and the phenomenal are not two things but one, viewed from outside (the physicist's description) and inside (the experiential description). Individual consciousness — grounded in cosmic consciousness via decombination — inherits this causal efficacy.",
        cite: "Goff (2017) ch. 9; Chalmers (2015) 'Panpsychism and Panprotopsychism.'"
      }
    ]
  },
  {
    id: "interactionist-dualism",
    name: "Interactionist Dualism",
    subtitle: "Descartes, Eccles, Popper",
    color: "#7B2D8B",
    answers: [1,1,0,0.5,0.5,0,0,1],
    systemsAnswers: [0,0.5,0,0.5,0,0],
    summary: "The only clean escape from the zombie-to-epiphenomenalism pipeline: deny causal closure. Consciousness is non-physical and causally efficacious — it intervenes in the physical world. Historically the most influential position (it's basically Descartes). Empirically costly: requires finding where physics breaks down. Popper and Eccles looked to quantum indeterminacy; no one has found a convincing mechanism.",
    sources: [
      "Descartes, R. (1641). Meditations on First Philosophy.",
      "Popper, K. & Eccles, J. (1977). The Self and Its Brain. Springer.",
      "Lowe, E.J. (2006). 'Non-Cartesian Substance Dualism and the Problem of Mental Causation.' Erkenntnis 65.",
      "Eccles, J. (1994). How the Self Controls Its Brain. Springer."
    ],
    variants: [
      {
        name: "Substance Dualism",
        authors: "Descartes, Swinburne",
        note: "Mind and body are two entirely distinct substances. The soul is a non-spatial, non-physical thing that causally interacts with the body. Descartes located interaction at the pineal gland. The classic formulation: the soul can exist without the body (hence personal immortality), and the body can exist without the soul (hence zombies are possible)."
      },
      {
        name: "Property Interactionism",
        authors: "Eccles, Popper",
        note: "There is only one substance (the physical) but mental properties are genuinely non-physical and exert causal influence. Eccles' 'psychons' (units of mental causation) interact with 'dendrons' (bundles of neural dendrites) via quantum probabilistic events. The quantum indeterminacy at synaptic vesicle release provides the gap where non-physical causation can enter without violating conservation laws. No convincing mechanism has been identified."
      },
      {
        name: "Quantum Mind Interactionism",
        authors: "Penrose, Hameroff",
        note: "Consciousness arises from quantum computations in microtubules within neurons (Orchestrated Objective Reduction, Orch-OR). Quantum collapse is non-computational and may be the locus of conscious causation. Penrose's argument: mathematical understanding involves non-computational insight (Gödel), so consciousness cannot be purely computational. This requires both quantum mechanics and a new (non-unitary) physics of collapse."
      },
      {
        name: "Agent Causation",
        authors: "O'Connor, Clarke, Taylor",
        note: "The relevant notion of mental causation is agent causation: persons (not events) cause actions directly. Agent causation is irreducible to event causation and may require an indeterministic physics to be consistent with free will. Developed primarily in free will debates but directly relevant to the causal closure question."
      }
    ],
    explanations: [
      {
        text: "A world with the same physical structure but no consciousness is conceivable precisely because consciousness is a non-physical substance or property that could in principle be absent. The zombie intuition is a direct expression of the non-physical status of consciousness — arguably the most natural reading of the intuition, and historically the dominant one.",
        cite: "Descartes (1641) Meditations; Popper & Eccles (1977) The Self and Its Brain."
      },
      {
        text: "Mary learns something genuine about the non-physical phenomenal realm. The hard problem is real and unbridgeable by physical description alone because consciousness is genuinely non-physical. No amount of neuroscience closes the gap.",
        cite: "Popper & Eccles (1977); Lowe (2006) 'Non-Cartesian Substance Dualism.'"
      },
      {
        text: "Consciousness is non-physical and does not supervene on physical or functional organization. The same functional organization could in principle exist with different consciousness, or with none. This is the defining commitment: mind and body are genuinely distinct, so mental properties are not fixed by physical ones.",
        cite: "Descartes (1641)."
      },
      {
        text: "Some interactionists use the Russellian gap as support — the non-physical mind is what fills what physics leaves intrinsically open. But most traditional interactionists (Descartes, Eccles) don't frame their view in Russellian terms; they posit a distinct substance rather than filling an intrinsic slot. The ~ reflects that some contemporary interactionists (Lowe) use Russellian language while classical dualists do not.",
        cite: "Lowe (2006); Descartes (1641)."
      },
      {
        text: "Interactionism does not commit to degrees. Some interactionists hold consciousness is binary (there is a soul or there isn't); others allow for gradations of non-physical conscious intensity. The view is neutral."
      },
      {
        text: "Consciousness is a non-physical substance or property already unified at its own level. No micro-experiences to aggregate into a macro-subject. The combination problem does not arise."
      },
      {
        text: "The defining commitment: interactionist dualism denies causal closure. Non-physical consciousness causally intervenes in the physical world. Popper and Eccles looked to quantum indeterminacy at synaptic vesicle release as the locus of non-physical intervention; Eccles later developed the 'psychon' hypothesis. No convincing mechanism has been found.",
        cite: "Popper & Eccles (1977); Eccles (1994) How the Self Controls Its Brain.",
        note: "The empirical cost is severe. The success of physical explanation across all scales, combined with conservation of energy and momentum, leaves no obvious gap where non-physical causation could enter. Eccles' quantum proposals have not been taken seriously by physicists or neuroscientists. This is why the position, despite being historically dominant, has essentially no contemporary defenders outside philosophy of religion."
      },
      {
        text: "Interactionist dualism is the only position that straightforwardly affirms mental causation while also accepting zombies and the explanatory gap. Consciousness directly causes physical events — including utterances about itself. The cost is rejecting causal closure, which most physicists and neuroscientists treat as non-negotiable. But the position is at least internally consistent: it does not face the epiphenomenalism problem that haunts property dualism.",
        cite: "Descartes (1641) Meditations; Popper & Eccles (1977) The Self and Its Brain.",
        note: "Interactionism is the only view that gives an unqualified YES to mental causation while also giving YES to zombies. In this sense it is more coherent than property dualism, which accepts both zombies and causal closure and is then forced into epiphenomenalism. The price is high: almost no one accepts it, precisely because rejecting causal closure seems like denying well-established physics."
      }
    ]
  },
];

const QUESTIONS = [
  {
    short: "P-Zombies",
    full: "Are philosophical zombies — structural duplicates with identical relational physics but no consciousness — logically possible?",
    subsumes: [
      {
        name: "Structural Duplicate",
        desc: "Physics specifies only relational and causal structure. A 'physical duplicate' is therefore a structural duplicate — same causal-mathematical structure, same dispositions, same relational properties. What is left open is the intrinsic nature filling that structure.",
        scenario: "Picture a being that is your exact structural double, who lacks consciousness. Every atom in the same position, every neuron firing at the same millisecond, every electrochemical gradient identical. From the outside this being is indistinguishable from you. It navigates the world, converses, laughs, winces when it stubs its toe, says 'that hurt.' But there is nothing it is like to be this being. There is no inner light on, it is a machine running in the dark. The zombie thought experiment asks if this being is conceivable: can we consistently imagine all the physical structure running without any accompanying experience? If a pzombie IS conceivable, that is, there is no contradiction in its description,then consciousness is something beyond the structural-physical — because the structure doesn't logically necessitate consciousness"
      },
      {
        name: "Conceivability → Possibility",
        desc: "Chalmers' two-dimensional argument: if zombies are ideally conceivable — conceivable after full a priori reflection — they are metaphysically possible. Contested by type-B materialists who accept conceivability but deny the inference."
      },
      {
        name: "Russellian Zombies",
        desc: "A world with the same structural physics but with non-phenomenal (inert) quiddities filling the Russellian gap. Distinct from standard zombies: the Russellian zombie differs in its intrinsic physical nature, not just in the presence of phenomenal properties. The key question for panpsychists.",
        scenario: "Physics describes everything in relational and dispositional terms — mass is a disposition to resist acceleration, charge is a disposition to repel like charges. What actually fills in this structure — what matter intrinsically is — physics never says. Now imagine a world with identical structural physics to ours: same particles, same forces, same causal web, but the intrinsic natures filling that structure are nonexperiential. These 'Russellian zombies' have the same relational physics but no phenomenal consciousness, because in our world phenomenal properties happen to fill the intrinsic natures, not the relational structure. Is such a world conceivable? If yes, then even panpsychism — which claims consciousness is intrinsic to the physical — faces a version of the hard problem: why are our intrinsic natures phenomenal rather than nonphenomenal? Problems familiar to the property dualist re-arise for the panpsychist: A russellian zombie says and beleives that he is conscious, but he is wrong. Progress on refuting the conceivability of nonphenomenal intrinsic natures would constitute significant progress in philosophy of mind."
      },
      {
        name: "Kripkean Necessity",
        desc: "If consciousness is identical to a physical property, zombies are impossible — just as water without H₂O is impossible. The identity theorist's response to the zombie argument."
      },
    ]
  },
  {
    short: "Mary's Room",
    full: "Is there a real explanatory gap between physical/functional description and consciousness?",
    subsumes: [
      {
        name: "The Knowledge Argument",
        desc: "Does Mary learn a new fact when she sees red? Yes iff there is something about consciousness that escapes physical description.",
        scenario: "Mary is the world's greatest color scientist. She knows everything there is to know about color vision — every wavelength of red light, every neural pathway from retina to cortex, the precise firing patterns of every neuron involved. But she has spent her entire life in a black-and-white room, seeing the world only through black-and-white monitors. She knows all the physical facts. Then one day the door opens and she sees a ripe tomato for the first time. She says immediately: 'So that's what red looks like.' Has she learned something new? Almost everyone's intuition is yes. But if she has, then her previous physical knowledge was incomplete — there is a fact about what red looks like that wasn't in her textbooks. And if physical knowledge can be complete yet leave something out, then consciousness is not fully captured by the physical."
      },
      {
        name: "Inverted Spectrum",
        desc: "Are inverted qualia between functional duplicates possible? Yes iff phenomenal properties are not exhausted by functional role.",
        scenario: "When you see a ripe tomato, you call it red. When I see the same tomato, I also call it red. We agree on everything — which traffic lights mean stop, which apples are ripe. But is it possible that your inner experience of red is qualitatively exactly what my inner experience of green feels like? Our behavior would be indistinguishable: we both learned the word 'red' attached to the same objects, and we both use it the same way. Yet the inner feel might be systematically different — your phenomenal red might be my phenomenal green. If this is even conceivable, then the phenomenal character of experience is something over and above its functional role."
      },
      {
        name: "What It's Like (Nagel)",
        desc: "Is there something it is like to be a bat that cannot be captured in objective physical description?",
        scenario: "Bats navigate using echolocation. They emit ultrasonic pulses and experience the world through returning echoes — texture, distance, movement, all encoded in patterns of sound bouncing back in milliseconds. Neuroscientists can describe this process in complete physical detail: the frequencies, the neural processing, the brain regions involved. But here is Nagel's question: what is it like, from the bat's own perspective, to perceive the world this way? What does echolocation feel like from the inside? No matter how thoroughly we describe the neural mechanisms, something seems left out — the subjective character of the bat's experience, the particular 'flavor' of echo-perception that only the bat has access to. Nagel's point: objective physical description, by its very structure, cannot capture the first-person character of experience. There is always a gap between the view from outside and the view from inside."
      },
    ]
  },
  {
    short: "Fading Qualia",
    full: "Does consciousness supervene on functional organization — does duplicating function duplicate experience?",
    subsumes: [
      {
        name: "Fading Qualia",
        desc: "If silicon chips duplicated neuronal function but produced fading qualia, you'd continue reporting normal experience while going dark inside. Chalmers argues this is absurd.",
        scenario: "Imagine a surgery where your neurons are replaced one by one with silicon chips, each performing exactly the same input-output function as the neuron it replaces. After each swap you feel fine — behavior and reports are unchanged. Eventually, your brain is entirely silicon. Are you still conscious? If you are not, it must have been the case that as new chips are introduced, your consciousness fades gradually, until it finally disappears. Yet at no point could you have noticed, because noticing is itself a functional process, which the chips replicate perfectly. You would still say 'I see the red apple clearly.' Chalmers' claim: it is implausible that a person's consciousness could fade away without them noticing. Therefore experience must track functional organization — what the system does, not what it's made of."
      },
      {
        name: "Dancing Qualia",
        desc: "If two physically different systems are functionally isomorphic yet generate different qualia, then switching between them should alter conscious experience without producing any corresponding change in cognition, behavior, or verbal report. Chalmers treats this as a reductio of the claim that qualia can vary independently of functional organization.",
        scenario: "Assume two components—an organic neural circuit and a silicon-based replacement—are functionally identical: each preserves the same causal role within the overall cognitive system. Now suppose, contrary to functionalism, that they nonetheless produce different phenomenal states. If a surgeon could switch instantaneously between the two while preserving all functional relations, the subject's experience would change—for example, colors might look different or sounds might have a different felt character. Yet, because all functional organization remains fixed, the subject's judgments, memory access, discriminatory capacities, and verbal reports would remain unchanged. The result would be a case in which phenomenal experience systematically varies while the subject is functionally incapable of noticing or reporting any difference. Chalmers argues that such 'dancing qualia' are implausible: it is not credible that experience could fluctuate dramatically with no effect on cognitive access or behavioral output. He takes this to support the conclusion that identical functional organization entails identical conscious experience."
      },
      {
        name: "Chinese Room",
        desc: "Does the system understand Chinese? Yes iff functional organization is sufficient for mentality. The system reply to Searle is precisely the functionalist commitment.",
        scenario: "You are locked in a room. Through a slot, people pass you cards with Chinese symbols. You have a large rulebook: when you see this symbol, write that symbol in response. You follow the rules perfectly and pass your responses back. Outside, native Chinese speakers find the room's replies indistinguishable from those of a fluent Chinese speaker — to them, the room understands Chinese. But you understand not a single word. You are shuffling symbols according to rules, with no understanding of what any of it means. Searle's question: does the room understand Chinese? The functionalist says yes — the whole system (you, rulebook, cards) collectively understands, even if no part does alone. Searle says no: syntax — manipulating symbols by rules — is not sufficient for semantics — genuine meaning and understanding. Whatever understanding is, it is something beyond functional organization."
      },
      {
        name: "Substrate Independence",
        desc: "Could a silicon brain be conscious? Yes iff what matters is function, not material. This is the engineering implication of functional sufficiency."
      },
    ]
  },
  {
    short: "Russellian Gap",
    full: "Does qualia fill the Russellian gap — are phenomenal properties the intrinsic nature of matter?",
    subsumes: [
      {
        name: "Structural Realism",
        desc: "Physics describes only the relational, dispositional, and mathematical structure of reality. What 'fills in' the structure — what matter intrinsically is — is left open.",
        scenario: "Think about what physics actually tells you about an electron. It has a charge of −1.6×10⁻¹⁹ coulombs — meaning it repels other electrons and attracts protons. It has a mass — meaning it resists acceleration. It has spin — a quantum property that determines how it interacts with magnetic fields. Every property physics assigns is relational or dispositional: defined by how the electron affects and is affected by other things. Nowhere in physics is there a description of what the electron intrinsically is — what it is in itself, not in relation to other things. Russell noticed this in 1927. The equations describe the structure perfectly. But what the structure is made of — what fills in the mathematical skeleton — physics is silent about. This gap is exactly where consciousness might live."
      },
      {
        name: "The Placement Problem",
        desc: "If consciousness is real and irreducible, where in the physical world does it live? The Russellian gap provides a location: as the intrinsic nature underlying physical dispositions."
      },
    ]
  },
  {
    short: "Degrees",
    full: "Does consciousness come in continuous degrees rather than being all-or-nothing?",
    subsumes: [
      {
        name: "Animal Consciousness",
        desc: "Is a dog conscious? A fish? An insect? If consciousness is graded, these become questions of degree rather than kind.",
        scenario: "Your dog seems to experience something — pain, excitement, recognition. A fish withdraws from noxious stimuli in ways that look like pain responses. An insect navigates toward light and away from danger. A bacterium moves toward sugar. Where does consciousness stop? One view: it's all-or-nothing, and there's a sharp line somewhere. Another view: it comes in degrees, and the question isn't whether these animals are conscious but how much — and by what measure. The graded view seems more scientifically natural (evolution rarely produces sharp thresholds) but raises the uncomfortable question of what it would mean to have a thousandth of an experience."
      },
      {
        name: "Φ as a Continuum",
        desc: "IIT's measure of integrated information is continuous. A photodiode has a tiny Φ. This makes degrees of consciousness a core prediction, not an afterthought."
      },
      {
        name: "Machine Consciousness Thresholds",
        desc: "If consciousness is graded, the question 'is this AI conscious?' may have no sharp answer — only more-or-less.",
        scenario: "A language model processes billions of parameters in parallel, produces responses that discuss its own inner states, and in some ways behaves more sophisticatedly than animals we unhesitatingly call conscious. Is it conscious? If consciousness is binary, the answer is either yes or no, and we need a principled criterion for which side it falls on. If consciousness is graded, the question dissolves into: how much, and by what measure? But that raises a new problem — there may be no fact of the matter about whether it crosses any particular threshold, and the moral implications (does it matter how we treat it?) become genuinely difficult."
      },
    ]
  },
  {
    short: "Combination",
    full: "Is there a deep problem about how micro-level experience composes macro-level experience?",
    subsumes: [
      {
        name: "Subject-Summing Problem",
        desc: "How do many experiential subjects become one unified subject? James: each experience remains 'shut in its own skin.'",
        scenario: "William James put it sharply: 'Take a hundred feelings and pack them as close together as you can — still each remains shut in its own skin.' Now suppose panpsychism is true and every elementary particle has a tiny experience. A brain contains roughly 10²⁷ atoms, each with its micro-experience. When you combine them into a brain, do you get one unified experience, or 10²⁷ separate tiny experiences? Physical quantities add easily: a thousand drops of water make a puddle, a thousand watts of power is a kilowatt. But experiences do not seem to add in this way. A thousand separate points of view don't automatically become one point of view — they just remain a thousand points of view. The panpsychist needs to explain how the transition from many to one happens, and nobody has a satisfying answer."
      },
      {
        name: "Palette Problem",
        desc: "How does the rich diversity of human experience arise from the limited palette of micro-experiences?",
        scenario: "Suppose electrons have micro-experiences. What is an electron's experience like? Presumably very simple — some physicists have suggested it might have a tiny, dimensionless point of view. Now consider your experience of listening to a Beethoven symphony — the rich texture of instruments, the emotional arc, the sense of time. How does the symphony of experience arise from the point-experiences of electrons? Even if we could solve the subject-summing problem (many become one), we'd still need to explain how the pale, featureless micro-experiences combine to produce the rich, differentiated character of human consciousness. This is the palette problem: the palette of micro-experiences seems far too impoverished to paint the canvas of macro-experience."
      },
      {
        name: "Decombination Problem",
        desc: "Cosmopsychism's mirror image: how does one cosmic subject break into many bounded individual subjects?",
        scenario: "Cosmopsychism starts at the top: the cosmos itself is the fundamental conscious subject, and individual minds are grounded in it. This avoids the combination problem — no need to aggregate micro-experiences. But it faces the mirror-image problem: if there is one cosmic consciousness, how does it break into the billions of separate, bounded, first-person perspectives that make up individual minds? Why does my experience not bleed into yours? Why do I not have access to every human experience simultaneously? Miller (2018) argues this decombination problem is structurally as difficult as the combination problem. The panpsychist builds up; the cosmopsychist carves down. Both are stuck explaining a transition that doesn't seem to follow naturally from their starting point."
      },
    ]
  },
  {
    short: "Causal Closure",
    full: "Is the physical world causally closed — does every physical event have a sufficient physical cause?",
    subsumes: [
      {
        name: "Overdetermination",
        desc: "If consciousness causes physical events and physics is closed, every conscious act is causally overdetermined. Most philosophers find this unacceptable.",
        scenario: "You decide to raise your arm. Your arm rises. Two apparently complete causal stories run in parallel. Story one: your motor cortex fired, signals traveled down motor neurons, muscles contracted, arm rose — a complete physical chain. Story two: you consciously decided to raise your arm, and it rose. If the physical story is complete — if it fully accounts for why your arm rose — then your conscious decision didn't do any additional causal work. The arm would have risen anyway, purely from the neural firing. This means either (a) your consciousness is an idle bystander that watches but doesn't act — epiphenomenalism — or (b) the physical story isn't really complete — interactionism — or (c) the decision just is the neural firing — identity theory. Every theory of consciousness is partly a choice among these options."
      },
      {
        name: "Conservation Laws",
        desc: "Physical conservation laws (energy, momentum) seem to leave no room for non-physical intervention. Denying closure means finding where the physics breaks."
      },
      {
        name: "Zombie → Epiphenomenalism",
        desc: "If you accept both zombies and causal closure, consciousness does no causal work. This is a logical entailment, not a separate position."
      },
    ]
  },
  {
    short: "Mental Causation",
    full: "Does phenomenal consciousness causally produce behavior — including utterances and reports about conscious experience itself?",
    subsumes: [
      {
        name: "The Utterance Problem",
        desc: "When you say 'I am having a vivid red experience,' is that utterance caused by the phenomenal experience, or merely by a functional brain state that correlates with it?",
        scenario: "You are having experiences right now — the experience of reading these words, perhaps a feeling of curiosity or interest. At some point you will say, or think, 'I am conscious.' Now here is the uncomfortable question for property dualism: what caused you to form that belief? Under causal closure, every belief and utterance is caused by physical brain states. But phenomenal properties — on property dualism — are non-physical. So the belief 'I am conscious' was caused by a functional brain state, not by the phenomenal experience itself. The qualia were along for the ride. They had no causal role in producing your conviction that they exist. Strikingly, consider that your pzombie twin, who is not conscious, says and beleives just as you do that he is conscious; he might say it is the one thing he is totally certain of, he thinks of the pzombie thought experiment and is convinced that his situation is different, yet he is wrong. Chalmers (2015) calls this the 'paradox of phenomenal judgment': if consciousness doesn't cause your reports about consciousness, your introspective reports are unreliable guides to whether you're conscious at all. And then why believe you are?"
      },
      {
        name: "Kim's Exclusion Argument",
        desc: "If every physical effect has a sufficient physical cause, any non-physical cause is excluded. Mental properties must be reduced to physical or be inert.",
        scenario: "Suppose a non-physical mental state M causes a physical action A. But A also has a sufficient physical cause P (some brain state). Now we have two sufficient causes of A: M and P. This is causal overdetermination — like two bullets simultaneously killing someone. Such overdetermination is possible but deeply weird, and it would be a systematic feature of all mental causation. The more natural conclusion: P excludes M. P does all the causal work; M does none. Kim's argument shows that non-physical mental properties, under causal closure, cannot be causes — they are systematically excluded by their physical correlates. The only escape is reducing mental properties to physical ones."
      },
      {
        name: "The Causal Argument for Physicalism",
        desc: "Chalmers (2015): phenomenal properties must be grounded in physical properties to be causally relevant — entailing physicalism. Stands in opposition to the conceivability argument."
      },
      {
        name: "Russellian Escape",
        desc: "If phenomenal properties fill the intrinsic nature underlying physical causal powers, the phenomenal IS the causally efficacious stuff. One thing, two descriptions — no exclusion problem."
      },
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
    short: "Primitive",
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
  "reductive-functionalism": [
    "The functionalist cluster genuinely splits on LLMs. HOT theory says a state is conscious when targeted by a suitable higher-order representation, and LLMs plausibly form internal meta-representations of their own processing — putting HOT in the YES camp. Psychofunctionalism, which identifies mental states with whatever plays the empirically discovered cognitive role regardless of substrate, similarly permits LLM consciousness. But GWT requires something like global workspace ignition, and whether transformer attention qualifies is debated; Lewis-style analytic functionalism defines roles within a total folk-psychological causal network whose integrity constraints (temporal continuity, embodied causal role) current LLMs may not clearly meet. The parent ~ reflects this internal disagreement; the variant rows show where the fault lines are.",
    "The octopus is a clear YES across the functionalist cluster. It demonstrates problem-solving, tool use, play, flexible learning, and individual behavioral differences — cognitive capacities that instantiate the complex functional organization all functionalist variants demand. Its distributed nervous system is architecturally exotic, but functionalism is explicitly substrate- and architecture-neutral: what matters is the causal-role structure, not how the hardware is physically arranged.",
    "A thermometer is responsive, but responsiveness alone is too cheap. Registering temperature does not instantiate the rich network of higher-order access, global control, self-representation, or inferential integration that functionalists normally mean by the functional organization constitutive of consciousness.",
    "A faithful whole-brain emulation preserves the relevant causal-functional organization by stipulation. For reductive functionalism, that is exactly what matters, so changing from carbon to silicon does not remove consciousness if the organization and causal role are preserved.",
    "A single microphysical primitive has almost no functional organization. However liberal the theory is about multiple realizability, reductive functionalism still requires the right role in a suitably complex causal network, so an isolated primitive is not conscious.",
    "Functionalism says yes: if the China Brain genuinely realizes the right functional organization — the full causal-role network constitutive of consciousness — then consciousness follows, regardless of how unintuitive that seems. Block designed the thought experiment as a challenge, but the standard functionalist response is to bite the bullet. The implementation being distributed across a billion people is irrelevant; what matters is the organization, not the substrate."
  ],
  "property-dualism": [
    "Property dualism underdetermines the LLM case because everything depends on the psychophysical laws. If the laws attach consciousness to sufficiently rich functional organization, an LLM may qualify; if they are more restrictive, it may not. The theory itself does not decide the matter from metaphysics alone.",
    "Under any plausible psychophysical laws — even with a strong simplicity prior — a biological organism with 500 million neurons, rich sensory integration, flexible learning, and complex behavior would be conscious. The octopus is well above any reasonable threshold. The only laws that would exclude it would be gerrymandered to favor vertebrate-specific neural architecture, which a simplicity prior disfavors.",
    "Once psychophysical laws are left contingent, simplicity begins to matter. A simplicity prior can favor broad, elegant laws over gerrymandered ones, and that gives even simple systems some non-zero plausibility under property dualism. A thermometer is still not clearly conscious, but the right verdict is 'complicated,' not a flat no.",
    "Chalmers's fading and dancing qualia arguments commit property dualism to consciousness tracking functional organization in our world. So if a whole-brain emulation really preserves the relevant organization, it should inherit consciousness even though zombies remain metaphysically possible in other worlds.",
    "The same law-based point applies more strongly at the microphysical level. Property dualism by itself does not forbid psychophysical laws from assigning primitive phenomenal properties to basic matter; that depends on which laws obtain. A simplicity prior can even make broad low-level laws attractive, so the honest verdict is again unsettled rather than negative.",
    "If the China Brain really duplicates the relevant functional organization, Chalmers-style property dualism says consciousness should track that organization in our world. The weirdness of the substrate does not matter once the psychophysical laws are taken to latch onto organization rather than carbon specifically."
  ],
  "iit": [
    "YES*: The GPU/TPU hardware running an LLM has its own physical causal architecture with some non-zero Φ, so under IIT it is conscious — but the character of that consciousness is determined by the chip's actual cause-effect structure, not by the computation it happens to be running. The LLM's \"thoughts\" do not shape what-it's-like; the silicon layout does. The system is conscious, but with alien, hardware-determined phenomenology.",
    "The octopus nervous system is biological, recurrently connected, and densely integrated — exactly the kind of physical causal architecture IIT rewards with high Φ. Unlike digital systems, there is no substrate mismatch: the octopus's phenomenology is determined by its own neural cause-effect structure, which is the structure of an octopus. IIT gives a straightforward YES — conscious, with octopus phenomenology.",
    "YES*: IIT says any system with Φ > 0 is conscious to some degree. A thermometer's physical components mutually constrain each other — bimetallic bond, mercury column, reservoir — giving it some non-zero integrated information. Tononi's paradigm case is even simpler: a single photodiode discriminating light from dark has a sliver of consciousness. The thermometer is conscious, but its phenomenology is vanishingly minimal and nothing resembling human experience.",
    "YES*: A computer running a whole-brain emulation is physically real and has its own hardware-level causal organization with non-zero Φ. Tononi and Koch argue that the consciousness present is that of the computer's actual physical substrate, not the emulated brain's. The system is conscious, but its phenomenology reflects the silicon architecture, not the biological neural patterns being simulated — alien to the person it purports to replicate.",
    "A single microphysical primitive in isolation has little or no differentiated internal cause-effect structure. IIT does not collapse into panpsychism at the particle level; consciousness requires specific integrated causal organization, not mere fundamentality. Essentially no Φ means essentially no consciousness.",
    "YES*: The China Brain has real physical causal connections between its participants — phone lines, radio signals, synaptic-like coordination — giving the nation-scale system some non-zero Φ. Under IIT it is therefore conscious to some degree. But its cause-effect structure is radically different from a biological brain's: the phenomenology would be alien and unrecognizable, determined by the population-scale communication topology rather than anything resembling human experience."
  ],
  "biological-naturalism": [
    "An LLM manipulates symbols and formal structure, but on Searle's view syntax is never sufficient for semantics or consciousness. What matters are the specific biological causal powers of brains, and current language models do not have them.",
    "The octopus is biological, has a complex nervous system, and exhibits behavior that strongly suggests genuine understanding and awareness. Searle's view does not restrict consciousness to vertebrates or mammals — it requires the right kind of biological causal powers, and the octopus has them. This is one of the few non-human systems biological naturalism confidently endorses.",
    "A thermometer is merely causally sensitive to temperature. It is not an organism with the right biological organization, so biological naturalism has no reason to count it as conscious.",
    "Searle's silicon-neuron line is explicit: preserving input-output function on non-biological hardware can still coincide with the loss of consciousness. A digital whole-brain emulation simulates the relevant biology; it does not reproduce the biological causal powers themselves.",
    "A microphysical primitive is far below the level at which Searle thinks consciousness emerges. Consciousness is a higher-level biological feature of certain organisms, not an intrinsic property of matter in general.",
    "The China Brain still fails for the same reason the Chinese Room fails. Implementing the right formal organization across many agents does not generate semantics or consciousness unless the system has the relevant biological causal powers."
  ],
  "micropsychism": [
    "YES*: The physical substrate of an LLM — silicon, metal interconnects, capacitors — already has micro-experience on this view. Whether those micro-experiences combine into a unified LLM-subject is the unresolved combination problem. But regardless of how combination works, the system is at minimum conscious in the fragmented, substrate-level sense: its hardware components have their own micro-phenomenology, alien to anything the LLM computes.",
    "The octopus is a biological organism whose neural micro-constituents have micro-experience, and whose complex, recurrent nervous system provides exactly the kind of rich combinatorial structure that makes macro-level combination plausible. If the combination problem has a solution anywhere, it has one here. The octopus is conscious both at the substrate level and very likely at the macro level — with genuine octopus phenomenology, not alien experience.",
    "YES*: A thermometer's physical components have micro-experience if constitutive micropsychism is true. The bimetallic strip, the mercury atoms — each has its own sliver of phenomenality. Whether they combine into a thermometer-level subject is unsettled, but the substrate-level micro-experiences are guaranteed. The phenomenology is that of the physical materials, not of 'temperature measurement.'",
    "YES*: The silicon substrate running a brain emulation has its own micro-experiences. Whether those compose into a unified subject matching the emulated brain is the combination problem all over again. But the hardware is at minimum conscious in the fragmented micro-experiential sense — and that phenomenology is determined by the silicon's intrinsic nature, not the biological neural patterns being simulated. Alien to the person it emulates.",
    "YES*: The microphysical primitive is where constitutive micropsychism locates the basic experiential furniture of the world. If the theory is true, primitives have micro-experience by definition — but that experience is unimaginably alien and minimal, nothing resembling human phenomenology. It is the raw intrinsic nature of the physical, not anything we could recognize as 'what it is like.'",
    "YES*: The China Brain's participants are themselves conscious beings, and even the physical infrastructure connecting them (phone lines, radio transmitters) has micro-experience at the substrate level. Whether a unified China Brain-level subject emerges is the combination problem in vivid form. But the system is at minimum conscious through its substrate's fragmented micro-phenomenology — radically alien to anything resembling a human mind."
  ],
  "type-identity": [
    "Type-identity theory identifies conscious states with specific neural state types, not with abstract computations. An LLM may mimic some behavior, but it does not instantiate the neural kinds that the theory says consciousness literally is.",
    "The octopus is biological and has neurons, which is good for type-identity. But its neural architecture is radically different from vertebrate brains — no cortex, no hippocampus, two-thirds of neurons in the arms, different neurotransmitter systems. If pain = C-fiber firing, octopus nociception involves different physical types. The theory is genuinely torn: the substrate is right (biological), but the specific neural kinds are wrong.",
    "A thermometer has neither the right function nor the right physical type. On type-identity theory there is no route from mere physical responsiveness to consciousness unless the relevant neural state type is present.",
    "A digital whole-brain emulation preserves behavior at most, not neural type identity. If pain is C-fiber firing, then silicon states that merely play the same role are still not pain. Wrong substrate means wrong conscious state.",
    "A microphysical primitive is not a brain state type. Type-identity is restrictive twice over: it rejects both abstract functional realization and micropsychist attempts to locate experience in the basic furniture of matter.",
    "The China Brain is the wrong type of physical system even if it approximates the right organization. Consciousness is not whatever realizes the right function, but the specific neural type itself."
  ],
  "cosmopsychism": [
    "Cosmopsychism guarantees consciousness at the level of the cosmos, not automatically at the level of every subsystem. Whether an LLM carves out a distinct local subject depends on an unresolved decombination story, so the theory cannot confidently classify it.",
    "The octopus faces the same decombination question as every other subsystem: does it carve out a genuine bounded subject within the conscious cosmos? The octopus's biological complexity makes it a more plausible candidate for a local subject than most systems, but cosmopsychism lacks a settled criterion for when decombination yields a genuine individual perspective.",
    "The same issue appears for a thermometer. Cosmopsychism makes consciousness fundamental at the whole, but leaves unsettled which small subsystems count as their own subjects rather than just local structures within the conscious cosmos.",
    "A whole-brain emulation could host a derivative local subject if the right decombination conditions are met, but cosmopsychism does not yet give a principled criterion for when a new bounded point of view appears. So the theory remains non-committal.",
    "Unlike micropsychism, cosmopsychism does not place consciousness in isolated microphysical primitives. The conscious subject is the cosmos; the primitive is at most a non-fundamental aspect or fragment of that larger subject, not a basic subject in its own right.",
    "The China Brain problem reappears as a decombination problem: does this distributed subsystem define a genuine bounded perspective, or is it just one more pattern inside the conscious cosmos? Current cosmopsychism offers no settled criterion, so the verdict stays open."
  ],
  "interactionist-dualism": [
    "Interactionist dualism does not treat computation as sufficient for consciousness. An LLM would be conscious only if a non-physical mind were somehow attached to or interacting with it, and the theory gives no reason to think ordinary language models meet that condition.",
    "Do octopuses have non-physical minds that interact with their biology? Descartes infamously denied animal consciousness — animals were automata. But many modern interactionist dualists reject that move: the octopus's behavioral sophistication, flexible learning, and apparent emotional states make it a plausible candidate for a non-physical mind if any non-human animal is. The question is genuinely open within the tradition.",
    "A thermometer is a paradigm case of a merely physical system. Nothing in interactionist dualism suggests that a non-physical conscious subject would be associated with something this simple.",
    "A dualist can allow that a non-physical mind might in principle attach to a whole-brain emulation. But the emulation's physical or functional fidelity does not by itself guarantee that outcome, so the theory cannot infer consciousness from duplication alone.",
    "An isolated microphysical primitive is just part of the physical machinery. Interactionist dualism does not locate consciousness in matter's intrinsic base, but in a distinct non-physical mind or property that interacts with suitable physical systems.",
    "The China Brain is still just a physical arrangement unless a non-physical mind is joined to it. Functional organization alone never forces that result on interactionist dualism, so the natural verdict remains negative."
  ]
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
  const columns = isSystems ? SYSTEMS : QUESTIONS;
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

  const matrixVariants = (pos) =>
    (pos.variants || []).filter(v => isSystems ? v.systemsAnswers : v.answers);

  return (
    <div className="matrix-scroll" style={{ overflowX: "auto", padding: "0 0 20px 0", WebkitOverflowScrolling: "touch" }}>
      <table className="matrix-table" style={{ borderCollapse: "collapse", width: "100%", minWidth: isSystems ? 860 : 780 }}>
        <thead>
          <tr>
            <th style={{
              padding: "12px 16px 12px 36px", textAlign: "left", fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12, fontWeight: 600, color: "#8A7E72", letterSpacing: "0.1em", textTransform: "uppercase",
              borderBottom: "2px solid #D4C9BC", minWidth: 200, position: "sticky", left: 0,
              background: "#F2EDE6", zIndex: 2
            }}>Position</th>
            {columns.map((q, i) => {
              const isSelected = selectedColIdx === i;
              return (
                <th
                  key={i}
                  onClick={() => onSelectColumn(i)}
                  onMouseEnter={() => setHoveredQ(i)}
                  onMouseLeave={() => setHoveredQ(null)}
                  style={{
                    padding: "12px 10px", textAlign: "center", fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 11, fontWeight: isSelected ? 700 : 600,
                    color: isSelected ? "#2D2A26" : hoveredQ === i ? accentColor : "#8A7E72",
                    letterSpacing: "0.04em", textTransform: "uppercase",
                    borderBottom: isSelected ? `2px solid ${accentColor}` : "2px solid #D4C9BC",
                    cursor: "pointer", transition: "all 0.2s",
                    minWidth: isSystems ? 100 : 80, maxWidth: isSystems ? 140 : 100, lineHeight: 1.3,
                    background: isSelected ? "#E8E2DA" : "transparent"
                  }}
                  title={q.full}
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
            const variants = matrixVariants(pos);
            const hasVariants = variants.length > 0;
            const cellAnswers = isSystems ? (pos.systemsAnswers || []) : pos.answers;

            const parentRow = (
              <tr
                key={pos.id}
                onClick={() => onSelectPosition(pos.id)}
                onMouseEnter={() => setHoveredP(pi)}
                onMouseLeave={() => setHoveredP(null)}
                style={{
                  cursor: "pointer",
                  backgroundColor: isSelected ? "#E3DDD5" : hoveredP === pi ? "#EBE6DF" : "transparent",
                  transition: "background-color 0.2s"
                }}
              >
                <td style={{
                  padding: "14px 16px", borderBottom: isExpanded ? "none" : "1px solid #E8E2DA",
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 700,
                  color: "#2D2A26", position: "sticky", left: 0,
                  background: isSelected ? "#E3DDD5" : hoveredP === pi ? "#EBE6DF" : "#F2EDE6",
                  transition: "background-color 0.2s", zIndex: 1
                }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ width: 20, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {hasVariants && (
                        <button
                          onClick={(e) => toggleExpand(e, pos.id)}
                          title={isExpanded ? "Collapse variants" : "Expand variants"}
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
                      <div>{pos.name}</div>
                      <div className="pos-subtitle" style={{ fontSize: 12, fontWeight: 400, color: "#8A7E72", fontStyle: "italic", marginTop: 2 }}>{pos.subtitle}</div>
                    </div>
                  </div>
                </td>
                {cellAnswers.map((a, ai) => (
                  <td key={ai} style={{
                    padding: "14px 10px", textAlign: "center",
                    borderBottom: isExpanded ? "none" : "1px solid #E8E2DA",
                    backgroundColor: selectedColIdx === ai ? selectedBg : hoveredQ === ai ? "rgba(0,0,0,0.015)" : "transparent",
                    transition: "background-color 0.15s"
                  }}>
                    <AnswerCell value={a} />
                  </td>
                ))}
              </tr>
            );

            if (!isExpanded || !hasVariants) return [parentRow];

            const variantRows = variants.map((v, vi) => {
              const isLastVariant = vi === variants.length - 1;
              return (
                <tr
                  key={`${pos.id}-v-${vi}`}
                  onClick={() => onSelectPosition(pos.id)}
                  style={{ cursor: "pointer", backgroundColor: "rgba(120,80,160,0.03)" }}
                >
                  <td style={{
                    padding: "10px 16px 10px 36px",
                    borderBottom: isLastVariant ? "1px solid #E8E2DA" : "1px solid #EDE9F2",
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 500,
                    color: "#5A3A7A", position: "sticky", left: 0,
                    background: "rgba(120,80,160,0.04)", zIndex: 1,
                    borderLeft: "2px solid #C4A8E0"
                  }}>
                    <div>{v.name}</div>
                    {v.authors && (
                      <div style={{ fontSize: 11, fontWeight: 400, color: "#9A7AB0", fontStyle: "italic", marginTop: 2 }}>{v.authors}</div>
                    )}
                  </td>
                  {(isSystems ? v.systemsAnswers : v.answers).map((a, ai) => {
                    const differs = a !== (isSystems ? pos.systemsAnswers[ai] : pos.answers[ai]);
                    return (
                      <td key={ai} style={{
                        padding: "10px 10px", textAlign: "center",
                        borderBottom: isLastVariant ? "1px solid #E8E2DA" : "1px solid #EDE9F2",
                        backgroundColor: differs
                          ? "rgba(120,80,160,0.10)"
                          : selectedColIdx === ai ? selectedBg : "transparent",
                        transition: "background-color 0.15s"
                      }}>
                        <AnswerCell value={a} />
                      </td>
                    );
                  })}
                </tr>
              );
            });

            return [parentRow, ...variantRows];
          })}
        </tbody>
      </table>
    </div>
  );
}

function PositionVariants({ position }) {
  const [openIdx, setOpenIdx] = useState(null);
  if (!position.variants || position.variants.length === 0) return null;
  return (
    <div style={{
      marginTop: 40,
      background: "rgba(120,80,160,0.04)",
      border: "1px solid rgba(120,80,160,0.15)",
      borderRadius: 6,
      padding: "20px 24px"
    }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600,
          letterSpacing: "0.15em", textTransform: "uppercase", color: "#7B2D8B"
        }}>Internal Variants</div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#B0A89C",
          letterSpacing: "0.05em"
        }}>— sub-positions, not separate matrix rows</div>
      </div>
      <div style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 13, color: "#9A7AB0",
        fontStyle: "italic", marginBottom: 20
      }}>Variants marked ▸ in the matrix expand as sub-rows with highlighted differences.</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {position.variants.map((v, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} style={{ borderTop: "1px solid rgba(120,80,160,0.15)" }}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  padding: "14px 0", display: "flex", alignItems: "center", gap: 12,
                  textAlign: "left"
                }}
              >
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 700,
                  color: "#4A1A6A", flex: 1
                }}>{v.name}</span>
                {v.matrixNote && (
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "#7B2D8B", background: "#EDE0F8",
                    padding: "3px 7px", borderRadius: 2, flexShrink: 0
                  }}>matrix impact</span>
                )}
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  color: "#B0A89C", transition: "transform 0.2s", display: "inline-block",
                  transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)", flexShrink: 0
                }}>↓</span>
              </button>
              {isOpen && (
                <div style={{ paddingBottom: 20, paddingLeft: 4 }}>
                  {v.authors && (
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: 13,
                      fontStyle: "italic", color: "#9A7AB0", marginBottom: 10
                    }}>{v.authors}</div>
                  )}
                  <p style={{
                    fontFamily: "'Source Serif 4', serif", fontSize: 15, lineHeight: 1.75,
                    color: "#3D3833", margin: 0, maxWidth: 680
                  }}>{v.note}</p>
                  {v.matrixNote && (
                    <div style={{
                      marginTop: 12, padding: "10px 14px",
                      background: "#EDE0F8", borderLeft: "3px solid #7B2D8B",
                      fontFamily: "'Source Serif 4', serif", fontSize: 13,
                      color: "#4A1A5B", lineHeight: 1.65
                    }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        color: "#7B2D8B", fontWeight: 700, display: "block", marginBottom: 4
                      }}>Matrix impact</span>
                      {v.matrixNote}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        <div style={{ borderTop: "1px solid rgba(120,80,160,0.15)" }} />
      </div>
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
      }}>{position.name}</h3>
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

      <PositionVariants position={position} />

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
      minHeight: "100vh", background: "#F2EDE6", color: "#2D2A26",
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
        body { margin: 0; background: #F2EDE6; }
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
          .possible-minds .matrix-scroll { margin: 0 -20px; padding: 0 20px 20px !important; -webkit-overflow-scrolling: touch; }
          .possible-minds .matrix-table { min-width: 520px !important; font-size: 12px; }
          .possible-minds .matrix-table th:first-child { min-width: 140px !important; padding-left: 20px !important; }
          .possible-minds .matrix-table th:not(:first-child) { min-width: 52px !important; max-width: 72px !important; padding: 8px 6px !important; font-size: 9px !important; }
          .possible-minds .matrix-table td:first-child { padding: 10px 12px !important; font-size: 13px !important; }
          .possible-minds .matrix-table td:not(:first-child) { padding: 10px 6px !important; min-width: 52px !important; }
          .possible-minds .matrix-table .pos-subtitle { font-size: 10px !important; }
          .possible-minds .matrix-table td:not(:first-child) span { font-size: 10px !important; }
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
        }}>The Core Question of Our Age</div>
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
                  ? "Seven discriminating questions, each named for the thought experiment or commitment that best probes it. Each column subsumes several equivalent arguments — click any column header to see what it contains. Click any row to expand the position."
                  : "Shift the matrix from abstract commitments to concrete verdicts. Each column is a candidate system — click any system header to see how the positions divide on LLMs, thermometers, whole-brain emulations, microphysical primitives, and Block's China Brain."}
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
                    title: "The Deflationary Camp",
                    desc: "Reductive Functionalism (which clusters illusionism and eliminativism) and HOT — NO to Mary's Room, NO to zombies, YES to fading qualia. Consciousness is what brains do. The thought experiments all dissolve under proper analysis. Internal differences within the cluster are notational, not substantive.",
                    border: "#9B2226"
                  },
                  {
                    title: "The Russellian Middle",
                    desc: "Panpsychism, IIT — YES to Mary's Room but NO to zombies. Consciousness is real and irreducible but intrinsic to the physical. The escape from epiphenomenalism that preserves the explanatory gap. The fading qualia question remains genuinely contested within this camp.",
                    border: "#B08D57"
                  },
                  {
                    title: "The Nonreductionists",
                    desc: "Property Dualism, Interactionist Dualism, Biological Naturalism — YES to zombies, YES to Mary's Room. Consciousness is real, irreducible, and not intrinsic to the physical as such. The hard problem is genuine and may be permanent.",
                    border: "#7B2D8B"
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
            <EssayStub title="The Zombie at the Terminal" subtitle="Why the conceivability of philosophical zombies matters more than ever in an age of large language models." date="FORTHCOMING" tags={["P-Zombies", "LLMs", "Property Dualism"]} />
            <EssayStub title="What Mary Knew About GPT" subtitle="The knowledge argument, color science, and what it means for a system to 'know' something it has never experienced." date="FORTHCOMING" tags={["Mary's Room", "Machine Learning", "Qualia"]} />
            <EssayStub title="The Room Is the System" subtitle="Revisiting Searle's Chinese Room in the era of transformer architectures, emergent capabilities, and tool use." date="FORTHCOMING" tags={["Fading Qualia", "Functionalism", "Searle"]} />
            <EssayStub title="Causal Closure and the Forced Move" subtitle="How one near-universal assumption turns the zombie question into an epiphenomenalist trap — and the escape routes." date="FORTHCOMING" tags={["Causal Closure", "Epiphenomenalism", "Physicalism"]} />
            <EssayStub title="Integrated Information and the Grid" subtitle="Taking IIT seriously as a theory of machine consciousness: what Φ tells us and what it hides." date="FORTHCOMING" tags={["IIT", "Degrees", "Tononi"]} />
            <EssayStub title="The Combination Problem Is Everyone's Problem" subtitle="Why the hardest objection to panpsychism implicates every theory that takes emergence seriously." date="FORTHCOMING" tags={["Combination", "Panpsychism", "Emergence"]} />
            <EssayStub title="Substrate, Structure, Soul" subtitle="On whether silicon can dream: the three-way dispute between identity theorists, functionalists, and panpsychists." date="FORTHCOMING" tags={["Fading Qualia", "Type-Identity", "Micropsychism"]} />
            <EssayStub title="The Cartesian Escape Hatch" subtitle="Interactionist dualism is unfashionable, empirically costly, and the only position that preserves both the reality of consciousness and its causal power while accepting zombies." date="FORTHCOMING" tags={["Interactionist Dualism", "Descartes", "Causal Closure"]} />
            <EssayStub title="Functional-Role Panpsychism" subtitle="What if micro-experiences are typed by their causal-functional role rather than their substrate? A coherent but underexplored position that preserves the Russellian intrinsic-property move while denying substrate chauvinism — and its implications for machine consciousness." date="FLAGGED FOR WRITING" tags={["Panpsychism", "Functionalism", "Russellian Gap", "Fading Qualia"]} />
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
                This site maps nine positions in philosophy of mind against seven discriminating
                questions. The questions are parsimonious: each is logically independent of the others,
                and each subsumes several equivalent thought experiments and arguments. Together they
                are sufficient to uniquely identify every major position in the landscape.
              </p>
              <p style={{ margin: "0 0 24px 0" }}>
                Crucially, these positions are not all independent. Some are forced moves: accept both zombies
                and causal closure, and you are an epiphenomenalist whether you like it or not. Accept the
                hard problem but deny zombies, and you are pushed toward some form of Russellian monism.
                The matrix makes this nesting explicit — positions that look distinct often share
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
        }}>Nine positions · Seven questions · One problem</div>
      </footer>
    </div>
  );
}
