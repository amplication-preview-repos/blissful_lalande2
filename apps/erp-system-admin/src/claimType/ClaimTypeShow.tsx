import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLAIMTYPE_TITLE_FIELD } from "./ClaimTypeTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const ClaimTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="typeName" source="typeName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Claim"
          target="claimTypeId"
          label="Claims"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ClaimType"
              source="claimtype.id"
              reference="ClaimType"
            >
              <TextField source={CLAIMTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="createdDate" source="createdDate" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="priority" source="priority" />
            <TextField label="resolvedDate" source="resolvedDate" />
            <TextField label="status" source="status" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
