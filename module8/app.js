(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    let nidc = this;
    nidc.searchTerm = "";

    nidc.getMatchedMenuItems = function (searchTerm) {
        let promise = MenuSearchService.getMatchedMenuItems(searchTerm);

        promise.then(function (response) {
            nidc.found = response;
        }).catch(function (error) {
            console.log(error);
        });
    }

    nidc.removeItem = function (itemIndex) {
        nidc.found.splice(itemIndex, 1);
    };
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
    let service = this;
    service.getMatchedMenuItems = function(searchTerm) {
        const url = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json";
        return $http({url: url}).then(function (response) {
            let matchedItems = [];
            if (!searchTerm) {
                return [];
            }
            for (let category in response.data) {
                for (let item of response.data[category].menu_items) {
                    if (item.description.toLowerCase().indexOf(searchTerm) !== -1 ) {
                        matchedItems.push({
                            name: item.name, 
                            short_name: item.short_name,
                            description: item.description
                        });
                    }
                }
            }
            return matchedItems;
        });
    }
}

function FoundItemsDirective() {
    let ddo = {
        templateUrl: 'foundItems.html',
        scope: {
            items: '<',
            remove: '&',
        },
    };
    return ddo;
}

})();