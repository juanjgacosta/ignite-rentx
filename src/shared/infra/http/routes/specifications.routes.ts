import { Router } from 'express';
import { ensureAdmin } from 'middlewares/ensureAdmin';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '@modules/cars/useCases/listSpecifications/ListSpecificationsController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

// import { ensureAuthenticated } from '../shared/infra/http/middlewares/ensureAuthenticated';
// import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
// import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationsController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle,
);

specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };
