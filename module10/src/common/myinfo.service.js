
(function () {
'use strict';

angular.module('common')
.service('MyInfoService', MyInfoService);

MyInfoService.$inject = ['MenuService']
function MyInfoService(MenuService) {
    let service = this;

    service.name = "";
    service.email = "";
    service.phone = "";
    service.faveDish = "";

    service.getMenuItemFromShortName = function(menuItemShortName) {
        return MenuService.getMenuItems(menuItemShortName[0]).then(function(response) {
            let item = response.menu_items.find(menuItem => menuItem.short_name === menuItemShortName);
            return item;
        }).catch(function(error) {
            console.error(error);
        });
    }

    service.setInfo = function(name, email, phone, faveDish) {
        service.name = name;
        service.email = email;
        service.phone = phone;
        service.faveDish = faveDish;
    }

    service.getInfo = function() {
        return service.getMenuItemFromShortName(service.faveDish).then( function(response) {
            return {
                name: service.name,
                email: service.email,
                phone: service.phone,
                faveDish: service.faveDish,
                faveMenuItem: response
            }
        }).catch(function(error) {
            console.error(error);
        });
    }


}

})();