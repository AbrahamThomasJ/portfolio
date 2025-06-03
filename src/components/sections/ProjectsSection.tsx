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
  projects?: Project[];
}

const ProjectsSection = ({
  title = "My Projects",
  subtitle = "A showcase of my recent work and personal projects",
  projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      technologies: [
        { name: "React", color: "bg-blue-500" },
        { name: "Node.js", color: "bg-green-600" },
        { name: "MongoDB", color: "bg-green-500" },
        { name: "Stripe", color: "bg-purple-500" },
      ],
      liveUrl: "#",
      githubUrl: "#",
      demoUrl: "#",
      category: "web",
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
      technologies: [
        { name: "React", color: "bg-blue-500" },
        { name: "TypeScript", color: "bg-blue-700" },
        { name: "Firebase", color: "bg-yellow-500" },
        { name: "Tailwind", color: "bg-cyan-500" },
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: "3",
      title: "Fitness Tracker",
      description:
        "A mobile application for tracking workouts, nutrition, and fitness progress with data visualization.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      technologies: [
        { name: "React Native", color: "bg-blue-600" },
        { name: "Redux", color: "bg-purple-600" },
        { name: "GraphQL", color: "bg-pink-600" },
        { name: "AWS", color: "bg-yellow-600" },
      ],
      githubUrl: "#",
      demoUrl: "#",
      category: "mobile",
    },
    {
      id: "4",
      title: "Weather Dashboard",
      description:
        "A weather application providing real-time forecasts, historical data, and interactive maps for locations worldwide.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
      technologies: [
        { name: "JavaScript", color: "bg-yellow-400" },
        { name: "OpenWeather API", color: "bg-blue-400" },
        { name: "Chart.js", color: "bg-pink-400" },
        { name: "CSS3", color: "bg-blue-500" },
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: "5",
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and professional experience with modern design.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      technologies: [
        { name: "React", color: "bg-blue-500" },
        { name: "Tailwind CSS", color: "bg-cyan-500" },
        { name: "Framer Motion", color: "bg-purple-500" },
        { name: "Vite", color: "bg-yellow-500" },
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: "6",
      title: "AI Image Generator",
      description:
        "An application that uses machine learning to generate unique images based on text prompts and style preferences.",
      image:
        "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80",
      technologies: [
        { name: "Python", color: "bg-blue-500" },
        { name: "TensorFlow", color: "bg-orange-500" },
        { name: "Flask", color: "bg-gray-500" },
        { name: "React", color: "bg-blue-600" },
      ],
      demoUrl: "#",
      category: "ai",
    },
  ],
}: ProjectsSectionProps) => {
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
      className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900"
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
                demoUrl={project.demoUrl}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;