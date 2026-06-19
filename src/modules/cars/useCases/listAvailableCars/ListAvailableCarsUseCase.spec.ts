import { CarsRepositoryInMemory } from '@modules/cars/repositories/inMemory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all available car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car description',
      daily_rate: 110.0,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    console.log('available cars: ', cars);

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available car by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2 Jest',
      description: 'Car Jest description',
      daily_rate: 110.0,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand_jest',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car_brand_jest',
    });

    console.log('cars by brand:', cars);

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available car by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3 Jest',
      description: 'Car Jest description',
      daily_rate: 110.0,
      license_plate: 'DEF-1235',
      fine_amount: 40,
      brand: 'Car_brand_jest',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car3 Jest',
    });

    console.log('cars by name:', cars);

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available car by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car4 Jest',
      description: 'Car Jest description',
      daily_rate: 110.0,
      license_plate: 'DEF-1236',
      fine_amount: 40,
      brand: 'Car_brand_jest',
      category_id: '123456',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '123456',
    });

    console.log('cars by name:', cars);

    expect(cars).toEqual([car]);
  });
});
