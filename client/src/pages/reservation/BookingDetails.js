import { Grid } from "@mui/material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const BookingDetails = () => {
    const { id } = useParams(); // Récupérer l'identifiant du vol depuis l'URL
    const location = useLocation();
    const flight = location.state?.flight; // Récupérer les détails du vol
    const passengers = flight?.passengerSummary || []; // Récupérer les passagers du vol




    const [newPassengers, setNewPassengers] = useState(passengers);
    const [passengerSummary, setPassengerSummary] = useState([]);

    // Gestion des changements dans les champs du formulaire de passager
    const handlePassengerChange = (index, e) => {
        const { name, value } = e.target;
        const updatedPassengers = [...newPassengers];
        updatedPassengers[index][name] = value;
        setNewPassengers(updatedPassengers);
    };

    // Gestion de la soumission du formulaire des passagers
    const handlePassengerSubmit = (e) => {
        e.preventDefault();
        if (newPassengers.every(passenger => passenger.firstName && passenger.lastName && passenger.passportNumber)) {
            const newSummary = newPassengers.map(p => ({
                class: flight.class,
                category: p.category,
                firstName: p.firstName,
                lastName: p.lastName,
                passport: p.passportNumber,
            }));
            setPassengerSummary(newSummary);
            console.log('handlePassengerSubmit', newSummary);
            Swal.fire({
                title: "Good job!",
                text: "Booking Submitted!",
                icon: "success"
            });
            setNewPassengers([{ firstName: '', lastName: '', passportNumber: '' }]); // Réinitialiser le formulaire
        } else {
            alert("Veuillez remplir tous les champs des passagers.");
        }
    };

    // Gestion de la soumission du formulaire principal
    const handleSubmit = (e) => {
        e.preventDefault();

        // Exemple de traitement : afficher les données dans la console
        console.log('Booking Submitted:', {
            flight,
            passengers: passengerSummary,
        });


        // Ici, envoyer les données au backend via une API si nécessaire
        // Exemple avec fetch:
        // fetch('/api/bookings', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ flight, ...formData, passengers: passengerSummary }),
        // })
        // .then((response) => response.json())
        // .then((data) => console.log('Booking Confirmed:', data))
        // .catch((error) => console.error('Error:', error));

        // Réinitialisation des champs ou redirection après soumission
        alert('Booking confirmed!');
    };

    // Gestion si aucun vol n'est sélectionné
    if (!flight) {
        return <Typography>No flight selected. Please go back to search.</Typography>;
    }

    return (
        <Box sx={{ padding: 2 }}>
            <h1>
                Flight Booking System
            </h1>
            <h2>
                Booking Details
            </h2>
            <Typography variant="body1" gutterBottom>
                Selected Flight: {`${flight.name} [ ${id} ]`}
            </Typography>

            <form onSubmit={handlePassengerSubmit}>
                {passengers.map((passenger, index) => (
                    <Box key={index} sx={{ marginBottom: 4, padding: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
                        <Typography variant="h6" gutterBottom>
                            Passenger {index + 1}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Category: {passenger.category}
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <TextField
                                    label="First Name"
                                    name="firstName"
                                    value={passenger.firstName}
                                    onChange={(e) => handlePassengerChange(index, e)}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Last Name"
                                    name="lastName"
                                    value={passenger.lastName}
                                    onChange={(e) => handlePassengerChange(index, e)}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Passport Number"
                                    name="passportNumber"
                                    value={passenger.passportNumber}
                                    onChange={(e) => handlePassengerChange(index, e)}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                ))}

                <Button type="submit" variant="contained" color="primary">
                    Confirm Booking
                </Button>
            </form>
        </Box>
    );
};

export default BookingDetails;
