import { Request, Response } from "express";
import { carMakeStore } from "../store/carMake.store";

export const createCarMake = (req: Request, res: Response) => {
  const { country, brand } = req.body;
  const make = carMakeStore.create({ country, brand });
  res.status(201).json(make);
};

export const getAllCarMakes = (_: Request, res: Response) => {
  res.json(carMakeStore.findAll());
};

export const getCarMakeById = (req: Request, res: Response) => {
  const make = carMakeStore.findById(req.params.id);
  make ? res.json(make) : res.status(404).json({ message: "Not found" });
};

export const updateCarMake = (req: Request, res: Response) => {
  const updated = carMakeStore.update(req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).json({ message: "Not found" });
};

export const deleteCarMake = (req: Request, res: Response) => {
  const deleted = carMakeStore.delete(req.params.id);
  deleted ? res.status(204).send() : res.status(404).json({ message: "Not found" });
};