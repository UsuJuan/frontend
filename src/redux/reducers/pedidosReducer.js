import { handleActions } from 'redux-actions'
import { getPedidosLoading, getPedidosSuccess, getPedidosError } from '../actions/pedidosActions'
import { getAbbrevetionMonth } from '../../utils'

const initialState = { data: [['Fecha', '', { role: 'annotation' }]], loading: false, error: '' }

export const PedidosReducer = handleActions({
    [getPedidosLoading]: (state, action) => {
        return { 
            ...state,
            loading: true,
            error:''
        }
    },
    [getPedidosSuccess]: (state, action) => {
        const newData = action.payload.map(item => {
            return [`${item._id.day} ${getAbbrevetionMonth(item._id.month)}`, item.count, item.count]
        })
        return {
            ...state,
            data: [...state.data, ...newData],
            loading: false
        }
    }, 
    [getPedidosError]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    },
}, initialState )