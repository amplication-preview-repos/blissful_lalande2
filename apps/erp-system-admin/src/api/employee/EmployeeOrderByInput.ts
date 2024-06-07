import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  department?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  jobTitle?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  salary?: SortOrder;
  updatedAt?: SortOrder;
};
