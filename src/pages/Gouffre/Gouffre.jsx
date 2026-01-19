import { useState } from "react";
import styles from "./Gouffre.module.scss";
import video from "../../../assets/video/bhole.mp4";
import img from "../../../assets/images/bhole-img.jpg";

function Gouffre() {
  const [activeCard, setActiveCard] = useState(null);

  const openCard = (key) => setActiveCard(key);
  const closeCard = () => setActiveCard(null);

  return (
    <div className={styles.container}>
      <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={img}
      >
        <source src={video} type="video/mp4" />
      </video>

      <article className={styles.cards}>
        <button type="button" className={styles.hobby} onClick={() => openCard("hobby")}>
          <p>constexpr</p>
        </button>

        <button type="button" className={styles.fact} onClick={() => openCard("fact")}>
          <p>std::cout</p>
        </button>

        <button type="button" className={styles.skill} onClick={() => openCard("skill")}>
          <p>def</p>
        </button>

        <button type="button" className={styles.home} onClick={() => openCard("home")}>
          <p>:root</p>
        </button>
      </article>

      {activeCard && (
        <div className={styles.block} onClick={closeCard}>
          <div className={styles.tiles} onClick={(e) => e.stopPropagation()}>
            {activeCard === "hobby" && (
              <>
                <h2>Hobby</h2>
                <p>Anything DIY.
                  <br />Making, fixing, modifying, learning by doing.</p>
              </>
            )}

            {activeCard === "fact" && (
              <>
                <h2>Fun Fact</h2>
                <p>I’m passionate by human augmentation,
                  <br />using technology as a way to extend
                  <br />everyday capability.</p>
              </>
            )}

            {activeCard === "skill" && (
              <>
                <h2>Skill</h2>
                <p>Woodworking.
                  <br />Working with material, structure, and precision.</p>
              </>
            )}

            {activeCard === "home" && (
              <>
                <h2>Home</h2>
                <p>Färentuna, Stockholm County.</p>
              </>
            )}

            <button type="button" className={styles.blockClose} onClick={closeCard}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gouffre;
