import { ExternalLink, Github, Figma, BarChart3, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

const Projects = () => {
  const ProjectCard = ({ project }) => (
    <div className="h-full">
      <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-200">
        {/* Thumbnail Image */}
        {project.thumbnail && (
          <div className="w-full aspect-[16/9] bg-gray-100 rounded-t-lg overflow-hidden">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2">
              {project.category === 'UI/UX Design' && project.figmaUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="p-2"
                >
                  <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                    <Figma className="w-4 h-4" />
                  </a>
                </Button>
              )}
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
    </div>
  );

  const ProjectSection = ({ title, projectList, icon: IconComponent }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
        <IconComponent className="w-8 h-8 text-blue-600" />
        {title}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my work across data analytics, UI/UX design, and academic projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto fade-in">
          <ProjectSection
            title="Data Analyst Projects"
            projectList={projects.dataAnalytics}
            icon={BarChart3}
          />
          
          <ProjectSection
            title="UI/UX Projects"
            projectList={projects.uiuxDesign}
            icon={Figma}
          />
          
          <ProjectSection
            title="College Projects"
            projectList={projects.college}
            icon={GraduationCap}
          />
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 fade-in">
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
        </div>
      </div>
    </section>
  );
};

export default Projects;

