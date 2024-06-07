import { Dashboard } from "../dashboard/Dashboard";

export type Report = {
  content: string | null;
  createdAt: Date;
  createdDate: Date | null;
  dashboard?: Dashboard | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
