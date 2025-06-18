import { CarMake } from "../models/carMake.model";
import { randomUUID } from "crypto";

const carMakes: Map<string, CarMake> = new Map();

const create = (data: Omit<CarMake, 'id'>): CarMake => {
  const id = randomUUID();
  const make: CarMake = { 
    id, 
    ...data 
};
  carMakes.set(id, make);
  return make;
};

const findAll = (): CarMake[] => {
    return Array.from(carMakes.values());
}

const findById = (id: string) => { 
    return carMakes.get(id);
}

const update = (id: string, data: Partial<Omit<CarMake, 'id'>>) => 
{
  const existing = carMakes.get(id);
  if (!existing) return undefined;
  const updated = { 
    ...existing, 
    ...data };
  carMakes.set(id, updated);
  return updated;
};

const deleteMake = (id: string) => { 
    return carMakes.delete(id);
}

export const carMakeStore = { 
    create, 
    findAll, 
    findById, 
    update,
    delete: deleteMake 
};
