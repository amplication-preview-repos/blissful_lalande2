import { Lead } from "../lead/Lead";

export type Opportunity = {
  closeDate: Date | null;
  createdAt: Date;
  id: string;
  lead?: Lead | null;
  name: string | null;
  updatedAt: Date;
  value: number | null;
};
