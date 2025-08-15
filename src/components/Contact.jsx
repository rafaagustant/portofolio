import { Mail, Linkedin, Instagram, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rafaagustant@gmail.com",
      href: "mailto:rafaagustant@gmail.com",
      color: "text-red-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "rafaagustant",
      href: "www.linkedin.com/in/rafaagustant",
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@rafagustant",
      href: "https://instagram.com/rafagustant",
      color: "text-pink-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "rafaagustant",
      href: "https://github.com/rafaagustant",
      color: "text-gray-800"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's connect and discuss opportunities in data analytics and UI/UX design
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact) => {
              const IconComponent = contact.icon;
              return (
                <div key={contact.label} className="fade-in">
                  <Card className="h-full text-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
                    <CardHeader className="pb-3">
                      <div className="flex justify-center mb-3">
                        <div className={`p-3 rounded-full bg-gray-100 ${contact.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>
                      <CardTitle className="text-base text-gray-900 mb-2">
                        {contact.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 px-3 pb-4">
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${contact.color} hover:underline font-medium transition-colors duration-200 text-sm break-words block`}
                      >
                        {contact.value}
                      </a>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center fade-in">
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 mb-4">
                  Let's Work Together
                </CardTitle>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

