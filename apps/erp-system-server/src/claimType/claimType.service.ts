import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClaimTypeServiceBase } from "./base/claimType.service.base";

@Injectable()
export class ClaimTypeService extends ClaimTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
