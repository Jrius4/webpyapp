describe("Django REST framework / React quickstart app", () => {
    const player = {
      name: "Armin",
      nationality: "ugandan",
      age: "15",
      dob:"2000-08-08",
      shirtnumber:"01",
      position:"goalkeeper",
      formerclub:"KCCA",
      biography:"Awesomeness"
    };
    before(() => {
      cy.exec("npm run dev");
      cy.exec("npm run flush");
    });
    it("should be able to fill a web form", () => {
      cy.visit("/");
      cy
        .get('input[name="name"]')
        .type(player.name)
        .should("have.value", player.name);
      cy
        .get('input[nationality="nationality"]')
        .type(player.nationality)
        .should("have.value", player.nationality);
      cy
        .get('input[dob="dob"]')
        .type(player.dob)
        .should("have.value", player.dob);
        cy
        .get('input[shirtnumber="shirtnumber"]')
        .type(player.shirtnumber)
        .should("have.value", player.shirtnumber);
      cy
        .get('input[position="position"]')
        .type(player.position)
        .should("have.value", player.position);
      cy
        .get('input[formerclub="formerclub"]')
        .type(player.formerclub)
        .should("have.value", player.formerclub);
       cy
        .get('textarea[biography="biography"]')
        .type(player.biography)
        .should("have.value", player.biography);
      cy.get("form").submit();
    });
    // more tests here
  });

  // insert after the first "it" block in ./cypress/integration/app_spec.js
  it("should be able to see the table", () => {
    cy.visit("/");
    cy.get("tr").contains(`${player.name}${player.nationality}${player.age}${player.dob}${player.shirtnumber}${player.position}${player.formerclub}${player.biography}`);
  });