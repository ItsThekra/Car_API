import { CarDealer } from "../models/carDealer.model";
import { randomUUID } from "crypto";

// MAP() = it's like a tep db to store the data
const carDealers: Map<string, CarDealer> = new Map();

// id المستخدم يدخل كل بيانات عدا  
//  randomUUID () راح يتم انشاءة عن طريق 
const create = (data: Omit<CarDealer, 'id'>): CarDealer => {
  const id = randomUUID();
  const dealer: CarDealer = { 
    id, 
    ...data // اختصار يجيب كل خصائص الاوبجكت مره وحده
};

  carDealers.set(id, dealer);
  return dealer;
};

// Array.from = return all carDealer in arr and store it in CarDealer[]
const findAll = (): CarDealer[] => {
  return Array.from(carDealers.values());
};

const findById = (id: string): CarDealer | undefined => {
  return carDealers.get(id);
};

const update = (id: string, data: Partial<Omit<CarDealer, 'id'>>): CarDealer | undefined => {
  const existing = carDealers.get(id);
  if (!existing) return undefined;

  const updated: CarDealer = {
    ...existing,
    ...data,
  };

  carDealers.set(id, updated);
  return updated;
};

const deleteDealer = (id: string): boolean => {
  return carDealers.delete(id);
};

export const carDealerStore = {
  create,
  findAll,
  findById,
  update,
  delete: deleteDealer,
};
