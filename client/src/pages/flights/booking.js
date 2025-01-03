import { Grid, Box, Button, TextField, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Booking = () => {
    const { id } = useParams(); // Récupère l'identifiant du vol depuis l'URL
    const navigate = useNavigate();
    const location = useLocation();
    const flight = location.state?.flight; // Détails du vol
    const selectedClass = location.state?.searchDetails?.selectedClass;
    const passengers = location.state?.passengerSummary || [];
    console.log(location.state)

    const [newPassengers, setNewPassengers] = useState(passengers);

    // Gestion des changements dans les champs du formulaire des passagers
    const handlePassengerChange = (index, e) => {
        const { name, value } = e.target;
        const updatedPassengers = [...newPassengers];
        updatedPassengers[index][name] = value;
        setNewPassengers(updatedPassengers);
    };

    // Soumission du formulaire des passagers
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (newPassengers.every((p) => p.firstName && p.lastName && p.passportNumber)) {
    //         const updatedSummary = newPassengers.map((p) => ({
    //             firstName: p.firstName,
    //             lastName: p.lastName,
    //             passport: p.passportNumber,
    //             category: p.category || "Economy", // Catégorie par défaut si non définie
    //             class: flight?.class || "Standard",
    //         }));

    //         console.log("Réservation confirmée :", {
    //             flight,
    //             passengers: updatedSummary,
    //         });

    //         Swal.fire({
    //             title: "Réservation confirmée !",
    //             text: "Les détails des passagers ont été enregistrés avec succès.",
    //             icon: "success",
    //         });
    //     } else {
    //         Swal.fire({
    //             title: "Erreur",
    //             text: "Veuillez remplir tous les champs pour chaque passager.",
    //             icon: "error",
    //         });
    //     }
    // };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassengers.every((p) => p.firstName && p.lastName && p.passportNumber)) {
            const updatedSummary = newPassengers.map((p) => ({
                firstName: p.firstName,
                lastName: p.lastName,
                passport: p.passportNumber,
                category: p.category || "Economy", // Catégorie par défaut
                class: selectedClass || "Standard",
            }));

            navigate("/validation", {
                state: {
                    flight,
                    passengers: updatedSummary,
                },
            });
        } else {
            Swal.fire({
                title: "Erreur",
                text: "Veuillez remplir tous les champs pour chaque passager.",
                icon: "error",
            });
        }
    };


    // Gestion si aucun vol n'est sélectionné
    if (!flight) {
        return (
            <Typography variant="h6" color="error" align="center" sx={{ marginTop: 4 }}>
                Aucun vol sélectionné. Veuillez revenir à la page précédente.
            </Typography>
        );
    }

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Réservation de vol #{id}
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
                Vol {flight.name} : {flight.villeDepart} → {flight.villeArrivee}
            </Typography>
            <Typography variant="body2" align="center" gutterBottom>
                Date de départ : {flight.dateDepart} | Classe : {selectedClass || "Standard"}
            </Typography>
            <Divider sx={{ marginY: 3 }} />

            <form onSubmit={handleSubmit}>
                {newPassengers.map((passenger, index) => (
                    <Box
                        key={index}
                        sx={{
                            marginBottom: 4,
                            padding: 3,
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Passager {index + 1} ({passenger.category || "Economy"})
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Prénom"
                                    name="firstName"
                                    value={passenger.firstName}
                                    onChange={(e) => handlePassengerChange(index, e)}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Nom"
                                    name="lastName"
                                    value={passenger.lastName}
                                    onChange={(e) => handlePassengerChange(index, e)}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Numéro de passeport"
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

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Confirmer la réservation
                </Button>
            </form>
        </Box>
    );
};

export default Booking;
