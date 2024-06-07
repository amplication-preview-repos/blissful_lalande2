import { DashboardWhereUniqueInput } from "../dashboard/DashboardWhereUniqueInput";

export type ReportCreateInput = {
  content?: string | null;
  createdDate?: Date | null;
  dashboard?: DashboardWhereUniqueInput | null;
  title?: string | null;
};
