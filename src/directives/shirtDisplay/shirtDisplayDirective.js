import {_module} from 'module'

import shirtDisplayTemplate from './shirtDisplayTemplate.html'

_module.directive('shirtDisplay', function() {
  return {
    restrict: 'EA',
    template: shirtDisplayTemplate,
    require: ['ngModel', 'shirtDisplay'],
    scope: {
      shirt: '=ngModel'
    },
    controllerAs: 'shirtDisplay',
    bindToController: true,
    controller: function () {
      let ctrl = this;
    }
  };
});