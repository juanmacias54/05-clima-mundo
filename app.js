const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option( {
    direccion : {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async (direccion)=> {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat,coord.lng);
        return `El clima de la ciudad de ${direccion} es de ${temp}`;
    }
    catch (e) {
        return `no se pudo determinar el clima de ${direccion}`;
    }
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

