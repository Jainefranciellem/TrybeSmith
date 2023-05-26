import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';

import { OrderResponse } from '../types/OrderResponse';

async function getAll():
Promise<ServiceResponse<OrderResponse[]>> {
  const getAllOrder = await OrderModel.findAll();
  
  const promise = getAllOrder.map(async ({ dataValues: { id, userId } }) => {
    const products = await ProductModel.findAll();
    const productIds = products
      .filter(({ dataValues: { orderId } }) => orderId === id)
      .map(({ dataValues }) => dataValues.id);
    const result = { id, userId, productIds };
    return result;
  });

  const order = await Promise.all(promise);
  return {
    status: 'SUCCESSFUL',
    data: order,
  };
}

export default {
  getAll,
};