/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ClaimType } from "./ClaimType";
import { ClaimTypeCountArgs } from "./ClaimTypeCountArgs";
import { ClaimTypeFindManyArgs } from "./ClaimTypeFindManyArgs";
import { ClaimTypeFindUniqueArgs } from "./ClaimTypeFindUniqueArgs";
import { CreateClaimTypeArgs } from "./CreateClaimTypeArgs";
import { UpdateClaimTypeArgs } from "./UpdateClaimTypeArgs";
import { DeleteClaimTypeArgs } from "./DeleteClaimTypeArgs";
import { ClaimFindManyArgs } from "../../claim/base/ClaimFindManyArgs";
import { Claim } from "../../claim/base/Claim";
import { ClaimTypeService } from "../claimType.service";
@graphql.Resolver(() => ClaimType)
export class ClaimTypeResolverBase {
  constructor(protected readonly service: ClaimTypeService) {}

  async _claimTypesMeta(
    @graphql.Args() args: ClaimTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ClaimType])
  async claimTypes(
    @graphql.Args() args: ClaimTypeFindManyArgs
  ): Promise<ClaimType[]> {
    return this.service.claimTypes(args);
  }

  @graphql.Query(() => ClaimType, { nullable: true })
  async claimType(
    @graphql.Args() args: ClaimTypeFindUniqueArgs
  ): Promise<ClaimType | null> {
    const result = await this.service.claimType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ClaimType)
  async createClaimType(
    @graphql.Args() args: CreateClaimTypeArgs
  ): Promise<ClaimType> {
    return await this.service.createClaimType({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ClaimType)
  async updateClaimType(
    @graphql.Args() args: UpdateClaimTypeArgs
  ): Promise<ClaimType | null> {
    try {
      return await this.service.updateClaimType({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ClaimType)
  async deleteClaimType(
    @graphql.Args() args: DeleteClaimTypeArgs
  ): Promise<ClaimType | null> {
    try {
      return await this.service.deleteClaimType(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Claim], { name: "claims" })
  async findClaims(
    @graphql.Parent() parent: ClaimType,
    @graphql.Args() args: ClaimFindManyArgs
  ): Promise<Claim[]> {
    const results = await this.service.findClaims(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}