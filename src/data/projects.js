export const projects = {
  dataAnalytics: [
    {
      id: 'adidas-data-warehouse',
      title: 'Adidas Data Warehouse',
      description: 'Built a comprehensive data warehouse using Kimball Methodology for Adidas sales data analysis. Implemented ETL processes and created interactive dashboards for business intelligence.',
      technologies: ['SQL', 'Power BI', 'Data Modeling','Visual Studio', 'ETL'],
      githubUrl: 'https://github.com/rafaagustant/adidas-data-warehouse',
      category: 'Data Analytics',
      icon: '📊'
    },
    {
      id: 'reporting-engineer-rakamin',
      title: 'Reporting Engineer Rakamin',
      description: 'Developed automated reporting solutions and data pipelines for Rakamin Project Based Internship at Jubelio. Created comprehensive dashboards and KPI tracking systems.',
      technologies: ['SQL', 'Excel'],
      githubUrl: 'https://github.com/rafaagustant/ReportingEngineerRakamin',
      category: 'Data Analytics',
      icon: '📈'
    }
  ],
  uiuxDesign: [
    {
      id: 'tedx-website',
      title: 'TEDxPadjadjaranUniversity Website',
      description: 'Designed and prototyped 9 user-friendly web pages for TEDxPadjadjaranUniversity by collaborating with cross-functional teams and applying user research insights.',
      technologies: ['Figma', 'User Research', 'Prototyping', 'UI/UX Design'],
      githubUrl : 'https://www.figma.com/proto/ma4xdNtbYhDlCVMP4NNOGV/tedX?page-id=156%3A121&node-id=466-74&viewport=-1248%2C489%2C0.03&t=NiNTUWlRGZvlqIbN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=466%3A74&show-proto-sidebar=1',
      category: 'UI/UX Design',
      icon: '🎨'
    },
    {
      id: 'becycle App',
      title: 'BeCycle Mobile App',
      description: 'Designed and prototyped a user-friendly app for Software Project course in Universitas Padjadjaran',
      technologies: ['Figma', 'User Research', 'Prototyping', 'UI/UX Design'],
      githubUrl : 'https://www.figma.com/proto/Pco9LpPtWsJ7xyBEcCv2h2/BeCycle?page-id=&node-id=39-192&p=f&viewport=278%2C287%2C0.1&t=APxASfPPt0MCp9y3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=138%3A669&show-proto-sidebar=1',
      category: 'UI/UX Design',
      icon: '🎨'
    },
    {
      id: 'Nutrikidz Web',
      title: 'Nutrikidz Web',
      description: 'Designed and prototyped a user-friendly web for Software Development course in Universitas Padjadjaran',
      technologies: ['Figma', 'User Research', 'Prototyping', 'UI/UX Design'],
      githubUrl : 'https://www.figma.com/proto/nUTCDbkLXi7BfKUAAtlASX/NutriKidz?page-id=0%3A1&node-id=4-175&viewport=229%2C465%2C0.22&t=BV2uhg5OU4TQPNg3-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1',
      category: 'UI/UX Design',
      icon: '🎨'
    }

    
  ],
  developer: [
    // These will be populated from GitHub API or manually added
    {
      id: 'land-cover-analysis for Data Mining Course at Universitas Padjadjaran',
      title: 'Land Cover Analysis using K-Means',
      description: 'This application implements K-Means Clustering for land cover image analysis. It is designed to visualize the clustering results of aerial images and evaluate them using the Silhouette Coefficient.',
      technologies: ['Jupyter', 'Streamlit'],
      githubUrl: 'https://github.com/nefritmahardika/land-cover-analysis-kmeans',
      category: 'College Projects',
      icon: '💻'
    },
    {
      id: 'image-neural-transfer for Artificial Intelligence Course at Universitas Padjadjaran',
      title: 'Image Neural Transfer',
      description: 'project that applies the principles of neural style transfer to blend the style of one image with the content of another. This technique leverages deep learning, particularly convolutional neural networks (CNNs), to create visually stunning artworks by combining the artistic style of one image (style image) with the content of another image (content image).',
      technologies: ['Jupyter'],
      githubUrl: 'https://github.com/nefritmahardika/image-neural-transfer',
      category: 'College Projects',
      icon: '💻'
    },
    {
      id: 'kopiin',
      title: 'Kopi.in Website for Database System Course at Universitas Padjadjaran',
      description: 'An e-commerce platform specializing in premium coffee beans source from Indonesia’s finest plantations.',
      technologies: ['PHP'],
      githubUrl: 'https://github.com/nefritmahardika/project-uas-sisdat-kopiin',
      category: 'College Projects',
      icon: '💻'
    }


  ]
};

// Add new project function for easy updates
export const addProject = (category, project) => {
  if (projects[category]) {
    projects[category].push(project);
  }
};

