import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import PassengerDialog from "./PassengerDialog"; // Assurez-vous que le chemin est correct
import { Grid } from "@mui/material";

const LandingPage = ({ onFlightSelect }) => {
    const categories = [
        { label: "Adulte", reduction: 0 },
        { label: "Jeune (12-17 ans)", reduction: 0.1 },
        { label: "Enfant (2-11 ans)", reduction: 0.2 },
        { label: "Bébé (moins de 2 ans)", reduction: 0.5 },
    ];
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [date, setDate] = useState("");
    const [passengerSummary, setPassengerSummary] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState(""); // Ajout pour la classe de passager

    const classesOptions = ["Économique", "Affaire", "Première"];
    const cities = ["Paris", "Londres", "New York", "Tokyo", "Berlin"];

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleSearch = () => {
        if (!departure || !arrival || !date || !passengerSummary.length) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const searchDetails = {
            departure,
            arrival,
            date,
            passengerSummary: passengerSummary,
        };

        console.log("Search Details:", searchDetails);

        const mockFlight = { id: 1, name: "Vol Test", class: 'BUSINESS', details: "Détails du vol", passengerSummary: passengerSummary };
        onFlightSelect(mockFlight);
    };

    return (
        <Box p={3}>
            <h1>Rechercher un vol</h1>
            {/* Première ligne */}
            <Grid container spacing={2} mb={2}>
                <Grid item xs={4}>
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Ville de départ</InputLabel>
                        <Select
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                            label="Ville de départ"
                        >
                            {cities.map((city) => (
                                <MenuItem key={city} value={city}>
                                    {city}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Ville d'arrivée</InputLabel>
                        <Select
                            value={arrival}
                            onChange={(e) => setArrival(e.target.value)}
                            label="Ville d'arrivée"
                        >
                            {cities
                                .filter((city) => city !== departure)
                                .map((city) => (
                                    <MenuItem key={city} value={city}>
                                        <b>{city}</b>
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Date de départ"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        fullWidth
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>

            {/* Deuxième ligne */}
            <Grid container spacing={2} mb={2}>
                <Grid item xs={4}>
                    <TextField
                        label="Passagers"
                        value={passengerSummary.length ? `${passengerSummary.length} passagers` : ""}
                        onClick={handleOpenDialog}
                        fullWidth
                        margin="dense"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Classe de passager</InputLabel>
                        <Select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            label="Classe de passager"
                        >
                            {classesOptions.map((classOption) => (
                                <MenuItem key={classOption} value={classOption}>
                                    {classOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    {/* Optionnel : Place réservée si tu veux ajouter un autre champ */}
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSearch}
            >
                Rechercher
            </Button>

            <PassengerDialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                onPassengerUpdate={(summary) => setPassengerSummary(summary)}
                categories={categories}
            />
        </Box>
    );
};

export default LandingPage;
