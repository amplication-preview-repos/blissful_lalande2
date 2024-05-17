import { ReportUpdateManyWithoutDashboardsInput } from "./ReportUpdateManyWithoutDashboardsInput";

export type DashboardUpdateInput = {
  description?: string | null;
  name?: string | null;
  reports?: ReportUpdateManyWithoutDashboardsInput;
};
