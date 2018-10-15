(function () {

    angular.module("sicknessLevelDetector")
        .config(sicknessLevelConfiguration);

    function sicknessLevelConfiguration($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/search/search.view.client.html',
                controller: "searchController",
                controllerAs: "model"
            });


    }


})();