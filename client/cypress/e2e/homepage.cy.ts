import { SELECTORS } from "../support/selector";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the homepage", () => {
    cy.get(SELECTORS.homepage.header).should("be.visible");
  });
});
