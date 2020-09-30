'use strict';
const fs = require('fs');
const path = require('path');
const gaTag = require('../assets/js/gaTag');

describe('ga-tag', () => {
  let bannerContainer;
  let cookieBanner;

  beforeEach(() => {
    bannerContainer = document.createElement('div');
    bannerContainer.id = 'global-cookie-message';
    bannerContainer.innerHTML = fs.readFileSync(path.join(__dirname, '../views/partials/cookie-banner.html'), 'utf8');
    cookieBanner = bannerContainer.firstChild;
    document.body.appendChild(bannerContainer);
  });

  afterEach(() => {
    document.body.removeChild(bannerContainer);
  });

  describe('initialiseCookieBanner', () => {

    test('it should show banner container if container and banner are both present', () => {
      gaTag.initialiseCookieBanner();
      expect(bannerContainer.style.display).toEqual('block');
    });

    test('it should hide banner container if present without cookie banner (i.e. on pages outside HOF sub apps)', () => {
      bannerContainer.removeChild(cookieBanner);
      gaTag.initialiseCookieBanner();
      expect(bannerContainer.style.display).toEqual('none');
    });

    test('it should hide fallback content if JS is enabled', () => {
      gaTag.initialiseCookieBanner();
      const fallbackContent = document.getElementsByClassName('js-disabled');
      for (let element of fallbackContent) {
        expect(element.style.display).toEqual('none');
      }
    });

    test('it should show interactive content if JS is enabled', () => {
      gaTag.initialiseCookieBanner();
      const interactiveContent = document.getElementsByClassName('js-enabled');
      for (let element of interactiveContent) {
        expect(element.style.display).toEqual('block');
      }
    });

  });

});
