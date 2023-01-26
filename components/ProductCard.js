//Import UI
import styles from "styles/ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt={pizza.img} width="250" height="250" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <p className={styles.price}>₱{pizza.prices[0]}</p>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default ProductCard;
