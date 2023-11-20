import styles from './ButtonA.module.css'

function ButtonA({text}) {
    return (
        <div>
            <a href='https://github.com/peter-Junior'>
                <button className={styles.btn}> {text} </button>
            </a>
        </div>
    )
}

export default ButtonA