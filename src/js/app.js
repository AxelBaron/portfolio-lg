/**
 * Agence'O - App
 * @author Axel Baron (Agence'O)
 * @created 18/01/2017
 */

(function ($) {
    var app = {
        init: function () {
            app.copyright();
            app.shuffle($(".shuffle-one"), 'Lolita Grasset', 500);
            app.shuffle($(".shuffle-two"), 'Intégratrice web, Dev front', 2300);
            AOS.init({
                offset: 200,
                duration: 600,
                easing: 'ease-in-sine',
                delay: 100
            });
        },
        copyright: function () {
            console.info("%c Lolita Grasset %c http://lolitagrasset.com/", ' font-weight: bold; color: white; background: black;', 'font-weight: normal; font-style: italic; color: gray;');
        },

        /**
         *
         * @param el = HTML element
         * @param text = Sting
         * @param delay = number
         */
        shuffle: function (el, text, delay) {
            var shuffleAnim = el.find('.shuffle__anim');
            var shuffleSlash = el.find(".shuffle__slash");
            var shuffleDot = el.find(".shuffle__dot");

            setTimeout(function () {
                shuffleSlash.css("display", "inline-block");
                shuffleAnim.shuffleLetters({
                    "text": text,
                    "callback": function () {
                        setTimeout(function () {
                            shuffleSlash.css("color", "transparent");
                        }, 500);
                    }
                });
            }, delay);
        }
    };

    /**
     * Init ----------
     */
    app.init();
})(jQuery);

/* See related post at
https://codepen.io/Javarome/post/full-page-sliding
*/
function ScrollHandler(pageId) { 
  var page = $('#' + pageId);
  var pageStart = page.offset().top;
  var pageJump = false;

  function scrollToPage() {
    pageJump = true;
      $('html, body').animate({ 
      scrollTop: pageStart 
    }, {
      duration: 1000,
      complete: function() {
        pageJump = false;
      }
    });  
  }
  window.addEventListener('wheel', function(event) {
   var viewStart = $(window).scrollTop();
   if (!pageJump) { 
      var pageHeight = page.height();
      var pageStopPortion = pageHeight / 2;
      var viewHeight = $(window).height();

      var viewEnd = viewStart + viewHeight;
      var pageStartPart = viewEnd - pageStart;
      var pageEndPart = (pageStart + pageHeight) - viewStart;
      
      var canJumpDown = pageStartPart >= 0; 
      var stopJumpDown = pageStartPart > pageStopPortion; 
      
      var canJumpUp = pageEndPart >= 0; 
      var stopJumpUp = pageEndPart > pageStopPortion; 

      var scrollingForward = event.deltaY > 0;
      if (  ( scrollingForward && canJumpDown && !stopJumpDown) 
         || (!scrollingForward && canJumpUp   && !stopJumpUp)) {
        event.preventDefault();
        scrollToPage();
      } 
   } else {
     event.preventDefault();
   }    
  });
}
new ScrollHandler('one'); 
new ScrollHandler('two');
new ScrollHandler('three');