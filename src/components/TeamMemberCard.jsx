import { Twitter, Github } from 'lucide-react';

const TeamMemberCard = ({ name, role, imageSrc, alt, bgColor, twitterUrl, githubUrl }) => {
  return (
    <figure className="flex flex-col items-center text-center">
      <div className={` p-2 `}>
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className="w-40 h-40  object-cover"
        />
      </div>
      <figcaption className="mt-4">
        <p className="font-semibold">{name}</p>
        <p className="text-blue-600 text-sm">{role}</p>
        <div className="flex justify-center gap-4 mt-2 text-gray-500">
          {twitterUrl && (
            <a
              href={twitterUrl}
              aria-label={`${name}'s Twitter`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              aria-label={`${name}'s GitHub`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
        </div>
      </figcaption>
    </figure>
  );
};

export default TeamMemberCard;
