import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { InvoiceTitle } from "../invoice/InvoiceTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="invoice.id" reference="Invoice" label="Invoice">
          <SelectInput optionText={InvoiceTitle} />
        </ReferenceInput>
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <SelectInput
          source="paymentMethod"
          label="paymentMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};