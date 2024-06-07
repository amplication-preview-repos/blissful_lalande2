import { OpportunityCreateNestedManyWithoutLeadsInput } from "./OpportunityCreateNestedManyWithoutLeadsInput";

export type LeadCreateInput = {
  email?: string | null;
  name?: string | null;
  opportunities?: OpportunityCreateNestedManyWithoutLeadsInput;
  phone?: string | null;
  status?: "Option1" | null;
};
