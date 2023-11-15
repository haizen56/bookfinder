


import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  const icons = [
    { name: "Facebook", icon: <FaFacebook />, color: "#1877f2" }, // Facebook color
    { name: "Twitter", icon: <FaTwitter />, color: "#1da1f2" }, // Twitter color
    { name: "Linkedin", icon: <FaLinkedin />, color: "#2867B2" }, // Linkedin color
    { name: "Github", icon: <FaGithub />, color: "#171515" }, // Github color
    { name: "Instagram", icon: <FaInstagram />, color: "#bc2a8d" } // Instagram color
  ];

  return (
    <div>
      {icons.map((item, index) => (
        <div
          key={index}
          className={`p-2 cursor-pointer inline-flex items-center
            rounded-full mx-2 text-3xl hover:text-gray-100
            bg-white bg-opacity-30 backdrop-blur-lg duration-300 relative group`}
          style={{
            boxShadow: `0 0 10px rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.7)`,
          }}
        >
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 bg-${item.name.toLowerCase()} opacity-0 rounded-full group-hover:opacity-100 transition-opacity`}
          ></div>
          <div
            className="relative z-10"
            style={{ color: item.color }}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
