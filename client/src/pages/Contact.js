import React from 'react';
import { Email, Map, Phone } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Grid, List, ListItem, ListItemText, TextField } from '@mui/material';
import { Container, Typography } from '@mui/material';

const Contact = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ my: 8 }}>
                {/* Contact Us Heading */}
                <Typography
                    variant="h3"
                    gutterBottom
                    align="center"
                    sx={{
                        fontWeight: 'bold',
                        color: 'primary.main',
                        mb: 5,
                    }}
                >
                    Contact Us
                </Typography>

                <Grid container spacing={4}>
                    {/* Contact Form Section */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Get in Touch
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We’d love to hear from you! Please fill out the form below to send us a message.
                                </Typography>
                                <Box sx={{ mb: 3 }}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        margin="normal"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ mt: 2, fontWeight: 'bold' }}
                                    >
                                        Send Message
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Contact Information Section */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Contact Information
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    You can reach us through the following methods:
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Phone sx={{ mr: 2, color: 'primary.main' }} />
                                        <ListItemText primary="+1 (555) 123-4567" />
                                    </ListItem>
                                    <ListItem>
                                        <Email sx={{ mr: 2, color: 'primary.main' }} />
                                        <ListItemText primary="support@skybooker.com" />
                                    </ListItem>
                                    <ListItem>
                                        <Map sx={{ mr: 2, color: 'primary.main' }} />
                                        <ListItemText primary="123 Aviation Street, New York, NY 10001" />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Contact;
