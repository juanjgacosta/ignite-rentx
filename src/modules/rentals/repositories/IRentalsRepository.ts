import { Rental } from '../infra/typeorm/entities/Rental';

interface IRentalsRespository {
  findOpenRentalByCar(car_id: string): Promise<Rental | undefined>;
  findOpenRentalByUser(user_id: string): Promise<Rental | undefined>;
}

export { IRentalsRespository };
