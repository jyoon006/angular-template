import NavbarController from '../../controllers/views/navbar.controller';

function NavbarDirective() {
  return {
    restrict: 'E',
    scope: {

    },
    controller: 'NavbarController',
    controllerAs: 'Navbar',
    template: require('../../tpl/navbar.html')
  };
}

module.exports = angular.module('navbar.directive', [])
                  .directive('navbar', NavbarDirective)
                  .controller('NavbarController', NavbarController);