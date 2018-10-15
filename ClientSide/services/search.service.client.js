(function () {
    angular.module("sicknessLevelDetector")
        .factory("searchService", searchService);

    function searchService($http) {

        var api = {
            findSicknessLevel: findSicknessLevel
        };

        return api;


        function findSicknessLevel(latitudeNumber, longitudeNumber, radiusNumber) {
            var url = "/api/search/getSicknessLevel?latitude=" + latitudeNumber + "&longitude=" + longitudeNumber + "&radius=" + radiusNumber;
            return $http.get(url)
                .then(function (response) {
                    var results = response.data;
                    return results;
                });
        }

    }


})();