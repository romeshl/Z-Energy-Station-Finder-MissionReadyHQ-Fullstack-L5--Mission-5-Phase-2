import { Button, Typography, Container } from '@mui/material';

// Find Station page component
export default function FindAStation() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h2" gutterBottom>
                Find a Station Page
            </Typography>
            <Typography variant="body1" gutterBottom>
                This is where you can find the nearest station.
            </Typography>
        </Container>
    );
}