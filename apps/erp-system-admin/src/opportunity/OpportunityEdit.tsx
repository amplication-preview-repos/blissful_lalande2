import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { LeadTitle } from "../lead/LeadTitle";

export const OpportunityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="closeDate" source="closeDate" />
        <ReferenceInput source="lead.id" reference="Lead" label="Lead">
          <SelectInput optionText={LeadTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
