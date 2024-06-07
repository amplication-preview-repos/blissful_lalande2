import { SortOrder } from "../../util/SortOrder";

export type ConfigurationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
