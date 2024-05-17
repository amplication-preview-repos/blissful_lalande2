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
import { LeaveWhereUniqueInput } from "./LeaveWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class LeaveFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => LeaveWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LeaveWhereUniqueInput)
  @Field(() => LeaveWhereUniqueInput, { nullable: false })
  where!: LeaveWhereUniqueInput;
}

export { LeaveFindUniqueArgs as LeaveFindUniqueArgs };
