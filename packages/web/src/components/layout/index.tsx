import { AppShell, ScrollArea, Group } from "@mantine/core";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import { UserButton, Logo } from "..";
import classes from "./layout.module.css";

const testUser = {
  name: "Neil Morrison",
  email: "neilmorrison@me.com",
  avatarUrl: "https://i.pravatar.cc/150?u=neilmorrison",
};

export default function Layout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <Group align="center" h={60}>
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            size="sm"
            hiddenFrom="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            size="sm"
            visibleFrom="sm"
          />
          <Logo />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className={classes.navbar}>
        <ScrollArea />
        <UserButton {...testUser} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
