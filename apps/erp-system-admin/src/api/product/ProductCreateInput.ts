import { ConfigurationCreateNestedManyWithoutProductsInput } from "./ConfigurationCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  configurations?: ConfigurationCreateNestedManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  price?: number | null;
};
