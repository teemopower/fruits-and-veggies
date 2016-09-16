/* setup your angular app here */

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
var fruitVeggieApp = angular.module('fruitVeggieApp', []);

 
 fruitVeggieApp.controller('FruitVeggieCtrl', ['$scope', function($scope) {
 
  $scope.moveLeft = function(index) {
     $scope.fruitList.push($scope.produceList[index]);
     $scope.produceList.splice(index, 1);
   }
 
   $scope.moveRight = function(index) {
     $scope.veggieList.push($scope.produceList[index]);
     $scope.produceList.splice(index, 1);
   }
 
   $scope.produceList = [
   'Artichoke',
   'Apricot',
   'Apple',
   'Banana',
   'Blackberry',
   'Blueberry',
   'Currant',
   'Cherry',
   'Gooseberry',
   'Grapefruit',
   'Kumquat'
 ];
 
 $scope.veggieList = [];
 $scope.fruitList = [];
 
 }]);
