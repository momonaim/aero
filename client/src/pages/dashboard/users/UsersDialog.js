import React, { useState, useRef } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';
import { useValue } from '../../../context/ContextProvider';
import { updateUser } from '../../../actions/user';

const UserDialog = ({ open, onClose, user, option }) => {
  console.log('eser', user)
  const { dispatch } = useValue();
  const [username, setUsername] = useState(user?.username || '');
  const [firstname, setFirstname] = useState(user?.firstname || '');
  const [lastname, setLastname] = useState(user?.lastname || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [email, setEmail] = useState(user?.email || '');
  const [role, setRole] = useState(user?.role || '');
  const [sexe, setSexe] = useState(user?.sexe || '');
  const nameRef = useRef();
  const phoneRef = useRef();

  const handleSave = () => {
    if (option === 'edit') {
      updateUser({ id: user.id, updateUser: user }, dispatch);
    } else if (option === 'add') {
      // addUser({ username, firstname, lastname, phone, email, role, sexe }, dispatch);
      console.log('addUser', { username, firstname, lastname, phone, email, role, sexe })
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{option === 'edit' ? 'Edit User' : 'Add User'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {option === 'edit' ? 'Modify the fields to update the user details.' : 'Fill in the fields to add a new user.'}
        </DialogContentText>
        <TextField
          autoFocus
          margin="normal"
          variant="standard"
          id="name"
          label="Name"
          type="text"
          fullWidth
          inputRef={nameRef}
          inputProps={{ minLength: 2 }}
          required
          defaultValue={user?.username}
        />
        <TextField

          margin="normal"
          variant="standard"
          id="name"
          label="Phone"
          type="text"
          fullWidth
          inputRef={phoneRef}
          inputProps={{ minLength: 2 }}
          required
          defaultValue={user?.phone}
        />
        <TextField autoFocus margin="dense" label="Username" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField margin="dense" label="First Name" fullWidth value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <TextField margin="dense" label="Last Name" fullWidth value={lastname} onChange={(e) => setLastname(e.target.value)} />
        <TextField margin="dense" label="Phone" fullWidth value={phone} onChange={(e) => setPhone(e.target.value)} />
        <TextField margin="dense" label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField margin="dense" label="Role" fullWidth value={role} onChange={(e) => setRole(e.target.value)} />
        <TextField margin="dense" label="Sexe" fullWidth value={sexe} onChange={(e) => setSexe(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          {option === 'edit' ? 'Save' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialog;
