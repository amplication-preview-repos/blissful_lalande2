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
import { InventoryWhereUniqueInput } from "../../inventory/base/InventoryWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumShipmentStatus } from "./EnumShipmentStatus";

@InputType()
class ShipmentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => InventoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InventoryWhereUniqueInput)
  @IsOptional()
  @Field(() => InventoryWhereUniqueInput, {
    nullable: true,
  })
  inventory?: InventoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  shipmentDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumShipmentStatus,
  })
  @IsEnum(EnumShipmentStatus)
  @IsOptional()
  @Field(() => EnumShipmentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { ShipmentUpdateInput as ShipmentUpdateInput };