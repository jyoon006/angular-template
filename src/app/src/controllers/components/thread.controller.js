class ThreadController {
  
  constructor($state, $location, Services) {
    this.Services = Services;
    this.$location = $location;
  }

  _handleChange() {
    console.log('topic', this.topic);
    console.log('message', this.message);
  }

  _handleSubmit() {
    var vm = this;
    var user_id = localStorage.getItem('id');
    var data = {
      user_id: user_id,
      topic: this.topic,
      message: this.message
    };

    this.Services.post('/discussion/newthread', data)
    .then( function (json) {
      console.log('new thread disc', json);
      vm.$location.path('/discussion');
    });
    
  }
}

export default ThreadController;