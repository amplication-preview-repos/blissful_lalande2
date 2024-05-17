import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type LeaveCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  reason?: string | null;
  startDate?: Date | null;
};
