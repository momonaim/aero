import React, { useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    Box,
    TextField,
    Button,
    Card,
    CardMedia,
    CardContent,
    Stack,
} from '@mui/material';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIosNew, ArrowForwardIos, Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const img = 'https://plus.unsplash.com/premium_photo-1734275012690-6d3006fba036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState('2 adults');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleCheckInChange = (event) => {
        setCheckIn(event.target.value);
    };

    const handleCheckOutChange = (event) => {
        setCheckOut(event.target.value);
    };

    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
    };
    const topDestinations = [
        {
            name: 'Bangkok',
            image: img,
        },
        {
            name: 'Cancun',
            image: img,
        },
        {
            name: 'Nha Trang',
            image: img,
        },
        {
            name: 'Phuket',
            image: img,
        },
    ];

    const popularActivities = [
        {
            image: img,
            title: 'European Way, Southampton, United',
        },
        {
            image: img,
            title: 'European Way, Southampton, United',
        },
        {
            image: img,
            title: 'European Way, Southampton, United',
        },
        {
            image: img,
            title: 'European Way, Southampton, United',
        },
        {
            image: img,
            title: 'European Way, Southampton, United',
        },
    ];
    const imageData = [
        {
            src: img, // Replace with actual image paths
            alt: 'Mountain Lake',
        },
        {
            src: img, // Replace with actual image paths
            alt: 'Mountain Lake',
        },
        {
            src: img, // Replace with actual image paths
            alt: 'Mountain Lake',
        },
        {
            src: img, // Replace with actual image paths
            alt: 'Mountain Lake',
        },
        {
            src: img, // Replace with actual image paths
            alt: 'Mountain Lake',
        },
    ];

    const topDestinationsSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <ArrowForwardIos />,
        prevArrow: <ArrowBackIosNew />,
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., navigate to search results page)
        console.log('Location:', location);
        console.log('Check-in:', checkIn);
        console.log('Check-out:', checkOut);
        console.log('Guests:', guests);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Container maxWidth="lg">
            {/* Hero Section */}
            <Box sx={{
                height: '50vh', // Increased height
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Stack alignItems="center" spacing={2}>
                    <Typography variant="h2" component="h1" align="center" color="white" gutterBottom>
                        Journey to Explore the World
                    </Typography>
                    <Typography variant="body1" align="center" color="white" sx={{ maxWidth: '600px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </Stack>
            </Box>

            {/* Search Bar */}
            <Box sx={{ my: 4 }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Location"
                                variant="outlined"
                                fullWidth
                                value={location}
                                onChange={handleLocationChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Check-in"
                                type="date"
                                variant="outlined"
                                fullWidth
                                value={checkIn}
                                onChange={handleCheckInChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Check-out"
                                type="date"
                                variant="outlined"
                                fullWidth
                                value={checkOut}
                                onChange={handleCheckOutChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Guests"
                                variant="outlined"
                                fullWidth
                                value={guests}
                                onChange={handleGuestsChange}
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                        Search
                    </Button>
                </form>
            </Box>

            {/* Value Propositions */}
            <Box sx={{ my: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img src={img} alt="Deal Icon" style={{ width: '50px' }} />
                            <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
                                Enjoy Deals & Delights
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Quality activities, great prices. Plus, earn credits to save more.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img src={img} alt="Explore Icon" style={{ width: '50px' }} />
                            <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
                                Exploring Made Easy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Book last minute, jetski & limo. Get free cancellation for easier exploring.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img src={img} alt="Trust Icon" style={{ width: '50px' }} />
                            <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
                                Travel You Can Trust
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Read reviews & get reliable customer support. We're with you every step.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img src={img} alt="Possibilities Icon" style={{ width: '50px' }} />
                            <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
                                Discover the Possibilities
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                With nearly half a million attractions, hotels & more, you're sure to find joy.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Top Destinations */}
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                    Top Destinations for Your Next Vacation
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={img}
                                alt="Destination 1"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Destination 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Brief description of the destination
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Add more destination cards here */}
                </Grid>
            </Box>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                    Top Destinations for Your Next Vacation
                </Typography>
                <Carousel {...topDestinationsSettings}>
                    {topDestinations.map((destination) => (
                        <Card key={destination.name} sx={{ maxWidth: 200, margin: '0 10px' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={destination.image}
                                alt={destination.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {destination.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* Optional: Add activity count or brief description */}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Carousel>
            </Box>

            {/* Popular Activities */}
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                    Popular Activities
                </Typography>
                <Grid container spacing={2}>
                    {popularActivities.map((activity) => (
                        <Grid item xs={12} sm={6} md={3} key={activity.title}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={activity.image}
                                    alt={activity.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {activity.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* Photo Gallery (Example) */}
            <Box sx={{ my: 4 }}>
                {/* ... (PhotoGallery component here) */}
                <Grid container spacing={2}>
                    {imageData.map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={image.src}
                                    alt={image.alt}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* Call to Action */}
            <Box sx={{ my: 4, bgcolor: 'lightgray', py: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" component="h3">
                                Subscribe to our Newsletter
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Get exclusive deals and travel inspiration delivered to your inbox.
                            </Typography>
                            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                <TextField
                                    label="Enter your email"
                                    variant="outlined"
                                    fullWidth
                                />
                                <Button variant="contained" color="primary">
                                    Subscribe
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" component="h3">
                                Download our App
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Book flights and hotels on the go with our mobile app.
                            </Typography>
                            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                {/* Replace with actual app store buttons/images */}
                                <Link href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={img} alt="App Store" style={{ height: 40 }} />
                                </Link>
                                <Link href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={img} alt="Google Play" style={{ height: 40 }} />
                                </Link>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" component="h3">
                                Follow Us
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Connect with us on social media for travel inspiration and updates.
                            </Typography>
                            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                <Link href="#" target="_blank" rel="noopener noreferrer">
                                    <Facebook />
                                </Link>
                                <Link href="#" target="_blank" rel="noopener noreferrer">
                                    <Instagram />
                                </Link>
                                <Link href="#" target="_blank" rel="noopener noreferrer">
                                    <Twitter />
                                </Link>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Footer */}
            <Box sx={{ bgcolor: 'gray', py: 2, mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6">Company</Typography>
                        <Link href="#" color="inherit">About Us</Link><br />
                        <Link href="#" color="inherit">News</Link><br />
                        <Link href="#" color="inherit">FAQ</Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6">Explore</Typography>
                        <Link href="#" color="inherit">Faq</Link><br />
                        <Link href="#" color="inherit">Tour Listings</Link><br />
                        <Link href="#" color="inherit">Destination</Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6">Quick Link</Typography>
                        <Link href="#" color="inherit">Home</Link><br />
                        <Link href="#" color="inherit">About Us</Link><br />
                        <Link href="#" color="inherit">Contact Us</Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6">Contact Info</Typography>
                        <Typography variant="body2" color="inherit">
                            Dehradun, Uttarakhand, India
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            <a href="mailto:rawatcoder@gmail.com">rawatcoder@gmail.com</a>
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            <a href="tel:+9876543210">+9876543210</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default LandingPage;