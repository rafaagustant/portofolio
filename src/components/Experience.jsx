import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { experiences } from '@/data/experiences';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and key roles in academia and industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="timeline-line"></div>
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 fade-in">
                <div className={`timeline-dot ${exp.color}`}></div>
                <div className="ml-16">
                  <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <CardTitle className="text-xl text-gray-900 mb-1 sm:mb-0">{exp.title}</CardTitle>
                        <Badge variant="outline" className="text-green-600 border-green-600 w-fit flex-shrink-0">
                          {exp.period}
                        </Badge>
                      </div>
                      <CardDescription className="text-blue-600 font-medium text-lg">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="fade-in">
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex flex-col gap-2 mb-2">
                      <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium text-lg">
                        {exp.company}
                      </CardDescription>
                      <Badge variant="outline" className="text-green-600 border-green-600 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

