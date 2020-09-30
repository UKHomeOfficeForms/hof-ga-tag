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
  var banner = document.getElementById("global-cookie-message");
  if (banner !== null) {
    hideFallbackContent();
    showInteractiveContent();
    banner.style.display = 'block';
  }
}

initialiseCookieBanner();

module.exports = {
  initialiseCookieBanner
};
