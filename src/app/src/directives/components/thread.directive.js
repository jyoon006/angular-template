import ThreadController from '../../controllers/components/thread.controller';

function ThreadDirective() {
  return {
    restrict: 'E',
    scope: {

    },
    controller: 'ThreadController',
    controllerAs: 'Thread',
    template: require('../../tpl/components/thread.html')
  };
}

export default angular.module('Thread.directive', [])
                .directive('thread', ThreadDirective)
                .controller('ThreadController', ThreadController);