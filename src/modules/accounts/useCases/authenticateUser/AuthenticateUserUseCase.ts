import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

// import { AppError } from '../../../../errors/AppError';
import { AppError } from '@errors/AppError';
// import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    // 1. verificar se o usuário existe
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password Incorrect');
    }

    // 2. se existe verificar se a senha é correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password Incorrect');
    }

    // 3. Se a senha é correta, gerar o jsonwebtoken
    const token = sign({}, 'd24019bbb4171139788118109da4c0ad', {
      subject: user.id,
      expiresIn: '1d',
    });

    // 4. Retornar token gerado
    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
