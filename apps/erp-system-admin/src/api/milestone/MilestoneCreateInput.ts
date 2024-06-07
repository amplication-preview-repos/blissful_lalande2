import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type MilestoneCreateInput = {
  deadline?: Date | null;
  description?: string | null;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
