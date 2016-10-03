class MyteamController {
  
  constructor($location, Services) {
    console.log('myteam controller')
    this.services = Services;
    this.text = 'sample text';
  }

  _getTeamData() {
    var vm = this;
    console.log('my team invoked');
    var my_id = localStorage.getItem('id');
    this.services.post('/profile', my_id)
    .then(function (json) {
      console.log('json', json.data[0]);
      vm.data = json.data[0];
    })
  }

}

export default MyteamController;