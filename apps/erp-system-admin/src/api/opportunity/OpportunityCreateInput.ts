import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";

export type OpportunityCreateInput = {
  closeDate?: Date | null;
  lead?: LeadWhereUniqueInput | null;
  name?: string | null;
  value?: number | null;
};
