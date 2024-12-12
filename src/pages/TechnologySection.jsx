import { FaReact, FaNode, FaBootstrap, FaAngular, FaGithub, FaAndroid, FaApple } from 'react-icons/fa'; // Importing React Icons
import { SiNextdotjs, SiNuxtdotjs, SiTailwindcss, SiBlueprint } from 'react-icons/si'; // Importing more icons
import { DiMongodb } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

const technologies = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Nuxt', icon: <SiNuxtdotjs /> },
  { name: 'Angular', icon: <FaAngular /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Material UI', icon: <FaReact /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Android', icon: <FaAndroid /> },
  { name: 'Node.js', icon: <FaNode /> },
  { name: 'Postgres SQL', icon: <DiPostgresql /> },
  { name: 'MongoDB', icon: <DiMongodb /> },
  { name: 'MySQL', icon: <DiMysql /> },
  { name: 'Apple', icon: <FaApple /> },
  { name: 'React Native', icon: <TbBrandReactNative /> },
];

const TechnologySection = () => {
  return (
    <div className="bg-background text-white py-16 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-primary  font-bold mb-8">Our Technologies</h2>
        <div className="flex  flex-wrap justify-center ">
          {technologies.map((tech, index) => (
            <div key={tech.name} className="w-44  h-44 flex flex-col items-center justify-center">
              <div className="text-4xl hover:bg-white hover:text-primary bg-primary text-white p-5 rounded-full mb-4">{tech.icon}</div>
              <span className="text-sm text-black">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
