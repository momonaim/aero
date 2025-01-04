import React from "react";
import { Container, Typography, Grid, List, ListItem, ListItemText, Divider, Box } from "@mui/material";
import { FlightTakeoff, PhoneInTalk, Public } from "@mui/icons-material"; // Importing icons

const About = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ my: 8 }}>
                {/* Heading Section */}
                <Typography
                    variant="h3"
                    gutterBottom
                    align="center"
                    sx={{
                        fontWeight: "bold",
                        color: "primary.main",
                        mb: 4,
                    }}
                >
                    About SkyBooker
                </Typography>

                {/* Description Section */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" paragraph>
                            SkyBooker is your trusted partner in air travel, providing seamless flight booking experiences
                            since 2010. We are committed to making your journey comfortable and hassle-free.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our mission is to connect people to their destinations with the best possible service and
                            competitive prices. We believe in making air travel easy and accessible for everyone.
                        </Typography>
                    </Grid>

                    {/* Feature List Section */}
                    <Grid item xs={12} md={6}>
                        <List sx={{ backgroundColor: "background.paper", borderRadius: 2, boxShadow: 1, p: 2 }}>
                            <ListItem>
                                <FlightTakeoff sx={{ color: "primary.main", mr: 2 }} />
                                <ListItemText
                                    primary="24/7 Customer Support"
                                    secondary="We're always here to help you with your travel needs"
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <PhoneInTalk sx={{ color: "primary.main", mr: 2 }} />
                                <ListItemText
                                    primary="Best Price Guarantee"
                                    secondary="Find the most competitive prices for your flights"
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <Public sx={{ color: "primary.main", mr: 2 }} />
                                <ListItemText
                                    primary="Global Network"
                                    secondary="Access to thousands of destinations worldwide"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

                {/* Call-to-action Section */}
                <Box
                    sx={{
                        mt: 6,
                        p: 4,
                        backgroundColor: "primary.light",
                        borderRadius: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Ready to book your next flight?
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                        Join SkyBooker today and start your journey!
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        Discover thousands of destinations with the best deals available.
                    </Typography>
                    <Typography variant="button" component="a" href="/" sx={{ textDecoration: "none", color: "white" }}>
                        Start Booking Now
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default About;
