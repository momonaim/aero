import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    Box,
    Button,
    TextField,
    Typography,
    Grid,
    Divider,
} from "@mui/material";

const Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { flight, passengers } = location.state || {};

    const [isRegistered, setIsRegistered] = useState(false);
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Logique de vérification d'utilisateur
        // Remplacer par une vraie API pour valider le login
        if (loginDetails.email === "test@example.com" && loginDetails.password === "password") {
            setIsRegistered(true);
            alert("Connexion réussie !");
        } else {
            alert("Échec de connexion. Vérifiez vos identifiants.");
        }
    };

    const handlePaymentSimulation = () => {
        alert("Paiement simulé avec succès !");
        navigate("/confirmation", { state: { flight, passengers } });
    };

    if (!flight || !passengers) {
        return (
            <Typography variant="h6" color="error">
                Aucune réservation trouvée. Veuillez revenir à la page précédente.
            </Typography>
        );
    }

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Paiement
            </Typography>
            <Divider sx={{ marginY: 2 }} />

            {!isRegistered ? (
                <>
                    <Typography variant="h6" gutterBottom>
                        Connectez-vous pour continuer
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    value={loginDetails.email}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Mot de passe"
                                    name="password"
                                    type="password"
                                    value={loginDetails.password}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ marginTop: 3 }}
                        >
                            Se connecter
                        </Button>
                    </form>
                </>
            ) : (
                <>
                    <Typography variant="h6" gutterBottom>
                        Détails de la réservation
                    </Typography>
                    <Typography variant="body1">
                        Vol : {flight.villeDepart} → {flight.villeArrivee}, Départ : {flight.dateDepart}
                    </Typography>
                    <Typography variant="body1">Passagers :</Typography>
                    <ul>
                        {passengers.map((p, index) => (
                            <li key={index}>
                                {p.firstName} {p.lastName}, Passeport : {p.passport},category: {p.category}, class: {p.class}
                            </li>
                        ))}
                    </ul>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handlePaymentSimulation}
                        sx={{ marginTop: 3 }}
                    >
                        Simuler le paiement
                    </Button>
                </>
            )}
        </Box>
    );
};

export default Payment;
