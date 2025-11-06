import { createTheme } from "@mui/material/styles";

const base = {
  palette: {
    primary:   { main: "#1e1e76" }, // --color-1
    secondary: { main: "#4b4bc3" }, // --color-2
    info:      { main: "#707ff5" }, // --color-3
    warning:   { main: "#a195f9" }, // --color-4
    success:   { main: "#f2a1f2" }, // --color-5
  },
  shape: { borderRadius: 10 },
  typography: { fontFamily: `"Inter","Roboto","Helvetica","Arial",sans-serif` },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none" as const, fontWeight: 600 } } },
    MuiAppBar: { styleOverrides: { root: { backgroundColor: "#1e1e76" } } },
  },
};

export const themeLight = createTheme({
  ...base,
  palette: {
    ...base.palette,
    mode: "light",
    background: { default: "#ffffff", paper: "#f8f8ff" },
    text: { primary: "#111" },
  },
});

export const themeDark = createTheme({
  ...base,
  palette: {
    ...base.palette,
    mode: "dark",
    background: { default: "#0b0b14", paper: "#151522" },
    text: { primary: "#fff" },
  },
});
