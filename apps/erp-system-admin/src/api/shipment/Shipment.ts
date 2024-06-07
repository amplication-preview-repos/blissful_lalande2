import { Inventory } from "../inventory/Inventory";

export type Shipment = {
  createdAt: Date;
  id: string;
  inventory?: Inventory | null;
  shipmentDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
