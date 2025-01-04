import React, { useState } from "react";
import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Modal,
    Paper,
    Typography,
} from "@mui/material";

const TEST = () => {
    const [open, setOpen] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);

    const handleOpen = (flight) => {
        setSelectedFlight(flight);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedFlight(null);
    };

    const flights = [
        {
            id: 1,
            route: "New York to London",
            time: "08:00 AM - 9:00 PM",
            price: "$499",
            airline: "SkyWay Airlines",
            villeDepart: "New York",
            villeArrivee: "London",
            dateDepart: "2025-01-05",
            dateArrivee: "2025-01-05",
            ce_dispo: 2,
            ca_dispo: 20,
            cp_dispo: 10,
        },
        {
            id: 2,
            route: "Paris to Tokyo",
            time: "10:00 AM - 11:00 PM",
            price: "$799",
            airline: "Global Airways",
            villeDepart: "Paris",
            villeArrivee: "Tokyo",
            dateDepart: "2025-01-06",
            dateArrivee: "2025-01-07",
            ce_dispo: 50,
            ca_dispo: 25,
            cp_dispo: 15,
        },
        {
            id: 3,
            route: "Dubai to Singapore",
            time: "02:00 PM - 3:00 AM",
            price: "$599",
            airline: "Eastern Flights",
            villeDepart: "Dubai",
            villeArrivee: "Singapore",
            dateDepart: "2025-01-08",
            dateArrivee: "2025-01-09",
            ce_dispo: 1,
            ca_dispo: 20,
            cp_dispo: 5,
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ my: 8 }}>
            <Typography variant="h4" gutterBottom align="center">
                Available Flights
            </Typography>
            <Grid container spacing={3}>
                {flights.map((flight) => (
                    <Grid item xs={12} key={flight.id}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6">{flight.route}</Typography>
                                    <Typography color="text.secondary">{flight.airline}</Typography>
                                    <Button size="small" color="primary" sx={{ mt: 1 }} onClick={() => handleOpen(flight)}>
                                        Airplane Info
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography>{flight.time}</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h6" color="primary">
                                        {flight.price}
                                    </Typography>
                                    {flight.ce_dispo < 3 && (
                                        <Chip label={`Low Availability: ${flight.ce_dispo} left`}
                                            color="error" size="small" />
                                    )}
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={() => alert("Booking process triggered!")}
                                    >
                                        Book
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Modal for Flight Details */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 24,
                        maxWidth: 500,
                        width: "90%",
                    }}
                >
                    {selectedFlight && (
                        <>
                            <Typography variant="h6" gutterBottom>
                                Flight Details
                            </Typography>
                            <Typography>
                                <strong>Route:</strong> {selectedFlight.route}
                            </Typography>
                            <Typography>
                                <strong>Airline:</strong> {selectedFlight.airline}
                            </Typography>
                            <Typography>
                                <strong>Departure:</strong> {selectedFlight.villeDepart} at{" "}
                                {selectedFlight.dateDepart}
                            </Typography>
                            <Typography>
                                <strong>Arrival:</strong> {selectedFlight.villeArrivee} at{" "}
                                {selectedFlight.dateArrivee}
                            </Typography>
                            <Typography>
                                <strong>Available Seats:</strong>
                            </Typography>
                            <Typography>Economy: {selectedFlight.ce_dispo}</Typography>
                            <Typography>Business: {selectedFlight.ca_dispo}</Typography>
                            <Typography>First Class: {selectedFlight.cp_dispo}</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2 }}
                                fullWidth
                                onClick={() => alert("Booking process triggered!")}
                            >
                                Book Now
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </Container>
    );
};

export default TEST;
