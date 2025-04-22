(function () {
'use strict';

angular.module('RestaurantApp')
.component('categories', {
  templateUrl: 'categories.html',
  bindings: {
    categories: '<'
  }
});

})();
