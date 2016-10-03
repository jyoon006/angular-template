import data from '../../../../data/playerlist.json';
import SearchbarController from './searchbar.controller';

// console.log('data', data);

class PlayerlistController {

  constructor($scope, $rootScope, $http, Services) {
    var vm = this;
    this.playerlist = data;
    $scope.$on('input-update', function(event, data) {
      vm.query = data;
    });
    
    this.Services = Services;
  }

  _handleClick(i) {
    this.selectedRow = i;
  }

  _handleSort(e) {
    this.category = e.target.innerText;
    this.reverse = !this.reverse;
  }

  _handleData() {
    if(!localStorage.getItem('id')) {
      this.Services.get('google/signin')
      .then(function( json ) {
        localStorage.setItem('id', json.data);
      });
    }
  }


}

export default PlayerlistController;
