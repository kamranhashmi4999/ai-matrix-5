"use client";

import { Box, Button, Flex, Group, TextInput, Title } from "@mantine/core";
import { IconPlus, IconTableExport } from "@tabler/icons-react";

const NewClientsPage = () => {
  return (
    <>
      <Box>
        <Title order={3} mb="md">
          Clients
        </Title>
        <Flex justify="space-between" mb="md">
          <TextInput placeholder="search" />
          <Group gap="xs">
            <Button variant="default" leftSection={<IconTableExport />}>
              Export
            </Button>
            <Button leftSection={<IconPlus />}>Add client</Button>
          </Group>
        </Flex>
      </Box>
    </>
  );
};

export default NewClientsPage;
