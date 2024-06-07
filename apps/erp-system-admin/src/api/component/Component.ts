import { Configuration } from "../configuration/Configuration";

export type Component = {
  componentType?: "Option1" | null;
  compType?: "Option1" | null;
  configRelation: string | null;
  configuration?: Configuration | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
