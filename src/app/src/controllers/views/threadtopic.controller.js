class ThreadController {
  
  constructor($stateParams, $state, $location, Services) {
    this.Services = Services;
    this.$stateParams = $stateParams
    this.$state = $state;
  }

  _getData() {
    var vm = this;
    this.Services.get('/dicussion/threadtopic/' + this.$stateParams.thread_id)
    .then( function (json) {
      console.log('threadtopic json', json);
      vm.data = json.data;
    });
  }

  _handleSubmit() {
    var vm = this;
    var message = this.message;
    var user_id = localStorage.getItem('id');
    var data = {
      thread_id: this.data._id,
      user_id: user_id,
      message: message
    };

    this.Services.post('/discussion/threads/reply', data)
    .then(function(json) {
      console.log('json for threadtopic', json);
      vm.$state.reload();
    });
  }
}

export default ThreadController;