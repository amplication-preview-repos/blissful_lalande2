/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { MilestoneUpdateManyWithoutProjectsInput } from "./MilestoneUpdateManyWithoutProjectsInput";
import { EnumProjectStatus } from "./EnumProjectStatus";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => MilestoneUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => MilestoneUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => MilestoneUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  milestones?: MilestoneUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumProjectStatus,
  })
  @IsEnum(EnumProjectStatus)
  @IsOptional()
  @Field(() => EnumProjectStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => TaskUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => TaskUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => TaskUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  tasks?: TaskUpdateManyWithoutProjectsInput;
}

export { ProjectUpdateInput as ProjectUpdateInput };
