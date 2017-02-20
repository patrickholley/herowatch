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
            .state('hero', {
                url:'/hero/:id',
                templateUrl: "app/hero/hero.html"
            })
            .state('news', {
                url:'/news',
                templateUrl: "app/news/news.html"
            })
            .state('writer', {
                url:'/writer',
                templateUrl: "app/writer/writer.html"
            })
            .state('article', {
                url:'/article/:id',
                templateUrl: "app/article/article.html"
            })
            .state('404', {
                url:'/404',
                templateUrl: "app/404.html",
            })

        $urlRouterProvider.when('', '/')
        $urlRouterProvider.otherwise('/404')
        }))