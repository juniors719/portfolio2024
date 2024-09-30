import { useEffect, useState } from 'react';

import Card from "../../components/Card";

import styles from './Projetos.module.css';

const Projetos = () => {

    const [repositories, setRepositories] = useState([]);

    useEffect(
        () => {
            const buscarRepositorios = async () => {
                const reponse = await fetch('https://api.github.com/users/juniors719/repos?page=1&per_page=50');
                const data = await reponse.json();
                setRepositories(data);
            }
            buscarRepositorios();
        }, []
    )

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.projetos_lista}>
                        {
                            repositories.map(
                                (repository) => (
                                    <Card
                                        key={repository.id}
                                        name={repository.name}
                                        description={repository.description}
                                        html_url={repository.html_url}
                                    />
                                )
                            )
                        }
                    </section>
                ) : (
                    <p>Carregando...</p>
                )
            }
            
        </section>
    );
    }
export default Projetos;
