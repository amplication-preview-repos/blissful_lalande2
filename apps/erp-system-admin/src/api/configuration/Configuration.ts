import { Component } from "../component/Component";
import { Product } from "../product/Product";

export type Configuration = {
  components?: Array<Component>;
  createdAt: Date;
  id: string;
  name: string | null;
  product?: Product | null;
  updatedAt: Date;
};
