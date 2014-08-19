$(function() {
  var navActive = (function() {
    $(document).on('click', '.nav__i__a_plus, .mob__i', function(e) {
      e.preventDefault();
      if($(this).hasClass('nav__i__a_active') && $('.subnav').hasClass('subnav_active')) {
        $('.nav__i__a').removeClass('nav__i__a_active');
        $('.subnav').removeClass('subnav_active');
        $(this).find('.mob__i__arr').removeClass('mob__i__arr_180');
      } else if($(this).hasClass('mob__i')) {
        $('.nav__list').toggleClass('nav__list_active');
        $(this).find('.mob__i__arr').toggleClass('mob__i__arr_180');
      } else {
        $('.nav__i__a').removeClass('nav__i__a_active');
        $('.subnav').removeClass('subnav_active'); 
        $(this).addClass('nav__i__a_active');
        $(this).next().addClass('subnav_active');
        $('.nav__i__a').find('.mob__i__arr').removeClass('mob__i__arr_180');
        $(this).find('.mob__i__arr').addClass('mob__i__arr_180');
      }
    });
  });
  navActive();

  $('.modal_a').on('click', function(e){
    e.preventDefault();
    $(this).parent().siblings().children('.modal').arcticmodal();
  });

  var k = 760/220;
  var k_2 = 260/460;
  $('.adw_vert').height($('.adw_vert').width()/k_2)
  $('.adw__hor').height($('.adw__hor').width()/k)

  $(window).resize(function(){
    $('.adw_vert').height($('.adw_vert').width()/k_2);
    $('.adw__hor').height($('.adw__hor').width()/k);
  });

  if($('div').is('.coop__map')) {
    ymaps.ready(init);
  }
  
  var yaMap,
      yaPlacemark;
  function init(){     
    yaMap = new ymaps.Map("coop__map", {
        center: [55.808413, 37.58243],
        zoom: 16,
        controls: ['zoomControl']
    });
    yaPlacemark = new ymaps.Placemark([55.808413, 37.58243], {}, {
      preset: 'islands#darkGreenDotIcon'
    });
  yaMap.geoObjects.add(yaPlacemark);
  }
});