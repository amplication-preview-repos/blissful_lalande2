import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  author?: SortOrder;
  categoryId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
