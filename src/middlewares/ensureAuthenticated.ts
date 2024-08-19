import { Request, Response, NextFunction, request } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  // 1. verificar se o token foi enviado
  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  // 2. se foi enviado, desestructurar pegando apenas o token sem o Bearer (OBS: usar a função com o ESPAÇO como separador)
  const [, token] = authHeader.split(' ');

  // 3. uma vez com o token, verificar junto com a chave secreta se o token é valido, e caso sim, pegar do payload, usando desestruturação, a propriedade sub que é o id de usuario

  try {
    // const decoded = verify(token, 'd24019bbb4171139788118109da4c0ad');
    // console.log('decoded: ', decoded);
    const { sub: user_id } = verify(
      token,
      'd24019bbb4171139788118109da4c0ad',
    ) as IPayload;
    console.log('sub: ', user_id);

    // 4. verificar se esse id de usuário existe no BD
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists!', 401);
    }

    // Si existe passar o usuário na request
    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError('Invalid Token', 401);
  }
}
