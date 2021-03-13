var app = angular.module("myApp", ['ngRoute']);

app.config(["$routeProvider" ,function($routeProvider) {
  
  $routeProvider.
  when("/main", {
    templateUrl : "views/main.html"
  }).

  when("/menu", {
    templateUrl : "views/menu.html"
  }).

  when("/about", {
    templateUrl : "views/about.html"
  }).

  when("/contact", {
    templateUrl : "views/contact.html"
  }).

  otherwise({redirectTo: "/main"});
}]);

app.controller("myController", function($scope) {
  
});

