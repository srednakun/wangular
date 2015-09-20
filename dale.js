/**
 * dale.js
 * Created by dcorns on 9/20/15
 * Copyright © 2015 Dale Corns
 * @description A simple module and controller based on ng-book
 */
'use strict';
/**
 * @description setter and angular.module('dale') would be the getter
 * @returns {object} Angular Modular
 */
var dale = angular.module('dale',[])
.controller('DaleController', function($scope, $timeout){
    /**
     *
     * @type {{}} Since JS passes by value rather that reference, it is considered a best practice in angular to bind the view to a property of and object rather than the object itself.
     */
    $scope.clock = {};
    var updateClock = function(){
      $scope.clock.now = new Date();
      $timeout(function(){
        updateClock();
      }, 1000);
    };
    updateClock();
  });
/**
 * Adding a controller by referencing the angular module
 */
dale.controller('CalcController', function($scope){
  /**
   *
    * @type {number}
   */
  $scope.counter = 0;
  $scope.add = function(amount){
    $scope.counter += amount;
  };
});