describe("E2E", () => {
  it("should be able to visit main page", () => {
    cy.visit("localhost:3000");
  });
  it("should be able to visit introduction page", () => {
    cy.visit("localhost:3000/introduction");
  });
  it("should be able to visit description page", () => {
    cy.visit("localhost:3000/description");
  });
  it("should be able to visit presentation page", () => {
    cy.visit("localhost:3000/presentation");
  });
  it("should be able to visit setup page", () => {
    cy.visit("localhost:3000/setup");
  });
  it("should be able to visit portfolio page", () => {
    cy.visit("localhost:3000/portfolio");
  });
});
