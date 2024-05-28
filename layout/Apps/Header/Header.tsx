import React from 'react';
import { ActionIcon, Burger, BurgerProps, Group, TextInput } from '@mantine/core';
import { IconBell, IconSearch } from '@tabler/icons-react';
import { ColorSchemeToggle, Logo } from '@/components';

type Props = {
    opened: BurgerProps['opened'];
    toggle: () => void;
};

export function Header(props: Props) {
    const { toggle, opened } = props;

    return (
        <Group h="100%" px="md" align="center" justify="space-between" style={{ flexWrap: 'nowrap' }}>
            <Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <Logo />
            </Group>
            <Group style={{ flexGrow: 1, justifyContent: 'center' }}>
                <TextInput
                    leftSection={<IconSearch size={14} />}
                    placeholder="Search information, messages and resources"
                    style={{ flex: '1 1 auto', minWidth: '60px', maxWidth: '400px' }}
                />
            </Group>
            <Group>
                <ColorSchemeToggle />
                <ActionIcon>
                    <IconBell size={18} />
                </ActionIcon>
            </Group>
        </Group>
    );
}
