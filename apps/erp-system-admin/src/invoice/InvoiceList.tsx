import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InvoiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Invoices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="ID" source="id" />
        <TextField label="invoiceDate" source="invoiceDate" />
        <TextField label="invoiceNumber" source="invoiceNumber" />
        <TextField label="status" source="status" />
        <TextField label="totalAmount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
