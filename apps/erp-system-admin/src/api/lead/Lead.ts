import { Opportunity } from "../opportunity/Opportunity";

export type Lead = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  opportunities?: Array<Opportunity>;
  phone: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
