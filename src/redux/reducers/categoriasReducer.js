import { handleActions } from 'redux-actions'
import { getCategoriasLoading, getCategoriasSuccess, getCategoriasError } from '../actions/categoriasActions'

const initialState = { data: [['Categorias', 'Total']], loading: false, error: '' }

export const CategoriasReducer = handleActions({
    [getCategoriasLoading]: (state, action) => {
        return { 
            ...state,
            loading: true,
            error:''
        }
    },
    [getCategoriasSuccess]: (state, action) => {
        const datos = action.payload.map(item => [item._id, item.total])
        return {
            ...state,
            data: [...state.data, ...datos],
            loading: false
        }
    }, 
    [getCategoriasError]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    },
}, initialState )