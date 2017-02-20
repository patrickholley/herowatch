//Directive for manipulating hero pages

angular.module('herowatchApp')
.directive('heroViewer', function() {
    return {
        templateUrl: 'app/hero/heroViewer.html',
        restrict: 'AE',
        controller: function($scope, $stateParams, $window, extraAPI, heroData) {
            $scope.getLiveRoster = heroData.getLiveRoster()
            $scope.extraAPI = extraAPI.getExtraAPI()
            $scope.id = $stateParams.id
            if ($scope.id > 23) $scope.id = 23
        },
        link: function( scope, element, attributes ) {
            scope.isFetching = true
            scope.getLiveRoster.then(function(response) {
                scope.index = 0
                scope.hero = response.data.data[scope.id - 1]
                scope.heroExtra = scope.extraAPI[scope.id - 1]
                scope.isFetching = false
                scope.getAbilityIcon = function(index) {
                    var imageName = ""
                    if (index != 0) imageName = '(' + index + ')'
                    if (scope.hero.name == "Soldier: 76") return "app/hero/img/Soldier_ 76/icon-ability" + imageName + ".png"
                    return "app/hero/img/" + scope.hero.name + "/icon-ability" + imageName + ".png"
                }
                scope.getPortrait = function() {
                    if (scope.hero.name == "Soldier: 76") return "app/hero/img/Soldier_ 76/full-portrait.png"
                    else return "app/hero/img/" + scope.hero.name + "/full-portrait.png"
                }
                scope.getStar = function(position) {
                    var star = "grey"
                    if (position < scope.hero.difficulty) { star = "gold" }
                    return "img/" + star + "star.png"
                }
                scope.getHeroDescription = function() {
                    if (scope.hero.name != "Tracer") return scope.hero.description
                    else return "Toting twin pulse pistols, energy-based time bombs, and rapid-fire banter, Tracer is able to \"blink\" through space and rewind her personal timeline as she battles to right wrongs the world over."
                }
                scope.getRole = function() { return "img/" + scope.extraAPI[scope.hero.id - 1].role.name + ".png" }
            })
        }
    }
})