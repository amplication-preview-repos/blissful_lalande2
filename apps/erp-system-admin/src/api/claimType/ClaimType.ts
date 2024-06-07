import { Claim } from "../claim/Claim";

export type ClaimType = {
  claims?: Array<Claim>;
  createdAt: Date;
  description: string | null;
  id: string;
  typeName: string | null;
  updatedAt: Date;
};
