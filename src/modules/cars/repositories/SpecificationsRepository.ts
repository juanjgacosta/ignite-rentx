import { Specification } from '../model/Specification';
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  create({ name, description }: ICreateSpecificationsDTO): void {
    throw new Error('Method not implemented.');
  }
  list(): Specification[] {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): Specification {
    throw new Error('Method not implemented.');
  }
}

export { SpecificationsRepository };
