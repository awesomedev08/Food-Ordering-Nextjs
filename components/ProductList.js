//Import component
import ProductCard from "./ProductCard";

//Import UI
import Image from "next/image";
import styles from "styles/ProductList.module.css";

const ProductList = ({ productList }) => {
  return (
    <div id="products" className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore
        quas esse deleniti minima voluptates debitis, totam suscipit ipsa,
        nesciunt eligendi tempore consectetur vitae eveniet a illo veritatis eos
        officia.
      </p>
      <div className={styles.wrapper}>
        {productList.map((pizza) => {
          return <ProductCard key={pizza._id} pizza={pizza} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
