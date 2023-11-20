import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import menuHamburguer3 from '../images/skills/menuHamburguer3.jpg'

function Navbar() {
    return (
        <div>
            <div className={styles.navbar}>
                <ul>
                    <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                    <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                    <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                </ul>
                

                <ul>
                    <li><a href='https://www.instagram.com/pedroc_jr/'><FaInstagram size={30}/></a></li>
                    <li><a href='https://www.linkedin.com/in/junior-pedroso-949065166/'><FaLinkedin size={30}/></a></li>
                    <li><a href='https://github.com/peter-Junior'><FaGithub size={30}/></a></li>
                </ul>
            </div>
            <div  className={styles.sideBar}>
                <img src={menuHamburguer3} width={40} height={40} alt=""/>
                <div className={styles.listSideBar}>
                </div>

                <ul>
                    <li><a href='https://www.instagram.com/pedroc_jr/'><FaInstagram size={30}/></a></li>
                    <li><a href='https://www.linkedin.com/in/junior-pedroso-949065166/'><FaLinkedin size={30}/></a></li>
                    <li><a href='https://github.com/peter-Junior'><FaGithub size={30}/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar