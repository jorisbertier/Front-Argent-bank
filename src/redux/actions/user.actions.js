export const fetchUserProfile = (token) => async (dispatch) => {
    try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data))
        dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: data.body });
    } else {
        const errorData = await response.json();
        dispatch({ type: 'FETCH_PROFILE_ERROR', payload: errorData.message });
    }
    } catch (error) {
    dispatch({ type: 'FETCH_PROFILE_ERROR', payload: error.message });
    console.error("Error during recuperation of profile:", error);
    }
};


export const editUser = (firstName, lastName) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ firstName, lastName }),
        });

        if (response.ok) {
            const data = await response.json();
            const { firstName: updatedFirstName, lastName: updatedLastName } = data.body;
            dispatch({
                type: 'EDIT_PROFILE_SUCCESS',
                payload: { firstName: updatedFirstName, lastName: updatedLastName }
            });

            localStorage.setItem('user', JSON.stringify(data));

        } else {
            throw new Error("Failed to update user profile");
        }
    } catch (error) {
        console.error("Error updating user profile", error);
        dispatch({ type: 'EDIT_PROFILE_ERROR', payload: error.message });
    }
};