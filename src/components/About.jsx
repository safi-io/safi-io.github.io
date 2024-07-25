import React from "react";
import DetailBar from "./DetailBar";
import { educationDetails, experinceDetails } from "../../utils/aboutDetails";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="maxWidth text-white px-5">
      {/* About Section */}
      <motion.h1
        className="mt-20 lg:text-5xl text-2xl font-medium"
        initial={{ x: "-7rem", opacity: "0.1" }}
        animate={{ x: 0, opacity: "1" }}
        transition={{ duration: 2, type: "spring" }}
      >
        About Me
      </motion.h1>
      <p className="mt-5 w-full lg:max-w-[70%] text-[#c3c0c0]">
        I am a passionate computer science student with a strong background in
        frontend development. I have successfully built and maintained several
        websites, increasing engagement rates. My goal is to become technology
        independent, with the ability to tackle challenges across various
        domains in the tech industry.
      </p>

      {/* Education Session Starts */}

      <motion.h1
        className="mt-7 lg:text-5xl text-2xl font-medium"
        initial={{ x: "-7rem", opacity: "0.1" }}
        animate={{ x: 0, opacity: "1" }}
        transition={{ duration: 2, type: "spring" }}
      >
        Education
      </motion.h1>

      {educationDetails.map((education, index) => (
        <DetailBar
          key={index}
          mainHeading={education.mainHeading}
          institute={education.institute}
          location={education.location}
          additionalInfo={education.additionalInfo}
          date={education.date}
        />
      ))}

      {/* Experince Section */}

      <motion.h1
        className="mt-7 lg:text-5xl text-2xl font-medium"
        initial={{ x: "-7rem", opacity: "0.1" }}
        animate={{ x: 0, opacity: "1" }}
        transition={{ duration: 2, type: "spring" }}
      >
        Experince
      </motion.h1>

      {experinceDetails.map((experince, index) => (
        <DetailBar
          key={index}
          mainHeading={experince.mainHeading}
          institute={experince.institute}
          location={experince.location}
          additionalInfo={experince.additionalInfo}
          date={experince.date}
        />
      ))}

      <div className="mb-20"></div>
    </section>
  );
}
