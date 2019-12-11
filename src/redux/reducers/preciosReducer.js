import { handleActions } from 'redux-actions'
import { getPreciosLoading, getPreciosSuccess, getPreciosError } from '../actions/preciosActions'
import { getAbbrevetionMonth } from '../../utils'

const initialState = { data: [['Fecha', 'Precio']], loading: false, error: '' }

export const PreciosReducer = handleActions({
    [getPreciosLoading]: (state, action) => {
        return { 
            ...state,
            loading: true,
            error:''
        }
    },
    [getPreciosSuccess]: (state, action) => {
        const newData = action.payload.map(item => {
            return [`${item._id.day} ${getAbbrevetionMonth(item._id.month)}`, item.total]
        })
        return {
            ...state,
            data: [...state.data, ...newData],
            loading: false
        }
    }, 
    [getPreciosError]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    },
}, initialState )