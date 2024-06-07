import { Project } from "../project/Project";

export type Task = {
  assignedTo: string | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  project?: Project | null;
  title: string | null;
  updatedAt: Date;
};
