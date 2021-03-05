/* global describe, it, cy*/

import { func } from 'prop-types';

describe('wintergram', function () {
  it('para ver si la app funciona', function () {
    cy.visit('/');
  });

  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1');
    cy.get('article');
  });

  it('si podemos navegar con el navbar', function () {
    cy.visit('/pet/1');

    cy.get('nav a').first().click();
    cy.url().should('include', '/');
  });

  it('los usuarios notRegister ven el formulario register e inicialSession en favs', function () {
    cy.visit('/favs');
    cy.get('form').should('have.length', 2);
  });
});
