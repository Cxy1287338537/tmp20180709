function Dropdown () {
  var data = {};
  Object.defineProperties(data, {

  });
  $('.header-toggle').on('click', function(){
    $('.header-choice').addClass('open');
    document.onclick = function () {
      $('.header-choice').removeClass('open');
      document.onclick = null;
    }
    return false;
  })
  $('.header-list a').on('click', function(){
    $('.header-toggle').html($(this).attr('data-v'));
  })
  this.$data = data;
}