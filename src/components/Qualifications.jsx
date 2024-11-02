import React from "react";
import { motion } from "framer-motion";

const Qualifications = () => {
  const qualifications = [
    {
      program: "Bachelor of Computer Application (BCA)",
      institution: "Academy of management and information technology",
      year: "2022 - 2025",
      percentage: 75,
      status: "Current"
    },
    {
      program: "Higher Secondary Education",
      institution: "Government College Sundargarh",
      year: "2020 - 2022",
      percentage: 65,
      status: "Completed"
    },
    {
      program: "Secondary Education",
      institution: "Vivekananda International School",
      year: "2020",
      percentage: 60,
      status: "Completed"
    }
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
    <section className="w-full min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-gray-900 relative">
      <div className="absolute inset-0 bg-gray-900"></div>
      
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
              Educational Journey
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              My academic qualifications and achievements
            </p>
          </motion.div>

          {/* Qualifications Cards */}
          <div className="grid grid-cols-1 gap-6">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/95 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-700/95 transition-all duration-300 border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">
                      {qual.program}
                    </h3>
                    <p className="text-gray-300">{qual.institution}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-300">{qual.year}</span>
                      <span 
                        className={`px-2 py-1 rounded-full text-sm ${
                          qual.status === "Current" 
                            ? "bg-green-500/20 text-green-300"
                            : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {qual.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-48">
                    <div className="flex justify-between text-white mb-2">
                      <span>Percentage</span>
                      <span>{qual.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${qual.percentage}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Qualifications;
