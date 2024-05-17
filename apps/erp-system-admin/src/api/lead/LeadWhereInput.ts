import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OpportunityListRelationFilter } from "../opportunity/OpportunityListRelationFilter";

export type LeadWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  opportunities?: OpportunityListRelationFilter;
  phone?: StringNullableFilter;
  status?: "Option1";
};
