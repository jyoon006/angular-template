class SigninController {
  constructor($location, Services) {
    this.services = Services;
    this.$location = $location;
  }

  _handleSignin() {
    var vm = this;

    if(localStorage.getItem('id')) {     
      vm.$location.path('/playerlist');
    } 
    else {
      vm.$location.path('/');
    }  
    
    
    
  }
}

export default SigninController;