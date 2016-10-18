import TeamsController from '../../controllers/components/teams.controller';

function TeamsDirective() {
  return {
    restrict: 'E',
    scope: {

    },
    controller: 'TeamsController',
    controllerAs: 'Teams',
    template: require('../../tpl/components/teams.html')
  };
}

export default angular.module('Teams.directive', [])
                .directive('teams', TeamsDirective)
                .controller('TeamsController', TeamsController);