import { LeaveCreateNestedManyWithoutEmployeesInput } from "./LeaveCreateNestedManyWithoutEmployeesInput";
import { PayrollCreateNestedManyWithoutEmployeesInput } from "./PayrollCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  department?: string | null;
  email?: string | null;
  firstName?: string | null;
  jobTitle?: string | null;
  lastName?: string | null;
  leaves?: LeaveCreateNestedManyWithoutEmployeesInput;
  payrolls?: PayrollCreateNestedManyWithoutEmployeesInput;
  phone?: string | null;
  salary?: number | null;
};
