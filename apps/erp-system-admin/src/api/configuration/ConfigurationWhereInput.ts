import { ComponentListRelationFilter } from "../component/ComponentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ConfigurationWhereInput = {
  components?: ComponentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
};
