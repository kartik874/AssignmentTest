///<reference types='cypress'/>
describe('Login Credentials',()=>{
    it.skip('Login With valid credentials',()=>{
        cy.visit('https://dev.deepthought.education/login')
        cy.get('#username').type('kartikpardeshi7@gmail.com ')
        cy.get('#password').type('Kp@2909')
        cy.get('#login').click()
        cy.get('h5[class="bold-font mb-4"]').should('contain',"Welcome to DeepThought")

    })
    it('Login With Invalid credentials',()=>{
        cy.visit('https://dev.deepthought.education/login')
        cy.get('#username').type('kartikpardeshi7@gmail.com ')
        cy.get('#password').type('KP@2909')
        cy.get('#login').click()
        cy.get('#login-error-notify > p').should("have.text","Invalid login credentials")

    })
    })
    