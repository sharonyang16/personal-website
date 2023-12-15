import React from "react";
import { Link, PageProps } from "gatsby";
import { AppShell, AppShellNavbar, Container, NavLink } from "@mantine/core";

const Layout: React.FC<PageProps> = (props) => {
  return (
    <AppShell
      header={{ height: "fit-content" }}
      footer={{ height: "fit-content" }}
    >
      <AppShell.Header>
        <Container>sharon yang</Container>

        <AppShell.Navbar>
          <Link to="/about">
            <NavLink label="about" variant=""></NavLink>
          </Link>
          <NavLink label="work"></NavLink>
          <NavLink label="contact"></NavLink>
        </AppShell.Navbar>
      </AppShell.Header>
      <AppShell.Main>{props.children}</AppShell.Main>
      <AppShell.Footer>footer</AppShell.Footer>
    </AppShell>
  );
};

export default Layout;
