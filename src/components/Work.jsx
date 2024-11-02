import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
// import  image1 from "../../public/project1.svg"
import project1 from "../components/Images/project1.jpg"
import project3 from "../components/Images/project_3.jpg"
import project2 from "../components/Images/secondproject_2.jpg"

const Work = () => {
  const projects = [
    {
      title: "Wheather App",
      description: "This was the first project that i made when i was learning javaScript.In this project i used openweathermap api to fetch the wheather data and display it to the user.",
      technologies: ["JavaScript","HTML","bootstrap"],
      githubLink: "https://github.com/karanacharya/wheather-api",
      liveLink: "https://karanacharya.github.io/wheather-api/",
      image: `${project1}`
    },
    {
      title: "Text Utils",
      description: "This is a project in which i have used simple javascript logic to manipulate the text,like uppercase,lowercase,clear text,copy text,remove extra spaces etc. And this was the project which made me understand the importance of javascript in web development.",
      technologies: ["Bootstrap , JavaScript , React"],
      githubLink: "https://github.com/karanacharya/textutils",
      liveLink: "https://text-utils-gamma-seven.vercel.app/",
      image: `${project2}`
    },
    {
      title: "Appwrite Blog",
      description: "This is a blog website in which i have used appwrite as the database and also used appwrite auth to authenticate the user and also used appwrite storage to store the images.",
      technologies: ["Appwrite , React , Tailwind"],
      githubLink: "https://github.com/karanacharya/appwrite-blog",
      liveLink: "https://appwrite-blog-blond.vercel.app/signup",
      image: `${project3}`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="works" className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 relative">
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
              Featured Projects
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gray-800/95 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-white/10"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                    >
                      <FiGithub className="text-xl" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                    >
                      <FiExternalLink className="text-xl" />
                      <span>Live Demo</span>
                    </a>
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

export default Work;
