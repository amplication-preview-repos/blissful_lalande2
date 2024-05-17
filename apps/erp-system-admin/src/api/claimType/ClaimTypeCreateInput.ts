import { ClaimCreateNestedManyWithoutClaimTypesInput } from "./ClaimCreateNestedManyWithoutClaimTypesInput";

export type ClaimTypeCreateInput = {
  claims?: ClaimCreateNestedManyWithoutClaimTypesInput;
  description?: string | null;
  typeName?: string | null;
};
