import { Text } from "@mantine/core";

export default function Logo() {
  return (
    <Text fw={700} variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
      App Name Inc.
    </Text>
  );
}
