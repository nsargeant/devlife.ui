import {_module} from "module"

_module.controller('homeCtrl', function(shirtService) {
  var ctrl = this;
  ctrl.shirts = null;
  
  shirtService.getShirts().success(function (data) {
  	ctrl.shirts = data.map(function (shirt) {
  		shirt.color = shirt.availableColors[0];
  		return shirt;
  	});
  });
});