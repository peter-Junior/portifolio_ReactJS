import styles from './Projects.module.css'
import Card from '../elements/Card'
import LoginDNC from '../images/projects/LoginDNC.png'
import LPArquitDNC from '../images/projects/LPArquitDNC.png'

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1> Projetos </h1>

            <hr/>
                                  
            <Card 
                site={'https://dnc-landingpage-arquitetura.netlify.app/'} 
                img={LPArquitDNC} 
                title={'Página de Empresa de Arquitetura'} 
                tech={'HTML, CSS, JavaScript'}
                descrip={'Um dos meus primeiros projetos Front-End. Exemplo básico do que poderia ser uma página de captura de clientes para um empresa de arquitetura. O formulário está atrelado a uma planilha do google.docs guardando o contato dos clientes.'}
                repo='https://github.com/peter-Junior/Landing-Page-Arquitetura'                
            />

            <hr/>

            <Card
                site={'https://login-lp-dnc.vercel.app/'} 
                img={LoginDNC} 
                title={'Login DNC'} 
                tech={'HTML, CSS, Bootstrap, JavaScript'}
                descrip={'Utilizei conhecimentos de HTML e CSS para iniciar o projeto, e atualizei o mesmo usando conceitos de Bootstrap e JavaScript para inserir um melhor desfecho com um modal.'}
                repo='https://github.com/peter-Junior/LoginDNC'
            />

            <hr/>
            
            
            <Card/>

            <hr/>
            
        </div>
    )
}

export default Projects