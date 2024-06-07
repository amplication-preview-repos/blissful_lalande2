import { Claim } from "../claim/Claim";

export type Customer = {
  address: string | null;
  claims?: Array<Claim>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
