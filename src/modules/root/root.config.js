import {_module} from 'module'

import rootTemplate from './rootTemplate.html'

_module.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('root', {
      url: "/",
      controller: 'rootController as rootCtrl',
      template: rootTemplate
    });
});