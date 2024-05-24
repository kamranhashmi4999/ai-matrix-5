import React, { useEffect, useState } from "react";
import { DataTable } from "mantine-datatable";
import { Button } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";

interface ClientsTableProps {
  data: any;
}

const PAGE_SIZE = 10;

export function ClientsTable({ data }: ClientsTableProps) {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(data.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(data.slice(from, to));
  }, [page]);

  return (
    <DataTable
      columns={[
        { accessor: "company_name" },
        { accessor: "address_line" },
        { accessor: "city" },
        { accessor: "state" },
        { accessor: "zip" },
        { accessor: "country" },
        { accessor: "primary_contact" },
        {
          accessor: "",
          title: "Actions",
          render: () => (
            <Button variant="subtle" size="sm" leftSection={<IconEye />}>
              View
            </Button>
          ),
        },
      ]}
      records={records}
      totalRecords={data.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
      borderRadius="md"
      withTableBorder
    />
  );
}
