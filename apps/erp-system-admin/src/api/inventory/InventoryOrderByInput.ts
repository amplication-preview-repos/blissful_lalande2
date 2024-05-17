import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productName?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
  warehouseId?: SortOrder;
};