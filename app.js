const request = require("request");


const url = "https://api.darksky.net/forecast/0f0c10e39a85da62b6e8029e520c539b/37.8267,-122.4233";
const MapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib3Vzc2FtYTkxIiwiYSI6ImNrMW5scTE2cDBidm4zbXRpYTRpNGU3b2MifQ.RBEZbvgAxMAbb2-AWXVLhg&limit=1";

request({ url : url,json : true}, (error,response) => {
if(error)
{
    console.log("Unable de connect to darksky api ")
}
else if (response.body.error)
{
console.log("darksky api error : "+response.body.error)
}
else 
{
   console.log(response.body.daily.data[0].summary + `It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`);
}
})

// Geocoding

// Adress --> Lat/Long --> Weather
request({url: MapBoxUrl,json : true}, (error,response) => {
    if(error)
{
    console.log("Unable de connect to mapbox api ")
}
else if(response.body.features.length === 0 )
{
    console.log("Unable to find location mapBox api "+response.body.error)
}
else 
{
    console.log(`the latitude ${response.body.features[0].center[1]} and the longitude is ${response.body.features[0].center[0]}`)
}
})
  