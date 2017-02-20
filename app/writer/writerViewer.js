angular.module('herowatchApp')
.directive('writerViewer', function() {
    return {
        templateUrl: 'app/writer/writerViewer.html',
        restrict: 'AE',
        controller: function($scope) {

        },
        link: function( scope, element, attributes ) {
            scope.title = document.getElementsByClassName("news-title-text")[0]
            scope.summary = document.getElementsByClassName("news-summary-text")[0]
            scope.article = document.getElementsByClassName("news-body-text")[0]
            var newsDB = firebase.database().ref().child("news")
            newsDB.on("value", function(snap) {
                if (snap.val()) scope.count = snap.val()[snap.val().length - 1].id
                else scope.count = -1
                scope.count++
            })
            scope.publish = function() {
                var news = {
                    id: scope.count,
                    title: scope.title.value,
                    summary: scope.summary.value,
                    article: scope.article.value
                }
                newsDB.child(scope.count).set(news)
                alert("Your article has been published - check it out on the News page!")
                scope.title.value = ""
                scope.summary.value = ""
                scope.article.value = ""
            }
        }
    }
})