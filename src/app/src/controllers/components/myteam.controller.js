class MyteamController {
  
  constructor($state, Services) {
    console.log('myteam controller')
    this.services = Services;
    this.$state = $state;
  }

  _getTeamData() {
    var vm = this;
    var my_id = localStorage.getItem('id');
    this.services.post('/profile', my_id)
    .then(function (json) {
      console.log(json)
      vm.data = json.data[0];
      vm.teamSalary = vm._calculateSalary(json.data[0].players);
      console.log(vm.teamSalary)
    });
  }

  _deletePlayer($index, player) {
    var vm = this;
    var user_id = localStorage.getItem('id');
    this.services.post('/users/myteam/update', { user_id: user_id, player: player })
    .then(function (json) {
      vm.$state.reload();
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

export default MyteamController;