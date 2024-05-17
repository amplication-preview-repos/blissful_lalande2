import { Configuration } from "../configuration/Configuration";

export type Product = {
  configurations?: Array<Configuration>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
