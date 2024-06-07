import { Claim as TClaim } from "../api/claim/Claim";

export const CLAIM_TITLE_FIELD = "title";

export const ClaimTitle = (record: TClaim): string => {
  return record.title?.toString() || String(record.id);
};
