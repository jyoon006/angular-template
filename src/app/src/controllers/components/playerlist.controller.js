import data from '../../../../data/playerlist.json';

console.log('data', data);

class NavbarController {

  constructor($scope, $stateParams) {
    this.playerlist = data;
  }


}

export default NavbarController;
