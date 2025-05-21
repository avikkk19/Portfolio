import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionIntro from "../components/SectionIntro";
import data from "../../data";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skillDetails, setSkillDetails] = useState(null);
  const skillRefs = useRef([]);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Icons for each category with more modern emojis
  const categoryIcons = {
    "Languages": <span className="text-white text-xl">🔡</span>,
    "Frameworks": <span className="text-white text-xl">🧰</span>,
    "Tools": <span className="text-white text-xl">⚙️</span>,
    "Related Projects": <span className="text-white text-xl">📂</span>
  };
  
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)"
    }
  };

  const skillTagVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(168, 85, 247, 0.2)",
      boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)"
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setSkillDetails(data.skills.skillDetails[skill] || {
      description: `Detailed information about ${skill}`,
      experience: "Not specified",
      projects: 0,
      proficiency: 0
    });
  };

  const SkillModal = ({ skill, details, onClose }) => (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl max-w-md w-full mx-4"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white">{skill}</h3>
          <motion.button
            className="text-white/70 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            ✕
          </motion.button>
        </div>
        <div className="space-y-4">
          <p className="text-white/80">{details.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <p className="text-white/60 text-sm">Experience</p>
              <p className="text-white font-medium">{details.experience}</p>
            </div>
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <p className="text-white/60 text-sm">Projects</p>
              <p className="text-white font-medium">{details.projects}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Proficiency</span>
              <span className="text-white">{details.proficiency}%</span>
            </div>
            <div className="h-2 bg-purple-900/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-amber-500"
                initial={{ width: 0 }}
                animate={{ width: `${details.proficiency}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-20 overflow-hidden">
      <SectionIntro title={data.skills.title} tagline={data.skills.tagline} />
      
      <div className="flex flex-col items-center gap-20 mt-16">
        {data.skills.skills.map((skill, index) => {
          const blocks = [
            { label: "Languages", values: skill.languages },
            { label: "Frameworks", values: skill.frameWorks },
            { label: "Tools", values: skill.tools },
            { label: "Related Projects", values: skill.relatedProjects },
          ].filter(item => item.values && item.values.length > 0);
          
          const isActive = activeSkill === index;
          
          if (isMobile) {
            return (
              <motion.div 
                key={index} 
                className="w-full px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-900/90 to-purple-900/20 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 shadow-lg"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white-500 to-amber-400">
                    {skill.title}
                  </h3>
                  
                  <motion.div 
                    className="space-y-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {blocks.map((block, idx) => (
                      <motion.div 
                        key={idx} 
                        className="bg-gradient-to-br from-purple-900/30 to-gray-800/30 rounded-lg p-4 border border-purple-500/20"
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="flex items-center mb-3">
                          <motion.div 
                            className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-900/30"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {categoryIcons[block.label]}
                          </motion.div>
                          <h4 className="ml-3 font-medium text-white/90 text-lg">{block.label}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {block.values.map((value, i) => (
                            <motion.span 
                              key={i}
                              className="bg-gradient-to-r from-amber-900/50 to-amber-800/50 px-3 py-1.5 rounded-full text-sm text-amber-100 border border-amber-700/30 cursor-pointer relative group"
                              variants={skillTagVariants}
                              initial="initial"
                              whileHover="hover"
                              whileTap={{ scale: 0.95 }}
                              onHoverStart={() => setHoveredSkill(value)}
                              onHoverEnd={() => setHoveredSkill(null)}
                              onClick={() => handleSkillClick(value)}
                            >
                              {value}
                              <AnimatePresence>
                                {hoveredSkill === value && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap"
                                  >
                                    Click to learn more about {value}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          }
          
          return (
            <motion.div 
              key={index} 
              className="relative w-full h-full group grid grid-cols-2 gap-10 p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
              ref={el => {
                if (!skillRefs.current[index]) {
                  skillRefs.current[index] = el;
                }
              }}
            >
              {/* Left Title Box */}
              <motion.div 
                className="h-full"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div 
                  className={`min-w-[350px] min-h-[100%] bg-gradient-to-br from-gray-900 to-transparent backdrop-blur-lg text-white flex items-center justify-center rounded-2xl transition-all duration-300 cursor-pointer`}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  animate={isActive ? {
                    boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)",
                    borderColor: "rgba(168, 85, 247, 0.5)"
                  } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white-500 to-amber-400">
                    {skill.title}
                  </h3>
                </motion.div>
              </motion.div>
              
              {/* Right side skill blocks */}
              <div className="flex flex-col gap-6 w-full">
                {blocks.map((block, idx) => {
                  const topPosition = (idx * 110) + ((340 - (blocks.length * 110)) / 2);
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
                      style={{ marginTop: idx === 0 ? `${topPosition}px` : '0' }}
                    >
                      <motion.div
                        className={`bg-gradient-to-br from-gray-900/90 to-purple-900/20 backdrop-blur-lg rounded-xl p-5 border border-purple-500/20`}
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                        animate={isActive ? {
                          boxShadow: "0 0 20px rgba(168, 85, 247, 0.15)",
                          borderColor: "rgba(168, 85, 247, 0.3)"
                        } : {}}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="flex items-center mb-3">
                          <motion.div 
                            className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-900/30 backdrop-blur-sm"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {categoryIcons[block.label]}
                          </motion.div>
                          <h4 className="ml-3 font-medium text-white/90 text-lg">{block.label}</h4>
                        </div>
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {block.values.map((value, i) => (
                            <motion.span 
                              key={i}
                              variants={itemVariants}
                              className="bg-gradient-to-r from-purple-900/50 to-gray-800/50 px-3 py-1.5 rounded-full text-sm text-purple-100 border border-purple-500/30 cursor-pointer relative group"
                              whileHover="hover"
                              whileTap={{ scale: 0.95 }}
                              onHoverStart={() => setHoveredSkill(value)}
                              onHoverEnd={() => setHoveredSkill(null)}
                              onClick={() => handleSkillClick(value)}
                            >
                              {value}
                              <AnimatePresence>
                                {hoveredSkill === value && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10"
                                  >
                                    Click to learn more about {value}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedSkill && skillDetails && (
          <SkillModal
            skill={selectedSkill}
            details={skillDetails}
            onClose={() => {
              setSelectedSkill(null);
              setSkillDetails(null);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Skills;