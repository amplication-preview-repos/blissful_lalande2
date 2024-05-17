import { ArticleListRelationFilter } from "../article/ArticleListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  articles?: ArticleListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
