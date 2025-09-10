describe("Pizza Order Form - IT2", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5176/order");
  });

  it("Anasayfadaki ACİKTIM butonuna tıklayarak OrderForm açılıyor", () => {
    cy.visit("http://localhost:5176/");
    cy.get(".header-button").click();
    cy.url().should("include", "/order");
  });

  it("İsim inputuna metin girilebiliyor", () => {
    cy.get('input[name="isim"]')
      .type("Şeyma Savaş")
      .should("have.value", "Şeyma Savaş");
  });

  it("Birden fazla malzeme seçilebiliyor", () => {
    cy.get('input[type="checkbox"]').eq(0).check({ force: true }).should("be.checked");
    cy.get('input[type="checkbox"]').eq(1).check({ force: true }).should("be.checked");
    cy.get('input[type="checkbox"]').eq(2).check({ force: true }).should("be.checked");
    cy.get('input[type="checkbox"]').eq(3).check({ force: true }).should("be.checked");
  });

  it("Form gönderilebiliyor ve yanıt console'da görülüyor", () => {
    cy.get('input[name="isim"]').type("Şeyma Savaş");
    cy.get('input[name="boyut"][value="orta"]').check({ force: true });
    cy.get('select[name="hamur"]').select("ince");

    cy.get('input[type="checkbox"]').eq(0).check({ force: true });
    cy.get('input[type="checkbox"]').eq(1).check({ force: true });
    cy.get('input[type="checkbox"]').eq(2).check({ force: true });
    cy.get('input[type="checkbox"]').eq(3).check({ force: true });

    cy.get('textarea[name="not"]').type("Hafif acı olsun");

    cy.get('button[type="submit"]').click();

    cy.wait(1000);
  });
});

describe("Order Form Validation", () => {
  beforeEach(() => {
    cy.visit("/order");
  });

  it("Form alanları görüntüleniyor mu?", () => {
    cy.get('input[name="isim"]').should('be.visible');
    cy.get('input[name="boyut"]').should('exist');
    cy.get('select[name="hamur"]').should('be.visible');
    cy.get('textarea[name="not"]').should('be.visible');
    cy.get('input[type="checkbox"]').should('have.length', 13); 
  });

  it("Hatalı form submit uyarısı gösteriyor mu?", () => {
    cy.get('form').submit();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('İsim en az 3 karakter olmalı!');
    });
  });

  it("Doğru form submit sonrası Confirmation sayfasına yönlendiriyor", () => {
    cy.get('input[name="isim"]').type('Şeyma');
    cy.get('input[name="boyut"][value="orta"]').check({ force: true });
    cy.get('select[name="hamur"]').select('orta');
    cy.get('input[type="checkbox"]').check(['Pepperoni', 'Sosis', 'Mısır', 'Ananas'], { force: true });

    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 200,
      body: { success: true, orderId: 12345 }
    });

    cy.get('form').submit();

    cy.url().should('include', '/confirmation');
    cy.contains('SİPARİŞ ALINDI').should('be.visible');
  });
});
