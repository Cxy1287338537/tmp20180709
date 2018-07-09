function Banner () {

  var banner   = $('.banner-container').eq(0);
  var last     = $('.banner-last').eq(0);
  var next     = $('.banner-next').eq(0);
  var controls = $('.banner-list').eq(0);

  var data = {}, fx = true;

  Object.defineProperties(data, {
    current: {
      get: function () {
        return Number($('.banner-list > li.active').attr('data-n'));
      },
      set: function (n) {
        if(typeof n !== 'number') return ;
        if(n < 0) n = 0;
        if(n > 4) n = 4;
        $('.banner-list > li.active').removeClass('active');
        $('.banner-list > li[data-n='+n+']').addClass('active');
        banner.css('transform', 'translateX(-'+(n*100/5)+'%)');
      }
    }
  });

  last.on('click', function () {
    data.current--;
  });
  next.on('click', function () {
    data.current++;
  });
  $('li', controls).on('click', function () {
    data.current = Number($(this).attr('data-n'));
  });

  setInterval(function(){
    if(fx) {
      data.current++;
    }
    else {
      data.current--;
    }
    if(data.current===0) {
      fx = true;
    }
    if(data.current===4) {
      fx = false;
    }
  }, 2500);
  this.$data = data;
}
