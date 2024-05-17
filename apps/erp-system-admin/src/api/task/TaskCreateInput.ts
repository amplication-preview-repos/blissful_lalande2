import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  assignedTo?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  project?: ProjectWhereUniqueInput | null;
  title?: string | null;
};
