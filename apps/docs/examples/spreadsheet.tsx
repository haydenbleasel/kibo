"use client";

import { useMemo, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreVerticalIcon, Plus, TrashIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  useSpreadsheet,
} from "@repo/spreadsheet";
import { faker } from "@faker-js/faker";

type Person = {
  id: string;
  linkedinUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
};

const columnHelper = createColumnHelper<Person>();

// Row actions component that uses the spreadsheet context
const RowActions = ({ row }: { row: Person }) => {
  const { deleteRow } = useSpreadsheet<Person>();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="h-8 w-8">
          <MoreVerticalIcon className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => deleteRow(row.id)}
          className="text-destructive"
        >
          <TrashIcon className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Preview = () => {
  const [data, setData] = useState<Person[]>(generateSamplePeople(30));

  const columns = useMemo(
    () => [
      columnHelper.accessor("linkedinUrl", {
        header: "LinkedIn URL",
        cell: EditableCell,
      }),
      columnHelper.accessor("firstName", {
        header: "First Name",
        cell: EditableCell,
      }),
      columnHelper.accessor("lastName", {
        header: "Last Name",
        cell: EditableCell,
      }),
      columnHelper.accessor("email", {
        header: "Email",
        cell: EditableCell,
      }),
      columnHelper.accessor("company", {
        header: "Company",
        cell: EditableCell,
      }),
      columnHelper.accessor("role", {
        header: "Role",
        cell: EditableCell,
      }),
    ],
    []
  );

  return (
    <SpreadsheetProvider
      columns={columns}
      data={data}
      onDataChange={setData}
      initialColumnWidths={{
        linkedinUrl: 250,
        firstName: 120,
        lastName: 120,
        email: 180,
        company: 150,
        role: 150,
      }}
      onCreateRow={(index) => ({
        id: `${Date.now()}-${index}`,
        linkedinUrl: "",
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
      })}
      onDeleteRow={(rowId) => {
        setData(data.filter((row) => row.id !== rowId));
      }}
    >
      <Toolbar>
        <ToolbarImportButton />
        <ToolbarExportButton />
      </Toolbar>
      <Spreadsheet
        showRowNumbers
        renderRowActions={(row) => <RowActions row={row} />}
      />
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

const generateSamplePeople = (count: number): Person[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`,
    linkedinUrl: `https://linkedin.com/in/user-${i + 1}`,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    role: faker.person.jobTitle(),
  }));
};
