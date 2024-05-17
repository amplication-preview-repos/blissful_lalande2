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
import { ClaimTypeWhereUniqueInput } from "../../claimType/base/ClaimTypeWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { EnumClaimPriority } from "./EnumClaimPriority";
import { EnumClaimStatus } from "./EnumClaimStatus";

@InputType()
class ClaimCreateInput {
  @ApiProperty({
    required: false,
    type: () => ClaimTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClaimTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => ClaimTypeWhereUniqueInput, {
    nullable: true,
  })
  claimType?: ClaimTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

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
    enum: EnumClaimPriority,
  })
  @IsEnum(EnumClaimPriority)
  @IsOptional()
  @Field(() => EnumClaimPriority, {
    nullable: true,
  })
  priority?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  resolvedDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumClaimStatus,
  })
  @IsEnum(EnumClaimStatus)
  @IsOptional()
  @Field(() => EnumClaimStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { ClaimCreateInput as ClaimCreateInput };