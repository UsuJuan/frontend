import { createAction } from 'redux-actions'
import { getCategorias } from '../../services/categorias'


// CATEGORIAS
export const getCategoriasLoading = createAction("GET_CATEGORIAS_LOADING")
export const getCategoriasSuccess = createAction("GET_CATEGORIAS_SUCCESS")
export const getCategoriasError = createAction("GET_CATEGORIAS_ERROR")

export const loadCategorias = () => async dispatch => {
    dispatch(getCategoriasLoading())
    await getCategorias()
    .then(
        response => dispatch(getCategoriasSuccess(response.data)),
        error => dispatch(getCategoriasError(error.message))
    )
}