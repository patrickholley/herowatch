//Manages functions and data associated with the roster page

angular.module('herowatchApp')
.directive('rosterViewer', function() {

    return {
        templateUrl: 'app/roster/rosterViewer.html',
        restrict: 'AE',
        controller: function($scope, heroData) {
            $scope.getLiveRoster = heroData.getLiveRoster()
        },
        link: function( scope, element, attributes ) {
            scope.isFetching = true
            scope.getLiveRoster.then(function(response) {
                scope.roster= response.data.data
                console.log(scope.roster)
                scope.isFetching = false
            })
            scope.getProfilePic = function(id) { return "app/roster/img/" + id + ".png" }
        }
    }
})