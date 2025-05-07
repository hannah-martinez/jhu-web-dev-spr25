(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService'];
function SignUpController(MyInfoService) {
  var $ctrl = this;
  $ctrl.submit = function(firstName, lastName, email, phone, faveDish) {
    $ctrl.completed = true;
    MyInfoService.setInfo(firstName + " " + lastName, email, phone, faveDish);
  }
  $ctrl.validateDish = function(faveDish) {
    return MyInfoService.getMenuItemFromShortName(faveDish).then( function (response) {
      console.log(response);
      return true;
    }).catch(function(error) {
      console.log(error);
      return false;
    })
  }
}

})();
