$(function(){
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $('.hamburger').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('#nav').addClass('active');
    } else {
      $('#nav').removeClass('active');
    }
  });

  /*=================================================
  スライダー
  ===================================================*/
  if($('div').hasClass('slider')){
    $('.slider').slick({
      arrows: false,          // 左右の矢印を非表示にする
      dots: true,             // ドット（ページ送り）を表示する（※CSSで長方形にカスタマイズ）
      slidesToScroll: 1,      // 1枚づつスライドする
      centerMode: true,       // センターモード（両端が見切れる状態になる）
      variableWidth: true,    // スライド要素に横幅を設定できるようにする
      responsive: [           // レスポンシブ用ブレイクポイント
        {
          breakpoint: 769,
          settings: {
            variableWidth: false
          }
        }
      ]
    });
  }
});