import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel,
{ ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';

async function create(product: ProductInputtableTypes):
Promise<ServiceResponse<ProductInputtableTypes>> {
  const createdProduct = await ProductModel.create(product);
  return {
    status: 'CREATED',
    data: createdProduct.dataValues,
  };
}

async function getAll():
Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const getAllProduct = await ProductModel.findAll();
  return {
    status: 'SUCCESSFUL',
    data: getAllProduct,
  };
}

export default {
  create,
  getAll,
};