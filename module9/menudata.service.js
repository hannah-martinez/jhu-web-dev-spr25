
(function () {
'use strict';

angular.module('RestaurantApp')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
    let service = this;

    service.getAllCategories = function() {
        const url = "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json";
        return $http({url: url}).then(function (response) {
            return response.data;
        }).catch(function(error) {
            console.error(error)
        });
    }

    service.getItemsForCategory = function(categoryShortName) {
        const url = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json";
        return $http({url: url}).then(function (response) {
            return response.data;
        }).catch(function(error) {
            console.error(error)
        });
    }
}

})();