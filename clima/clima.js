const axios = require('axios');

const  getClima = async  (lat, lng )=>{

const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c911d4fb72b17ffca32fa5e43a1d01d0&units=metric`);

console.log(resp.data.name);
console.log(resp.data.sys.country);
return resp.data.main.temp;

};

module.exports = {
    getClima
}
