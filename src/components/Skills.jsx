import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "JavaScript",
        
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      technologies: ["Appwrite", "MongoDB","firebase"],
    },
    {
      category: "Tools & Others",
      technologies: ["Git",  "Redux", 'Context API',  "REST APIs"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Skills
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A showcase of my technical expertise and professional capabilities
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet) => (
              <motion.div
                key={skillSet.category}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillSet.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Meter Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["React", "JavaScript", "Node.js", "Python"].map((skill) => (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between text-white">
                  <span>{skill}</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-blue-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
