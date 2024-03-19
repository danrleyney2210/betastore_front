describe("Login with user and key", () => {
  it("", () => {
    cy.visit("http://localhost:3000/auth");

    cy.get(':nth-child(1) > input').click().type("kminchelle");;

    cy.get(':nth-child(3) > input').click().type('0lelplR')

    cy.get('.styles__WrapperButton-sc-4e7bca8f-0').click()
    
  });
});