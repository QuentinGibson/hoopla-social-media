describe("smoke tests", () => {
  afterEach(() => {
    cy.cleanupUser();
  });
  it("should change colors of element with the theme", () => {
    cy.fixture("dark").then((fixtureData) => {
      cy.login();
      cy.visit("/settings");
      cy.wait(1000);
      cy.get("#theme").select("dark");
      cy.get("#save-profile").click();
      cy.get("main").should("have.css", "background-color", "rgb(0, 0, 0)");
    });
  });
});
