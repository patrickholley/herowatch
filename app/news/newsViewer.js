angular.module('herowatchApp')
.directive('newsViewer', ['$timeout', function($timeout) {
    return {
        templateUrl: 'app/news/newsViewer.html',
        restrict: 'AE',
        controller: function($scope) {},
        link: function( scope, element, attributes ) {
            scope.isFetching = true
            scope.test = "test"
            var newsDB = firebase.database().ref().child("news")
            var timeout = setInterval(function() {
                newsDB.on("value", function(snap) {
                scope.news = snap.val()
                scope.isFetching = false
                scope.$apply()
                if (!scope.isFetching) clearInterval(timeout)
            })}, 500)
        }
    }
}])