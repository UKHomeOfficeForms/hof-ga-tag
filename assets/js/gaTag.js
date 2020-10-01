'use strict';

function hideFallbackContent() {
  var fallbackContent = document.getElementsByClassName('js-disabled');
  for (var i = 0; i < fallbackContent.length; i++) {
    fallbackContent[i].style.display = 'none';
  }
}

function showInteractiveContent() {
  var interactiveContent = document.getElementsByClassName('js-enabled');
  for (var i = 0; i < interactiveContent.length; i++) {
    interactiveContent[i].style.display = 'block';
  }
}

function initialiseCookieBanner() {
  var bannerContainer = document.getElementById("global-cookie-message"); // the default cookie message container from hof-govuk-template
  var cookieBanner    = document.getElementById("cookie-banner");         // the cookie banner that will replace the container's default content if using this package

  if (bannerContainer !== null && cookieBanner !== null) {
    hideFallbackContent();
    showInteractiveContent();
    bannerContainer.style.display = 'block';
  }

  // hide default cookie message if banner has not been added properly e.g. not used in common layout.html file
  if (bannerContainer !== null && cookieBanner === null) {
    bannerContainer.style.display = 'none';
  }
}

initialiseCookieBanner();

module.exports = {
  initialiseCookieBanner
};
