import { ConfigurationUpdateManyWithoutProductsInput } from "./ConfigurationUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  configurations?: ConfigurationUpdateManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  price?: number | null;
};
