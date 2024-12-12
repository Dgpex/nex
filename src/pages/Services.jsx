import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { CiMobile1 } from "react-icons/ci";
import { HiSpeakerphone } from "react-icons/hi";
import { GiPencilBrush, GiMagnifyingGlass } from "react-icons/gi";
import { FaFigma } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="border hover:border-none  hover:bg-white hover:rounded-lg hover:shadow-md p-6 m-4 w-96 h-96 group transition-all duration-300 ease-in-out flex flex-col">
    <div className="flex items-center justify-center mb-4">
      <span className="text-primary mb-5 mt-3 text-4xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mt-3 mb-2">{title}</h3>
    <p className="text-gray-400 text-md mt-5 flex-grow">{description}</p>
    <div className="flex justify-center mt-auto">
      <h1 className="rounded-full flex items-center justify-center bg-primary text-center text-white p-4 w-40 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
        Learn More
        <GoArrowRight className="ml-2" />
      </h1>
    </div>
  </div>
  

  );
}
function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "We craft dynamic, fast-loading, and feature-rich websites tailored to meet the specific needs of your business. From startups to enterprises, we've got you covered.",
    },
    {
      icon: <CiMobile1 />,
      title: "Mobile App Development",
      description:
        "Deliver cutting-edge mobile experiences for iOS and Android. We create engaging apps that drive user retention and improve your business reach.",
    },
    {
      icon: <HiSpeakerphone />,
      title: "Digital Marketing",
      description:
        "Boost your online presence with targeted digital marketing strategies. From social media campaigns to pay-per-click ads, we help you stay ahead.",
    },
    {
      icon: <FaFigma />,
      title: "UI/UX Design",
      description:
        "Enhance your brand’s identity with intuitive designs. We focus on creating user-centric, visually appealing, and functional interfaces.",
    },
    {
      icon: <GiPencilBrush />,
      title: "Graphic Design",
      description:
        "Stand out with custom graphic designs. From branding to advertisements, we deliver creative solutions that capture your audience's attention.",
    },
    {
      icon: <GiMagnifyingGlass />,
      title: "SEO Optimization",
      description:
        "Achieve top rankings on search engines with our advanced SEO techniques. We improve your website’s visibility and drive organic traffic.",
    },
    {
      icon: <HiSpeakerphone />,
      title: "Content Writing",
      description:
        "Engage your audience with compelling content. We offer blog writing, copywriting, and content strategies tailored to your business.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Cloud Solutions",
      description:
        "Leverage the power of cloud computing with our scalable and secure cloud services. Enhance your operational efficiency with our solutions.",
    },
  ];

  return (
    <div className="bg-background p-4 md:p-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Our Services
      </h2>
      <p className="text-gray-500 mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto">
        We provide a wide range of professional services to help businesses of
        all sizes achieve their goals. Explore how we can make a difference for
        you.
      </p>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div
            className="w-full sm:w-1/2 lg:w-1/3 px-2 md:px-4 mb-6 md:mb-8"
            key={index}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
