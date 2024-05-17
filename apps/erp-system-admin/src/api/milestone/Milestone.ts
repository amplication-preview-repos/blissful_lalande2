import { Project } from "../project/Project";

export type Milestone = {
  createdAt: Date;
  deadline: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  project?: Project | null;
  updatedAt: Date;
};
