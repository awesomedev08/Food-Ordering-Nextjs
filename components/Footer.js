//Import UI
import styles from "styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="img/bg.png" alt="footer background" fill />
      </div>
      <div className={styles.item}>
        <h2 className={styles.card}>J's PIZZA. WELL BAKED SLICE OF PIZZA.</h2>
        <div className={styles.card}>
          <h2 className={styles.title}>FIND OUR RESTAURANTS</h2>
          <p className={styles.text}>
            1212 R. P.T. La Trinidad Road #007.
            <span>La Trinidad, 1122</span>
            <span>(072) 424-9898</span>
          </p>
          <p className={styles.text}>
            1212 R. P.T. La Trinidad Road #007.
            <span>La Trinidad, 1122</span>
            <span>(072) 424-9898</span>
          </p>
          <p className={styles.text}>
            1212 R. P.T. La Trinidad Road #007.
            <span>La Trinidad, 1122</span>
            <span>(072) 424-9898</span>
          </p>
          <p className={styles.text}>
            1212 R. P.T. La Trinidad Road #007.
            <span>La Trinidad, 1122</span>
            <span>(072) 424-9898</span>
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>WORKING HOURS</h2>
          <p className={styles.text}>
            MONDAY - SATURDAY
            <span>10:00 - 24:00</span>
          </p>
          <p className={styles.text}>
            SUNDAY
            <span>10:00 - 21:00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
