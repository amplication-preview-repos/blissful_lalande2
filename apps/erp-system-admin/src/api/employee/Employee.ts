import { Leave } from "../leave/Leave";
import { Payroll } from "../payroll/Payroll";

export type Employee = {
  createdAt: Date;
  department: string | null;
  email: string | null;
  firstName: string | null;
  id: string;
  jobTitle: string | null;
  lastName: string | null;
  leaves?: Array<Leave>;
  payrolls?: Array<Payroll>;
  phone: string | null;
  salary: number | null;
  updatedAt: Date;
};
