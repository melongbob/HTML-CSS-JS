// (function() {
//   'use strict';
//
//   angular.module('NameCalculator', [])
//
//   .controller('NameCalculatorController', function($scope) {
//     $scope.name = "";
//     $scope.totalValue = 0;
//
//     $scope.displayNumeric = function() {
//       var totalNameValue = calculateNumericForString($scope.name);
//       $scope.totalValue = totalNameValue;
//     };
//
//     function calculateNumericForString(string) {
//       var totalStringValue = 0;
//       for (var i = 0; i < string.length; i++){
//         totalStringValue += string.charCodeAt(i);
//       }
//
//       return totalStringValue;
//     }
//
//   });
// })();

// (function () {
//   'use strict';
//
//   angular.module('DIApp', [])
//   .controller('DIController', DIController);
//
//   DIController.$inject = ['$scope', '$filter'];
//   function DIController ($scope, $filter) {
//     $scope.name = "SeungYun";
//
//     $scope.upper = function () {
//       var upCase = $filter('uppercase');
//       $scope.name = upCase($scope.name);
//     };
//  }
// })();

// (function () {
//   'use strict';
//
//   angular.module('MsgApp', [])
//   .controller('MsgController', MsgController)
//   .filter('loves', LovesFilter)
//
//   MsgController.$inject = ['$scope', 'lovesFilter'];
//   function MsgController($scope, lovesFilter) {
//     $scope.name = "SeungYun";
//     $scope.stateOfBeing = "hungry";
//     $scope.feedCost = .45;
//
//     $scope.sayMessage = function () {
//       var msg = "I am the coolest";
//       // var output = $filter('uppercase')(msg);
//       // return output;
//       return msg;
//     };
//
//     $scope.feedKermit = function () {
//       $scope.stateOfBeing = "happy";
//     };
//   }//controller END
//
// })();

//------------------------END OF MODULE 1

// (function () {
// 'use strict';
//
// angular.module('MsgApp', [])
// .controller('MsgController', MsgController)
// .filter('loves', LovesFilter)
// .filter('truth', TruthFilter);
//
// MsgController.$inject = ['$scope', 'lovesFilter'];
// function MsgController($scope, lovesFilter) {
//   $scope.stateOfBeing = "hungry";
//
//   $scope.sayMessage = function () {
//     var msg = "I am the coolest";
//     return msg;
//   };
//
//   $scope.sayCoolestMessage = function () {
//     var msg = "I am the coolest";
//     msg = lovesFilter(msg);
//     return msg;
//   };
//
//   $scope.feedKermit = function () {
//     $scope.stateOfBeing = "happy";
//   };
// }
//
// function LovesFilter() {
//   return function (input) {
//     input = input || "";
//     input = input.replace("coolest", "Kermit");
//
//     return input;
//   };
// }
//   function TruthFilter() {
//     return function(input, target, replace) {
//       input = input || "";
//       input = input.replace(target, replace);
//
//       return input;
//     };
//   }
//
// })();

// (function () {
//   'use strict';
//
//   angular.module('CounterApp', [])
//   .controller('CounterController', CounterController);
//
//   CounterController.$inject = ['$scope'];
//   function CounterController($scope) {
//     $scope.onceCounter = 0;
//     $scope.counter = 0;
//     $scope.name = "SeungYun";
//
//     $scope.showNumberOfWatchers = function () {
//       console.log("# of Watchers: ", $scope.$$watchersCount);
//     };
//
//     $scope.countOnce = function() {
//       $scope.onceCounter = 1;
//     };
//
//     $scope.upCounter = function() {
//       $scope.counter++;
//     }
//
//   }
//
// })();

(function () {
  'use strict';

  var shoppingList1 = ["Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter",
   "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
 ];

 var shoppingList2 = [
   {
     name: "Milk",
     quantity: "2"
   },
   {
     name: "Donuts",
     quantity: "2"
   },
   {
     name: "Cookies",
     quantity: "300"
   },
   {
     name: "Chocolate",
     quantity: "5"
   }
 ];

 angular.module('ShoppingListApp', [])
 .controller('ShoppingListController', ShoppingListController);

 ShoppingListController.$inject = ['$scope'];
 function ShoppingListController($scope) {
   $scope.shoppingList1 = shoppingList1;
   $scope.shoppingList2 = shoppingList2;

   $scope.addToList = function () {
     var newItem = {
       name:$scope.newItemName,
       quantity: $scope.newItemQuantity
     };

     $scope.shoppingList2.push(newItem);
   };
 }

})();
