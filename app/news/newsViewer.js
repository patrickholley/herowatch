angular.module('herowatchApp')
.directive('newsViewer', function() {
    return {
        templateUrl: 'app/news/newsViewer.html',
        restrict: 'AE',
        controller: function($scope) {},
        link: function( scope, element, attributes ) {
            scope.isFetching = true
            var newsDB = firebase.database().ref().child("news")
            var timeout = setInterval(function() {
                newsDB.on("value", function(snap) {
                if (snap.val()) scope.news = snap.val().reverse()
                scope.isFetching = false
                scope.$apply()
                if (!scope.isFetching) clearInterval(timeout)
            })}, 500)
        }
    }
})