(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuController', MainMenuController);


MainMenuController.$inject = ['MenuDataService', 'items'];
function MainMenuController(MenuDataService, items) {
  var mainMenu = this;
  mainMenu.items = items.data;

}

})();
