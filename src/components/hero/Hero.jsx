import "./hero.css";
import Speech from "./Speech";
import {motion , useInView} from 'motion/react';
import Shape from "./Shape";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRef, useState } from "react";


const awardVariants = {
  initial : {
    x : -100,
    opacity:0,
  },
  animate : {
    x : 0,
    opacity:1,
    transition :{
    duration :1,
    staggerChildren : 0.2,
    },
  },

};

const followVariants = {
  initial : {
    y : -100,
    opacity:0,
  },
  animate : {
    y : 0,
    opacity:1,
    transition :{
    duration :1,
    staggerChildren : 0.2,
    }
  },

}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hsection left">
              <motion.h1 initial={{y:-100 , opacity :0}} animate={{y:0 , opacity :1}}  
              transition={{duration:1}}
              className="htitle">
                Hey There,
                <br/> 
                <span>I'm Riya!</span> 
                </motion.h1>

              <motion.div variants={awardVariants} 
              initial="initial"
              animate="animate"
              className="awards">
                <motion.h2 variants={awardVariants}>Frontend Developer</motion.h2>

                <motion.p variants={awardVariants}>"Bridging the gap between elegant design and efficient code. Frontend Developer with expertise in React, JavaScript, and problem-solving through DSA."</motion.p>

               <motion.div variants={awardVariants} className="awardList">
                {/* <motion.img variants={awardVariants} src="/award1.png" alt="" />
                <motion.img variants={awardVariants} src="/award2.png" alt="" />
                <motion.img variants={awardVariants} src="/award3.png" alt="" /> */}
  <a href="/RiyaSharmaResume.pdf" download="RiyaSharmaResume.pdf">
  <button className="download-btn">
 Download Resume
 <i className="fas fa-download"></i>
  </button>
 
</a>
               </motion.div>


              </motion.div>

              <motion.a animate={{y:[0,5] , opacity :[0,1,0]}} transition={{
                repeat : Infinity,
                duration :4,
                ease :"easeInOut",
              }}  href="#services" className="scroll">
{/* 
              <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
             <motion.path 
             animate ={{y:[0,5]}}
             transition={{
              repeat : Infinity,
              duration :4,
              ease :"easeInOut",
             }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg> */}

              </motion.a>
            </div>
            <div 
            className="hsection right">
             <motion.div 
             variants={followVariants} 
             initial="initial"
             animate ="animate"
             className="follow">
                <motion.a variants={followVariants} href="https://github.com/Riya-Sharma12" alt="">
                <img src="/instagram.png" alt=""/>
                </motion.a>
                <motion.a variants={followVariants}  href="https://www.linkedin.com/in/riya-sharma-837271295/" alt="">
                <img src="/facebook.png" alt=""/>
                </motion.a>
                <motion.a variants={followVariants}  href="https://leetcode.com/u/Riya_Sharma12/" alt="">
                <img src="/youtube.png" alt=""/>
                </motion.a>
                <motion.div className="followTextContainer">
                  <div className="followText">
                    MY PROFILES
                  </div>
                </motion.div>
             </motion.div>

             <Speech />
             <motion.a href="#contact" 
             animate={{
              x:[200,0],
              opacity :[0,1],
             }}
             transition={{
              duration :2,
             }}
             className="contactLink">
             <motion.div className="contactButton" 
             animate ={{
               rotate : [0,360]
             }}
             transition={{
              duration :10,
              repeat:Infinity,
              ease:"linear"
             }}
             >
             <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now .</textPath>
                <textPath href="#innerCirclePath" startOffset="44%">Contact Me .</textPath>
              </text>
            </svg>
            <div className="arrow">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
             </motion.div>
             </motion.a>
            </div>
            <div className="bg">
              <Canvas>
                <Suspense fallback="loading...">
                 <Shape />
                </Suspense>
                
              </Canvas>
              <div className="hImage">
                <img src="/hero.png" alt=""/>
              </div>
            </div>

        </div>
    );
};

export default Hero;



