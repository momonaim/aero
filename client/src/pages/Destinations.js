import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const destinations = [
    {
        title: "Paris, France",
        image: "https://images.unsplash.com/photo-1522582324369-2dfc36bd9275",
        description: "The city of love and lights awaits you.",
    },
    {
        title: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
        description: "Experience the vibrant culture of Tokyo.",
    },
    {
        title: "New York, USA",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmV3JTIwWW9yayUyQyUyMFVTQXxlbnwwfHwwfHx8MA%3D%3D",
        description: "The city that never sleeps is calling.",
    },
    {
        title: "Rome, Italy",
        image: "https://plus.unsplash.com/premium_photo-1722201172121-a36b8ea02866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJvbWV8ZW58MHx8MHx8fDA%3D",
        description: "Discover the ancient wonders of Rome.",
    },
    {
        title: "Sydney, Australia",
        image: "https://images.unsplash.com/photo-1549180030-48bf079fb38a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3lkbmV5fGVufDB8fDB8fHww",
        description: "Explore the beauty of Sydney and its iconic Opera House.",
    },
    {
        title: "London, UK",
        image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fHww",
        description: "Discover the rich history and modern charm of London.",
    }
];



export default function Destinations() {
    return (
        <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    mb: 5,
                    fontWeight: "bold",
                    color: "primary.main",
                }}
            >
                Explore Our Destinations
            </Typography>

            <Grid container spacing={3}>
                {destinations.map((destination, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            sx={{
                                position: "relative",
                                height: 300,
                                borderRadius: "10px",
                                overflow: "hidden",
                                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                                backgroundImage: `url(${destination.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: "rgba(0, 0, 0, 0.5)",
                                    color: "white",
                                    padding: "10px",
                                    borderRadius: "0 0 10px 10px",
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="h6">{destination.title}</Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: "0.875rem" }}
                                >
                                    {destination.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
