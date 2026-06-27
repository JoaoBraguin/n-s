import "./App.css";
import Carrosel3 from "./components/Carrosel3";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import foto1 from './images/foto1.jpeg';
import foto2 from './images/foto2.jpeg';
import foto3 from './images/foto3.jpeg';
import foto4 from './images/foto4.jpeg';
// import foto5 from './images/foto5.jpeg';
// import foto6 from './images/foto6.jpeg';
// import foto7 from './images/foto7.jpeg';
import foto8 from './images/foto8.jpeg';

function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prev) => [
        ...prev.filter((s) => s.y < window.innerHeight),
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 3 + 2,
          opacity: Math.random() * 0.5 + 0.3,
          y: 0,
        },
      ]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const series = [
    { src: foto1, title: "", description: "" },
    { src: foto2, title: "", description: "" },
    { src: foto3, title: "", description: "" },
    { src: foto4, title: "", description: "" },
    // { src: foto5, title: "", description: "" },
    // { src: foto6, title: "", description: "" },
    // { src: foto7, title: "", description: "" },
    { src: foto8, title: "", description: "" },
  ];

  return (
    <div className="app-wrapper">
      {/* Estrelas de fundo */}
      <div className="hearts-container">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ y: "-10%", opacity: star.opacity, x: `${star.left}%` }}
            animate={{
              y: "100vh",
              opacity: star.opacity,
              x: `${star.left + (Math.random() * 10 - 5)}%`,
            }}
            transition={{ duration: star.duration, ease: "linear" }}
            className="heart-item"
            style={{ fontSize: `${star.size}px`, left: `${star.left}%` }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      {/* Carrossel centralizado */}
      <div className="carrosel-wrapper">
        <Carrosel3 titulo="" videos={series} />
      </div>
    </div>
  );
}

export default App;