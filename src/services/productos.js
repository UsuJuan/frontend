import axios from 'axios'

export const getProductos = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `https://aiyu-backend-dashboard.herokuapp.com/api/ventas/productos`
        })
    } catch (err) {
        // pass error
    }
    return response;
}