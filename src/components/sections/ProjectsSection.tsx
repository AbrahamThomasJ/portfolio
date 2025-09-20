import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/projects/ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: { name: string; color: string }[];
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  category: string;
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
}

const ProjectsSection = ({
  title = "My Projects",
  subtitle = "A showcase of my recent work and personal projects",
}: ProjectsSectionProps) => {
  const projects = [
    {
      id: "1",
      title: "atelonabierto.com",
      description:
        "A theater company's website showcasing their shows, events, and other activities.",
      image: "/atelonabiertoimage.png",
      technologies: [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-blue-500" },
        { name: "JAVASCRIPT", color: "bg-yellow-400" },
      ],
      liveUrl: "https://atelonabierto.com",
      githubUrl: "https://github.com/AbrahamThomasJ/ataWeb1.3",
      category: "web",
    },
    {
      id: "2",
      title: "Mafer's Portfolio",
      description:
        "Animated web portfolio created for Mafer, a passionate graphic designer.",
      image: "/mafer-portfolio.png",
      technologies: [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-blue-500" },
        { name: "JAVASCRIPT", color: "bg-yellow-400" },
      ],
      liveUrl: "https://abrahamthomasj.github.io/mafer_portfolio",
      githubUrl: "https://github.com/AbrahamThomasJ/mafer_portfolio",
      category: "web",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Extract unique categories from projects
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on search term and active category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full md:w-auto flex flex-wrap justify-start">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="capitalize"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="w-full md:w-64 relative">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              className="mt-4"
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}

              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;