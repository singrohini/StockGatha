import { Link, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";

interface RootLayoutProps {
  children: JSX.Element;
}

function RootLayout({ children }: RootLayoutProps) {
  const location = useLocation();
  console.log("location.pathname", location.pathname);

  const [mode, setMode] = React.useState<PaletteMode>("light");
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
export default RootLayout;
