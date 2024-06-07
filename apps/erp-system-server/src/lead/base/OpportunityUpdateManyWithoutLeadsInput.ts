/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OpportunityWhereUniqueInput } from "../../opportunity/base/OpportunityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OpportunityUpdateManyWithoutLeadsInput {
  @Field(() => [OpportunityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpportunityWhereUniqueInput],
  })
  connect?: Array<OpportunityWhereUniqueInput>;

  @Field(() => [OpportunityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpportunityWhereUniqueInput],
  })
  disconnect?: Array<OpportunityWhereUniqueInput>;

  @Field(() => [OpportunityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpportunityWhereUniqueInput],
  })
  set?: Array<OpportunityWhereUniqueInput>;
}

export { OpportunityUpdateManyWithoutLeadsInput as OpportunityUpdateManyWithoutLeadsInput };
