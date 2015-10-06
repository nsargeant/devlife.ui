import {_module} from 'module'
import appConfig from '../../../app.config.js'

_module.controller('rootController', function($state /*userService*/) {
  let ctrl = this;

  ctrl.title = appConfig.name;
  
  $state.go('root.home');
  // userService.getUser().then(function(user) {
  //   ctrl.user = user;
  // });
});