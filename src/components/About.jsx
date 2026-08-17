import Tools from '@/components/Tools';
import Certifications from '@/components/Certifications';

const capabilities = [
  ['Product & UI/UX', 'Product thinking · User research · Requirement analysis · Information architecture · User flow · Wireframing · Prototyping · Interaction and UI design'],
  ['Data & Analytics', 'Data analysis · Data visualization · Data modeling · SQL · Dashboard design'],
  ['Intelligent Systems', 'Artificial intelligence · Deep learning · Computer vision · Person re-identification'],
  ['Software / Technical', 'Web development · Semantic web · Software engineering fundamentals'],
];

const coreValues = [
  ['Understand before building', 'I start with the people, context, and actual problem before deciding what to design or build.'],
  ['Think with evidence', 'Research, data, testing, and evaluation help me question assumptions and make clearer decisions.'],
  ['Connect different perspectives', 'I work across product, design, data, software, and intelligent systems to see how a solution fits together.'],
];

const About = () => (
  <section id="about" className="about-section" aria-labelledby="about-title">
    <div className="about-main">
      <div className="about-copy reveal">
        <h2 id="about-title">About</h2>
        <p>
          I’m a recent Computer Science graduate from Universitas Padjadjaran with experience across UI/UX, product-oriented work, software engineering, data analytics, and computer vision.
        </p>
        <p>
          I like understanding the people, context, and requirements behind a problem before moving into analysis, design, technical implementation, and evaluation. Working across those layers helps me turn complex problems into solutions that are both useful and understandable.
        </p>
      </div>
      <div className="education-block reveal" style={{ '--reveal-delay': '90ms' }}>
        <div><p>Education</p><h3>Universitas Padjadjaran</h3></div>
        <div><p>Program</p><strong>Informatics / Computer Science</strong></div>
        <div><p>Period</p><strong>August 2022 — August 2026</strong></div>
        <div><p>Result</p><strong>GPA 3.58 / 4.00 · Cum Laude</strong></div>
      </div>
    </div>

    <div className="about-subheading reveal"><h3>Capabilities</h3><p>A multidisciplinary toolkit connected by structured problem solving.</p></div>
    <div className="capability-grid" aria-label="Hard capabilities">
      {capabilities.map(([title, detail], index) => (
        <div className="capability-item reveal" style={{ '--reveal-delay': `${index * 55}ms` }} key={title}>
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>
      ))}
    </div>
    <div className="core-values" aria-labelledby="core-values-title">
      <div className="core-values-heading reveal">
        <h3 id="core-values-title">Core values</h3>
        <p>Three principles that shape how I approach unfamiliar and complex work.</p>
      </div>
      <div className="core-values-grid">
        {coreValues.map(([title, detail], index) => (
          <article className="core-value reveal" style={{ '--reveal-delay': `${index * 55}ms` }} key={title}>
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h4>{title}</h4>
            <p>{detail}</p>
          </article>
        ))}
      </div>
    </div>
    <Tools />
    <Certifications />
  </section>
);

export default About;
