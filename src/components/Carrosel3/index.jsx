import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from './style.module.css';
import { FaHeart } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";

// Configuração padrão de reveal ao rolar a tela
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function Carrosel3({ titulo, videos, momentos = [] }) {
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
            {/*inicio*/}
            <motion.div
                className={style.start}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <FaHeart />
                <h1>Para a minha Gatinha</h1>
                <div className={style.calendario}>
                    <CiCalendar />
                    <p>Juntos desde 09 de março de 2026</p>
                </div>
                <div className={style.contagem}>
                    <div className={style.circle}>
                        <strong>-</strong>
                    </div>
                    <div className={style.circle}>
                        <strong>4</strong>
                        <strong>MESES</strong>
                    </div>
                    <div className={style.circle}>
                        <strong>-</strong>
                    </div>
                </div>
            </motion.div>

            {/*nossa musica*/}
            <motion.div
                className={style.music}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className={style.nossa}>
                    <p><FaHeart /> Nossa Música <FaHeart /></p>
                </div>
                <iframe
                    className={style.iframe1}
                    src="https://open.spotify.com/embed/track/1DLKuppSYytOuxhtI6KBGu?utm_source=generator&theme=0&si=f2b9e787aa8e4aed" width="100%" frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    title="Spotify music player"
                />
            </motion.div>

            <div className={style.line}>
                <hr />
                <FaHeart />
                <hr />
            </div>

            <motion.div
                className={style.eu}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className={style.dec}>
                    <p>QUATRO MESES DE NÓS</p>
                    <p>Você me ilumina todos os dias !</p>
                    <p>Quero ficar ao seu lado minha vida inteira</p>
                    <p>Muito Obrigado por tanto, você é a mulher que eu sempre sonhei !</p>
                    <p>Eu amo esse sorriso !</p>
                    <p>Amo nosso jeito, amo você por inteira!</p>
                    <div className={style.emvolta}>
                        <h1 className={style.final}>EU TE AMO ❤</h1>
                    </div>
                </div>
            </motion.div>

            <div className={style.line}>
                <hr />
                <FaHeart />
                <hr />
            </div>

            <motion.div
                className={style.carrossel}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className={style.momentos}>
                    <h1>Nossos Momentos</h1>
                    <strong>Memórias que guardamos no coração</strong>
                </div>
                <div className={style.carrosselItens}>
                    <motion.div
                        key={indice}
                        className={style.item}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <img src={item1.src} alt="" />
                        {(item1.title || item1.description) && (
                            <div className={style.informacaoCarrossel}>
                                <h3>{item1.title}</h3>
                                <p>{item1.description}</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </motion.div>

            <div className={style.line}>
                <hr />
                <FaHeart />
                <hr />
            </div>

            {/* ====== LINHA DO TEMPO ====== */}
            <motion.div
                className={style.timelineSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className={style.timelineHeader}>
                    <GoClock />
                    <h1>Nossa História</h1>
                    <strong>Cada momento especial da nossa história</strong>
                </div>

                <div className={style.timeline}>
                    {momentos.map((momento, index) => (
                        <motion.div
                            key={index}
                            className={style.timelineItem}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        >
                            <div className={style.backheart}>
                                <div className={style.timelineBackground}>
                                    <FaHeart className={style.timelineDot} />
                                </div>
                            </div>
                            <div className={style.timelineContent}>
                                <span className={style.timelineDate}>{momento.data}</span>
                                {momento.src && <img src={momento.src} alt={momento.title || ""} />}
                                {momento.title && <h3>{momento.title}</h3>}
                                {momento.description && <p>{momento.description}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* ====== FIM LINHA DO TEMPO ====== */}

        </div>
    );
}