//Import UI
import styles from "../styles/Slider.module.css";
import Image from "next/image";

const Slider = () => {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  return (
    <div className={styles.container}>
      <Image src="/img/arrowl.png" alt="left arrow" width="32" height="32" />
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          {images.map((item, index) => (
            <Image key={index} src={item} alt={item} width="32" height="32" />
          ))}
        </div>
      </div>
      <Image src="/img/arrowr.png" alt="right arrow" width="32" height="32" />
    </div>
  );
};

export default Slider;
