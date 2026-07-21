import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import style from './style.module.css';
import { FaHeart } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";

// Configuração padrão de reveal ao rolar a tela
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const DURACAO_SLIDE = 3000; // ms — mantenha igual ao valor usado no setInterval

// Data de início do relacionamento — fica fora do componente para não ser
// recriada a cada renderização (evita o warning de dependência do useEffect)
const DATA_INICIO = new Date(2026, 2, 9); // mês 2 = março (0-indexado)

// Componente reutilizável: mostra um número com efeito de "flip" quando o valor muda
function FlipNumber({ value }) {
    return (
        <span className={style.flipWrapper}>
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={value}
                    className={style.flipDigit}
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                    {value}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

// Componente reutilizável: revela um texto letra por letra (efeito "máquina de escrever")
const letraVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
};

function TextoRevelado({ texto, className, delayPorLetra = 0.25, cursor = true }) {
    return (
        <motion.span
            className={className}
            style={{ display: "inline-block" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ staggerChildren: delayPorLetra }}
        >
            {texto.split("").map((letra, i) => (
                <motion.span
                    key={i}
                    variants={letraVariants}
                    transition={{ duration: 0.25 }}
                    style={{ display: "inline-block" }}
                >
                    {letra === " " ? "\u00A0" : letra}
                </motion.span>
            ))}
            {cursor && <span className={style.cursorPiscante}>|</span>}
        </motion.span>
    );
}

export default function Carrosel3({ titulo, videos, momentos = [] }) {
    const [indice, setIndice] = useState(0);
    const [pausado, setPausado] = useState(false);
    const itemRef = useRef(null);
    const timelineRef = useRef(null);
    const [tempo, setTempo] = useState({ meses: 0, dias: 0, horas: 0 });

    // Acompanha o progresso de rolagem dentro da timeline para "preencher" a linha
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 75%", "end 60%"], // começa a encher quando o topo entra na tela, termina quando o fim se aproxima
    });

    useEffect(() => {
        function calcularTempo() {
            const agora = new Date();

            // Calcula meses completos entre as duas datas
            let meses = (agora.getFullYear() - DATA_INICIO.getFullYear()) * 12
                + (agora.getMonth() - DATA_INICIO.getMonth());

            // Se o dia atual ainda não chegou no dia do aniversário do mês, não conta o mês corrente
            if (agora.getDate() < DATA_INICIO.getDate()) {
                meses -= 1;
            }

            // Data do último "aniversário mensal" já completado
            const ultimoMarco = new Date(DATA_INICIO);
            ultimoMarco.setMonth(DATA_INICIO.getMonth() + meses);

            const diffMs = agora - ultimoMarco;
            const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diffMs / (1000 * 60 * 60)) % 24);

            setTempo({ meses, dias, horas });
        }

        calcularTempo();
        const interval = setInterval(calcularTempo, 60 * 1000); // atualiza a cada minuto
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (pausado) return; // não avança enquanto estiver congelado

        const interval = setInterval(() => {
            setIndice((prev) => (prev + 1) % videos.length);
        }, DURACAO_SLIDE);
        return () => clearInterval(interval);
    }, [videos.length, pausado]);

    // Detecta clique fora da foto para retomar o carrossel
    useEffect(() => {
        function handleClickFora(event) {
            if (itemRef.current && !itemRef.current.contains(event.target)) {
                setPausado(false);
            }
        }

        document.addEventListener("mousedown", handleClickFora);
        document.addEventListener("touchstart", handleClickFora);

        return () => {
            document.removeEventListener("mousedown", handleClickFora);
            document.removeEventListener("touchstart", handleClickFora);
        };
    }, []);

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
                        <strong><FlipNumber value={tempo.meses} /></strong>
                        <strong>MESES</strong>
                    </div>
                    <div className={style.circle}>
                        <strong><FlipNumber value={tempo.dias} /></strong>
                        <strong>DIAS</strong>
                    </div>
                    <div className={style.circle}>
                        <strong><FlipNumber value={tempo.horas} /></strong>
                        <strong>HORAS</strong>
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
                    src="https://open.spotify.com/embed/track/00j16DuIL1HPHjjLMNcYX0?utm_source=generator&theme=0&si=405a318c2e43425f" width="100%" frameBorder="0"
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

            {/*eu te amo*/}
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
                        <h1 className={style.final}>
                            <TextoRevelado texto="EU TE AMO ❤" />
                        </h1>
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
                        ref={itemRef}
                        className={`${style.item} ${pausado ? style.itemPausado : ""}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        onClick={() => setPausado((prev) => !prev)}
                    >
                        <img src={item1.src} alt="" />
                        {(item1.title || item1.description) && (
                            <div className={style.informacaoCarrossel}>
                                <h3>{item1.title}</h3>
                                <p>{item1.description}</p>
                            </div>
                        )}

                        {/* Barra de progresso: enche em 3s, pausa quando a foto está congelada */}
                        <div className={style.progressBarContainer}>
                            <div
                                key={`barra-${indice}`}
                                className={`${style.progressBarFill} ${pausado ? style.progressBarPausada : ""}`}
                                style={{ animationDuration: `${DURACAO_SLIDE}ms` }}
                            />
                        </div>
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
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className={style.timelineHeader}>
                    <GoClock />
                    <h1>Nossa História</h1>
                    <strong>Cada momento especial da nossa história</strong>
                </div>

                <div className={style.timeline} ref={timelineRef}>
                    <motion.div
                        className={style.timelineProgress}
                        style={{ scaleY: scrollYProgress }}
                    />
                    {momentos.map((momento, index) => (
                        <motion.div
                            key={index}
                            className={style.timelineItem}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
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