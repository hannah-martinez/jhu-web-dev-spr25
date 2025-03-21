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
            quantity: 8,
            pricePerItem: 1
        },
        {
            name: "apples",
            quantity: 5,
            pricePerItem: .50
        },
        {
            name: "loaf of bread",
            quantity: 1,
            pricePerItem: 2
        },
        {
            name: "ice cream cake",
            quantity: 1,
            pricePerItem: 15
        },
        {
            name: "bag of chicken fingers",
            quantity: 1,
            pricePerItem: 10
        },
    ];

    service.alreadyBoughtList = [];

    service.buyItem = function(index) {
        let item = service.toBuyList[index];
        item.totalPrice = item.quantity * item.pricePerItem;
        service.alreadyBoughtList.push(item);
        service.toBuyList.splice(index, 1);
    };
}

})();