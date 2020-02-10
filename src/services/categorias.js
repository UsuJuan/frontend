import axios from 'axios'

export const getCategorias = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_API}/api/ventas/categorias`
        })
    } catch (err) {
        // pass error
    }
    return response;
}