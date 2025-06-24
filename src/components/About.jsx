import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="container-max section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed"
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl mb-6"
          >
            I'm an Informatics Engineering student at Universitas Padjadjaran with a passion for Data Analytics, UI/UX Design, and Web Development.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl mb-6"
          >
            I've worked as a UI/UX Designer at TEDxPadjadjaran, built structured data projects using Kimball Methodology, and served as a Teaching Assistant for Algorithm Analysis.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl"
          >
            I actively explore bootcamps, certifications, and build digital projects across disciplines, constantly seeking to expand my knowledge and skills in the ever-evolving tech landscape.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            { name: 'Data Analysis', icon: '📊' },
            { name: 'UI/UX Design', icon: '🎨' },
            { name: 'Web Development', icon: '💻' },
            { name: 'SQL & Databases', icon: '🗄️' },
            { name: 'Python', icon: '🐍' },
            { name: 'Teaching', icon: '👨‍🏫' }
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-50 rounded-lg p-4 text-center card-hover"
            >
              <div className="text-2xl mb-2">{skill.icon}</div>
              <h3 className="font-medium text-gray-900">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;

