import { useRouter } from "next/router";

//Import UI
import styles from "../styles/Add.module.css";

const Add = ({ setClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={() => setClose(true)}>
          X
        </span>
        <h1>Add a new Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an Image</label>
          <input type="file" />
        </div>
      </div>
    </div>
  );
};

export default Add;
