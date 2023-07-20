const axios = require('axios');
const { Park } = require('../models');

async function getMapLocation(inputLocation, mapAPI) {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${inputLocation}&key=${mapAPI}`);
    const mapLocation = response.data.results[0].formatted_address;

    return mapLocation;
  } catch (error) {
    throw new Error('Error fetching data from Google Maps API.');
  }
}
  
async function getParkData(mapLocation) {
  try {
    const parkData = await Park.findOne({ where: { address: mapLocation } });

    if (!parkData) {
      console.log('Creating New Park');

      const newPark = await Park.create({
        address: mapLocation
      });

      return { parkData: newPark };
    } else {
      console.log('Loading Existing Park');
      return parkData;
    }
  } catch (error) {
    throw new Error('Error fetching data from the database.');
  }
}

module.exports = { getMapLocation, getParkData };