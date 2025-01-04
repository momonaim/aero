import React from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
    Avatar,
    Rating,
} from "@mui/material";
import { styled } from "@mui/system";
import LandingPage from "../landing/Landing";

const HeroSection = styled(Box)(({ theme }) => ({
    backgroundImage: `url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
}));

const SearchForm = styled(Box)(({ theme }) => ({
    backgroundColor: "rgba(187, 187, 187, 0.3)",
    backdropFilter: "blur(10px)",
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    position: "relative",
    zIndex: 1,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
}));

const destinations = [
    {
        id: 1,
        name: "Paris, France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3",
        description: "Experience the magic of the City of Light.",
        price: "$599",
        rating: 4.8,
    },
    {
        id: 2,
        name: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3",
        description: "Discover the perfect blend of tradition and modernity.",
        price: "$799",
        rating: 4.9,
    },
    {
        id: 3,
        name: "New York, USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3",
        description: "Explore the city that never sleeps.",
        price: "$499",
        rating: 4.7,
    },
];

const testimonials = [
    {
        id: 1,
        name: "John Smith",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
        rating: 5,
        comment: "Best flight booking experience ever! Smooth and hassle-free.",
    },
    {
        id: 2,
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
        rating: 5,
        comment: "Great deals and excellent customer service. Highly recommended!",
    },
    {
        id: 3,
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
        rating: 4,
        comment: "Very reliable service with competitive prices.",
    },
];

const Hero = ({ onFlightSelect }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box>
            {/* Hero Section */}
            <HeroSection>
                <Container maxWidth="lg">
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={8}>
                            <SearchForm sx={{ px: isMobile ? 2 : 4, py: isMobile ? 2 : 4 }}>
                                <Typography
                                    variant={isMobile ? "h5" : "h4"}
                                    gutterBottom
                                    align="center"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "white",
                                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                    }}
                                >
                                    Find Your Perfect Flight
                                </Typography>
                                <LandingPage onFlightSelect={onFlightSelect} />
                            </SearchForm>
                        </Grid>
                    </Grid>
                </Container>
            </HeroSection>

            {/* Popular Destinations */}
            <Container maxWidth="lg" sx={{ my: 8 }}>
                <Typography variant={isMobile ? "h5" : "h4"} gutterBottom align="center">
                    Popular Destinations
                </Typography>
                <Grid container spacing={4}>
                    {destinations.map((destination) => (
                        <Grid item xs={12} sm={6} md={4} key={destination.id}>
                            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={destination.image}
                                    alt={destination.name}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {destination.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {destination.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            mb: 2,
                                        }}
                                    >
                                        <Typography variant="h6" color="primary">
                                            {destination.price}
                                        </Typography>
                                        <Rating value={destination.rating} precision={0.1} readOnly />
                                    </Box>
                                    <Button variant="outlined" color="primary" fullWidth>
                                        Explore Flights
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Customer Testimonials */}
            <Container maxWidth="lg" sx={{ my: 8 }}>
                <Typography variant={isMobile ? "h5" : "h4"} gutterBottom align="center">
                    What Our Customers Say
                </Typography>
                <Grid container spacing={4}>
                    {testimonials.map((testimonial) => (
                        <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
                            <Card sx={{ height: "100%", boxShadow: 3, borderRadius: 2 }}>
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            mb: 2,
                                        }}
                                    >
                                        <Avatar
                                            src={testimonial.avatar}
                                            sx={{ width: 56, height: 56, mr: 2 }}
                                        />
                                        <Box>
                                            <Typography variant="h6">{testimonial.name}</Typography>
                                            <Rating value={testimonial.rating} readOnly size="small" />
                                        </Box>
                                    </Box>
                                    <Typography variant="body1" color="text.secondary">
                                        {testimonial.comment}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Call to Action */}
            <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant={isMobile ? "h5" : "h4"}
                        align="center"
                        gutterBottom
                    >
                        Ready for Your Next Adventure?
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        Book your flight today and start your journey!
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{ mt: 2 }}
                        >
                            Book Your Flight Now
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Hero;
