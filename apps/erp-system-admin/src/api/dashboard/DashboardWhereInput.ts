import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type DashboardWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  reports?: ReportListRelationFilter;
};
