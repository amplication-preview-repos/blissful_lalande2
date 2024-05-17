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
import { ComponentUpdateManyWithoutConfigurationsInput } from "./ComponentUpdateManyWithoutConfigurationsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@InputType()
class ConfigurationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ComponentUpdateManyWithoutConfigurationsInput,
  })
  @ValidateNested()
  @Type(() => ComponentUpdateManyWithoutConfigurationsInput)
  @IsOptional()
  @Field(() => ComponentUpdateManyWithoutConfigurationsInput, {
    nullable: true,
  })
  components?: ComponentUpdateManyWithoutConfigurationsInput;

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
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;
}

export { ConfigurationUpdateInput as ConfigurationUpdateInput };