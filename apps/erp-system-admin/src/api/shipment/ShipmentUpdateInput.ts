import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";

export type ShipmentUpdateInput = {
  inventory?: InventoryWhereUniqueInput | null;
  shipmentDate?: Date | null;
  status?: "Option1" | null;
};
