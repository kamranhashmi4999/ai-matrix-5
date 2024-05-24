"use client";

import {
  Box,
  Button,
  Grid,
  NumberInput,
  Paper,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { useForm } from "@mantine/form";
import AmeSelect from "@/ui/select/AmeSelect";
import { IconDeviceFloppy } from "@tabler/icons-react";

const NewClientsPage = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      companyName: "",
      addressLine1: "",
      addressLine12: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      primaryContact: "",
      secondaryContact: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      companyName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      addressLine1: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      city: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      state: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      zip: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      country: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      primaryContact: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  return (
    <>
      <Box>
        <Title order={3} mb="md">
          Add a new client
        </Title>
        <Paper
          component="form"
          withBorder
          p="md"
          onSubmit={form.onSubmit(console.log)}
        >
          <Grid>
            <Grid.Col>
              <TextInput
                label="Company Name"
                placeholder="company name"
                key={form.key("companyName")}
                {...form.getInputProps("companyName")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Textarea
                label="Address Line 1"
                placeholder="address"
                key={form.key("addressLine1")}
                {...form.getInputProps("addressLine1")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Textarea
                label="Address Line 2"
                placeholder="address"
                key={form.key("addressLine2")}
                {...form.getInputProps("addressLine2")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
              <AmeSelect
                label="Country"
                placeholder="country"
                data={[]}
                key={form.key("country")}
                {...form.getInputProps("country")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
              <TextInput
                label="State"
                placeholder="state"
                key={form.key("state")}
                {...form.getInputProps("state")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
              <TextInput
                label="City"
                placeholder="city"
                key={form.key("city")}
                {...form.getInputProps("city")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
              <NumberInput
                label="Zip"
                placeholder="zip"
                key={form.key("zip")}
                {...form.getInputProps("zip")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <AmeSelect
                label="Primary contact"
                placeholder="primary contact"
                data={[]}
                key={form.key("primaryContact")}
                {...form.getInputProps("primaryContact")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <AmeSelect
                label="Secondary contact"
                placeholder="secondary contact"
                data={[]}
                key={form.key("secondaryContact")}
                {...form.getInputProps("secondaryContact")}
              />
            </Grid.Col>
          </Grid>

          <Button type="submit" mt="md" leftSection={<IconDeviceFloppy />}>
            Submit
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default NewClientsPage;
