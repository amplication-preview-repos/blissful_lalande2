import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExpenseWhereInput = {
  amount?: FloatNullableFilter;
  category?: "Option1";
  description?: StringNullableFilter;
  expenseDate?: DateTimeNullableFilter;
  id?: StringFilter;
};
