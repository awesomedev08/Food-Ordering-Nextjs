import { useState } from "react";

//Import UI
import styles from "../styles/Slider.module.css";
import Image from "next/image";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/featured2.png",
    "/img/featured3.png",
    "/img/featured.png",
  ];

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        onClick={() =>
          setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
      >
        <Image
          src="/img/arrowl.png"
          alt="left arrow"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((item, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image
              src={item}
              alt={item}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() =>
          setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
      >
        <Image
          src="/img/arrowr.png"
          alt="right arrow"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Slider;
