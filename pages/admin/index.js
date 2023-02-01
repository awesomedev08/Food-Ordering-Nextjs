//Import UI
import styles from "styles/Admin.module.css";
import Image from "next/image";

import axios from "axios";
import { useState } from "react";

const Admin = ({ orders, products }) => {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        "https://food-ordering-nextjs-blue.vercel.app/api/products/" + id
      );
      setProductList(productList.filter((pizza) => pizza._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(
        "https://food-ordering-nextjs-blue.vercel.app/api/orders/" + id,
        {
          status: currentStatus + 1,
        }
      );
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (error) {
      console.log(error);
    }
  };

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
            {productList.map((item) => (
              <tr key={item._id} className={styles.trTitle}>
                <td>
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </td>
                <td>{item._id}</td>
                <td>{item.title}</td>
                <td>₱{item.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
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
            {orderList.map((order) => (
              <tr key={order._id} className={styles.trTitle}>
                <td>{order._id}</td>
                <td>{order.customer}</td>
                <td>{order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className={styles.stageButton}
                    onClick={() => handleStatus(order._id)}
                  >
                    Next Stage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const myCookie = ctx.req?.cookies || "";

    if (myCookie.token !== process.env.TOKEN) {
      return {
        redirect: {
          destination: "/admin/login",
          permanent: false,
        },
      };
    }

    const productRes = await axios.get(
      "https://food-ordering-nextjs-blue.vercel.app/api/products"
    );
    const orderRes = await axios.get(
      "https://food-ordering-nextjs-blue.vercel.app/api/orders"
    );

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
