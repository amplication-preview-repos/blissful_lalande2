import { ShipmentCreateNestedManyWithoutInventoriesInput } from "./ShipmentCreateNestedManyWithoutInventoriesInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type InventoryCreateInput = {
  productName?: string | null;
  quantity?: number | null;
  shipments?: ShipmentCreateNestedManyWithoutInventoriesInput;
  warehouse?: WarehouseWhereUniqueInput | null;
};
