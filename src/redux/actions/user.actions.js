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