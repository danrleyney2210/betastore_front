describe("Pagination test", () => {
  it("", () => {
    cy.visit("http://localhost:3000");

    cy.get(':nth-child(3) > .page-num').click()
    cy.get(':nth-child(4) > .page-num').click()
    cy.get(':nth-child(5) > .page-num').click()
    cy.get(':nth-child(6) > .page-num').click()
    cy.get(':nth-child(7) > .page-num').click()

  });
});