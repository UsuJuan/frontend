import axios from 'axios'

export const getUsuarios = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_API}/api/ventas/usuarios`
        })
    } catch (err) {
        // pass error
    }
    return response;
}