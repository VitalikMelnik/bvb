/**
 * Created by vitalik on 21.04.16.
 */
/**
 *@config  - choice between content
 *@param $routeProvider 
 */
angular.module('app', ['ngRoute', 'ui.bootstrap']);


angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider.
        when('/cat', {
            templateUrl: '/frontend_test_app/app/templates/cat.html',
            controller: 'CatController'
        }).
        when('/dog', {
            templateUrl: '/frontend_test_app/app/templates/dog.html',
            controller: 'DogController'
        }).
        when('/horse', {
            templateUrl: '/frontend_test_app/app/templates/hourse.html',
            controller: 'HorseController'
        }).
        when('/submit', {
            templateUrl: '/frontend_test_app/app/templates/submit.html',
            controller: 'submit'
        }).
        otherwise({
            redirectTo: '/cat'
        });
    });







