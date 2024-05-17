import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
