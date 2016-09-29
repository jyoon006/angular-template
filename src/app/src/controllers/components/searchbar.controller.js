import PlayerlistController from './playerlist.controller.js';

class SearchbarController {

  constructor($rootScope) {
    // super();
    // console.log('x', this);
    this.$rootScope = $rootScope
  }

  _handleChange() {
    console.log('query', this.query);
    this.$rootScope.$broadcast('input-update', this.query);
  }


}

export default SearchbarController;
