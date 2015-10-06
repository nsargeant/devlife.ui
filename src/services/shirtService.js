import {_module} from 'module'

_module.service('shirtService', function($q, $http) {
  this.getShirts = () => {
    return $http.get('http://localhost:3000/v1/designs');
  }
});