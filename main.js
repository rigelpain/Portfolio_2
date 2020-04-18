$(function () {

  //.accordion1の中のp要素がクリックされたら
  $('.accordion__btn').click(function () {

    //クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
    $(this).next('ul').slideToggle();

  });
});