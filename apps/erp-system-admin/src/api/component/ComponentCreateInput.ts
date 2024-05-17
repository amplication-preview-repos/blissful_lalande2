import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";

export type ComponentCreateInput = {
  componentType?: "Option1" | null;
  configuration?: ConfigurationWhereUniqueInput | null;
  name?: string | null;
};
