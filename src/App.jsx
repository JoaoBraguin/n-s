import "./App.css";
import Carrosel3 from "./components/Carrosel3";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import foto1 from './images/foto1.jpeg';
import foto2 from './images/foto2.jpeg';
// import foto3 from './images/foto3.jpeg';
// import foto4 from './images/foto4.jpeg';
// import foto5 from './images/foto5.jpeg';
// import foto6 from './images/foto6.jpeg';
// import foto7 from './images/foto7.jpeg';
// import foto8 from './images/foto8.jpeg';
import foto9 from './images/foto9.jpeg';
import foto10 from './images/foto10.jpeg';
import foto11 from './images/foto11.jpeg';
import foto12 from './images/foto12.jpeg';
import foto13 from './images/foto13.jpeg';
import foto14 from './images/foto14.jpeg';
import foto15 from './images/foto15.jpeg';
import foto16 from './images/foto16.jpeg';
import foto17 from './images/foto17.jpeg';
import foto18 from './images/foto18.jpeg';
import foto19 from './images/foto19.jpeg';
import foto20 from './images/foto20.jpeg';
import foto21 from './images/foto21.jpeg';
import foto22 from './images/foto22.jpeg';
import foto23 from './images/foto23.jpeg';
import foto24 from './images/foto24.jpeg';
import cartinhacinema from './images/cartinhacinema.jpeg'
import cartinhacoração from './images/cartinhacoração.jpeg'



function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => [
        ...prev.filter((i) => i.y < window.innerHeight),
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 3 + 2,
          opacity: Math.random() * 0.5 + 0.3,
          y: 0,
          emoji: Math.random() > 0.5 ? "❤️" : "⭐",
        },
      ]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const series = [
    { src: foto1, title: "", description: "" },
    { src: foto2, title: "", description: "" },
    // { src: foto3, title: "", description: "" },
    // { src: foto4, title: "", description: "" },
    // { src: foto5, title: "", description: "" },
    // { src: foto6, title: "", description: "" },
    // { src: foto7, title: "", description: "" },
    // { src: foto8, title: "", description: "" },
    { src: foto9, title: "", description: "" },
    { src: foto10, title: "", description: "" },
    { src: foto11, title: "", description: "" },
    { src: foto12, title: "", description: "" },
    { src: foto13, title: "", description: "" },
    { src: foto14, title: "", description: "" },
    { src: foto15, title: "", description: "" },
    { src: foto16, title: "", description: "" },
    { src: foto17, title: "", description: "" },
    { src: foto18, title: "", description: "" },
    { src: foto19, title: "", description: "" },
    { src: foto20, title: "", description: "" },
    { src: foto21, title: "", description: "" },
    { src: foto22, title: "", description: "" },
    { src: foto23, title: "", description: "" },
    { src: foto24, title: "", description: "" },
  ];

  const momentos = [
    { data: "27 de março de 2026", title: "Estávamos juntos na minha primeira prova de calculo🤍", description: "", src: foto1 },
    { data: "26 de abril de 2026", title: "Primeiro trabalho que fizemos juntos🤍", description: "", src: foto2 },
    { data: "7 de junho de 2026", title: "Primeira janta juntos🤍", description: "Primeira vez que fui na sua casa", src: foto14 },
    { data: "13 de junho de 2026", title: "Nosso primeiro jogo de Copa juntos🤍", description: "Brasil x Marrocos", src: foto13 },
    { data: "19 de junho de 2026", title: "Primeira missa juntos🤍", description: "Primeira Benção juntos também ", src: foto12 },
    { data: "24 de de junho de 2026", title: "Nosso segundo jogo De Copa juntos🤍", description: "Brasil x Escócia", src: foto11 },
    { data: "27 de junho de 2026", title: "Primeira festa junina juntos🤍", description: "Dia que conheceu minha família", src: foto10 },
    { data: "29 de junho de 2026", title: "Nosso terceiro jogo De Copa juntos🤍", description: "Brasil x Japão", src: foto9 },
    { data: "3 de julho de 2026", title: "Nosso primeiro Cinema juntos🤍", description: "Toy Story", src: foto20 },
    { data: "16 de julho de 2026", title: "Dia de Nossa Senhora do Carmo🤍", description: "", src: foto17 },
    { data: "17 de julho de 2026", title: "Nosso primeiro quitute juntos🤍", description: "Foto junto com o Chavinho | Dia 1", src: foto15 },
    { data: "17 de julho de 2026", title: "Nosso primeiro quitute juntos🤍", description: "Dia 1", src: foto16 },
    { data: "18 de julho de 2026", title: "Nosso primeiro quitute juntos🤍", description: "Dia 2", src: foto18 },
    { data: "26 de julho de 2026", title: "Pedido na Roda Gigante 🤍", description: "Oficialmente namorados 🤍", src: foto21 },
    { data: "26 de julho de 2026", title: "Dia Dos Brinquedos 🤍", description: "Dia 3", src: foto22 },
    { data: "26 de julho de 2026", title: " Montanha Russa 🤍", description: "Dia 3 ", src: foto23 },
    { data: "26 de julho de 2026", title: "Nosso pedido de namoro 🤍", description: "Nossas Alianças 🤍", src: foto24 },
   
    // adicione ou edite quantos momentos quiser
  ];

  // ⚠️ EXEMPLO/PLACEHOLDER — estou usando fotos que você já tem só pra você ver como fica o layout.
  // Quando sua namorada te mandar as cartinhas de verdade, troque o "src" pela foto/scan de cada uma
  // e ajuste "titulo", "data" e "transcricao" (transcricao é opcional — se remover, o botão
  // "Ler transcrição" simplesmente não aparece naquela cartinha).
  const cartinhasExemplo = [
    {
      titulo: "Nosso primeiro cinema juntos!🤍",
      data: "03/07/2026",
      src: cartinhacinema,
      transcricao: "Espero que esse seja o primeiro de infinitos cinemas que vamos fazer, um momento muito especial para mim, pois a pessoa que eu quero comigo para a vida está do meu lado. Obrigada por ser essa garota INCRÍVEL!",
    },
    {
      titulo: "💓",
      data: "12/06/2026",
      src: cartinhacoração,
      transcricao: "A vida é muito melhor com você! Eu te amo🤍 ",
    },
    // {
    //   titulo: "Passeio no parque",
    //   data: "22/07/2026",
    //   src: foto14,
    //   // transcricao é opcional — essa aqui não tem, então o botão "Ler transcrição" não aparece
    // },
    
  ];

  // ⚠️ EXEMPLO/PLACEHOLDER — ainda não temos o vídeo do pedido de namoro gravado.
  // Quando você tiver o arquivo .mp4, siga esses passos:
  //   1. Salve o vídeo em src/videos/ (crie essa pasta se não existir), ex: src/videos/pedido-namoro.mp4
  //   2. Importe no topo do arquivo, junto com as fotos:
  //        import pedidoNamoro from './videos/pedido-namoro.mp4';
  //   3. Troque "src: undefined" abaixo por "src: pedidoNamoro"
  //   4. Troque "capa: foto14" por uma foto/print que sirva de capa pro vídeo (ex: uma imagem sua e dela)
  
//lembrar de tirar o comentario da const e do video la no carrosel

  // const videoExemplo = {
  //   titulo: "O Dia Que Te Pedi em Namoro",
  //   subtitulo: "Um momento que vou guardar pra sempre",
  //   src: undefined, // troque por: pedidoNamoro (depois de importar o .mp4)
  //   capa: foto19,   // troque pela foto/print que vai servir de capa do vídeo
  //   data: "09 de março de 2026",
  //   duracao: "3:42",
  // };

  return (
    <div className="app-wrapper">
      {/* Corações e Estrelas de fundo */}
      <div className="hearts-container">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: "-10%", opacity: item.opacity, x: `${item.left}%` }}
            animate={{
              y: "100vh",
              opacity: item.opacity,
              x: `${item.left + (Math.random() * 10 - 5)}%`,
            }}
            transition={{ duration: item.duration, ease: "linear" }}
            className="heart-item"
            style={{ fontSize: `${item.size}px`, left: `${item.left}%` }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Carrossel centralizado */}
      <div className="carrosel-wrapper">
        <Carrosel3 titulo=""
         videos={series} momentos={momentos} cartinhas={cartinhasExemplo}
        //  video={videoExemplo}
          />
      </div>
    </div>
  );
}

export default App;