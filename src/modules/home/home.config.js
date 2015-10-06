import {_module} from 'module'

import homeTemplate from './homeTemplate.html'

_module.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root.home', {
      url: "home",
      controller: 'homeCtrl as homeCtrl',
      template: homeTemplate
    });
});