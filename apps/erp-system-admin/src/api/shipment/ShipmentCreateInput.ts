import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";

export type ShipmentCreateInput = {
  inventory?: InventoryWhereUniqueInput | null;
  shipmentDate?: Date | null;
  status?: "Option1" | null;
};
