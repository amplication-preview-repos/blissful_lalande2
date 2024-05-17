import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  amount?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  expenseDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
