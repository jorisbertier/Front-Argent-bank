const initialState = {
    auth: {},
    token: null,
    loading: false,
    success: false,
    error: null,
    errorMessage: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload.token,
                error: null,
                success: true,
                errorMessage: false,
            };
        case 'SIGNUP_ERROR':
        case 'LOGIN_ERROR':
            return {
                ...state,
                errorMessage: true,
            };
        default:
            return state;
    }
};
