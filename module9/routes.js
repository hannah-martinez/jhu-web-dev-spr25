(function () {

angular.module('RestaurantApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })

    .state('categories', {
        url: '/categories',
        templateUrl: 'categories/categories.html',
        controller: 'CategoriesController as cc',
        resolve: {
            categories: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })

    .state('category', {
        url: '/category/{categoryShortName}',
        templateUrl: 'items/items.html',
        controller: 'ItemsController as ic',
        resolve: {
            items: ['$stateParams', "MenuDataService", function($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
    })

}


})();
