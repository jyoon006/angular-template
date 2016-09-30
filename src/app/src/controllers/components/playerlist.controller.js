import data from '../../../../data/playerlist.json';
import SearchbarController from './searchbar.controller';

// console.log('data', data);

class PlayerlistController {

  constructor($scope, $rootScope, $http, Services) {
    this.playerlist = data;
    $scope.$on('input-update', function(event, data) {
      vm.query = data;
    });
    
    this.Services = Services;
  }

  _handleClick(i) {
    console.log('this', i);
    this.selectedRow = i;
  }

  _handleSort(e) {
    console.log('i', e);
    this.category = e.target.innerText;
    this.reverse = !this.reverse;
  }

  _handleData() {
    this.Services.get('api/userdata')
    .then(function(data) {
      console.log('data', data);
    });
  }


}

export default PlayerlistController;
