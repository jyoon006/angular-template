export default function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/',
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
      template: require('../tpl/components/discussion.html')
    })

  $urlRouterProvider.otherwise('/');
}

