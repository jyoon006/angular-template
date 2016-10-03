class SigninController {
  constructor($location, Services) {
    this.services = Services;
    this.$location = $location;
  }

  _handleSignin() {
    var vm = this;

    if(!localStorage.getItem('id')) {
      this.services.get('api/signin')
      .then(function( json ) {
        if( source.data === 'active') {
          vm.$location.path('/playerlist');
        } else {
          vm.$location.path('/');
        }  
      });
    }
    
  }
}

export default SigninController;