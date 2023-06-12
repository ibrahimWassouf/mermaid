import type { DiagramDetector, ExternalDiagramDefinition } from '../../diagram-api/types.js';

const id = 'requirement';

const detector: DiagramDetector = (txt) => {
  return /^\s*requirement(Diagram)?/.test(txt);
};

const loader = async () => {
  const { diagram } = await import('./requirementDiagram.js');
  return { id, diagram };
};

const plugin: ExternalDiagramDefinition = {
  id,
  detector,
  loader,
};

export default plugin;
