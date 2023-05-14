describe("Accordion", () => {
  it("should be able to change accordion items ", () => {
    cy.visit("localhost:3000/introduction");
    cy.get("#accordion-item")
      .should("have.attr", "data-state", "closed")
      .click()
      .should("have.attr", "data-state", "open");
  });
});
