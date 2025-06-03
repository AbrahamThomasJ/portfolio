interface FeaturedProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
      <div>
        <img src={imageUrl} alt={`Imagen del proyecto ${title}`} className="w-full h-full object-cover"/>
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Ver en vivo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
