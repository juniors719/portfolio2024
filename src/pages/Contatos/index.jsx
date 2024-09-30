
// React-Icons
import { GoMail } from "react-icons/go";
import { BsInstagram, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

import styles from "./Contatos.module.css";

const Contatos = () => {
    return (
        <>
            <section className={styles.contatos}>
                <h2>Contatos</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre.</p>

                <div className={styles.icones}>
                    <a href="mailto:junior.silva@alu.ufc.br" target="_blank" rel="noopener noreferrer">
                        <GoMail className={styles.icone} />
                    </a>
                    <a href="https://www.instagram.com/juniorsilva.png/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className={styles.icone} />
                    </a>
                    <a href="https://wa.me/5588997433201" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp className={styles.icone} />
                    </a>
                    <a href="https://github.com/juniors719" target="_blank" rel="noopener noreferrer">
                        <BsGithub className={styles.icone} />
                    </a>
                    <a href="https://www.linkedin.com/in/junior-silva-748270273/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className={styles.icone} />
                    </a>
                </div>
            </section>
        </>
    );
    }
export default Contatos;
