import styles from "./Home.module.scss"

function Home() {

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1></h1>
            </div>
            <div className={styles.hero}>
                <div className={styles.eclipse}></div>
            </div>
        </div>
    )
}

export default Home