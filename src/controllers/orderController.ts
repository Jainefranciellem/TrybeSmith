import { Request, Response } from 'express';
import orderService from '../services/orderService';

async function getAll(req: Request, res: Response) {
  const getAllOrder = await orderService.getAll();
  console.log(getAllOrder.data);
  
  return res.status(200).json(getAllOrder.data);
}

export default {
  getAll,
};