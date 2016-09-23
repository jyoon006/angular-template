import angular from 'angular';
import uirouter from 'angular-ui-router';


/*************** Directives *******************/
import Navbar from './directives/views/navbar.directive';

angular.module('app', [
  Navbar.name,
  uirouter
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./tpl/app.html')
    })

  // $urlRouterProvider.otherwise('/');
})