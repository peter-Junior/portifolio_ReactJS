import styles from './Skills.module.css'
import javascript from '../images/skills/javascript.svg'
import react from '../images/skills/react.svg'
import html from '../images/skills/html.svg'
import css from '../images/skills/css.svg'

function Skills() {
    return (
        <div className={styles.skill} id="Skills">
            <h1> Habilidades </h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript} alt=""/>
                <img src={html} alt=""/>
                <img src={css} alt=""/>
                <img src={react} alt=""/>
                <p>...with room for more...</p>
            </div>
        </div>
    )
}

export default Skills