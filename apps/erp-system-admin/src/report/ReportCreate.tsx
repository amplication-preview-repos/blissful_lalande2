import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DashboardTitle } from "../dashboard/DashboardTitle";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="createdDate" source="createdDate" />
        <ReferenceInput
          source="dashboard.id"
          reference="Dashboard"
          label="Dashboard"
        >
          <SelectInput optionText={DashboardTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
