import { useState } from "react";
import styles from "./Gouffre.module.scss";
import video from "../../../assets/video/bhole.mp4";
import img from "../../../assets/images/bhole-img.jpg";

function Gouffre() {
  const [activeCard, setActiveCard] = useState(null);

  const openCard = (key) => setActiveCard(key);
  const closeCard = () => setActiveCard(null);

  const [showpic, setShowPic] = useState(false)

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
                <p>Anything DIY. Too many DIY...</p>
                <img src={`${process.env.PUBLIC_URL}/media/moto.jpg`} alt="" />
                <img src={`${process.env.PUBLIC_URL}/media/candle.jpg`} alt="" />
                <img src={`${process.env.PUBLIC_URL}/media/pond.jpg`} alt="" />
              </>
            )}

            {activeCard === "fact" && (
              <>
                <h2>Fun Fact</h2>
                <p>I built my van and I aspire to become a cyborg.</p>
                  <img src={`${process.env.PUBLIC_URL}/media/van-window.jpg`}alt="" />
                  <img src={`${process.env.PUBLIC_URL}/media/van-vide.jpg`}alt="" />
                  <img src={`${process.env.PUBLIC_URL}/media/van-semi.jpg`}alt="" />
              </>
            )}

            {activeCard === "skill" && (
              <>
                <h2>Skill</h2>
                <p>Dog whisperer
                  <br />Well I do whisper, whether they understand or not is another story.</p>
                  <img src={`${process.env.PUBLIC_URL}/media/lilly.jpg`} alt="" />
                  <img src={`${process.env.PUBLIC_URL}/media/dot.jpg`} alt="" />
                  <img src={`${process.env.PUBLIC_URL}/media/kaolla.jpg`} alt="" />
                  <img src={`${process.env.PUBLIC_URL}/media/decibel.jpg`} alt="" />
                  <img src={`${process.env.PUBLIC_URL}/media/onis.jpg`} alt="" />
                  
              </>
            )}

            {activeCard === "home" && (
              <>
                <h2>Home</h2>
                <p>I live in Färentuna, Stockholm County, with my partner and our two cats: Hamish aka "Michou", Kirke aka "Tits Maggie" and Ona or "Ounz banounz" if she likes you enough.</p>
                <img src={`${process.env.PUBLIC_URL}/media/michou.jpg`} alt="" />
                <img src={`${process.env.PUBLIC_URL}/media/idalo.jpg`} alt="" />
                <img src={`${process.env.PUBLIC_URL}/media/kiks.jpg`} alt="" />
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
