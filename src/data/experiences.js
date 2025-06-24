export const experiences = [
  {
    id: 'ux-designer-tedx',
    title: 'UI/UX Designer',
    company: 'TEDxPadjadjaran',
    period: 'Mar 2025 – Present',
    description: 'Leading UI/UX design initiatives for TEDxPadjadjaran events. Designed ticketing systems, event websites, and promotional materials. Collaborated with development teams to ensure seamless user experiences.',
    skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
    type: 'current'
  },
  {
    id: 'teaching-assistant',
    title: 'Algorithm Teaching Assistant',
    company: 'Universitas Padjadjaran',
    period: 'Feb 2025 – Present',
    description: 'Assisting in Algorithm Analysis courses for Informatics Engineering students. Mentoring students in algorithm design, complexity analysis, and problem-solving techniques.',
    skills: ['Algorithm Design', 'Teaching', 'Problem Solving', 'Mentoring'],
    type: 'past'
  },
  {
    id: 'head-external-relations',
    title: 'Head of External Relations',
    company: 'HIMATIF FMIPA UNPAD',
    period: '2024',
    description: 'Led external relations initiatives for the Informatics Engineering Student Association. Managed partnerships, sponsorships, and collaborative events with industry partners.',
    skills: ['Leadership', 'Partnership Management', 'Event Planning', 'Communication'],
    type: 'past'
  },
   {
    id: 'head-project-supervisor',
    title: 'Head of Project Supervisor',
    company: 'IFest Unpad',
    period: '2024',
    description: 'Supervised and conceptualized the early planning of Informatics Festival UNPAD 2024, then coordinated with the Project Officer to ensure successful execution involving 500+ participants, 20+ sponsors, and 12 speakers.',
    skills: ['Project Control', 'Crew Supervision', 'Project Oversight'],
    type: 'past'
  },
  {
    id: 'staff-External-Relation',
    title: 'Staff of External Relations',
    company: 'BEM FMIPA Unpad',
    period: '2023',
    description: 'Served as PIC and Project Officer for offline Comparative Study and Company Visit events, successfully collaborating with top universities (UNDIP, UNS) and coordinating a company visit to Sido Muncul.',
    skills: ['Team Management', 'Communication', 'Strategic Negotiations'],
    type: 'past'
  }

];

// Add new experience function for easy updates
export const addExperience = (experience) => {
  experiences.unshift(experience); // Add to beginning for chronological order
};

