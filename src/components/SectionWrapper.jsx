import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAwareTransition } from '../hooks/useScrollAwareTransition';

const SectionWrapper = ({ 
  children, 
  sectionId, 
  className = '', 
  threshold = 0.3,
  animationType = 'fade-slide'
}) => {
  const { ref, isVisible, scrollDirection } = useScrollAwareTransition(sectionId, threshold);

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'fade-slide':
        return {
          hidden: {
            opacity: 0,
            y: scrollDirection === 'down' ? 50 : -50,
            scale: 0.95
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1
            }
          },
          exit: {
            opacity: 0,
            y: scrollDirection === 'down' ? -30 : 30,
            scale: 0.98,
            transition: {
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'slide-horizontal':
        return {
          hidden: {
            opacity: 0,
            x: scrollDirection === 'down' ? 100 : -100,
            scale: 0.95
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1
            }
          },
          exit: {
            opacity: 0,
            x: scrollDirection === 'down' ? -50 : 50,
            scale: 0.98,
            transition: {
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'scale-fade':
        return {
          hidden: {
            opacity: 0,
            scale: 0.8,
            y: scrollDirection === 'down' ? 30 : -30
          },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1
            }
          },
          exit: {
            opacity: 0,
            scale: 0.9,
            y: scrollDirection === 'down' ? -20 : 20,
            transition: {
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
          },
          exit: { 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.4 }
          }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.section
      ref={ref}
      id={sectionId}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      variants={variants}
      viewport={{ once: false, amount: threshold }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;

