import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { experiences } from '../data/experiences';

const Experience = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

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
          Experience
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6"
        />
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          My professional journey and key roles in academia and industry
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line"></div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={cardVariants}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <motion.div 
                  variants={itemVariants}
                  className={`timeline-dot ${experience.type === 'current' ? 'border-green-500' : 'border-blue-500'}`}
                >
                  <div className={`w-2 h-2 rounded-full ${experience.type === 'current' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                </motion.div>

                {/* Experience Card */}
                <Card className="card-hover border-0 shadow-md">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <CardTitle className="text-xl text-gray-900">
                        {experience.title}
                      </CardTitle>
                      <Badge 
                        variant={experience.type === 'current' ? 'default' : 'secondary'}
                        className={experience.type === 'current' ? 'bg-green-500 hover:bg-green-600' : ''}
                      >
                        {experience.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-blue-600 font-medium text-base">
                      {experience.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

