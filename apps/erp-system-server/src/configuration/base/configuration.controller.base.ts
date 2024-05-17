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
import { ConfigurationService } from "../configuration.service";
import { ConfigurationCreateInput } from "./ConfigurationCreateInput";
import { Configuration } from "./Configuration";
import { ConfigurationFindManyArgs } from "./ConfigurationFindManyArgs";
import { ConfigurationWhereUniqueInput } from "./ConfigurationWhereUniqueInput";
import { ConfigurationUpdateInput } from "./ConfigurationUpdateInput";
import { ComponentFindManyArgs } from "../../component/base/ComponentFindManyArgs";
import { Component } from "../../component/base/Component";
import { ComponentWhereUniqueInput } from "../../component/base/ComponentWhereUniqueInput";

export class ConfigurationControllerBase {
  constructor(protected readonly service: ConfigurationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Configuration })
  async createConfiguration(
    @common.Body() data: ConfigurationCreateInput
  ): Promise<Configuration> {
    return await this.service.createConfiguration({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        name: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Configuration] })
  @ApiNestedQuery(ConfigurationFindManyArgs)
  async configurations(
    @common.Req() request: Request
  ): Promise<Configuration[]> {
    const args = plainToClass(ConfigurationFindManyArgs, request.query);
    return this.service.configurations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Configuration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async configuration(
    @common.Param() params: ConfigurationWhereUniqueInput
  ): Promise<Configuration | null> {
    const result = await this.service.configuration({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,

        product: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Configuration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateConfiguration(
    @common.Param() params: ConfigurationWhereUniqueInput,
    @common.Body() data: ConfigurationUpdateInput
  ): Promise<Configuration | null> {
    try {
      return await this.service.updateConfiguration({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          name: true,

          product: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Configuration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteConfiguration(
    @common.Param() params: ConfigurationWhereUniqueInput
  ): Promise<Configuration | null> {
    try {
      return await this.service.deleteConfiguration({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,

          product: {
            select: {
              id: true,
            },
          },

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

  @common.Get("/:id/components")
  @ApiNestedQuery(ComponentFindManyArgs)
  async findComponents(
    @common.Req() request: Request,
    @common.Param() params: ConfigurationWhereUniqueInput
  ): Promise<Component[]> {
    const query = plainToClass(ComponentFindManyArgs, request.query);
    const results = await this.service.findComponents(params.id, {
      ...query,
      select: {
        componentType: true,

        configuration: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
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

  @common.Post("/:id/components")
  async connectComponents(
    @common.Param() params: ConfigurationWhereUniqueInput,
    @common.Body() body: ComponentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      components: {
        connect: body,
      },
    };
    await this.service.updateConfiguration({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/components")
  async updateComponents(
    @common.Param() params: ConfigurationWhereUniqueInput,
    @common.Body() body: ComponentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      components: {
        set: body,
      },
    };
    await this.service.updateConfiguration({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/components")
  async disconnectComponents(
    @common.Param() params: ConfigurationWhereUniqueInput,
    @common.Body() body: ComponentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      components: {
        disconnect: body,
      },
    };
    await this.service.updateConfiguration({
      where: params,
      data,
      select: { id: true },
    });
  }
}
