import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    useTheme,
    useMediaQuery,
    Grid,
} from "@mui/material";
import Swal from "sweetalert2";
import PassengerDialog from "./PassengerDialog";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ onFlightSelect }) => {
    const navigate = useNavigate();
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
    const [selectedClass, setSelectedClass] = useState("");

    const classesOptions = ["Économique", "Affaire", "Première"];
    const cities = ["CASA", "PARIS", "New York", "Tokyo", "Berlin", "RABAT", "MADRID"];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    // const handleSearch = () => {
    //     if (!departure || !arrival || !date || !passengerSummary.length) {
    //         Swal.fire({
    //             icon: "warning",
    //             title: "Champ(s) manquant(s)",
    //             text: "Veuillez remplir tous les champs avant de lancer la recherche.",
    //             confirmButtonText: "OK",
    //         });
    //         return;
    //     }

    //     const searchDetails = {
    //         departure,
    //         arrival,
    //         date,
    //         passengerSummary: passengerSummary,
    //     };

    //     console.log("Search Details:", searchDetails);

    //     const mockFlight = {
    //         id: 1,
    //         name: "Vol Test",
    //         class: "BUSINESS",
    //         details: "Détails du vol",
    //         passengerSummary: passengerSummary,
    //     };
    //     onFlightSelect(mockFlight);
    // };
    const handleSearch = async () => {
        if (!departure || !selectedClass || !arrival || !date || !passengerSummary.length) {
            Swal.fire({
                icon: "warning",
                title: "Champ(s) manquant(s)",
                text: "Veuillez remplir tous les champs avant de lancer la recherche.",
                confirmButtonText: "OK",
            });
            return;
        }

        try {
            const response = await axios.get("http://localhost:8080/vols/search", {
                params: {
                    dateDepart: date,
                    villeDepart: departure,
                    villeArrivee: arrival,
                },
            });
            console.log(response)

            navigate("/flights", {
                state: { flights: response.data, passengerSummary: passengerSummary, searchDetails: { departure, arrival, date, selectedClass } },
            });
        } catch (error) {
            console.error("Error fetching flights:", error);
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "Impossible de récupérer les vols disponibles.",
                confirmButtonText: "OK",
            });
        }
    };


    return (
        <Box p={isMobile ? 2 : 3}>
            {/* <h1 style={{ fontSize: isMobile ? "1.5rem" : "2rem", textAlign: "center" }}>Rechercher un vol</h1> */}
            <Grid container spacing={2} mb={2}>
                <Grid item xs={12} sm={6} md={4}>
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
                <Grid item xs={12} sm={6} md={4}>
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
                <Grid item xs={12} sm={6} md={4}>
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
                <Grid item xs={12} sm={6} md={4}>
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
                <Grid item xs={12} sm={6} md={4}>
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
            </Grid>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSearch}
                size={isMobile ? "medium" : "large"}
                sx={{
                    fontSize: isMobile ? "0.875rem" : "1rem",
                }}
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
