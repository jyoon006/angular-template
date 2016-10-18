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
      vm.data = json.data[0];
    })
  }

  _deletePlayer($index, player) {
    var vm = this;
    var user_id = localStorage.getItem('id');
    this.services.post('/users/myteam/update', { user_id: user_id, player: player })
    .then(function (json) {
      vm.$state.reload();
    });
  }

}

export default MyteamController;