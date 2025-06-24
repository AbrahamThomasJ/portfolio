import React from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Technology {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  image?: string;
  technologies?: Technology[];
  liveUrl?: string;
  githubUrl?: string;

  className?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing the key features and technologies used in its development.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  technologies = [
    { name: "React", color: "bg-blue-500" },
    { name: "TypeScript", color: "bg-blue-700" },
    { name: "Tailwind", color: "bg-cyan-500" },
    { name: "Node.js", color: "bg-green-600" },
  ],
  liveUrl = "#",
  githubUrl = "#",

  className = "",
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn("h-full", className)}
    >
      <Card className="h-full flex flex-col overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`${tech.color} text-white text-xs px-2 py-1 rounded-full`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <CardDescription className="text-gray-600 dark:text-gray-300">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between gap-2 pt-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="default"
                size="sm"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Site
              </Button>
            </a>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" className="flex-1">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}

        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
