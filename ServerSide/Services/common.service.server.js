module.exports = function (app) {

    var https = require('https');
    const arrayOfData = [];
    app.get("/api/search/getSicknessLevel", findSicknessLevelByQueryParameter);


    function initialiseDataFromFile() {
        const csvFilePath = __dirname + "/dataFile/readings.csv";
        var fs = require('fs');
        var parse = require('csv-parse');
        fs.createReadStream(csvFilePath)
            .pipe(parse({delimiter: ','}))
            .on('data', function (csvRow) {
                arrayOfData.push(csvRow);
            })
            .on('end', function () {
                console.log("Data From file loaded.");
            });
    }

    initialiseDataFromFile();

    /**
     * @return {number}
     */
    function returnTotalDistance(latitude1, longitude1, latitude2, longitude2) {
        var angleTheta = longitude1 - longitude2;
        var radiansLat1 = Math.PI * latitude1 / 180;
        var radiansLat2 = Math.PI * latitude2 / 180;
        var radiansTheta = Math.PI * angleTheta / 180;
        var totalDistance = Math.sin(radiansLat1) * Math.sin(radiansLat2) + Math.cos(radiansLat1) * Math.cos(radiansLat2) * Math.cos(radiansTheta);
        if (totalDistance > 1) {
            totalDistance = 1;
        }
        totalDistance = Math.acos(totalDistance);
        totalDistance = totalDistance * 180 / Math.PI;
        totalDistance = totalDistance * 60 * 1.1515;
        totalDistance = totalDistance * 1.609344 * 1000;
        // in metres
        return totalDistance
    }


    function findSicknessLevelByQueryParameter(req, res) {
        let radius = req.query.radius;
        let latitude = req.query.latitude;
        let longitude = req.query.longitude;
        let feverishReadings = [];
        let everyReadings = [];
        for (var i = 0; i < arrayOfData.length; i++) {
            let tempTemperature = arrayOfData[i][1];
            let tempLatitude = arrayOfData[i][2];
            let tempLongitude = arrayOfData[i][3];
            let distance = returnTotalDistance(latitude, longitude, tempLatitude, tempLongitude);
            if (distance <= radius) {
                if (tempTemperature >= 103) {
                    feverishReadings.push(arrayOfData[i]);
                    everyReadings.push(arrayOfData[i]);
                }
                else {
                    everyReadings.push(arrayOfData[i])
                }
            }
        }

        let result = {
            "sicknessLevel": Math.round((feverishReadings.length / everyReadings.length) * 100),
            "feverishData": feverishReadings,
            "totalData": everyReadings
        };

        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    }
};