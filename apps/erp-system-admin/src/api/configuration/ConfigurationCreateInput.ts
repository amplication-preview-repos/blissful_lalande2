import { ComponentCreateNestedManyWithoutConfigurationsInput } from "./ComponentCreateNestedManyWithoutConfigurationsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ConfigurationCreateInput = {
  components?: ComponentCreateNestedManyWithoutConfigurationsInput;
  name?: string | null;
  product?: ProductWhereUniqueInput | null;
};
