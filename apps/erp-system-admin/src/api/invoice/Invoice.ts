import { Payment } from "../payment/Payment";

export type Invoice = {
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  invoiceDate: Date | null;
  invoiceNumber: string | null;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
