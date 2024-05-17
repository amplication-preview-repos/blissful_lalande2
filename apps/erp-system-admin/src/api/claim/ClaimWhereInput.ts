import { ClaimTypeWhereUniqueInput } from "../claimType/ClaimTypeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClaimWhereInput = {
  claimType?: ClaimTypeWhereUniqueInput;
  createdDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  resolvedDate?: DateTimeNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
