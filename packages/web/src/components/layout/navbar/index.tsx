import { NavLink, ScrollArea } from "@mantine/core";
import { UserButton } from "../../";
import { Link } from "react-router";

const testUser = {
  name: "Neil Morrison",
  email: "neilmorrison@me.com",
  avatarUrl: "https://i.pravatar.cc/150?u=neilmorrison",
};

export default function Navbar() {
  return (
    <>
      <ScrollArea p="md">
        <NavLink component={Link} to="/" label="Home" />
      </ScrollArea>
      <UserButton {...testUser} />
    </>
  );
}
