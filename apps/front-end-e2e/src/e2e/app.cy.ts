
describe('front-end', () => {
  beforeEach(() => cy.visit('/'));

  it('should automatically redirect to "/transactions"', () => {
    cy.url().should('contain.text', 'transactions')
  });
});
