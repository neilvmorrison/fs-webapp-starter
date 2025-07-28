import { ActionIcon, Group, Text } from "@mantine/core";
import { BrainCogIcon } from "lucide-react";

export default function Logo() {
  return (
    <Group>
      <ActionIcon size={24} variant="subtle" color="indigo" radius="md">
        <BrainCogIcon />
      </ActionIcon>
      <Text
        fw={700}
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
      >
        Big Brain Time
      </Text>
    </Group>
  );
}
