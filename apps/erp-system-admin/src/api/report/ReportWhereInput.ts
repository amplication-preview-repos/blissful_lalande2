import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DashboardWhereUniqueInput } from "../dashboard/DashboardWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ReportWhereInput = {
  content?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  dashboard?: DashboardWhereUniqueInput;
  id?: StringFilter;
  title?: StringNullableFilter;
};
