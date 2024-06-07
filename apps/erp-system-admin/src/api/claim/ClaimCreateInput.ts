import { ClaimTypeWhereUniqueInput } from "../claimType/ClaimTypeWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ClaimCreateInput = {
  claimType?: ClaimTypeWhereUniqueInput | null;
  createdDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  priority?: "Option1" | null;
  resolvedDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
