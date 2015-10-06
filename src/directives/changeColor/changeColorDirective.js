import {_module} from 'module'

import changeColorTemplate from './changeColorTemplate.html'

_module.directive('changeColor', function() {
  return {
    restrict: 'E',
    template: changeColorTemplate,
    require: ['ngModel', 'changeColor'],
    controllerAs: 'changeColor',
    bindToController: true,
    scope: {
      color: '=ngModel',
      availableColors: '='
    },
    controller: function() {
      let ctrl = this;
      this.select = function(color) {
        ctrl.color = color;
      }
    }
    // ,link: function(scope, el, attr, ctrls) {
    //   var ngModel = ctrls[0];
    //   var changeColor = ctrls[1];
    // }

  };
});