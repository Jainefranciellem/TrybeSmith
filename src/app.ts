import express from 'express';
import productRouter from './routers/productRouter';
import orderRouter from './routers/orderRouter';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

export default app;
