$(document).ready(function() {
    $(window).scroll(function() {

      var wScroll = $(this).scrollTop();

      if (wScroll === $(window).height()- 100) {
        $('#workExperience').toggleClass('animate');
      }
      if (wScroll < $(window).height()) {
        $('#workExperience').removeClass('animate');
      }


      // if (wScroll >= $(window).height()) {
      //
      //   $('#projects').addClass('animate');
      // }
      //
      // if (wScroll >= $(window).height() - 400) {
      //
      //   $('#education').addClass('animate');
      // }

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

//
  // jQuery(function() {
  //   $('body').panelSnap();
  //     });
  //
  // jQuery(function() {
  //   var options = {
  //     $menu: false,
  //     menuSelector: 'a',
  //     panelSelector: 'section',
  //     namespace: '.panelSnap',
  //     onSnapStart: function(){},
  //     onSnapFinish: function(){},
  //     onActivate: function(){},
  //     directionThreshold: 50,
  //     slideSpeed: 200,
  //     easing: 'linear',
  //     offset: 0,
  //     keyboardNavigation: {
  //       enabled: false,
  //       nextPanelKey: 40,
  //       previousPanelKey: 38,
  //       wrapAround: true
  //     }
  //   };
  //
  //   $('#main').panelSnap(options);
  // });
