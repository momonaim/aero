import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const PassengerForm = ({ onPassengerUpdate }) => {
    const [passengers, setPassengers] = useState([]);
    const [open, setOpen] = useState(false);
    // const [fullWidth, setFullWidth] = React.useState(true);
    // const [maxWidth, setMaxWidth] = React.useState('sm');

    const passengerCategories = ["Adulte", "Senior", "Étudiant", "Enfant", "Bébé"];

    const handleDialogOpen = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    const handleAddPassenger = () => {
        setPassengers((prev) => [...prev, { category: "", count: 1 }]);
        setTimeout(updateSummary, 0);
    };

    const handlePassengerChange = (index, field, value) => {
        const updatedPassengers = [...passengers];
        updatedPassengers[index][field] = value;
        setPassengers(updatedPassengers);
        setTimeout(updateSummary, 0);
    };

    const handleRemovePassenger = (index) => {
        const updatedPassengers = passengers.filter((_, i) => i !== index);
        setPassengers(updatedPassengers);
        setTimeout(updateSummary, 0);
    };

    const updateSummary = () => {
        const summary = passengers
            .filter((p) => p.category && p.count > 0)
            .map((p) => ({ category: p.category, count: p.count }));
        if (onPassengerUpdate) onPassengerUpdate(summary);
    };

    return (
        <Box>
            <TextField
                label="Passagers"
                value={passengers
                    .filter((p) => p.category && p.count > 0)
                    .map((p) => `${p.count} ${p.category}(s)`)
                    .join(", ")}
                onClick={handleDialogOpen}
                readOnly
                fullWidth
            />

            <Dialog
                open={open}
                onClose={handleDialogClose}
                fullWidth={true}
            >
                <DialogTitle>Ajouter des passagers</DialogTitle>
                <DialogContent>
                    {passengers.map((passenger, index) => (
                        <Box key={index} display="flex" alignItems="center" mb={2}>
                            <Select
                                value={passenger.category}
                                onChange={(e) =>
                                    handlePassengerChange(index, "category", e.target.value)
                                }
                                displayEmpty
                                fullWidth
                                style={{ marginRight: 8 }}
                            >
                                <MenuItem value="" disabled>
                                    Sélectionnez une catégorie
                                </MenuItem>
                                {passengerCategories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>

                            <TextField
                                label="Nombre"
                                type="number"
                                value={passenger.count}
                                onChange={(e) =>
                                    handlePassengerChange(index, "count", parseInt(e.target.value))
                                }
                                inputProps={{ min: 1 }}
                                style={{ marginRight: 8 }}
                            />

                            <IconButton onClick={() => handleRemovePassenger(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}

                    <Button
                        startIcon={<AddIcon />}
                        onClick={handleAddPassenger}
                        variant="outlined"
                        fullWidth
                    >
                        Ajouter un passager
                    </Button>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={handleDialogClose} color="secondary" variant="contained">
                        Confirmer
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default PassengerForm;
