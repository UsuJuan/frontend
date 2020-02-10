import axios from 'axios'

export const getPrecios = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_API}/api/ventas/precios`
        })
    } catch (err) {
        // pass error
    }
    return response;
}