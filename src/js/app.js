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
            app.closeModal();

            var larg = (window.innerWidth);
            if( larg > 1200 ){
                /* Smartscroll external library */
                var options = {
                    mode: "vp", // "vp", "set"
                    autoHash: false,
                    sectionScroll: true,
                    initialScroll: false,
                    keepHistory: false,
                    sectionWrapperSelector: ".section-wrapper",
                    sectionClass: "js-page",
                    animationSpeed: 600,
                    headerHash: "header",
                    breakpoint: null,
                    eventEmitter: null,
                    dynamicHeight: false
                };
                $.smartscroll(options);
            }


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

        //MODAL
        closeModal: function(){
            $('.js-close').on('click', function(){
                console.log("close");
                $('.more').removeClass("display-block");
                $('.more').addClass("display-none");
            });
        },

        // MENU SCROLLTO
        scrollTo: function () {
            $('.js-scrollTo').on('click', function() { // Au clic sur un élément
                var page = $(this).attr('href'); // Page cible
                var speed = 750; // Durée de l'animation (en ms)
                $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
                return false;
            });
        },

        // ITEM DE MENU ACTIF SELON SCROLL + AFFICHAGE MENU AU SECOND SLIDE
        active: function(){
             // récupération des éléments à rendre actifs 
            var activePresentation = document.getElementById('js-home');
            var activeProjects = document.getElementById('js-projects');
            var activeAbout = document.getElementById('js-about');
            var activeSide = document.getElementById('js-side');
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

            if(pos<=1){
                activeSide.style.left = '-160px';
            }

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
            if(pos>=sommePresentation){
                activeSide.style.left = '0';
            }
        },

        // RESIZE
        // Fonction qui permet de désactiver le scroll en slide par slide en-dessous de 1200px
        resize: function(){
            var larg = (window.innerWidth);
            if( larg < 1200 ){
                /* Smartscroll external library */
                var options = {
                    mode: "vp", // "vp", "set"
                    autoHash: false,
                    sectionScroll: false,
                    initialScroll: false,
                    keepHistory: false,
                    sectionWrapperSelector: ".section-wrapper",
                    sectionClass: "js-page",
                    animationSpeed: 600,
                    headerHash: "header",
                    breakpoint: null,
                    eventEmitter: null,
                    dynamicHeight: false
                };
                $.smartscroll(options);
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
    $(window).resize(function(){
        app.resize();
    });
})(jQuery);
