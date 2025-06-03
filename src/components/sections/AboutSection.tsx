import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
}

interface AboutSectionProps {
  title?: string;
  description?: string;
  skills?: Skill[];
  backgroundClass?: string;
}

const AboutSection = ({
  title = "About Me",
  description = "I'm a passionate full-stack developer with a focus on creating beautiful, responsive, and user-friendly web applications. With several years of experience in web development, I specialize in React, TypeScript, and modern frontend frameworks while also having strong backend skills.",
  skills = [
    { name: "React", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "UI/UX Design", category: "design" },
    { name: "Figma", category: "design" },
    { name: "Git", category: "tools" },
    { name: "Docker", category: "tools" },
  ],
  backgroundClass = "bg-white dark:bg-gray-900",
}: AboutSectionProps) => {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {},
  );

  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    design: "Design",
    tools: "Tools & DevOps",
  };

  return (
    <section
      id="about"
      className={cn(
        "py-20 px-4 md:px-8 lg:px-16 min-h-[600px] flex items-center",
        backgroundClass,
      )}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm passionate about creating clean, efficient code and delivering
              exceptional user experiences. I enjoy tackling complex problems
              and continuously learning new technologies to stay at the
              forefront of web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Skills & Expertise
            </h3>

            {Object.entries(skillsByCategory).map(
              ([category, categorySkills]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="outline"
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors py-1.5 px-3"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;