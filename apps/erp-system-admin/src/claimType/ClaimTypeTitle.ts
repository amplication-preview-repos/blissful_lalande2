import { ClaimType as TClaimType } from "../api/claimType/ClaimType";

export const CLAIMTYPE_TITLE_FIELD = "typeName";

export const ClaimTypeTitle = (record: TClaimType): string => {
  return record.typeName?.toString() || String(record.id);
};
