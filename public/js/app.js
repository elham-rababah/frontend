
window.loginApp = angular.module('loginApp',["ngRoute"])

.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "htmls/main.html"
  })
  .when("/login", {
    templateUrl : "htmls/login.html"
  })
  .when("/register", {
    templateUrl : "htmls/regiser.html"
  })
});
