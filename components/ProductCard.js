//Import UI
import styles from "styles/ProductCard.module.css";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="250" height="250" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <p className={styles.price}>₱499</p>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum?
      </p>
    </div>
  );
};

export default ProductCard;
