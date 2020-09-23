describe("Input form", () => {
  it("focuses input on load", () => {
    cy.focused().should("have.class", "new-todo");
  });
  // it.only("accepts input", () => {
  //   const typedText = "Buy Milk";

  //   cy.get(".new-todo").type(typedText).should("have.value", typedText);
  // });
  it("accepts input", () => {
    const typedText = "Buy Milk";

    cy.get(".new-todo").type(typedText).should("have.value", typedText);
  });
});
