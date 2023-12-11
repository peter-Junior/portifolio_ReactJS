import styles from './Card.module.css'
import ButtonB from './ButtonB'
import {useState} from 'react'

function Card({ img, title, tech, descrip, repo, site}) {

    const [info, setInfo] = useState(false)

    function infoOn() {
        setInfo(true)
    }

    function infoOff() {
        setInfo(false)
    }

    return(
        <div onMouseLeave={infoOff} className={styles.card}>
            <a onMouseEnter={infoOn} href={site}>
                <img src={img} alt=""/>
            </a>

            {info === true && (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia:</strong> {tech}</p>
                    <p>{descrip}</p>

                    <ButtonB text={"Acesse o repositório"} link={repo}/>
                </section>
            )}            
        </div>
    )
}

export default Card