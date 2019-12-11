import { createAction } from 'redux-actions'
import { getProductos } from '../../services/productos'


// Productos
export const getProductosLoading = createAction("GET_PRODUCTS_LOADING")
export const getProductosSuccess = createAction("GET_PRODUCTS_SUCCESS")
export const getProductosError = createAction("GET_PRODUCTS_ERROR")

export const loadProductos = () => async dispatch => {
    dispatch(getProductosLoading())
    await getProductos()
    .then(
        response => dispatch(getProductosSuccess(response.data)),
        error => dispatch(getProductosError(error.message))
    )
}