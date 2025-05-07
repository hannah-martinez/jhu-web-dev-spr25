(function() {
"use strict";

angular.module('public')
.directive('menuItemValidation', MenuItemValidationDirective);

MenuItemValidationDirective.$inject = ['MyInfoService'];
function MenuItemValidationDirective(MyInfoService) {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                MyInfoService.getMenuItemFromShortName(value).then( function (response) {
                    if (response) {
                        mCtrl.$setValidity('menuItemExists', true);
                    } else {
                        mCtrl.$setValidity('menuItemExists', false);
                    }
                }).catch(function(error) {
                    mCtrl.$setValidity('menuItemExists', false);
                })
                return value;

            }
            mCtrl.$parsers.push(myValidation);
        }
    }
}

})();