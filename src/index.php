<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Lolita Grasset</title>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Lolita Grasset, intégratrice Web.">
    <meta name="keywords" content="Lolita Grasset, intégratrice Web, junior, dev, dev front, front">

    <link rel="stylesheet" href="css/main.css">
    <!-- FONTAWESOME -->
    <script src="https://use.fontawesome.com/1244fbc7a8.js"></script>
    <script src="https://rawgit.com/Olical/EventEmitter/master/EventEmitter.min.js"></script>

</head>
<body>

<div class="site-container section-wrapper">
  <div class="side">
    <div class="side__title">
      <h1>Lolita Grasset</h1>
    </div>

    <nav class="menu">
      <a href="#one" class="menu__item js-scrollTo js-active" id="js-home">
        <span class="menu__item__name" >Home</span>
        <span class="menu__item__label">E.T téléphone maison</span>
      </a>
      <a href="#two" class="menu__item js-scrollTo" id="js-projects">
        <span class="menu__item__name">Projets</span>
        <span class="menu__item__label">Métro dodo</span>
      </a>
      <a href="#three" class="menu__item js-scrollTo" id="js-about">
        <span class="menu__item__name">A propos</span>
        <span class="menu__item__label">J'aime les crêpes</span>
      </a>
    </nav>

    <div class="icons">
      <div class="icons__list">
        <p class="line">
          <a href="https://www.linkedin.com/in/lolita-grasset-a66781b3/" target="_blank" class="icon icon--linkedin" title="Linkedin">
            <span class="icon__inside">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </span>
          </a>
          <a href="https://codepen.io/Skyz0fraise/" target="_blank" class="icon icon--codepen" title="Codepen">
            <span class="icon__inside">
              <i class="fa fa-codepen" aria-hidden="true"></i>
            </span>
          </a>
          <a href="https://github.com/Skyzofraise" target="_blank" class="icon icon--github" title="github">
            <span class="icon__inside">
              <i class="fa fa-github" aria-hidden="true"></i>
            </span>
          </a>
        </p>
        <p class="line">
          <a href="https://www.dropbox.com/s/00vfvcblnq73eet/CV-lastone.pdf?dl=0" target="_blank" class="icon icon--cv" title="CV">
            <span class="icon__inside">
              <i class="fa fa-id-card-o" aria-hidden="true"></i>
            </span>
          </a>
          <a href="#" class="icon icon--mail" title="Contactez-moi<3">
            <span class="icon__inside">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </a>
        </p>        
      </div><!--/.icons__list-->
    </div><!--/.icons-->
  </div><!--/.side-->

  <div class="presentation js-page" id="one" data-hash="section-presentation">
      <h1 class="presentation__name shuffle shuffle-one">
          <span class="shuffle__anim">&nbsp;</span>
          <span class="shuffle__slash">|</span>
      </h1>
      <h2 class="presentation__job shuffle shuffle-two">
          <span class="shuffle__anim"></span>
          <span class="shuffle__slash">|</span>
      </h2>
      <div class="social">
          <a href="" class="social__item" title="CV" target="_blank"><i class="fa fa-id-card-o" aria-hidden="true"></i></a>
          <a href="" class="social__item" title="Email" target="_blank"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
      </div>
      <div class="scroll">
          <p>Scroll</p>
          <div class="scroll__anim"></div>
      </div>
  </div><!-- /.presentation-->

  <section class="projects js-page" id="two" data-hash="section-projects">
      <div class="projects__inside">
        <div class="projects__content">
          <div class="grid">
            <h2 class="projects__title title" data-aos=fade-up>Projets</h2>
            <div class="grid__inside" data-aos=fade-up>
              <div class="losange">
                <div class="losange__container">
                  <div class="losange__container__inside losange__container__inside--chibiakihabara">
                    <div class="losange__container__inside__side losange__container__inside__side--face">
                      <img src="img/chibi.png" alt="" class="image">
                    </div>
                    <div class="losange__container__inside__side losange__container__inside__side--back">
                    </div>
                  </div>
                </div>
                <div class="losange__text">
                  <h3 class="losange__text__title losange__text__title--two-lines">
                    <a class="losange__text__title__link" href="http://chibi-akihabara.com/" target="_blank" title="site chibi akihabara">Chibi<br> Akihabara</a>
                  </h3>
                  <h4 class="losange__text__subtitle">E-Commerce</h4>
                  <p class="losange__text__description">Intégration web Prestashop 
                    <span class="losange__text__description__container">
                      <a class="losange__text__description__container__link" href="https://www.behance.net/gallery/40301139/Chibi-Akihabara-E-commerce" title="behance chibi akihabara" target="_blank">behance</a>/
                      <a class="losange__text__description__container__link" href="http://chibi-akihabara.com/" title="site chibi akihabara" target="_blank">site</a>
                    </span>
                  </p>
                </div>
              </div>

              <div class="losange">
                  <div class="losange__container">
                    <div class="losange__container__inside losange__container__inside--riodelvin">
                      <div class="losange__container__inside__side losange__container__inside__side--face">
                        <img src="img/riodelvin.png" alt="" class="image">
                      </div>
                      <div class="losange__container__inside__side losange__container__inside__side--back">
                      </div>
                    </div>
                  </div>
                  <div class="losange__text">
                    <h3 class="losange__text__title" >
                      <a class="losange__text__title__link" href="http://lolitagrasset.com/RioDelVin/" target="_blank" title="site rio del vin">Rio del Vin</a>
                    </h3>
                    <h4 class="losange__text__subtitle">Site vitrine</h4>
                    <p class="losange__text__description">Intégration web / Dev. front 
                      <span class="losange__text__description__container">
                        <a class="losange__text__description__container__link" href="http://lolitagrasset.com/RioDelVin/" target="_blank">site</a>
                      </span>
                    </p>
                </div>
              </div>

            </div>
            <div class="grid__inside grid__inside--three-items" data-aos=fade-up>
      
              <div class="losange">
                <div class="losange__container">
                  <div class="losange__container__inside osange__container__inside--killtilt">
                    <div class="losange__container__inside__side losange__container__inside__side--face">
                      <img src="img/kt.png" alt="" class="image">
                    </div>
                    <div class="losange__container__inside__side losange__container__inside__side--back">
                    </div>
                  </div>
                </div>
                <div class="losange__text">
                  <h3 class="losange__text__title" >
                    <a class="losange__text__title__link" href="https://www.kill-tilt.fr/" title="site kill tilt" target="_blank">Kill Tilt</a></h3>
                  <h4 class="losange__text__subtitle">Site communautaire</h4>
                  <p class="losange__text__description">Inté / dev. back Wordpress 
                    <span class="losange__text__description__container">
                      <a class="losange__text__description__container__link" href="https://www.behance.net/gallery/40336865/Kill-Tilt-Site-Communautaire" title="voir sur behance" target="_blank">behance</a>/
                      <a class="losange__text__description__container__link" href="https://www.kill-tilt.fr/" title="site Kill Tilt target="_blank">site</a>
                    </span>
                  </p>
                </div>
              </div>

              <div class="losange">
                <div class="losange__container">
                  <div class="losange__container__inside losange__container__inside--villagemap">
                    <div class="losange__container__inside__side losange__container__inside__side--face">
                      <img src="img/villagemap.png" alt="" class="image">
                    </div>
                    <div class="losange__container__inside__side losange__container__inside__side--back">
                    </div>
                  </div>
                </div>
                <div class="losange__text">
                  <h3 class="losange__text__title">
                    <a class="losange__text__title__link" href="https://www.behance.net/gallery/40370675/Village-Map-Place-de-march" title="voir sur behance" target="_blank">Village Map</a>
                  </h3>
                  <h4 class="losange__text__subtitle">Place de marché</h4>
                  <p class="losange__text__description">Inté / dev. front 
                    <span class="losange__text__description__container">
                      <a class="losange__text__description__container__link" href="https://www.behance.net/gallery/40370675/Village-Map-Place-de-march" title="voir sur behance" target="_blank">behance</a>
                    </span>
                  </p>
                </div>
              </div>

              <div class="losange losange--last-one">
                <div class="losange__container">
                  <div class="losange__container__inside losange__container__inside--curieusesexpositions">
                    <div class="losange__container__inside__side losange__container__inside__side--face">
                      <img src="img/curieusesexpositions.png" alt="" class="image">
                    </div>
                    <div class="losange__container__inside__side losange__container__inside__side--back">
                    </div>
                  </div>
                </div>
                <div class="losange__text">
                  <h3 class="losange__text__title losange__text__title--two-lines">
                    <a class="losange__text__title__link" href="http://lescurieusesexpositions.fr/" target="_blank">Curieuses expositions</a>
                  </h3>
                  <h4 class="losange__text__subtitle">Site d'événements</h4>
                  <p class="losange__text__description">Inté / dev. back Wordpress 
                    <span class="losange__text__description__container">
                      <a class="losange__text__description__container__link" href="http://lescurieusesexpositions.fr/" target="_blank">site</a>
                    </span>
                  </p>
                </div>
              </div>

            </div>
            <div class="grid__inside" data-aos=fade-up>

              <div class="losange">
                <div class="losange__container">
                  <div class="losange__container__inside losange__container__inside--anadore">
                    <div class="losange__container__inside__side losange__container__inside__side--face">
                      <img src="img/anadore.png" alt="" class="image">
                    </div>
                    <div class="losange__container__inside__side losange__container__inside__side--back">
                    </div>
                  </div>
                </div>
                <div class="losange__text">
                  <h3 class="losange__text__title">
                    <a class="losange__text__title__link" href="http://anadore.fr/" title="site anadore" target="_blank">Anadore</a>
                  </h3>
                  <h4 class="losange__text__subtitle">Site d'agence</h4>
                  <p class="losange__text__description">Intégration web <br> Dev. front 
                    <span class="losange__text__description__container">
                      <a class="losange__text__description__container__link" href="https://www.behance.net/gallery/40341275/Anadore-Site-agence" title="voir sur behance" target="_blank">behance</a>/<a class="losange__text__description__container__link" href="http://www.anadore.fr/" title="site anadore" target="_blank">site</a>
                    </span>
                  </p>
                </div>
              </div>

              <div class="losange">
                  <div class="losange__container">
                    <div class="losange__container__inside losange__container__inside--codepen">
                      <div class="losange__container__inside__side losange__container__inside__side--face">
                        <img src="img/codepen.png" alt="" class="image">
                      </div>
                      <div class="losange__container__inside__side losange__container__inside__side--back">
                      </div>
                    </div>
                  </div>
                  <div class="losange__text">
                    <h3 class="losange__text__title losange__text__title--two-lines">
                      <a class="losange__text__title__link" href="https://codepen.io/Skyz0fraise/" title="Codepen" target="_blank">Je  <br /> bidouille</a>
                    </h3>
                    <h4 class="losange__text__subtitle">des bouts de code</h4>
                    <p class="losange__text__description">Par ici et par là
                      <span class="losange__text__description__container">
                        <a class="losange__text__description__container__link" href="https://codepen.io/Skyz0fraise/" target="_blank">sur codepen</a>
                      </span>
                    </p>
                </div>
              </div>
            </div>
          </div><!-- /.projects__-->
      </div>
  </section>

  <section class="about js-page" id="three">
    <div class="about__content">
      <div class="about__img" data-aos="fade-up">
        <div class="image-element">
          <img class="hidden-nohover" src="https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif" alt="magic">
          <!-- <img src="https://media.giphy.com/media/NzcdxHBuVB1zq/giphy.gif" alt="dean"> -->
          <!-- <img src="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia1.giphy.com%2Fmedia%2FXreQmk7ETCak0%2Fgiphy.gif" alt=""> -->
          <img class="hidden-hover" src="/img/photo.jpg" alt="">
        </div>
      </div>
      <div class="about__text">
          <h2 class="about__title title" data-aos=fade-up>A propos</h2>
          <p data-aos=fade-up>
              Je m'appelle Lolita Grasset, j'ai 24 ans et je suis
              actuellement à la recherche d'un CDI en tant qu'intégratrice
              web/développeuse front à Paris. Disponible dès à présent,
              si mon profil vous intéresse n'hésitez pas à consulter mon CV
              et me contacter.
          </p>
          <p data-aos=fade-up>
              J'ai validé cette année ma formation en alternance de Développeuse
              Multimédia où je travaillais en parallèle au sein de l'agance Anadore
              comme intégratrice web. Fort de cette expérience, je souhaite persévérer
              dans cette voie qui me passionne.
          </p>
      </div><!--/.about__text-->
    </div><!--/.about__content-->
  </section>
</div>

<?php require "inc/cdn-scripts.php"; ?>
<script src="js/bundle.js"></script>
</body>
</html>
