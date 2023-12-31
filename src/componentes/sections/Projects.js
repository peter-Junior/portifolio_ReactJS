import styles from './Projects.module.css'
import Card from '../elements/Card'
import LoginDNC from '../images/projects/LoginDNC.png'
import LPArquitDNC from '../images/projects/LPArquitDNC.png'
import LPEscolaDNC from '../images/projects/LPEscolaDNC.png'
import ButtonA from '../elements/ButtonA'
import resumeJunior from '../images/projects/resumeJunior.pdf'

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

            

            <Card
                site={'https://login-lp-dnc.vercel.app/'} 
                img={LoginDNC} 
                title={'Login DNC'} 
                tech={'HTML, CSS, Bootstrap, JavaScript'}
                descrip={'Utilizei conhecimentos de HTML e CSS para iniciar o projeto, e atualizei o mesmo usando conceitos de Bootstrap e JavaScript para inserir um melhor desfecho com um modal.'}
                repo='https://github.com/peter-Junior/LoginDNC'
            />

                       
            
            <Card
                site={'https://landin-page-escola-dnc.vercel.app/'} 
                img={LPEscolaDNC} 
                title={'Landin Page Escola DNC'} 
                tech={'HTML, CSS, JavaScript'}
                descrip={'Neste projeto, fui instruido pela escola à simular o que seria uma possível Landing Page de captura. Iniciei o projeto apenas com um forms ligado a uma API do Sheet Monkey. Atualizei o projeto com uma validação de formulário e um modal que indica que o processo foi finalizado.'}
                repo='https://github.com/peter-Junior/landinPage-EscolaDNC'
            />

            

            <Card
                site={'https://landin-page-escola-dnc.vercel.app/'} 
                img={LPEscolaDNC} 
                title={'Landin Page Escola DNC'} 
                tech={'HTML, CSS, JavaScript'}
                descrip={'Neste projeto, fui instruido pela escola à simular o que seria uma possível Landing Page de captura. Iniciei o projeto apenas com um forms ligado a uma API do Sheet Monkey. Atualizei o projeto com uma validação de formulário e um modal que indica que o processo foi finalizado.'}
                repo='https://github.com/peter-Junior/landinPage-EscolaDNC'
            />            

            
            <div className={styles.lastTitle}>
                <h1>Obrigado por ter vindo até aqui!</h1>
                <h3>Se gostou das habilidades e dos projetos apresentados aqui,</h3>
                <p>Não saia sem dar uma olhada no meu curriculo clicando no botão abaixo.</p>
                <ButtonA text="Ver curriculum" link={resumeJunior}/>
                <br/>
                <br/>
            </div>


            <hr/>
            
        </div>
    )
}

export default Projects