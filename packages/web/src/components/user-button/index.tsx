import { UnstyledButton, Avatar, Group, Box, Text } from "@mantine/core";
import classes from "./user-button.module.css";
import { Link } from "react-router";

interface IUserButtonProps {
  name: string;
  email?: string;
  avatarUrl?: string;
}

export default function UserButton({
  name,
  email,
  avatarUrl,
}: IUserButtonProps) {
  return (
    <UnstyledButton className={classes.root} component={Link} to="/profile">
      <Group>
        <Avatar src={avatarUrl} />
        <Box>
          <Text fw={500}>{name}</Text>
          <Text c="dimmed">{email}</Text>
        </Box>
      </Group>
    </UnstyledButton>
  );
}
