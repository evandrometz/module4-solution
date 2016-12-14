(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/shoppinglist/templates/main-menu.template.html',
    controller: 'MainMenuController as mainMenu',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/shoppinglist/templates/main-item-detail.template.html',
    // controller: "ItemDetailController as itemDetail", function($stateParams)
    // {
    //   console.log("no controller do route");
    //   console.log($stateParams.categoryShortName);
    //   return MenuDataService.getItemsForCategory($stateParams.categoryShortName.categoryShortName);
    // }
    controller: "ItemDetailController as itemDetail",
    resolve: {
      items:  function (MenuDataService, $stateParams){
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
      }
      // items: ['MenuDataService', function ( MenuDataService) {
      //   console.log("no route");
      //   console.log( MenuDataService);
      //   return MenuDataService.getItemsForCategory(categoryShortName);
      // }]
    }
  });
}

})();
