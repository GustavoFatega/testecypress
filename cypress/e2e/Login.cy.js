describe('validar Login', () => {
    beforeEach(() => {
        cy.visit('https://mantis-prova.base2.com.br/my_view_page.php');
    });

    it('Validar tela de login', () => {
        cy.get('#username').type('Gustavo_fatega')
        cy.get('.width-40').click()
        cy.get('#password').click()
        cy.get('#password').type('Grz4c4yg')
        cy.get('.width-40').click()


        cy.wait(5000)


            cy.get('#unassigned > .widget-header > .widget-title > .white').and('have.text', 'Não Atribuídos')
            cy.get('#reported > .widget-header > .widget-title > .white').and('have.text', 'Relatados por Mim')
            cy.get('#resolved > .widget-header > .widget-title > .white').and('have.text', 'Resolvidos')
            cy.get('#recent_mod > .widget-header > .widget-title > .white').and('have.text', 'Modificados Recentemente (30 Dias)')
            cy.get('#monitored > .widget-header > .widget-title > .white').and('have.text', 'Monitorados por Mim')

            cy.get(':nth-child(3) > a > .menu-icon').click() 
            cy.get('#category_id').select(1)
            cy.get('.widget-toolbox > .btn').click()
            cy.get('#summary').type('Teste teste')    
            cy.get('.widget-toolbox > .btn').click()
            cy.get('#description').type('Teste teste')    
            cy.get('.widget-toolbox > .btn').click()

            cy.get(':nth-child(2) > a > .menu-icon').click()
            cy.get(':nth-child(2) > .column-id > a').click()
            cy.get('#tag_string').type('validado')
            cy.get('#tag_select').select(5)
            cy.get('.widget-toolbox > .btn').click()

            cy.get(':nth-child(2) > a > .menu-icon').click()
            cy.get(':nth-child(2) > a > .menu-icon').click()
            cy.get(':nth-child(2) > a > .menu-icon').click()


    });

});