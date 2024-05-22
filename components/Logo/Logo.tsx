import { Highlight, UnstyledButton } from '@mantine/core';

export function Logo() {
  return (
    <Highlight
      component={UnstyledButton}
      highlight="ai"
      fw={500}
      fz="lg"
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-blue-5), var(--mantine-color-violet-7))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      AI Matrix
    </Highlight>
  );
}
