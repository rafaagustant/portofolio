import tedxThumbnail from'@/assets/tedX.png';
import becycleThumbnail from'@/assets/becycle.png';
import NutrikidzThumbnail from'@/assets/nutrikidz.png';

export const projects = {
  uiuxDesign: [
    {
      id: 1,
      title: "TEDxPadjadjaran University Website",
      description: "Designed and prototyped 9 user-friendly web pages for TEDxPadjadjaran University by collaborating with cross-functional teams and applying user research insights.",
      technologies: ["Figma", "User Research", "Prototyping", "UI/UX Design"],
      thumbnail: tedxThumbnail,
      figmaUrl: "https://www.figma.com/proto/ma4xdNtbYhDlCVMP4NNOGV/tedX?page-id=156%3A121&node-id=466-74&viewport=-1248%2C489%2C0.03&t=SxWnAu2xrLRMrErJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=466%3A74&show-proto-sidebar=1",
      category: "UI/UX Design"
    },
    {
      id: 2,
      title: "BeCycle Mobile App",
      description: "Designed and prototyped a user-friendly app for Software Project course in Universitas Padjadjaran",
      technologies: ["Figma", "User Research", "Prototyping", "UI/UX Design"],
      thumbnail: becycleThumbnail,
      figmaUrl: "https://www.figma.com/proto/Pco9LpPtWsJ7xyBEcCv2h2/BeCycle?page-id=&node-id=39-192&p=f&viewport=278%2C287%2C0.1&t=QS6YPCkBefXyBEJG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=138%3A669&show-proto-sidebar=1",
      category: "UI/UX Design"
    },
    {
      id: 3,
      title: "Nutrikidz Web",
      description: "Designed and prototyped a user-friendly web for Software Development course in Universitas Padjadjaran",
      technologies: ["Figma", "User Research", "Prototyping", "UI/UX Design"],
      thumbnail: NutrikidzThumbnail,
      figmaUrl: "https://www.figma.com/proto/nUTCDbkLXi7BfKUAAtlASX/NutriKidz?page-id=0%3A1&node-id=4-175&viewport=229%2C465%2C0.22&t=IQPzKx3hfZcm89My-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1",
      category: "UI/UX Design"
    }
  ],
  dataAnalytics: [
    {
      id: 4,
      title: "Adidas Data Warehouse",
      description: "Built a comprehensive data warehouse using Kimball Methodology for Adidas sales data analysis. Implemented ETL processes and created interactive dashboards for business intelligence.",
      technologies: ["SQL", "Power BI", "Data Modeling", "Visual Studio", "ETL"],
      githubUrl: "https://github.com/rafaagustant/adidas-data-warehouse",
      category: "Data Analytics"
    },
    {
      id: 5,
      title: "Reporting Engineer Rakamin",
      description: "Developed automated reporting solutions and data pipelines for Rakamin Project Based Internship at Jubelio. Created comprehensive dashboards and KPI tracking systems.",
      technologies: ["SQL", "Excel"],
      githubUrl: "https://github.com/rafaagustant/ReportingEngineerRakamin",
      category: "Data Analytics"
    }
  ],
  college: [
    {
      id: 6,
      title: "Eksplorimba",
      description: "Being a Graphic Designer and UI/UX Designer for Eksplorimba, an educational Augmented Reality game that invites children to explore Indonesia's unique flora and fauna in a fun and interactive way.",
      technologies: ["Figma", "Mobile Interface Design","Game Development"],
      githubUrl: "https://drive.google.com/drive/folders/1RZblpJsxgIuTiJLXfJ8ST4Y-fUOWNjy6",
      category: "College"
    },
    {
      id: 7,
      title: "Hanacaraka",
      description: "Hanacaraka is an interactive web application that showcases stories written in Javanese script along with their translations. The application utilizes semantic data based on RDF and is built using Next.js, React, Tailwind CSS, and GSAP for animations.",
      technologies: ["Next.js", "OWL"],
      githubUrl: "https://github.com/rafaagustant/hanacaraka",
      category: "College"
    },
    {
      id: 8,
      title: "Job Recommendation System",
      description: "This is an Application for Job Recommendation Based on Field of Interest, GPA, and Preffered Work Environmet Using FIS & K-Means Clustering for Soft Computing Course",
      technologies: ["AI", "Python"],
      githubUrl: "https://github.com/rafaagustant/SoftComputing-Job-Recommendation-Using-FIS---Clustering",
      category: "College"
    },
    {
      id: 9,
      title: "Stress Level Prediction Using Random Forest Algorithm",
      description: "This application uses the Random Forest algorithm to predict stress levels based on user input and provides insight into mental well-being.",
      technologies: ["AI", "Python", "Decision Support System"],
      githubUrl: "https://github.com/rafaagustant/Stress-Level-Prediction-Using-Random-Forest-Classifier",
      category: "College"
    },
    {
      id: 10,
      title: "Land Cover Analysis using K-Means",
      description: "This application implements K-Means Clustering for land cover image analysis. It is designed to visualize the clustering results of aerial images and evaluate them using the Silhouette Coefficient.",
      technologies: ["Jupyter", "Streamlit"],
      githubUrl: "https://github.com/rafaagustant/land-cover-analysis-kmeans",
      category: "College"
    },
    {
      id: 11,
      title: "Image Neural Transfer",
      description: "Comprehensive database design and management project involving normalization, query optimization, and database administrationproject that applies the principles of neural style transfer to blend the style of one image with the content of another. This technique leverages deep learning, particularly convolutional neural networks (CNNs), to create visually stunning artworks by combining the artistic style of one image (style image) with the content of another image (content image).",
      technologies: ["Jupyter"],
      githubUrl: "https://github.com/rafaagustant/image-neural-transfer",
      category: "College"
    },
    {
      id: 12,
      title: "Kopi.in Website for Database System Course at Universitas Padjadjaran",
      description: "An e-commerce platform specializing in premium coffee beans source from Indonesia’s finest plantations.",
      technologies: ["PHP"],
      githubUrl: "https://github.com/nefritmahardika/project-uas-sisdat-kopiin",
      category: "College"
    }
  ]
};

