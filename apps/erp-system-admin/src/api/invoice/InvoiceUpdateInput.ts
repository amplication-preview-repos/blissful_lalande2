import { PaymentUpdateManyWithoutInvoicesInput } from "./PaymentUpdateManyWithoutInvoicesInput";

export type InvoiceUpdateInput = {
  dueDate?: Date | null;
  invoiceDate?: Date | null;
  invoiceNumber?: string | null;
  payments?: PaymentUpdateManyWithoutInvoicesInput;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
