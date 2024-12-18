import { inject, injectable } from 'tsyringe';

// import { Category } from '../../entities/Category';
import { Category } from '@modules/cars/entities/Category';
// import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
