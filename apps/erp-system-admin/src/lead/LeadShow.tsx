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

import { LEAD_TITLE_FIELD } from "./LeadTitle";

export const LeadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Opportunity"
          target="leadId"
          label="Opportunities"
        >
          <Datagrid rowClick="show">
            <TextField label="closeDate" source="closeDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Lead" source="lead.id" reference="Lead">
              <TextField source={LEAD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
