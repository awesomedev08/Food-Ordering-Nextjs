//Import UI
import styles from "../styles/OrderDetail.module.css";
import Image from "next/image";

import { useState } from "react";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay ₱{total} after delivery</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name Surname</label>
          <input
            placeholder="John Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          ></input>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            placeholder="+639029384823"
            type="text"
            className={styles.input}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <input
            placeholder="OA St. 123 PH"
            type="text"
            className={styles.input}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
