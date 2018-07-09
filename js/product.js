function Product () {
  var data = {};
  Object.defineProperties(data, {
    current: {
      get: function(){
        return $('.product-list > li.active').attr('data-t');
      },
      set: function(n){
        $('.product-list > li').removeClass('active');
        $('.product-list > li[data-t='+n+']').addClass('active');
        $('.product-panel').removeClass('open');
        $('.product-panel[data-t='+n+']').addClass('open');
      }
    }
  });
  $('.product-list > li > a').on('click', function () {
    data.current = $(this).attr('data-n');
  });
  this.$data = data;
}