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
//
// (function () {
//   'use strict';
//
//   angular.module('MsgApp', [])
//   .controller('MsgController', MsgController);
//
//   MsgController.$inject = ['$scope'];
//   function MsgController($scope) {
//     $scope.name = "SeungYun";
//     $scope.stateOfBeing = "hungry";
//     $scope.sayMessage = function () {
//       return "I am the coolest";
//     };
//
//     $scope.feedKermit = function() {
//       $scope.stateOfBeing = "happy";
//     }
//   }
// })();

//------------------------END OF MODULE 1
