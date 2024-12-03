const initialState = {
    status: '',
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
        case 'EDIT_PROFILE_SUCCESS':
            return {
                ...state,
                userData: action.payload,
                error: null,
            };
        case 'EDIT_PROFILE_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        case 'RESET_USER_DATA' :
            return {
                ...state,
                userData : {}
            }
        default:
            return state;
    }
}