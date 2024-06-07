/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Article as PrismaArticle,
  Category as PrismaCategory,
} from "@prisma/client";

export class ArticleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ArticleCountArgs, "select">): Promise<number> {
    return this.prisma.article.count(args);
  }

  async articles<T extends Prisma.ArticleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleFindManyArgs>
  ): Promise<PrismaArticle[]> {
    return this.prisma.article.findMany<Prisma.ArticleFindManyArgs>(args);
  }
  async article<T extends Prisma.ArticleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleFindUniqueArgs>
  ): Promise<PrismaArticle | null> {
    return this.prisma.article.findUnique(args);
  }
  async createArticle<T extends Prisma.ArticleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleCreateArgs>
  ): Promise<PrismaArticle> {
    return this.prisma.article.create<T>(args);
  }
  async updateArticle<T extends Prisma.ArticleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleUpdateArgs>
  ): Promise<PrismaArticle> {
    return this.prisma.article.update<T>(args);
  }
  async deleteArticle<T extends Prisma.ArticleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleDeleteArgs>
  ): Promise<PrismaArticle> {
    return this.prisma.article.delete(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.article
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}
