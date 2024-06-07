import { MilestoneUpdateManyWithoutProjectsInput } from "./MilestoneUpdateManyWithoutProjectsInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  milestones?: MilestoneUpdateManyWithoutProjectsInput;
  name?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
