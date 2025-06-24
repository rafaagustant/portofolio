export const certifications = [
  {
    id: 'itbox-data-analyst',
    title: 'Data Analyst Intermediate',
    issuer: 'ITBOX Academy',
    description: 'Comprehensive data analyst certification focused on SQL, dashboard building, and real-world case studies. Covered data collection, processing, visualization, and business intelligence.',
    skills: ['SQL', 'Data Analysis', 'Dashboard Creation', 'Business Intelligence'],
    year: '2024',
    credentialUrl: 'https://itbox.id/certificate-verifier/13EEAD5D3-759D4170C2-12D361191/' // Add actual URL when available
  },
  {
    id: 'dicoding-data-visualization',
    title: 'Dasar Visualisasi Data',
    issuer: 'Dicoding',
    description: 'Completed Dicoding’s "Belajar Dasar Visualisasi Data" course, designed for beginners to learn industry-standard best practices in data visualization. Gained hands-on experience using Google Sheets to prepare and transform data into clear, impactful visualizations through principles such as Gestalt, preattentive attributes, and effective storytelling with data.',
    skills: ['Data Visualization'],
    year: '2024',
    credentialUrl: 'https://www.dicoding.com/certificates/98XWE9W59XM3' // Add actual URL when available
  },
  {
    id: 'dicoding-web-programming',
    title: 'Dasar Pemrograman Web',
    issuer: 'Dicoding',
    description: 'Completed Dicoding’s "Belajar Dasar Pemrograman Web" course, gaining solid foundational skills in HTML and CSS. Learned to structure web content semantically with HTML and enhance design with CSS techniques including box model, positioning, responsive layout using Flexbox, and media queries. Built a simple yet structured responsive website as the final project.',
    skills: ['HTML','CSS'],
    year: '2024',
    credentialUrl: 'https://www.dicoding.com/certificates/0LZ045YN3P65' // Add actual URL when available
  }
];

// Add new certification function for easy updates
export const addCertification = (certification) => {
  certifications.unshift(certification); // Add to beginning for most recent first
};

