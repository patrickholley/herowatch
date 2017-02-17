angular.module('herowatchApp', ['firebase', 'ui.router'])
    .config((function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url:'/',
                templateUrl: "app/home.html",
            })
            .state('roster',{
                url:'/roster',
                templateUrl: "app/roster/roster.html"
            })
            .state('404', {
                url:'/404',
                templateUrl: "app/404.html",
            })

        $urlRouterProvider.when('', '/')
        $urlRouterProvider.otherwise('/404')
        }))