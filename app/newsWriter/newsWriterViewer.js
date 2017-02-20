angular.module('herowatchApp')
.directive('newsWriterViewer', function() {
    return {
        templateUrl: 'app/newsWriter/newsWriterViewer.html',
        restrict: 'AE',
        controller: function($scope) {

        },
        link: function( scope, element, attributes ) {
            scope.title = document.getElementsByClassName("news-title-text")[0]
            scope.article = document.getElementsByClassName("news-body-text")[0]
            scope.publish = function() {
                console.log(scope.title.value)
                console.log(scope.article.value)
            }
        }
    }
})