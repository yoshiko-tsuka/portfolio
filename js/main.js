// モバイルブラウザかどうか判定
var isMobile = !!(new MobileDetect(window.navigator.userAgent).mobile());

/**
 * 指定された名前のタブを表示する
 */
function showTab(tabName) {
  // すでに表示されている場合は何もせずに終了
  if ($("#" + tabName).is(":visible")) {
    return;
  }

  var tabsContainer = $("a[href='#" + tabName + "']").closest(".tabs");
  // .tabs__menu liのうちtabNameに該当するものにだけactiveクラスを付ける
  tabsContainer.find(".tabs__menu li").removeClass("active");
  tabsContainer.find(".tabs__menu a[href='#" + tabName + "']").parent("li").addClass("active");

  // .tabs__contentの直下の要素をすべて非表示
  tabsContainer.find(".tabs__content > *").css({ display: "none" });
  // #<tabName>と.tabs__content .<tabName>を表示
  tabsContainer.find("#" + tabName + ", .tabs__content ." + tabName).css({
    display: "block",
    opacity: 0.7,
  }).animate({
    opacity: 1,
  }, 400);
}


/**
 * パララックス関連
 */

// 背景画像のスクロール速度。数字が小さいほど速い。
var parallaxXSpeed = 12;
var parallaxYSpeed = 3;
var parallaxXSpeed_small = 5;
var parallaxYSpeed_small = 1;

// パララックスを適用する関数
function showParallax() {
  var scrollTop = $(window).scrollTop();

  // 背景画像の位置をスクロールに合わせて変える
  var offsetX = Math.round(scrollTop / parallaxXSpeed);
  var offsetY = Math.round(scrollTop / parallaxYSpeed);
  var offsetX_small = Math.round(scrollTop / parallaxXSpeed_small);
  var offsetY_small = Math.round(scrollTop / parallaxYSpeed_small);

 // $(".works").css({
   // "background-position":
      // 一番上
     // -offsetX + "px " + -offsetY + "px, " +
      // 上から2番目
    //  offsetX_small + "px " + -offsetY_small + "px, " +
      // 一番下
      //"0% 0%",
  //});

}

// パララックスを初期化する
function initParallax() {
  $(window).off("scroll", showParallax);

  if (!isMobile) { // モバイルブラウザでなければパララックスを適用
    showParallax();

    // スクロールのたびにshowParallax関数を呼ぶ
    $(window).scroll(showParallax);
  }
}


function initParticles(){
  var w = $(window).width();
  if(w > 500){
  particles = Particles.init({
  selector: '.header_background',
  sizeVariations: 5,
  color: ['#aaaaaa', '#48F2E3'],
  connectParticles: true
  });
  }else{
  particles = Particles.init({
  selector: '.header_background',
  sizeVariations: 5,
  maxParticles:30,
  color: ['#aaaaaa', '#48F2E3'],
  connectParticles: true
  });
    
  }
}

/**
 * ウインドウリサイズ時に実行する処理
 */
$(window).resize(function() {
  // ウインドウがリサイズされるとここが実行される
  initParallax();
  
});


/**
 * ページロード時に実行する処理
 */
$(document).ready(function() {
  
  var show1 = $('.top').remove();
  var show2 = $('.profile').remove();
  var show3 = $('.works').remove();
  var show4 = $('footer').remove();
  // For jQuery
  
  var myWave = $('#myID').wavify({
    height: 300,
    bones: 6,
    amplitude: 100,
    color: 'rgba(150, 97, 255, .1)',
    speed: 0.2
  });
  myWave.updateColor({
  color: 'rgba(46, 139, 87, 0.1)',
  timing: 5
});

  
  $('#slide_right').animate({
    'left': '0px',
    'top': '0px',
    'opacity':'1'
  },{
    'duration': 200,
    'easing': 'swing',
    'complete' :function(){
      
      $('#slide_right').delay(500).animate({
      'opacity':'0'
    },{
      'duration': 1000,
      'easing': 'swing',
      'complete' :function(){
        $('#slide_left').delay(500).animate({
            'right': '0px',
            'top': '0px',
            'opacity':'1'
          },{
            'duration': 200,
            'easing': 'swing',
            'complete':function(){
              $('#slide_left').delay(500).animate({
                  'opacity':'0'
                },{
                  'duration': 1000,
                  'easing': 'swing',
                  'complete' :function(){
                    $('#slide_down').delay(500).animate({
                        'top': '0px',
                        'opacity':'1'
                      },{
                        'duration': 200,
                        'easing': 'swing',
                        'complete':function(){
                          $('#slide_down').delay(500).animate({
                              'opacity':'0'
                            },{
                              'duration': 1000,
                              'easing': 'swing',
                              'complete':function(){
                                $('.start_animation').animate({
                                  'opacity':'0'
                                },{
                                  'duration':200
                                });
                                $('.start_animation').delay(200).remove();
                                $('.notremove').before(show1);
                                $('.top').animate({
                                  'opacity':'1'
                                },{
                                  'duration':2000
                                });
                                $('.notremove').before(show2);
                                $('.notremove').before(show3);
                                $('.notremove').before(show4);
                                // 初期状態として1番目のタブを表示
  showTab("works-1");
  // タブがクリックされたらコンテンツを表示
  $(".tabs__menu a").click(function() {
    var tabName = $(this).attr("href");
    if (tabName[0] === "#") {
      // hrefの先頭の#を除いたものをshowTab()関数に渡す
      showTab(tabName.substring(1));

      // hrefにページ遷移しない
      return false;
    }
  });

  // animatedクラスを持つ要素が画面内に入ったら
  // Animate.cssのfadeInUpエフェクトを適用
  $(".animated").waypoint({
    handler: function(direction) {
      if (direction === "down") {
        $(this.element).addClass("fadeInUp");
        if($(this.element).hasClass("fadeOutUp")){
            $(this.element).removeClass("fadeOutUp");
        }
      }else if (direction === "up") {
        $(this.element).addClass("fadeOutUp");
        if($(this.element).hasClass("fadeInUp")){
            $(this.element).removeClass("fadeInUp");
        }
      }
  },  offset: "50%" });

  // popupクラスを持つ要素にMagnific Popupを適用
  $(".popup").magnificPopup({
    type: "image",
    work: {
      enabled: true,
    },

    // ポップアップが非表示になるまでの待ち時間
    removalDelay: 300,

    // ポップアップに適用されるクラス。
    // ここではフェードイン・アウト用のmfp-fadeクラスを適用。
    mainClass: "mfp-fade",
  });

  // ナビゲーションバーのリンクをクリックしたら
  // スムーズにスクロールしながら対象位置に移動
  $("#navbar a").click(function() {
    var destination = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(destination).offset().top,
    }, 1400);

    // ハンバーガーメニューが開いている場合は閉じる
    $(".navbar-toggle:visible").click();

    // 本来のクリックイベントは処理しない
    return false;
  });

  initParallax();
  
  initParticles();
  

                              }
                          });
                        }
                    });
                  }
              });
            }
        });
      }
    });
    }
  });


  
});
