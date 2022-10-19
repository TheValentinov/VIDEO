$(function () {
  $(".filter__range").ionRangeSlider({
    onChange: function (data) {
      $(".filter__cost--from").val(data.from);
      $(".filter__cost--to").val(data.to);
    },
    onStart: function (data) {
      $(".filter__cost--from").val(data.from);
      $(".filter__cost--to").val(data.to);
    },
  });
  $(".filter__sort").styler();
  $(".filter__head").on("click", function () {
    $(".shop__filters").toggleClass("shop__filters--active");
  });
});
