import axios from 'axios'

export const getPrecios = async () => {
  
    let response = [];
    try {
        response = await  axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/ventas/precios`
        })
    } catch (err) {
        // pass error
    }
    return response;
}