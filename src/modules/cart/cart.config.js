import {_module} from 'module'

import cartTemplate from './cartTemplate.html'

_module.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root.cart', {
      url: "cart",
      controller: 'cartCtrl',
      template: cartTemplate
    });
});