/**
 * dale.js
 * Created by dcorns on 9/20/15
 * Copyright © 2015 Dale Corns
 * @description A simple module and controller based on ng-book
 */
'use strict';
angular.module('dale',[])
.controller('DaleController', function($scope, $timeout){
    /**
     * Simple clock
     */
    var updateClock = function(){
      $scope.clock = new Date();
      $timeout(function(){
        updateClock();
      }, 1000);
    };
    updateClock();
  });