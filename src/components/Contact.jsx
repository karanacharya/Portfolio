import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub className="text-2xl" />,
      url: "https://github.com/karanacharya",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin className="text-2xl" />,
      url: "https://linkedin.com/in/karan-acharya",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <FiInstagram className="text-2xl" />,
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-400",
    },
    
    {
      name: "Email",
      icon: <FiMail className="text-2xl" />,
      url: "mailto:your.email@example.com",
      color: "hover:text-red-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-b from-purple-900 to-black py-20 px-4">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Thank you for visiting my portfolio! I'm always excited to collaborate
              on new projects and connect with fellow developers.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 max-w-3xl mx-auto"
          >
            <div className="space-y-8">
              {/* Social Links */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 ${link.color} h-24`}
                    whileHover={{ y: -5 }}
                    variants={itemVariants}
                  >
                    <div className="flex items-center justify-center flex-1">
                      {link.icon}
                    </div>
                    <span className="mt-2 text-sm text-gray-300">{link.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Contact Form or Additional Info */}
              <div className="text-center space-y-6">
                <p className="text-gray-300">
                  Prefer email? Reach out to me directly at:
                </p>
                <a
                  href="mailto:your.email@example.com"
                  className="inline-block text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  karanacharya0987@gmail.com
                </a>
              </div>

              {/* Thank You Message */}
              <motion.div
                variants={itemVariants}
                className="text-center pt-8 border-t border-white/10"
              >
                <p className="text-gray-300 italic">
                  "Thank you for taking the time to explore my work. Looking
                  forward to creating something amazing together!"
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-400">
              Based in <span className="text-purple-400">Your Location</span>
              <br />
              Available for remote opportunities worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;