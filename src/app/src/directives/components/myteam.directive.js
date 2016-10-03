import MyteamController from '../../controllers/components/myteam.controller';

function MyteamDirective() {
  return {
    restrict: 'E',
    scope: {

    },
    controller: 'MyteamController',
    controllerAs: 'Myteam',
    template: require('../../tpl/components/myteam.html')
  };
}

export default angular.module('Myteam.directive', [])
                .directive('myTeam', MyteamDirective)
                .controller('MyteamController', MyteamController);