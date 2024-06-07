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
  Leave as PrismaLeave,
  Employee as PrismaEmployee,
} from "@prisma/client";

export class LeaveServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LeaveCountArgs, "select">): Promise<number> {
    return this.prisma.leave.count(args);
  }

  async leaves<T extends Prisma.LeaveFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeaveFindManyArgs>
  ): Promise<PrismaLeave[]> {
    return this.prisma.leave.findMany<Prisma.LeaveFindManyArgs>(args);
  }
  async leave<T extends Prisma.LeaveFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeaveFindUniqueArgs>
  ): Promise<PrismaLeave | null> {
    return this.prisma.leave.findUnique(args);
  }
  async createLeave<T extends Prisma.LeaveCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeaveCreateArgs>
  ): Promise<PrismaLeave> {
    return this.prisma.leave.create<T>(args);
  }
  async updateLeave<T extends Prisma.LeaveUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeaveUpdateArgs>
  ): Promise<PrismaLeave> {
    return this.prisma.leave.update<T>(args);
  }
  async deleteLeave<T extends Prisma.LeaveDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeaveDeleteArgs>
  ): Promise<PrismaLeave> {
    return this.prisma.leave.delete(args);
  }

  async getEmployee(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.leave
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}
