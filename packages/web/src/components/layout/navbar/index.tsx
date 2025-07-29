import { Button, NavLink, ScrollArea } from "@mantine/core";
import { UserButton } from "../../";
import { Link } from "react-router";
import { RocketIcon } from "lucide-react";
import { useCurrentUser } from "../../../hooks";

export default function Navbar() {
  const { currentUser } = useCurrentUser();
  return (
    <>
      <ScrollArea p="md">
        <Button
          component={Link}
          to="/"
          variant="filled"
          leftSection={<RocketIcon size={16} color="white" />}
          radius="xl"
          fullWidth
          mb="xl"
        >
          Start
        </Button>
        <NavLink component={Link} to="/schedule" label="Schedule" />
        <NavLink label="Projects">
          <NavLink component={Link} to="/projects" label="All" />
          <NavLink component={Link} to="/projects" label="Project1" />
          <NavLink component={Link} to="/projects" label="Project12" />
        </NavLink>
        <NavLink label="Finances">
          <NavLink component={Link} to="/finances" label="All" />
          <NavLink component={Link} to="/finances" label="Subscriptions" />
          <NavLink component={Link} to="/finances" label="Budgets" />
        </NavLink>
      </ScrollArea>
      <UserButton
        name={`${currentUser?.first_name} ${currentUser?.last_name}`}
        email={currentUser?.email as string}
        avatarUrl={currentUser?.avatar_url as string}
      />
    </>
  );
}
