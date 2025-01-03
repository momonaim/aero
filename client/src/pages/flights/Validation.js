import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography, Divider, Grid } from "@mui/material";

const Validation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { flight, passengers } = location.state || {};

    if (!flight || !passengers) {
        return (
            <Typography variant="h6" color="error" align="center">
                Aucune donnée à afficher. Veuillez revenir en arrière.
            </Typography>
        );
    }

    const handleConfirm = () => {
        console.log("Détails confirmés :", { flight, passengers });
        // TODO: Envoyer les données au backend si nécessaire
        navigate("/payment", { state: { flight, passengers } });
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Validation de la réservation
            </Typography>

            <Typography variant="h6" gutterBottom>
                Détails du vol
            </Typography>
            <Typography variant="body1">
                Vol : {flight.name} ({flight.villeDepart} → {flight.villeArrivee})
            </Typography>
            <Typography variant="body1">
                Date de départ : {flight.dateDepart}
            </Typography>
            <Typography variant="body1">
                Classe : {flight.class || "Standard"}
            </Typography>
            <Divider sx={{ marginY: 3 }} />

            <Typography variant="h6" gutterBottom>
                Détails des passagers
            </Typography>
            {passengers.map((passenger, index) => (
                <Box
                    key={index}
                    sx={{
                        padding: 2,
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        marginBottom: 2,
                        backgroundColor: "#f9f9f9",
                    }}
                >
                    <Typography variant="body1">
                        Passager {index + 1} : {passenger.firstName} {passenger.lastName}
                    </Typography>
                    <Typography variant="body2">
                        Numéro de passeport : {passenger.passport}
                    </Typography>
                    <Typography variant="body2">
                        Catégorie : {passenger.category || "Economy"}
                    </Typography>
                </Box>
            ))}

            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleConfirm}
            >
                Valider la réservation
            </Button>
        </Box>
    );
};

export default Validation;
