import styles from './Card.module.css';

import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const Card = ({ name, description, html_url }) => {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div  className={styles.card_icones}>
                    <FaHtml5 className={styles.card_icon} />
                    <FaCss3Alt className={styles.card_icon} />
                    <FaJs className={styles.card_icon} />
                    <FaReact className={styles.card_icon} />
                </div>
                <a href={html_url} target='_blank' rel='noopenner noreferrer' className={styles.card_botao}>
                    <BsArrowRight />
                </a>
            </div>
        </section>
    );
}

export default Card;
