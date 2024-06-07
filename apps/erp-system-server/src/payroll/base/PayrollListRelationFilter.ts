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
import { PayrollWhereInput } from "./PayrollWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PayrollListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PayrollWhereInput,
  })
  @ValidateNested()
  @Type(() => PayrollWhereInput)
  @IsOptional()
  @Field(() => PayrollWhereInput, {
    nullable: true,
  })
  every?: PayrollWhereInput;

  @ApiProperty({
    required: false,
    type: () => PayrollWhereInput,
  })
  @ValidateNested()
  @Type(() => PayrollWhereInput)
  @IsOptional()
  @Field(() => PayrollWhereInput, {
    nullable: true,
  })
  some?: PayrollWhereInput;

  @ApiProperty({
    required: false,
    type: () => PayrollWhereInput,
  })
  @ValidateNested()
  @Type(() => PayrollWhereInput)
  @IsOptional()
  @Field(() => PayrollWhereInput, {
    nullable: true,
  })
  none?: PayrollWhereInput;
}
export { PayrollListRelationFilter as PayrollListRelationFilter };
