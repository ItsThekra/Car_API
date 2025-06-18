
import { Router } from "express";

import {
  createCar,
  getAllCars,
  getCarById,
  getCarsByDealerId,
  getCarsByCarMakeId,
  updateCar,
  deleteCar,
} from "../controllers/car.controller";

const router = Router();

router.route('/cars')
  .get(getAllCars)
  .post(createCar);

router.route('/cars/:id')
  .get(getCarById)
  .put(updateCar)
  .delete(deleteCar);

router.route('/cars/dealer/:dealerId').get(getCarsByDealerId);

router.route('/cars/make/:carMakeId').get(getCarsByCarMakeId);


export default router;

