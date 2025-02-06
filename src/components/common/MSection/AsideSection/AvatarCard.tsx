import React, { useState } from "react";

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface AvatarCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  backDetails: string[];
  socials: SocialLink[];
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  avatarUrl,
  name,
  title,
  backDetails,
  socials,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="w-64 h-72 relative p-4 border rounded-xl hidden md:block">
        {/* avatar */}
        <div className="flex flex-col items-center h-56">
          <div
            className={`relative w-40 h-40 mt-4 cursor-pointer rounded-full overflow-hidden transition-all duration-700 ${
              !isHovered ? "drop-shadow-md" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={avatarUrl}
              alt={name}
              className={`w-full h-full object-cover rounded-full transition-all duration-700 ${
                isHovered ? "scale-75 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {backDetails.map((detail, i) => (
                <p
                  key={i}
                  className="text-sm text-center my-1"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* info */}
        <div className="absolute bottom-0 inset-x-0 p-4 flex justify-between items-center">
          <div>
            <h3 className="text-sm font-medium truncate">{name}</h3>
            <p className="text-xs text-gray-500 truncate">{title}</p>
          </div>
          <div className="flex space-x-3">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full overflow-hidden transition-all duration-500 hover:drop-shadow-lg hover:-translate-y-1"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { AvatarCard };
