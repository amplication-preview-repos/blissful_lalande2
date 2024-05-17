import { DashboardWhereUniqueInput } from "../dashboard/DashboardWhereUniqueInput";

export type ReportUpdateInput = {
  content?: string | null;
  createdDate?: Date | null;
  dashboard?: DashboardWhereUniqueInput | null;
  title?: string | null;
};
