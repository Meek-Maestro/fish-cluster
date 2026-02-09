import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import AppShellNavBar from "./side-panel";
import AppShellHeader from "./header";

export default function MainAppShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
        // header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    //   withBorder={false}
    >
      {/* <AppShell.Header> */}
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <div>Logo</div> */}
        <AppShellHeader />
      {/* </AppShell.Header> */}

      <AppShell.Navbar>
        <AppShellNavBar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
