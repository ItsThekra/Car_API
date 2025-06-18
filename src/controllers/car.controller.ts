import { Request, Response } from "express";
import { carStore } from "../store/car.store";

export const createCar = (req: Request, res: Response) => {
  const { 
    dealerId, 
    carMakeId, 
    name, 
    price, 
    year, 
    color, 
    wheelsCount } = req.body;

  const car = carStore.create({ 
    dealerId, 
    carMakeId,
     name, 
     price,
      year, 
      color, 
      wheelsCount });
      
  res.status(201).json(car);
};

export const getAllCars = (_: Request, res: Response) => {
  res.json(carStore.findAll());
};

export const getCarById = (req: Request, res: Response) => {
  const car = carStore.findById(req.params.id);
  car ? res.json(car) : res.status(404).json({ message: "Not found" });
};

export const getCarsByDealerId = (req: Request, res: Response) => {
  res.json(carStore.findByDealerId(req.params.dealerId));
};

export const getCarsByCarMakeId = (req: Request, res: Response) => {
  res.json(carStore.findByCarMakeId(req.params.carMakeId));
};

export const updateCar = (req: Request, res: Response) => {
  const updated = carStore.update(req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).json({ message: "Not found" });
};

export const deleteCar = (req: Request, res: Response) => {
  const deleted = carStore.delete(req.params.id);
  deleted ? res.status(204).send() : res.status(404).json({ message: "Not found" });
};
