import { StringFilter } from "../../util/StringFilter";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ShipmentWhereInput = {
  id?: StringFilter;
  inventory?: InventoryWhereUniqueInput;
  shipmentDate?: DateTimeNullableFilter;
  status?: "Option1";
};
