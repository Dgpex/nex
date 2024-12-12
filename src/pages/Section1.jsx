import React from 'react';
import image from "/home.jpg";

function Section1() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white px-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">Your Trusted Service Partner</h1>
            <p className="mt-4 text-lg sm:text-xl">Helping businesses grow with tailored solutions and expert advice.</p>
            <a href="#services" className="mt-6 inline-block py-2 px-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
              Get Started
            </a>
          </div>
        </div>
      </section>


      
    </div>
  );
}

export default Section1;
