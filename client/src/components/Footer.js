import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Box sx={{ bgcolor: "grey.900", color: "white", py: 6, mt: "auto" }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2">
                            We are committed to providing the best flight booking experience.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Typography variant="body2" component="div">
                            <Box component="span" display="block" mb={1}>
                                Terms of Service
                            </Box>
                            <Box component="span" display="block" mb={1}>
                                Privacy Policy
                            </Box>
                            <Box component="span" display="block">
                                Contact Us
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton color="inherit">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit">
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
