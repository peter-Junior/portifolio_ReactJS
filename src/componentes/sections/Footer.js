import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/pedroc_jr/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/junior-pedroso-949065166/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/peter-Junior'><FaGithub size={30}/></a></li>
            </ul>

            <p>junior.pedroso234@gmail.com</p>

            <p>junior_pedroso@hotmail.co.uk</p>

            <p>Pedro Junior © 2023</p>
        </div>
    )
}

export default Footer