import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";

export type ComponentUpdateInput = {
  componentType?: "Option1" | null;
  configuration?: ConfigurationWhereUniqueInput | null;
  name?: string | null;
};
