import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({ img, title, tech, descrip, repo, site}) {
    return(
        <div className={styles.card}>
            <a href={site}>
                <img src={img} alt=""/>
            </a>

            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong> {tech}</p>
                <p>{descrip}</p>

                <ButtonB text={"Acesse o repositório"} link={repo}/>
            </section>
        </div>
    )
}

export default Card