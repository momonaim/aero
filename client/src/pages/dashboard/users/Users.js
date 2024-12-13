import { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { useValue } from '../../../context/ContextProvider';
import { getUsers, updateUser, deleteUser } from '../../../actions/user';

const Users = ({ setSelectedLink, link }) => {
    const {
        state: { users },
        dispatch,
    } = useValue();

    useEffect(() => {
        setSelectedLink(link);
        if (users.length === 0) getUsers(dispatch);
    }, [dispatch, link, setSelectedLink, users.length]);

    const handleEdit = (user) => {
        const updatedUser = { ...user, firstname: 'Updated Name' };
        updateUser(updatedUser, user.id, dispatch);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            deleteUser(id, dispatch);
        }
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
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={() => handleEdit(user)}
                                sx={{ mr: 1 }}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                size="small"
                                onClick={() => handleDelete(user.id)}
                            >
                                Delete
                            </Button>
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
        selectableRows: 'none', // Désactive la sélection des lignes
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
                Manage Users
            </Typography>
            <MUIDataTable
                title="User List"
                data={users}
                columns={columns}
                options={options}
            />
        </Box>
    );
};

export default Users;
