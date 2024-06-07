import { ReportCreateNestedManyWithoutDashboardsInput } from "./ReportCreateNestedManyWithoutDashboardsInput";

export type DashboardCreateInput = {
  description?: string | null;
  name?: string | null;
  reports?: ReportCreateNestedManyWithoutDashboardsInput;
};
