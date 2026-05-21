import { CarsRepositoryInMemory } from '@modules/cars/repositories/inMemory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it('Should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car name',
      description: 'Car description',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    expect(car).toHaveProperty('id');
  });

  it('Should not be able to create a car with exists license_plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car1',
        description: 'Car description',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'category',
      });

      await createCarUseCase.execute({
        name: 'Car2',
        description: 'Car description',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'category',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to create a car with available true', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Available',
      description: 'Car description',
      daily_rate: 100,
      license_plate: 'ABCD-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });
    console.log(car);
    expect(car.available).toBe(true);
  });
});
