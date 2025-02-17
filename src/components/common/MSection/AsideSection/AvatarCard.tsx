import React, { useState } from "react";
import type { AvatarCardProps } from "@/types";

const AvatarCard: React.FC<AvatarCardProps> = ({
  avatarUrl,
  name,
  title,
  backDetails,
  socials,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isIco = (icon: string) => icon.endsWith(".ico");
  const hasNonIcoIcon = socials.some((social) => !isIco(social.icon));

  return (
    <>
      <div className="w-60 h-72 p-4 border rounded-xl relative md:block hidden">
        {/* Avatar Section */}
        <div className="flex flex-col items-center">
          <div
            className="relative w-40 h-40 mt-4 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={avatarUrl}
              alt={name}
              className={`w-full h-full object-cover rounded-full transition-all duration-700 ${isHovered ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
            />
            <div
              className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
            >
              {backDetails.map((detail, index) => (
                <p
                  key={index}
                  className="text-sm text-center py-1"
                  style={{
                    opacity: isHovered ? "1" : "0",
                    transition: `opacity 0.7s ease-in-out ${index * 200}ms`,
                  }}
                >
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="absolute bottom-0 inset-x-0 p-4 flex justify-between items-center">
          <div>
            <h3 className="text-sm">{name}</h3>
            <p className="text-xs text-gray-500 truncate">{title}</p>
          </div>
          <div className="flex space-x-2">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-transform duration-300 hover:drop-shadow-lg hover:translate-y-[-2px] ${hasNonIcoIcon ? "w-8 h-8 rounded-xl overflow-hidden" : ""}`}
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
