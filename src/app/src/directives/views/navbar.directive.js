import NavbarController from '../../controllers/views/navbar.controller';

function NavbarDirective() {
  return {
    restrict: 'E',
    scope: {

    },
    controller: 'NavbarController',
    controllerAs: 'Navbar',
    template: require('../../tpl/views/navbar.html')
  };
}

export default angular.module('navbar.directive', [])
                .directive('navbar', NavbarDirective)
                .controller('NavbarController', NavbarController);