import { Car } from "../models/car.model";
import { randomUUID } from "crypto";

const cars: Map<string, Car> = new Map();

const create = (data: Omit<Car, 'id'>): Car => {
  const id = randomUUID();
  const car: Car = { 
    id, 
    ...data 
};
  cars.set(id, car);
  return car;
};

const findAll = (): Car[] => {
     return Array.from(cars.values());
}

const findById = (id: string) => { 
    return cars.get(id);
}

const findByDealerId = (dealerId: string) =>  { 
    return Array.from(cars.values()).filter(c => c.dealerId === dealerId);
}
const findByCarMakeId = (carMakeId: string) => {
    return Array.from(cars.values()).filter(c => c.carMakeId === carMakeId);
} 

const update = (id: string, data: Partial<Omit<Car, 'id'>>) => {
  const existing = cars.get(id);
  if (!existing) return undefined;
  const updated = { ...existing, ...data };
  cars.set(id, updated);
  return updated;
};

const deleteCar = (id: string) => {
    return cars.delete(id);
}

export const carStore = {
  create,
  findAll,
  findById,
  findByDealerId,
  findByCarMakeId,
  update,
  delete: deleteCar,
};
