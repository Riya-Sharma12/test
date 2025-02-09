import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { debounce } from "lodash";

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

const isSmallScreen = window.innerWidth < 768;

const imgVariants = {
  initial: {
    opacity: isSmallScreen ? 1 : 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: isSmallScreen ? 0 : 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    opacity: isSmallScreen ? 1 : 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: isSmallScreen ? 0 : 0.5,
      ease: "easeInOut",
      staggerChildren: isSmallScreen ? 0 : 0.05,
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
        <img src={isInView ? item.img : ""} alt="" loading="lazy" />
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
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    const debouncedCalculateDistance = debounce(calculateDistance, 100);

    calculateDistance();

    window.addEventListener("resize", debouncedCalculateDistance);

    return () => {
      window.removeEventListener("resize", debouncedCalculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isSmallScreen ? 0 : -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
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
    </div>
  );
};

export default Portfolio;