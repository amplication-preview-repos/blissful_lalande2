import { Article } from "../article/Article";

export type Category = {
  articles?: Array<Article>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
