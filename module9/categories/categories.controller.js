(function () {
'use strict';

angular.module('RestaurantApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
    let cc = this;
    cc.categories = categories;
}

})();
