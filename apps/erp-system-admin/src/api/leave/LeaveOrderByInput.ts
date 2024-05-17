import { SortOrder } from "../../util/SortOrder";

export type LeaveOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
