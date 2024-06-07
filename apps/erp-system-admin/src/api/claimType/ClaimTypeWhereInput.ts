import { ClaimListRelationFilter } from "../claim/ClaimListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClaimTypeWhereInput = {
  claims?: ClaimListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  typeName?: StringNullableFilter;
};
