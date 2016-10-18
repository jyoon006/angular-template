class TeamsController {
  
  constructor($state, Services) {
    this.Services = Services;
  }

  _getTeamsData() {
    var vm = this;
    console.log('retreive teams');
    this.Services.get('/users/teams/all')
    .then(function ( json ) {
      console.log('all teams json', json);
      vm.data = json.data;
    });
  }
 

}

export default TeamsController;