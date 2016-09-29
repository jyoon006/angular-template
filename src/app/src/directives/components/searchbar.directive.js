import SearchbarController from '../../controllers/components/searchbar.controller';

function SearchbarDirective() {
  return {
    restrict: 'E',
    scope: {

    },
    controller: 'SearchbarController',
    controllerAs: 'Search',
    template: require('../../tpl/components/searchbar.html'),
    link: function(scope, elem, attr) {
        
    }
  };
}

export default angular.module('searchbar.directive', [])
                .directive('searchBar', SearchbarDirective)
                .controller('SearchbarController', SearchbarController);