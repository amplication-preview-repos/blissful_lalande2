import { ClaimUpdateManyWithoutCustomersInput } from "./ClaimUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  claims?: ClaimUpdateManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
