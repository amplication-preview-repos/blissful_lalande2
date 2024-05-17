import { Module } from "@nestjs/common";
import { ClaimTypeModuleBase } from "./base/claimType.module.base";
import { ClaimTypeService } from "./claimType.service";
import { ClaimTypeController } from "./claimType.controller";
import { ClaimTypeResolver } from "./claimType.resolver";

@Module({
  imports: [ClaimTypeModuleBase],
  controllers: [ClaimTypeController],
  providers: [ClaimTypeService, ClaimTypeResolver],
  exports: [ClaimTypeService],
})
export class ClaimTypeModule {}
