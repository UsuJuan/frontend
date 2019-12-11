import { createAction } from 'redux-actions'
import { getPrecios } from '../../services/precios'


// Precios
export const getPreciosLoading = createAction("GET_PRECIOS_LOADING")
export const getPreciosSuccess = createAction("GET_PRECIOS_SUCCESS")
export const getPreciosError = createAction("GET_PRECIOS_ERROR")

export const loadPrecios = () => async dispatch => {
    dispatch(getPreciosLoading())
    await getPrecios()
    .then(
        response => dispatch(getPreciosSuccess(response.data)),
        error => dispatch(getPreciosError(error.message))
    )
}