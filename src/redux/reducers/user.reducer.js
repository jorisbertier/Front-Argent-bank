const initialState = {
    status: 'VOID',
    userData: {}
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_PROFILE_SUCCESS':
            return {
                ...state,
                userData: action.payload,
                error: null,
            };
        case 'FETCH_PROFILE_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}