import "./App.css";
import Carrosel3 from "./components/Carrosel3";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import foto1 from './images/foto1.jpeg';
import foto2 from './images/foto2.jpeg';
import foto3 from './images/foto3.jpeg';
import foto4 from './images/foto4.jpeg';
import foto5 from './images/foto5.jpeg';
import foto6 from './images/foto6.jpeg';
import { IoIosHeart } from "react-icons/io";

function App() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts.filter((heart) => heart.y < window.innerHeight), // Remove corações que já saíram da tela
        {
          id: Math.random(),
          left: Math.random() * 100, // Posição horizontal aleatória
          size: Math.random() * 20 + 10, // Tamanho aleatório
          duration: Math.random() * 3 + 2, // Duração da animação
          opacity: Math.random() * 0.5 + 0.3, // Transparência aleatória entre 0.3 e 0.8
          y: 0, // Inicia do topo
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
    { src: foto5, title: "", description: "" },
    { src: foto6, title: "", description: "" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Contêiner para os corações que não afeta o layout principal */}
      <div className="hearts-container fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: "-10%", opacity: heart.opacity, x: `${heart.left}%` }}
            animate={{ y: "100vh", opacity: heart.opacity, x: `${heart.left + (Math.random() * 10 - 5)}%` }}
            transition={{ duration: heart.duration, ease: "linear" }}
            className="absolute text-red-500"
            style={{
              fontSize: `${heart.size}px`,
              left: `${heart.left}%`,
              opacity: heart.opacity,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
     
      {/* Componente do Carrossel */}
      <div className="relative z-10 w-full max-w-screen-md mx-auto">
        <Carrosel3 titulo="" videos={series} />
        
        
      </div>
    </div>
  );
}

export default App;