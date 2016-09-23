var Navbar = angular.module('navbar.directive', [])
.controller('NavbarController', NavbarController)
.directive('navbar', NavbarDirective);

function NavbarController() {

}

function NavbarDirective() {
  return {
    restrict: 'E',
    scope: {

    },
    controller: 'NavbarController',
    controllerAs:'Navbar',
    template: require('../../tpl/navbar.html')
  };
}

module.exports = Navbar;