import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { DatejsDateProvider } from './DateProvider/implementations/DayjsDateProvider';

container.registerSingleton<IDateProvider>(
  'DatejsDateProvider',
  DatejsDateProvider,
);
