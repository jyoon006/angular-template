import angular from 'angular';
import uirouter from 'angular-ui-router';

/*************** Route Config ******************/
import config from './services/config';

/*************** Directives *******************/
import Navbar from './directives/views/navbar.directive';

angular.module('app', [
  Navbar.name,
  uirouter
])
.config(config)
