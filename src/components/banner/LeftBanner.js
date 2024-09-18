import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiFigma, SiJavascript, SiCss3 } from "react-icons/si";

import { Link } from "react-scroll";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1XqSahzKzZJ60KbEI1DP93tpdE8jy0_C2/view?usp=drive_link", "_blank"); // Update this link with your actual resume URL
  };
  return (
    <div className="w-full lgl:w-6/10 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm <span className="text-designColor text-6xl capitalize">Gyandeep Yadav</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a passionate programmer with a knack for problem-solving and a love for web development.
          Always eager to learn and explore new technologies,
          I'm excited to take on opportunities that align with my skills and interests.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Gyandeep42" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="mailto:gyandeep.yadav@gmail.com">
              <span className="bannerIcon">
                <FaEnvelope />
              </span>
            </a>

            <a href="https://www.linkedin.com/in/gyandeep-yadav" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>

            <a href="tel:+919082422254">
              <span className="bannerIcon">
                <FaPhone />
              </span>
            </a>

          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>

      </div>
      <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between' >
        <button
          onClick={handleResumeClick}
          className='w-[40%] h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'
        >
          Resume
        </button>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='w-[40%] h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent flex justify-center items-center cursor-pointer'
        >
          Contact
        </Link>
      </div>
    </div>

  );
}

export default LeftBanner