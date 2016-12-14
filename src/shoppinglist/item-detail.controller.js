(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['items'];
function ItemDetailController( items) {
  var itemDetail = this;
  itemDetail.items = items.data.menu_items;
  // var promise = MenuDataService.getItemsForCategory($stateParams.categoryShortName);
  // promise.then(function (response){
  //   console.log("na controller okay promise");
  //   itemDetail.items = response.data;
  //   console.log(itemDetail.items)
  // })
  // .catch(function (error){
  //       console.log(error);
  // });




}

})();
