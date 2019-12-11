import axios from 'axios'

export const getPedidos = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `https://aiyu-backend-dashboard.herokuapp.com/api/ventas/pedidos`
        })
    } catch (err) {
        // pass error
    }
    return response;
}