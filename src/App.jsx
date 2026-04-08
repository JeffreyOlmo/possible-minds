import { useState } from "react";
import ConsciousnessQuiz from '../consciousness-quiz.jsx';

// ─────────────────────────────────────────────
// Position data for the explorer
// ─────────────────────────────────────────────

const POSITIONS = [
  {
    id: "type-a", name: "Type-A Materialism",
    aka: ["Eliminativism", "Illusionism", "Analytic Functionalism", "Logical Behaviorism", "Deflationism"],
    color: "#4A3728",
    commitments: ["Physical facts necessitate phenomenal facts", "Necessitation knowable a priori", "Phenomenal facts deducible from physical description", "Causal closure"],
    summary: "The physical facts — the structural-relational properties of the world as described by physical law — logically necessitate the phenomenal facts, and this necessitation is knowable a priori. The phenomenal facts are deducible from a complete physical description. There is no epistemic gap. The hard problem dissolves into the easy problems — whether because phenomenal consciousness as naively conceived does not exist (eliminativism/illusionism), or because it is analytically identical to functional organization (analytic functionalism).",
    tensions: [
      "Must hold that the zombie intuition is confused even under ideal rational reflection — that no amount of careful reasoning will sustain the appearance of a gap between structural-relational facts and phenomenal facts. This requires either that the concept of consciousness is functionally analyzable (contested) or that the appearance of a residual explanandum is itself a functional phenomenon to be explained away.",
      "The meta-problem: if there is no hard problem, there must be an explanation of why it seems like there is one. This explanation must be purely functional — but the functional explanation of why people believe in qualia must not itself appeal to qualia. The explanatory circle is tight.",
      "If eliminativism is correct, our introspective reports about phenomenal consciousness are systematically mistaken. But the reliability of those reports is exactly what generates the hard problem. The position must explain how a system can be so wrong about its own states while being right about everything else."
    ],
    keyQuestion: "Is the concept of consciousness analyzable in functional or physical terms?",
    keyTexts: [
      "Dennett, D. (1991). Consciousness Explained.",
      "Frankish, K. (2016). 'Illusionism as a Theory of Consciousness.'",
      "Lewis, D. (1966). 'An Argument for the Identity Theory.'",
      "Ryle, G. (1949). The Concept of Mind."
    ]
  },
  {
    id: "type-b", name: "Type-B Materialism",
    aka: ["A Posteriori Physicalism", "Phenomenal Concept Strategy", "Psychophysical Identity Theory"],
    color: "#1B3A6B",
    commitments: ["Physical facts necessitate phenomenal facts", "Necessitation not knowable a priori", "Phenomenal facts not deducible from physical description", "Causal closure"],
    summary: "The physical facts (structural-relational properties as described by physical law) logically necessitate the phenomenal facts, but this necessitation is not knowable a priori — the phenomenal facts cannot be deduced from the physical description. Mary learns something new upon seeing red, yet there is no possible world with the same physical facts but different phenomenal facts. Consciousness is identical to a physical property; the identity is a posteriori necessary, like water = H₂O. The permanent epistemic gap (failure of deducibility) arises from the unique cognitive character of phenomenal concepts, not from a failure of necessitation.",
    tensions: [
      "Requires 'strong necessities' — a posteriori necessities that hold in all worlds and resist two-dimensional analysis. Unlike water/H₂O (where there is a conceivable XYZ-world that verifies 'water ≠ H₂O' at the primary level), the psychophysical identity must hold even at the primary level. No other a posteriori necessity has this character. The position must either find independent motivation for strong necessities or accept them as a primitive cost of materialism.",
      "The phenomenal concept strategy must explain why phenomenal concepts create an appearance of a gap, without that explanation also working in a world where the gap is real. Any account of why the gap seems to exist must not equally explain away a genuine gap — otherwise it cannot distinguish the actual world from one where dualism is true.",
      "Concedes the full force of the conceivability and knowledge arguments at the epistemic level. The entire weight of the position rests on blocking the inference from epistemic gap to ontological gap — a single inferential step that, if it fails, yields dualism."
    ],
    keyQuestion: "Can a permanent epistemic gap coexist with ontological identity?",
    keyTexts: [
      "Papineau, D. (1993). 'Physicalism, Consciousness and the Antipathetic Fallacy.'",
      "Loar, B. (1997). 'Phenomenal States.'",
      "Block, N. & Stalnaker, R. (1999). 'Conceptual Analysis, Dualism, and the Explanatory Gap.'"
    ]
  },
  {
    id: "type-d", name: "Type-D Dualism",
    aka: ["Interactionism", "Substance Dualism", "Property Dualism with Downward Causation"],
    color: "#6B2D48",
    commitments: ["Physical facts do not necessitate phenomenal facts", "Causal closure fails", "Mental causation (via interaction)"],
    summary: "The physical facts (structural-relational) do not logically necessitate the phenomenal facts. Consciousness is not necessitated by the physical description and causally affects the physical world. The causal structure of physics is not self-contained — consciousness plays an irreducible causal role. This requires revising the scope of physical law, though the quantum measurement problem may already demand this.",
    tensions: [
      "If consciousness causally affects the physical, it must inject something into the physical causal chain — but conservation laws (energy, momentum) appear to leave no room for non-physical contributions. The position must either identify where the physics breaks (quantum indeterminacy is the leading candidate) or argue that conservation laws apply only within a closed physical system, which this view denies the universe is.",
      "The pairing problem: if consciousness is non-spatial, what determines which non-physical mind interacts with which physical body? Physical causation is local — mediated by spatial contact or fields. Non-physical-to-physical causation has no spatial story. The view needs an account of how the pairing is determined.",
      "The scope of revision is open-ended. Denying causal closure is not a local adjustment — it requires that the fundamental dynamical laws of physics are incomplete. The position is committed to there being undiscovered fundamental laws (psychophysical laws) governing the interaction, with no current empirical access to their form."
    ],
    keyQuestion: "Does consciousness break into the physical causal chain?",
    keyTexts: [
      "Descartes, R. (1641). Meditations on First Philosophy.",
      "Popper, K. & Eccles, J. (1977). The Self and Its Brain.",
      "Stapp, H. (1993). Mind, Matter, and Quantum Mechanics.",
      "Lowe, E.J. (2006). 'Non-Cartesian Substance Dualism.'"
    ]
  },
  {
    id: "type-e", name: "Type-E Dualism",
    aka: ["Epiphenomenalism", "Property Epiphenomenalism", "Parallelist Dualism"],
    color: "#4A3B6B",
    commitments: ["Physical facts do not necessitate phenomenal facts", "Causal closure holds", "No mental causation"],
    summary: "The physical facts do not logically necessitate the phenomenal facts. Consciousness is not necessitated by the structural-relational description and is causally inert. Physical states cause conscious states, but conscious states cause nothing. This follows from the conjunction of the failure of necessitation (consciousness is not physical) and causal closure (every physical event has a sufficient physical cause). Your experience of deciding to act plays no role in the action.",
    tensions: [
      "The paradox of phenomenal judgment: your belief that you are conscious is caused entirely by physical processes — the same processes that operate in your zombie twin. The phenomenal experience of consciousness plays no role in producing the belief. Your beliefs about your own consciousness are not caused by your consciousness. This does not strictly entail that the beliefs are unjustified, but the justificatory story becomes strained.",
      "Natural selection cannot select for consciousness per se, because consciousness has no causal effects. The existence of consciousness must be a byproduct of selection for physical/functional traits. But then the correlation between functional complexity and consciousness is a brute nomic fact — there is no adaptive explanation for why consciousness tracks the physical structures it does.",
      "The causal asymmetry is unexplained: physical states cause phenomenal states but not vice versa. Fundamental psychophysical laws run in one direction only. There is no deeper account of why causation goes this way — it is a brute feature of the fundamental laws."
    ],
    keyQuestion: "If consciousness is non-physical and physics is closed, what causal work can consciousness do?",
    keyTexts: [
      "Jackson, F. (1982). 'Epiphenomenal Qualia.'",
      "Huxley, T. (1874). 'On the Hypothesis That Animals Are Automata.'",
      "Campbell, K. (1970). Body and Mind."
    ]
  },
  {
    id: "type-o", name: "Type-O Dualism",
    aka: ["Causal Overdetermination", "Dual-Causation Dualism"],
    color: "#6B5B2D",
    commitments: ["Physical facts do not necessitate phenomenal facts", "Causal closure holds", "Mental causation (via overdetermination)"],
    summary: "The physical facts do not logically necessitate the phenomenal facts. Consciousness is not necessitated by the structural-relational description but is causally efficacious. Every physical effect of consciousness also has a sufficient physical cause — every conscious action is caused twice over, once by physics and once by consciousness. Causal closure is preserved because the physical cause is always sufficient on its own.",
    tensions: [
      "Systematic overdetermination: every single conscious action — every arm raised, every word spoken — has two independently sufficient causes. Occasional overdetermination is unproblematic (two rocks break a window). But universal overdetermination, where every instance of mental causation involves double causation, requires that two entirely independent causal chains (physical and phenomenal) converge on exactly the same effect in every case. The correlation between these chains is a brute nomic fact.",
      "The physical cause is by stipulation sufficient on its own. The phenomenal cause adds nothing that the physical cause does not already provide. In what sense, then, is consciousness doing causal work? The difference between type-O and type-E is that in type-O consciousness is a cause; but it is a redundant cause. The philosophical significance of 'causally efficacious but never necessary' is unclear.",
      "The position inherits all of type-E's problems about the pairing of physical and phenomenal — why does this consciousness attach to this body? — while adding the further requirement that the phenomenal causal chain must perfectly mirror the physical one in every case."
    ],
    keyQuestion: "Is systematic overdetermination a coherent account of mental causation?",
    keyTexts: [
      "Mills, E. (1996). 'Interactionism and Overdetermination.'",
      "Lowe, E.J. (1996). Subjects of Experience."
    ]
  },
  {
    id: "type-f", name: "Type-F Monism",
    aka: ["Russellian Monism", "Panpsychism", "Panprotopsychism", "Neutral Monism"],
    color: "#5B4A00",
    commitments: ["Structural facts do not necessitate phenomenal facts", "Structure underdetermines intrinsic natures", "Causal closure holds", "Qualitative character causally inert"],
    summary: "Consciousness is the intrinsic nature of physical reality. Physics describes the world entirely in structural-relational terms — what things do, not what they are. What fills in the structure from the inside is phenomenal or protophenomenal. Crucially, the structural facts underdetermine the intrinsic natures: the relational web constrains the quiddities but does not logically fix which specific phenomenal character fills the structural roles. This underdetermination is what makes the position genuinely distinct from physicalism — if structure fixed the intrinsics, the distinction would collapse. But this underdetermination has a causal cost: since the structural description is causally complete, and qualitative character is underdetermined by structure, the specific character of experience makes no difference to any causal outcome. It is not the painfulness of pain that causes you to say 'that hurts' — it is the structural-dispositional profile, invariant across quiddistic swaps.",
    tensions: [
      "The combination problem: if fundamental entities have micro-phenomenal properties, how do ~10²⁷ micro-experiences compose into one unified macro-experience? The existence of micro-subjects does not logically entail a macro-subject. One can conceive of 'micro-experiential zombies' — systems whose parts are each conscious but which lack unified macro-consciousness. This is structurally parallel to the hard problem itself, relocated from physics→consciousness to micro-consciousness→macro-consciousness.",
      "The causal inertness of qualitative character: the underdetermination that makes Type-F a distinct position is the same underdetermination that makes the specific phenomenal character causally idle. A being with identical structure but different quiddities would produce identical behavior — the same reports about its experiences, the same philosophy papers about qualia. Type-F can say consciousness is 'causally efficacious' in the thin sense of being identical to the causally active stuff, but the qualitative character is as causally inert as under epiphenomenalism. Your utterances about the character of your experience are not caused by that character.",
      "Functionalism is incompatible with Russellian monism. If consciousness depends on intrinsic quiddistic character (not just functional role), then a silicon functional duplicate — same causal structure, different substrate — has different quiddities and therefore different (or absent) experience. This makes consciousness substrate-dependent, contra functionalism. The only escape — holding that functional organization fixes which quiddities are present — collapses the structural/intrinsic distinction and returns to physicalism.",
      "If structure logically fixed the intrinsic natures, the 'intrinsic nature' would be implicit in the structural description and the position would collapse into type-B physicalism. The position is only genuinely distinct from physicalism if the structural facts underdetermine the quiddistic character — but this is exactly the feature that makes qualitative character causally idle."
    ],
    keyQuestion: "Is consciousness what physics describes from the outside?",
    keyTexts: [
      "Russell, B. (1927). The Analysis of Matter.",
      "Strawson, G. (2006). 'Realistic Monism.'",
      "Chalmers, D. (2015). 'Panpsychism and Panprotopsychism.'",
      "Chalmers, D. (2016). 'The Combination Problem for Panpsychism.'",
      "Goff, P. (2017). Consciousness and Fundamental Reality."
    ],
    subtypes: [
      { name: "Constitutive (Transparent)", desc: "Macroexperience is grounded in microexperience, and the grounding is in principle a priori deducible." },
      { name: "Constitutive (Opaque)", desc: "Macroexperience is grounded in microexperience, but the grounding is a posteriori necessary — the hard problem is relocated, not dissolved." },
      { name: "Non-constitutive Emergent", desc: "Micro-phenomenal properties exist but do not constitute macroexperience. Macro-consciousness strongly emerges via bridging laws." },
      { name: "Priority Monism / Cosmopsychism", desc: "The fundamental conscious subject is the cosmos as a whole. Individual consciousnesses are derived by decomposition, not composition." }
    ]
  }
];

const ESSAYS = [
  { title: "The Knowledge Argument and its Discontents", tags: ["Mary's Room", "Type-A", "Type-B"], status: "forthcoming" },
  { title: "Why the Vitalism Analogy Fails", tags: ["Hard Problem", "Structural-Dynamical Constraint"], status: "forthcoming" },
  { title: "Two-Dimensional Semantics and the Zombie Argument", tags: ["Conceivability", "Type-B", "Strong Necessities"], status: "forthcoming" },
  { title: "The Russellian Escape", tags: ["Type-F", "Intrinsic Nature", "Combination Problem"], status: "forthcoming" },
  { title: "Can a Subject Be Wrong About Its Own Experience?", tags: ["Dancing Qualia", "Functionalism"], status: "forthcoming" },
  { title: "Consciousness at the Quantum Boundary", tags: ["Causal Closure", "Measurement Problem", "Zeno Effect"], status: "forthcoming" },
];

// ─────────────────────────────────────────────
// Position detail view
// ─────────────────────────────────────────────

function PositionDetail({ position, onBack }) {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "80px 24px 80px" }}>
      <button onClick={onBack} style={{
        background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: 32,
        fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#8A7E72"
      }}>← All positions</button>

      <div style={{ width: 40, height: 3, background: position.color, borderRadius: 2, marginBottom: 20 }} />

      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 700,
        color: "#1a1816", margin: "0 0 12px 0", lineHeight: 1.1
      }}>{position.name}</h1>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
        {position.aka.map((term, i) => (
          <span key={i} style={{
            fontFamily: "'Source Serif 4', serif", fontSize: 12, color: "#4A4540",
            padding: "3px 10px", background: "#F0EEEB", borderRadius: 12
          }}>{term}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
        {position.commitments.map((c, i) => (
          <span key={i} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: position.color,
            padding: "4px 10px", border: `1px solid ${position.color}33`, borderRadius: 4
          }}>{c}</span>
        ))}
      </div>

      <p style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 17, lineHeight: 1.85,
        color: "#3d3833", margin: "0 0 32px 0"
      }}>{position.summary}</p>

      <div style={{
        padding: "20px 24px", background: "#F5F3F0", borderRadius: 6, marginBottom: 32,
        borderLeft: `3px solid ${position.color}`
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.15em",
          textTransform: "uppercase", color: "#8A7E72", marginBottom: 8
        }}>Central question</div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600,
          color: "#1a1816", fontStyle: "italic", lineHeight: 1.4
        }}>{position.keyQuestion}</div>
      </div>

      {position.tensions && (
        <div style={{ marginBottom: 32 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#8A7E72", marginBottom: 12
          }}>Logical tensions</div>
          {position.tensions.map((t, i) => (
            <div key={i} style={{
              padding: "14px 18px", marginBottom: 8,
              background: "#FDFCFA", border: "1px solid #E8E4DF", borderRadius: 4,
              borderLeft: `3px solid ${position.color}44`,
              fontFamily: "'Source Serif 4', serif", fontSize: 14.5, color: "#3d3833", lineHeight: 1.7
            }}>{t}</div>
          ))}
        </div>
      )}

      {position.subtypes && (
        <div style={{ marginBottom: 32 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#8A7E72", marginBottom: 12
          }}>Sub-positions</div>
          {position.subtypes.map((st, i) => (
            <div key={i} style={{ padding: "12px 0", borderTop: "1px solid #EDEAE6" }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 700,
                color: "#1a1816", marginBottom: 4
              }}>{st.name}</div>
              <div style={{
                fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#6B6460", lineHeight: 1.6
              }}>{st.desc}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.15em",
        textTransform: "uppercase", color: "#8A7E72", marginBottom: 12
      }}>Key texts</div>
      {position.keyTexts.map((t, i) => (
        <div key={i} style={{
          fontFamily: "'Source Serif 4', serif", fontSize: 13.5, color: "#6B6460",
          lineHeight: 1.5, padding: "6px 0 6px 14px", borderLeft: `2px solid ${position.color}22`
        }}>{t}</div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Positions explorer
// ─────────────────────────────────────────────

function PositionsExplorer() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = POSITIONS.find(p => p.id === selectedId);

  if (selected) return <PositionDetail position={selected} onBack={() => setSelectedId(null)} />;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 80px" }}>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 700,
        color: "#1a1816", margin: "0 0 12px 0", lineHeight: 1.1
      }}>The Positions</h1>
      <p style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 17, lineHeight: 1.85,
        color: "#4A4540", maxWidth: 560, margin: "0 0 48px 0"
      }}>
        The major positions on the mind-body problem, organized by the logical commitments that distinguish them.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
        {POSITIONS.map(pos => (
          <button key={pos.id} onClick={() => setSelectedId(pos.id)} style={{
            background: "#fff", border: "1px solid #E8E4DF", borderRadius: 8,
            padding: "28px 24px", cursor: "pointer", textAlign: "left",
            borderTop: `3px solid ${pos.color}`, transition: "box-shadow 0.2s, transform 0.15s"
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700,
              color: "#1a1816", marginBottom: 8, lineHeight: 1.2
            }}>{pos.name}</div>
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 12 }}>
              {pos.aka.slice(0, 3).map((term, i) => (
                <span key={i} style={{
                  fontFamily: "'Source Serif 4', serif", fontSize: 11, color: "#6B6460",
                  padding: "2px 8px", background: "#F5F3F0", borderRadius: 10
                }}>{term}</span>
              ))}
            </div>
            <div style={{
              fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#6B6460",
              lineHeight: 1.6
            }}>{pos.summary.slice(0, 140)}...</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Essays section
// ─────────────────────────────────────────────

function EssaysSection() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "80px 24px 80px" }}>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 700,
        color: "#1a1816", margin: "0 0 12px 0", lineHeight: 1.1
      }}>Essays</h1>
      <p style={{
        fontFamily: "'Source Serif 4', serif", fontSize: 17, lineHeight: 1.85,
        color: "#4A4540", maxWidth: 560, margin: "0 0 48px 0"
      }}>
        Explorations of the arguments at each branch point. New pieces added as thinking develops.
      </p>

      {ESSAYS.map((essay, i) => (
        <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid #EDEAE6" }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700,
            color: "#1a1816", marginBottom: 8, lineHeight: 1.25
          }}>{essay.title}</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
            {essay.tags.map((tag, j) => (
              <span key={j} style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                color: "#8A7E72", padding: "3px 8px", background: "#F0EEEB", borderRadius: 3,
                letterSpacing: "0.05em", textTransform: "uppercase"
              }}>{tag}</span>
            ))}
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#B0A89C",
            letterSpacing: "0.1em", textTransform: "uppercase"
          }}>{essay.status}</div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main app with navigation
// ─────────────────────────────────────────────

function App() {
  const [section, setSection] = useState("quiz");

  const navItems = [
    { key: "quiz", label: "Quiz" },
    { key: "positions", label: "Positions" },
    { key: "essays", label: "Essays" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#FAF9F7", color: "#1a1816" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&family=JetBrains+Mono:wght@300;400;500;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #FAF9F7; }
        ::selection { background: #D4C9BC; }
        button:hover { filter: brightness(0.95); }
        button:active { transform: scale(0.99); }
        @media (max-width: 800px) {
          .quiz-layout { flex-direction: column !important; }
          .quiz-sidebar { display: none !important; }
          .result-cols { flex-direction: column !important; }
          .site-header { padding: 0 16px !important; }
        }
      `}</style>

      {/* Header */}
      <nav className="site-header" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 36px", height: 52,
        background: "rgba(250,249,247,0.92)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid #EDEAE6",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <h2
          onClick={() => { setSection("quiz"); window.scrollTo(0, 0); }}
          style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 700,
            color: "#1a1816", margin: 0, cursor: "pointer", letterSpacing: "-0.01em"
          }}
        >Possible Minds</h2>
        <div style={{ display: "flex", gap: 4 }}>
          {navItems.map(item => {
            const active = section === item.key;
            return (
              <button key={item.key} onClick={() => { setSection(item.key); window.scrollTo(0, 0); }} style={{
                background: active ? "#F0EEEB" : "transparent",
                border: "none", borderRadius: 4, padding: "6px 14px", cursor: "pointer",
                fontFamily: "'Cormorant Garamond', serif", fontSize: 14,
                fontWeight: active ? 700 : 500,
                color: active ? "#1a1816" : "#8A7E72",
                transition: "all 0.15s"
              }}>{item.label}</button>
            );
          })}
        </div>
      </nav>

      {/* Content */}
      <div style={{ paddingTop: 52 }}>
        {section === "quiz" && <ConsciousnessQuiz />}
        {section === "positions" && <PositionsExplorer />}
        {section === "essays" && <EssaysSection />}
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #EDEAE6", padding: "32px 36px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 12
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "#B0A89C"
        }}>Possible Minds</div>
        <div style={{
          fontFamily: "'Source Serif 4', serif", fontSize: 11, color: "#B0A89C", fontStyle: "italic"
        }}>Based on David Chalmers' taxonomy from "Consciousness and its Place in Nature" (2003)</div>
      </footer>
    </div>
  );
}

export default App;
