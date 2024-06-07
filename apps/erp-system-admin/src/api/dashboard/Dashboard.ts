import { Report } from "../report/Report";

export type Dashboard = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  reports?: Array<Report>;
  updatedAt: Date;
};
