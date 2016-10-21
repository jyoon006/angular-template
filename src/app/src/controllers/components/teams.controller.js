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

      json.data.forEach(function( team ) {
        vm.teamSalary = vm._calculateSalary(team.players);
      });
      
      console.log(vm.teamSalary);
    });
  }
 
  _calculateSalary(array) {
    console.log(array);
    var sum = 0;
    
    array.forEach(function(player) {
      sum += player.SALARY;
    });

    if(65000000 - sum < 0) {
      return -Math.abs(sum -65000000);
    } else {
      return 65000000 - sum;
    }
    
  }
}

export default TeamsController;