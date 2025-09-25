"use client";

import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";

import {
  EditableCell,
  Spreadsheet,
  SpreadsheetProvider,
  StatusBar,
  StatusBarMessage,
  StatusBarSection,
  StatusBarSummary,
  Toolbar,
  ToolbarAddRowButton,
  ToolbarExportButton,
  ToolbarImportButton,
  generateSamplePeople,
  type Person,
} from "@repo/spreadsheet";

const columnHelper = createColumnHelper<Person>();

const Preview = () => {
  const columns = useMemo(
    () => [
      columnHelper.accessor("linkedinUrl", {
        header: "LinkedIn URL",
        cell: (props: any) => <EditableCell {...props} />,
      }),
      columnHelper.accessor("firstName", {
        header: "First Name",
        cell: (props: any) => <EditableCell {...props} />,
      }),
      columnHelper.accessor("lastName", {
        header: "Last Name",
        cell: (props: any) => <EditableCell {...props} />,
      }),
      columnHelper.accessor("email", {
        header: "Email",
        cell: (props: any) => <EditableCell {...props} />,
      }),
      columnHelper.accessor("company", {
        header: "Company",
        cell: (props: any) => <EditableCell {...props} />,
      }),
      columnHelper.accessor("role", {
        header: "Role",
        cell: (props: any) => <EditableCell {...props} />,
      }),
    ],
    [columnHelper]
  );

  return (
    <SpreadsheetProvider
      columns={columns}
      initialData={generateSamplePeople(30)}
      initialColumnWidths={{
        linkedinUrl: 250,
        firstName: 120,
        lastName: 120,
        email: 180,
        company: 150,
        role: 150,
      }}
      createRow={(index) => ({
        id: `${index + 1}`,
        linkedinUrl: "",
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
      })}
    >
      <Toolbar>
        <ToolbarAddRowButton />
        <ToolbarImportButton />
        <ToolbarExportButton />
      </Toolbar>
      <Spreadsheet />
      <StatusBar>
        <StatusBarSection>
          <StatusBarMessage />
        </StatusBarSection>
        <StatusBarSection className="justify-end">
          <StatusBarSummary />
        </StatusBarSection>
      </StatusBar>
    </SpreadsheetProvider>
  );
};

export default Preview;
