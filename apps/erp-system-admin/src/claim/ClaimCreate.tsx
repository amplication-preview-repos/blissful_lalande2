import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ClaimTypeTitle } from "../claimType/ClaimTypeTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const ClaimCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="claimType.id"
          reference="ClaimType"
          label="ClaimType"
        >
          <SelectInput optionText={ClaimTypeTitle} />
        </ReferenceInput>
        <DateTimeInput label="createdDate" source="createdDate" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="priority"
          label="priority"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="resolvedDate" source="resolvedDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
