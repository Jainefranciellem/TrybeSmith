import { ServiceResponse } from '../types/serviceResponse';
import ProductModel,
{ ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function create(product: ProductInputtableTypes):
Promise<ServiceResponse<ProductInputtableTypes>> {
  const createdProduct = await ProductModel.create(product);
  return {
    status: 'CREATED',
    data: createdProduct.dataValues,
  };
}

async function getAll():
Promise<ServiceResponse<Product[]>> {
  const getAllProduct = await ProductModel.findAll();
  return {
    status: 'SUCCESSFUL',
    data: getAllProduct.map((product) => product.dataValues),
  };
}

export default {
  create,
  getAll,
};