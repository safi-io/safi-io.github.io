import React from "react";
import { projectDetails } from "../../utils/projectsDetails";

import { motion } from "framer-motion";

export default function Projects() {




  return (
    <section className="maxWidth text-white px-5">
      <motion.h1 className="mt-20 lg:text-5xl text-2xl font-medium mb-10"
      
          initial={{ x: "-7rem", opacity: "0.1" }}
          animate={{ x: 0, opacity: "1" }}
          transition={{ duration: 2, type: "spring" }}>Personal Projects</motion.h1>

      <div className="flex lg:flex-row flex-col items-center justify-between flex-wrap">
        {projectDetails.map((project, index) => (
          <div
            className=" h-[450px] w-[350px] flex flex-col items-center justify-between rounded overflow-hidden mb-20 "
            key={index}
          >
            {/* Upper Part */}
            <div className="bg-red-500">
              <img
                src={project.url}
                alt="projectImages"
                className="hover:scale-110 duration-500 cursor-pointer"
                style={{height: "225px" }}
              />
            </div>

            {/*  Lower Part */}

            <div className="bg-gray-800 w-full flex flex-col justify-between px-3 py-3 h-[50%]">
              <h1 className="text-2xl">{project.title}</h1>
              <p className="text-[#bdbaba] text-base font-light">{project.details}</p>

              <div className="flex items-center justify-between">
                <span>
                  <a href={project.live} target="_blank" className="underline">
                    Live Demo
                  </a>
                </span>
                <span>
                  <a href={project.github} target="_blank" className="underline">
                    Github Repository
                  </a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
