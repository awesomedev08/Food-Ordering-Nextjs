import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";

//Import components
import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ productList, admin }) {
  return (
    <>
      <Head>
        <title>J's PIZZA | Food ordering application</title>
        <meta name="description" content="Best Pizza Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      {admin && <span>Hello</span>}
      <ProductList productList={productList} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const myCookie = ctx.req?.cookies || "";
    let admin = false;

    if (myCookie.token === process.env.TOKEN) {
      admin = true;
    }

    const res = await axios.get("http://localhost:3000/api/products");
    return {
      props: {
        productList: res.data,
        admin,
      },
    };
  } catch (error) {
    return { props: { productList: [] } };
  }
};
