const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: 'https://countries-cities.p.rapidapi.com/location/country/Co/city/list',
        headers: {'x-rapidapi-key': '5a70001babmsh29f8a91118a945bp1be68fjsn08ec0479a709'}
    });

    const resp = await instance.get();

    if (resp.data.cities.length === 0) {
        throw new Error(`No Hay resultados para ${dir}`);
    }
    const data = resp.data.cities[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;
    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}
