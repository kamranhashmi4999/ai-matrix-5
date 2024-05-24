"use client";

import { Box, Title } from "@mantine/core";
import ClientsForm from "@/components/ClientsForm/ClientsForm";

const ViewClientsPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Box>
        <Title order={3} mb="md">
          Client #{params?.id.slice(0, 5)}
        </Title>
        <ClientsForm />
      </Box>
    </>
  );
};

export default ViewClientsPage;
