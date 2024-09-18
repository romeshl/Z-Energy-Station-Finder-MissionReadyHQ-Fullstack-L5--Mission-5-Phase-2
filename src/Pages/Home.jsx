import { Button, Container, Typography } from '@mui/material';

// Home page component
export default function Home() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Material UI with React Vite
            </Typography>
            <Button variant="contained" color="primary">
                Click Me
            </Button>
        </Container>
    );
}
