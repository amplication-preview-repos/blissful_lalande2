import { Milestone } from "../milestone/Milestone";
import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  milestones?: Array<Milestone>;
  name: string | null;
  startDate: Date | null;
  status?: "Option1" | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
