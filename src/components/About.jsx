import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'Python', 'SQL', 'Power BI', 'Excel',
    'Figma', 'HTML','CSS', 'Prototyping', 'User Research',
    'Data Visualization', 'Statistical Analysis'
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a seventh-semester Informatics Engineering student at Universitas Padjadjaran with a GPA of 3.53. 
                My academic journey blends analytical thinking with creative problem-solving, with a particular focus on 
                data analytics and UI/UX design.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My professional experience began as a Teaching Assistant for Algorithm Analysis at the Department of 
                Computer Science, Universitas Padjadjaran. I later took on the role of UI/UX Designer for 
                TEDxPadjadjaranUniversity, and most recently contributed as a UI/UX Designer for Universitas 
                Padjadjaran. All three positions were freelance engagements that allowed me to work on diverse challenges 
                while delivering impactful, user-focused solutions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not analyzing data or designing, you'll find me exploring new technologies, contributing 
              to projects, or mentoring fellow students in algorithm design and problem-solving.
              </p>
            </div>

            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

