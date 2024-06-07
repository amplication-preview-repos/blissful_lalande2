import { ShipmentUpdateManyWithoutInventoriesInput } from "./ShipmentUpdateManyWithoutInventoriesInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type InventoryUpdateInput = {
  productName?: string | null;
  quantity?: number | null;
  shipments?: ShipmentUpdateManyWithoutInventoriesInput;
  warehouse?: WarehouseWhereUniqueInput | null;
};
