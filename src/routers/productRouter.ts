import express from 'express';

import productController from '../controllers/productController';
import valid from '../middlewares/ProductValidation';

const productRouter = express.Router();

productRouter.post('/', valid.validateName, valid.validatePrice, productController.create);
productRouter.get('/', productController.getAll);

export default productRouter;
