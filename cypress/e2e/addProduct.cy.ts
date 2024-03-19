describe("Add product", () => {
  it("", () => {
    cy.visit("http://localhost:3000");

    cy.get('.styles__ButtonAddProduct-sc-6069e924-3').click()

    cy.get('.styles__WrapperInput-sc-ebe14ca-0 > input').type('Macbook Telas 2024')

    cy.get('.styles__ContentModalProduct-sc-6069e924-4 > .styles__WrapperButton-sc-4e7bca8f-0').click()

  });
});