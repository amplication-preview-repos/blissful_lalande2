import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MilestoneListRelationFilter } from "../milestone/MilestoneListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  milestones?: MilestoneListRelationFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  tasks?: TaskListRelationFilter;
};
