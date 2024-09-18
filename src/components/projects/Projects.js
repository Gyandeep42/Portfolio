import React from 'react'
import Title from '../layouts/Title'
import { projectTWF, projectLMS, projectTD, projectFA, projectMG, projectUG } from "../../assets/index";

import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">


        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={projectTWF}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  The Wedding Frame
                </h3>
                <div className="flex gap-2">
                <a href="https://github.com/Gyandeep42/The-Wedding-Frame" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <BsGithub />
                    </span>
                  </a>
                  <a href="https://gyandeep42.github.io/The-Wedding-Frame/" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <FaGlobe />
                    </span>
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              The Wedding Frame is a stylish wedding template website built with HTML, CSS, and JavaScript. It helps you plan your wedding.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={projectLMS}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Library Management System
                </h3>
                <div className="flex gap-2">
                <a href="https://github.com/Gyandeep42/Library-management-system" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <BsGithub />
                    </span>
                  </a>
                  <a href="https://gyandeep42.github.io/Library-management-system/" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <FaGlobe />
                    </span>
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                This project is a simple yet powerful web application that helps manage a library's inventory...
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={projectTD}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  TODO List
                </h3>
                <div className="flex gap-2">
                <a href="https://github.com/Gyandeep42/TODO-List" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <BsGithub />
                    </span>
                  </a>
                  <a href="https://gyandeep42.github.io/TODO-List/" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <FaGlobe />
                    </span>
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              ToDo is a sleek List app built with HTML, CSS, and JavaScript. It lets you manage, edit, mark as done, or delete tasks, with a search function for quick access.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={projectMG}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Mafia - Game
                </h3>
                <div className="flex gap-2">
                <a href="https://github.com/Gyandeep42/Mafia-Game" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <BsGithub />
                    </span>
                  </a>
                  <a href="https://github.com/Gyandeep42/Mafia-Game" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <FaGlobe />
                    </span>
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              This multiplayer Mafia game lets players join with a game code, take roles, and vote to find the Mafia. The game ends when a win condition is met.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={projectUG}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  UNO - Game
                </h3>
                <div className="flex gap-2">
                  <a href="https://github.com/Gyandeep42/uno-game" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <BsGithub />
                    </span>
                  </a>
                  <a href="https://github.com/Gyandeep42/uno-game" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <FaGlobe />
                    </span>
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                This repository contains the backend server for a multiplayer Uno card game built using Node.js, Express, and MongoDB.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={projectFA}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Food Adda
                </h3>
                <div className="flex gap-2">
                <a href="https://github.com/Gyandeep42/Food-Adda" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <BsGithub />
                    </span>
                  </a>
                  <a href="https://gyandeep42.github.io/Food-Adda/" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <FaGlobe />
                    </span>
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Food Adda is resturant's web application built using the HTML , CSS ,Javascript. The application allows users to search disserent.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Projects