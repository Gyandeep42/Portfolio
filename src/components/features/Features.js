import React from 'react'
import {  FaDatabase , FaLaptopCode, FaChartLine, FaLayerGroup } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="I specialize in creating responsive, user-friendly interfaces using modern technologies like React, JavaScript, HTML, and CSS."
          icon={<FaLaptopCode />}
        />
        <Card
          title="Fullstack Development"
          des="Proficient in both frontend and backend development, I create complete web applications using technologies like React, Node.js, Express, and MongoDB."
          icon={<FaLaptopCode />}
        />
        <Card
          title="Custom Software Development"
          des="I specialize in creating tailored software solutions that meet specific needs of businesses or clients, including web applications, mobile apps and desktop applications."
          icon={<FaLaptopCode />}
        />
        <Card
          title="SEO Optimisation"
          des="I specialize in improving website visibility and traffic through search engine optimization (SEO) techniques, ensuring higher rankings on search engines like Google and Bing."
          icon={<FaChartLine />}
        />
        <Card
          title="Database Administration"
          des="I specialize in managing and maintaining database systems using advanced technologies like SQL, Oracle Database, MongoDB, and ensuring data integrity and security."
          icon={<FaDatabase />}
        />
        <Card
          title="UI/UX Design"
          des="I craft intuitive and engaging user interfaces with a focus on user experience, balancing aesthetics and functionality using design tools like Figma and Adobe XD."
          icon={<FaLayerGroup />}
        />
      </div>
    </section>
  );
}

export default Features