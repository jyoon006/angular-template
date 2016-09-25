export default function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('../tpl/app.html')
    })
    .state('admin', {
      url: '/admin',
      template: require('../tpl/admin.html')
    })

  $urlRouterProvider.otherwise('/');
}

