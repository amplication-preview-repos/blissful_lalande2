import { Shipment } from "../shipment/Shipment";
import { Warehouse } from "../warehouse/Warehouse";

export type Inventory = {
  createdAt: Date;
  id: string;
  productName: string | null;
  quantity: number | null;
  shipments?: Array<Shipment>;
  updatedAt: Date;
  warehouse?: Warehouse | null;
};
