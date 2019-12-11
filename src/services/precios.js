import axios from 'axios'

export const getPrecios = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `https://aiyu-backend-dashboard.herokuapp.com/api/ventas/precios`
        })
    } catch (err) {
        // pass error
    }
    return response;
}