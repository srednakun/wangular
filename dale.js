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
/**
 * Attaching objects or other types to $scope
 */
dale.controller('PropController',function($scope){
  /**
   *
   * @type {{name: string}}
   */
  $scope.person = {
    name: 'Dale Corns',
    phone: '',
    greeted: true
  };
});
/**
 * Becomes a child controller when placed inside the PropConroller's element in the html
 */
dale.controller('PropChildController', function($scope){
  $scope.displayPhone = function(){
    $scope.person.phone = '(555) 555-5555';
  }
});
/**
 *  Manually parse an expression (normally done by digest loop)
 *  Inject the $parse service into the controller
 */
dale.controller('parseController', function($scope, $parse){
  /**
   * Register a watch on expr to parse its value and bind the result to $scope.parsedValue
   */
  $scope.$watch('expr', function(newVal, oldVal, scope){
    if(newVal !== oldVal){
      var parsFunc = $parse(newVal);
      $scope.parsedValue = parsFunc(scope);
    }
  })
});
/**
 * Interpolating emailBody into the previewText property
 */
dale.controller('interpolateController', function($scope, $interpolate){
  $scope.$watch('emailBody', function(body){
    /**
     * body is string of user input
     */
    if(body){
      /**
       * template becomes a function that will take a template as an argument and contains body as the context
       */
      $scope.template = $interpolate(body);
      /**
       ** When executed template will return body interpolation of any occurrence of the template within it.
       */
      $scope.previewText = $scope.template({to: $scope.to});
    }
  });
  /**
   * Also watch the input field so that when to changes, it will be reflected in the email body without having to type in the body again afterwards for it to update.
   */
  $scope.$watch('to', function(recc){
    /**
     * if $scope.template has been defined then we can call it, if not, there is nothing to change since anything in the emailBody would have triggered the $scope.template function.
     */
    if(recc && $scope.template){
      /**
       * refresh preview text with the new data
       */
      $scope.previewText = $scope.template({to: recc});
    }
  });
});
dale.controller('filterController', function($scope){

});