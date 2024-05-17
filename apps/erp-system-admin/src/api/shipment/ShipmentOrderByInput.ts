import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inventoryId?: SortOrder;
  shipmentDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
