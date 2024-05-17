/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumComponentComponentType } from "./EnumComponentComponentType";
import {
  IsEnum,
  IsOptional,
  ValidateNested,
  IsDate,
  IsString,
} from "class-validator";
import { Configuration } from "../../configuration/base/Configuration";
import { Type } from "class-transformer";

@ObjectType()
class Component {
  @ApiProperty({
    required: false,
    enum: EnumComponentComponentType,
  })
  @IsEnum(EnumComponentComponentType)
  @IsOptional()
  @Field(() => EnumComponentComponentType, {
    nullable: true,
  })
  componentType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => Configuration,
  })
  @ValidateNested()
  @Type(() => Configuration)
  @IsOptional()
  configuration?: Configuration | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Component as Component };