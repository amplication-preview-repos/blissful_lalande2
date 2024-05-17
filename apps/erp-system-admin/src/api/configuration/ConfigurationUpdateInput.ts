import { ComponentUpdateManyWithoutConfigurationsInput } from "./ComponentUpdateManyWithoutConfigurationsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ConfigurationUpdateInput = {
  components?: ComponentUpdateManyWithoutConfigurationsInput;
  name?: string | null;
  product?: ProductWhereUniqueInput | null;
};
