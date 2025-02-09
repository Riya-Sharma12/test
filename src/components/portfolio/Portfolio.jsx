import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Bubble Sort Visualizer",
    desc: "Developed an interactive Bubble Sort visualizer using HTML Canvas and vanilla JavaScript, featuring an animated character to enhance user engagement. Implemented smooth animations and real-time sorting demonstrations for an intuitive learning experience.",
    link: "https://github.com/Riya-Sharma12/Sorting-Visualizer",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Laptop Price Prediction Model",
    desc: "Developed a laptop price prediction model using machine learning, leveraging regression algorithms to analyze specifications and pricing trends. Trained and deployed the model for accurate price estimation, enhancing decision-making for buyers and sellers.",
    link: "https://laptop-price-prediction-0qsj.onrender.com/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Personal Portfolio Website",
    desc: "Developed a dynamic personal portfolio using React and Three.js, featuring interactive 3D elements, smooth animations, and responsive design. Showcases projects, skills, and experience with an engaging and visually appealing UI.",
    link: "https://github.com/Riya-Sharma12/My-Portfolio/tree/main",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div
        className="pList"
        style={{ x: isMobile ? 0 : xTranslate }}
      >
        {!isMobile && (
          <div
            className="empty"
            style={{
              width: window.innerWidth - (ref.current?.getBoundingClientRect().left || 0),
            }}
          />
        )}
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      {!isMobile && (
        <div className="pProgress">
          <svg width="100%" height="100%" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#ddd"
              strokeWidth={20}
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#dd4c62"
              strokeWidth={20}
              style={{ pathLength: scrollYProgress }}
              transform="rotate(-90 80 80)"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Portfolio;