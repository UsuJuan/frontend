import { handleActions } from 'redux-actions'
import { getProductosLoading, getProductosSuccess, getProductosError } from '../actions/productosActions'
import { getAbbrevetionMonth } from '../../utils'

const initialState = { data: [['Fecha', 'Productos']], loading: false, error: '' }

export const ProductosReducer = handleActions({
    [getProductosLoading]: (state, action) => {
        return { 
            ...state,
            loading: true,
            error:''
        }
    },
    [getProductosSuccess]: (state, action) => {
        const newData = action.payload.map(item => {
            return [`${item._id.day} ${getAbbrevetionMonth(item._id.month)}`, item.total]
        })
        return {
            ...state,
            data: [...state.data, ...newData],
            loading: false
        }
    }, 
    [getProductosError]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    },
}, initialState )