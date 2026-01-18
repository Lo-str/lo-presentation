import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Home.module.scss"

function Home() {
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()
  const redirectTimerRef = useRef(null)

  const handleClick = () => {
    if (isClicked) return

    setIsClicked(true)

    redirectTimerRef.current = window.setTimeout(() => {
      navigate("/Gouffre")
    }, 12000)
  }

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={`${styles.eclipseStack} ${isClicked ? styles.isClicked : ""}`}>
          <svg className={`${styles.layer} ${styles.layerOG}`} viewBox="0 0 800 800">
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
              onClick={handleClick}
              style={{ cursor: "pointer", pointerEvents: "all" }}
            />
          </svg>

          <svg className={`${styles.layer} ${styles.layerWhite}`} viewBox="0 0 800 800">
            <defs>
              <filter id="eclipseShadowWhite">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" />
              </filter>
            </defs>
            <circle
              cx="400"
              cy="400"
              r="200"
              fill="black"
              stroke="white"
              strokeWidth="2"
              filter="url(#eclipseShadowWhite)"
            />
          </svg>

          <svg className={`${styles.layer} ${styles.layerRed}`} viewBox="0 0 800 800">
            <defs>
              <filter id="eclipseShadowRed">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" />
              </filter>
            </defs>
            <circle
              cx="400"
              cy="400"
              r="200"
              fill="black"
              stroke="red"
              strokeWidth="4"
              filter="url(#eclipseShadowRed)"
            />
          </svg>

          <svg className={`${styles.layer} ${styles.layerBlue}`} viewBox="0 0 800 800">
            <defs>
              <filter id="eclipseShadowBlue">
                <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
              </filter>
            </defs>
            <circle
              cx="400"
              cy="400"
              r="200"
              fill="black"
              stroke="cyan"
              strokeWidth="4"
              filter="url(#eclipseShadowBlue)"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}

export default Home
