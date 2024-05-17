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
import { ClaimCreateNestedManyWithoutClaimTypesInput } from "./ClaimCreateNestedManyWithoutClaimTypesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClaimTypeCreateInput {
  @ApiProperty({
    required: false,
    type: () => ClaimCreateNestedManyWithoutClaimTypesInput,
  })
  @ValidateNested()
  @Type(() => ClaimCreateNestedManyWithoutClaimTypesInput)
  @IsOptional()
  @Field(() => ClaimCreateNestedManyWithoutClaimTypesInput, {
    nullable: true,
  })
  claims?: ClaimCreateNestedManyWithoutClaimTypesInput;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeName?: string | null;
}

export { ClaimTypeCreateInput as ClaimTypeCreateInput };