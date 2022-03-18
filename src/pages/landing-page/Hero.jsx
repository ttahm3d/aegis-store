import HeroImage from "../../assets/HeroSection.svg";
import styles from "./LandingPage.module.css";

export default function () {
  return (
    <section className={styles.hero}>
      <div className="main-container">
        <div className={styles.hero__container}>
          <div className={styles.hero__text__container}>
            <div className={styles.hero__heading}>Aegis Store</div>
            <div className={styles.hero__sub__heading}>
              Dota 2 Merch and Gaming Accessories
            </div>
            <div className="pad-2-tb">
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
          <div className={styles.hero__image}>
            <img src={HeroImage} alt="Hero banner" />
          </div>
        </div>
      </div>
    </section>
  );
}
