import { Button, Typography, Container } from '@mui/material';

export default function Footer() {
    return (
        <footer className="pt-[10px] mt-[10px] text-center bg-orange-200 h-[500px]">
            <Typography variant="body2" color="textSecondary">
                © 2024 My Application
            </Typography>
        </footer>
    );
}