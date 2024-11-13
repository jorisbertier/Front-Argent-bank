const initialState = {
    auth: {},
    token: null,
    loading: false,
    success: false,
    error: null,
    errorMessage: false,
    isConnected: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload.token,
                error: null,
                success: true,
                errorMessage: false,
                isConnected: true
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                errorMessage: true,
            };
        case "SIGNOUT_SUCCESS" :
            return {
                ...state,
                token: null,
                isConnected: false,
                auth: {}
            }
        default:
            return state;
    }
};
