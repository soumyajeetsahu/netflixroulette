describe("App Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("enters search term and submits the form", () => {
    const searchTerm = "Fifty";

    cy.get('input[placeholder="What do you want to watch?"]').type(searchTerm);
    cy.get(".searchForm_searchButton__9sMsM").click();
    cy.get("div").should("contain", "Fifty Shades Freed");
    cy.contains("Fifty Shades Freed").click();
    cy.get('[data-testid="SearchIcon"]').should('be.visible');
    cy.get('[data-testid="SearchIcon"]').click();
    cy.get(".searchForm_searchButton__9sMsM").should('be.visible');
  });

  it("sets the active class on clicked genre", () => {
    cy.get('a').should('contain', 'ALL').should('have.class','active');
    cy.contains("Horror").click();
    cy.get('a').should('contain', 'Horror').should('have.class','active');
  });

  it("sets the Sort By", () => {
    cy.get('.MuiOutlinedInput-root').click();
    cy.contains("RELEASE DATE").click();
  });

});
