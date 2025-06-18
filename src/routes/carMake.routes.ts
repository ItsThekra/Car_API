import { Router } from "express";
import {
  createCarMake,
  getAllCarMakes,
  getCarMakeById,
  updateCarMake,
  deleteCarMake,
} from "../controllers/carMake.controller";

const router = Router();

router.route('/makes')
  .get(getAllCarMakes)
  .post(createCarMake);

router.route('/makes/:id')
  .get(getCarMakeById)
  .put(updateCarMake)
  .delete(deleteCarMake);

export default router;