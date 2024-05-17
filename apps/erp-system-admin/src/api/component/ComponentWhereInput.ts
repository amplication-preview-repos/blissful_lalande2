import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ComponentWhereInput = {
  componentType?: "Option1";
  configuration?: ConfigurationWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
