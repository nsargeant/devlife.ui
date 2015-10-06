import {_module} from 'module'

_module.service('userService', function($q) {
  this.getUser = () => {
    var dfd = $q.defer();

    // TODO rest call here to get user
    var user = null;

    setTimeout(function() {
      user = {
        permissions: 'admin',
        name: 'Nathan'
      };
      dfd.resolve(user);

    }, 1000);

    return dfd.promise;
  }
});