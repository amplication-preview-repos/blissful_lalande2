import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ExpenseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <SelectInput
          source="category"
          label="category"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="expenseDate" source="expenseDate" />
      </SimpleForm>
    </Create>
  );
};
