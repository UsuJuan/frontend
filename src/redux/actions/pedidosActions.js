import { createAction } from 'redux-actions'
import { getPedidos } from '../../services/pedidos'


// PEDIDOS
export const getPedidosLoading = createAction("GET_PEDIDOS_LOADING")
export const getPedidosSuccess = createAction("GET_PEDIDOS_SUCCESS")
export const getPedidosError = createAction("GET_PEDIDOS_ERROR")

export const loadPedidos = () => async dispatch => {
    dispatch(getPedidosLoading())
    await getPedidos()
    .then(
        response => dispatch(getPedidosSuccess(response.data)),
        error => dispatch(getPedidosError(error.message))
    )
}