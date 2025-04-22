(function () {
'use strict';

angular.module('RestaurantApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
    let ic = this;
    ic.items = items;
}

})();
