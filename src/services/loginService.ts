import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/serviceResponse';
import jwtUtil from '../utils/jwtUtil';

export type LoginServiceResponse = ServiceResponse<{ token: string }>;

async function login(username: string, password: string): Promise<LoginServiceResponse> {
  const user = await UserModel.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return {
      status: 'UNAUTHORIZED',
      data: {
        message: 'Username or password invalid',
      },
    };
  }

  const token = jwtUtil.sign({
    username: user.dataValues.username, password: user.dataValues.password });

  return {
    status: 'OK',
    data: {
      token,
    },
  };
}

export default { login };