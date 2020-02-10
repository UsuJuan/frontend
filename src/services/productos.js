import axios from 'axios'

export const getProductos = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_API}/api/ventas/productos`
        })
    } catch (err) {
        // pass error
    }
    return response;
}