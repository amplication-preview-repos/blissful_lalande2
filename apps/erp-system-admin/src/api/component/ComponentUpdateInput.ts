import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";

export type ComponentUpdateInput = {
  componentType?: "Option1" | null;
  compType?: "Option1" | null;
  configRelation?: string | null;
  configuration?: ConfigurationWhereUniqueInput | null;
  name?: string | null;
};
