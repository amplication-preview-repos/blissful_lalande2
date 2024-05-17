import { ClaimTypeWhereInput } from "./ClaimTypeWhereInput";
import { ClaimTypeOrderByInput } from "./ClaimTypeOrderByInput";

export type ClaimTypeFindManyArgs = {
  where?: ClaimTypeWhereInput;
  orderBy?: Array<ClaimTypeOrderByInput>;
  skip?: number;
  take?: number;
};
