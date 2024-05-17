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
import { ProjectService } from "../project.service";
import { ProjectCreateInput } from "./ProjectCreateInput";
import { Project } from "./Project";
import { ProjectFindManyArgs } from "./ProjectFindManyArgs";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";
import { ProjectUpdateInput } from "./ProjectUpdateInput";
import { MilestoneFindManyArgs } from "../../milestone/base/MilestoneFindManyArgs";
import { Milestone } from "../../milestone/base/Milestone";
import { MilestoneWhereUniqueInput } from "../../milestone/base/MilestoneWhereUniqueInput";
import { TaskFindManyArgs } from "../../task/base/TaskFindManyArgs";
import { Task } from "../../task/base/Task";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";

export class ProjectControllerBase {
  constructor(protected readonly service: ProjectService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Project })
  async createProject(
    @common.Body() data: ProjectCreateInput
  ): Promise<Project> {
    return await this.service.createProject({
      data: data,
      select: {
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        name: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Project] })
  @ApiNestedQuery(ProjectFindManyArgs)
  async projects(@common.Req() request: Request): Promise<Project[]> {
    const args = plainToClass(ProjectFindManyArgs, request.query);
    return this.service.projects({
      ...args,
      select: {
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        name: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async project(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    const result = await this.service.project({
      where: params,
      select: {
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        name: true,
        startDate: true,
        status: true,
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
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProject(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() data: ProjectUpdateInput
  ): Promise<Project | null> {
    try {
      return await this.service.updateProject({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          name: true,
          startDate: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProject(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    try {
      return await this.service.deleteProject({
        where: params,
        select: {
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          name: true,
          startDate: true,
          status: true,
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

  @common.Get("/:id/milestones")
  @ApiNestedQuery(MilestoneFindManyArgs)
  async findMilestones(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Milestone[]> {
    const query = plainToClass(MilestoneFindManyArgs, request.query);
    const results = await this.service.findMilestones(params.id, {
      ...query,
      select: {
        createdAt: true,
        deadline: true,
        description: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/milestones")
  async connectMilestones(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: MilestoneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      milestones: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/milestones")
  async updateMilestones(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: MilestoneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      milestones: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/milestones")
  async disconnectMilestones(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: MilestoneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      milestones: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/tasks")
  @ApiNestedQuery(TaskFindManyArgs)
  async findTasks(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Task[]> {
    const query = plainToClass(TaskFindManyArgs, request.query);
    const results = await this.service.findTasks(params.id, {
      ...query,
      select: {
        assignedTo: true,
        createdAt: true,
        description: true,
        dueDate: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/tasks")
  async connectTasks(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tasks")
  async updateTasks(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tasks")
  async disconnectTasks(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }
}