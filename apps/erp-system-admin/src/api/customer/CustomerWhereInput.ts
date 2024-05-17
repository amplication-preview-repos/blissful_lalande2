import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClaimListRelationFilter } from "../claim/ClaimListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  claims?: ClaimListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
