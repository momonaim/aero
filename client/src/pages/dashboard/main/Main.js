import { FlightTakeoff, Group, MapsHomeWork } from '@mui/icons-material';
import { Box, CircularProgress, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useValue } from '../../../context/ContextProvider';

import { getUsers } from '../../../actions/user';

const Main = ({ setSelectedLink, link }) => {
    const [loading, setLoading] = useState(true);
    const {
        state: { users },
        dispatch,
    } = useValue();
    useEffect(() => {
        setSelectedLink(link);

        const loadUsers = async () => {
            if (users?.length === 0) {
                await getUsers(dispatch);
            }
            console.log(users)
            setLoading(false);
        };

        loadUsers();
    }, [setSelectedLink, link, users, dispatch]);

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }
    return (
        <Box
            sx={{
                display: { xs: 'flex', md: 'grid' },
                gridTemplateColumns: 'repeat(3,1fr)',
                gridAutoRows: 'minmax(100px, auto)',
                gap: 3,
                textAlign: 'center',
                flexDirection: 'column',
            }}
        >
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4">Total Users</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Group sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
                    <Typography variant="h4">{users?.length}</Typography>
                </Box>
            </Paper>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4">Total Vols</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <FlightTakeoff sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
                    <Typography variant="h4">1000</Typography>
                </Box>
            </Paper>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4">Total Reservations</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <MapsHomeWork sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
                    <Typography variant="h4">1000</Typography>
                </Box>
            </Paper>

        </Box>
    );
};

export default Main;
