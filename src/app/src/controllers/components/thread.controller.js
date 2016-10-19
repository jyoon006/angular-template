class ThreadController {
  
  constructor($state, Services) {
    this.Services = Services;
  }

  _handleChange() {
    console.log('topic', this.topic);
    console.log('message', this.message);
  }

  _handleSubmit() {
    
  }
}

export default ThreadController;