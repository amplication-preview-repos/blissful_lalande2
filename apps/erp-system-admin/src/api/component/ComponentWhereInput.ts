import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ComponentWhereInput = {
  componentType?: "Option1";
  compType?: "Option1";
  configRelation?: StringNullableFilter;
  configuration?: ConfigurationWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
