import { parse as csvParse } from 'csv-parse';
import fs from 'node:fs';
import { inject, injectable } from 'tsyringe';

// import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}
@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository,
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          // console.log(line);
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    // console.log(file);
    const categories = await this.loadCategories(file);
    // console.log(categories);
    categories.map(async (category) => {
      const { name, description } = category;

      const categoryExists = await this.categoriesRepository.findByName(name);

      if (!categoryExists) {
        await this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
