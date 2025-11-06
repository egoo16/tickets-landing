import { Box, Container, Typography, Card, CardContent, Button } from "@mui/material";
import Grid from "@mui/material/Grid"

export default function Page() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={800} color="primary.main" gutterBottom>
        Eventos destacados
      </Typography>

      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700}>Evento #{i}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Descripción del evento, venue y fecha.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" size="small">Ver detalles</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
