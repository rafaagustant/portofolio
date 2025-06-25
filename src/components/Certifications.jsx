import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { certifications } from '@/data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="fade-in">
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 mb-2">
                          {cert.title}
                        </CardTitle>
                      </div>
                      {cert.credentialUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="p-2 ml-2 flex-shrink-0"
                        >
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                    <CardDescription className="text-blue-600 font-medium text-lg">
                      {cert.issuer}
                    </CardDescription>
                    <div className="text-sm text-gray-500 font-medium">
                      {cert.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Continuous Learning Section */}
          <div className="mt-12 fade-in">
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-0 shadow-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900 mb-2">
                  Continuous Learning
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  I'm always exploring new technologies and methodologies to stay current with industry trends. 
                  Currently focusing on advanced data visualization techniques and modern UI/UX design patterns.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

