import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClaimTypeService } from "./claimType.service";
import { ClaimTypeControllerBase } from "./base/claimType.controller.base";

@swagger.ApiTags("claimTypes")
@common.Controller("claimTypes")
export class ClaimTypeController extends ClaimTypeControllerBase {
  constructor(protected readonly service: ClaimTypeService) {
    super(service);
  }
}
