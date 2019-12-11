import axios from 'axios'

export const getPedidos = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/ventas/pedidos`
        })
    } catch (err) {
        // pass error
    }
    return response;
}