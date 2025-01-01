import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PassengerDialog = ({ open, onClose, onPassengerUpdate, categories }) => {
  const [passengers, setPassengers] = useState([]);
  const [error, setError] = useState(false);  // To manage error state

  const handleAddPassenger = () => {
    setPassengers([...passengers, { category: '', reduction: 0 }]);
  };

  const handleCategoryChange = (index, event) => {
    const newPassengers = [...passengers];
    const selectedCategory = categories.find(cat => cat.label === event.target.value);
    newPassengers[index].category = selectedCategory.label;
    newPassengers[index].reduction = selectedCategory.reduction;
    setPassengers(newPassengers);
    onPassengerUpdate(newPassengers);
  };

  const handleRemovePassenger = (index) => {
    const updatedPassengers = passengers.filter((_, i) => i !== index);
    setPassengers(updatedPassengers);
    onPassengerUpdate(updatedPassengers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all passengers have a selected category
    const isValid = passengers.every((passenger) => passenger.category !== '');

    if (!isValid) {
      setError(true);  // Set error state if any passenger doesn't have a category
      return;
    }

    console.log("Passengers Data:", passengers);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Ajouter des passagers</DialogTitle>
      <DialogContent>
        {passengers.map((passenger, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              label={`Passager ${index + 1}`}
              value={passenger.category}
              onChange={(event) => handleCategoryChange(index, event)}
              select
              fullWidth
              margin="dense"
              required  // Make the category field required
              error={error && passenger.category === ''} // Show error if field is empty
              helperText={error && passenger.category === '' ? "Veuillez sélectionner une catégorie" : ""}
            >
              {categories.map((category) => (
                <MenuItem key={category.label} value={category.label}>
                  {category.label}
                </MenuItem>
              ))}
            </TextField>
            <IconButton onClick={() => handleRemovePassenger(index)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
        <Button onClick={handleAddPassenger}>Ajouter un passager</Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Annuler</Button>
        <Button variant="contained" onClick={handleSubmit} color="primary">Continuer</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PassengerDialog;
