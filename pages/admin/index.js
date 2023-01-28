//Import UI
import styles from "styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";

const Admin = ({ orders, products }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.trTitle}>
              <td>
                <Image
                  src="/img/pizza.png"
                  width={50}
                  height={50}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </td>
              <td>Pizza Id</td>
              <td>Pizza Title</td>
              <td>₱499</td>
              <td>
                <button className={styles.button}>Edit</button>
                <button className={styles.button}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.trTitle}>
              <td>213213213213</td>
              <td>John Doe</td>
              <td>Pizza Name</td>
              <td>Paid</td>
              <td>Preparing</td>
              <td>
                <button className={styles.stageButton}>Next Stage</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const productRes = await axios.get("http://localhost:3000/api/products");
    const orderRes = await axios.get("http://localhost:3000/api/orders");

    return {
      props: { products: productRes.data, orders: orderRes.data },
    };
  } catch (error) {
    return {
      props: { products: [], orders: [] },
    };
  }
};

export default Admin;
