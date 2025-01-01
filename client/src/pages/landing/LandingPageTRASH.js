import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import PassengerForm from "./PassengerForm";

const LandingPageTRASH = ({ onFlightSelect }) => {
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [date, setDate] = useState("");
    const [passengerSummary, setPassengerSummary] = useState([]);

    const handleSearch = () => {
        if (!departure || !arrival || !date || !passengerSummary.length) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const searchDetails = {
            departure,
            arrival,
            date,
            passengers: passengerSummary,
        };

        console.log("Search Details:", searchDetails);

        const mockFlight = { id: 1, name: "Vol Test", details: "Détails du vol" };
        onFlightSelect(mockFlight);
    };

    return (
        <Box p={3}>
            <h1>Rechercher un vol</h1>
            <Box mb={2}>
                <TextField
                    label="Ville de départ"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    label="Ville d'arrivée"
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                    fullWidth
                    margin="dense"
                />
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
            </Box>

            <Box mb={2}>
                <PassengerForm
                    onPassengerUpdate={(summary) => setPassengerSummary(summary)}
                />
            </Box>

            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSearch}
            >
                Rechercher
            </Button>
        </Box>
    );
};

export default LandingPageTRASH;
