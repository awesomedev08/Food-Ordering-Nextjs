import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
      // console.log(products);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
