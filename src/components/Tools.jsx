import { tools } from '@/data/tools';

const ToolGroup = ({ hidden = false }) => (
  <div className="tool-group" aria-hidden={hidden || undefined}>
    {tools.map((tool) => (
      <div className={`tool-item${tool.monochrome ? ' is-monochrome' : ''}`} key={tool.name}>
        <img src={tool.src} alt={hidden ? '' : `${tool.name} logo`} width="34" height="34" />
        <span>{tool.name}</span>
      </div>
    ))}
  </div>
);

const Tools = () => (
  <div className="tools-section" aria-labelledby="tools-title">
    <div className="tools-heading reveal">
      <h2 id="tools-title">Tools &amp; technologies</h2>
      <p>Used across design, analytics, intelligent systems, and academic work.</p>
    </div>
    <div className="tool-marquee reveal" style={{ '--reveal-delay': '80ms' }} role="region" aria-label="Scrollable tools and technologies" tabIndex="0">
      <div className="tool-track">
        <ToolGroup />
        <ToolGroup hidden />
      </div>
    </div>
  </div>
);

export default Tools;
