class NavbarController {

  constructor($scope, $stateParams, $location) {
    this.$location = $location;
  }

  _handleRoute(e) {
    let route = e.target.innerText.split(" ").join("").toLowerCase();

    if( route === 'playerlist' ) route = '';
    this.$location.path('/' + route);
  }

}

export default NavbarController;
