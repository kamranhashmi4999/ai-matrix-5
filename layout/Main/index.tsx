'use client';

import { AppShell, Burger, Group } from '@mantine/core';
import {useDisclosure, useMediaQuery} from '@mantine/hooks';
import { ReactNode } from 'react';
import { Logo } from '@/components';
import { Navbar } from '@/layout/Main/Navbar';
import { Header } from '@/layout/Main/Header';

type Props = { children: ReactNode };

export function MainLayout(props: Props) {
  const { children } = props;
  const [opened, { toggle }] = useDisclosure();
    const desktop_match = useMediaQuery('(min-width: 992px)');
    const tablet_match = useMediaQuery('(max-width: 992px)');
    const mobile_match = useMediaQuery('(min-width: 768px)');

  return (
      <AppShell
          header={{ height: { base: 60, md: 70, lg: 80 } }}
          navbar={{
              width: {base: 60, md: 200, lg: 250},
              breakpoint: 'sm',
              collapsed: { mobile: !opened },
          }}
          padding="md"
      >
          <AppShell.Header>
              <Header opened={opened} toggle={toggle} />
          </AppShell.Header>
          <AppShell.Navbar px="xs" pt="md">
              <Navbar desktopOpened={desktop_match} tabletOpened={tablet_match} mobileOpened={mobile_match} />
          </AppShell.Navbar>
          <AppShell.Main>{children}</AppShell.Main>
      </AppShell>

  );
}
