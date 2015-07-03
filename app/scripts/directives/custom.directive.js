/**
 * Created by Ernie on 1/7/15.
 */

(function(){
  'use strict';

  var app = angular.module('paywhereStaticWebsiteApp');

  app.directive('popUp', function() {
    return {
      restrict: 'E',
      templateUrl: function(element, attrs) {
        var link = '';

        if(typeof attrs.link != 'undefined') {
          link = attrs.link;
        }

        return '/views/' + link +'.html';
      },
      link: function(scope, element, attrs) {
        scope.displayText = '';

        scope.initPop = function(){
          $('.popup').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
          });
        }
        if(typeof attrs.text != 'undefined') {
          scope.displayText = attrs.text;
        }
        if(typeof attrs.setClass != 'undefined') {
          scope.assignClass = attrs.setClass;
        }



        scope.initPop();

      }
    };
  });

  app.directive('bgslickSlide', function() {
    return {
      restrict: 'E',
      templateUrl: function() {
        return '/views/bgslickslider.html';
      },
      link: function(scope, element, attrs) {
        scope.initBgSlide = function(){
          $('.section1-slider').slick({
            autoplay: true,
            infinite: true,
            dots: false,
            arrows: false,
            fade: true
          });
        }


        scope.initBgSlide();

      }
    };
  });

  app.directive('slickSlide',['$timeout', function($timeout) {
    return {
      restrict: 'E',
      templateUrl: function() {

        return '/views/slickslider.html';
      },
      scope: {
        index: '=set'
      },
      controller: function ($scope, $attrs, $element, retrieveImages) {
        $scope.images = new Array();
        $scope.className = '';
        $scope.slickSettings = '';
        var sliderOptions = new Array();
        var sliderOptionString = '{';


        retrieveImages.getImages().success(function(data) {
          console.log("GETTING DATA SET "+ $scope.index);

          $scope.images = data.set[$scope.index].images;
          $scope.className = data.set[$scope.index].css.name;
          sliderOptions = data.set[$scope.index].options;
          angular.forEach(sliderOptions, function(value, key) {
            (key == sliderOptions.length-1)? sliderOptionString += value.opt_name + ": " + value.opt_val + "}" :
              sliderOptionString += value.opt_name + ": " + value.opt_val + ", ";

            console.log("Value is " + value.opt_name + " Key is " + key + " array length is " + sliderOptions.length);
          });

          $scope.slickSettings = sliderOptionString;
          console.log("THIS SETTINGS APPLYIN " + $scope.slickSettings);

        }).error(function(data, status) {
          console.log("FAILED" + data + "STATUS IS " +status);
        });

        $scope.initSlide = function () {

          $element.children().slick();


        }

        $scope.$watch('images', function () {
          if ($scope.images === 'undefined') {
            return;
          }

          if ($scope.images.length > 0) {
            console.log($scope.images.length);
            if (typeof $scope.className != 'undefined')
              $timeout(function() {
                $scope.initSlide()
              }, 0);
          }
        }, true);


      }
    };
  }]);

  app.directive('textslickSlide', function() {
    return {
      restrict: 'E',
      templateUrl: function() {
        return '/views/textslickslider.html';
      },
      link: function(scope, element) {
        scope.initTextSlide = function(){
          element.children().slick({
            autoplay: true,
            infinite: true,
            dots: true,
            arrows: false
          });
        }


        scope.initTextSlide();

      }
    };
  });


}())
