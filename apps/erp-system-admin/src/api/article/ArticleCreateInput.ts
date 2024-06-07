import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ArticleCreateInput = {
  author?: string | null;
  category?: CategoryWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
