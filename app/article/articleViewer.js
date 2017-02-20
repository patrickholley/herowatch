angular.module('herowatchApp')
.directive('articleViewer', function() {
    return {
        templateUrl: 'app/article/articleViewer.html',
        restrict: 'AE',
        controller: function($scope, $stateParams, $window, extraAPI, heroData) {
            $scope.getLiveRoster = heroData.getLiveRoster()
            $scope.extraAPI = extraAPI.getExtraAPI()
            $scope.id = $stateParams.id
        },
        link: function( scope, element, attributes ) {
            scope.isFetching = true
            var newsDB = firebase.database().ref().child("news")
            var timeout = setInterval(function() {
                newsDB.on("value", function(snap) {
                scope.news = snap.val().find(function(news) {
                    return news.id == scope.id
                })
                scope.isFetching = false
                scope.$apply()
                if (!scope.isFetching) clearInterval(timeout)
            })}, 500)
        }
    }
})