import { Button, Container, Group, Image, Text, Title } from '@mantine/core';
import { IconArrowUpRight, IconBrain } from '@tabler/icons-react';
import classes from './GuestHero.module.css';

export function GuestHero() {
  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Group gap="xs" className={classes.highlight}>
            <IconBrain />
            <Text fw={500}>AI + Business</Text>
          </Group>
          <Title className={classes.title}>Seamlessly AI Intergration for Business.</Title>
          <Text c="dimmed" mt="md">
            We will help integrate AI models into your application or business process.
          </Text>

          <Group mt={30}>
            <Button size="md">Get started</Button>
            <Button size="md" variant="light" rightSection={<IconArrowUpRight />}>
              Learn More
            </Button>
          </Group>
        </div>
        <Image src="/welcome-hero.png" className={classes.image} />
      </div>
    </Container>
  );
}
