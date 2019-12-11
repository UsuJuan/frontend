import axios from 'axios'

export const getUsuarios = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `https://aiyu-backend-dashboard.herokuapp.com/api/ventas/usuarios`
        })
    } catch (err) {
        // pass error
    }
    return response;
}