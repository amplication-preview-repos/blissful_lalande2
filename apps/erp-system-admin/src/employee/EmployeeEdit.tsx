import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { LeaveTitle } from "../leave/LeaveTitle";
import { PayrollTitle } from "../payroll/PayrollTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="department" source="department" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="jobTitle" source="jobTitle" />
        <TextInput label="lastName" source="lastName" />
        <ReferenceArrayInput
          source="leaves"
          reference="Leave"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="payrolls"
          reference="Payroll"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PayrollTitle} />
        </ReferenceArrayInput>
        <TextInput label="phone" source="phone" />
        <NumberInput label="salary" source="salary" />
      </SimpleForm>
    </Edit>
  );
};
