import axios from "axios";



export const getUsers = async (dispatch) => {
    const result = await axios.get('http://localhost:8080/users');
    if (result.status === 200) {
        dispatch({ type: 'UPDATE_USERS', payload: result.data });
    }
};


export const updateStatus = async (updatedUser, id, dispatch) => {
    try {
        const response = await axios.put(`http://localhost:8080/user/${id}`, updatedUser, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            // Dispatch l'action pour mettre à jour l'état local si nécessaire
            dispatch({ type: 'UPDATE_USER', payload: response.data });
            return true; // Retourne un succès
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
        return false; // Retourne un échec
    }
};

export const deleteUser = async (id, dispatch) => {
    try {
        await axios.delete(`http://localhost:8080/user/${id}`);
        dispatch({ type: 'DELETE_USER', payload: id });
    } catch (error) {
        console.error('Failed to delete user:', error);
    }
};

export const updateUser = async (updatedUser, id, dispatch) => {
    try {
        const { data } = await axios.put(`http://localhost:8080/user/${id}`, updatedUser, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        dispatch({ type: 'UPDATE_USER_CRUD', payload: { id: id, updatedUser: data } });
        return true;
    } catch (error) {
        console.error('Failed to update user:', error);
        return false;
    }
};
export const addUser = async (newUser, dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:8080/user', newUser, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        dispatch({ type: 'ADD_USER_CRUD', payload: data });
        return true;
    } catch (error) {
        console.error('Failed to add user:', error);
        return false;
    }
};
