/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClaimTypeService } from "../claimType.service";
import { ClaimTypeCreateInput } from "./ClaimTypeCreateInput";
import { ClaimType } from "./ClaimType";
import { ClaimTypeFindManyArgs } from "./ClaimTypeFindManyArgs";
import { ClaimTypeWhereUniqueInput } from "./ClaimTypeWhereUniqueInput";
import { ClaimTypeUpdateInput } from "./ClaimTypeUpdateInput";
import { ClaimFindManyArgs } from "../../claim/base/ClaimFindManyArgs";
import { Claim } from "../../claim/base/Claim";
import { ClaimWhereUniqueInput } from "../../claim/base/ClaimWhereUniqueInput";

export class ClaimTypeControllerBase {
  constructor(protected readonly service: ClaimTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ClaimType })
  async createClaimType(
    @common.Body() data: ClaimTypeCreateInput
  ): Promise<ClaimType> {
    return await this.service.createClaimType({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        typeName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ClaimType] })
  @ApiNestedQuery(ClaimTypeFindManyArgs)
  async claimTypes(@common.Req() request: Request): Promise<ClaimType[]> {
    const args = plainToClass(ClaimTypeFindManyArgs, request.query);
    return this.service.claimTypes({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        typeName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ClaimType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async claimType(
    @common.Param() params: ClaimTypeWhereUniqueInput
  ): Promise<ClaimType | null> {
    const result = await this.service.claimType({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        typeName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ClaimType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateClaimType(
    @common.Param() params: ClaimTypeWhereUniqueInput,
    @common.Body() data: ClaimTypeUpdateInput
  ): Promise<ClaimType | null> {
    try {
      return await this.service.updateClaimType({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          typeName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ClaimType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClaimType(
    @common.Param() params: ClaimTypeWhereUniqueInput
  ): Promise<ClaimType | null> {
    try {
      return await this.service.deleteClaimType({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          typeName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/claims")
  @ApiNestedQuery(ClaimFindManyArgs)
  async findClaims(
    @common.Req() request: Request,
    @common.Param() params: ClaimTypeWhereUniqueInput
  ): Promise<Claim[]> {
    const query = plainToClass(ClaimFindManyArgs, request.query);
    const results = await this.service.findClaims(params.id, {
      ...query,
      select: {
        claimType: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        createdDate: true,

        customer: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        priority: true,
        resolvedDate: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/claims")
  async connectClaims(
    @common.Param() params: ClaimTypeWhereUniqueInput,
    @common.Body() body: ClaimWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      claims: {
        connect: body,
      },
    };
    await this.service.updateClaimType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/claims")
  async updateClaims(
    @common.Param() params: ClaimTypeWhereUniqueInput,
    @common.Body() body: ClaimWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      claims: {
        set: body,
      },
    };
    await this.service.updateClaimType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/claims")
  async disconnectClaims(
    @common.Param() params: ClaimTypeWhereUniqueInput,
    @common.Body() body: ClaimWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      claims: {
        disconnect: body,
      },
    };
    await this.service.updateClaimType({
      where: params,
      data,
      select: { id: true },
    });
  }
}
