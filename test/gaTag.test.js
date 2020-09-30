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

  test('it should append cookie banner for test setup', () => {
    expect(document.body.firstChild).toEqual(cookieBanner);
  })

});
