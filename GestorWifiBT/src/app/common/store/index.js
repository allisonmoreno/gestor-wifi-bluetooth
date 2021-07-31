import api from '../../api'
import Toast from 'react-native-simple-toast';

// Actions
const LOAD_DATA = "LOAD_DATA"
const SET_DATA = "SET_DATA" 

// Initial State
const initialState = {
    isLoading: false,
    ssid: '',
    rssi: '',
    bluetooth: []
}

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                ...action.payload
            } 
        default: return state;
    }
}

export function setData(params) {
  return { type: SET_DATA, payload: params}
}


export const sendData = (params) => async (dispatch) => {
    //console.log('sendData', params);
    try {
        const res = await api.Generales.log({...params});
        
        console.log(res);
    } catch (error) {
        console.log(error);
        Toast.show('Hubo un error al enviar la información.');
    }
    dispatch({ type: SET_DATA, payload: {isLoading: false}});
}

export const resetData = () => async (dispatch) => {
    const action = {
        type: LOAD_DATA,
        payload: { data: [], isLoaded: false }
    }
    dispatch(action)
}
