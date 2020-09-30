'use strict';
const fs = require('fs');
const path = require('path');
const gaTag = require('../assets/js/gaTag');

describe('ga-tag', () => {
  let cookieBanner;

  beforeAll(() => {
    cookieBanner = document.createElement('div');
    cookieBanner.id = 'global-cookie-message';
    cookieBanner.innerHTML = fs.readFileSync(path.join(__dirname, '../views/partials/cookie-banner.html'), 'utf8');
    document.body.appendChild(cookieBanner);
  });

  describe('initialiseCookieBanner', () => {

    beforeAll(() => {
      gaTag.initialiseCookieBanner();
    });

    test('it should hide fallback content if JS is enabled', () => {
      const fallbackContent = document.getElementsByClassName('js-disabled');
      for (let element of fallbackContent) {
        expect(element.style.display).toEqual('none');
      }
    });

    test('it should show interactive content if JS is enabled', () => {
      const interactiveContent = document.getElementsByClassName('js-enabled');
      for (let element of interactiveContent) {
        expect(element.style.display).toEqual('block');
      }
    });

  });

});
