import "cypress-real-events/support";

describe("Github", () => {
  it("should be able to access github repositorie", () => {
    cy.visit("localhost:3000/introduction");
    cy.get("#github-link-button")
      .should("have.attr", "href")
      .and("eq", "https://github.com/ORizzo/portifolio");
  });
  it("should be able to open tooltip when is hover - Github repositorie link", () => {
    cy.visit("localhost:3000/introduction");
    cy.get(".radix-tooltip-trigger")
      .first()
      .should("have.attr", "data-state", "closed")
      .realHover();
    cy.get(".radix-tooltip-trigger")
      .first()
      .should("have.attr", "data-state", "delayed-open");
  });
  it("should be able to open tooltip when is hover - Github edited-at", () => {
    cy.visit("localhost:3000/introduction");
    cy.get(".radix-tooltip-trigger")
      .last()
      .should("have.attr", "data-state", "closed")
      .realHover();
    cy.get(".radix-tooltip-trigger")
      .last()
      .should("have.attr", "data-state", "delayed-open");
  });
});
