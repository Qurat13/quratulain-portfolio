import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech, github, live }) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg border border-transparent hover:border-purple-500 hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] p-6">
      <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">{title}</h3>
      <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">{description}</p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, i) => (
          <span
            key={i}
            className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 text-xs rounded-md"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="flex gap-4 mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-green-600 hover:underline"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;