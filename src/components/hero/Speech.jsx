import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';

const Speech = () =>{
    return (
        <motion.div 
        animate={{ opacity: [0, 1] }}
        transition={{duration :1}}
        className="bubbleContainer">
            <div className="bubble">
            <TypeAnimation
      sequence={[
        1000,
        "Building scalable, user-friendly web applications with a problem-solving mindset",
        1000,
        "Frontend Developer with a deep understanding of DSA and modern frameworks",
        1000,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    />


            </div>
            <img src="/man.png" alt=""/>
        </motion.div>
    )
}

export default Speech;