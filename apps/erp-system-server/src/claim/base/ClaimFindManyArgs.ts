/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClaimWhereInput } from "./ClaimWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClaimOrderByInput } from "./ClaimOrderByInput";

@ArgsType()
class ClaimFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClaimWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClaimWhereInput, { nullable: true })
  @Type(() => ClaimWhereInput)
  where?: ClaimWhereInput;

  @ApiProperty({
    required: false,
    type: [ClaimOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClaimOrderByInput], { nullable: true })
  @Type(() => ClaimOrderByInput)
  orderBy?: Array<ClaimOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClaimFindManyArgs as ClaimFindManyArgs };