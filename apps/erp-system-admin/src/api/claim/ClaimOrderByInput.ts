import { SortOrder } from "../../util/SortOrder";

export type ClaimOrderByInput = {
  claimTypeId?: SortOrder;
  createdAt?: SortOrder;
  createdDate?: SortOrder;
  customerId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  resolvedDate?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
