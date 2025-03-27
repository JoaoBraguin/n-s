import { useState, useEffect } from "react";
import style from './style.module.css';
import { IoIosHeart } from "react-icons/io";

export default function Carrosel3({ titulo, videos }) {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prev) => (prev + 1) % videos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [videos.length]);

  function ajustarIndice(valor) {
    return valor % videos.length;
  }

  const item1 = videos[ajustarIndice(indice)];

  return (
    <div className={style.secaoCarrossel}>
      <iframe className={style.iframe1} onPlay={true} src="https://open.spotify.com/embed/track/59qC8XPUyBWsmr9v3CQPGF?utm_source=generator" width="80%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>
      <div className={style.carrossel}>
        <div className={style.carrosselItens}>
          <div className={style.item}>
            <img src={item1.src} alt="" />
            <div className={style.informacaoCarrossel}>
              <h3>{item1.title}</h3>
              <p>{item1.description}</p>
            </div>
          </div>
        </div>
        <div className={style.eu}>
            <strong>Eu te amo há:</strong>
            <h3>1 ano, 10 meses</h3>
            <strong className={style.linha}>
              _______________________________
            </strong>
            <div className={style.dec}>
              <h2>Cada dia que passa meu coração transborda de amor por você.</h2>
              <h2>Cada sorriso seu me enche de alegria e ilumina meu dia, meu mundo.</h2>
              <h2>Seu Beijo seu Abraço me fazem ter certeza de que é você que eu quero pra minha vida, sempre ficar ao seu lado, enfrentando todos os problemas juntos e superando todos eles para ficarmos juntos.</h2>
              <h2>Muito Obrigado por me estar ao meu lado, cada dia você me inspira a ser uma pessoa melhor.</h2>
              <h1 className={style.final}>EU te amo para sempre ! ❤</h1>
              
              
              
            </div>
          </div>
      </div>
    </div>
  );
}
