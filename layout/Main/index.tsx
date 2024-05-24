"use client";

import { Anchor, AppShell, Breadcrumbs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { Navbar } from "@/layout/Main/Navbar";
import { Header } from "@/layout/Main/Header";

// sample breadcrumbs to help with navigation
const items = [
  { title: "Home", href: "#" },
  { title: "Nav #1", href: "#" },
  { title: "Nav #2", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

type Props = { children: ReactNode };

export function MainLayout(props: Props) {
  const { children } = props;
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 150, md: 200, lg: 250 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar px="md" pt="md">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Breadcrumbs mb="sm">{items}</Breadcrumbs>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
