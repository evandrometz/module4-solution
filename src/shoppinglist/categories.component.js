(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/shoppinglist/templates/menu.template.html',
  bindings: {
    items: '<'
  }
});
})();
