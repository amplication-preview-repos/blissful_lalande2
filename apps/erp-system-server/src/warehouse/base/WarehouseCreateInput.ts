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
import { IsInt, IsOptional, ValidateNested, IsString } from "class-validator";
import { InventoryCreateNestedManyWithoutWarehousesInput } from "./InventoryCreateNestedManyWithoutWarehousesInput";
import { Type } from "class-transformer";

@InputType()
class WarehouseCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number | null;

  @ApiProperty({
    required: false,
    type: () => InventoryCreateNestedManyWithoutWarehousesInput,
  })
  @ValidateNested()
  @Type(() => InventoryCreateNestedManyWithoutWarehousesInput)
  @IsOptional()
  @Field(() => InventoryCreateNestedManyWithoutWarehousesInput, {
    nullable: true,
  })
  inventories?: InventoryCreateNestedManyWithoutWarehousesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

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
}

export { WarehouseCreateInput as WarehouseCreateInput };