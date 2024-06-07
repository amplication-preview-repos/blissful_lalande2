import { PaymentCreateNestedManyWithoutInvoicesInput } from "./PaymentCreateNestedManyWithoutInvoicesInput";

export type InvoiceCreateInput = {
  dueDate?: Date | null;
  invoiceDate?: Date | null;
  invoiceNumber?: string | null;
  payments?: PaymentCreateNestedManyWithoutInvoicesInput;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
