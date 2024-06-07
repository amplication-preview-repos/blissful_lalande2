import { ClaimCreateNestedManyWithoutCustomersInput } from "./ClaimCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  claims?: ClaimCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
