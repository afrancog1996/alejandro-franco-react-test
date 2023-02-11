import { Favorite } from "@mui/icons-material";
import { Box, Container, Grid, Paper } from "@mui/material";

const FooterBarApp = () => {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
        maxWidth: "100%",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>Made with</Grid>
            <Grid item marginTop={1}>
              <Favorite sx={{ color: "red" }} fontSize="small" />
            </Grid>
            <Grid item>by Alejandro Franco</Grid>
          </Grid> 
        </Box>
      </Container>
    </Paper>
  );
}


export default FooterBarApp;