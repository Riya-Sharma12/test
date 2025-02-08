import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConstructsModelContainer from "./constructs/ConstructsModelContainer";
import CoderModelContainer from "./coder/CoderModelContainer";
import ReactModelContainer from "./react/ReactModelContainer";
import "./services.css";
import { motion, useInView } from "motion/react";
// import { motion } from "framer-motion";

import { useRef, useState } from "react";

const textVariants = {
   initial: {
     x: -100,
     y: -100,
     opacity: 0,
   },
   animate: {
     x: 0,
     y: 0,
     opacity: 1,
     transition: {
       duration: 1,
     },
   },
 };
 
 const listVariants = {
   initial: {
     x: -100,
     opacity: 0,
   },
   animate: {
     x: 0,
     opacity: 1,
     transition: {
       duration: 1,
       staggerChildren: 0.5,
     },
   },
 };

const services = [
   {
     id: 1,
     img: "/service1.png",
     title: "Programming Languages",
     counter: "C/C++ , Python , Java , MySql",
  
   },
   {
     id: 2,
     img: "/service2.png",
     title: "Frontend",
     counter: "HTML5 , CSS , JavaScript , Tailwind CSS",
     
     
   },
   {
     id: 3,
     img: "/service3.png",
     title: "Frameworks and Tools",
     counter: "React Js , Git , Github",
  
   },
   { 
      id: 4,
      img: "/service4.png",
      title: "CS Fundamentals",
      counter: "Problem Solving , DSA , Operating System , DBMS",
     
    },
 ];

const Services = () => {
   const [currentServiceId, setCurrentServiceId] = useState(1);
   const ref = useRef();
   const isInView = useInView(ref, { margin: "-200px" });
   return (
    <div className="services" ref={ref}>
    
     <div className="sSection left">
      <motion.h1
       variants={textVariants} initial="initial" animate={isInView ? "animate" : "initial"} className="sTitle">What I bring to the table?</motion.h1>
      <motion.div 
      variants={listVariants} initial="initial" animate={isInView ? "animate" : "initial"} 
      className="serviceList">
       
      {
         services.map((service)=>(
            <motion.div 
            variants={listVariants}
            className="service" key={service.id}
            onClick={() =>setCurrentServiceId(service.id)}
            >
               <div className="serviceIcon">
                  < img src = {service.img} alt=" " / >
               </div>
               <div className="serviceInfo">
                  <h2>{service.title}</h2>
                  <h3>{service.counter}</h3>
               </div>
            </motion.div>
         ))
      }

      </motion.div>
     </div>

     <div className="sSection right">
      {currentServiceId === 1 ? (<CoderModelContainer />) : currentServiceId === 2 ? (<ComputerModelContainer />) :
      currentServiceId === 3 ?
      (<ReactModelContainer />) :
      (<ConstructsModelContainer />)
}
      </div>

    </div>
   )
}


export default Services;