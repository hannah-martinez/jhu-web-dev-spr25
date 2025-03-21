(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    let toBuy = this;
    toBuy.list = ShoppingListCheckOffService.toBuyList;
    toBuy.buy = function(index) {
        ShoppingListCheckOffService.buyItem(index);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    let alreadyBought = this;
    alreadyBought.list = ShoppingListCheckOffService.alreadyBoughtList;
}

function ShoppingListCheckOffService() {
    let service = this;

    service.toBuyList = [
        {
            name: "bananas",
            quantity: "3 bunches"
        },
        {
            name: "milk",
            quantity: "1 quart"
        },
        {
            name: "bread",
            quantity: "1 loaf"
        },
        {
            name: "ice cream",
            quantity: "2 cartons"
        },
        {
            name: "chicken fingers",
            quantity: "1 bag"
        },
    ];

    service.alreadyBoughtList = [];

    service.buyItem = function(index) {
        console.log(service.toBuyList[index])
        service.alreadyBoughtList.push(service.toBuyList[index]);
        service.toBuyList.splice(index, 1);
    };
}

})();