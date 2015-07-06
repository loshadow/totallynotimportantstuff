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
      scope: {
        assignClass: '@setClass',
        assignId: '@assignId',
        displayText: '@text'
      },
      link: function(scope, element, attrs) {
        //scope.displayText = '';
        console.log("displayText is " + scope.displayText);

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

  app.directive('priceSlide', function() {
    return {
      restrict: 'E',
      templateUrl: function() {
        return '/views/priceslider.html';
      },
      link: function(scope, element, attrs) {
        scope.initPriceSlide = function(){
          $('.section3-price-slider').slick({
            responsive: [
              {
                breakpoint: 100000,
                settings: "unslick"
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
                  speed: 300,
                  infinite: true
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
                  speed: 300,
                  infinite: true
                }
              }
            ]
          });
        }


        scope.initPriceSlide();

      }
    };
  });


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

  app.directive('backToTop', function() {
    return {
      restrict: 'E',
      template: '<a href="#" class="back-to-top">'+
      '<img src="images/back-to-top.png" id="back-to-top">'+
      '</a>',
      link: function (scope, element, attrs) {
        $(document).ready(function() {
          var offset = 220;
          var duration = 1000;

          $(".back-to-top-link, nav ul li a,a[href='#section1'],a[href='#section2'],a[rel='m_PageScroll2id']").mPageScroll2id({
            highlightSelector:".nav-options a"
          });

          $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
              $('.back-to-top').fadeIn(duration);
            } else {
              $('.back-to-top').fadeOut(duration);
            }
          });

          $('.back-to-top').click(function(event) {
            event.preventDefault();

            $('html, body').animate({scrollTop: 0}, duration);
            return false;
          })

        });
      }
    };
  });


  app.directive('scrollToSection', function() {
    return {
      restrict: 'E',
      template: '<a href="#section2">' +
      '<img src="images/down-button.png" id="down-button">' +
      '</a>',
      link: function (scope, element, attrs) {
        $(document).ready(function() {

          $(".back-to-top-link, nav ul li a,a[href='#section1'],a[href='#section2'],a[rel='m_PageScroll2id']").mPageScroll2id({
            highlightSelector:".nav-options a"
          });

        });
      }
    };
  });


}())
