import { Request, Response } from 'express';
import productService from '../services/productService';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const product = await productService.create({ name, price, orderId });

  return res.status(201).json(product.data);
}

export default {
  create,
};