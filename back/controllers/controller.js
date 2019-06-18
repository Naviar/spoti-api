const tracks = require('../models/tracks');
const employeeCtrl = {};
var SpotifyWebApi = require('spotify-web-api-node');

// The API object we'll use to interact with the API
// var spotifyApi = new SpotifyWebApi({
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET
// });
var spotifyApi = new SpotifyWebApi({
    clientId: 'a3c56dfeee8642658d6afd7b829bf3b7',
    clientSecret: 'c7d30e46bee94d27ad4f3c87c3a7b5e7'
});


employeeCtrl.saveSearch = async(req, res) => {

    console.log('entro');
    await spotifyApi.clientCredentialsGrant()
        .then(function(data) {

            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);

        }, function(err) {
            console.log('Something went wrong when retrieving an access token', err.message);
        });

    //traer los albums de spotify traigo 20
    await spotifyApi.searchTracks('track:queen', { limit: 2 })
        .then(function(data) {

            // Send the first (only) track object

            tracks.collection.insert(data.body.tracks.items, (err, docs) => {
                if (err) {
                    console.log('ocurrio un error guardando en la bd');
                } else {
                    console.log(`se guardaron ${data.body.tracks.items.length} elementos en la BD`);
                    res.send(data.body.tracks.items);
                }
            })

        }, function(err) {
            console.error(err);
        });
    // const employee = new Employee({
    //     name: req.body.name,
    //     position: req.body.position,
    //     office: req.body.office,
    //     salary: req.body.salary
    // });
    // await employee.save();
    // res.json({
    //     'status': 'Employee Saved'
    // });
};

module.exports = employeeCtrl;