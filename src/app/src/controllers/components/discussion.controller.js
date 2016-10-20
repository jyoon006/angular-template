class DiscussionController {
  
  constructor($state, $location, Services) {
    this.Services = Services;
    this.$location = $location;
    console.log('discussionnnn');
  }

  _handleClick() {
    this.$location.path('/thread');
  }

  _handleData() {
    var vm = this;
    this.Services.get('/discussion/threads')
    .then( function( json ) {
      console.log('discussion jsonnn', json);
      vm.data = json.data;
    });
  }

  _handleThread(thread) {
    console.log('thread', thread);
    this.$location.path('/thread/' + thread._id);
  }
}

export default DiscussionController;