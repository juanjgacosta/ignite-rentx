import { inject, injectable } from 'tsyringe';

// import { Specification } from '../../entities/Specification';
import { Specification } from '@modules/cars/entities/Specification';
// import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}
  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
