import { createAction } from 'redux-actions'
import { getUsuarios } from '../../services/usuarios'


// Usuarios
export const getUsuariosLoading = createAction("GET_USUARIOS_LOADING")
export const getUsuariosSuccess = createAction("GET_USUARIOS_SUCCESS")
export const getUsuariosError = createAction("GET_USUARIOS_ERROR")

export const loadUsuarios = () => async dispatch => {
    dispatch(getUsuariosLoading())
    await getUsuarios()
    .then(
        response => dispatch(getUsuariosSuccess(response.data)),
        error => dispatch(getUsuariosError(error.message))
    )
}