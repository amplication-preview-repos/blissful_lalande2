export type Expense = {
  amount: number | null;
  category?: "Option1" | null;
  createdAt: Date;
  description: string | null;
  expenseDate: Date | null;
  id: string;
  updatedAt: Date;
};
