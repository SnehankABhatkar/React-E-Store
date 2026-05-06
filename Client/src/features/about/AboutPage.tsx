import { Container, Link, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Container>
      <Typography gutterBottom variant="h4">
        This is my personal project developed while learning react.
        <Link
          href="https://github.com/SnehankABhatkar/React-E-Store"
          underline="hover"
          sx={{ color: "secondary.main" }}
        >
          (GitHub)
        </Link>
      </Typography>
    </Container>
  );
}
