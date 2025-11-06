import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={800} gutterBottom>Iniciar Sesión</Typography>
      <Box component="form" sx={{ display: "grid", gap: 2 }}>
        <TextField label="Email" type="email" required fullWidth />
        <TextField label="Contraseña" type="password" required fullWidth />
        <Button type="submit" variant="contained">Entrar</Button>
      </Box>
    </Container>
  );
}
