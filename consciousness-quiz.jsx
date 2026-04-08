import { useState, useEffect, useCallback, createElement } from "react";

// ─────────────────────────────────────────────
// Simple inline markdown: **bold** and *italic*
// ─────────────────────────────────────────────

function renderMd(text) {
  if (!text) return text;
  const parts = [];
  let key = 0;
  // Split on **bold** and *italic* patterns
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[2]) {
      parts.push(createElement("strong", { key: key++ }, match[2]));
    } else if (match[3]) {
      parts.push(createElement("em", { key: key++ }, match[3]));
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length ? parts : text;
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const STEPS = [
  {
    id: "mary",
    title: "The Knowledge Argument",
    setup: `Mary is a scientist who specializes in the physics and neuroscience of color vision. She knows every physical fact about what happens when a person sees red: the wavelengths of light, the photochemistry of retinal receptors, the signal propagation through the lateral geniculate nucleus, the activation patterns in cortical area V4, the downstream effects on memory, language, and behavior. She knows every structural, relational, dynamical, and functional fact about color processing — the complete physical story.

Her knowledge is not merely extensive. It is, by stipulation, complete: every fact about color vision that is expressible in the vocabulary of a completed physics. By *physics* we mean the structural-relational properties of the world as described by physical law: how things relate to each other, how they are disposed to behave, how they evolve over time. Mary can thus predict exactly what a subject will say, do, and discriminate when presented with any colored stimulus. She can specify the precise neural basis of every color-related capacity.

But she has spent her entire life in a black-and-white room. She has never seen color.

One day she leaves the room and sees a red apple. The question: is there a true proposition she can now affirm that she could not have derived — even in principle — from her complete physical knowledge of color vision?`,
    question: "Does Mary learn a new fact?",
    subtitle: "Can the phenomenal facts be deduced from the complete physical description?",
    options: [
      {
        label: "No — the phenomenal facts are deducible from the physical facts",
        short: "No new fact",
        desc: "Mary already had the information to derive every fact about the world, including what red looks like. What she gains upon seeing red is a new ability or mode of acquaintance — not a new proposition.",
        value: "no_gap"
      },
      {
        label: "Yes — the phenomenal facts are not deducible from the physical facts",
        short: "New knowledge",
        desc: "The complete physical description of the world does not entail what it is like to see red. There is a true proposition Mary could not have derived from her physical knowledge, no matter how much she reasoned.",
        value: "gap"
      }
    ],
    deepDives: [
      {
        title: "The original argument (Jackson 1982)",
        content: `Frank Jackson formulated the argument as a proof that physicalism is false: if Mary knows all the physical facts, and yet learns something new upon seeing red, then there are facts that are not physical facts.

The argument has a clean logical structure:

(1) Mary knows all the physical facts about color vision before leaving the room.
(2) Upon leaving, Mary learns something — she learns what it is like to see red.
(3) Therefore, there are facts that are not physical facts.

The controversy centers on premise (2). Does Mary really learn a new *fact*, or does she gain something else — a new ability, a new mode of acquaintance, a new way of representing an old fact?`,
        cite: "Jackson, F. (1982). 'Epiphenomenal Qualia.' Philosophical Quarterly 32(127), 127–136."
      },
      {
        title: "The ability hypothesis",
        content: `David Lewis and Laurence Nemirow argue that Mary does not learn a new fact. What she gains is a new *ability*: the ability to recognize red, to imagine red, to remember red. These are know-how, not know-that.

On this view, "knowing what it is like to see red" is not propositional knowledge at all. It is a practical capacity. A complete set of physical facts remains a complete set of all the facts — Mary merely gains a new skill for deploying knowledge she already had.

The challenge for this view: it must explain why the ability seems to involve genuinely new information. When Mary sees red and thinks "so *that's* what it's like," she appears to be expressing a proposition she could not have expressed before. If this is merely a new ability, why does it feel like a discovery?`,
        cite: "Lewis, D. (1988). 'What Experience Teaches.' Proceedings of the Russellian Society, University of Sydney."
      },
      {
        title: "The acquaintance hypothesis",
        content: `Earl Conee proposes a middle path: Mary gains *acquaintance* with a property she previously knew only by description. Acquaintance is a distinctive epistemic relation — direct cognitive contact with a quality — that is neither propositional knowledge (knowing-that) nor practical ability (knowing-how).

On this account, Mary knew all the propositional facts. She also gains something genuinely new — acquaintance with phenomenal redness. But this is consistent with physicalism, because acquaintance is an epistemic relation to a physical property, not knowledge of a non-physical fact. The property she becomes acquainted with may itself be physical; it's the *mode of access* that's new, not the property.`,
        cite: "Conee, E. (1994). 'Phenomenal Knowledge.' Australasian Journal of Philosophy 72(2), 136–150."
      },
      {
        title: "Jackson's own reversal",
        content: `Jackson himself eventually rejected his own argument and adopted physicalism. His reason: epiphenomenalism about qualia — the conclusion the knowledge argument supports — entails that qualia are causally inert. But if qualia are causally inert, they play no role in producing our judgments about qualia. Mary's utterance "so that's what red looks like" would be caused entirely by physical processes, not by the phenomenal experience of redness. This threatens to make our beliefs about qualia systematically unjustified.

Jackson concluded that this self-undermining character was fatal, and that the knowledge argument must have a flaw — even if he couldn't fully identify it.`,
        cite: "Jackson, F. (2003). 'Mind and Illusion.' In A. O'Hear (ed.), Minds and Persons, Royal Institute of Philosophy Supplement 53. Cambridge University Press."
      },
      {
        title: "What counts as a 'physical fact'?",
        content: `The force of the knowledge argument depends on the stipulation that Mary knows every physical fact. But what counts as a physical fact?

On a theory-based conception, physical facts are facts expressible in the vocabulary of a completed physics — structural, dynamical, mathematical. Physics describes how things relate to each other and how they evolve. On this reading, Mary's knowledge is complete in the relevant sense, and if she learns something new, it is not a physical fact.

On an object-based conception, physical facts are all facts about physical objects — including their intrinsic nature, not just their structural-relational profile. If consciousness is the intrinsic nature of physical reality (as Russellian monists hold), then the intrinsic phenomenal character of brain states is itself a physical fact — one that Mary lacked access to from her room. On this reading, the knowledge argument's first premise is false: Mary did not know every physical fact, because she lacked the intrinsic physical facts.

The scenario presented here stipulates Mary's knowledge in structural-dynamical terms, which makes the question precise: does the structural-dynamical description exhaust the facts? But a Russellian monist may hold that Mary learns something new — the intrinsic nature — while denying that the new fact is non-physical. It is a physical fact in the broad sense, one that structural physics cannot capture.`,
        cite: "Stoljar, D. (2001). 'Two Conceptions of the Physical.' Philosophy and Phenomenological Research 62(2), 253–281; Chalmers, D. (2003). 'Consciousness and its Place in Nature,' §11."
      }
    ]
  },
  {
    id: "zombies",
    title: "The Conceivability Argument",
    setup: `Consider a being that is your exact physical duplicate — atom for atom, synapse for synapse. It instantiates the same structural-relational properties: the same causal organization, the same functional profile, the same dynamics as described by physical law. It processes information identically, produces the same behaviors, says the same words in the same contexts. If you stub your toe, it says "ouch" and withdraws its foot.

But there is nothing it is like to be this being. It has no inner experience — no felt quality of pain, no visual phenomenology, no stream of consciousness. It is a philosophical zombie.

The question is not whether zombies are likely or even physically possible. The question is whether the scenario is *coherent* — whether you can conceive of it without contradiction.`,
    question: "Is a zombie conceivable?",
    subtitle: "Can a complete physical duplicate lack consciousness without contradiction?",
    options: [
      {
        label: "No — the scenario is not genuinely coherent",
        short: "Not conceivable",
        desc: "A being that duplicates all functional and physical organization necessarily satisfies every condition for consciousness.",
        value: "no_gap"
      },
      {
        label: "Yes — the scenario is coherent",
        short: "Conceivable",
        desc: "The complete physical description of a system does not logically entail facts about consciousness. One can consistently conceive of the physical structure without the phenomenal properties.",
        value: "gap"
      }
    ],
    deepDives: [
      {
        title: "Why conceivability matters",
        content: `The philosophical significance of zombies rests on a principle linking conceivability to possibility: if something is conceivable, it is possible (at least in some sense). If zombies are conceivable, then there is a possible world physically identical to ours but lacking consciousness. If such a world is possible, then consciousness is not entailed by the physical — and materialism is false.

The inference from conceivability to possibility is not trivial. "Conceivable" here means something stronger than "I can imagine it": it means that sustained rational reflection reveals no hidden contradiction. This is *ideal* conceivability — what would survive scrutiny by a fully rational thinker — not merely what seems conceivable on first impression.`,
        cite: "Chalmers, D. (2002). 'Does Conceivability Entail Possibility?' In T. Gendler & J. Hawthorne (eds.), Conceivability and Possibility. Oxford University Press."
      },
      {
        title: "Prima facie vs. ideal conceivability",
        content: `A crucial distinction: something can seem conceivable without being ideally conceivable. Before Wiles' proof, one might have "conceived" of a counterexample to Fermat's Last Theorem — but this was not ideal conceivability, because the counterexample turns out to be mathematically impossible.

Could zombies be like that? Could they *seem* conceivable but harbor a hidden contradiction? The type-A materialist says yes: once we properly understand what "consciousness" means (i.e., in functional terms), the zombie scenario is revealed as incoherent. The conceivability argument depends on the claim that zombie conceivability survives ideal rational reflection — that no amount of analysis will dissolve it.`,
        cite: "Chalmers, D. (2002). 'Does Conceivability Entail Possibility?' In T. Gendler & J. Hawthorne (eds.), Conceivability and Possibility. Oxford University Press."
      },
      {
        title: "The type-A response: zombies are incoherent",
        content: `Functionalists and eliminativists argue that the zombie scenario is only conceivable if you tacitly assume that consciousness is something over and above functional organization. If "consciousness" is analyzed functionally — if pain just *is* whatever plays the pain-role in a cognitive system — then a being that duplicates all functional roles and yet lacks consciousness is a contradiction in terms.

The dispute thus turns on whether consciousness can be given a functional analysis. If it can, zombies are definitionally impossible. If it cannot — if there is a residual notion of phenomenal consciousness that resists functional definition — then the conceivability argument goes through.`,
        cite: "Dennett, D. (1995). 'The Unimagined Preposterousness of Zombies.' Journal of Consciousness Studies 2(4), 322–326."
      },
      {
        title: "Structural coherence",
        content: `What exactly is being claimed when we say a zombie is "conceivable"? One precise formulation: the conjunction P&~Q is ideally conceivable, where P is the complete physical description of the world and Q is some phenomenal truth (e.g., "there is something it is like to see red").

The zombie advocate claims this conjunction harbors no contradiction even under ideal reflection. The materialist must locate the contradiction. The debate thus reduces to whether phenomenal truths are a priori entailed by physical truths — whether you could, in principle, deduce the existence and character of consciousness from a complete physical description.`,
        cite: "Chalmers, D. (1996). The Conscious Mind, ch. 3. Oxford University Press."
      },
      {
        title: "Zombies and the intrinsic nature of the physical",
        content: `There is a position on which zombies are inconceivable for reasons entirely different from the functionalist's. If consciousness is the intrinsic nature of physical reality — the categorical basis of the dispositions physics describes — then whether zombies are conceivable turns on whether there are alternative quiddities: non-phenomenal intrinsic properties that could play the same structural roles.

If phenomenal properties are the only metaphysically possible quiddities, zombies are impossible. You cannot have the structure without the experience, because the experience is what implements the structure. There is nothing else the mathematical skeleton of physics could be a skeleton *of*. On this view, "inert quiddity" is not a coherent notion but a label on a blank — we have acquaintance with exactly one kind of intrinsic property (the phenomenal), and no positive conception of any alternative.

If there are other possible quiddities — non-phenomenal intrinsic properties that could fill the same relational roles — then a different kind of zombie is conceivable: a being with the same physical structure but different intrinsic nature. These "Russellian zombies" would be structurally identical to us but made of different intrinsic stuff, and would lack consciousness not because the functional roles are unfilled but because the quiddities are non-phenomenal.

This question — whether phenomenal properties are the only possible quiddities, or merely the actual ones — is open. It does not admit of easy resolution, since we have direct acquaintance with phenomenal properties but cannot inspect alternative quiddities to verify their conceivability. A Russellian monist may reasonably be agnostic about zombie conceivability.

Note that it is coherent to say Mary learns something new (the specific phenomenal character that structural description leaves out) while denying that *standard* zombies are conceivable. The structural description doesn't reveal the specific intrinsic quality, so Mary learns it upon acquaintance. But the structure may necessitate that *some* phenomenal intrinsic nature exists (structure needs bearers, and the bearers may have to be phenomenal), making a being with identical structure but no experience impossible.

This is consistent with "Russellian zombies" being conceivable: a being with identical structure but *different* (non-phenomenal) quiddities. The standard zombie strips away all experience while keeping the structure. The Russellian zombie keeps the structure but swaps the intrinsic nature. Whether Russellian zombies are possible depends on whether non-phenomenal quiddities are coherent — a further open question.`,
        cite: "Chalmers, D. (2003). 'Consciousness and its Place in Nature,' §11. In Stich & Warfield (eds.), Blackwell Guide to Philosophy of Mind; Strawson, G. (2006). 'Realistic Monism: Why Physicalism Entails Panpsychism.' Journal of Consciousness Studies 13(10–11); Chalmers, D. (2015). 'Panpsychism and Panprotopsychism.' In Alter & Nagasawa (eds.), Consciousness in the Physical World. Oxford University Press."
      }
    ]
  },
  {
    id: "ontological",
    title: "From Epistemic to Metaphysical",
    setup: `You hold that the phenomenal facts are not deducible a priori from the physical facts — knowing every structural-relational fact about the world does not let you derive what it is like to see red. But does this failure of a priori deducibility reflect a failure of logical necessitation?

That is: do the physical facts logically necessitate the phenomenal facts — even if we cannot see that they do?

There is a precedent. Water is H₂O, but this identity is not knowable a priori — it was discovered empirically. Before the discovery, one could conceive of the watery stuff in lakes being something other than H₂O. Yet the identity is necessary: there is no possible world where water is not H₂O. The physical facts about hydrogen and oxygen logically necessitate the facts about water, even though a chemist cannot deduce "this is water" from the microphysics alone without empirical bridging.

Could consciousness be like this? The physical facts might logically necessitate the phenomenal facts — consciousness might be identical to some physical property — even though we cannot see the necessitation a priori. The epistemic gap (failure of deducibility) would be real but the necessitation would hold: there would be no possible world with all the physical facts but different phenomenal facts.`,
    question: "Do the physical facts logically necessitate the phenomenal facts?",
    subtitle: "Could there be a world physically identical to ours but with different (or absent) conscious experience?",
    options: [
      {
        label: "Yes — the physical facts logically necessitate the phenomenal facts, even though this is not knowable a priori",
        short: "Necessitation holds",
        desc: "Consciousness is identical to a physical property. The identity is a posteriori necessary, like water = H₂O. The phenomenal facts cannot vary independently of the physical facts. The permanent epistemic gap — the failure of a priori deducibility — reflects the unique cognitive character of phenomenal concepts, not a gap in what is necessitated.",
        value: "no_ont_gap"
      },
      {
        label: "No — the physical facts do not logically necessitate the phenomenal facts",
        short: "Necessitation fails",
        desc: "There could be a world with all the same physical (structural-relational) facts but different phenomenal facts — or no phenomenal facts at all. The failure of a priori deducibility tracks a genuine failure of logical necessitation. The physical facts leave the phenomenal facts open.",
        value: "ont_gap"
      }
    ],
    condition: (answers) => answers.zombies === "gap",
    deepDives: [
      {
        title: "Two-dimensional semantics and the zombie argument",
        content: `The formal argument against type-B materialism uses the framework of two-dimensional semantics. Every statement can be evaluated in two ways: by its *primary intension* (what it says about the actual world, considered as actual) and its *secondary intension* (what it says about counterfactual worlds, considered as counterfactual).

"Water is H₂O" is necessary in its secondary intension (in every world, water is H₂O) but contingent in its primary intension (there is a conceivable scenario — the XYZ world — where the watery stuff is not H₂O).

For type-B materialism to work, the psychophysical identity must be necessary in its secondary intension. But unlike the water case, there appears to be no world that even *verifies* "the physical facts hold and consciousness is absent" at the primary level. This would make the psychophysical identity a "strong necessity" — necessary in both intensions — which has no precedent elsewhere in nature.`,
        cite: "Chalmers, D. (2009). 'The Two-Dimensional Argument Against Materialism.' In B. McLaughlin & S. Walter (eds.), Oxford Handbook of Philosophy of Mind. Oxford University Press."
      },
      {
        title: "Strong necessities",
        content: `Standard a posteriori necessities (water = H₂O, Hesperus = Phosphorus) are "weak" necessities: they are necessary (true in all possible worlds) but there is a possible scenario that *verifies* the denial at the primary level. The XYZ-world verifies "water ≠ H₂O" considered as a way things might actually be, even though it doesn't *satisfy* "water ≠ H₂O" considered as counterfactual.

Type-B materialism requires that the psychophysical identity be a "strong" necessity: necessary in all worlds AND not verified by any scenario at the primary level. The challenge: there is no independent reason to believe strong necessities exist. They are postulated solely to accommodate the consciousness case. If they do exist, they represent a fundamental new category of necessity — which some argue is an unacceptable cost.`,
        cite: "Chalmers, D. (2009). 'The Two-Dimensional Argument Against Materialism.' In B. McLaughlin & S. Walter (eds.), Oxford Handbook of Philosophy of Mind."
      },
      {
        title: "The phenomenal concept strategy",
        content: `The main defense of type-B materialism: the epistemic gap arises not from any gap in nature but from the unique cognitive character of *phenomenal concepts*. Phenomenal concepts are recognitional concepts formed through direct acquaintance with experience. They are cognitively isolated from theoretical-physical concepts, which is why the two do not connect a priori — even though they refer to the same property.

On this view, the apparent gap between physics and consciousness is like the apparent gap between "the morning star" and "the evening star" — a consequence of distinct modes of presentation, not distinct referents.

The objection: any explanation of why phenomenal concepts create an *appearance* of a gap could equally explain the appearance of a gap in a hypothetical world where the gap is *real*. The phenomenal concept strategy explains why the gap seems to be there, but cannot distinguish a world where the gap is merely apparent from one where it is genuine.`,
        cite: "Loar, B. (1997). 'Phenomenal States.' In N. Block, O. Flanagan & G. Güzeldere (eds.), The Nature of Consciousness. MIT Press; Chalmers, D. (2007). 'Phenomenal Concepts and the Explanatory Gap.' In T. Alter & S. Walter (eds.), Phenomenal Concepts and Phenomenal Knowledge. Oxford University Press."
      }
    ]
  },
  {
    id: "closure",
    title: "Causal Closure",
    setup: `You hold that consciousness is not physical — it is ontologically distinct from the physical world. This raises the question of how consciousness relates to physical causation.

Physics appears to be causally self-contained. For every physical event, there is a sufficient physical cause. Neurons fire because of electrochemical gradients, not because of non-physical mental forces. Conservation of energy seems to leave no causal gaps for a non-physical mind to exploit.

However, this picture is not as straightforward as it seems. In standard quantum mechanics, the linear Schrödinger equation preserves superpositions, yet measurements yield definite outcomes. What causes the transition? The measurement problem has no consensus physical solution. Several physicists have proposed that conscious observation plays an irreducible role — that consciousness is not outside the causal order but is the missing piece within it.`,
    question: "Is the physical world causally closed?",
    subtitle: "Does every physical event have a sufficient physical cause, or is there room for consciousness in the causal structure?",
    options: [
      {
        label: "No — consciousness has a causal role in physics",
        short: "Open",
        desc: "Consciousness causally affects the physical world. The causal structure of physics is not self-contained. This requires revising the scope of physical law.",
        value: "open"
      },
      {
        label: "Yes — physics is causally self-contained",
        short: "Closed",
        desc: "Every physical event has a sufficient physical cause. Whatever consciousness is, it does not intervene in physical causal chains.",
        value: "closed"
      }
    ],
    condition: (answers) => answers.ontological === "ont_gap",
    deepDives: [
      {
        title: "Conservation laws and causal gaps",
        content: `The standard objection to interactionism: if a non-physical mind causally affects physical events, it must inject energy into the physical system, violating conservation of energy. This argument assumes that all causation involves energy transfer — an assumption that is debatable in quantum contexts, where the transition from superposition to definite state may not involve energy transfer at all.

Furthermore, conservation laws in physics are derived from symmetries (via Noether's theorem). If the fundamental laws include psychophysical laws, the relevant symmetries and conservation principles would need to be re-derived. The objection assumes the laws are already complete, which is the point at issue.`,
        cite: "Lowe, E.J. (2003). 'Physical Causal Closure and the Invisibility of Mental Causation.' In S. Walter & H. Heckmann (eds.), Physicalism and Mental Causation. Imprint Academic."
      },
      {
        title: "The quantum measurement problem",
        content: `Standard quantum mechanics has two dynamical laws: the linear Schrödinger equation (deterministic, preserving superpositions) and the collapse postulate (non-linear, yielding definite outcomes upon "measurement"). No purely physical criterion for "measurement" has been established.

This is not a matter of ignorance but of principle: if all physical systems obey the Schrödinger equation, superpositions should propagate indefinitely, and definite outcomes should never occur. The fact that they do occur requires either (a) a modification of quantum mechanics (GRW, Bohm), (b) a many-worlds interpretation (no collapse), or (c) a role for consciousness in causing collapse (Wigner, Stapp).

Option (c) gives consciousness a well-defined causal role within fundamental physics. It is not a modification added from outside — it addresses a gap that the standard formalism already contains.`,
        cite: "Wigner, E. (1961). 'Remarks on the Mind-Body Question.' In I.J. Good (ed.), The Scientist Speculates. Heinemann; Stapp, H. (1993). Mind, Matter, and Quantum Mechanics. Springer."
      },
      {
        title: "The Zeno problem for consciousness-collapse theories",
        content: `Recent work has identified a serious obstacle for naive versions of the consciousness-collapse proposal. The quantum Zeno effect is a well-established phenomenon: continuous measurement of a quantum system freezes its evolution — the system cannot change state because each measurement collapses it back.

If consciousness cannot enter superposition — if conscious states always have definite values — then consciousness is effectively being "measured" at every instant. By the Zeno effect, this means conscious states would be frozen: a mind would be permanently stuck in a single experience, unable to evolve. This is straightforwardly falsified by the fact that our conscious states change.

More sophisticated versions attempt to avoid this by replacing strict collapse with gradual localization dynamics: consciousness-related observables have a strong but not absolute tendency to avoid superposition, allowing conscious states to evolve while still triggering collapse in the relevant cases. These versions remain compatible with current evidence but require significant theoretical development. A further problem: any consciousness-collapse theory that relies on a single scalar measure (like "amount of consciousness") fails because distinct conscious states with the same scalar value could enter superposition undetected. The full qualitative structure of consciousness — not just a single number — must serve as the collapse trigger.

The upshot is not that consciousness-collapse theories are ruled out, but that naive formulations are empirically falsified. Viable versions require detailed integration of consciousness theory with quantum dynamics.`,
        cite: "Chalmers, D. & McQueen, K. (2022). 'Consciousness and the Collapse of the Wave Function.' In S. Gao (ed.), Consciousness and Quantum Mechanics. Oxford University Press; Chalmers, D. & McQueen, K. (2023). 'Zeno Goes to Copenhagen.' PhilArchive."
      }
    ]
  },
  {
    id: "causation",
    title: "Mental Causation",
    setup: `You hold that consciousness is non-physical and that physics is causally closed. These two commitments jointly constrain what consciousness can do.

If every physical event has a sufficient physical cause, and consciousness is not physical, then consciousness cannot be among the causes of physical events — its causal contribution is preempted by the physical cause. Your physical duplicate — the zombie — produces exactly the same behavior for purely physical reasons. The conscious experience that accompanies your behavior is, causally speaking, redundant.

There is an alternative: consciousness causes the same physical effects that the physical causes produce, so that every conscious action is causally overdetermined — caused twice over, once by physics and once by consciousness.`,
    question: "Does consciousness causally affect the physical world?",
    subtitle: "Given that physics is causally closed and consciousness is non-physical, does consciousness do any causal work?",
    options: [
      {
        label: "No — consciousness is causally inert",
        short: "No",
        desc: "Physical states cause conscious states, but conscious states cause nothing. The experience of deciding to act plays no role in the action.",
        value: "inert"
      },
      {
        label: "Yes — via systematic overdetermination",
        short: "Yes, via overdetermination",
        desc: "Every conscious action has two independently sufficient causes — one physical, one phenomenal. Both the physical causal chain and consciousness produce the same effect.",
        value: "overdetermination"
      }
    ],
    condition: (answers) => answers.ontological === "ont_gap" && answers.closure === "closed" && answers.russellian === "dualist",
    deepDives: [
      {
        title: "The exclusion argument",
        content: `Jaegwon Kim's exclusion argument: if a physical event e has a sufficient physical cause p, and a non-physical mental cause m, then either (a) m = p (identity, materialism), (b) m is causally irrelevant (epiphenomenalism), or (c) e is systematically overdetermined by both m and p.

The argument rests on a principle of causal exclusion: if an event has a sufficient cause, no other event can be a cause of it (unless it's a case of genuine overdetermination). For a single case, overdetermination is unproblematic — two rocks breaking a window. But *systematic* overdetermination — where every single mental-to-physical causal claim involves double causation — strains credibility.`,
        cite: "Kim, J. (2005). Physicalism, or Something Near Enough, ch. 2. Princeton University Press."
      },
      {
        title: "The paradox of phenomenal judgment",
        content: `Consider your belief that you are conscious. Under epiphenomenalism, this belief is caused entirely by physical processes. The phenomenal experience of consciousness — the very thing the belief is about — plays no role in producing the belief. Your zombie twin holds the same belief for the same (physical) reasons, despite having no consciousness.

This means that your belief that you are conscious is not caused by your being conscious. It is caused by the same neural processes that would occur even in the absence of consciousness. Some argue this undermines the epistemic justification of beliefs about consciousness. Others respond that consciousness may *constitutively* (rather than causally) ground beliefs about consciousness — the experience is part of the belief, not a cause of it.`,
        cite: "Chalmers, D. (1996). The Conscious Mind, ch. 5. Oxford University Press."
      }
    ]
  },
  {
    id: "russellian",
    title: "The Intrinsic Nature of the Physical",
    setup: `There is a position that cuts across the dualism/materialism divide by reconceiving the physical itself.

Physics describes the world entirely in terms of relational and dispositional properties. Mass is resistance to acceleration. Charge is the disposition to attract or repel. Spin is an interaction with magnetic fields. Every physical property is characterized by its relations to other properties — by what it *does*, not by what it *is*.

This leaves open a question: what is the intrinsic nature of the stuff that bears these relations and dispositions? Physics describes the structure of reality. But what is the structure a structure *of*?

One answer: the intrinsic nature of physical reality is phenomenal. What physics describes from the outside — in terms of structure and dynamics — consciousness knows from the inside. There is one reality, two modes of access. Consciousness is not something separate competing with physics for causal credit; it is the intrinsic nature of the very stuff whose relational profile physics describes.`,
    question: "Is consciousness the intrinsic nature of physical reality?",
    subtitle: "Does consciousness fill the gap in physics' structural description — one reality, two modes of access?",
    options: [
      {
        label: "Yes — consciousness is the intrinsic nature of the physical",
        short: "Yes",
        desc: "Physics describes the relational structure; consciousness is the intrinsic nature of what bears that structure. This preserves causal closure while giving consciousness a genuine place in nature — it is the causally efficacious stuff itself, described from the inside rather than the outside.",
        value: "russellian"
      },
      {
        label: "No — consciousness is ontologically separate from the physical",
        short: "No",
        desc: "Consciousness is not the intrinsic nature of matter. It is genuinely distinct from the physical — whether as a separate substance, a separate property, or a separate domain of facts.",
        value: "dualist"
      }
    ],
    condition: (answers) => answers.ontological === "ont_gap" && answers.closure === "closed",
    deepDives: [
      {
        title: "Russell's observation",
        content: `Bertrand Russell noted in 1927 that physics has undergone a transformation: it no longer tells us about the *nature* of matter, only about its *structure*. The equations of physics describe a web of relations — spatiotemporal, causal, nomic — but are silent about what occupies the nodes of this web.

"Physics is mathematical not because we know so much about the physical world, but because we know so little: it is only its mathematical properties that we can discover."

This is not a claim about current ignorance. It is a claim about what physics *can* know in principle, given that its methods are structural. The intrinsic nature of matter is, by the nature of physical inquiry, beyond its reach.`,
        cite: "Russell, B. (1927). The Analysis of Matter, ch. 37. Kegan Paul."
      },
      {
        title: "How this addresses the exclusion problem",
        content: `If phenomenal properties are the intrinsic nature of what physics describes structurally, the exclusion problem appears to dissolve. There is no competition between a physical cause and a mental cause — they are the same thing at two levels. Consciousness is not an additional cause; it is *what the cause is*, intrinsically.

The physical causal chain is complete: the structural-relational description is self-contained. But the intrinsic nature of the relata in that chain is phenomenal. Consciousness is not an additional cause; it is *what the cause is*, intrinsically. Causal closure is preserved while consciousness is not epiphenomenal.

However, this claim faces a serious challenge once we consider the question of underdetermination — addressed on the next page.`,
        cite: "Chalmers, D. (2015). 'Panpsychism and Panprotopsychism.' In T. Alter & Y. Nagasawa (eds.), Consciousness in the Physical World. Oxford University Press."
      },
      {
        title: "Panpsychism vs. panprotopsychism",
        content: `If the intrinsic nature of fundamental physical entities is phenomenal, then fundamental physical entities have phenomenal properties — this is *panpsychism*. Electrons, quarks, and photons have experiences, however simple or alien.

An alternative: the intrinsic nature is *protophenomenal* — not itself experiential, but capable of constituting experience when arranged appropriately. This is *panprotopsychism*. It avoids attributing experience to individual electrons, but it risks reintroducing the hard problem: how do non-experiential properties give rise to experiential ones?

The choice between panpsychism and panprotopsychism is a further question within the Russellian framework. Both agree that consciousness is the intrinsic nature of the physical; they disagree about whether the fundamental intrinsic properties are themselves experiential.`,
        cite: "Chalmers, D. (2015). 'Panpsychism and Panprotopsychism.' In T. Alter & Y. Nagasawa (eds.), Consciousness in the Physical World. Oxford University Press."
      }
    ]
  },
  {
    id: "underdetermination",
    title: "Structure and Intrinsic Nature",
    setup: `You hold that consciousness is the intrinsic nature of what physics describes structurally. But this raises a critical question: do the structural facts logically fix *which* intrinsic natures obtain?

If so, the structural/intrinsic distinction collapses. If the relational-structural description logically necessitates the specific intrinsic character, then the intrinsic facts are implicit in the structural facts — derivable from them. There are no genuinely extra-structural facts, and "intrinsic nature" is just a re-description of what physics already captures. You have not gone beyond physicalism; you have merely given it a Russellian gloss. You would be a type-A or type-B physicalist depending on whether the connection between structural and phenomenal facts is knowable a priori.

If not — if the structural facts constrain the quiddities (they must have the right dispositional profile) without fixing *which specific* intrinsic qualities fill those roles — then the position is genuinely distinct. The structural facts necessitate that *some* intrinsic natures exist (structure needs bearers), but do not determine their specific phenomenal character.

This underdetermination has a causal cost. If the structural description is causally complete — determining all behavior, all physical effects — and the specific phenomenal character is not fixed by structure, then the specific character of experience makes no causal difference. Swap the quiddities, and the being behaves identically: says the same words about its experiences, writes the same philosophy papers about qualia, withdraws its hand from pain with the same urgency. It is not the *painfulness* of pain that causes you to say "that hurts" — it is the structural-dispositional profile, which is the same under any quiddity that fills the role. Your utterances about the character of your experience are not caused by that character.`,
    question: "Do the structural facts logically fix the intrinsic natures?",
    subtitle: "Is the specific phenomenal character determined by the relational-structural description, or does structure underdetermine the quiddities?",
    options: [
      {
        label: "No — structure underdetermines the intrinsic natures",
        short: "Underdetermines",
        desc: "The structural-relational facts constrain but do not logically fix the specific phenomenal character. This is what makes the position genuinely distinct from physicalism. The cost: since structure is causally complete and qualitative character is underdetermined by structure, the specific character of experience is causally inert — it is not the painfulness of pain that causes pain-behavior.",
        value: "underdetermines"
      },
      {
        label: "Yes — structure logically fixes the intrinsic natures",
        short: "Structure fixes",
        desc: "The structural-relational facts logically determine which specific intrinsic natures obtain. This collapses the structural/intrinsic distinction: if consciousness is the intrinsic nature, and structure fixes the intrinsic nature, then the physical (structural) facts logically necessitate the phenomenal facts. But you earlier held that they do not. You will be returned to that question to reconcile.",
        value: "structure_fixes"
      }
    ],
    condition: (answers) => answers.russellian === "russellian",
    deepDives: [
      {
        title: "The exclusion problem: solved or relocated?",
        content: `The Russellian pitch is that consciousness is causally efficacious because it is identical to the stuff doing the causing. But the underdetermination that makes Type-F a distinct position is the same underdetermination that makes qualitative character causally idle.

Consider: a being with your exact physical structure but different quiddities (a Russellian "invert") would produce identical behavior. It would say "I see red" and "that hurts" for exactly the same structural reasons you do. It is not the painfulness of your pain that causes you to report being in pain — it is the structural-dispositional profile, invariant across quiddistic swaps.

So Type-F monism can say consciousness is "causally efficacious" in the thin sense that consciousness is identical to the stuff doing the causing. But the qualitative character — the redness, the painfulness, the what-it-is-likeness — is as causally inert as it is under epiphenomenalism. The exclusion problem is not solved but reframed: instead of consciousness as a whole being excluded, the specific phenomenal character is excluded while the structural role retains causal credit.`,
        cite: "Howell, R. (2015). 'The Russellian Monist's Problems with Mental Causation.' Philosophical Quarterly 65(258), 22–39."
      },
      {
        title: "Why the collapse is genuine",
        content: `A relational web constrains its nodes dispositionally — it specifies what they *do* — but multiple distinct categorical properties could satisfy the same dispositional role. Structure constrains quiddities without fixing them. This is what makes the underdetermination claim plausible.

But if you deny the underdetermination — if you hold that structure *does* logically fix the intrinsic natures — then there are no genuinely extra-structural facts. The position collapses into physicalism because the physical (structural) facts logically necessitate the phenomenal facts. Given your earlier answers: if Mary learns no new fact upon seeing red, the necessitation is a priori (type-A physicalism); if Mary does learn something new, the necessitation is a posteriori (type-B physicalism).

Note: if you earlier held that zombies are conceivable (a structural duplicate could lack consciousness), this is inconsistent with structure fixing the intrinsics. If structure fixes consciousness via fixing its intrinsic nature, a structural duplicate necessarily has the same consciousness.`,
        cite: "Stoljar, D. (2001). 'Two Conceptions of the Physical.' Philosophy and Phenomenological Research 62(2), 253–281."
      }
    ]
  },
  {
    id: "constitutive",
    title: "The Combination Problem",
    setup: `You hold that consciousness is the intrinsic nature of the physical. Fundamental physical entities have phenomenal or protophenomenal properties. Your brain consists of roughly 10²⁷ such entities. Each has its own intrinsic phenomenal character.

The question is about the relationship between the phenomenal properties of the parts and the phenomenal properties of the whole — between micro-level experience and your unified conscious experience.

There are two structurally distinct possibilities. The first: your macroscopic experience is *grounded in* the micro-level phenomenal properties — constituted by them, the way a macro-physical property like liquidity is constituted by molecular properties. There is no additional fundamental fact about your consciousness beyond the micro-phenomenal facts and their structural arrangement.

The second: your macroscopic experience is *not* grounded in the micro-level phenomenal properties. Both exist, but the macro is something over and above the micro. It is either a further fundamental fact that emerges from certain configurations, or the direction of explanation runs the other way — perhaps the fundamental conscious subject is not at the micro-level at all.`,
    question: "Is your macroscopic experience grounded in micro-level phenomenal properties?",
    subtitle: "Is the relationship between micro-experience and macro-experience one of constitution, or is macro-experience something additional?",
    options: [
      {
        label: "Yes — macro-experience is constituted by micro-experience",
        short: "Constitutive",
        desc: "Macroscopic consciousness is grounded in the micro-phenomenal properties of fundamental entities, together with their structural organization. There is no further fundamental fact. The challenge is explaining how this grounding works.",
        value: "constitutive"
      },
      {
        label: "No — macro-experience is not constituted by micro-experience",
        short: "Non-constitutive",
        desc: "Micro-level phenomenal properties exist but do not constitute macroscopic consciousness. Macro-experience is a further fact — either emergent from certain configurations or grounded at a different level entirely.",
        value: "non_constitutive"
      }
    ],
    condition: (answers) => answers.russellian === "russellian" && answers.underdetermination === "underdetermines",
    deepDives: [
      {
        title: "The subject-summing problem",
        content: `The most fundamental form of the combination problem concerns subjects, not properties. Each micro-entity has (by hypothesis) its own phenomenal character. But the existence of a million micro-subjects does not logically entail the existence of a further macro-subject that experiences their combination.

Consider: you can conceive of a system whose micro-level parts are each individually conscious but where no unified macro-consciousness exists — call these "micro-experiential zombies." The system's parts each have their flickers of experience, but there is nothing it is like to be the system as a whole. If this is conceivable, then micro-consciousness does not a priori entail macro-consciousness.

This means constitutive panpsychism faces a combination problem that is structurally parallel to the original hard problem: just as physical facts do not a priori entail phenomenal facts, micro-phenomenal facts may not a priori entail macro-phenomenal facts. The hard problem has been relocated, not dissolved.`,
        cite: "Chalmers, D. (2016). 'The Combination Problem for Panpsychism.' In G. Brüntrup & L. Jaskolla (eds.), Panpsychism: Contemporary Perspectives. Oxford University Press."
      },
      {
        title: "The quality combination problem",
        content: `Even granting that subjects combine, there is a further problem about qualities. If the phenomenal properties of fundamental entities are constrained by their physical roles, there may be very few distinct micro-phenomenal qualities — perhaps as few as the number of fundamental physical properties in the Standard Model. But human experience encompasses an enormous quality space: the full range of colors, sounds, textures, emotions.

How do a handful of basic micro-qualities yield the vast diversity of macro-experience? If the composition is merely additive, the resulting quality space seems too impoverished. The constitutive view must explain how combinatorial richness arises from simple ingredients.`,
        cite: "Chalmers, D. (2016). 'The Combination Problem for Panpsychism.' In G. Brüntrup & L. Jaskolla (eds.), Panpsychism: Contemporary Perspectives. Oxford University Press."
      },
      {
        title: "The structure combination problem",
        content: `Conscious experience has a complex structure — a visual field with spatial organization, a temporal flow, distinct sensory modalities. The structure of experience does not obviously mirror the structure of the underlying physical system. Neural processing is distributed, parallel, and discrete; visual experience is unified, continuous, and smoothly spatial.

If macroexperience is constituted by microexperience, there must be a principled mapping between the structure of micro-level phenomenal properties and the structure of macro-level experience. The challenge is that we have no clear model of how the structure of experience relates to the structure of its physical substrate — and this problem persists even after relocating consciousness to the intrinsic nature of the physical.`,
        cite: "Chalmers, D. (2016). 'The Combination Problem for Panpsychism.' In G. Brüntrup & L. Jaskolla (eds.), Panpsychism: Contemporary Perspectives. Oxford University Press."
      }
    ]
  },
  {
    id: "grounding_type",
    title: "The Transparency of Grounding",
    setup: `You hold that macroexperience is constituted by microexperience. But is this grounding relationship *transparent* or *opaque*?

Consider the analogy with physical constitution. Liquidity is constituted by molecular properties: given the complete molecular description, one can in principle deduce that the substance will be liquid. The grounding is transparent — there is an a priori entailment from micro-level facts to macro-level facts.

Could the same hold for consciousness? Given the complete micro-phenomenal facts (the phenomenal properties of every fundamental entity) together with the complete structural facts (how those entities are arranged and interact), can one in principle deduce the macro-phenomenal facts — what it is like to be the whole system?

If yes, the grounding is transparent. The combination problem is a research problem: difficult, perhaps currently intractable, but in principle solvable by discovering the right combinatorial principles.

If no, the grounding is opaque. The entailment from micro-phenomenal to macro-phenomenal is a posteriori necessary — it holds, but cannot be deduced even in principle. This is structurally identical to the move made by type-B materialism with respect to the original hard problem. The hard problem has not been dissolved but relocated: from "why does this physical structure give rise to consciousness?" to "why does this micro-phenomenal structure give rise to this macro-phenomenal character?"`,
    question: "Is the grounding of macro-experience in micro-experience transparent?",
    subtitle: "Can macro-phenomenal facts be deduced in principle from micro-phenomenal and structural facts?",
    options: [
      {
        label: "Yes — the grounding is in principle transparent",
        short: "Transparent grounding",
        desc: "Given the complete micro-phenomenal and structural facts, the macro-phenomenal facts are in principle deducible. The combination problem is a research challenge, not a principled barrier. The hard problem is genuinely dissolved at this level.",
        value: "transparent"
      },
      {
        label: "No — the grounding is opaque",
        short: "Opaque grounding",
        desc: "The entailment from micro-phenomenal to macro-phenomenal is a posteriori necessary. It holds, but it is not deducible even in principle from the micro-level facts. The hard problem has been relocated from the physical-phenomenal gap to the micro-macro gap.",
        value: "opaque"
      }
    ],
    condition: (answers) => answers.russellian === "russellian" && answers.constitutive === "constitutive",
    deepDives: [
      {
        title: "The A/B distinction within panpsychism",
        content: `The distinction between transparent and opaque grounding recapitulates, at a different level, the same distinction that separates type-A and type-B materialism.

Type-A constitutive panpsychism holds that micro-phenomenal truths (plus structural truths) a priori entail macro-phenomenal truths. The grounding is transparent: in principle, a sufficiently informed reasoner could deduce the character of macro-experience from the micro-level description. This is the most ambitious form — it claims to genuinely solve the hard problem by providing a level at which the explanatory gap closes.

Type-B constitutive panpsychism holds that the entailment is a posteriori necessary. The micro-to-macro phenomenal connection is brute — it holds in all possible worlds, but it cannot be deduced a priori. This faces the same objections as type-B materialism: it requires "strong necessities" connecting micro-phenomenal to macro-phenomenal facts, with no independent motivation. The hard problem reappears as a combination problem with exactly the same logical structure.`,
        cite: "Chalmers, D. (2015). 'Panpsychism and Panprotopsychism.' In T. Alter & Y. Nagasawa (eds.), Consciousness in the Physical World. Oxford University Press."
      },
      {
        title: "Why this matters",
        content: `The distinction is not merely technical. If the grounding is transparent, then constitutive Russellian monism has a genuine claim to have resolved the hard problem — it has identified a level of description (the micro-phenomenal) from which consciousness is in principle deducible. The residual combination problem is a tractable (if enormously difficult) scientific and philosophical research program.

If the grounding is opaque, the position is in an important sense no better off than type-B materialism. It has added micro-phenomenal properties to the ontology, but the fundamental explanatory gap persists at the micro-to-macro transition. The question "why does this micro-phenomenal arrangement give rise to this macro-experience rather than that one, or none?" has no a priori answer — it is a brute fact. This is not necessarily fatal, but it means the Russellian move has not eliminated the hard problem, only relocated it.`,
        cite: "Chalmers, D. (2015). 'Panpsychism and Panprotopsychism.' In T. Alter & Y. Nagasawa (eds.), Consciousness in the Physical World. Oxford University Press."
      }
    ]
  },
  {
    id: "nonconst_type",
    title: "Non-Constitutive Russellian Monism",
    setup: `You hold that consciousness is the intrinsic nature of the physical, but that macroscopic experience is not constituted by microscopic experience. Micro-level phenomenal properties exist, but they do not ground your unified consciousness. Your consciousness is a further fact.

This leaves two structurally distinct possibilities for how your macro-consciousness arises.

The first: macro-consciousness *strongly emerges* from certain configurations of micro-entities, via fundamental laws that are not deducible from the micro-level description. These are bridging laws connecting micro-phenomenal configurations to macro-phenomenal states. Note that the micro-level phenomenal properties remain causally efficacious — they are the intrinsic nature of the physically causally active states. But the *macro*-phenomenal character — the unified, structured experience that emerges — is an additional fact beyond the micro-level. The question arises whether this emergent macro-phenomenal character has causal powers of its own, beyond those already exercised by the micro-phenomenal properties it emerges from.

The second: the direction of explanation is reversed. The fundamental conscious subject is not at the micro-level but at the level of the whole — perhaps the cosmos itself. Individual consciousnesses are not composed upward from simpler experiences but decomposed downward from a more fundamental whole. The combination problem is replaced by a *decomposition problem*: how does a single cosmic consciousness give rise to many bounded, distinct individual experiences?`,
    question: "How does macro-consciousness arise, if not by constitution from micro-consciousness?",
    subtitle: "Is macro-experience emergent from micro-configurations, or is the fundamental subject at a higher level?",
    options: [
      {
        label: "Emergent — via fundamental bridging laws",
        short: "Emergent",
        desc: "Macro-consciousness strongly emerges from certain configurations of micro-entities. There are fundamental laws connecting micro-phenomenal arrangements to macro-phenomenal states. These laws are not deducible from the micro-level description.",
        value: "emergent"
      },
      {
        label: "Top-down — the fundamental subject is the whole, not the parts",
        short: "Priority monism",
        desc: "The fundamental conscious subject is at the level of the whole (perhaps the cosmos). Individual consciousnesses are derived by decomposition. The combination problem is replaced by a decomposition problem.",
        value: "top_down"
      }
    ],
    condition: (answers) => answers.russellian === "russellian" && answers.constitutive === "non_constitutive",
    deepDives: [
      {
        title: "Why emergent non-constitutive views face distinctive problems",
        content: `If macro-consciousness strongly emerges from micro-configurations via fundamental bridging laws, the macro-phenomenal facts are ontologically additional to the micro-phenomenal and structural facts. The bridging laws are fundamental and brute.

The Russellian framework does secure causal efficacy for consciousness at the micro-level: micro-phenomenal properties are the intrinsic nature of the causally active physical states, so they do genuine causal work. But the emergent macro-phenomenal character — the unified experience that emerges from these micro-level properties — is a further fact. Does this emergent macro-character have causal powers of its own, beyond those already exercised by its micro-level constituents?

If the macro-phenomenal has no additional causal power beyond what the micro-phenomenal already provides, then the specific character of your unified experience — the fact that your visual field has this structure, that your pain has this quality — does no work that the micro-level wasn't already doing. The micro-phenomenal is causally efficacious, but the distinctive macro-phenomenal is along for the ride.

This is not classical epiphenomenalism (phenomenal properties in general are inert), but it is a structurally similar concern at the macro level. The primary motivation for Russellian monism was to give consciousness genuine causal relevance. Non-constitutive emergent versions deliver this at the micro-level but may not deliver it at the level of unified experience.`,
        cite: "Chalmers, D. (2015). 'Panpsychism and Panprotopsychism.' In T. Alter & Y. Nagasawa (eds.), Consciousness in the Physical World. Oxford University Press."
      },
      {
        title: "The decomposition problem",
        content: `If the fundamental conscious subject is the cosmos as a whole, then individual human consciousnesses must be explained as decompositions of cosmic experience. This reverses the explanatory direction: instead of asking how micro-experiences compose into a macro-experience, we ask how a single cosmic experience decomposes into many bounded, distinct, mutually opaque individual experiences.

Is the decomposition problem more tractable than the combination problem? There are some suggestive models: dissociative identity involves a single cognitive system giving rise to multiple apparently distinct conscious subjects; split-brain cases involve a single brain giving rise to what may be two streams of consciousness. These demonstrate that decomposition of subjects is at least possible.

But the decomposition problem has its own challenges. Why do individual subjects have sharp boundaries? Why are individual experiences mutually opaque — why can I not access your experience? How does a single cosmic experience decompose into billions of radically distinct subjective perspectives? These questions may prove no easier than the combination problem.`,
        cite: "Shani, I. (2015). 'Cosmopsychism: A Holistic Approach to the Metaphysics of Experience.' Philosophical Papers 44(3), 389–437."
      }
    ]
  },
  {
    id: "functionalism",
    title: "Substrate Independence",
    setup: `One final question, orthogonal to the decision tree above. The previous questions concerned logical necessitation — whether the physical facts *logically* fix the phenomenal facts, across all possible worlds. This question concerns natural supervenience — whether, *in our world*, consciousness tracks functional organization or depends on the specific physical substrate.

Suppose each neuron in your brain can be replaced with a silicon chip that performs the same functional role — same inputs, same outputs, same causal relations with neighboring cells. Now suppose the replacement is reversible: at each neural site, a switch can flip between the biological neuron and the silicon chip.

If consciousness depends on substrate — if the specific physical makeup matters, not just the functional organization — then flipping a switch changes the experience at that site. The silicon chip, though functionally identical, is made of different stuff with different intrinsic properties. Flip enough switches and the total experience changes character: perhaps colors shift, perhaps pain feels different, perhaps experience dims or vanishes entirely.

But here is the critical point: your functional organization is unchanged throughout. Your behavior is the same. Your verbal reports are the same. And — crucially — your *introspective judgments* are the same, because introspective judgments are functional states, and the functional states have not changed.

This means your subjective experience could be undergoing radical changes — or disappearing entirely — while you remain completely oblivious. You would sincerely report that nothing has changed. You would judge your experience to be constant. You would have no access whatsoever to the fact that your qualia are dancing.

The question is not whether this is conceivable or *logically* possible, but whether this is empirically possible. Is a subject in some cases oblivious to changes in — or the absence of — its own conscious experience?`,
    question: "Can a subject be oblivious to changes in its own experience?",
    subtitle: "If your qualia shifted while your functional states remained constant, would you notice?",
    options: [
      {
        label: "No — function determines experience.",
        short: "Functionalist",
        desc: "In our world, a subject is never systematically wrong about whether its experience is changing — this does not happen. If your introspective judgments are unchanged, your experience is unchanged. Consciousness naturally supervenes on functional organization.",
        value: "functionalist"
      },
      {
        label: "Yes — substrate can affect experience independently of function",
        short: "Substrate-dependent",
        desc: "It is empirically possible for experience to change while functional organization — including introspection — remains constant. Introspective judgments track functional states, not phenomenal states directly. The substrate contributes to consciousness in a way that function does not capture.",
        value: "substrate"
      }
    ],
    condition: () => true,
    deepDives: [
      {
        title: "What exactly is at stake",
        content: `The dancing qualia scenario forces a choice about the epistemic relationship between a subject and its own experience. If qualia can dance — if experience can change without any change in functional organization, including introspection — then there is a sense in which you are not authoritative about your own conscious states. Your judgment that "my experience hasn't changed" could be false, and you could never discover this.

This is not a claim about occasional introspective error. It is systematic: the functional states that constitute introspective access are, by stipulation, unchanged. There is no functional state that could register the change, because the change is entirely in the non-functional substrate. The subject is not merely failing to notice — it lacks the capacity in principle to detect the shift.

The functionalist holds this is incoherent: if no functional state registers a difference, there is no difference. The anti-functionalist holds it is coherent but perhaps surprising: consciousness has aspects that outrun functional organization, and introspection — being a functional capacity — cannot track those aspects.`,
        cite: "Chalmers, D. (1996). The Conscious Mind, ch. 7. Oxford University Press."
      },
      {
        title: "The fading qualia variant",
        content: `A related thought experiment uses gradual replacement without reversibility. As neurons are replaced one by one with functionally identical silicon chips, consciousness gradually fades — diminishing as the replacement proceeds, even as behavior and function remain constant.

At intermediate stages, the system functions perfectly but (by hypothesis) has significantly diminished experience. It is a system that reports rich experience, that introspects and judges itself to be fully conscious, but whose consciousness has partly drained away.

This scenario requires the same commitment as dancing qualia: that a subject can be systematically wrong about the presence and richness of its own experience. The fading case is sometimes considered more troubling than the dancing case, because it involves not just a change in experiential character but a partial loss of experience — approaching a functional zombie from within.`,
        cite: "Chalmers, D. (1996). The Conscious Mind, ch. 7. Oxford University Press."
      },
      {
        title: "The substrate-dependent response",
        content: `Accepting that qualia can dance (or fade) without the subject noticing requires accepting that introspection has limits — that functional self-monitoring tracks functional states, not phenomenal states per se.

On a Russellian view, this has a natural interpretation. If consciousness is constituted by the intrinsic nature of the physical substrate, and different substrates have different intrinsic natures (different quiddities), then replacing the substrate changes the intrinsic nature and therefore the experience — even while preserving the relational structure that determines function. Introspective reports, being structurally determined, remain constant. This is not a failure of introspection; introspection does what it does (report functional states), and the functional states are unchanged.

Whether the alternative substrate produces *different* experience, *diminished* experience, or *no* experience is a further question the thought experiment does not settle. It depends on the nature of the silicon quiddities — which we do not have independent access to.`,
        cite: "Block, N. (1978). 'Troubles with Functionalism.' Minnesota Studies in the Philosophy of Science 9; Chalmers, D. (1996). The Conscious Mind, ch. 7."
      }
    ]
  }
];

// ─────────────────────────────────────────────
// Position determination
// ─────────────────────────────────────────────

function getPosition(answers) {
  const noGap = answers.mary === "no_gap" && answers.zombies === "no_gap";
  const hasGap = answers.mary === "gap" || answers.zombies === "gap";

  let base;
  // "Structure fixes intrinsics" collapses the ontological gap — re-routes to physicalism
  if (noGap) base = { id: "type-a", name: "Type-A Materialism", aka: "Eliminativism, illusionism, analytic functionalism, logical behaviorism, deflationism", desc: "The physical facts logically necessitate the phenomenal facts, and this necessitation is knowable a priori — the phenomenal facts are deducible from a complete physical description. There is no epistemic gap. The hard problem dissolves into the easy problems.", color: "#5C3D1E" };
  else if (answers.mary === "gap" && answers.zombies === "no_gap") base = { id: "type-b", name: "Type-B Materialism", aka: "A posteriori physicalism, the phenomenal concept strategy, psychophysical identity theory", desc: "The physical facts logically necessitate the phenomenal facts — a physical duplicate necessarily has the same consciousness (zombies are incoherent). But this necessitation is not knowable a priori: Mary learns something new upon seeing red. The phenomenal facts cannot be deduced from the physical description. Consciousness is identical to a physical property; the identity is a posteriori necessary, like water = H₂O.", color: "#1B4D8A" };
  else if (hasGap && answers.ontological === "no_ont_gap") base = { id: "type-b", name: "Type-B Materialism", aka: "A posteriori physicalism, the phenomenal concept strategy, psychophysical identity theory", desc: "The physical facts logically necessitate the phenomenal facts, but this necessitation is not knowable a priori — the phenomenal facts cannot be deduced from the physical description. Consciousness is identical to a physical property; the identity is a posteriori necessary. The permanent epistemic gap (failure of deducibility) arises from the unique cognitive character of phenomenal concepts, not from a failure of necessitation.", color: "#1B4D8A" };
  else if (answers.ontological === "ont_gap" && answers.closure === "open") base = { id: "type-d", name: "Type-D Dualism (Interactionism)", aka: "Substance dualism, property dualism with downward causation, emergentist interactionism", desc: "The physical facts do not logically necessitate the phenomenal facts. Consciousness is not necessitated by the structural-relational description and causally affects the physical world. The causal structure of physics is not self-contained — consciousness plays an irreducible causal role.", color: "#8B2252" };
  else if (answers.ontological === "ont_gap" && answers.closure === "closed" && answers.causation === "inert" && answers.russellian !== "russellian") base = { id: "type-e", name: "Type-E Dualism (Epiphenomenalism)", aka: "Property epiphenomenalism, parallelist dualism", desc: "The physical facts do not logically necessitate the phenomenal facts. Consciousness is not necessitated by the structural-relational description and is causally inert. Physical states cause conscious states, but conscious states cause nothing. This follows from the conjunction of the failure of necessitation and causal closure.", color: "#6B3FA0" };
  else if (answers.ontological === "ont_gap" && answers.closure === "closed" && answers.causation === "overdetermination") base = { id: "type-o", name: "Type-O Dualism (Overdetermination)", aka: "Causal overdetermination, dual-causation dualism", desc: "The physical facts do not logically necessitate the phenomenal facts. Consciousness is not necessitated by the structural-relational description but is causally efficacious via systematic overdetermination. Every physical effect of consciousness also has a sufficient physical cause.", color: "#8A6E24" };
  else if (answers.russellian === "russellian" && answers.constitutive === "constitutive" && answers.grounding_type === "transparent") base = { id: "type-f-const-a", name: "Type-F Monism — Constitutive (Transparent)", aka: "Constitutive Russellian panpsychism (type-A), constitutive panprotopsychism, neutral monism", desc: "Consciousness is the intrinsic nature of the physical. Macroexperience is grounded in microexperience, and this grounding is in principle transparent — macro-phenomenal facts are deducible from micro-phenomenal and structural facts. The combination problem is a research challenge, not a principled barrier.", color: "#2D6B4F" };
  else if (answers.russellian === "russellian" && answers.constitutive === "constitutive" && answers.grounding_type === "opaque") base = { id: "type-f-const-b", name: "Type-F Monism — Constitutive (Opaque)", aka: "Constitutive Russellian panpsychism (type-B), brute-grounding panpsychism", desc: "Consciousness is the intrinsic nature of the physical. Macroexperience is grounded in microexperience, but the grounding is a posteriori necessary — not deducible even in principle from the micro-level facts. The hard problem has been relocated from the physical-phenomenal gap to the micro-macro phenomenal gap.", color: "#2D6B4F" };
  else if (answers.russellian === "russellian" && answers.constitutive === "constitutive") base = { id: "type-f-const", name: "Type-F Monism — Constitutive", aka: "Constitutive Russellian panpsychism, panprotopsychism, neutral monism", desc: "Consciousness is the intrinsic nature of the physical, and macroexperience is grounded in microexperience. The combination problem is the central open question.", color: "#2D6B4F" };
  else if (answers.russellian === "russellian" && answers.constitutive === "non_constitutive" && answers.nonconst_type === "emergent") base = { id: "type-f-emerg", name: "Type-F Monism — Non-constitutive Emergent", aka: "Emergent Russellian panpsychism, emergent panprotopsychism", desc: "Consciousness is the intrinsic nature of the physical, and micro-phenomenal properties are causally efficacious. But unified macro-experience strongly emerges from micro-configurations via fundamental bridging laws, as a further fact. The question of whether this emergent macro-phenomenal character has additional causal powers — beyond those already exercised by the micro-phenomenal — remains open.", color: "#2D6B4F" };
  else if (answers.russellian === "russellian" && answers.constitutive === "non_constitutive" && answers.nonconst_type === "top_down") base = { id: "type-f-topdown", name: "Type-F Monism — Priority Monism", aka: "Cosmopsychism, priority cosmopsychism, holistic panpsychism", desc: "Consciousness is the intrinsic nature of the physical, and the fundamental conscious subject is the cosmos as a whole. Individual consciousnesses are derived by decomposition, not composition. The combination problem is replaced by a decomposition problem.", color: "#2D6B4F" };
  else if (answers.russellian === "russellian" && answers.constitutive === "non_constitutive") base = { id: "type-f-nonconst", name: "Type-F Monism — Non-constitutive", aka: "Non-constitutive Russellian monism", desc: "Consciousness is the intrinsic nature of the physical, but macroexperience is not grounded in microexperience.", color: "#2D6B4F" };
  else if (answers.russellian === "russellian") base = { id: "type-f-russ", name: "Type-F Monism", aka: "Russellian monism, Russellian panpsychism, panprotopsychism, neutral monism", desc: "Consciousness is the intrinsic nature of physical reality. The structural facts constrain but do not logically fix the phenomenal character — this underdetermination is what makes the position genuinely distinct from physicalism. The combination problem is the central open question. Note: this underdetermination entails that the specific qualitative character of experience is causally inert — it is not the painfulness of pain that causes pain-behavior, but the structural-dispositional profile, which is invariant across quiddistic swaps.", color: "#2D6B4F" };
  else base = { id: "undetermined", name: "Position Unclear", desc: "Your answers do not map to a single position in the taxonomy — the decision tree has boundary regions where positions blur.", color: "#888" };

  // Append functionalism qualifier
  const isTypeF = base.id && base.id.startsWith("type-f");
  if (answers.functionalism === "functionalist") {
    if (isTypeF) {
      base.desc += "\n\n⚠ TENSION: You hold that functional organization suffices for consciousness (functionalism), but also that consciousness depends on the intrinsic quiddistic character of the substrate (Russellian monism). These are in direct conflict. If quiddities matter for phenomenal character independently of functional role, then two systems with the same functional organization but different quiddities could differ in experience — which functionalism denies. The only escape is to hold that functional organization fixes quiddistic character, but this collapses the structural/intrinsic distinction and returns you to physicalism.";
    } else {
      base.desc += "\n\nYou hold that functional organization suffices for consciousness. A system that duplicates your functional organization — regardless of substrate — has the same conscious experience.";
    }
    base.functionalist = true;
  } else if (answers.functionalism === "substrate") {
    base.desc += "\n\nYou hold that substrate matters for consciousness. Functional organization alone does not suffice — the specific physical makeup contributes to determining conscious experience.";
    if (isTypeF) {
      base.desc += " This is the natural pairing with Russellian monism: if consciousness depends on the intrinsic nature of the substrate, then changing the substrate (different quiddities) can change the experience even when functional organization is preserved.";
    }
    base.functionalist = false;
  }

  return base;
}

// ─────────────────────────────────────────────
// Decision tree (filesystem style)
// ─────────────────────────────────────────────

const TREE_NODES = [
  { id: "epistemic", label: "Epistemic gap?", depth: 0, parent: null },
  { id: "type-a", label: "Type A", depth: 1, parent: "epistemic", terminal: true, color: "#5C3D1E" },
  { id: "ontological", label: "Ontological gap?", depth: 1, parent: "epistemic" },
  { id: "type-b", label: "Type B", depth: 2, parent: "ontological", terminal: true, color: "#1B4D8A" },
  { id: "closure", label: "Causal closure?", depth: 2, parent: "ontological" },
  { id: "type-d", label: "Type D", depth: 3, parent: "closure", terminal: true, color: "#8B2252" },
  { id: "russellian", label: "Intrinsic nature?", depth: 3, parent: "closure" },
  { id: "causation", label: "Mental causation?", depth: 4, parent: "russellian" },
  { id: "type-e", label: "Type E", depth: 5, parent: "causation", terminal: true, color: "#6B3FA0" },
  { id: "type-o", label: "Type O", depth: 5, parent: "causation", terminal: true, color: "#8A6E24" },
  { id: "underdetermination", label: "Structure fixes intrinsics?", depth: 4, parent: "russellian" },
  { id: "struct-reroute", label: "→ reconcile (reroute)", depth: 5, parent: "underdetermination", terminal: true, color: "#3A3A3A" },
  { id: "constitutive", label: "Constitutive?", depth: 5, parent: "underdetermination" },
  { id: "grounding", label: "Grounding transparent?", depth: 6, parent: "constitutive" },
  { id: "type-f-a", label: "Type F (transparent)", depth: 7, parent: "grounding", terminal: true, color: "#2D6B4F" },
  { id: "type-f-b", label: "Type F (opaque)", depth: 7, parent: "grounding", terminal: true, color: "#6B5A10" },
  { id: "nonconst", label: "Emergence or priority?", depth: 6, parent: "constitutive" },
  { id: "type-f-emerg", label: "Type F (emergent)", depth: 7, parent: "nonconst", terminal: true, color: "#2D6B4F" },
  { id: "type-f-top", label: "Type F (priority)", depth: 7, parent: "nonconst", terminal: true, color: "#4A5B3A" },
  { id: "func-sep", label: "───", depth: 0, parent: null, separator: true },
  { id: "functionalism", label: "Functionalism?", depth: 0, parent: null },
  { id: "func-yes", label: "Substrate-independent", depth: 1, parent: "functionalism", terminal: true, color: "#3B6B5A" },
  { id: "func-no", label: "Substrate-dependent", depth: 1, parent: "functionalism", terminal: true, color: "#6B4A3B" },
];

function DecisionTree({ answers }) {
  const pos = getPosition(answers);
  const activeIds = new Set(["epistemic"]);
  const noGap = answers.mary === "no_gap" && answers.zombies === "no_gap";
  const hasGap = answers.mary === "gap" || answers.zombies === "gap";
  if (noGap) activeIds.add("type-a");
  // Mary=gap + zombies=no_gap → Type-B directly (no ontological page needed)
  if (answers.mary === "gap" && answers.zombies === "no_gap") activeIds.add("type-b");
  // Zombies conceivable → need ontological question to distinguish Type-B from dualism
  if (answers.zombies === "gap") {
    activeIds.add("ontological");
    if (answers.ontological === "no_ont_gap") activeIds.add("type-b");
    if (answers.ontological === "ont_gap") {
      activeIds.add("closure");
      if (answers.closure === "open") {
        activeIds.add("type-d");
      }
      if (answers.closure === "closed") {
        activeIds.add("russellian");
        if (answers.russellian === "dualist") {
          activeIds.add("causation");
          if (answers.causation === "inert") activeIds.add("type-e");
          if (answers.causation === "overdetermination") activeIds.add("type-o");
        }
        if (answers.russellian === "russellian") {
          activeIds.add("underdetermination");
          if (answers.underdetermination === "structure_fixes") {
            activeIds.add("struct-reroute");
          }
          if (answers.underdetermination === "underdetermines") {
            activeIds.add("constitutive");
          }
          if (answers.constitutive === "constitutive") {
            activeIds.add("grounding");
            if (answers.grounding_type === "transparent") activeIds.add("type-f-a");
            if (answers.grounding_type === "opaque") activeIds.add("type-f-b");
          }
          if (answers.constitutive === "non_constitutive") {
            activeIds.add("nonconst");
            if (answers.nonconst_type === "emergent") activeIds.add("type-f-emerg");
            if (answers.nonconst_type === "top_down") activeIds.add("type-f-top");
          }
        }
      }
    }
  }

  // Functionalism (cross-cutting)
  if (answers.functionalism) {
    activeIds.add("functionalism");
    if (answers.functionalism === "functionalist") activeIds.add("func-yes");
    if (answers.functionalism === "substrate") activeIds.add("func-no");
  }

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, lineHeight: 1.8 }}>
      {TREE_NODES.map(node => {
        if (node.separator) return <div key={node.id} style={{ height: 8 }} />;
        const isActive = activeIds.has(node.id);
        const isResult = node.terminal && isActive && (
          pos.id?.includes(node.id.replace("type-", "").split("-")[0]) ||
          (node.id === "func-yes" && pos.functionalist === true) ||
          (node.id === "func-no" && pos.functionalist === false)
        );
        const siblings = TREE_NODES.filter(n => n.parent === node.parent);
        const isLast = siblings[siblings.length - 1]?.id === node.id;
        const connector = node.depth === 0 ? "" : (isLast ? "└ " : "├ ");
        return (
          <div key={node.id} style={{ paddingLeft: node.depth * 12, opacity: isActive ? 1 : 0.55, transition: "opacity 0.4s" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: isActive ? "#8A7E72" : "#C4BCAF" }}>{connector}</span>
            {node.terminal ? (
              <span style={{
                fontWeight: isActive ? 700 : 500,
                color: isResult ? "#fff" : (isActive ? (node.color || "#2D2A26") : "#6B6460"),
                background: isResult ? (node.color || "#5B3A29") : "transparent",
                padding: isResult ? "2px 8px" : 0, borderRadius: 3,
                borderBottom: node.unstable ? `1px dashed ${isActive ? node.color : "#aaa"}` : "none"
              }}>{node.label}</span>
            ) : (
              <span style={{ fontWeight: isActive ? 600 : 500, fontStyle: "italic", color: isActive ? "#2D2A26" : "#6B6460" }}>{node.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// Expandable deep-dive component
// ─────────────────────────────────────────────

function DeepDive({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: "1px solid #EDEAE6" }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: "100%", background: "none", border: "none", cursor: "pointer",
        padding: "10px 0", display: "flex", alignItems: "baseline", gap: 6, textAlign: "left"
      }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#8A7E72", flexShrink: 0 }}>
          {open ? "▾" : "▸"}
        </span>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 600, color: "#2D2A26", lineHeight: 1.3
        }}>{item.title}</span>
      </button>
      {open && (
        <div style={{ padding: "0 0 14px 15px" }}>
          <div style={{
            fontFamily: "'Source Serif 4', serif", fontSize: 13, lineHeight: 1.75,
            color: "#3d3833", whiteSpace: "pre-line", marginBottom: 10
          }}>{renderMd(item.content)}</div>
          <div style={{
            fontFamily: "'Source Serif 4', serif", fontSize: 11, color: "#8A7E72",
            fontStyle: "italic", lineHeight: 1.45, borderLeft: "2px solid #EDEAE6", paddingLeft: 10
          }}>{item.cite}</div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Step page
// ─────────────────────────────────────────────

function StepPage({ step, answer, onAnswer, onNext, onBack, stepIndex, totalSteps, answers }) {
  const [selected, setSelected] = useState(answer || null);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setSelected(answer || null); }, [answer]);
  useEffect(() => {
    setVisible(false);
    window.scrollTo(0, 0);
    const t = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(t);
  }, [step.id]);

  const handleSelect = (value) => { setSelected(value); onAnswer(step.id, value); };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "40px 24px", position: "relative", overflow: "hidden",
      opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(8px)",
      transition: "opacity 0.5s ease, transform 0.5s ease"
    }}>
      <GradientOrbs />
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 2, background: "#EDEAE6" }}>
        <div style={{ height: "100%", background: "#5B3A29", width: `${((stepIndex + 1) / totalSteps) * 100}%`, transition: "width 0.4s ease" }} />
      </div>

      <div className="quiz-layout" style={{ maxWidth: 1100, width: "100%", margin: "0 auto", display: "flex", gap: 48, alignItems: "flex-start" }}>
        <div style={{ flex: 1, maxWidth: 620 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.25em",
            textTransform: "uppercase", color: "#B0A89C", marginBottom: 20, fontWeight: 500
          }}>Question {stepIndex + 1} of {totalSteps}</div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 700,
            color: "#1a1816", margin: "0 0 28px 0", lineHeight: 1.12, letterSpacing: "-0.02em"
          }}>{step.title}</h1>

          <div style={{
            fontFamily: "'Source Serif 4', serif", fontSize: 17, lineHeight: 1.85,
            color: "#3d3833", marginBottom: 36, whiteSpace: "pre-line"
          }}>{renderMd(step.setup)}</div>

          <div style={{ width: 40, height: 2, background: "#D4C9BC", marginBottom: 28 }} />

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700,
            color: "#1a1816", margin: "0 0 6px 0", lineHeight: 1.25
          }}>{step.question}</h2>
          <p style={{
            fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#8A7E72",
            margin: "0 0 24px 0", fontStyle: "italic", lineHeight: 1.5
          }}>{step.subtitle}</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {step.options.map((opt) => {
              const isSel = selected === opt.value;
              return (
                <button key={opt.value} onClick={() => handleSelect(opt.value)} style={{
                  background: isSel ? "#2D2A26" : "#fff",
                  color: isSel ? "#fff" : "#1a1816",
                  border: isSel ? "2px solid #2D2A26" : "1px solid #ddd8d2",
                  borderRadius: 6, padding: "18px 22px", cursor: "pointer",
                  textAlign: "left", transition: "all 0.2s ease"
                }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 700,
                    marginBottom: 4, lineHeight: 1.3
                  }}>{renderMd(opt.label)}</div>
                  <div style={{
                    fontFamily: "'Source Serif 4', serif", fontSize: 13.5, lineHeight: 1.55,
                    color: isSel ? "rgba(255,255,255,0.8)" : "#8A7E72"
                  }}>{renderMd(opt.desc)}</div>
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {stepIndex > 0 && (
              <button onClick={onBack} style={{
                background: "none", border: "1px solid #ddd8d2", borderRadius: 6,
                padding: "11px 24px", cursor: "pointer",
                fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 600,
                color: "#8A7E72"
              }}>Back</button>
            )}
            <button onClick={onNext} disabled={!selected} style={{
              background: selected ? "#1a1816" : "#E8E2DA",
              border: "none", borderRadius: 6, padding: "11px 32px",
              cursor: selected ? "pointer" : "default",
              fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 700,
              color: selected ? "#F8F6F3" : "#B0A89C",
              opacity: selected ? 1 : 0.5, flex: 1
            }}>Continue →</button>
          </div>
        </div>

        {/* Sidebar: decision tree + deep dives */}
        <div className="quiz-sidebar" style={{ width: 280, flexShrink: 0, position: "sticky", top: 40, alignSelf: "flex-start", paddingTop: 40 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#8A7E72", marginBottom: 10
          }}>Decision tree</div>
          <DecisionTree answers={answers} />

          {step.deepDives && step.deepDives.length > 0 && (
            <div style={{ marginTop: 32 }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#8A7E72", marginBottom: 8
              }}>Go deeper</div>
              {step.deepDives.map((dd, i) => <DeepDive key={i} item={dd} />)}
              <div style={{ borderTop: "1px solid #EDEAE6" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Result page
// ─────────────────────────────────────────────

function ResultPage({ answers, onRestart }) {
  const pos = getPosition(answers);
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 40); return () => clearTimeout(t); }, []);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", padding: "80px 24px",
      opacity: visible ? 1 : 0, transition: "opacity 0.6s ease"
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.25em",
        textTransform: "uppercase", color: pos.color, marginBottom: 20, fontWeight: 500
      }}>Your position</div>

      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 700,
        color: "#1a1816", margin: "0 0 12px 0", textAlign: "center", lineHeight: 1.1
      }}>{pos.name}</h1>

      {pos.aka && (
        <div style={{ textAlign: "center", marginBottom: 12, maxWidth: 520 }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#B0A89C"
          }}>Also known as</span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
            {pos.aka.split(", ").map((term, i) => (
              <span key={i} style={{
                fontFamily: "'Source Serif 4', serif", fontSize: 12.5, color: "#4A4540",
                padding: "3px 12px", background: "#F0EEEB", borderRadius: 12,
                textTransform: "capitalize"
              }}>{term}</span>
            ))}
          </div>
        </div>
      )}

      {pos.unstable && (
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#B08D57",
          letterSpacing: "0.1em", marginBottom: 8
        }}>This position may be unstable</div>
      )}

      <p style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 17, lineHeight: 1.85,
        color: "#3d3833", maxWidth: 520, textAlign: "center", margin: "20px 0 48px"
      }}>{renderMd(pos.desc)}</p>

      <div className="result-cols" style={{ display: "flex", gap: 60, alignItems: "flex-start", maxWidth: 800, width: "100%" }}>
        <div style={{ width: 240, flexShrink: 0 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B0A89C", marginBottom: 10 }}>Your path</div>
          <DecisionTree answers={answers} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B0A89C", marginBottom: 10 }}>Your answers</div>
          {STEPS.filter(s => !s.condition || s.condition(answers)).map(s => {
            const a = answers[s.id];
            const opt = s.options.find(o => o.value === a);
            return (
              <div key={s.id} style={{ padding: "10px 0", borderBottom: "1px solid #EDEAE6", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
                <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#3d3833" }}>{s.question}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: pos.color, fontWeight: 600, flexShrink: 0 }}>{opt?.short || "—"}</span>
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={onRestart} style={{
        background: "none", border: "1px solid #ddd8d2", borderRadius: 6,
        padding: "12px 32px", cursor: "pointer", marginTop: 48,
        fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 700, color: "#5B3A29"
      }}>Start over</button>

      <div style={{
        marginTop: 40, fontFamily: "'Source Serif 4', serif", fontSize: 12,
        color: "#B0A89C", fontStyle: "italic", textAlign: "center", maxWidth: 380, lineHeight: 1.5
      }}>
        Based on David Chalmers' taxonomy from "Consciousness and its Place in Nature" (2003)
        and "The Combination Problem for Panpsychism" (2016).
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Intro
// ─────────────────────────────────────────────

function GradientOrbs() {
  return (
    <>
      <style>{`
        @keyframes orbDrift1 {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(8%, 12%) scale(1.05); }
          66%  { transform: translate(-5%, 6%) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes orbDrift2 {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(-10%, -8%) scale(1.08); }
          66%  { transform: translate(6%, -4%) scale(0.97); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes orbDrift3 {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(12%, -6%) scale(0.93); }
          66%  { transform: translate(-8%, 10%) scale(1.06); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
      <div style={{
        position: "absolute", top: "-30%", left: "-15%", width: "70%", height: "70%",
        background: "radial-gradient(ellipse at center, rgba(91,58,41,0.16) 0%, rgba(91,58,41,0.056) 40%, transparent 70%)",
        pointerEvents: "none", filter: "blur(40px)",
        animation: "orbDrift1 20s ease-in-out infinite"
      }} />
      <div style={{
        position: "absolute", bottom: "-25%", right: "-15%", width: "65%", height: "65%",
        background: "radial-gradient(ellipse at center, rgba(27,58,107,0.128) 0%, rgba(27,58,107,0.04) 40%, transparent 70%)",
        pointerEvents: "none", filter: "blur(40px)",
        animation: "orbDrift2 25s ease-in-out infinite"
      }} />
      <div style={{
        position: "absolute", top: "20%", right: "10%", width: "50%", height: "50%",
        background: "radial-gradient(ellipse at center, rgba(91,74,0,0.112) 0%, rgba(91,74,0,0.032) 40%, transparent 65%)",
        pointerEvents: "none", filter: "blur(30px)",
        animation: "orbDrift3 18s ease-in-out infinite"
      }} />
    </>
  );
}

function IntroPage({ onStart }) {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", padding: "60px 24px",
      position: "relative", overflow: "hidden"
    }}>
      <GradientOrbs />

      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500,
        letterSpacing: "0.25em", textTransform: "uppercase", color: "#8A7E72",
        marginBottom: 32, position: "relative"
      }}>Possible Minds</div>

      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 64, fontWeight: 700,
        color: "#1a1816", margin: "0 0 20px 0", textAlign: "center", lineHeight: 1.08,
        letterSpacing: "-0.025em", maxWidth: 600, position: "relative"
      }}>What do you believe about consciousness?</h1>

      <div style={{
        width: 60, height: 2, margin: "28px 0",
        background: "linear-gradient(90deg, #5B3A29, #1B4D8A, #2D6B4F)",
        borderRadius: 1, position: "relative"
      }} />

      <p style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 18, lineHeight: 1.85,
        color: "#4A4540", maxWidth: 480, textAlign: "center", margin: "0 0 48px",
        position: "relative"
      }}>
        A series of thought experiments — each a branching point in the topology of positions on the mind-body problem. Your answers trace a path through the decision tree.
      </p>

      <button onClick={onStart} style={{
        background: "linear-gradient(135deg, #1a1816, #2D2A26)",
        border: "none", borderRadius: 8,
        padding: "16px 52px", cursor: "pointer",
        fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 700,
        color: "#F8F6F3", letterSpacing: "0.04em",
        boxShadow: "0 4px 24px rgba(26,24,22,0.15)",
        transition: "transform 0.15s, box-shadow 0.15s",
        position: "relative"
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 32px rgba(26,24,22,0.2)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(26,24,22,0.15)"; }}
      >Begin</button>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────

export default function ConsciousnessQuiz() {
  const [phase, setPhase] = useState("intro");
  const [answers, setAnswers] = useState({});
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const visibleSteps = STEPS.filter(s => !s.condition || s.condition(answers));
  const currentStep = visibleSteps[currentStepIdx];

  const handleAnswer = useCallback((stepId, value) => { setAnswers(prev => ({ ...prev, [stepId]: value })); }, []);

  const handleNext = useCallback(() => {
    // "Structure fixes intrinsics" contradicts their earlier "necessitation fails" answer.
    // Reroute them back to the necessitation question to reconcile.
    if (currentStep && currentStep.id === "underdetermination" && answers.underdetermination === "structure_fixes") {
      // Clear the ontological answer and everything downstream so they re-decide
      setAnswers(prev => {
        const next = { ...prev };
        delete next.ontological;
        delete next.closure;
        delete next.causation;
        delete next.russellian;
        delete next.underdetermination;
        delete next.constitutive;
        delete next.grounding_type;
        delete next.nonconst_type;
        return next;
      });
      // Jump to the ontological step
      const newVisible = STEPS.filter(s => !s.condition || s.condition({ ...answers, ontological: undefined, closure: undefined, causation: undefined, russellian: undefined, underdetermination: undefined }));
      const ontIdx = newVisible.findIndex(s => s.id === "ontological");
      if (ontIdx >= 0) setCurrentStepIdx(ontIdx);
      return;
    }
    const newVisible = STEPS.filter(s => !s.condition || s.condition(answers));
    if (currentStepIdx < newVisible.length - 1) setCurrentStepIdx(currentStepIdx + 1);
    else setPhase("result");
  }, [answers, currentStepIdx, currentStep]);

  const handleBack = useCallback(() => { if (currentStepIdx > 0) setCurrentStepIdx(currentStepIdx - 1); }, [currentStepIdx]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        if (phase === "intro") setPhase("quiz");
        else if (phase === "quiz" && currentStep && answers[currentStep.id]) handleNext();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        if (phase === "quiz" && currentStepIdx > 0) handleBack();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [phase, currentStepIdx, answers, currentStep, handleNext, handleBack]);

  return (
    <div style={{ minHeight: "100vh", color: "#1a1816" }}>
      {phase === "intro" && <IntroPage onStart={() => setPhase("quiz")} />}
      {phase === "quiz" && currentStep && (
        <StepPage key={currentStep.id} step={currentStep} answer={answers[currentStep.id]}
          onAnswer={handleAnswer} onNext={handleNext} onBack={handleBack}
          stepIndex={currentStepIdx} totalSteps={visibleSteps.length} answers={answers} />
      )}
      {phase === "result" && <ResultPage answers={answers} onRestart={() => { setPhase("intro"); setAnswers({}); setCurrentStepIdx(0); }} />}
    </div>
  );
}
