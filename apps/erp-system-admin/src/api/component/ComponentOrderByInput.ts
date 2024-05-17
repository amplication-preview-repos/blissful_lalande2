import { SortOrder } from "../../util/SortOrder";

export type ComponentOrderByInput = {
  componentType?: SortOrder;
  configurationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
