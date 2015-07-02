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
        //scope.assignClass = '';
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
          //scope.assignClass = attrs.setClass;
          //var imgSelector = element[0].querySelector('img');
          console.log(element.children());
          var a = element.children();
          var b = a[0];
          console.log(b);
          //var c  = b.find('span');
          //console.log(c);
          element.find('img').toggleClass(attrs.setClass);

          console.log(element[0].querySelector('img'));
        }



        scope.initPop();

      }
    };
  });
  //
  //app.directive('slickSlide', function() {
  //  return {
  //    restrict: 'E',
  //    templateUrl: function(element, attrs) {
  //      //var text = '';
  //      var link = '';
  //
  //
  //
  //      if(typeof attrs.link != 'undefined') {
  //        link = attrs.link;
  //      }
  //
  //      return '/views/' + link +'.html';
  //    },
  //    link: function(scope, element, attrs) {
  //      scope.displayText = '';
  //      scope.assignClass = '';
  //      scope.initPop = function(){
  //        $('.popup').magnificPopup({
  //          type: 'inline',
  //
  //          fixedContentPos: false,
  //          fixedBgPos: true,
  //
  //          overflowY: 'auto',
  //
  //          closeBtnInside: true,
  //          preloader: false,
  //
  //          midClick: true,
  //          removalDelay: 300,
  //          mainClass: 'my-mfp-zoom-in'
  //        });
  //      }
  //      if(typeof attrs.text != 'undefined') {
  //        scope.displayText = attrs.text;
  //        console.log('success assign');
  //      }
  //      if(typeof attrs.setClass != 'undefined') {
  //        scope.assignClass = attrs.setClass;
  //        console.log('got Class');
  //      }
  //
  //
  //
  //      scope.initPop();
  //
  //    }
  //  };
  //});




}())
