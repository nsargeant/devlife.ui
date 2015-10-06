import {_module} from 'module'

import layoutTemplate from './layoutTemplate.html'

_module.directive('layout', function() {
  return {
    restrict: 'E',
    template: layoutTemplate,
    require: ['ngModel', 'layout'],
    controllerAs: 'layout',
    bindToController: true,
    scope: {
      data: '=ngModel',
      cols: '='
    },
    controller: function () {
      let ctrl = this;
      this.viewData = [];

      this.formatData = function() {
        var viewData = [];
        ctrl.data.reverse();
        var row = [];
        for (var i = 0; i < ctrl.data.length; i++) {
          row.push(ctrl.data[i]);
          if(row.length === ctrl.cols) {
            viewData.push(row);
            row = [];
          }
        }
        if(row.length) {
          viewData.push(row);
        }
        
        ctrl.viewData = viewData;
      }
    },
    link: function(scope, el, attr, ctrls) {
      var ngModel = ctrls[0];
      var layout = ctrls[1];
      
      if(layout.data) {
        layout.formatData();
      }

      ngModel.$render(function() {
        layout.formatData()
      });
    }

  };
});