import styles from "./Home.module.scss"

function Home() {

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1></h1>
            </div>
            <section className={styles.hero}>
                <div className={styles.eclipseStack}>
                    
                    {/* OG */}
                    <svg className={`
                        ${styles.layer} ${styles.layerOG}
                        `} viewBox="0 0 800 800">
                        <defs>
                            <filter id="eclipseShadowOG">
                                <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="5" result="noise" />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
                                <feGaussianBlur stdDeviation="1.5" />
                            </filter>
                        </defs>
                        <circle
                            cx="400"
                            cy="400"
                            r="200"
                            fill="black"
                            stroke="white"
                            strokeWidth="3"
                            filter="url(#eclipseShadowOG)"
                        />
                    </svg>

                    {/* RED */}
                    <svg className={`
                        ${styles.layer} ${styles.layerRed}
                        `} viewBox="0 0 800 800">
                        <defs>
                            <filter id="eclipseShadowRed">
                                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" result="noise" />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" />
                                {/* <feGaussianBlur stdDeviation="8" /> */}
                            </filter>
                        </defs>
                        <circle
                            cx="400"
                            cy="400"
                            r="200"
                            fill="black"
                            stroke="black"
                            strokeWidth="2"
                            filter="url(#eclipseShadowRed)"
                        />
                    </svg>

                    {/* BLUE */}
                    <svg className={`
                        ${styles.layer} ${styles.layerBlue}
                        `} viewBox="0 0 800 800">
                        <defs>
                            <filter id="eclipseShadowBlue">
                                <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" result="noise" />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
                                {/* <feGaussianBlur stdDeviation="8" /> */}
                            </filter>
                        </defs>
                        <circle
                            cx="400"
                            cy="400"
                            r="200"
                            fill="black"
                            stroke="black"
                            strokeWidth="2"
                            filter="url(#eclipseShadowBlue)"
                        />
                    </svg>
                </div>
            </section>
        </div>
    )
}

export default Home