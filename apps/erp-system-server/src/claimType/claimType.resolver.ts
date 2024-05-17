import * as graphql from "@nestjs/graphql";
import { ClaimTypeResolverBase } from "./base/claimType.resolver.base";
import { ClaimType } from "./base/ClaimType";
import { ClaimTypeService } from "./claimType.service";

@graphql.Resolver(() => ClaimType)
export class ClaimTypeResolver extends ClaimTypeResolverBase {
  constructor(protected readonly service: ClaimTypeService) {
    super(service);
  }
}
