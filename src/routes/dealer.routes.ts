import { Router } from "express";
import {
  createCarDealer,
  getAllCarDealers,
  getCarDealerById,
  updateCarDealer,
  deleteCarDealer,
} from "../controllers/dealer.controller";

const router = Router();
router.route('/dealers')
    .get(getAllCarDealers)
    .post(createCarDealer);

router.route("/dealers/:id")
 .get(getCarDealerById)
 .put(updateCarDealer)
 .delete(deleteCarDealer);

export default router;