describe("App Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("increments the counter value on Increment button click", () => {
    cy.contains("Value: 0");

    cy.contains("Increment").click();
    cy.contains("Value: 1");
  });

  it("decrements the counter value on Decrement button click", () => {
    cy.contains("Decrement").click();

    cy.contains("Value: 0");

    cy.contains("Increment").click();
    cy.contains("Value: 1");

    cy.contains("Decrement").click();
    cy.contains("Value: 0");
  });

  it("decrements the counter value on Decrement button click", () => {
    cy.contains("Decrement").click();

    cy.contains("Value: 0");

    cy.contains("Increment").click();
    cy.contains("Value: 1");

    cy.contains("Decrement").click();
    cy.contains("Value: 0");
  });

  it("enters search term and submits the form", () => {
    const searchTerm = " search";

    cy.get(".search-input").should("have.value", "Test");

    cy.get(".search-input").type(searchTerm);
    cy.get(".search-button").click();

    cy.get(".search-input").should("have.value", "Test search");
  });

  it("sets the active class on clicked genre", () => {

    cy.get('a').should('contain', 'ALL').should('have.class','active');

    cy.contains("Horror").click();

    cy.get('a').should('contain', 'Horror').should('have.class','active');
  });
});
