import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type InvoiceWhereInput = {
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceDate?: DateTimeNullableFilter;
  invoiceNumber?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
};
