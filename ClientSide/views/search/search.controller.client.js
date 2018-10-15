(function () {
    angular.module("sicknessLevelDetector")
        .controller("searchController", searchController);

    function searchController(searchService, $route, $location, $scope) {
        var model = this;

        model.findSicknessLevel = findSicknessLevel;


        function findSicknessLevel(latitudeNumber, longitudeNumber, radiusNumber) {
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

})();