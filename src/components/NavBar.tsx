"use client";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Box, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ColorModeToggle from "./ColorModeToogle";

export default function NavBar() {
  return (
    <AppBar position="sticky" elevation={1} sx={{ backdropFilter: "saturate(180%) blur(8px)" }}>
      <Toolbar sx={{ gap: 2 }}>
        {/* Logo */}
        <Box component={Link} href="/" sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.svg" alt="Tickets" width={32} height={32} />
        </Box>

        {/* Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button component={Link} href="/" color="inherit">Eventos</Button>
          <Button component={Link} href="/venues" color="inherit">Venues</Button>
          <Button component={Link} href="/artistas" color="inherit">Artistas</Button>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Buscador */}
        <Box sx={{ maxWidth: 420, width: "100%" }}>
          <TextField
            size="small"
            fullWidth
            placeholder="Buscar eventos"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="buscar">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Tema + Login */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ColorModeToggle />
          <Button
            component={Link}
            href="/login"
            variant="contained"
            color="secondary"
            sx={{ fontWeight: 700 }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
