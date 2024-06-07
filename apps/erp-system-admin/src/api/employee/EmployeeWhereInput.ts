import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaveListRelationFilter } from "../leave/LeaveListRelationFilter";
import { PayrollListRelationFilter } from "../payroll/PayrollListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EmployeeWhereInput = {
  department?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  jobTitle?: StringNullableFilter;
  lastName?: StringNullableFilter;
  leaves?: LeaveListRelationFilter;
  payrolls?: PayrollListRelationFilter;
  phone?: StringNullableFilter;
  salary?: FloatNullableFilter;
};
