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
    cy.url().should('include', '/337167');
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

  it("Navigating to '/?query=abc' displays a search form with entered text 'abc' and a movie list relevant to the search query", () => {
    cy.visit("/?query=zoo");
    cy.get('input[placeholder="What do you want to watch?"]').should('have.value', 'zoo');
    cy.get("div").should("contain", "Zootopia");
  });

  it("Navigating to '/?genre=comedy' displays 'Comedy' genre as selected and movies of comedy genre", () => {
    cy.visit("/?genre=Comedy");
    cy.get('a').should('contain', 'Comedy').should('have.class','active');
  });

  it("Navigating to '/?sortBy=title' displays the list of movies sorted by title", () => {
    cy.visit("/?sortBy=title");
    cy.get("div").should("contain", "¡Three Amigos!");
  });

  it("Navigating to '/?query=abc&genre=comedy&sortBy=title' displays the search form with entered value 'abc', sort select has 'Title' value, and the movie list displays movies relevant to these search params", () => {
    cy.visit("/?query=zoo&genre=Comedy&sortBy=title");
    cy.get("div").should("contain", "Zootopia");
    cy.get('a').should('contain', 'Comedy').should('have.class','active');
  });
});
