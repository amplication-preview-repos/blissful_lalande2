import { ClaimType } from "../claimType/ClaimType";
import { Customer } from "../customer/Customer";

export type Claim = {
  claimType?: ClaimType | null;
  createdAt: Date;
  createdDate: Date | null;
  customer?: Customer | null;
  description: string | null;
  id: string;
  priority?: "Option1" | null;
  resolvedDate: Date | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
