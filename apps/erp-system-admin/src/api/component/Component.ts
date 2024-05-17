import { Configuration } from "../configuration/Configuration";

export type Component = {
  componentType?: "Option1" | null;
  configuration?: Configuration | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
