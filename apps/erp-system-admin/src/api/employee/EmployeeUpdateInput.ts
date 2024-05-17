import { LeaveUpdateManyWithoutEmployeesInput } from "./LeaveUpdateManyWithoutEmployeesInput";
import { PayrollUpdateManyWithoutEmployeesInput } from "./PayrollUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  department?: string | null;
  email?: string | null;
  firstName?: string | null;
  jobTitle?: string | null;
  lastName?: string | null;
  leaves?: LeaveUpdateManyWithoutEmployeesInput;
  payrolls?: PayrollUpdateManyWithoutEmployeesInput;
  phone?: string | null;
  salary?: number | null;
};
