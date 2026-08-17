import figmaIcon from '@/assets/tools/figma.svg';
import pythonIcon from '@/assets/tools/python.svg';
import postgresqlIcon from '@/assets/tools/postgresql.svg';
import powerBiIcon from '@/assets/power-bi.svg';
import pytorchIcon from '@/assets/tools/pytorch.svg';
import opencvIcon from '@/assets/tools/opencv.svg';
import gitIcon from '@/assets/tools/git.svg';
import githubIcon from '@/assets/tools/github.svg';
import streamlitIcon from '@/assets/tools/streamlit.svg';
import reactIcon from '@/assets/tools/react.svg';
import nextIcon from '@/assets/tools/nextdotjs.svg';
import tailwindIcon from '@/assets/tools/tailwindcss.svg';
import microsoftIcon from '@/assets/tools/microsoft.svg';
import googleIcon from '@/assets/tools/google.svg';
import notionIcon from '@/assets/tools/notion.svg';
import trelloIcon from '@/assets/tools/trello.svg';

const monochrome = (name, src) => ({ name, src, monochrome: true });

export const tools = [
  monochrome('Figma', figmaIcon),
  monochrome('Python', pythonIcon),
  monochrome('SQL / PostgreSQL', postgresqlIcon),
  monochrome('Power BI', powerBiIcon),
  monochrome('PyTorch', pytorchIcon),
  monochrome('OpenCV', opencvIcon),
  monochrome('Git', gitIcon),
  monochrome('GitHub', githubIcon),
  monochrome('Streamlit', streamlitIcon),
  monochrome('React', reactIcon),
  monochrome('Next.js', nextIcon),
  monochrome('Tailwind CSS', tailwindIcon),
  monochrome('Microsoft Office', microsoftIcon),
  monochrome('Google Workspace', googleIcon),
  monochrome('Notion', notionIcon),
  monochrome('Trello', trelloIcon),
];
