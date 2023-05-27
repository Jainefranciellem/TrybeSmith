import jwt from 'jsonwebtoken';
import { Token } from 'src/types/token';

const secret = process.env.JWT_SECRET || 'secret';

if (!secret) {
  throw new Error('lack JWT_SECRET');
}

const sign = (payload: Token): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

export default {
  sign,
};