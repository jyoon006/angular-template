import angular from 'angular';
import uirouter from 'angular-ui-router';

/*************** Route Config ******************/
import config from './services/config';

/*************** API Factory *******************/
import services from './services/services';

/*************** Directives *******************/
import Signin from './directives/views/signin.directive';
import Navbar from './directives/views/navbar.directive';
import Playerlist from './directives/components/playerlist.directive';
import Searchbar from './directives/components/searchbar.directive';

angular.module('app', [
  Signin.name,
  Navbar.name,
  Playerlist.name,
  Searchbar.name,
  uirouter
])
.factory('Services', services)
.config(config)
