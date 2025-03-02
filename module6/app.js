(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


function filterItem(elem) {
    return (elem && elem !== " ")
}

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    $scope.lunchItems = "";
    $scope.message = "";
    $scope.messageColor = "";
    $scope.checkIfTooMuch = function() {
        const numItems = $scope.lunchItems.split(",").filter(filterItem).length;
        if (!$scope.lunchItems) {
            $scope.message = "Please enter data first.";
            $scope.messageColor = "text-danger border-danger";
        } else if (numItems <= 3) {
            $scope.message = "Enjoy!";
            $scope.messageColor = "text-success border-success"
        } else {
            $scope.message = "Too much!";
            $scope.messageColor = "text-success border-success"
        }
    }
}

})();
