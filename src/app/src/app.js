import angular from 'angular';
import uirouter from 'angular-ui-router';

/*************** Route Config ******************/
import config from './services/config';

/*************** Directives *******************/
import Navbar from './directives/views/navbar.directive';
import Playerlist from './directives/components/playerlist.directive';
import Searchbar from './directives/components/searchbar.directive';

angular.module('app', [
  Navbar.name,
  Playerlist.name,
  Searchbar.name,
  uirouter
])
.config(config)
