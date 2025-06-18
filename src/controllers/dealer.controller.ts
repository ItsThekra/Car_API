import { Request, Response } from "express";
import { carDealerStore } from "../store/carDealers";


export const createCarDealer = (req: Request, res: Response) => {
  const { name, 
    email, 
    city } = req.body;
    
  const dealer = carDealerStore.create({ name, email, city });
  res.status(201).json(dealer);
};

export const getAllCarDealers = (_: Request, res: Response) => 
{
  res.json(carDealerStore.findAll());
};

export const getCarDealerById = (req: Request, res: Response) => {
  const dealer = carDealerStore.findById(req.params.id);
  dealer ? res.json(dealer) : res.status(404).json({ message: "Not found" });
};

export const updateCarDealer = (req: Request, res: Response) => {
  const updated = carDealerStore.update(req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).json({ message: "Not found" });
};

export const deleteCarDealer = (req: Request, res: Response) => {
  const deleted = carDealerStore.delete(req.params.id);
  deleted ? res.status(204).send() : res.status(404).json({ message: "Not found" });
};