export default function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('../tpl/views/home.html')
    })
    .state('playerlist', {
      url: '/playerlist',
      template: require('../tpl/components/app.html')
    })
    .state('myteam', {
      url: '/myteam',
      template: require('../tpl/components/myteam.html')
    })
    .state('teams', {
      url: '/teams',
      template: require('../tpl/components/teams.html')
    })
    .state('discussion', {
      url: '/discussion',
      template: require('../tpl/components/discussion.html'),
      controller: 'DiscussionController',
      controllerAs: 'Discussion'
    })
    .state('thread', {
      url: '/thread',
      template: require('../tpl/components/thread.html')
    })
    .state('threadTopic', {
      url: '/thread/:thread_id',
      template: require('../tpl/views/threadtopic.html'),
      controller: 'ThreadtopicController',
      controllerAs: 'Threadtopic'
    })

  $urlRouterProvider.otherwise('/');
}

