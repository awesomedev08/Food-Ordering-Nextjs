import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

//Import UI
import styles from "styles/ProductId.module.css";
import Image from "next/image";

const ProductId = ({ product }) => {
  const [price, setPrice] = useState(product.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const diff = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);
    changePrice(diff);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras([...extras, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, extras, price, quantity }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.img} fill />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.name}>{product.title}</h1>
        <span className={styles.price}>₱{price}</span>
        <p className={styles.desc}>{product.desc}</p>
        <h2 className={styles.choice}>Choose the size</h2>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" alt="" fill />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" alt="" fill />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" alt="" fill />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h2 className={styles.choice}>Choose additional ingredients</h2>
        <div className={styles.ingredients}>
          {product.extraOptions.map((option) => {
            return (
              <div key={option._id} className={styles.option}>
                <input
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor={option.text}>{option.text}</label>
              </div>
            );
          })}
        </div>
        <div className={styles.add}>
          <input
            type="number"
            defaultValue={1}
            className={styles.quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://food-ordering-nextjs-blue.vercel.app/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

export default ProductId;
