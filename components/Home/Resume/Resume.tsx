import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%]  mx-auto grid grid-cols-1  xl:grid-cols-2 gap-10">
        {/* WORK PART */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work
            <span className="text-cyan-200"> Expreience</span>
          </h1>
          <div className="mt-10" data-aos="zoom-in"
          data-aos-anchor-placement="top-ceter">
            <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
            <ResumeCard Icon={FaReact} role="Front-End Developer" />
            <ResumeCard Icon={BsDatabase} role="Back-End Developer" />
          </div>
        </div>
        <div data-aos="zoom-out"
          data-aos-anchor-placement="top-ceter" data-aos-delay="300">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My 
            <span className="text-cyan-200"> Education</span>
          </h1>
          <div className="mt-10">
            <ResumeCard Icon={BiBadge} role="Design Inyitute of Technology" date="Jan 2023 - Dec 2024" />
            <ResumeCard Icon={FaReact} role="Bachelor in computer science" date="Jan 2023 - Dec 2024" />
            <ResumeCard Icon={BsDatabase} role="Certicate in Digital Marketing" date="Jan 2023 - Dec 2024" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
