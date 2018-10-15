(function () {
    angular.module("sicknessLevelDetector")
        .controller("searchController", searchController);

    function searchController(searchService, $route, $location, $scope) {
        var model = this;
        model.latiLogiValidator = new RegExp("^(\\-?\\d+(\\.\\d+)?)");

        model.findSicknessLevel = findSicknessLevel;

        function init() {
            model.inValidLatitude = "";
            model.inValidLongitude = "";
            model.inValidRadius = "";
        }

        init();

        function findSicknessLevel(latitudeNumber, longitudeNumber, radiusNumber) {
            model.inValidLatitude = "";
            model.inValidLongitude = "";
            model.inValidRadius = "";
            console.log(model.latiLogiValidator.exec(latitudeNumber));
            if (!model.latiLogiValidator.exec(latitudeNumber)) {
                model.inValidLatitude = "Please enter a valid Latitude value. Eg : 37.78239443\n";
                model.inValidLongitude = "";
                model.inValidRadius = "";
            }
            else if (!model.latiLogiValidator.exec(longitudeNumber)) {
                model.inValidLongitude = "Please enter a valid Longitude value. Eg : -122.4099734\n";
                model.inValidLatitude = "";
                model.inValidRadius = "";
            }
            else if (radiusNumber <= 0 || (typeof radiusNumber === "undefined") || (radiusNumber === null)) {
                model.inValidRadius = "Please enter a valid radius value. It should be positive and greater than Zero. Eg : 1000\n";
                model.inValidLatitude = "";
                model.inValidLongitude = "";
            }
            else {
                model.inValidLatitude = "";
                model.inValidLongitude = "";
                model.inValidRadius = "";
                searchService.findSicknessLevel(latitudeNumber, longitudeNumber, radiusNumber)
                    .then(function (results) {
                        model.sicknessLevel = results.sicknessLevel;
                        model.feverishData = results.feverishData;
                        model.allData = results.totalData;
                    }, function (error) {
                        console.log(error)
                    });
            }
        }
    }

})();