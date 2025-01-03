import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Divider,
    Button,
    Chip,
} from "@mui/material";

const FlightResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { flights, searchDetails, passengerSummary } = location.state || {};
    console.log(location.state)

    // Fonction pour calculer les prix
    const calculatePrice = (basePrice, multiplier) => {
        return (basePrice * multiplier).toFixed(2);
    };

    const handleSelectVol = (flight) => {
        navigate(`/booking/${flight.id}`, { state: { flight, passengerSummary, searchDetails } });
    };

    if (flights.length === 0) {
        return (
            <Typography variant="h6" color="error" align="center">
                Aucun vol trouvé.
            </Typography>
        );
    }

    return (
        <Box p={3} sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
            <Typography variant="h4" gutterBottom align="center">
                Vols Disponibles
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
                Résultats pour le trajet {searchDetails.departure} → {searchDetails.arrival} le{" "}
                {searchDetails.date}.
            </Typography>
            <Grid container spacing={3}>
                {flights?.length ? (
                    flights.map((flight) => (
                        <Grid item xs={12} sm={6} md={4} key={flight.id}>
                            <Card
                                sx={{
                                    borderRadius: "10px",
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Vol #{flight.id}
                                    </Typography>
                                    <Divider sx={{ marginBottom: 2 }} />
                                    <Typography variant="body2" color="textSecondary">
                                        <strong>Départ :</strong> {flight.villeDepart} -{" "}
                                        {flight.dateDepart}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <strong>Arrivée :</strong> {flight.villeArrivee} -{" "}
                                        {flight.dateArrivee}
                                    </Typography>
                                    <Divider sx={{ marginY: 2 }} />
                                    <Typography variant="body1" color="primary" gutterBottom>
                                        Places Disponibles :
                                    </Typography>
                                    <Typography variant="body2">
                                        Classe Économique : {flight.ce_dispo}
                                    </Typography>
                                    <Typography variant="body2">
                                        Classe Affaires : {flight.ca_dispo}
                                    </Typography>
                                    <Typography variant="body2">
                                        Classe Première : {flight.cp_dispo}
                                    </Typography>
                                    <Divider sx={{ marginY: 2 }} />
                                    <Typography variant="body1" color="primary" gutterBottom>
                                        Prix (Estimés) :
                                    </Typography>
                                    <Typography variant="body2">
                                        Classe Économique : {calculatePrice(100, 1)} €
                                    </Typography>
                                    <Typography variant="body2">
                                        Classe Affaires : {calculatePrice(100, 1.5)} €
                                    </Typography>
                                    <Typography variant="body2">
                                        Classe Première : {calculatePrice(100, 2)} €
                                    </Typography>
                                    <Divider sx={{ marginY: 2 }} />
                                    {flight.canceled ? (
                                        <Chip label="Annulé" color="error" />
                                    ) : (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{ marginTop: 2 }}
                                            onClick={() => handleSelectVol(flight)}
                                        >
                                            Réserver
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                        sx={{ width: "100%", marginTop: 4 }}
                    >
                        Aucun vol trouvé pour les critères sélectionnés.
                    </Typography>
                )}
            </Grid>
        </Box>
    );
};

export default FlightResults;
