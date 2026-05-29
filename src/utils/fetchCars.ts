import type { CarType } from "../types";
import { cars } from "../data/cars";

type Params = {
  limit?: number;
  fuel_type?:string;
  year?:string;
};

export const fetchCars = async ({ limit = 10 }: Params = {}): Promise<CarType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cars.slice(0, limit));
    }, 500);
  });
};