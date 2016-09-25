class NavbarController {

  constructor($scope, $stateParams) {
    console.log('text', $scope, $stateParams);
    
  }

  _handleClick(e) {
    console.log('clicked', e);
  }

}

export default NavbarController;
