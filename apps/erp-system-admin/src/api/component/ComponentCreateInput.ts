import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";

export type ComponentCreateInput = {
  componentType?: "Option1" | null;
  compType?: "Option1" | null;
  configRelation?: string | null;
  configuration?: ConfigurationWhereUniqueInput | null;
  name?: string | null;
};
