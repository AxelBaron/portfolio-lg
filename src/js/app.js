/**
 * Agence'O - App
 * @author Axel Baron (Agence'O)
 * @created 18/01/2017
 */

(function ($) {
    var app = {
        init: function () {
            app.copyright();
            app.shuffle($(".shuffle-one"), 'Lolita Grasset', '');
            app.shuffle($(".shuffle-two"), 'Intégratrice web, Dev front', 1800);
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
                            shuffleDot.css("display", "inline");
                            shuffleDot.css("color", "red");
                        }, 600);
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
