import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SocialLinks from "@/components/common/SocialLinks";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";

interface HeroSectionProps {
  name?: string;
  title?: string;
  profileImageUrl?: string;
  featuredProjects?: Array<{
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
  }>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name = "John Doe",
  title = "Full Stack Developer",
  profileImageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio",
  featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with cart functionality and payment integration.",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
      technologies: ["React", "Node.js", "Stripe"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A productivity tool for organizing tasks with drag-and-drop functionality.",
      imageUrl:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&q=80",
      technologies: ["TypeScript", "Redux", "Firebase"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather information with interactive maps and forecasts.",
      imageUrl:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      githubLink: "#",
      liveLink: "#",
    },
  ],
}) => {
  return (
    <section className="relative w-full min-h-[800px] bg-background py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 opacity-50 z-0"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Profile info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8 w-64 h-64 md:w-80 md:h-80">
              <motion.img
                src={profileImageUrl}
                alt={name}
                className="w-full h-full object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {name}
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-muted-foreground text-center lg:text-left mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SocialLinks
                className="justify-center lg:justify-start"
                iconSize={28}
                iconColor="currentColor"
              />
            </motion.div>
          </motion.div>

          {/* Right column - Featured projects */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: [0, index % 2 === 0 ? -10 : -15, 0],
                    x: [0, index === 0 ? 5 : index === 1 ? -5 : 3, 0],
                    rotate: [0, index === 0 ? 1 : index === 1 ? -1 : 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: 0.2 + index * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className={cn(
                    "transform hover:scale-105 transition-transform",
                  )}
                >
                  <FeaturedProjectCard
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    technologies={project.technologies}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default HeroSection;
