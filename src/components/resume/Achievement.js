import React from "react";

import { certificateimg1, certificateimg2, certificateimg3, certificateimg4 } from "../../assets/index";


const Achievement = () => {
  return (



    <section
      id="projects"
      className="w-full py-20  border-b-black"
    >
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

      <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={certificateimg4}
              alt="src"
            />
          </div>
          <div className="ww-full mt-5 flex flex-col gap-6">
            <div>
              
              <h3 className="text-base uppercase text-designColor font-normal">
                  Research Paper
                </h3>
            </div>
          </div>
        </div>


      <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={certificateimg3}
              alt="src"
            />
          </div>
          <div className="ww-full mt-5 flex flex-col gap-6">
            <div>
              
              <h3 className="text-base uppercase text-designColor font-normal">
                  Web Development Crash Cource
                </h3>
            </div>
          </div>
        </div>
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={certificateimg2}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-6 ">
            <div>
              
              <h3 className="text-base uppercase text-designColor font-normal">
                  Data Mining
                </h3>
            </div>
          </div>
        </div>
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={certificateimg1}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              
              <h3 className="text-base p-5 uppercase text-designColor font-normal">
                  Data Analytics With Python
                </h3>
            </div>
          </div>
        </div>
        
        
        














      </div>
    </section>
   
  );
};

export default Achievement;
