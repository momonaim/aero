import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';
import { updateUser, addUser } from '../../../actions/user';
import { useValue } from '../../../context/ContextProvider';
import Swal from 'sweetalert2';

const AvionsDialog = ({ open, onClose, user, option }) => {
  const {
    dispatch,
  } = useValue();
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('USER');
  const [sexe, setSexe] = useState('');
  const [password, setPassword] = useState('');

  // Populate form when editing a user
  useEffect(() => {
    if (option === 'edit' && user) {
      setId(user.id || '');
      setUsername(user.username || '');
      setFirstname(user.firstname || '');
      setLastname(user.lastname || '');
      setPhone(user.phone || '');
      setEmail(user.email || '');
      setRole(user.role || 'USER');
      setSexe(user.sexe || '');
    } else {
      // Clear fields for add mode
      setId('');
      setUsername('');
      setFirstname('');
      setLastname('');
      setPhone('');
      setEmail('');
      setRole('USER');
      setSexe('');
      setPassword('');
    }
  }, [user, option]);

  const handleSave = async () => {
    if (option === 'edit') {
      const updatedUser = { id, username, firstname, lastname, phone, email, role, sexe };
      await updateUser(updatedUser, id, dispatch);
      Swal.fire({
        title: 'Succès',
        text: 'Les informations de l\'utlisateur ont été sauvegardées.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } else if (option === 'add') {
      const newUser = { username, firstname, lastname, phone, email, role, sexe, password };
      console.log(newUser);
      await addUser(newUser, dispatch);
      Swal.fire({
        title: 'Succès',
        text: 'L\'utlisateur a été ajouté ',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{option === 'edit' ? 'Edit Airplane' : 'Add Airplane'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {option === 'edit'
            ? 'Modify the fields to update the user details.'
            : 'Fill in the fields to add a new user.'}
        </DialogContentText>
        {option === 'edit' && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>ID:</strong> {id || 'N/A'}
          </Typography>
        )}
        <TextField
          margin="dense"
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          label="First Name"
          fullWidth
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          label="Last Name"
          fullWidth
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          label="Phone"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          label="Email"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <MenuItem value="USER">USER</MenuItem>
            <MenuItem value="ADMIN">ADMIN</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Gender"
          fullWidth
          value={sexe}
          onChange={(e) => setSexe(e.target.value)}
        />
        {option === 'add' && (
          <TextField
            margin="dense"
            label="Password"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          disabled={!username || !firstname || !email || (option === 'add' && !password)}
        >
          {option === 'edit' ? 'Save' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AvionsDialog;
