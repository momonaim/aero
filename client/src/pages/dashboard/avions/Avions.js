import { useEffect, useState } from 'react';
import { Box, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, Table, TableBody, TableCell } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { useValue } from '../../../context/ContextProvider';
import { getUsers, deleteUser } from '../../../actions/user';
import { Close, DeleteForever, ModeEdit, Visibility } from '@mui/icons-material';
import UserDialog from './AvionsDialog';
import Swal from 'sweetalert2'
import { TableRow } from '@mui/material';


const Avions = ({ setSelectedLink, link }) => {
    const {
        state: { users },
        dispatch,
    } = useValue();

    useEffect(() => {
        setSelectedLink(link);
        if (users.length === 0) getUsers(dispatch);
    }, [dispatch, link, setSelectedLink, users.length]);


    const [dialogOpen, setDialogOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [dialogOption, setDialogOption] = useState('');
    const [viewOpen, setViewOpen] = useState(false);

    const handleDialogOpen = (option, user = null) => {
        setDialogOption(option);
        setCurrentUser(option === 'edit' ? user : null);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        setCurrentUser(null);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteUser(id, dispatch);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };
    const handleView = (user) => {
        setCurrentUser(user);
        setViewOpen(true);
        console.log(user);
    };

    const closeView = () => {
        setViewOpen(false);
        setCurrentUser(null);
    };

    const columns = [
        { name: 'id', label: 'Id' },
        { name: 'username', label: 'Username', editable: true },
        { name: 'firstname', label: 'First Name' },
        { name: 'lastname', label: 'Last Name' },
        { name: 'phone', label: 'Phone' },
        { name: 'email', label: 'Email' },
        {
            name: 'role',
            label: 'Role',
            options: {
                customBodyRender: (value) => value || 'N/A',
            },
        },
        {
            name: 'sexe',
            label: 'Gender',
            options: {
                customBodyRender: (value) => value || 'N/A',
            },
        },
        {
            name: 'actions',
            label: 'Actions',
            options: {
                customBodyRender: (value, tableMeta) => {
                    const rowIndex = tableMeta.rowIndex;
                    const user = users[rowIndex];

                    return (
                        <Box>
                            <IconButton
                                color="primary"
                                size="small"
                                onClick={() => handleDialogOpen('edit', user)}
                                sx={{ mr: 1 }}
                            >
                                <ModeEdit />
                            </IconButton>
                            <IconButton
                                color="error"
                                size="small"
                                onClick={() => handleDelete(user.id)}
                                sx={{ mr: 1 }}
                            >
                                <DeleteForever />
                            </IconButton>
                            <IconButton
                                color="default"
                                size="small"
                                onClick={() => handleView(user)}
                            >
                                <Visibility />
                            </IconButton>
                        </Box>
                    );
                },
                filter: false,
                sort: false,

            },
        },
    ];

    const options = {
        filterType: 'dropdown',
        selectableRows: 'none',
        responsive: 'standard',
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 20],
        download: true,
        print: true,
        search: true,
    };

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            <Typography
                variant="h4"
                component="h4"
                sx={{ textAlign: 'center', mb: 3 }}
            >
                Manage Airplanes
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDialogOpen('add')}
                >
                    Add Airplane
                </Button>
            </Box>
            <MUIDataTable
                title="Airplanes List"
                data={users}
                columns={columns}
                options={options}
            />
            <UserDialog open={dialogOpen} onClose={handleDialogClose} user={currentUser} option={dialogOption} />
            <Dialog open={viewOpen} onClose={closeView} fullWidth maxWidth="sm">
                <DialogTitle>Airplane Details
                    <IconButton
                        aria-label="close"
                        onClick={closeView}
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <Close />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <Table>
                        <TableBody>
                            {currentUser &&
                                Object.entries(currentUser)
                                    .filter(([key]) => key !== 'password') // Remove the password field
                                    .map(([key, value]) => (
                                        <TableRow key={key}>
                                            <TableCell sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                {key}
                                            </TableCell>
                                            <TableCell>{value || 'N/A'}</TableCell>
                                        </TableRow>
                                    ))}
                        </TableBody>
                    </Table>
                </DialogContent>
            </Dialog>
        </Box>


    );
};

export default Avions;
