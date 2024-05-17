import { Category } from "../category/Category";

export type Article = {
  author: string | null;
  category?: Category | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
