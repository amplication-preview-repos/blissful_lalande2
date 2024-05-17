import { ArticleCreateNestedManyWithoutCategoriesInput } from "./ArticleCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  articles?: ArticleCreateNestedManyWithoutCategoriesInput;
  description?: string | null;
  name?: string | null;
};
