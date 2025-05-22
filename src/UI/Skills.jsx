import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionIntro from "../components/SectionIntro";
import data from "../../data";
import GlowingBlob from "../components/GlowingBlob";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skillDetails, setSkillDetails] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categoryIcons = {
    "Languages": "🔡",
    "Frameworks": "🧰",
    "Tools": "⚙️",
    "Related Projects": "📂"
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
      className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-2 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white/5 backdrop-blur-xl p-4 sm:p-8 rounded-2xl sm:rounded-3xl max-w-xl w-full mx-auto border border-white/10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/70 hover:text-white text-xl sm:text-2xl p-2 rounded-full hover:bg-white/10 transition-colors touch-manipulation"
          onClick={onClose}
          aria-label="Close modal"
        >
          <motion.span
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >✕</motion.span>
        </button>

        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">{skill}</h3>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">{details.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
              <p className="text-white/70 text-xs sm:text-sm mb-1">Experience</p>
              <p className="text-white font-medium text-base sm:text-lg">{details.experience}</p>
            </div>
            <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
              <p className="text-white/70 text-xs sm:text-sm mb-1">Projects</p>
              <p className="text-white font-medium text-base sm:text-lg">{details.projects}</p>
            </div>
          </div>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="text-white/70">Proficiency</span>
              <span className="text-white font-medium">{details.proficiency}%</span>
            </div>
            <div className="h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gray-300 via-white to-gray-300"
                initial={{ width: 0 }}
                animate={{ width: `${details.proficiency}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const getGridSpanClasses = (index) => {
    switch (index) {
      case 0: // Frontend Development
        return 'md:col-span-2 md:row-span-2';
      case 1: // Backend Development
        return 'md:row-span-2';
      case 2: // Machine Learning & AI
        return ''; // Default size
      case 3: // Database & Cloud
        return ''; // Default size
      case 4: // Embedded Systems & IoT
        return ''; // Default size
      case 5: // UI/UX & Design Tools
        return 'md:col-span-2';
      case 6: // Version Control & Dev Tools
        return ''; // Default size
      default:
        return ''; // Default size for any other case
    }
  };

  return (
    <section className="py-20 overflow-hidden relative">
      <GlowingBlob targetId="skills-grid"/>
      <SectionIntro title={data.skills.title} tagline={data.skills.tagline} />
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm10 28e-05l0 2h2V28.000000000000004zm-10 0l0 2h2V28.000000000000004zm-4 4l0 2h2V32h-2zm-4-4l0 2h2V28.000000000000004zm-4-4l0 2h2V24h-2zm-4-4l0 2h2V20h-2zm-4-4l0 2h2v-2h-2zm-4-4l0 2h2v-2h-2zm-4-4l0 2h2v-2h-2zm-4-4l0 2h2v-2h-2zM6 52V48h-2v4H0v2h4v4h2v-4h4v-2H6zm0-10V38h-2v4H0v2h4v4h2v-4h4v-2H6zm0-10V28h-2v4H0v2h4v4h2v-4h4v-2H6z'")`
      }}>
      </div>
      
      <div id="skills-grid" className="relative z-10 max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px, auto)]">
          {data.skills.skills.map((skill, index) => {
            const blocks = [
              { label: "Languages", values: skill.languages },
              { label: "Frameworks", values: skill.frameWorks },
              { label: "Tools", values: skill.tools },
              { label: "Related Projects", values: skill.relatedProjects },
            ].filter(item => item.values && item.values.length > 0);

            const gridSpanClasses = getGridSpanClasses(index);

            return (
              <motion.div
                key={index}
                className={`relative bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden transition-all duration-300
                  ${gridSpanClasses}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent z-0 pointer-events-none"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-400 mb-4">
                    {skill.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4 flex-grow">
                    {blocks.map((block, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-black/30 rounded-xl p-4 border border-white/10 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                        }}
                      >
                        <div className="flex items-center mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xl text-white">
                            {categoryIcons[block.label]}
                          </div>
                          <h4 className="ml-3 font-medium text-white/90">{block.label}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {block.values.map((value, i) => (
                            <motion.span
                              key={i}
                              className="bg-black/40 px-3 py-1.5 rounded-lg text-sm text-gray-200 border border-white/10 cursor-pointer relative group transition-all duration-300"
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)"
                              }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleSkillClick(value)}
                              onHoverStart={() => setHoveredSkill(value)}
                              onHoverEnd={() => setHoveredSkill(null)}
                            >
                              {value}
                              <AnimatePresence>
                                {hoveredSkill === value && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap z-10"
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
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
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

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY + window.scrollY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}