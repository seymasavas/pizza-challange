describe("Pizza Order Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5176/order");
  });

  it("sayfada ACİKTIM butonuna tıklayarak OrderForm açılıyor", () => {
    cy.visit("http://localhost:5176/");
    cy.get(".header-button").click();
    cy.url().should("include", "/order");
    });

  it("isim inputuna metin girilebiliyor", () => {
    cy.get('input[name="isim"]')
      .type("Şeyma Savaş")
      .should("have.value", "Şeyma Savaş");
  });

  it("birden fazla malzeme seçilebiliyor", () => {
    cy.get('input[type="checkbox"]').eq(0).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(1).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(2).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(3).check().should("be.checked");
  });

  it("form gönderilebiliyor ve yanıt console'da görülüyor", () => {
    
    cy.get('input[name="isim"]').type("Şeyma Savaş");
    cy.get('input[name="boyut"][value="orta"]').check();
    cy.get('select[name="hamur"]').select("ince");

   
    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();
    cy.get('input[type="checkbox"]').eq(3).check();

    cy.get('textarea[name="not"]').type("Hafif acı olsun");

    
    cy.get('button[type="submit"]').click();

    
    cy.wait(1000);
  });
});
