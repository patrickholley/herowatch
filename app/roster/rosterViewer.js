//Manages functions and data associated with the roster page

angular.module('herowatchApp')
.directive('rosterViewer', function() {
    return {
        templateUrl: 'app/roster/rosterViewer.html',
        restrict: 'AE',
        controller: function($scope, extraAPI, heroData) {
            $scope.getLiveRoster = heroData.getLiveRoster()
            $scope.extraAPI = extraAPI.getExtraAPI()
        },
        link: function( scope, element, attributes ) {
            scope.roleKey = { offense:3, defense:2, tank:1, support:0 }
            scope.isFetching = true
            scope.getLiveRoster.then(function(response) {
                scope.roster = response.data.data
                while (scope.roster.length > 23) scope.roster.pop()
                scope.sortRoster('all')
                scope.isFetching = false
            })
            scope.getProfilePic = function(id) { return "app/roster/img/" + id + ".png" }
            scope.getHeroRole = function(hero) { return "img/" + scope.extraAPI[hero.id - 1].role.name + ".png" }
            scope.sortRoster = function(sortRole) {
                element.find('a').removeClass('filtheroes')
                var roleButton = document.getElementById(sortRole)
                element.find('div').removeClass('filtcards')
                var roleHeroes = document.getElementsByClassName(sortRole)
                if (roleHeroes.length != 0) {
                    for (var i = 0; i < roleHeroes.length; i++) { roleHeroes[i].classList.add('filtcards') }
                }
                roleButton.classList.add('filtheroes')
                scope.roster.sort(function(a, b) {
                    var rA = scope.extraAPI[a.id - 1].role.name
                    var rB = scope.extraAPI[b.id - 1].role.name
                    if (rA == rB) return a.name.localeCompare(b.name)
                    else if (rA == sortRole) return -1
                    else if (rB == sortRole) return 1
                    else if (scope.roleKey[rA] > scope.roleKey[rB]) return -1
                    else return 1
                })
            }
        }
    }
})