import { ArticleUpdateManyWithoutCategoriesInput } from "./ArticleUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  articles?: ArticleUpdateManyWithoutCategoriesInput;
  description?: string | null;
  name?: string | null;
};
