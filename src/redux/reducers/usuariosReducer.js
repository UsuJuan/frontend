import { handleActions } from 'redux-actions'
import { getUsuariosLoading, getUsuariosSuccess, getUsuariosError } from '../actions/usuariosActions'
import { getAbbrevetionMonth } from '../../utils'

const initialState = { data: [['Fecha', '']], loading: false, error: '' }

export const UsuariosReducer = handleActions({
    [getUsuariosLoading]: (state, action) => {
        return { 
            ...state,
            loading: true,
            error:''
        }
    },
    [getUsuariosSuccess]: (state, action) => {
        let acumulator = 0
        const newData = action.payload.map(item => {
            acumulator += item.celulares.length
            return [`${item._id.day} ${getAbbrevetionMonth(item._id.month)}`, acumulator]
        })
        return {
            ...state,
            data: [...state.data, ...newData],
            loading: false
        }
    }, 
    [getUsuariosError]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    },
}, initialState )