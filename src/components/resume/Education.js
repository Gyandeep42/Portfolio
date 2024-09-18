import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MCA (Master of Computer Applications)"
            subTitle="University of Mumbai (2022 - 2024)"
            result="8.10/10"
            
          />
          <ResumeCard
            title="BSc in Information Technology"
            subTitle="University of Mumbai (2019 - 2022)"
            result="9.45/10"
            
          />
          <ResumeCard
            title="Higher Secondary Certificate"
            subTitle="Nirmala Memorial Foundation College (2019)"
            result="55.54%"
            
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Pal Rajendra High School (2017)"
            result="79.00%"
           
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="PMKVY Skill Center(2017 - Present)"
            result="Mumbai"
            des="During my full-time internship, I worked on developing multiple user-friendly 
            and dynamic web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
             I was responsible for creating tailored user and admin interfaces, implementing features 
             for uploading, deleting, and updating content, and ensuring smooth content management 
             across various projects."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
