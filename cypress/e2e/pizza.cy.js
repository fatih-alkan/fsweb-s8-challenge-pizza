describe('Pizza Sipariş Testleri', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/SiparisForm');
    });

    it('Inputa not girer', () => {
        cy.get('textarea[name="not"]').type('Ekstra sos lütfen');
    });

    it('Birden fazla malzeme seçer', () => {
        cy.get('input[name="Pepperoni"]').check({ force: true });
        cy.get('input[name="Mısır"]').check({ force: true });
        cy.get('input[name="Sucuk"]').check({ force: true });
    });

    it('Formu gönderir', () => {
        cy.get('input[value="M"]').check({ force: true });
        cy.get('select[name="hamur"]').select('İnce');
        cy.get('input[name="Pepperoni"]').check({ force: true });
        cy.get('textarea[name="not"]').type('Hızlı teslimat olsun');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/SiparisOnay');
        cy.contains('SİPARİŞ ALINDI').should('exist');
    });
});
