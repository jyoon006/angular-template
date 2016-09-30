import SigninController from '../../controllers/views/signin.controller';

function SigninDirective() {
  return {
    restrict: 'E',
    scope: {

    },
    controller: 'SigninController',
    controllerAs: 'Signin',
    template: require('../../tpl/views/signin.html')
  };
}

export default angular.module('signin.directive', [])
                .directive('signIn', SigninDirective)
                .controller('SigninController', SigninController);