import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '../data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="h-full"
    >
      <Card className="h-full card-hover border-0 shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">{project.icon}</span>
            <div className="flex gap-2">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="p-2"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="p-2"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
          <CardDescription className="text-gray-600">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const ProjectSection = ({ title, projectList, emoji }) => (
    <motion.div variants={itemVariants} className="mb-12">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
        <span className="text-3xl">{emoji}</span>
        {title}
      </h3>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="container-max section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
        >
          My Projects
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6"
        />
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          A showcase of my work across data analytics, UI/UX design, and web development
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <ProjectSection
          title="Data Analytics"
          projectList={projects.dataAnalytics}
          emoji="🟢"
        />
        
        <ProjectSection
          title="UI/UX Design"
          projectList={projects.uiuxDesign}
          emoji="🔵"
        />
        
        <ProjectSection
          title="College Project"
          projectList={projects.developer}
          emoji="🟣"
        />
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-center mt-12"
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <a href="https://github.com/rafaagustant" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default Projects;

