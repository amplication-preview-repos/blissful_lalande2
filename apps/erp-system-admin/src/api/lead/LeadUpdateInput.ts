import { OpportunityUpdateManyWithoutLeadsInput } from "./OpportunityUpdateManyWithoutLeadsInput";

export type LeadUpdateInput = {
  email?: string | null;
  name?: string | null;
  opportunities?: OpportunityUpdateManyWithoutLeadsInput;
  phone?: string | null;
  status?: "Option1" | null;
};
