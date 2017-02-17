//Service for fetching API data and managing Firebase data

angular.module('herowatchApp').service('heroData', function($http) {
    var apiUrl = "https://overwatch-api.net/api/v1/hero"

    this.getLiveRoster = function(difficulty, pageNum) {
        return $http ({
            method: "GET",
            url: apiUrl
        })
    }
})