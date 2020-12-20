import { GET_CARDS_START, FETCH_SUCCESS, FETCH_ERROR } from './types'

const initialState = {
    fetchCards: [],
    error: null
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS_START:
            return { ...state}
        case FETCH_SUCCESS:
            return {
                ...state, fetchCards: action.payload, error: null
            }
        case FETCH_ERROR:
            return {
                ...state, error: action.payload
            }
        default:
            return state
    }
}

