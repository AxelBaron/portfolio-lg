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

// lien smoothscroll
// SCROLL
$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });
});