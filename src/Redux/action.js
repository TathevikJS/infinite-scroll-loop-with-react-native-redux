import { GET_CARDS_START, FETCH_SUCCESS, FETCH_ERROR } from './types'

 


export const fetchCards = (page) => async (dispatch) => {
    const KEY = 'f5570418-294e-46fc-8125-563b71771461'
    dispatch(fetchDataStart())
    try {
        const fetchedData = await fetch(`https://content.guardianapis.com/search?order-by=newest&page=${page}&q=technologies&show-fields=thumbnail&api-key=${KEY}`)
        const data = await fetchedData.json()
        await dispatch(fetchDataSuccess(data.response.results))
    } catch (error) {
        console.log(error);
        dispatch(fetchDataError(error))
    }
}




export function fetchDataSuccess(data){ 
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
}


export function fetchDataError(error){
    return {
        type: FETCH_ERROR,
        payload: "Ooops, Something went wrong"
    }
}


export function fetchDataStart(){
    return {
        type: GET_CARDS_START
    }
}