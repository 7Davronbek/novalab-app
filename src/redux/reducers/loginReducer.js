import { UPDATE_STATE } from "../types/loginTypes"

const initialState = {
    isLoading: ''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATE: 
            return {
                ...state,
                ...action.payload
            }

            default:
                return state
    }
}