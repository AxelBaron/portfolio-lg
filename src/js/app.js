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
            app.scrollTo();
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
        },

        scrollTo: function () {
            $('.js-scrollTo').on('click', function() { // Au clic sur un élément
                var page = $(this).attr('href'); // Page cible
                var speed = 750; // Durée de l'animation (en ms)
                $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
                return false;
            });
        },

        active: function(){
             // récupération des éléments à rendre actifs 
            var activePresentation = document.getElementById('js-home');
            var activeProjects = document.getElementById('js-projects');
            var activeAbout = document.getElementById('js-about');
            // récupération la div
            var divPresentation = document.getElementById('one');
            var divProjects = document.getElementById('two');
            var divAbout = document.getElementById('three');
            // récupération de la somme de la taille + de la hauteur
            var sommePresentation = divPresentation.offsetHeight+divPresentation.offsetTop;
            var sommeProjects = divProjects.offsetHeight+divProjects.offsetTop;
            var sommeAbout = divAbout.offsetHeight+divAbout.offsetTop;
            // récupération de la position verticale au scroll
            var pos = window.scrollY;

            if(pos<sommePresentation){
                activePresentation.classList.add("js-active");
                activeProjects.classList.remove("js-active");
                activeAbout.classList.remove("js-active");
            }
            if(pos>sommePresentation && pos < sommeAbout){
              activePresentation.classList.remove("js-active");
              activeProjects.classList.add("js-active");
              activeAbout.classList.remove("js-active");
            }
            if(pos>=sommeProjects){
              activePresentation.classList.remove("js-active");
              activeProjects.classList.remove("js-active");
              activeAbout.classList.add("js-active");
            }
        }

    };

    /**
     * Init ----------
     */
    app.init();
    $(window).scroll(function(){
        app.active();
    });
})(jQuery);
