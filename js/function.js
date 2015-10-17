$(document).ready(function() {
    $(window).scroll(function() {

      var y = $(this).scrollTop();

      if (y >= 400) {

        $('#workExperience').addClass('animate');
      }

      if (y >= 800) {

        $('#projects').addClass('animate');
      }

      if (y >= 950) {

        $('#education').addClass('animate');
      }

    });


});



// var pContainerHeight = $('#education').scrollTop();
//   console.log(pContainerHeight);
// $(window).scroll(function(){
//   var wScroll = $(this).scrollTop();
//     console.log(wScroll);
//   if (wScroll === pContainerHeight) {
//
//
//
// }});
// //when you scroll to certain position
//
//   jQuery(function($) {
//     $('body').panelSnap();
//       });
//
//   jQuery(function($) {
//     var options = {
//       $menu: false,
//       menuSelector: 'a',
//       panelSelector: '> section',
//       namespace: '.panelSnap',
//       onSnapStart: function(){},
//       onSnapFinish: function(){},
//       onActivate: function(){},
//       directionThreshold: 50,
//       slideSpeed: 200,
//       easing: 'linear',
//       offset: 0,
//       keyboardNavigation: {
//         enabled: false,
//         nextPanelKey: 40,
//         previousPanelKey: 38,
//         wrapAround: true
//       }
//     };
//
//     $('body').panelSnap(options);
//   });
