//Import UI
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="telephone"
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>424 293 945</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.link}>
          <Link href="/" passHref>
            Homepage
          </Link>
        </div>
        <a href="#products" className={styles.link}>
          Products
        </a>
        <a href="#products" className={styles.link}>
          Menu
        </a>
        <a href="/" className={styles.link}>
          J's Pizza
        </a>
        <a href="#footer" className={styles.link}>
          Events
        </a>
        <a href="#footer" className={styles.link}>
          Blog
        </a>
        <a href="#footer" className={styles.link}>
          Contact
        </a>
      </div>
      <div className={styles.item}>
        <Link href="/cart" passHref>
          <Image src="/img/cart.png" width="35" height="35" alt="cart" />
          <span className={styles.count}>{quantity}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
