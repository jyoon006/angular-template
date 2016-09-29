import data from '../../../../data/playerlist.json';
import SearchbarController from './searchbar.controller';

// console.log('data', data);

class PlayerlistController extends SearchbarController {

  constructor($scope, $rootScope) {
    super();
    var vm = this;
    this.playerlist = data;
    $scope.$on('input-update', function(event, data) {
      vm.query = data;
    });
  }

  _handleClick(i) {
    console.log('this', i);
    this.selectedRow = i;
  }


}

export default PlayerlistController;
