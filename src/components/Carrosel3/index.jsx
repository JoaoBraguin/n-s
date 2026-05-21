import { useState, useEffect } from "react";
import style from './style.module.css';

export default function Carrosel3({ titulo, videos }) {
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndice((prev) => (prev + 1) % videos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [videos.length]);

    const item1 = videos[indice % videos.length];

    return (
        <div className={style.secaoCarrossel}>
            {/* Spotify */}
            <iframe
                className={style.iframe1}
                src="https://open.spotify.com/embed/track/1xOvhnH7iTN1ChsptsT8w8?utm_source=generator&theme=0"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Spotify music player"
            />



            <div className={style.carrossel}>
                {/* Foto */}
                <div className={style.carrosselItens}>
                    <div className={style.item}>
                        <img src={item1.src} alt="" />
                        {(item1.title || item1.description) && (
                            <div className={style.informacaoCarrossel}>
                                <h3>{item1.title}</h3>
                                <p>{item1.description}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Texto de amor */}
                <div className={style.eu}>
                    {/* <div className={style.sobre}>
                        <h2>Sobre Nós</h2>
                        <strong className={style.linha}>
                            _______________________________
                        </strong>
                    </div> */}
                    <div className={style.dec}>
                        <h1 className={style.feliz}>SOBRE NÓS ❤</h1>
                        <p>DOIS MESES DE NÓS</p>
                        <p>Muito obrigado por estar ao meu lado. Cada dia você me inspira a ser uma pessoa melhor.</p>
                        <p>Por me amar, cuidar de mim, cada sorriso seu me alegra a cada dia mais.</p>
                        <p>Quero ficar com você pra sempre!</p>
                        <div className={style.emvolta}>
                            <h1 className={style.final}>EU TE AMO ❤</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}