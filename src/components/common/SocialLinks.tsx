import React from "react";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  upworkUrl?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  iconSize = 24,
  iconColor = "currentColor",
  linkedinUrl = "https://linkedin.com/in/yourprofile",
  githubUrl = "https://github.com/yourusername",
  upworkUrl = "https://www.upwork.com/freelancers/yourprofile",
}) => {
  return (
    <div className={cn("flex items-center gap-4 bg-background", className)}>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110 hover:text-blue-500"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={iconSize} color={iconColor} />
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110 hover:text-gray-700 dark:hover:text-gray-300"
        aria-label="GitHub Profile"
      >
        <Github size={iconSize} color={iconColor} />
      </a>
      <a
        href={upworkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110 hover:text-green-500"
        aria-label="Upwork Profile"
      >
        <ExternalLink size={iconSize} color={iconColor} />
      </a>
    </div>
  );
};

export default SocialLinks;
