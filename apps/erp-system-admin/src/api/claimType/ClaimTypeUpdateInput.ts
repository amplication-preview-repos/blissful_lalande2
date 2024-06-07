import { ClaimUpdateManyWithoutClaimTypesInput } from "./ClaimUpdateManyWithoutClaimTypesInput";

export type ClaimTypeUpdateInput = {
  claims?: ClaimUpdateManyWithoutClaimTypesInput;
  description?: string | null;
  typeName?: string | null;
};
