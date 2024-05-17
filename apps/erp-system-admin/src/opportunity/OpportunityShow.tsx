import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LEAD_TITLE_FIELD } from "../lead/LeadTitle";

export const OpportunityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="closeDate" source="closeDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Lead" source="lead.id" reference="Lead">
          <TextField source={LEAD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
