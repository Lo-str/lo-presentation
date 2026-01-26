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
              <div className={styles.hobbyImg}>
                <div className={styles.text}>
                  <h2>Hobby</h2>
                  <p>Anything DIY. Too many DIY...</p>
                  <button type="button" className={styles.blockClose} onClick={closeCard}>
                    Close
                  </button>
                </div>

                <div className={styles.item1}>
                  <img src={`${import.meta.env.BASE_URL}media/moto.png`} alt="" />
                </div>
                <div className={styles.item2}>
                  <img src={`${import.meta.env.BASE_URL}media/candle.png`} alt="" />
                </div>
                <div className={styles.item3}>
                  <img src={`${import.meta.env.BASE_URL}media/pond.png`} alt="" />
                </div>
                <div className={styles.item15}>
                  <img src={`${import.meta.env.BASE_URL}media/painting.png`} alt="" />
                </div>
              </div>
            )}

            {activeCard === "fact" && (
              <div className={styles.factImg}>
                <div className={styles.text}>
                  <h2>Fun Fact</h2>
                  <p>I built my van and I aspire to become a cyborg.</p>
                  <button type="button" className={styles.blockClose} onClick={closeCard}>
                    Close
                  </button>
                </div>

                <div className={styles.item4}>
                  <img src={`${import.meta.env.BASE_URL}media/van-window.png`} alt="" />
                </div>
                <div className={styles.item5}>
                  <img src={`${import.meta.env.BASE_URL}media/van-vide.png`} alt="" />
                </div>
                <div className={styles.item6}>
                  <img src={`${import.meta.env.BASE_URL}media/van-semi.png`} alt="" />
                </div>
                <div className={styles.item16}>
                  <img src={`${import.meta.env.BASE_URL}media/cyborg.png`} alt="" />
                </div>
              </div>
            )}

            {activeCard === "skill" && (
              <div className={styles.skillImg}>
                <div className={styles.text}>
                  <h2>Skill</h2>
                  <p>
                    Dog whisperer
                    <br />
                    Well I do whisper, whether they understand or not is another story.
                  </p>
                  <button type="button" className={styles.blockClose} onClick={closeCard}>
                    Close
                  </button>
                </div>

                <div className={styles.item7}>
                  <img src={`${import.meta.env.BASE_URL}media/lilly.png`} alt="" />
                </div>
                <div className={styles.item8}>
                  <img src={`${import.meta.env.BASE_URL}media/dot.png`} alt="" />
                </div>
                <div className={styles.item9}>
                  <img src={`${import.meta.env.BASE_URL}media/kaolla.png`} alt="" />
                </div>
                <div className={styles.item10}>
                  <img src={`${import.meta.env.BASE_URL}media/decibel.png`} alt="" />
                </div>
              </div>
            )}

            {activeCard === "home" && (
              <div className={styles.homeImg}>
                <div className={styles.text}>
                  <h2>Home</h2>
                  <p>
                    I live in Färentuna, Stockholm County, with my partner and our two cats and dog:
                    Hamish aka "Michou", Kirke aka "Tits Maggie" and Ona or "Ounz banounz" if she likes
                    you enough.
                  </p>
                  <button type="button" className={styles.blockClose} onClick={closeCard}>
                    Close
                  </button>
                </div>

                <div className={styles.item11}>
                  <img src={`${import.meta.env.BASE_URL}media/onis.png`} alt="" />
                </div>
                <div className={styles.item12}>
                  <img src={`${import.meta.env.BASE_URL}media/michou.png`} alt="" />
                </div>
                <div className={styles.item13}>
                  <img src={`${import.meta.env.BASE_URL}media/idalo.png`} alt="" />
                </div>
                <div className={styles.item14}>
                  <img src={`${import.meta.env.BASE_URL}media/kiks.png`} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gouffre;
