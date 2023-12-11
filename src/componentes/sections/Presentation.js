import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'
import photo1 from '../images/profile/photo1.png'
import photo2 from '../images/profile/photo2.png'
import photo3 from '../images/profile/photo3.png'
import photo4 from '../images/profile/photo4.png'
import resumeJunior from '../images/projects/resumeJunior.pdf'

import { useEffect, useState } from 'react'

function Presentation() {

    const [text, setText] = useState('');
    const toRotate = ['Pedro Junior!    ', 'Dev. Front-End    ', 'esforçado buscando um espaço    '];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 50;
    const [delta, setDelta] = useState(50);

    useEffect(() => {
        let clock = setInterval(() => {
            toType()
        }, delta)
        return() => {clearInterval(clock)}
    }, [text]);

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }

    return (
        <div className={styles.presentation} id="Presentation">
            <div id="intro">
                <h4><strong>Você está no meu Portfolio</strong></h4>
                <h1 className={styles.intro}>Eu sou {text}</h1>
                <div className={styles.introDescription}>
                    <p>
                        Sou estudante de tecnologia na FATEC Baixada Santista - Rubens Lara
                        e atualmente atuo no ramo de Comércio Exterior como Husbandry Agent
                        na empresa Wilhelmsen Shipping Company. Decidi pelo campo da tecnologia pois usei
                        meu grande interesse pela área e juntei com o fato de ser um ramo de atuação
                        que já tem se consolidado como promissor há um bom tempo.
                        Gosto da ideia de solucionar problemas do cotidiano humano com a
                        utilização da tecnologia, ainda mais quando posso ajudar pessoas
                        aliado à ela.
                    </p>
                </div>
                <ButtonA text="Conecte-se comigo!" link='https://github.com/peter-Junior'/>
                <ButtonA text="Curriculum" link={resumeJunior}/>
            </div>

            <div className={styles.internal1}>
                <img width="300" src={photo2} alt="[ERRO]"/>
            </div>
        </div>
    )
}

export default Presentation