import React from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";
import Layout from "./src/components/layout";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => {
  return <MantineProvider theme={theme}>{element} </MantineProvider>;
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
