import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OpportunityWhereInput = {
  closeDate?: DateTimeNullableFilter;
  id?: StringFilter;
  lead?: LeadWhereUniqueInput;
  name?: StringNullableFilter;
  value?: FloatNullableFilter;
};
