import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type InventoryWhereInput = {
  id?: StringFilter;
  productName?: StringNullableFilter;
  quantity?: IntNullableFilter;
  shipments?: ShipmentListRelationFilter;
  warehouse?: WarehouseWhereUniqueInput;
};
