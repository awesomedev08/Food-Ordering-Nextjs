import { useState } from "react";

//Import UI
import styles from "styles/ProductId.module.css";
import Image from "next/image";

const ProductId = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [399, 499, 599],
    desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  };
  console.log(pizza.price[0]);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} fill />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.name}>{pizza.name}</h1>
        <span className={styles.price}>₱{pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h2 className={styles.choice}>Choose the size</h2>
        <div className={styles.sizes}>
          <div className={styles.size}>
            <Image src="/img/size.png" alt="" fill />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size}>
            <Image src="/img/size.png" alt="" fill />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size}>
            <Image src="/img/size.png" alt="" fill />
            <span className={styles.number}>Large</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
