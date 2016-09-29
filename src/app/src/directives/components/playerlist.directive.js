import PlayerlistController from '../../controllers/components/playerlist.controller';

function PlayerlistDirective() {
  return {
    restrict: 'E',
    scope: {

    },
    controller: 'PlayerlistController',
    controllerAs: 'Player',
    template: require('../../tpl/components/playerlist.html')
  };
}

export default angular.module('playerlist.directive', [])
                .directive('playerList', PlayerlistDirective)
                .controller('PlayerlistController', PlayerlistController);