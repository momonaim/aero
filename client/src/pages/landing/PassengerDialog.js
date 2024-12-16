import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// const categories = [
//   { label: "Adulte", reduction: 0 },
//   { label: "Jeune (12-17 ans)", reduction: 0.1 },
//   { label: "Enfant (2-11 ans)", reduction: 0.2 },
//   { label: "Bébé (moins de 2 ans)", reduction: 0.5 },
// ];

const PassengerDialog = ({ open, onClose, onPassengerUpdate, categories }) => {
  const [passengers, setPassengers] = useState([]);

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
