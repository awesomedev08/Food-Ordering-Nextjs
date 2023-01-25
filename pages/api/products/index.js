import dbConnect from "../../../util/mongo";
import Product from "@/models/Product";

export default function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
  }
  if (method === "POST") {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
