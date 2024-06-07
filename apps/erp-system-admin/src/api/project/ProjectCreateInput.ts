import { MilestoneCreateNestedManyWithoutProjectsInput } from "./MilestoneCreateNestedManyWithoutProjectsInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  milestones?: MilestoneCreateNestedManyWithoutProjectsInput;
  name?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
