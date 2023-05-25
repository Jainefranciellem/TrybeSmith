import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

async function create(product: ProductInputtableTypes):
Promise<ServiceResponse<ProductInputtableTypes>> {
  const createdProduct = await ProductModel.create(product);
  return {
    status: 'CREATED',
    data: createdProduct.dataValues,
  };
}

export default {
  create,
};