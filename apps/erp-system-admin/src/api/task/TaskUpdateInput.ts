import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  project?: ProjectWhereUniqueInput | null;
  title?: string | null;
};
