import styles from './Sobre.module.css';
import perfil from './images/perfil.jpg';

import html from './images/icon-html.svg';
import css from './images/icon-css.svg';
import js from './images/icon-js.svg';
import react from './images/icon-react.svg';
import node from './images/icon-node.svg';
import sql from './images/icon-sql.svg';

const Sobre = () => {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={perfil} alt="perfil" className={styles.perfil} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Djalma Júnior</span> <br /> <strong>Dev Full Stack</strong></p>
                    <br />
                    <p>Trabalho com desenvolvimento Web desde 2023 </p>
                    <p>Sou apaixonado por tecnologia e por resolver problemas através dela. </p>
                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                    com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do HTML" />
                    <img src={css} alt="Ícone do CSS" />
                    <img src={js} alt="Ícone do JavaScript" />
                    <img src={react} alt="Ícone do React" />
                    <img src={node} alt="Ícone do Node" />
                    <img src={sql} alt="Ícone do SQL" />
                </div>
            </div>

        </section>
    );
    }
export default Sobre;
