import axios from 'axios'

export const getProductos = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/ventas/productos`
        })
    } catch (err) {
        // pass error
    }
    return response;
}