import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <div className="mt-10 mb-10">
      <div className="p-4 md:p-6 text-white bg-primary">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="md:border-r border-gray-200 px-12">
              <h2 className="text-4xl text-white md:text-5xl font-semibold text-center">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <p className="mb-2 text-center">Years Experience</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="lg:border-r border-gray-200 px-12">
              <h2 className="text-4xl text-white md:text-5xl font-semibold text-center">
                <CountUp start={0} end={10} duration={2.5} suffix="+" />
              </h2>
              <p className="mb-2 text-center">Happy Clients</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="md:border-r border-gray-200 px-12">
              <h2 className="text-4xl text-white md:text-5xl font-semibold text-center">
                <CountUp start={0} end={20} duration={3} suffix="+" />
              </h2>
              <p className="mb-2 text-center">Projects Done</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="px-12">
              <h2 className="text-4xl text-white md:text-5xl font-semibold text-center">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <p className="mb-2 text-center">Talented IT Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
