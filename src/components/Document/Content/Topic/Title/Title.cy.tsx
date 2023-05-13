import React from "react";
import { Title } from "./";

describe("<Title />", () => {
  it("renders", () => {
    cy.mount(<Title>Teste</Title>)
      .get("h3")
      .contains("Teste");
  });
});
