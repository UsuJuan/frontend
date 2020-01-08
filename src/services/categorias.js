import axios from 'axios'

export const getCategorias = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `https://aiyu-backend-dashboard.herokuapp.com/api/ventas/categorias`
        })
    } catch (err) {
        // pass error
    }
    return response;
}