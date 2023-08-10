import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create(name: string, description: string): void;
  list(): Category[];
  findByName({ name, description }: ICreateCategoryDTO): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO };
